import React from 'react'
import Chevron from '../assets/Icons/chevron'

const AccordionMenu = ({ label, id, href, children, icon }) => {
    return (
        <>
            <div className="mainMenu">
                <div className="item cursor-pointer" id={id}>
                    <div className='flex h-8'>
                    <div>{icon}</div>
                        <Chevron width={6} className='mr-4' />
                        <a href={href} className="btn mt-1">{label}</a>
                    </div>
                    <div className="subMenu">
                        {children}
                    </div>
                </div>
            </div>
        </>
    )
}

export default AccordionMenu
