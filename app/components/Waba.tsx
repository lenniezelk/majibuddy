import { Alignment, Fit, Layout, useRive } from '@rive-app/react-canvas';

const Waba = () => {
  const { RiveComponent } = useRive({
    src: '/majibuddy.riv',
    stateMachines: 'State Machine 1',
    artboard: 'waba',
    autoplay: true,
    layout: new Layout({
      fit: Fit.Contain,
      alignment: Alignment.Center,
    }),
  });
  return (
    <div className="w-[256px] h-[256px]">
      <RiveComponent />
    </div>
  );
};

export default Waba;
