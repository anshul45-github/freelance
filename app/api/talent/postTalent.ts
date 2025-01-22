// import { auth } from "@clerk/nextjs/server";
// import { NextResponse } from "next/server";

// export async function POST(
//     req: Request,
// ) {
//     try {
//         const { userId } = await auth();
//         const body = await req.json();
//         if(!userId)
//             return new NextResponse("Unauthorized", { status: 401 });

//     }
// }