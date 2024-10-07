import { Route, Routes } from 'react-router-dom';

import { routes } from './routes';
import { Main } from '../pages/Main';
import { NotFound } from '../pages/NotFound';

export const AppRouter = (): JSX.Element => {
  return (
    <Routes>
      <Route index element={<Main />} />
      <Route path="*" element={<NotFound />} />
      {routes.map(({ path, Page }) => (
        <Route path={path} key={path} element={<Page />} />
      ))}
    </Routes>
  );
};
