// filepath: [Dashboard.jsx](http://_vscodecontentref_/2)
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";
import { fetchHistories } from "../data/api/histories";

const Dashboard = () => {
  const navigate = useNavigate();
  const { user, loading, logout } = useAuth();
  const [history, setHistory] = useState([]);
  const [historyLoading, setHistoryLoading] = useState(false);
  const [historyError, setHistoryError] = useState(null);

  // Redirect ke login jika user belum login setelah loading selesai
  useEffect(() => {
    if (!loading && !user) {
      // Delay spinner sebelum redirect
      const timer = setTimeout(() => {
        navigate("/login", { replace: true });
      }, 500); 
      return () => clearTimeout(timer);
    }
  }, [loading, user, navigate]);

  useEffect(() => {
    if (user) {
      setHistoryLoading(true);
      setHistoryError(null);
      fetchHistories()
        .then((data) => {
          console.log("Hasil fetchHistories:", data); // <--- Tambahkan ini
          setHistory(data);
        })
        .catch(() => {
          setHistory([]);
          setHistoryError("Gagal mengambil data history.");
        })
        .finally(() => setHistoryLoading(false));
    }
  }, [user]);

  const handleLogout = () => {
    logout();
    // Jika ingin redirect setelah logout, bisa tambahkan navigate("/login", { replace: true });
  };

  if (loading) return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50">
      <div className="animate-spin rounded-full h-16 w-16 border-4 border-blue-500 border-t-transparent"></div>
    </div>
  );

  if (!user) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-50">
        <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center py-10">
      <div className="bg-white p-8 rounded-3xl shadow-2xl w-full max-w-3xl">
        {/* User Info Card */}
        <div className="flex flex-col md:flex-row items-center md:items-start gap-6 mb-8">
          <div className="flex-shrink-0">
            <div className="w-24 h-24 rounded-full bg-gradient-to-br from-blue-main to-green-main flex items-center justify-center text-white text-4xl font-bold shadow-lg">
              {user.name ? user.name[0].toUpperCase() : (user.username ? user.username[0].toUpperCase() : "U")}
            </div>
          </div>
          <div className="flex-1 text-center md:text-left">
            <h1 className="text-3xl font-bold text-gray-800 mb-1">
              Selamat Datang, {user.name || user.username || user.account || "User"}!
            </h1>
            <div className="text-gray-600 mb-2">{user.email || user.account}</div>
            {user.name && <div className="text-gray-500 text-sm mb-2">Nama: {user.name}</div>}
            <button
              onClick={handleLogout}
              className="mt-2 px-5 py-2 bg-gradient-to-r from-blue-main to-green-main hover:from-blue-main hover:to-green-main transition-all hover:scale-105 duration-200 text-white font-semibold rounded-lg shadow-md"
            >
              Keluar
            </button>
          </div>
        </div>

        {/* History Section */}
        <div>
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">History Konten</h2>
          {historyLoading ? (
            <div className="flex items-center justify-center py-8">
              <div className="animate-spin rounded-full h-10 w-10 border-b-2 border-blue-500"></div>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {history && history.length > 0 ? (
                history.map((item, idx) => (
                  <div key={idx} className="bg-gradient-to-br from-blue-50 to-green-50 border border-blue-100 rounded-xl p-4 shadow hover:shadow-lg transition">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="inline-block px-2 py-1 text-xs font-semibold rounded bg-blue-200 text-blue-800">
                        #{idx + 1}
                      </span>
                      <span className="text-gray-700 font-medium">Konten</span>
                    </div>
                    <div className="text-gray-600 text-sm break-all">
                      {typeof item === "object" ? (
                        <pre className="whitespace-pre-wrap">{JSON.stringify(item, null, 2)}</pre>
                      ) : (
                        item
                      )}
                    </div>
                  </div>
                ))
              ) : (
                <div className="col-span-2 text-center text-gray-500 py-8">
                  Tidak ada history.
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;