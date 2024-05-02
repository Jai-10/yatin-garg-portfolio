import { RouterProvider } from 'react-router-dom';

import { router } from '@routes/routes';

/**
 * The main application component.
 * @returns {JSX} - The root component of the application.
 */
export const App = () => <RouterProvider router={router} />;
