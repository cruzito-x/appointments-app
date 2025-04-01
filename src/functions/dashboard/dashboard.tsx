import { useState, useEffect } from "react";

export default function useReminders() {
  const [reminders, setReminders] = useState<[]>([]);

  useEffect(() => {
    const getReminders = async () => {
      try {
        const response = await fetch("/api/dashboard/reminders");
        const remindersData = await response.json();
        setReminders(remindersData);
      } catch (error) {
        console.error("Error al obtener recordatorios:", error);
      }
    };

    getReminders();
  }, []);

  return reminders;
}

export function useFiles() {
  const [files, setFiles] = useState<[]>([]);

  useEffect(() => {
    const getFiles = async () => {
      try {
        const response = await fetch("/api/patients");
        const filesData = await response.json();
        setFiles(filesData);
      } catch (error) {
        console.error("Error al obtener expedientes:", error);
      }
    };

    getFiles();
  }, []);

  return files;
}
