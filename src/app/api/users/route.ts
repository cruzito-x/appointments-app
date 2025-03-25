import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";

export async function GET() {
  const users = await prisma.user.findMany();
  return NextResponse.json(users, { status: 200 });
}

export async function POST(request: Request) {
  try {
    const { name, email } = await request.json();
    const user = await prisma.user.create({
      data: { name, email },
    });
    return NextResponse.json(user, { status: 201 });
  } catch (error) {
    return NextResponse.json(
      { error: "Error al crear usuario" },
      { status: 400 }
    );
  }
}
