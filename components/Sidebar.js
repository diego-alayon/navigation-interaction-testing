import React, {useState} from 'react'
import { ProSidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar'
import { UilAngleDoubleLeft } from '@iconscout/react-unicons'
import { Sites, Boards, Scaning, Inventory, Software, Reports, Configuration } from '../bbdd/items-navigation'

const Sidebar = ({collapsed}) => {

    const [toggle, setToggle] = useState(collapsed)
    

    return (
        <>
            <ProSidebar collapsed={toggle ? true : false}>
            <Menu iconShape="square">
                <MenuItem icon={<UilAngleDoubleLeft onClick={() => setToggle(!toggle)} />}>Lansweeper</MenuItem>
                {console.log('Sites',Sites)}
                <MenuItem>Boards</MenuItem>
                    <SubMenu title="Second level">
                        {Sites?.map(Sites => <MenuItem>{Sites}</MenuItem>)}
                        <SubMenu title="third level">
                            {Sites?.map(Sites => <MenuItem>{Sites}</MenuItem>)}
                            <SubMenu title="Fourth level">
                                {Sites?.map(Sites => <MenuItem>{Sites}</MenuItem>)}
                            </SubMenu>
                        </SubMenu>
                    </SubMenu>
            </Menu>
            </ProSidebar>
        </>
    )
}

export default Sidebar
