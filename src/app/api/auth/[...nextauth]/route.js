import connectDB from "@/utils/db";
import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import NewUser from "@/models/User";
import bcrypt from "bcryptjs";
import CredentialsProvider from "next-auth/providers/credentials";
import { useRouter } from "next/navigation";

const handler = NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
    CredentialsProvider({
      id: "credentials",
      name: "Credentials",
      async authorize(credentials) {
        await connectDB();

        try {
          const user = await NewUser.findOne({ email: `${credentials.email}` });

          if (user) {
            var hashedLoginPassword = bcrypt.hashSync(
              credentials.password,
              user.salt
            );

            if (hashedLoginPassword == user.password) {
              return user;
            } else {
              throw new Error("Wrong Password");
            }
          } else {
            throw new Error("User not found!");
          }
        } catch (err) {
          throw new Error(err);
        }
      },
    }),
  ],
  pages: {
    error: "/dashboard/login",
  },
});

export { handler as GET, handler as POST };
