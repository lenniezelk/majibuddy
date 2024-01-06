import { MapPin, Goal, FileEdit, Edit } from 'lucide-react';
import IconButton from './IconButton';

type InfoBase = {
  cups: string;
  litres: string;
};

type InfoProps = {
  dailyGoal: InfoBase;
  current: InfoBase;
};

const Info = ({ dailyGoal, current }: InfoProps) => {
  const { cups: dailyGoalCups, litres: dailyGoalLitres } = dailyGoal;
  const { cups: currentCups, litres: currentLitres } = current;

  return (
    <div>
      <div className="flex items-center">
        <Goal className="text-blue-500 mr-1" />
        <h3 className="text-xl">
          Your Daily Goal:{' '}
          <span className="text-blue-500 font-bold">
            {dailyGoalCups} Cups({dailyGoalLitres}L)
          </span>
        </h3>
        <IconButton
          icon={<FileEdit className="text-blue-500" />}
          className="ml-1"
          title="Edit your daily goal"
          onClick={() => {
            const elem = document.getElementById(
              'edit-daily-goal',
            ) as HTMLDialogElement;
            if (elem) {
              elem.showModal();
            }
          }}
        />
      </div>
      <div className="flex items-center">
        <MapPin className="text-blue-500 mr-1" />

        <h3 className="text-xl pt-1">
          You are currently at:{' '}
          <span className="text-blue-500 font-bold">
            {currentCups} Cups({currentLitres}L)
          </span>
        </h3>
      </div>
    </div>
  );
};

export default Info;
