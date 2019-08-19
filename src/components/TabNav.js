import React from "react";
import { Tab, Menu, Icon } from "semantic-ui-react";
import { NavLink } from "react-router-dom";

// TODO: Add missing tabs below
const TabNav = () => {

  return (
    <Menu>
      <Menu.Item >
        <NavLink exact to="/">
          <Icon name='home' />
          Home
      </NavLink>
      </Menu.Item>
      <Menu.Item>
        <NavLink exact to="/characters">
          <Icon name='users' />
          Characters
      </NavLink>
      </Menu.Item>
      <Menu.Item>
        <NavLink exact to="/locations">
          <Icon name='map signs' />
          Locations
        </NavLink>
      </Menu.Item>
      <Menu.Item>
        <NavLink exact to="/episodes">
          <Icon name='film' />
          Episodes
      </NavLink>
      </Menu.Item>
    </Menu>
  )


};

export default TabNav
