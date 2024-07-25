// components/Navbar.tsx
import Link from 'next/link';
import { Button } from '../ui/button';
import { FaUserAlt } from 'react-icons/fa';
import UserMenu from './UserMenu';
import { User } from '@supabase/supabase-js';
import Login from '../../app/(auth)/login/page';





interface NavbarProps{
    user?: User | null
}

export const Navbar = ({user}:NavbarProps) => {


    return (
        <div className="bg-personal text-white p-4">
            <nav className="container mx-auto flex justify-between items-center">
                <h1 className="text-xl font-bold">
                    <Link href="/">
                        LOGO
                    </Link>
                </h1>
                <ul className="flex space-x-4 items-center *:border-r-2 *:border-b-2 *:border-blue-500  *:rounded-full *:p-2 *:transition-all *:duration-400 *:easy-in-out">
                    <li className='hover:bg-blue-400 bg-cyan-400'>
                        <Link href="/home">
                           home
                        </Link>
                    </li>
                    <li className='hover:bg-blue-400 bg-cyan-400'>
                        <Link href="/about">
                            lavoramo nsieme zi
                        </Link>
                    </li>
                    <li className='hover:bg-blue-400 bg-cyan-400'>
                        <Link href="/product">
                            Products
                        </Link>
                    </li>
                    <li className='hover:bg-blue-400 bg-cyan-400'>
                        <Link href="/courses">
                            courses
                        </Link>
                    </li>
                    <li className='border-none'>
                        {user ? <UserMenu user={user}/>  :  <Link href="/login">
                            <Button className='text-slate-800 font-bold rounded-full px-6' variant={'secondary'}>Login</Button>
                        </Link>}
                       
                    </li>
                </ul>
            </nav>
        </div>
    );
};


