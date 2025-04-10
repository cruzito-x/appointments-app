import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";
import moment from "moment";
import "moment/locale/es";
import LabResultsByPatient from "@/app/patients/patient/lab_results/[id]/page";

export async function GET(req: any, { params }: any) {
  try {
    const { id } = params;

    if (!id) {
      return NextResponse.json(
        { error: "El ID del paciente es requerido" },
        { status: 400 }
      );
    }

    const patient = await prisma.patient.findUnique({
      where: { id: parseInt(id) },
      include: {
        files: {
          include: {
            details: {
              include: {
                LabResults: true,
              },
            },
          },
        },
      },
    });

    if (!patient) {
      return NextResponse.json(
        { error: "Paciente no encontrado" },
        { status: 404 }
      );
    }

    const latestLabResults = await prisma.labResults.findMany({
      where: {
        PatientFileDetail: {
          patientFile: {
            patientId: patient.id,
          },
        },
      },
      orderBy: {
        created_at: "desc",
      },
    });

    moment.locale("es");

    const patientData = {
      id: patient.id,
      name: `${patient.firstName} ${patient.lastName}`,
      birthDate: moment(patient.birthDate).format("LL"),
      created_at: moment(patient.created_at).format("DD/MM/YYYY"),
      updated_at: moment(patient.updated_at).format("DD/MM/YYYY"),
      files: patient.files.map((file) => ({
        id: file.id,
        emergency_contact_1: file.emergency_contact_1,
        emergency_contact_2: file.emergency_contact_2,
        occupation: file.occupation,
        institution: file.institution,
        sex: file.sex,
        created_at: moment(file.created_at).format("DD/MM/YYYY"),
        updated_at: file.updated_at,
        details: file.details.map((detail) => ({
          id: detail.id,
          file_path: detail.file_path,
          description: detail.description,
          last_appointment: detail.last_appointment
            ? moment(detail.last_appointment).format("LL")
            : "No hay registro",
          next_appointment: detail.next_appointment
            ? moment(detail.next_appointment).format("LL")
            : "No agendada",
          created_at: detail.created_at,
          updated_at: detail.updated_at,
          latest_lab_results: latestLabResults.map((result) => ({
            id: result.id,
            file_path: result.file_path,
            file_extension: result.file_extension,
            file_size: result.file_size,
            created_at: moment(result.created_at).format("LL"),
            updated_at: result.updated_at
              ? moment(result.updated_at).format("LL")
              : null,
            deleted_at: result.deleted_at
              ? moment(result.deleted_at).format("LL")
              : null,
          })),
        })),
      })),
    };

    return NextResponse.json(patientData, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { error: "Error al obtener los datos", details: error },
      { status: 500 }
    );
  }
}
