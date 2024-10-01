import { ToggleTheme } from '../toggleTheme/ToggleTheme';
import './Header.css';

export const Header: React.FC = () => {
  return (
    <header className="header">
      <ToggleTheme />
      <div className="taskInfo ">
        <h2 className="headerTitle">React practice: </h2>
        <p className="subTitle">004-task-context</p>
      </div>
    </header>
  );
};
