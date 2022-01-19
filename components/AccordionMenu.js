import React from 'react'
import Chevron from '../assets/Icons/chevron'
import Icon from './Icon'

const AccordionMenu = ({ label, id, href, children, icon }) => {
    return (
        <>
            <div className="mainMenu">
                <div className="item cursor-pointer" id={id}>
                    <div className='flex h-12 px-3.5'>
                        <div className='grid content-center mr-4'><Icon icon={icon} size={20} /></div>
                        <Chevron width={6} className='mr-4' />
                        <a href={href} className="btn mt-1 pt-2">{label}</a>
                    </div>
                    <div className="subMenu px-14 bg-lightGrey-60">
                        {children}
                    </div>
                </div>
            </div>
        </>
    )
}

export default AccordionMenu
