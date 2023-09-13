import React, { useState } from 'react';
import classes from './ContentSection.module.css';
import Grid from '@mui/material/Grid';
import VideoPlayer from './VideoPlayer';
const ContentSection = (content) => {
  console.log(content);
  const [selectedTab, setSelectedTab] = useState(1);
  function onTabSelect(id) {
    setSelectedTab(id);
  }
  return (
    <div>
      {/* <iframe
        className={classes.video}
        src="https://www.youtube.com/embed/63CPQl00khg?si=rB_sp5wPxI5OqHcD"
        title="YouTube video player"
        frameBorder="0"
        allow="fullscreen; accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      ></iframe> */}
      <VideoPlayer />
      <div className={classes.contentBox}>
        <div className={classes.tabs}>
          {content?.content?.map((item) => {
            return (
              <div
                className={`${classes.tab} ${
                  item.id === selectedTab ? classes.selectedTab : ''
                }`}
                key={item.id}
                onClick={() => onTabSelect(item.id)}
              >
                {item.name}
              </div>
            );
          })}
        </div>
        <div style={{ padding: '1rem', width: '100%' }}>
          {content?.content?.[selectedTab - 1].list.map((item) => {
            console.log('item', item);
            return (
              <div>
                <p className={classes.title}>{item.name}</p>
                <Grid
                  container
                  rowSpacing={1}
                  columnSpacing={{ xs: 1, sm: 2, md: 3 }}
                  style={{ margin: 0 }}
                >
                  {item?.items?.map((vid) => {
                    return (
                      <div className={classes.videoBox}>
                        <div className={classes.dummyBox}></div>
                        <p style={{ marginTop: '1rem', color: 'black' }}>
                          {vid.title}
                        </p>
                      </div>
                    );
                  })}
                </Grid>
                <hr className={classes.border} />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ContentSection;
