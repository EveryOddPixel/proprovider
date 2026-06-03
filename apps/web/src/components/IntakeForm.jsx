import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { ChevronRight, ChevronLeft, CheckCircle2, AlertTriangle } from 'lucide-react';
import { db } from '@/lib/firebaseClient';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Checkbox } from '@/components/ui/checkbox';
import { useToast } from '@/components/ui/use-toast';

const formSchema = z.object({
  name: z.string().min(1, 'Name is required'),
  email: z.string().email('Invalid email address'),
  phone: z.string().optional(),
  providerType: z.string().min(1, 'Provider type is required'),
  states: z.array(z.string()).optional(),
  needs: z.array(z.string()).optional(),
  urgency: z.string().optional(),
  message: z.string().optional(),
  consent: z.boolean().refine(val => val === true, 'You must consent to be contacted'),
  honeypot: z.string().max(0, 'Invalid submission')
});

const IntakeForm = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const navigate = useNavigate();
  const { toast } = useToast();

  const {
    register,
    handleSubmit,
    watch,
    setValue,
    trigger,
    formState: { errors }
  } = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      states: [],
      needs: [],
      consent: false,
      honeypot: ''
    }
  });

  const totalSteps = 7;

  // Required fields per step, so we can validate before advancing and so a failed
  // submit can jump back to the offending step (errors only render on their own step).
  const stepFields = {
    1: ['name', 'email'],
    2: ['providerType'],
    3: [],
    4: [],
    5: [],
    6: [],
    7: ['consent'],
  };

  const watchedStates = watch('states') || [];
  const watchedNeeds = watch('needs') || [];
  const watchedConsent = watch('consent') || false;

  const providerTypes = [
    'Physician (MD/DO)',
    'Nurse Practitioner (NP)',
    'Physician Assistant (PA)',
    'Dentist (DDS/DMD)',
    'Pharmacy/Pharmacy Technicians',
    'Other'
  ];

  const statesList = [
    'Alabama', 'Alaska', 'Arizona', 'Arkansas', 'California', 'Colorado', 'Connecticut',
    'Delaware', 'Florida', 'Georgia', 'Hawaii', 'Idaho', 'Illinois', 'Indiana', 'Iowa',
    'Kansas', 'Kentucky', 'Louisiana', 'Maine', 'Maryland', 'Massachusetts', 'Michigan',
    'Minnesota', 'Mississippi', 'Missouri', 'Montana', 'Nebraska', 'Nevada', 'New Hampshire',
    'New Jersey', 'New Mexico', 'New York', 'North Carolina', 'North Dakota', 'Ohio',
    'Oklahoma', 'Oregon', 'Pennsylvania', 'Rhode Island', 'South Carolina', 'South Dakota',
    'Tennessee', 'Texas', 'Utah', 'Vermont', 'Virginia', 'Washington', 'West Virginia',
    'Wisconsin', 'Wyoming'
  ];

  const needsOptions = [
    'Initial Credentialing',
    'Reinstatement Enrollment',
    'Renewal Support',
    'Privileging Support',
    'Notary'
  ];

  const urgencyOptions = [
    'Urgent (ASAP)',
    '1-3 months',
    '3-6 months',
    '6+ months'
  ];

  const handleStateToggle = (state) => {
    const current = watchedStates;
    if (current.includes(state)) {
      setValue('states', current.filter(s => s !== state));
    } else {
      setValue('states', [...current, state]);
    }
  };

  const handleNeedToggle = (need) => {
    const current = watchedNeeds;
    if (current.includes(need)) {
      setValue('needs', current.filter(n => n !== need));
    } else {
      setValue('needs', [...current, need]);
    }
  };

  const onSubmit = async (data) => {
    setIsSubmitting(true);
    try {
      await addDoc(collection(db, 'leads'), {
        name: data.name,
        email: data.email,
        phone: data.phone || '',
        providerType: data.providerType,
        states: data.states || [],
        needs: data.needs || [],
        urgency: data.urgency || '',
        message: data.message || '',
        consent: data.consent,
        source: 'website',
        status: 'new',
        created: serverTimestamp(),
      });

      setIsSuccess(true);
      toast({
        title: 'Success!',
        description: 'Your intake form has been submitted successfully.'
      });
    } catch (error) {
      console.error('Submission error:', error);
      toast({
        title: 'Error',
        description: 'Failed to submit form. Please try again.',
        variant: 'destructive'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const nextStep = async () => {
    const fields = stepFields[currentStep] || [];
    const valid = fields.length === 0 || (await trigger(fields));
    if (valid && currentStep < totalSteps) {
      setCurrentStep(currentStep + 1);
    }
  };

  // Safety net: if submit fails validation, send the user to the first step that
  // has an error so they can actually see and fix it.
  const onInvalid = (formErrors) => {
    const firstBadStep = Object.keys(stepFields)
      .map(Number)
      .sort((a, b) => a - b)
      .find((step) => stepFields[step].some((field) => formErrors[field]));
    if (firstBadStep) {
      setCurrentStep(firstBadStep);
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  if (isSuccess) {
    return (
      <div className="max-w-2xl mx-auto text-center py-16">
        <CheckCircle2 className="w-20 h-20 text-brand-600 mx-auto mb-6" />
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Thank You!</h2>
        <p className="text-lg text-gray-600 mb-8">
          Your intake form has been submitted successfully. We'll review your information and reach out soon.
        </p>
        <div className="space-y-4">
          <p className="text-gray-700 font-medium">Next Step: Book a Discovery Call</p>
          <Button
            onClick={() => navigate('/book-call')}
            className="bg-brand-600 hover:bg-brand-700 text-white"
          >
            Schedule Your Call
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto">
      {/* Progress Indicator */}
      <div className="mb-8">
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm font-medium text-gray-700">
            Step {currentStep} of {totalSteps}
          </span>
          <span className="text-sm text-gray-500">
            {Math.round((currentStep / totalSteps) * 100)}% Complete
          </span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2">
          <div
            className="bg-brand-600 h-2 rounded-full transition-all duration-300"
            style={{ width: `${(currentStep / totalSteps) * 100}%` }}
          />
        </div>
      </div>

      {/* Warning Banner */}
      <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mb-6 flex items-start gap-3">
        <AlertTriangle className="w-5 h-5 text-yellow-600 flex-shrink-0 mt-0.5" />
        <p className="text-sm text-yellow-800">
          <strong>Important:</strong> Do not submit sensitive medical information (PHI) through this form.
        </p>
      </div>

      <form onSubmit={handleSubmit(onSubmit, onInvalid)} className="bg-white rounded-lg shadow-md p-8">
        {/* Honeypot field (hidden) */}
        <input
          type="text"
          {...register('honeypot')}
          style={{ display: 'none' }}
          tabIndex="-1"
          autoComplete="off"
        />

        {/* Step 1: Contact Information */}
        {currentStep === 1 && (
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Contact Information</h3>
            
            <div>
              <Label htmlFor="name">Full Name *</Label>
              <Input
                id="name"
                {...register('name')}
                placeholder="John Doe"
                className="mt-1"
              />
              {errors.name && (
                <p className="text-sm text-red-600 mt-1">{errors.name.message}</p>
              )}
            </div>

            <div>
              <Label htmlFor="email">Email Address *</Label>
              <Input
                id="email"
                type="email"
                {...register('email')}
                placeholder="john@example.com"
                className="mt-1"
              />
              {errors.email && (
                <p className="text-sm text-red-600 mt-1">{errors.email.message}</p>
              )}
            </div>

            <div>
              <Label htmlFor="phone">Phone Number</Label>
              <Input
                id="phone"
                type="tel"
                {...register('phone')}
                placeholder="(555) 123-4567"
                className="mt-1"
              />
            </div>
          </div>
        )}

        {/* Step 2: Provider Type */}
        {currentStep === 2 && (
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Provider Type</h3>
            
            <div>
              <Label htmlFor="providerType">What type of provider are you? *</Label>
              <select
                id="providerType"
                {...register('providerType')}
                className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-500 bg-white text-gray-900"
              >
                <option value="">Select provider type</option>
                {providerTypes.map((type) => (
                  <option key={type} value={type}>{type}</option>
                ))}
              </select>
              {errors.providerType && (
                <p className="text-sm text-red-600 mt-1">{errors.providerType.message}</p>
              )}
            </div>
          </div>
        )}

        {/* Step 3: States */}
        {currentStep === 3 && (
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">States</h3>
            <p className="text-gray-600 mb-4">Select all states where you need credentialing support:</p>
            
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3 max-h-96 overflow-y-auto p-4 border border-gray-200 rounded-lg">
              {statesList.map((state) => (
                <div key={state} className="flex items-center">
                  <Checkbox
                    id={`state-${state}`}
                    checked={watchedStates.includes(state)}
                    onCheckedChange={() => handleStateToggle(state)}
                  />
                  <label
                    htmlFor={`state-${state}`}
                    className="ml-2 text-sm text-gray-700 cursor-pointer"
                  >
                    {state}
                  </label>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Step 4: What You Need */}
        {currentStep === 4 && (
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">What You Need</h3>
            <p className="text-gray-600 mb-4">Select all services you're interested in:</p>
            
            <div className="space-y-3">
              {needsOptions.map((need) => (
                <div key={need} className="flex items-center p-3 border border-gray-200 rounded-lg hover:bg-gray-50">
                  <Checkbox
                    id={`need-${need}`}
                    checked={watchedNeeds.includes(need)}
                    onCheckedChange={() => handleNeedToggle(need)}
                  />
                  <label
                    htmlFor={`need-${need}`}
                    className="ml-3 text-gray-700 cursor-pointer flex-1"
                  >
                    {need}
                  </label>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Step 5: Timeline */}
        {currentStep === 5 && (
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Timeline</h3>
            
            <div>
              <Label htmlFor="urgency">What's your timeline?</Label>
              <select
                id="urgency"
                {...register('urgency')}
                className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-500 bg-white text-gray-900"
              >
                <option value="">Select timeline</option>
                {urgencyOptions.map((option) => (
                  <option key={option} value={option}>{option}</option>
                ))}
              </select>
            </div>
          </div>
        )}

        {/* Step 6: Additional Notes */}
        {currentStep === 6 && (
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Additional Information</h3>
            
            <div>
              <Label htmlFor="message">Tell us more about your needs (optional)</Label>
              <Textarea
                id="message"
                {...register('message')}
                placeholder="Any additional details that would help us serve you better..."
                rows={6}
                className="mt-1"
              />
            </div>
          </div>
        )}

        {/* Step 7: Consent */}
        {currentStep === 7 && (
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Consent & Privacy</h3>
            
            <div className="flex items-start space-x-3 p-4 border border-gray-200 rounded-lg">
              <Checkbox
                id="consent"
                checked={watchedConsent}
                onCheckedChange={(checked) => setValue('consent', checked === true)}
              />
              <label htmlFor="consent" className="text-sm text-gray-700 cursor-pointer">
                I consent to be contacted by Pro Provider Credentialing, LLC regarding my inquiry. 
                I understand that my information will be handled according to the{' '}
                <a href="/privacy" target="_blank" className="text-brand-600 hover:underline">
                  Privacy Policy
                </a>.
              </label>
            </div>
            {errors.consent && (
              <p className="text-sm text-red-600">{errors.consent.message}</p>
            )}
          </div>
        )}

        {/* Navigation Buttons */}
        <div className="flex items-center justify-between mt-8 pt-6 border-t border-gray-200">
          <Button
            type="button"
            onClick={prevStep}
            disabled={currentStep === 1}
            variant="outline"
            className="flex items-center gap-2"
          >
            <ChevronLeft className="w-4 h-4" />
            Previous
          </Button>

          {currentStep < totalSteps ? (
            <Button
              type="button"
              onClick={nextStep}
              className="bg-brand-600 hover:bg-brand-700 text-white flex items-center gap-2"
            >
              Next
              <ChevronRight className="w-4 h-4" />
            </Button>
          ) : (
            <Button
              type="submit"
              disabled={isSubmitting}
              className="bg-brand-600 hover:bg-brand-700 text-white"
            >
              {isSubmitting ? 'Submitting...' : 'Submit Intake Form'}
            </Button>
          )}
        </div>
      </form>
    </div>
  );
};

export default IntakeForm;