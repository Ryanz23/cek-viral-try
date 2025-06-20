import React from "react";
import { useResultData } from "../hooks/result hooks/useResultData";
import { useResultActions } from "../hooks/result hooks/useResultActions";
import {
  ResultHeader,
  InputDisplay,
  ResultCard,
  ActionButtons,
  NoDataError,
} from "../components/result";

const Result = () => {
  const { inputValue, apiResult, success, displayInfo, hasData } =
    useResultData();
  const { goBack, goToHome } = useResultActions();

  if (!hasData) {
    return <NoDataError onGoToHome={goToHome} />;
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4 py-18">
      <div className="bg-white rounded-3xl shadow-xl p-10 max-w-3xl w-full">
        <ResultHeader title={displayInfo.title} />

        <InputDisplay inputValue={inputValue} />

        <ResultCard
          displayInfo={displayInfo}
          apiResult={apiResult}
          success={success}
        />
        <p className="text-[14px] py-2 mb-2"><i><li>Ini hanya prediksi dari CekViral. Tetap bijak dan cek ulang, ya!</li></i></p>

        <ActionButtons
          onGoToHome={goToHome}
          onGoBack={goBack}
          inputValue={inputValue}
        />

        {/* Debug Panel (development only) */}
        {/* {process.env.NODE_ENV === "development" && apiResult && (
          <div className="mt-8 text-left">
            <details className="cursor-pointer">
              <summary className="font-semibold text-sm text-gray-500 hover:text-gray-700">
                Data Teknis (Debug)
              </summary>
              <pre className="text-xs bg-gray-100 p-4 rounded mt-2 overflow-auto text-left max-h-64">
                {JSON.stringify({ inputValue, apiResult, success }, null, 2)}
              </pre>
            </details>
          </div>
        )} */}
      </div>
    </div>
  );
};

export default Result;
