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

export const DELETE = async (request, { params }) => {
  const { id } = params;
  console.log("Delete");
  //fetch
  try {
    await connectDB();
    await Post.findByIdAndDelete(id);

    return new NextResponse("Post deleted..", {
      status: 200,
    });
  } catch (err) {
    return new NextResponse(err);
  }
};
