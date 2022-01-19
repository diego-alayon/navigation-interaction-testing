import React from 'react'
import Chevron from '../assets/Icons/chevron'

const Breadcrumbs = ({ index, child, lastchild }) => {
    return (
        <div className='flex content-center'>
            <a href="#!">{index}</a>
            <Chevron width={6} className='mx-2' />
            <a href="#!">{child}</a>
            <Chevron width={6} width={6} className='mx-2' />
            <a className="text-grey-40 cursor-not-allowed" href="#!">{lastchild}</a>
        </div>
    )
}

export default Breadcrumbs
