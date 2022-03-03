import React, { useState } from 'react';
import styles from '../../assets/js/styles/components/notification/NotificationStyles';
import { makeStyles } from '@material-ui/core/styles';
import { useHistory } from 'react-router-dom';

const useStyles = makeStyles(styles);

const NOTIFICATION_TYPE = {
  ALL: 'ALL',
  CLAP: 'CLAP',
  COMMENT: 'COMMENT',
  SAVE: 'SAVE',
  FOLLOW: 'FOLLOW',
};

const Notification = ({ notification }) => {
  const getNotification = () => {
    if (notification.type == 'CLAP') {
      return (
        <>
          <strong>{notification.source.username}</strong> clapped for "
          {notification.projectName}"
        </>
      );
    }
  };
  const classes = useStyles();
  const history = useHistory();
  return (
    <>
      {notification.type == NOTIFICATION_TYPE.FOLLOW && (
        <div
          className={classes.notificationStyle}
          display="flex"
          onClick={() => history.push(notification.user)}
        >
          <img
            className={classes.image}
            src={notification.picture}
            alt="user- profile"
          />

          <p className={classes.message}>{notification.message}</p>

          {!notification.viewed && <div className={classes.viewDot}></div>}
        </div>
      )}

      {notification.type != NOTIFICATION_TYPE.FOLLOW && (
        <div
          className={classes.notificationStyle}
          display="flex"
          onClick={() =>
            history.push('creator/' + notification.source.username)
          }
        >
          <img
            className={classes.image}
            src={notification.source.avatar}
            alt="user-profile"
          />

          <div className={classes.text}>
            <p className={classes.message}>{getNotification()}</p>
            <p className={classes.time}>{notification.time}</p>
          </div>
          {!notification.viewed && <div className={classes.viewDot}></div>}
        </div>
      )}
    </>
  );
};

export default Notification;
