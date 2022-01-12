import React, { useState } from 'react'
import 'react-pro-sidebar/dist/css/styles.css'
import NavigationSystem from '../components/NavigationSystem'

export default function Home() {

  const [collapseMenu, setCollapseMenu] = useState(false)

  return (
    <>
      {/* <Sidebar /> */}
      {/* <Button type="primary" label="Button" icon={<Add fill="white-100"/>} /> */}
      <div className='w-full h-full flex'>
        <div className='w-12'>
          <div onClick={() => setCollapseMenu(!collapseMenu)}>collapse me!</div>
          <div>hola</div>
        </div>

        <div className='w-full'>
            <div className='grid grid-cols-12'>{collapseMenu && <div className="col-span-3"><NavigationSystem /></div>}
              <div className={collapseMenu ? '' : 'col-span-12' }>
                Content
              </div>
            </div>
        </div>
      </div>

      


    </>
  )
}

