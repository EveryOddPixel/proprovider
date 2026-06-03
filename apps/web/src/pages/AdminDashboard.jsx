import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { Download, Filter } from 'lucide-react';
import { db } from '@/lib/firebaseClient';
import { collection, getDocs, query, orderBy } from 'firebase/firestore';
import { branding } from '@/config/branding';
import { Button } from '@/components/ui/button';
import { Table, TableHeader, TableBody, TableRow, TableHead, TableCell } from '@/components/ui/table';
import { useToast } from '@/components/ui/use-toast';

const AdminDashboard = () => {
  const [leads, setLeads] = useState([]);
  const [filteredLeads, setFilteredLeads] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [statusFilter, setStatusFilter] = useState('all');
  const { toast } = useToast();

  useEffect(() => {
    fetchLeads();
  }, []);

  useEffect(() => {
    if (statusFilter === 'all') {
      setFilteredLeads(leads);
    } else {
      setFilteredLeads(leads.filter(lead => lead.status === statusFilter));
    }
  }, [statusFilter, leads]);

  const fetchLeads = async () => {
    try {
      const q = query(collection(db, 'leads'), orderBy('created', 'desc'));
      const snapshot = await getDocs(q);
      const items = snapshot.docs.map((doc) => {
        const data = doc.data();
        return {
          id: doc.id,
          ...data,
          created: data.created?.toDate?.()?.toISOString() ?? new Date().toISOString(),
        };
      });
      setLeads(items);
      setFilteredLeads(items);
    } catch (error) {
      console.error('Failed to fetch leads:', error);
      toast({
        title: 'Error',
        description: 'Failed to load leads',
        variant: 'destructive'
      });
    } finally {
      setIsLoading(false);
    }
  };

  const exportToCSV = () => {
    if (filteredLeads.length === 0) {
      toast({
        title: 'No Data',
        description: 'No leads to export',
        variant: 'destructive'
      });
      return;
    }

    const headers = ['Name', 'Email', 'Phone', 'Provider Type', 'States', 'Needs', 'Urgency', 'Status', 'Created'];
    const csvData = filteredLeads.map(lead => [
      lead.name,
      lead.email,
      lead.phone || '',
      lead.providerType,
      Array.isArray(lead.states) ? lead.states.join('; ') : '',
      Array.isArray(lead.needs) ? lead.needs.join('; ') : '',
      lead.urgency || '',
      lead.status || 'new',
      new Date(lead.created).toLocaleDateString()
    ]);

    const csvContent = [
      headers.join(','),
      ...csvData.map(row => row.map(cell => `"${cell}"`).join(','))
    ].join('\n');

    const blob = new Blob([csvContent], { type: 'text/csv' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `leads-${new Date().toISOString().split('T')[0]}.csv`;
    link.click();
    URL.revokeObjectURL(url);

    toast({
      title: 'Success',
      description: 'Leads exported successfully'
    });
  };

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
  };

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-brand-600 mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading leads...</p>
        </div>
      </div>
    );
  }

  return (
    <>
      <Helmet>
        <title>{`Admin Dashboard - ${branding.companyName}`}</title>
        <meta name="description" content="Admin dashboard for managing leads" />
      </Helmet>

      <div className="py-8 bg-gray-50 min-h-screen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Admin Dashboard</h1>
            <p className="text-gray-600">Manage and export leads from the intake form</p>
          </div>

          {/* Filters and Actions */}
          <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div className="flex items-center gap-4">
                <Filter className="w-5 h-5 text-gray-500" />
                <select
                  value={statusFilter}
                  onChange={(e) => setStatusFilter(e.target.value)}
                  className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-500 bg-white text-gray-900"
                >
                  <option value="all">All Statuses</option>
                  <option value="new">New</option>
                  <option value="contacted">Contacted</option>
                  <option value="qualified">Qualified</option>
                  <option value="closed">Closed</option>
                </select>
                <span className="text-sm text-gray-600">
                  {filteredLeads.length} {filteredLeads.length === 1 ? 'lead' : 'leads'}
                </span>
              </div>

              <Button
                onClick={exportToCSV}
                className="bg-brand-600 hover:bg-brand-700 text-white flex items-center gap-2"
              >
                <Download className="w-4 h-4" />
                Export to CSV
              </Button>
            </div>
          </div>

          {/* Leads Table */}
          <div className="bg-white rounded-lg shadow-sm overflow-hidden">
            {filteredLeads.length === 0 ? (
              <div className="text-center py-12">
                <p className="text-gray-500">No leads found</p>
              </div>
            ) : (
              <div className="overflow-x-auto">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Name</TableHead>
                      <TableHead>Email</TableHead>
                      <TableHead>Provider Type</TableHead>
                      <TableHead>States</TableHead>
                      <TableHead>Needs</TableHead>
                      <TableHead>Urgency</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead>Created</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {filteredLeads.map((lead) => (
                      <TableRow key={lead.id}>
                        <TableCell className="font-medium">{lead.name}</TableCell>
                        <TableCell>{lead.email}</TableCell>
                        <TableCell>{lead.providerType}</TableCell>
                        <TableCell>
                          {Array.isArray(lead.states) && lead.states.length > 0
                            ? lead.states.slice(0, 2).join(', ') + (lead.states.length > 2 ? '...' : '')
                            : '-'}
                        </TableCell>
                        <TableCell>
                          {Array.isArray(lead.needs) && lead.needs.length > 0
                            ? lead.needs.slice(0, 2).join(', ') + (lead.needs.length > 2 ? '...' : '')
                            : '-'}
                        </TableCell>
                        <TableCell>{lead.urgency || '-'}</TableCell>
                        <TableCell>
                          <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                            lead.status === 'new' ? 'bg-blue-100 text-blue-800' :
                            lead.status === 'contacted' ? 'bg-yellow-100 text-yellow-800' :
                            lead.status === 'qualified' ? 'bg-green-100 text-green-800' :
                            'bg-gray-100 text-gray-800'
                          }`}>
                            {lead.status || 'new'}
                          </span>
                        </TableCell>
                        <TableCell>{formatDate(lead.created)}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default AdminDashboard;