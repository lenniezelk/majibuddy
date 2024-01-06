import {
  useRive,
  Layout,
  Fit,
  Alignment,
  useStateMachineInput,
} from "@rive-app/react-canvas";
import { useEffect } from "react";

interface BuddyWidgetProps {
  level: number;
}

const BuddyWidget = ({ level }: BuddyWidgetProps) => {
  const { RiveComponent, rive } = useRive({
    src: "/majibuddy.riv",
    stateMachines: "water bottle",
    artboard: "Water Bottle",
    autoplay: true,
    layout: new Layout({
      fit: Fit.Contain,
      alignment: Alignment.Center,
    }),
  });

  const levelInput = useStateMachineInput(rive, "water bottle", "level");

  useEffect(() => {
    if (levelInput) {
      levelInput.value = level;
    }
  }, [levelInput, level]);

  return (
    <div className="w-[400px] h-[400px]">
      <RiveComponent />
    </div>
  );
};

export default BuddyWidget;
