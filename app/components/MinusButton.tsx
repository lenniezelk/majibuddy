import RiveButton from './RiveButton';

interface MinusButtonProps {
  onClick: () => void;
}

const MinusButton = ({ onClick }: MinusButtonProps) => {
  return (
    <RiveButton
      ariaLabel="Reduce Water"
      className="w-16 h-16 ml-4"
      file="/majibuddy.riv"
      stateMachines={['State Machine 1']}
      artboard="minus"
      onClick={() => onClick()}
    />
  );
};

export default MinusButton;
