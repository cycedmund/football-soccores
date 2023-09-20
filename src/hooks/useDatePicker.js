import { useState } from "react";

export const useDatePicker = () => {
  const [value, setValue] = useState({
    startDate: null,
    endDate: null,
  });

  const handleValueChange = (newValue) => {
    setValue(newValue);
  };

  return { value, handleValueChange };
};
