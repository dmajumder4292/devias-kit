/* eslint-disable react/no-multi-comp */
/* eslint-disable react/display-name */
import React, { lazy } from 'react';
import { Redirect } from 'react-router-dom';
import AuthLayout from './layouts/Auth';
import ErrorLayout from './layouts/Error';
import DashboardLayout from './layouts/Dashboard';
import DashboardAnalyticsView from './views/DashboardAnalytics';
import DashboardDefaultView from './views/DashboardDefault';
import OverviewView from './views/Overview';
import PresentationView from './views/Presentation';

export default [
  {
    path: '/',
    exact: true,
    component: () => <Redirect to="/presentation" />
  },
  {
    path: '/auth',
    component: AuthLayout,
    routes: [
      {
        path: '/auth/login',
        exact: true,
        component: lazy(() => import('src/views/Login'))
      },
      {
        path: '/auth/register',
        exact: true,
        component: lazy(() => import('src/views/Register'))
      },
      {
        component: () => <Redirect to="/errors/error-404" />
      }
    ]
  },
  {
    path: '/errors',
    component: ErrorLayout,
    routes: [
      {
        path: '/errors/error-401',
        exact: true,
        component: lazy(() => import('src/views/Error401'))
      },
      {
        path: '/errors/error-404',
        exact: true,
        component: lazy(() => import('src/views/Error404'))
      },
      {
        path: '/errors/error-500',
        exact: true,
        component: lazy(() => import('src/views/Error500'))
      },
      {
        component: () => <Redirect to="/errors/error-404" />
      }
    ]
  },
  {
    route: '*',
    component: DashboardLayout,
    routes: [
      {
        path: '/calendar',
        exact: true,
        component: lazy(() => import('src/views/Calendar'))
      },
      {
        path: '/changelog',
        exact: true,
        component: lazy(() => import('src/views/Changelog'))
      },
      {
        path: '/chat',
        exact: true,
        component: lazy(() => import('src/views/Chat'))
      },
      {
        path: '/chat/:id',
        exact: true,
        component: lazy(() => import('src/views/Chat'))
      },
      {
        path: '/components/buttons',
        exact: true,
        component: lazy(() => import('src/views/Buttons'))
      },
      {
        path: '/components/cards',
        exact: true,
        component: lazy(() => import('src/views/Cards'))
      },
      {
        path: '/components/chips',
        exact: true,
        component: lazy(() => import('src/views/Chips'))
      },
      {
        path: '/components/forms',
        exact: true,
        component: lazy(() => import('src/views/Forms'))
      },
      {
        path: '/components/lists',
        exact: true,
        component: lazy(() => import('src/views/Lists'))
      },
      {
        path: '/components/modals',
        exact: true,
        component: lazy(() => import('src/views/Modals'))
      },
      {
        path: '/components/typography',
        exact: true,
        component: lazy(() => import('src/views/Typography'))
      },
      {
        path: '/dashboards/analytics',
        exact: true,
        component: DashboardAnalyticsView
      },
      {
        path: '/dashboards/default',
        exact: true,
        component: DashboardDefaultView
      },
      {
        path: '/invoices/:id',
        exact: true,
        component: lazy(() => import('src/views/InvoiceDetails'))
      },
      {
        path: '/kanban-board',
        exact: true,
        component: lazy(() => import('src/views/KanbanBoard'))
      },
      {
        path: '/mail',
        exact: true,
        component: lazy(() => import('src/views/Mail'))
      },
      {
        path: '/management/customers',
        exact: true,
        component: lazy(() => import('src/views/CustomerManagementList'))
      },
      {
        path: '/management/customers/:id',
        exact: true,
        component: lazy(() => import('src/views/CustomerManagementDetails'))
      },
      {
        path: '/management/customers/:id/:tab',
        exact: true,
        component: lazy(() => import('src/views/CustomerManagementDetails'))
      },
      {
        path: '/management/projects',
        exact: true,
        component: lazy(() => import('src/views/ProjectManagementList'))
      },
      {
        path: '/management/orders',
        exact: true,
        component: lazy(() => import('src/views/OrderManagementList'))
      },
      {
        path: '/management/orders/:id',
        exact: true,
        component: lazy(() => import('src/views/OrderManagementDetails'))
      },
      {
        path: '/overview',
        exact: true,
        component: OverviewView
      },
      {
        path: '/presentation',
        exact: true,
        component: PresentationView
      },
      {
        path: '/profile/:id',
        exact: true,
        component: lazy(() => import('src/views/Profile'))
      },
      {
        path: '/profile/:id/:tab',
        exact: true,
        component: lazy(() => import('src/views/Profile'))
      },
      {
        path: '/projects/create',
        exact: true,
        component: lazy(() => import('src/views/ProjectCreate'))
      },
      {
        path: '/projects/:id',
        exact: true,
        component: lazy(() => import('src/views/ProjectDetails'))
      },
      {
        path: '/projects/:id/:tab',
        exact: true,
        component: lazy(() => import('src/views/ProjectDetails'))
      },
      {
        path: '/projects',
        exact: true,
        component: lazy(() => import('src/views/ProjectList'))
      },
      {
        path: '/settings',
        exact: true,
        component: lazy(() => import('src/views/Settings'))
      },
      {
        path: '/settings/:tab',
        exact: true,
        component: lazy(() => import('src/views/Settings'))
      },
      {
        path: '/social-feed',
        exact: true,
        component: lazy(() => import('src/views/SocialFeed'))
      },
      {
        path: '/getting-started',
        exact: true,
        component: lazy(() => import('src/views/GettingStarted'))
      },
      {
        component: () => <Redirect to="/errors/error-404" />
      }
    ]
  }
];
