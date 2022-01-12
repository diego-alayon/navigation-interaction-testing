import React, {useState} from 'react'

const Toggle = ({subitem, children}) => {

    const [show, toggleShow] = useState(false);

    return (
        <div>
            <div onClick={() => toggleShow(!show)}>{subitem}</div>    
            {show && <div>{children}</div>}
        </div>
    )
}

export default Toggle
