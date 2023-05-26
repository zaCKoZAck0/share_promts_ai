"use client"

import Link from 'next/link'
import Image from 'next/image'
import { useState, useEffect } from 'react'
import React from 'react'
import { signIn, signOut, useSession, getProviders, LiteralUnion, ClientSafeProvider } from 'next-auth/react'
import { BuiltInProviderType } from 'next-auth/providers'

function Nav() {

    const { data: session} = useSession()

    const [providers, setProviders] = useState<Record<LiteralUnion<BuiltInProviderType, string>, ClientSafeProvider> | null>(null);
    const [toggleDropDown, setToggleDropDown] = useState(false);

    useEffect(() => {
        const onSetProviders =async () => {
            const response = await getProviders();
            setProviders(response);
        };
        onSetProviders();
    },[]);

    return (
    <nav className='flex-between w-full mb-16 pt-3'>
        <Link href="/" className='flex gap-2 flex-center'>
            <Image alt='logo' width={30} height={30} className='object-contain' src='/assets/images/logo.svg' />
            <p className="logo_text">Promptopia</p>
        </Link>
        {/* Desktop Navigation */}
        <div className='sm:flex hidden'>
            {session?.user?(<div className='flex gap-3 md:gap-5'>
                <Link className='black_btn' href="/create-prompt">
                    Create Post
                </Link>
                <button type='button' onClick={()=>signOut}>
                    Sign Out
                </button>
                <Link href="/profile">
                    <Image 
                    src={session?.user.image as string}
                    alt='profile'
                    width={37}
                    height={37}
                    className='rounded-full'
                    />
                </Link>
            </div>):
            (<>
            {providers && Object.values(providers).map(provider => (
                <button type='button' key={provider.name} onClick={()=>{
                    signIn(provider.id)
                }} className='black_btn'>
                    Sign In
                </button>
            ))}
            </>)}
        </div>
        {/* Mobile Navigation */}
        <div className='sm:hidden flex relative'>
            {
                session?.user ? 
                <div className='flex'>
                    <Image 
                    src="/assets/images/logo.svg"
                    alt='profile'
                    width={37}
                    height={37}
                    className='rounded-full'
                    onClick={()=> setToggleDropDown((prev)=> !prev)}
                    />

                    {toggleDropDown && (
                    <div className='dropdown'>
                        <Link href="/profile" className='dropdown_link'
                        onClick={()=> setToggleDropDown(false)}
                        >
                            My Profile
                        </Link>
                        <Link href="/create-prompt" className='dropdown_link'
                        onClick={()=> setToggleDropDown(false)}
                        >
                            Create Prompt
                        </Link>
                        <button
                        type='button'
                        className='mt-5 w-full black_btn'
                        onClick={()=>{
                            setToggleDropDown(true);
                            signOut();
                        }}
                        >
                            Sign out
                        </button>
                    </div>
                )}
                </div>:<>
                {providers && Object.values(providers).map(provider => (
                <button type='button' key={provider.name} onClick={()=>{
                    signIn(provider.id)
                }} className='black_btn'>
                    Sign In
                </button>
            ))}
                </>
            }
        </div>
    </nav>
  )
}

export default Nav