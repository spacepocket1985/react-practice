import { Theme, useTheme } from '../../context/ThemeContext';
import './ToggleTheme.css';

export const ToggleTheme: React.FC = () => {
  const { toggleTheme, theme } = useTheme();
  const btnStyle =
    theme === Theme.Light
      ? `toggleBtn toggle${Theme.Light}`
      : `toggleBtn toggle${Theme.Dark}`;
  return (
    <div className="toggleWrapper">
      <button className={btnStyle} onClick={toggleTheme}>
        {theme}
      </button>
    </div>
  );
};
