import { useEffect, useState } from "react";

const useShowSurvey = () => {
  const [showSurvey, setShowSurvey] = useState(false);

  useEffect(() => {
    const checkLocalStorage = () => {
      setShowSurvey(localStorage.getItem("show-survey") === "true");
    };

    checkLocalStorage();
    window.addEventListener("storage", checkLocalStorage);

    return () => window.removeEventListener("storage", checkLocalStorage);
  }, []);

  return showSurvey;
};

export default useShowSurvey;
