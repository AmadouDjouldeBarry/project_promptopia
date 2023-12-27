'use client'
import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { signIn, signOut, useSession, getProviders } from "next-auth/react";
const Nav = () => {
  const isUserSignIn = true;
  const {data: session } =  useSession();
  const [providers, setProviders] = useState(null);
  const [toggleDropdown, setToggleDropdown] = useState(false);
  useEffect(() => {
    (async () => {
      const res = await getProviders();
      setProviders(res);
    })();
  }, []);
  return (
    <nav className="flex-between mb-16 pt-3 w-full">
      <Link href="/" className=" flex flex-center gap-2">
          <Image src="assets/images/logo.svg" 
          alt="Promptopia Logo"
          width={30}
          height={30}
          className="object-contain"/>
          <p className="logo_text">Promptopia</p>
      </Link>

      {/* Desktop Navigation */}
      <div className="sm:flex hidden">
      {isUserSignIn ? (
        <div className="flex gap-3 md:gap-5">
          <Link className="black_btn" href="/create-prompt">
            Create Post
          </Link>
          <button type="button" className="outline_btn" onClick={signOut}>
                Sign Out
          </button>
          <Link href="/profile">
            <Image src="assets/images/logo.svg" 
            width={37}
            height={37}
            className="rounded-full" alt="Profile"/>
          </Link>
        </div>
      ) : (<>
          {providers && Object.values(providers).map((provider) =>(
            <button
            type="button"
            key={provider.name}
            onclick ={()=> signIn(provider.id)}
            className="black_btn">
                Sign In
            </button>
          ))}
      </>)}
      </div>
           {/* Mobile Navigation */}
        <div className="sm:hidden flex relative">
          {isUserSignIn ?(
            <div className="flex">
            <Image src="assets/images/logo.svg" 
                width={37}
                height={37}
                className="rounded-full" alt="Profile"
                onClick={()=>setToggleDropdown((prev) => !prev)}
            />
          {toggleDropdown && (<div className="dropdown"> 
          <Link href="/profile"
                className="dropdown_link"
                onClick={()=>toggleDropdown(false)}>
                My profile
          </Link>

          <Link href="/create-prompt"
                className="dropdown_link"
                onClick={()=>toggleDropdown(false)}>
                create post
          </Link>
              <button
              type="button"
              onClick={()=>{
                setToggleDropdown(false);
                signOut
              }} className="w-full black_btn">
              sign Out
          </button>
          </div>)}
          </div>

          ) :
          (
          <>
            {providers && Object.values(providers).map((provider) =>(
              <button
              type="button"
              key={provider.name}
              onclick ={()=> signIn(provider.id)}
              className="black_btn">
                  Sign In
              </button>
            ))}
          </>
          )}
        </div>

    </nav>
  )
}

export default Nav

