import { Link, usePage } from '@inertiajs/react';
import React from 'react';
import DropdownMenu from '../Components/DropdownMenu';

export default function ResponsiveNavigation() {

    const { auth } = usePage().props;

    return (
        <nav className="border-b border-gray-800 bg-black px-4 py-4 lg:hidden">
            <div className="flex items-center justify-between">
                <Link className="text-xl font-semibold text-white" href="/">
                    {import.meta.env.VITE_APP_NAME}
                </Link>
                <DropdownMenu
                    toggleAnimate={false}
                    label={
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth={2}
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M4 6h16M4 12h16m-7 6h7"
                            />
                        </svg>
                    }
                >
                    <DropdownMenu.Links href={'/'}>Home</DropdownMenu.Links>
                    <DropdownMenu.Links href={'/articles'}>
                        Articles
                    </DropdownMenu.Links>
                    {auth.user ?
                        <>
                            <DropdownMenu.Links href={route('dashboard')}>
                                Dashboard
                            </DropdownMenu.Links>
                            <DropdownMenu.Links href={'#'}>My profile</DropdownMenu.Links>
                            <DropdownMenu.Links href={'#'}>Settings</DropdownMenu.Links>
                            <DropdownMenu.Links href={'#'}>
                                New article
                            </DropdownMenu.Links>
                            <DropdownMenu.Links href={'#'}>
                                My articles
                            </DropdownMenu.Links>
                            <DropdownMenu.Links
                                href={route('logout')}
                                method="POST"
                                as="button"
                            >
                                Logout
                            </DropdownMenu.Links>
                        </>
                        :
                        <>
                            <DropdownMenu.Links href={route('register')}>
                                Register
                            </DropdownMenu.Links>
                            <DropdownMenu.Links href={route('login')}>
                                Login
                            </DropdownMenu.Links>
                        </>
                    }

                </DropdownMenu>
            </div>
        </nav>
    );
}
