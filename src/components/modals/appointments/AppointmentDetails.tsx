"use client";

import { CiCircleRemove } from "react-icons/ci";

interface AppointmentDetails {
  patient: string;
  doctor: string;
  specialty: string;
  date: string;
  hour: string;
  reason: string;
  notes?: string;
}

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  appointment: AppointmentDetails | null;
}

const AppointmentDetailsModal: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  appointment,
}) => {
  if (!isOpen || !appointment) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50 transition-transform ease-in-out duration-300">
      <div className="bg-white rounded-2xl shadow-xl max-w-lg w-full max-h-[80vh] overflow-y-auto p-6 relative">
        <div className="flex justify-between border-b pb-4 mb-4">
          <h2 className="text-lg font-semibold text-blue-900">
            Detalles de la Cita
          </h2>
          <button
            className=" top-3 right-3 text-gray-600 hover:text-gray-900 focus:outline-none"
            onClick={onClose}
          >
            <CiCircleRemove size={28} className="text-red-600" />
          </button>
        </div>

        <div className="space-y-3 ">
          <p>
            <span className="font-semibold text-blue-700">
              Paciente <br />
              <label className="font-normal text-gray-600">
                {appointment.patient}
              </label>
            </span>
          </p>
          <p>
            <span className="font-semibold text-blue-700">
              Doctor asignado <br />
              <label className="font-normal text-gray-600">
                {appointment.doctor}
              </label>
            </span>
          </p>
          <p>
            <span className="font-semibold text-blue-700">
              Especilizado en <br />
              <label className="font-normal text-gray-600">
                {appointment.specialty}
              </label>
            </span>
          </p>
          <p>
            <span className="font-semibold text-blue-700">
              Fecha de la cita <br />
              <label className="font-normal text-gray-600">
                {appointment.date}
              </label>
            </span>
          </p>
          <p>
            <span className="font-semibold text-blue-700">
              Hora de la cita <br />
              <label className="font-normal text-gray-600">
                {appointment.hour}
              </label>
            </span>
          </p>
          <p>
            <span className="font-semibold text-blue-700">
              Motivo <br />
              <label className="font-normal text-gray-600">
                {appointment.reason}
              </label>
            </span>
          </p>
          {appointment.notes && (
            <p>
              <span className="font-semibold text-blue-700">
                Notas <br />
                <label className="font-normal text-gray-600">
                  {appointment.notes}
                </label>
              </span>
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default AppointmentDetailsModal;
