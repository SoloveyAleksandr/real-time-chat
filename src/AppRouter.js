import { Route, Routes, Navigate } from 'react-router-dom';
import { privetRoutes, publicRoutes } from './routes';
import { CHAT_ROUTE, LOGIN_ROUTE } from './utils/constants';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useContext } from 'react';
import { Context } from '.';

function AppRouter() {
  const { auth } = useContext(Context);
  const [user] = useAuthState(auth);

  return (
    user ?
      (
        <Routes>
          {privetRoutes.map(({ path, Component }) =>
            <Route key={path} path={path} element={<Component />} />
          )}
          <Route path='/*' element={
            <Navigate to={CHAT_ROUTE} />
          } />
        </Routes>
      )
      :
      (
        <Routes>
          {publicRoutes.map(({ path, Component }) =>
            <Route key={path} path={path} element={<Component />} />
          )}
          <Route path='/*' element={
            <Navigate to={LOGIN_ROUTE} />
          } />
        </Routes>
      )
  );
}

export default AppRouter;
