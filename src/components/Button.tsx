interface ButtonProps {
  children: React.ReactNode;
  onClick: () => void;
  disabled: boolean;
}
function Button({ children, onClick, disabled }: ButtonProps) {
  return (
    <button
      className="bg-blue-500 text-white border-0 rounded-md cursor-pointer py-2 px-8 m-1 active:scale-95 focus:outline-none disabled:bg-gray-400 disabled:cursor-not-allowed"
      type="button"
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
}

export default Button;
