import { Route, Routes } from 'react-router-dom';

import { routes } from './routes';
import { Main } from '../pages/Main';

export const AppRouter = (): JSX.Element => {
  return (
    <Routes>
      <Route index element={<Main />} />
      {routes.map(({ path, Page }) => (
        <Route path={path} key={path} element={<Page />} />
      ))}
    </Routes>
  );
};
