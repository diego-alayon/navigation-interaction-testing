import React, { useState } from 'react'

const Collapsible = ({label, children}) => {

    const [isOpen, setisOpen] = useState(false);

    return (
        <div className='collapsible'>
            <div onClick={() => setisOpen(!isOpen)}>{label}</div>
            {isOpen && <div>{children}</div>}
        </div> 
    )
}

export default Collapsible

