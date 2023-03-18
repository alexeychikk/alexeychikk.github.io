import React, { useState, useEffect } from "react";

export interface GrowingNumberProps {
  className?: string;
  from?: number;
  to: number;
  increment?: number;
  fractionDigits?: number;
  duration: number;
}

const GrowingNumberBase: React.FC<GrowingNumberProps> = (props) => {
  const from = props.from || 0;
  const increment = props.increment || 1;
  const fractionDigits = props.fractionDigits || 0;
  const iterations = Math.abs((props.to - from) / increment);
  const delayInMs = props.duration / iterations;
  const [currentNumber, setCurrentNumber] = useState(from);

  useEffect(() => {
    if (!iterations || from === props.to) return;

    const interval = setInterval(() => {
      setCurrentNumber((value) => {
        const newNumber =
          props.to > from
            ? Math.min(value + increment, props.to)
            : Math.max(value + increment, from);
        if (newNumber === props.to) clearInterval(interval);
        return newNumber;
      });
    }, delayInMs);

    return () => clearInterval(interval);
  }, []);

  return <>{currentNumber.toFixed(fractionDigits)}</>;
};

export const GrowingNumber = React.memo(GrowingNumberBase);
