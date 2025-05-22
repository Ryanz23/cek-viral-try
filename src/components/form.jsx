import React, { useState } from "react";

function Form({ onSubmit }) {
    const [input, setInput] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        if (input.trim() !== "") {
            onSubmit(input); // Kirim ke komponen induk
            setInput(""); // Reset input kalau mau
        }
    };

    return (
        <form onSubmit={handleSubmit} className="flex flex-col gap-4 bg-white p-6 rounded-lg shadow-md">
            <div className="flex flex-col gap-2">
                <label htmlFor="url" className="text-sm font-medium text-gray-700">Input URL</label>
                <input
                    type="url"
                    id="url"
                    placeholder="https://example.com"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    className="text-gray-700 mt-1 py-2 px-2 block w-full border border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring-blue-500"
                    required
                />
            </div>
            <button
                type="submit"
                className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition"
            >
                Submit
            </button>
        </form>
    );
}

export default Form;