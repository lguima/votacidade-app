import React, { useEffect, useState } from 'react';
import { Button, NavLink } from 'reactstrap';

import classnames from 'classnames';

const NavPillsButton = (props) => {
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    setIsActive(props.activeTab === props.toggleTabId);
  }, [props.activeTab, props.toggleTabId]);

  return (
    <NavLink
      className={classnames({
        active: isActive,
        'text-uppercase': true,
        'px-3': true,
      })}
      onClick={() => {
        props.toggle(props.toggleTabId);
      }}
      tag={Button}
      color={isActive ? 'primary' : 'light'}
      href="#"
    >
      <small>
        <span
          className={classnames({
            'd-none': !isActive,
            'mr-1': true,
          })}
        >
          ✓
        </span>
        {props.children}
      </small>
    </NavLink>
  );
};

export default NavPillsButton;
