import Link from 'next/link';
import React, { useState, useEffect } from "react";

import '../../configureAmplify'


const Navbar = () => {
    // const [signedUser, setSignedUser ] = useState(false)
    const elStyling = 'rounded-lg px-3 py-2 text-slate-700 font-medium hover:bg-slate-50 hover:text-slate-800'

    return(
        <nav className={'flex justify-center pt-3 pb-3 space-x-4 border-b bg-cyan-50 border-gray-300'}>
            {
                <>
                    <Link href={'/'} key={1}><a className={elStyling}>HOME</a></Link>
                    <Link href={'/create-post'} key={1}><a className={elStyling}>CREATE POST</a></Link>
                    <Link href={'/profile'} key={1}><a className={elStyling}>PROFILE</a></Link>

                </>
            }
        </nav>
    )
}

export default Navbar