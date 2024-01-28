import NewUser from "@/models/User";
import connectDB from "@/utils/db";
import bcrypt from "bcryptjs";
import { NextResponse } from "next/server";

export const POST = async (request) => {
  const { name, email, password } = await request.json();
  console.log(name, password);
  await connectDB();
  console.log("DB connected...");
  var salt = bcrypt.genSaltSync(10);
  var hashedPassword = bcrypt.hashSync(password, salt);
  console.log(hashedPassword);
  const newUser = new NewUser({
    name,
    email,
    password: hashedPassword,
    salt: salt,
  });

  try {
    console.log(newUser);
    await newUser.save();
    console.log("user saved");
    return new NextResponse("User Saved ...", { status: 201 });
  } catch (err) {
    return new NextResponse(err.message, { status: 500 });
  }
};
