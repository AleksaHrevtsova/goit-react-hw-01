import React from "react";
import classes from "./FriendList.module.css";

const FriendList = ({ db }) => {
  // console.log(db);
  return (
    <ul class="friend-list">
      {db.map((el) => {
        // console.log(el);
        return (
          <li className={classes.item} key={el.id}>
            {el.isOnline ? (
              <span className={classes.statusOn}></span>
            ) : (
              <span className={classes.status}></span>
            )}
            <img
              className={classes.avatar}
              src={el.avatar}
              alt={el.name}
              width="48"
            />
            <p className={classes.name}>{el.name}</p>
          </li>
        );
      })}
    </ul>
  );
};
export default FriendList;
