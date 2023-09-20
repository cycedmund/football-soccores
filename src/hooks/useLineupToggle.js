import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const useLineupToggle = (matchStatus, matchID) => {
  const [isLineupShown, setIsLineupShown] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (isLineupShown) {
      navigate(`/${matchStatus}/${matchID}/lineups`);
    } else {
      navigate(`/${matchStatus}/${matchID}`);
    }
  }, [matchStatus, matchID, isLineupShown, navigate]);

  const handleLineupShown = () => {
    setIsLineupShown(!isLineupShown);
  };

  return { isLineupShown, handleLineupShown };
};

export default useLineupToggle;
