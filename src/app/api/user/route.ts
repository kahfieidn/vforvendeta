import { NextResponse } from "next/server";
import Response from "@/lib/api.response";

export async function GET() {
  return Response({
    message: "Get all users",
    data: [
      {
        id: 1,
        name: "A",
      },
      {
        id: 2,
        name: "B",
      },
    ],
    status: 200,
  });
}

export async function POST() {
    return Response({
        message: "New user created",
        data: [
            {
                id: 3,
                name: "Aldi",
            },
        ],
        status: 200,
    });
}
