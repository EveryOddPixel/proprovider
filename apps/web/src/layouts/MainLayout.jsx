import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

function MainLayout() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />
      <main className="flex-1 bg-gradient-to-b from-white via-brand-50 to-brand-100">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default MainLayout;