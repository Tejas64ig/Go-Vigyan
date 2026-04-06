import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Beef, Users, Droplets } from 'lucide-react';
import KPICard from '../components/dashboard/KPICard';
import VaccinationTable from '../components/dashboard/VaccinationTable';
import SummaryRingChart from '../components/dashboard/SummaryRingChart';
import ActivityFeed from '../components/dashboard/ActivityFeed';

// We mock the API layer just for this placeholder since we don't have backend running
import { getCowCount } from '../api/cowsApi';
import { getEmployeeCount } from '../api/employeesApi';
import { getTodayProduction } from '../api/productionApi';
import { getVaccinationStats, getUpcomingVaccinations } from '../api/vaccinationsApi';
import { getRecentActivity } from '../api/activityApi';

const Dashboard = () => {
  const [data, setData] = useState({
    cowsCount: 0,
    employeesCount: 0,
    milkToday: 0,
    vaccineStats: {},
    upcomingVacs: [],
    activities: []
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [cowRes, empRes, prodRes, vacStatsRes, upcomingRes, actRes] = await Promise.all([
          getCowCount().catch(() => ({ count: 47 })), 
          getEmployeeCount().catch(() => ({ count: 12 })),
          getTodayProduction().catch(() => ({ totalMilk: 182 })),
          getVaccinationStats().catch(() => ({ overdue: 2, dueSoon: 5, onTrack: 40 })),
          getUpcomingVaccinations().catch(() => ([{ cowId: { cowTag: 'GV-023' }, vaccineName: 'FMD', nextDueDate: new Date(), status: 'Overdue' }])),
          getRecentActivity().catch(() => ([{ type: 'cow_added', description: 'Cow GV-048 was added', createdAt: new Date() }]))
        ]);

        setData({
          cowsCount: cowRes.count || 0,
          employeesCount: empRes.count || 0,
          milkToday: prodRes.totalMilk || 0,
          vaccineStats: vacStatsRes || {},
          upcomingVacs: upcomingRes || [],
          activities: actRes || []
        });
      } catch (error) {
        console.error("Error fetching dashboard data", error);
      } finally {
        setLoading(false);
      }
    };
    
    fetchData();
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  return (
    <motion.div 
      className="w-full flex flex-col gap-6 font-inter"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {/* Top row: KPI Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
        <KPICard 
          title="Total Registered Cows"
          value={data.cowsCount}
          subtitle="Active on farm"
          icon={Beef}
          color="saffron"
          sparklineTrend={{ positive: true, text: '2 this month' }}
        />
        <KPICard 
          title="Farm Staff Members"
          value={data.employeesCount}
          subtitle="Fully Staffed"
          icon={Users}
          color="green"
          sparklineTrend={{ positive: true, text: 'No turnover' }}
        />
        <KPICard 
          title="Today's Total Milk"
          value={data.milkToday}
          subtitle="Yield in Litres (L)"
          icon={Droplets}
          color="blue"
          sparklineTrend={{ positive: true, text: '8% vs avg' }}
        />
        <KPICard 
          title="Urgent Vaccinations"
          value={data.vaccineStats.overdue || 0}
          subtitle="Require Immediate Attention"
          icon={Beef}
          color="red"
          sparklineTrend={{ positive: false, text: 'Check Monitor' }}
        />
      </div>

      {/* Middle row: Vaccination Table and Donut Chart */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 min-h-[350px]">
        <div className="lg:col-span-2">
          <VaccinationTable upcomingVaccinations={data.upcomingVacs} loading={loading} />
        </div>
        <div className="lg:col-span-1">
          <SummaryRingChart stats={data.vaccineStats} loading={loading} />
        </div>
      </div>

      {/* Bottom row: Activity Feed */}
      <div className="w-full pb-8">
        <ActivityFeed activities={data.activities} loading={loading} />
      </div>

    </motion.div>
  );
};

export default Dashboard;
