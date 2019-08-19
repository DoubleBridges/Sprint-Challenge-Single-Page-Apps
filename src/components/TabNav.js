import React from "react";
import { Tab, Menu, Icon } from "semantic-ui-react";
import { NavLink } from "react-router-dom";

// TODO: Add missing tabs below
const TabNav = () => {

  return (
    <Menu>
      <Menu.Item >
        <Icon name='home' />
        Home
      </Menu.Item>
      <Menu.Item>
        <Icon name='users' />
        Characters
      </Menu.Item>
      <Menu.Item>
        <Icon name='map signs' />
        Locations
      </Menu.Item>
      <Menu.Item>
        <Icon name='film' />
        Episodes
      </Menu.Item>
    </Menu>
  )


};

export default TabNav
