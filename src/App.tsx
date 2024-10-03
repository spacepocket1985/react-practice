import { BrowserRouter as Router } from 'react-router-dom';

import { MainLayout } from './components/layout/MainLayout';

const App: React.FC = () => {
  return (
    <Router>
      <MainLayout />
    </Router>
  );
};

export default App;
