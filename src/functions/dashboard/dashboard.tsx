import { useState, useEffect } from "react";

export default function useReminders() {
  const [reminders, setReminders] = useState([]);

  useEffect(() => {
    const getReminders = async () => {
      try {
        const response = await fetch("/api/dashboard/reminders");
        const remindersData = await response.json();
        setReminders(remindersData);
      } catch (error) {
        console.error("Error fetching reminders:", error);
      }
    };

    getReminders();
  }, []);

  return reminders;
}
