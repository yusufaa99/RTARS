import { getSession } from "@auth0/nextjs-auth0";
import React from 'react'

const ProfileServer = async () => {
    const session = await getSession();
    const user = session?.user;
    console.log(user);

    if (!user) {
        return null;
    }
    
    return user ? (
        <div>
          <img src={user.picture} alt={user.name} />
          <h2>{user.name}</h2>
          <h3>{user.email}</h3>
        </div>
      ) : (
        <div>
            No user Has Login
        </div>
      );
}

export default ProfileServer;
