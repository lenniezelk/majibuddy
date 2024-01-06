import {
  Alignment,
  Fit,
  Layout,
  useRive,
  useStateMachineInput,
} from "@rive-app/react-canvas";
import { useEffect } from "react";

import { useTheme } from "~/utils";

const Waba = () => {
  const { RiveComponent, rive } = useRive({
    src: "/majibuddy.riv",
    stateMachines: "State Machine 1",
    artboard: "waba",
    autoplay: true,
    layout: new Layout({
      fit: Fit.Contain,
      alignment: Alignment.Center,
    }),
  });

  const { theme } = useTheme();
  const themeInput = useStateMachineInput(rive, "State Machine 1", "isDark");

  useEffect(() => {
    if (themeInput) {
      themeInput.value = theme === "dark" ? true : false;
    }
  }, [theme, themeInput]);

  return (
    <div className="w-[256px] h-[256px]">
      <RiveComponent />
    </div>
  );
};

export default Waba;
