import clsx from 'clsx';

type IconButtonProps = {
  icon: React.ReactNode;
  onClick?: () => void;
  className?: string;
  title?: string;
};

const IconButton = ({ icon, onClick, className, title }: IconButtonProps) => {
  return (
    <button
      className={clsx(
        'p-2 rounded-full focus:outline-none hover:bg-blue-100',
        className,
      )}
      onClick={onClick}
      title={title}
    >
      {icon}
    </button>
  );
};

export default IconButton;
