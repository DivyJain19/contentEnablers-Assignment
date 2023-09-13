import React from 'react';
import classes from './Header.module.css';
import ViewQuiltIcon from '@mui/icons-material/ViewQuilt';
const Header = () => {
  return (
    <div className={classes.header}>
      <div>
        content<span style={{ color: 'red' }}>enablers</span>
      </div>
      <div className={classes.icon}>
        <ViewQuiltIcon />
      </div>
    </div>
  );
};

export default Header;
