import React, { lazy } from 'react';

// project import
import MainLayout from 'layout/MainLayout';
import Loadable from 'component/Loadable';

const DashboardDefault = Loadable(lazy(() => import('../views/Dashboard')));

const UtilsTypography = Loadable(lazy(() => import('../views/Utils/Typography')));

const SamplePage = Loadable(lazy(() => import('../views/SamplePage')));

const BillsPage = Loadable(lazy(() => import("../views/Yesha Marketing/Bills")));

const CreateNewBill = Loadable(lazy(() => import("../views/Yesha Marketing/create Bill/index")));

const ListOfBills = Loadable(lazy(() => import("../views/Yesha Marketing/List Of Bill/index")));


// ==============================|| MAIN ROUTES ||============================== //

const MainRoutes = {
  path: '/',
  element: <MainLayout />,
  children: [
    {
      path: '/',
      element: <DashboardDefault />
    },
    {
      path : "/create-Bill",
      element: <CreateNewBill />
    },
    {
      path : "/Bills",
      element: <ListOfBills />
    },
    {
      path : "/Bill",
      element : <BillsPage />
    },
    {
      path: '/dashboard/default',
      element: <DashboardDefault />
    },
    { path: '/utils/util-typography', element: <UtilsTypography /> },
    { path: '/sample-page', element: <SamplePage /> }
  ]
};

export default MainRoutes;
