type NumberType = {
  value: number;
};

type PositiveNumber = NumberType & {
  isPositive: boolean;
  isNegative?: never;
  isZero?: never;
};

type NegativeNumber = NumberType & {
  isNegative: boolean;
  isPositive?: never;
  isZero?: never;
};

type Zero = NumberType & {
  isZero: boolean;
  isNegative?: never;
  isPositive?: never;
};

type RandomNumberProps = PositiveNumber | NegativeNumber | Zero;

const RestrictProps = ({
  value,
  isPositive,
  isNegative,
  isZero,
}: RandomNumberProps) => {
  return (
    <div>
      {value} is {isPositive && "isPositive"} {isNegative && "isNegative"}
      {isZero && "isZero"}
    </div>
  );
};

export default RestrictProps;

<>
<RestrictProps value={10} isPositive />    {/** work */}
{/* <RestrictProps value={10} isPositive isNegative />  * error */}
</>

