import type { FC } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import Home from 'components/templates/Home';

const appTitle = import.meta.env.VITE_APP_TITLE;

const IndexRoutes: FC = () => (
  <Routes>
    <Route path="/" element={
      <>
        <Helmet>
          <title>{appTitle}</title>
        </Helmet>
        <Home pageTitle={appTitle} />
      </>
    } />
    <Route path="*" element={<Navigate to="/" replace />} />
  </Routes>
);

export default IndexRoutes;
