import RiveButton from './RiveButton';

type AddButtonProps = {
  onClick: () => void;
};

const AddButton = ({ onClick }: AddButtonProps) => {
  return (
    <RiveButton
      ariaLabel="Add Water"
      className="w-16 h-16 mr-4"
      file="/majibuddy.riv"
      stateMachines={['State Machine 1']}
      artboard="add"
      onClick={() => onClick()}
    />
  );
};

export default AddButton;
