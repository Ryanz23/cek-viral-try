import { useLocation } from "react-router-dom";

export const useResultData = () => {
  const location = useLocation();

  const getResultData = () => {
    const state = location.state;

    if (!state) {
      return {
        inputValue: "Tidak ada data",
        apiResult: null,
        success: false,
        hasData: false,
      };
    }

    return {
      inputValue: state.inputValue || "Tidak ada input",
      apiResult: state.apiResult || null,
      success: state.success || false,
      hasData: true,
    };
  };

  const resultData = getResultData();

  const getDisplayInfo = () => {
    const { success, apiResult } = resultData;

    if (!success || !apiResult) {
      return {
        title: "Analisis Gagal",
        finalLabel: "Error",
        color: "text-red-600",
        bgColor: "bg-red-50 border-red-200",
        type: "error",
      };
    }

    const prediction = apiResult.prediction;
    const isHoax = prediction.predicted_label_model === "HOAKS";
    const finalLabel = prediction.final_label_thresholded;
    const confidence = Math.round(prediction.highest_confidence * 100);

    return {
      title: "Hasil Analisis",
      finalLabel: finalLabel,
      predictedLabel: prediction.predicted_label_model,
      confidence: confidence,
      isHoax: isHoax,
      color: isHoax
        ? "text-red-600"
        : finalLabel === "BELUM DIVERIFIKASI"
        ? "text-yellow-600"
        : "text-green-600",
      bgColor: isHoax
        ? "bg-red-50 border-red-200"
        : finalLabel === "BELUM DIVERIFIKASI"
        ? "bg-yellow-50 border-yellow-200"
        : "bg-green-50 border-green-200",
      probabilities: prediction.probabilities,
      processingTime: Math.round(prediction.inference_time_ms),
      type: "success",
    };
  };

  return {
    ...resultData,
    displayInfo: getDisplayInfo(),
  };
};
