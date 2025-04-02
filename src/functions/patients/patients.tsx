import { useEffect, useState } from "react";

export function useFileDetails(id) {
  const [fileDetails, setFilesDetails] = useState<[]>([]);

  useEffect(() => {
    const getFileDetails = async () => {
      try {
        const response = await fetch(`/api/patients/details/${id}`);
        const fileDetailsData = await response.json();
        setFilesDetails(fileDetailsData);
      } catch (error) {
        console.error("Error al obtener expedientes:", error);
      }
    };

    getFileDetails();
  }, []);

  return fileDetails;
}
