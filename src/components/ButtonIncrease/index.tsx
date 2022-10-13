import React, { useState } from "react";

interface IButtonProps {
  title?: string;
}

const ButtonIncrease: React.FC<IButtonProps> = ({ title }) => {
  const [value, setValue] = useState(0);

  const handleIncrease = () => {
    setValue(value + 1);
  };

  return (
    <div style={{ padding: 20 }}>
      <h2>{title}</h2>
      <button onClick={handleIncrease}>Increase</button>

      <span>
        Value: <span style={{ color: "yellow" }}>{value}</span>
      </span>
    </div>
  );
};

export default ButtonIncrease;
