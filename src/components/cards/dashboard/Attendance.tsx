const daysOfWeek = ["Lun", "Mar", "Mié", "Jue", "Vie", "Sáb", "Dom"];

const Attendance = ({ patientsPerDay }: any) => {
  const maxPatients: number = Math.max(...Object.values(patientsPerDay));

  return (
    <>
      <label className="text-normal text-sm text-blue-900 font-semibold">
        Últimos 7 días
      </label>
      <div className="flex gap-4 mt-3 bg-white justify-center">
        {daysOfWeek.map((day) => {
          const patientCount = patientsPerDay[day.toLowerCase()] || 0;
          const fillHeight = Math.max((patientCount / maxPatients) * 100, 5);

          return (
            <div
              key={day}
              className="w-24 h-44 px-0.5 flex flex-col items-center bg-white"
            >
              <div className="relative w-full h-full bg-blue-50 rounded-t-md overflow-hidden">
                <div
                  className="absolute bottom-0 w-full rounded-md flex items-center justify-center bg-blue-900 hover:bg-blue-500 transition-all duration-200"
                  style={{ height: `${fillHeight}%` }}
                >
                  <label className="font-semibold text-xs text-white">
                    {patientCount > 0 ? patientCount : ""}
                  </label>
                </div>
              </div>
              <span className="mt-1 text-xs font-semibold text-blue-900 p-1">
                {day}
              </span>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Attendance;
