import React from 'react'
import Toggle from './Toggle'
import AccordionMenu from './AccordionMenu'
import ItemsNavigation from '../bbdd/items-navigation.json'
import boards from '../assets/Icons/boards'

const NavigationSystem = () => {
    return (
        <div className='navigationSystem'>
            <div className='header px-4'>Gapac site</div>
            <div className='px-4'>
                <AccordionMenu label="boards" id="boards" href="#boards">
                    {ItemsNavigation?.map(ItemsNavigation => <>{ItemsNavigation?.boards?.map(nodes => <div>{nodes}</div>)}</>)}
                    <Toggle subitem="prueba">
                        Second level
                    </Toggle>
                </AccordionMenu>
                <AccordionMenu label="item" id="item" href="#item">
                    {ItemsNavigation?.map(ItemsNavigation => <>{ItemsNavigation?.boards?.map(nodes => <div>{nodes}</div>)}</>)}
                </AccordionMenu>
            </div>

          {/* <Accordion title="Configuration">
            {Configuration?.map(Configuration => <div>{Configuration}</div>)}
          </Accordion>  */}
        </div>
    )
}

export default NavigationSystem
