import AppDevelopmentPage from "../../pages/AppDevelopment/AppDevelopment";
import TechnologyConsultantPage from "../../pages/Consulting/TechnologyConsulting";
import {
    createBrowserRouter,
  } from "react-router-dom";
import HomePage from "../../pages/HomePage/HomePage";
import ItemStaffing from "../../pages/ItStaffing/ItStaffing";
import DataAnalyticsPage from "../../pages/DataAnalytics/DataAnalyticsPage";
import WebDevelopmentPage from "../../pages/WebDevelopment/WebDevelopmentPage";
import CTOasServicePage from "../../pages/CTOasService/CTOasServicePage";
import TechnologyToolkitPage from "../../pages/TechnologyToolkit/TechnologyToolkit";
import AnimationTrailPage from "../../pages/AnimationTrail";
import Layout from "../../pages/Layout";

export const BroswerRoute = createBrowserRouter([
    {
        path: "/",
        element: <HomePage />
    },
    {
        path: "/app-development",
        element: <AppDevelopmentPage />,
    },
    {
        path:'/techno-consultant',
        element: <TechnologyConsultantPage />
    },
    {
        path:'/it-staffing',
        element: <ItemStaffing />
    },
    {
        path:'/data-analytics',
        element: <DataAnalyticsPage />
    },
    {
        path:'/web-development',
        element: <WebDevelopmentPage />
    },
    {
        path:'/cto-as-a-service',
        element: <CTOasServicePage />
    },
    {
        path:'/technology-toolkit',
        element: <TechnologyToolkitPage />
    },
]);