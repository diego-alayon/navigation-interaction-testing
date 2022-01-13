import React, { useState } from 'react'
import 'react-pro-sidebar/dist/css/styles.css'
import NavigationSystem from '../components/NavigationSystem'
import { UilAngleDoubleRight } from '@iconscout/react-unicons'
import { UilAngleDoubleLeft } from '@iconscout/react-unicons'
import CollapseNavigation from '../components/CollapseNavigation'

export default function Home() {

  const [collapseMenu, setCollapseMenu] = useState(false)

  return (
    <>
      {/* <Sidebar /> */}
      {/* <Button type="primary" label="Button" icon={<Add fill="white-100"/>} /> */}
      <div className='w-full h-full flex'>
        { !collapseMenu && <CollapseNavigation />}
        <div className='w-full h-full'>
            <div className='grid grid-cols-12 h-full'>{collapseMenu && <div className="col-span-2"><NavigationSystem /></div>}
              <div className={collapseMenu ? 'col-span-10' : 'col-span-12' }>
                <div className='header'>
                  <div className='flex'>
                    <div className='w-7'>
                        <div className='boxIcon' onClick={() => setCollapseMenu(!collapseMenu)}>
                          { collapseMenu ? <div><UilAngleDoubleLeft className='center__icons' /> </div>: <UilAngleDoubleRight className='center__icons' /> }
                        </div>
                      </div>
                      <div>Hola</div>
                  </div>

                </div>
              </div>
            </div>
        </div>
      </div>

    </>
  )
}

