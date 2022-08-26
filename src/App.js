import { Navigate, Route, Routes } from 'react-router-dom';
import './App.scss';
import { routesForRender } from './router/routesForRender';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from './firebaseConfig';
import ProtectedRoute from './components/ProtectedRoute/ProtectedRoute';
import LoadingSpinner from './components/UI/LoadingSpinner/LoadingSpinner';

function App() {
  const [user, loading] = useAuthState(auth);

  if (loading) {
    return <LoadingSpinner />;
  }
  return (
    <div className="App">
      <Routes>
        {routesForRender.map((route) =>
          route.isPrivate ? (
            <Route
              key={route.key}
              path={route.path}
              element={
                <ProtectedRoute user={user}>
                  <route.element />
                </ProtectedRoute>
              }
            />
          ) : (
            <Route key={route.key} path={route.path} element={<route.element />} />
          ),
        )}
        <Route path="*" element={<Navigate to={'/login'} />} />
      </Routes>
    </div>
  );
}

export default App;
