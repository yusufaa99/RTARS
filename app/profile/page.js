import { getSession } from "@auth0/nextjs-auth0";
import { redirect } from "next/navigation";
import ProfileClient from "./components/user-client";
import ProfileServer from "./components/user-server";

const Profile = async () => {
  const session = await getSession();
  const user = session?.user;

  if (!user) {
      redirect("/");
  }
  
  return (
    <div className="container flex items-center justify-center w-full mt-10">
      <div className="row flex items-center justify-between w-full">
        <div className="col-sm-5 text-2xl">
        <ProfileClient/>        
        </div>
        <div className="col-sm-2 text-2xl">

        </div>
        <div className="col-sm-5 text-2xl">
          <ProfileServer/>
        </div>
      </div>
    </div>
  )
}

export default Profile
