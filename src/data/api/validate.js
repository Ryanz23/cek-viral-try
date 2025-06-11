const API_BASE_URL =
  "https://cekviral-service-231745028467.asia-southeast2.run.app/";

export const postValidate = async (input) => {
  try {
    const response = await fetch(`${API_BASE_URL}/verify`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ content: input.trim() }),
    });

    const result = await response.json();
    return {
      success: response.ok,
      data: result,
      status: response.status,
      statusText: response.statusText,
    };
  } catch (error) {
    console.error("Validation API error:", error);
    return {
      success: false,
      error: error.message,
      data: null,
    };
  }
};
