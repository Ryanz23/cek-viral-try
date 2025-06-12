import { useNavigate } from "react-router-dom";

export const useResultActions = () => {
  const navigate = useNavigate();

  const goBack = () => {
    if (window.history.length > 1) {
      window.history.back();
    } else {
      navigate("/", { replace: true });
    }
  };

  const goToHome = () => {
    navigate("/", { replace: true });
  };

  const retryAnalysis = (inputValue) => {
    navigate("/", {
      state: { retryInput: inputValue },
      replace: true,
    });
  };

  return {
    goBack,
    goToHome,
    retryAnalysis,
  };
};
