import { Alignment, Fit, Layout, useRive } from "@rive-app/react-canvas";
import clsx from "clsx";

interface RiveButtonProps {
  onClick: () => void;
  file: string;
  stateMachines: string[];
  artboard: string;
  ariaLabel?: string;
  className?: string;
}

const RiveButton = ({
  ariaLabel,
  className,
  onClick,
  file,
  stateMachines,
  artboard,
}: RiveButtonProps) => {
  const { RiveComponent } = useRive({
    src: file,
    stateMachines: stateMachines,
    artboard: artboard,
    autoplay: true,
    layout: new Layout({
      fit: Fit.Contain,
      alignment: Alignment.Center,
    }),
  });
  return (
    <button
      aria-label={ariaLabel}
      className={clsx(["border-0 cursor-pointer", className])}
      onClick={onClick}
    >
      <RiveComponent />
    </button>
  );
};

export default RiveButton;
