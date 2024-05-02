import { createBrowserRouter } from 'react-router-dom';

import { ROUTES } from '@constants/routes.constant';
import { Layout } from '@layouts/Layout';
import { Home } from '@pages/Home';
import { About } from '@pages/About';

/**
 * Create and configure the application router.
 * @param {Array} routes - An array of route configurations.
 * @returns {Object} The configured router.
 */
export const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: ROUTES.home,
        element: <Home />,
      },
      {
        path: ROUTES.about,
        element: <About />,
      },
      // TODO: Will update (if required)
      // {
      //   path: '*',
      //   element: <PageNotFound />,
      // },
    ],
  },
]);
