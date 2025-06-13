const HISTORY_API_URL = "https://histories-service-231745028467.asia-southeast2.run.app/history/me";

export async function fetchHistories() {
  try {
    const response = await fetch(HISTORY_API_URL, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${localStorage.getItem("authToken") || ""}`,
      },
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    // Sesuaikan struktur data jika perlu
    if (data && Array.isArray(data.data)) {
      return data.data;
    } else if (Array.isArray(data)) {
      return data;
    } else {
      return [];
    }
  } catch (error) {
    console.error("Error fetching histories:", error);
    throw new Error("Gagal mengambil data history");
  }
}