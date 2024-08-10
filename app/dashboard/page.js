import { getSession } from "@auth0/nextjs-auth0";
import Landingpage from '@/components/Landingpage';
export default async function Dashboard() {
    const session = await getSession();
    const user = session?.user;
    console.log(user);

    return(
        <>
        <div className="">
            <center>
            <h3>Hello, {user.name} welcome to your dashboard</h3>
            <Landingpage />
            </center>
        </div>
        </>
    );
}

