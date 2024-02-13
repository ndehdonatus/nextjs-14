import React from 'react'
import { ModeToggle } from '../ModeToggle'
import { ThemeToggle } from '../ThemeToggle'

const Header = () => {
    return (
        <div className='shadow-md'>
            <div className='max-w-screen-2xl mx-auto flex  justify-between items-center p-4 '>
                <h4>Logo</h4>
                <ThemeToggle />
                {/* <ModeToggle /> */}
            </div>
        </div>
    )
}

export default Header