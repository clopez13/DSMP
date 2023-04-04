import React from 'react';
import ReactDOM from 'react-dom/client';
import styles from './index.module.css';
import { createBrowserRouter, RouterProvider,Outlet } from 'react-router-dom';

import SideNavigation from './components/SideNavigation/SideNavigation';
import Home from './routes/Home/Home';
import Messages from './routes/Messages/Messages';
import Profile from './routes/Profile/Profile';
import Explore from './routes/Explore/Explore';
import Settings from './routes/Settings/Settings';

const AppLayout = () => {
  return (
    <div className={styles['app-layout']}>
    <header className={styles['app-layout-sidenav']}>
        <SideNavigation />
    </header>

    <main className={styles['app-layout-main']}>
        <div className={styles['app-layout-content']}>
        {/* <div className={styles['app-layout-header']}>    
        </div> */}
        <Outlet />
        </div>
    </main>
</div>
  );
};

const router = createBrowserRouter([
  {
    element: <AppLayout/>,
    children: [
      {
        path: '/',
        element: <Home/>,
      },
      {
        path: '/explore',
        element: <Explore/>,
      },
      {
        path: '/messages',
        element: <Messages/>,
      },
      {
        path: '/profile',
        element: <Profile/>
      },
      {
        path: '/settings',
        element: <Settings/>
      },

  ]
  }]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
);
