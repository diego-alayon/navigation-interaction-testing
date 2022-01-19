import React from 'react'
import Boards from '../assets/Icons/boards'

const CollapseNavigation = () => {
    return (
        <div className='w-14 collapse'>
            <div className='header px-2'>
            <div className='h-8 grid place-content-center'>
                <Boards className='' width={20} />
            </div>
            </div>
        <div className='h-8 grid place-content-center'>
          <Boards className='' width={20} />
        </div>
    </div>
    )
}

export default CollapseNavigation
