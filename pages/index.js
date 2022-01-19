import React, { useState } from 'react'
import 'react-pro-sidebar/dist/css/styles.css'
import NavigationSystem from '../components/NavigationSystem'
import { UilAngleDoubleRight } from '@iconscout/react-unicons'
import { UilAngleDoubleLeft } from '@iconscout/react-unicons'
import CollapseNavigation from '../components/CollapseNavigation'
import Image from 'next/image'
import table from '../assets/imgs/table.png'
import Breadcrumbs from '../components/Breadcrumbs'

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
                    <div className='w-7 ml-6 mr-4'>
                        <div className='boxIcon' onClick={() => setCollapseMenu(!collapseMenu)}>
                          { collapseMenu ? <div><UilAngleDoubleLeft className='center__icons' /> </div>: <UilAngleDoubleRight className='center__icons' /> }
                        </div>
                      </div>
                      <Breadcrumbs index="index" child="child" lastchild="lastChild" className="ml-3" />
                  </div>
                </div>
                <Image src={table} />
              </div>
            </div>
        </div>
      </div>

    </>
  )
}

