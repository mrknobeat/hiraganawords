import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

export default function Navbar() {
    return (
        <>
            <div className="sticky top-0 z-50">
                <nav className="backdrop-blur-xl items-center flex bg-background/80 h-16 border-b border-divider">
                    <div className="container flex mx-auto items-center h-full justify-center">
                        <div className="logo ">
                            <Button color="primary" href='/'><div className='font-bold text-white'>HiragaText</div></Button>
                        </div>

                    </div>
                </nav>
            </div>
        </>
    )
}