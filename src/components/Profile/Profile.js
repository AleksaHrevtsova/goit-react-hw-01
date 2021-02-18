import React from "react";
import PropTypes from "prop-types";
import classes from "./Profile.module.css";

const Profile = ({ name, tag, location, avatar, stats }) => {
  return (
    <div className={classes.profile}>
      <div className={classes.description}>
        <img
          src={avatar}
          alt="Аватар пользователя"
          className={classes.avatar}
        />
        <p className={classes.name}>{name}</p>
        <p className={classes.tag}>{tag}</p>
        <p className={classes.location}>{location}</p>
      </div>

      <ul className={classes.stats}>
        <li>
          <span className={classes.label}>Followers</span>
          <span className={classes.quantity}>{stats.followers}</span>
        </li>
        <li>
          <span className={classes.label}>Views</span>
          <span className={classes.quantity}>2000</span>
        </li>
        <li>
          <span className={classes.label}>Likes</span>
          <span className={classes.quantity}>3000</span>
        </li>
      </ul>
    </div>
  );
};
export default Profile;

console.log(Profile.defaultProps);
Profile.defaultProps = {
  name: "Unknown",
  location: "Unknown",
};

Profile.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  stats: PropTypes.oneOfType([PropTypes.object, PropTypes.array]).isRequired,
};
