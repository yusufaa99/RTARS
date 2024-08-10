"use client";
import React from 'react'
import { useUser } from "@auth0/nextjs-auth0/client";
const ProfileClient = () => {
    const { user, error, isLoading } = useUser();

    if(isLoading) return(<div>is Loading...</div>);
    if(isLoading) return(<div>{error.message}</div>);

     
  return user ? (
    <div>
      <img className='rounded-circle' src={user.picture} alt={user.name} />
      <h2>{user.name}</h2>
      <h3>{user.email}</h3>
    </div>
  ) : (
    <div>
        No user Has Login
    </div>
  );
}

export default ProfileClient;
