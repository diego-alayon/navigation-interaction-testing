import React from 'react'
import Chevron from '../assets/Icons/chevron'

const AccordionMenu = ({ label, id, href, children }) => {
    return (
        <>
            <div className="mainMenu">
                <div className="item" id={id}>
                    <div className='flex'>
                        <Chevron width={6} />
                        <a href={href} className="btn">{label}</a>
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
