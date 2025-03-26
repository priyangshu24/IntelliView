import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Layout Components
import { PublicLayout } from '@/layouts/public-layout';
import AuthenticationLayout from '@/layouts/auth-layout';
import { MainLayout } from '@/layouts/main-layout';
import ProtectRoutes from '@/layouts/protected-routes';

// Page Route Components
import HomePage from './routes/home';
import { SignInPage } from '@/routes/sign-in';
import { SignUpPage } from '@/routes/sign-up';

const App = () => {
  return (
    <Router>
      <Routes>
        {/* Public Routes - Accessible to everyone */}
        <Route element={<PublicLayout />}>
          <Route index element={<HomePage />} />
        </Route>

        {/* Authentication Routes - For login and registration */}
        <Route element={<AuthenticationLayout />}>
          <Route path="/signin/*" element={<SignInPage />} />
          <Route path="/signup/*" element={<SignUpPage />} />
        </Route>

        {/* Protected Routes - Requires authentication */}
        <Route
          element={
            <ProtectRoutes>
              <MainLayout />
            </ProtectRoutes>
          }
        >
          {/* Add your protected routes here */}
          <Route path="/dashboard" element={<div>Dashboard</div>} />
          {/* Example: <Route path="/profile" element={<ProfilePage />} /> */}
        </Route>
      </Routes>
    </Router>
  );
};

export default App;