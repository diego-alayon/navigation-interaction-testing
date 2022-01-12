import React from 'react'
import Toggle from './Toggle'
import AccordionMenu from './AccordionMenu'
import ItemsNavigation from '../bbdd/items-navigation.json'

const NavigationSystem = () => {
    return (
        <>
            <AccordionMenu label="boards" id="boards" href="#boards">
                {ItemsNavigation?.map(ItemsNavigation => <>{ItemsNavigation?.boards?.map(nodes => <div>{nodes}</div>)}</>)}
                <Toggle subitem="prueba">
                    Second level
                </Toggle>
            </AccordionMenu>
            <AccordionMenu label="item" id="item" href="#item">
                {ItemsNavigation?.map(ItemsNavigation => <>{ItemsNavigation?.boards?.map(nodes => <div>{nodes}</div>)}</>)}
            </AccordionMenu>
           
          {/* <Accordion title="Configuration">
            {Configuration?.map(Configuration => <div>{Configuration}</div>)}
          </Accordion>  */}
        </>
    )
}

export default NavigationSystem
