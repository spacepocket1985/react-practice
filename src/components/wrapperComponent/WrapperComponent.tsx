import './WrapperComponent.css';

type WrapperProps = {
  children: React.ReactNode;
  indicator?: string;
};

export const WrapperComponent: React.FC<WrapperProps> = ({
  children,
  indicator,
}) => {
  return (
    <div className="wrapperComponent">
      <p className="indicator">{indicator}</p>
      {children}
    </div>
  );
};
