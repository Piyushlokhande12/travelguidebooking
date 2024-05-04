import React from 'react'
import {Avatar, Menu} from '@mantine/core'

const ProfileMenu = ({user, logout}) => {

  return (
    <Menu>
       <Menu.Target>
          <Avatar src={user?.username} alt='user image' radius={"xl"}/>
       </Menu.Target>
       <Menu.Dropdown>
         <Menu.Item>
           {user?.email}
          </Menu.Item>
          <Menu.Item onClick={() =>{
            localStorage.clear();
            logout();
          } }>
            Logout
          </Menu.Item>

       </Menu.Dropdown>
    </Menu>
  )
}

export default ProfileMenu