import React from "react";
import ProbabilityBar from "./ProbabilityBar";

const ResultCard = ({ displayInfo, apiResult, success }) => {
  const {
    finalLabel,
    predictedLabel,
    confidence,
    color,
    bgColor,
    probabilities,
    processingTime,
  } = displayInfo;

  if (!success || !apiResult) {
    return (
      <div className={`p-6 rounded-xl border-2 ${bgColor} mb-6`}>
        <div className={`text-2xl font-bold ${color} mb-4`}>Analisis Gagal</div>
        <p className="text-gray-700">
          Terjadi kesalahan saat menganalisis teks. Silakan coba lagi.
        </p>
      </div>
    );
  }

  return (
    <div className={`p-8 rounded-xl border-2 ${bgColor} mb-2`}>
      {/* Main Result */}
      <div className="mb-6">
        <div className={`text-3xl font-bold ${color} mb-2`}>{finalLabel}</div>
        {/* <div className="text-sm text-gray-600">
          Prediksi Model:{" "}
          <span className="font-semibold">{predictedLabel}</span>
        </div>
        <div className="text-sm text-gray-600 mt-1">
          Tingkat Keyakinan:{" "}
          <span className="font-semibold">{confidence}%</span>
        </div> */}
      </div>  

      {/* Probability Breakdown */}
      {probabilities && (
        <div className="mt-6">
          <h4 className="font-semibold mb-4 text-gray-700">
            Detail Probabilitas:
          </h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <ProbabilityBar
              label="FAKTA"
              percentage={Math.round(probabilities.FAKTA * 100)}
              color="text-green-600"
            />
            <ProbabilityBar
              label="HOAKS"
              percentage={Math.round(probabilities.HOAKS * 100)}
              color="text-red-600"
            />
          </div>
        </div>
      )}

      {/* Additional Info */}
      {/* <div className="mt-6 pt-4 border-t border-gray-200">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-gray-600">
          <div>
            <span className="font-medium">Waktu Analisis:</span>{" "}
            {processingTime}ms
          </div>
          <div>
            <span className="font-medium">Status:</span> {apiResult.status}
          </div>
        </div>
        {apiResult.processing_message && (
          <div className="mt-2 text-sm text-gray-600">
            <span className="font-medium">Info:</span>{" "}
            {apiResult.processing_message}
          </div>
        )}
      </div> */}

      {/* Warning for "BELUM DIVERIFIKASI" */}
      {finalLabel === "BELUM DIVERIFIKASI" && (
        <div className="mt-6 p-4 bg-yellow-100 border border-yellow-300 rounded-lg">
          <div className="flex items-center">
            <svg
              className="w-5 h-5 text-yellow-600 mr-2"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z"
                clipRule="evenodd"
              />
            </svg>
            <div>
              <p className="text-sm font-medium text-yellow-800">
                Perlu Verifikasi Lebih Lanjut
              </p>
              <p className="text-xs text-yellow-700 mt-1">
                Konten ini memerlukan verifikasi manual atau sumber tambahan
                untuk memastikan kebenarannya.
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ResultCard;
