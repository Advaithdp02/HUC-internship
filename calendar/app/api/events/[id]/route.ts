import { connectDB } from "@/lib/db";
import Event from "@/models/Event";
import { NextResponse } from "next/server";
import { getUserFromReq } from "@/lib/middleware";

export async function PUT(
  req: Request,
  context: { params: Promise<{ id: string }> }
) {
  await connectDB();

  const user = getUserFromReq(req);
  if (!user) {
    return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
  }

  const { id } = await context.params;
  const body = await req.json();

  const event = await Event.findOneAndUpdate(
    { _id: id, userId: user.id },
    body,
    { returnDocument: "after" } // ✅ fixed
  );

  return NextResponse.json(event);
}

export async function DELETE(
  req: Request,
  context: { params: Promise<{ id: string }> }
) {
  await connectDB();

  const user = getUserFromReq(req);
  if (!user) {
    return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
  }

  const { id } = await context.params;

  await Event.findOneAndDelete({
    _id: id,
    userId: user.id,
  });

  return NextResponse.json({ message: "Deleted" });
}