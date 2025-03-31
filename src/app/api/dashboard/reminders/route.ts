import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";
import moment from "moment";

export async function GET() {
  try {
    const reminders = await prisma.reminder.findMany({
      include: {},
    });

    const remindersData = reminders.map((reminder: any) => ({
      id: reminder.id,
      title: reminder.title,
      description: reminder.description,
      priority: reminder.priority,
      status: reminder.status,
      hour: moment(reminder.date).format("hh:mm A"),
      created_at: reminder.created_at,
      updated_at: reminder.updated_at,
    }));

    return NextResponse.json(remindersData, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { error: "Error al obtener los datos", details: error },
      { status: 500 }
    );
  }
}
