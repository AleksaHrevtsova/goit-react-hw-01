import React from "react";
import classes from "./Statistics.module.css";

const Statistics = ({ db }) => {
  // console.log(db);
  return (
    <section class={classes.statistics}>
      <h2 className={classes.title}>Upload stats</h2>

      <ul className={classes.statList}>
        {db.map((el) => {
          return (
            <li className={classes.item} key={el.id}>
              <span className={classes.label}>{el.label}</span>
              <span className={classes.percentage}>{el.percentage}%</span>
            </li>
          );
        })}
      </ul>
    </section>
  );
};
export default Statistics;
