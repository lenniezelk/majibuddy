const CupSize = {
  smallCup: {
    label: 'Small Cup',
    sizes: [
      { size: '8 oz', ml: 240 },
      { size: '6 oz', ml: 180 },
    ],
  },
  standardCup: {
    label: 'Standard Cup',
    sizes: [
      { size: '12 oz', ml: 355 },
      { size: '16 oz', ml: 473 },
    ],
  },
  mediumCup: {
    label: 'Medium Cup',
    sizes: [{ size: '20 oz', ml: 590 }],
  },
  largeCup: {
    label: 'Large Cup',
    sizes: [
      { size: '24 oz', ml: 710 },
      { size: '32 oz', ml: 946 },
    ],
  },
  sportsBottle: {
    label: 'Sports Bottle',
    sizes: [
      { size: '16 oz', ml: 473 },
      { size: '24 oz', ml: 710 },
      { size: '32 oz', ml: 946 },
    ],
  },
  mug: {
    label: 'Mug',
    sizes: [
      { size: '8 oz', ml: 240 },
      { size: '12 oz', ml: 355 },
    ],
  },
  travelTumbler: {
    label: 'Travel Tumbler',
    sizes: [
      { size: '16 oz', ml: 473 },
      { size: '20 oz', ml: 590 },
      { size: '24 oz', ml: 710 },
    ],
  },
  waterBottle: {
    label: 'Water Bottle',
    sizes: [
      { size: '500 ml', ml: 500 },
      { size: '750 ml', ml: 750 },
      { size: '1 liter', ml: 1000 },
    ],
  },
} as const;

type CupSizeKey = keyof typeof CupSize;
type CupSizeValue = (typeof CupSize)[CupSizeKey];
type CupSizeOption = CupSizeValue['sizes'][number];

interface CupSizeSelectProps {
  onSelect: (size: number) => void;
  value?: number;
}

const CupSizeSelect = ({ onSelect, value }: CupSizeSelectProps) => {
  return (
    <div className="flex">
      <h3 className="text-xl mr-1">Select your cup size:</h3>
      <select
        name="cupSize"
        onChange={(e) => onSelect(parseInt(e.target.value))}
        value={value}
      >
        {Object.keys(CupSize).map((key) => {
          const cupSize = CupSize[key as CupSizeKey];
          return (
            <optgroup label={cupSize.label} key={key}>
              {cupSize.sizes.map((size) => {
                return (
                  <option value={size.ml} key={size.ml}>
                    <OptionLabel option={size} />
                  </option>
                );
              })}
            </optgroup>
          );
        })}
      </select>
    </div>
  );
};

const OptionLabel = ({ option }: { option: CupSizeOption }) => {
  if (option.size.endsWith('oz')) {
    return `${option.size} (${option.ml}ml)`;
  }
  return `${option.size}`;
};

export default CupSizeSelect;
