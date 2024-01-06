import { useCallback, useEffect, useState } from "react";

interface Data {
  current: number;
  dailyGoal: number;
  cupSize: number;
}

const initialState: Data = {
  current: 0,
  dailyGoal: 2500,
  cupSize: 355,
};

export const useData = () => {
  const [state, setState] = useState<Data>(initialState);

  useEffect(() => {
    const current = localStorage.getItem("current");
    const dailyGoal = localStorage.getItem("dailyGoal");
    const cupSize = localStorage.getItem("cupSize");

    setState({
      current: current ? parseInt(current, 10) : initialState.current,
      dailyGoal: dailyGoal ? parseInt(dailyGoal, 10) : initialState.dailyGoal,
      cupSize: cupSize ? parseInt(cupSize, 10) : initialState.cupSize,
    });
  }, []);

  const setData = useCallback((key: keyof Data, value: number) => {
    localStorage.setItem(key, value.toString());
    setState((prevState) => ({
      ...prevState,
      [key]: value,
    }));
  }, []);

  return {
    ...state,
    setData,
  };
};
