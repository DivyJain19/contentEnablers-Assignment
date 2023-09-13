import React, { useState } from 'react';
import classes from './NavigationMenu.module.css';
import data from '../site.json';
import ContentSection from './ContentSection';
console.log(data);
const NavigationMenu = () => {
  const [selectedId, setSelectedId] = useState(0);
  function onTabSelect(id) {
    setSelectedId(id);
  }
  return (
    <>
      <div className={classes.menu}>
        {data?.map((item) => {
          return (
            <div
              className={`${classes.tab} ${
                item.id === selectedId ? classes.selected : ''
              }`}
              key={item.id}
              onClick={() => onTabSelect(item.id)}
            >
              {item.name}
            </div>
          );
        })}
      </div>
      {data && <ContentSection content={data[selectedId]?.tabs} />}
    </>
  );
};

export default NavigationMenu;
