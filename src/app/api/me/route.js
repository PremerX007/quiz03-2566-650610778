import { NextResponse } from "next/server";

export const GET = async () => {
  return NextResponse.json({
    ok: true,
    fullName: "Bannawat Vongpooton",
    studentId: "650610778",
  });
};
