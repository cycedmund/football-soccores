import { useState } from "react";

const useDatePicker = () => {
  const [dateInput, setDateInput] = useState({
    startDate: null,
    endDate: null,
  });

  const handleDateInputChange = (input) => {
    setDateInput(input);
  };

  return { dateInput, handleDateInputChange };
};

export default useDatePicker;
