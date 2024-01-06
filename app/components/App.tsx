import { CupSoda } from "lucide-react";

import AddButton from "~/components/AddButton";
import BuddyWidget from "~/components/BuddyWidget";
import CupSizeSelect from "~/components/CupSizeSelect";
import EditDailyGoal from "~/components/EditDailyGoal";
import Info from "~/components/Info";
import MinusButton from "~/components/MinusButton";
import Waba from "~/components/Waba";
import { mlToCups, mlToLitres, useData } from "~/utils";

const App = () => {
  const { current, cupSize, dailyGoal, setData } = useData();

  const level = (current / dailyGoal) * 100;

  const onAddButtonClick = () => {
    let newCurrent = current + cupSize;
    if (newCurrent > dailyGoal) {
      newCurrent = dailyGoal;
    }
    setData("current", newCurrent);
  };

  const onMinusButtonClick = () => {
    let newCurrent = current - cupSize;
    if (newCurrent < 0) {
      newCurrent = 0;
    }
    setData("current", newCurrent);
  };

  return (
    <>
      <div>
        <div className="flex items-center justify-center pt-4">
          <Waba />
        </div>
        <h1 className="text-5xl text-blue-400 font-bold mt-7 text-center">
          Track your water intake.
        </h1>
        <div className="flex items-center mt-8 flex-col">
          <div>
            <Info
              dailyGoal={{
                cups: mlToCups(dailyGoal, cupSize),
                litres: mlToLitres(dailyGoal),
              }}
              current={{
                cups: mlToCups(current, cupSize),
                litres: mlToLitres(current),
              }}
            />
            <div className="mt-2 flex items-center">
              <CupSoda className="text-blue-500 mr-1" />
              <CupSizeSelect
                onSelect={(size) => setData("cupSize", size)}
                value={cupSize}
              />
            </div>
          </div>
          <div className="mt-8 flex items-center">
            <AddButton onClick={onAddButtonClick} />
            <BuddyWidget level={level} />
            <MinusButton onClick={onMinusButtonClick} />
          </div>
        </div>
      </div>
      <EditDailyGoal
        initialValue={dailyGoal}
        onSave={(value) => setData("dailyGoal", value)}
      />
    </>
  );
};

export default App;
