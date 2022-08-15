import { Route, Routes } from 'react-router-dom';
import './App.scss';
import Page404 from './components/Page404/Page404';
import { routesForRender } from './router/routesForRender';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from './firebaseConfig';
import ProtectedRoute from './components/ProtectedRoute/ProtectedRoute';

function App() {
  const [user, loading, error] = useAuthState(auth);

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
        <Route path="*" element={<Page404 />} />
      </Routes>
    </div>
  );
}

export default App;
