import React from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from './Sidebar';
import BottomTabBar from './BottomTabBar';
import PageLayout from './PageLayout';
import TopHeader from './TopHeader';

const DashboardLayout = () => {
  return (
    <>
      <Sidebar />
      <BottomTabBar />
      <PageLayout>
        <TopHeader />
        <main className="w-full flex-grow relative z-10 px-4 lg:px-8 py-6">
          <Outlet />
        </main>
      </PageLayout>
    </>
  );
};

export default DashboardLayout;
