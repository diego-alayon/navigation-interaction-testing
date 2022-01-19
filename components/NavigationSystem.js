import React from 'react'
import Toggle from './Toggle'
import AccordionMenu from './AccordionMenu'
import ItemsNavigation from '../bbdd/items-navigation.json'

const NavigationSystem = () => {
    return (
        <div className='navigationSystem'>
            <div className='header px-4 mb-4'>Gapac site</div>
            <div className=''>
                <AccordionMenu label="boards" id="boards" href="#boards" icon='configuration'>
                    {ItemsNavigation?.map(ItemsNavigation => <>{ItemsNavigation?.boards?.map(nodes => <div className='py-2'>{nodes}</div>)}</>)}
                    <Toggle subitem="prueba">
                        Second level
                    </Toggle>
                </AccordionMenu>
                <AccordionMenu label="item" id="item" href="#item" icon='boards'>
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
