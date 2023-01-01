import type { FC } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { css } from '@emotion/css';
import { Helmet } from 'react-helmet-async';
import Home from 'components/templates/Home';

const appTitle = import.meta.env.VITE_APP_TITLE;

const style = css`width: 700px;margin:auto;padding:16px 0;`

const IndexRoutes: FC = () => (
  <Routes>
    <Route path="/" element={
      <div className={style}>
        <Helmet>
          <title>{appTitle}</title>
        </Helmet>
        <Home pageTitle={appTitle} />
      </div>
    } />
    <Route path="*" element={<Navigate to="/" replace />} />
  </Routes>
);

export default IndexRoutes;
