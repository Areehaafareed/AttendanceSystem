import { useState, useEffect } from "react";

export const useEventLogs = (apiUrl) => {
  const [eventLogs, setEventLogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(apiUrl);
        if (!res.ok) throw new Error("Failed to fetch event logs");
        const data = await res.json();
        setEventLogs(data);
        setLoading(false);
      } catch (err) {
        console.error("Error fetching logs:", err);
        setError("Failed to load event logs");
        setLoading(false);
      }
    };
    fetchData();
  }, [apiUrl]);

  return { eventLogs, loading, error };
};
