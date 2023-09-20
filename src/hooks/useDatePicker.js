import { useState } from "react";

const useDatePicker = () => {
  const [value, setValue] = useState({
    startDate: null,
    endDate: null,
  });

  const handleValueChange = (newValue) => {
    setValue(newValue);
  };

  return { value, handleValueChange };
};

export default useDatePicker;
