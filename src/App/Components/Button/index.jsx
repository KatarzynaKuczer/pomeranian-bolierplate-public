import './styles.css';

// variant value (only text) - primary, secondary, tertiary

export const Button = ({
  children,
  onClick,
  // domyślny wariant, który się wyświetli, kiedy go nie wpiszemy potem:
  variant = 'primary',
  ...otherProps
}) => {
  return (
    <button
      className={`main-button main-button-${variant}`}
      onClick={onClick}
      {...otherProps}
    >
      {children}
    </button>
  );
};
