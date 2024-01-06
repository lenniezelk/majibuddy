import { useState } from 'react';

type EditDailyGoalProps = {
  initialValue: number;
  onSave: (value: number) => void;
};

const EditDailyGoal = ({ initialValue, onSave }: EditDailyGoalProps) => {
  const [value, setValue] = useState(initialValue);

  return (
    <dialog id="edit-daily-goal" className="modal">
      <div className="modal-box">
        <h3 className="font-bold text-lg mb-2">Edit Daily Goal</h3>
        <input
          className="input input-bordered w-full mb-2"
          type="number"
          value={value}
          onChange={(e) => setValue(parseInt(e.target.value, 10))}
        />
        <div className="modal-action">
          <form method="dialog">
            <button className="btn">Cancel</button>
            <button
              className="btn btn-primary ml-4"
              onClick={() => onSave(value)}
            >
              Save
            </button>
          </form>
        </div>
      </div>
    </dialog>
  );
};

export default EditDailyGoal;
