import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";
import { postValidate } from "../data/api/validate";

export const useValidation = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const validateText = async (text) => {
    if (!text.trim()) {
      toast.error("Masukkan teks terlebih dahulu!");
      return;
    }

    setLoading(true);

    try {
      toast.loading("Menganalisis teks...", { id: "validate" });

      const result = await postValidate(text);


      if (result.success) {
        toast.success("Analisis selesai!", { id: "validate" });

        navigate("/result", {
          state: {
            inputValue: text,
            apiResult: result.data,
            success: true,
          },
        });
      } else {
        toast.error("Gagal menganalisis teks", { id: "validate" });

        navigate("/result", {
          state: {
            inputValue: text,
            apiResult: null,
            success: false,
            error: result.error || "Analisis gagal",
          },
        });
      }
    } catch (error) {
      console.error("Validation error:", error);
      toast.error("Terjadi kesalahan jaringan", { id: "validate" });

      navigate("/result", {
        state: {
          inputValue: text,
          apiResult: null,
          success: false,
          error: "Terjadi kesalahan jaringan",
        },
      });
    } finally {
      setLoading(false);
    }
  };

  return { validateText, loading };
};
