import connectDB from "@/utils/db";
import { NextResponse } from "next/server";
import Post from "@/models/Post";

export const GET = async (request, { params }) => {
  const { id } = params;
  //fetch
  try {
    await connectDB();
    const post = await Post.findById(id);
    return new NextResponse(JSON.stringify(post), {
      status: 200,
    });
  } catch (err) {
    return new NextResponse(err);
  }
};
