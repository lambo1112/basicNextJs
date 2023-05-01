import UserProfile from "../components/profile/user-profile";
import { getSession } from "next-auth/react";
import { authOptions } from "./api/auth/[...nextauth]";
import { getServerSession } from "next-auth/next";

function ProfilePage() {
  return <UserProfile />;
}

export async function getServerSideProps(context) {
  const session = await getServerSession(context.req, context.res, authOptions);
  console.log("session ", session);

  //  const session = await getSession(context);
  if (!session) {
    return {
      redirect: {
        destination: "/auth",
        permanent: false,
      },
    };
  }

  return {
    props: { email: session.user.email },
  };
}

export default ProfilePage;
