'use client' // Because we're using usePathname() from next/navigation

import React from 'react'
import Link from 'next/link';
import { usePathname } from 'next/navigation';


import { Header } from '../../../../payload/payload-types';
import { Gutter } from '../../Gutter';
import { noHeaderFooterUrls } from '../../../constants';


import classes from './index.module.scss'
import Image from 'next/image';
import { HeaderNav } from '../Nav';


const HeaderComponent = ( {header}: { header: Header} ) => {
    const pathname = usePathname();
    return (
        // Turn multiple classNames into a single string.
        // Filter for values that return true then join with a space.
        // Then you can pass it through className={}
        <nav className={[classes.header, noHeaderFooterUrls.includes(pathname) && classes.hide]
            .filter(Boolean)
            .join(' ')}
            >
            <Gutter className={classes.wrap}>
                <Link href="/">
                    <Image src="/logo-black.svg" alt="logo" width={170} height={50} />
                </Link>

                <HeaderNav header={header} />
            </Gutter>
        </nav>
    )
}

export default HeaderComponent;