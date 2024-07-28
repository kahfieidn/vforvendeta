import { NextRequest, NextResponse } from "next/server";
import { Params } from "next/dist//shared/lib/router/utils/route-matcher";

export async function GET(req: NextRequest, params: Params) {
    const id = params.params.id
    return NextResponse.json({ 
        success: true,
        message: `Get detail user by id ${id}`,
        data: [
            {
                id,
                name: "A",
            },
        ] 
    },{
        status: 200,
    });
}
