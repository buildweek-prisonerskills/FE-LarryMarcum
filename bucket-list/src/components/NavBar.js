import React from "react";
import { Tab, Menu, Icon } from "semantic-ui-react";
import { NavLink } from "react-router-dom";

const Nav = props => <NavLink exact {...props} activeClassName="active" />;

const createLabel = (iconName, labelText) => (
  <span>
    <Icon name={iconName} />
    {labelText}
  </span>
);

const bucketList = createLabel("home", "Your Bucket List");
const completedItems = createLabel("users", "Completed Items");

const panes = [
  {
    menuItem: (
      <Menu.Item key="list" as={Nav} to={`/active`} content={bucketList} />
    )
  },
  {
    menuItem: (
      <Menu.Item
        key="completed"
        as={Nav}
        to={`/completed`}
        content={completedItems}
      />
    )
  }
];

const TabNav = () => <Tab panes={panes} renderActiveOnly={false} />;

export default TabNav;
