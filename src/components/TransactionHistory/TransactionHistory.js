import React from "react";
import classes from "./TransactionHistory.module.css";

import TransactionItem from "./TransactionItem";

const TransactionHistory = ({ db }) => {
  return (
    <table className={classes.transactionHistory}>
      <thead>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>

      <tbody>
        {db.map((el) => {
          // console.log(el);
          return <TransactionItem el={el} />;
        })}
      </tbody>
    </table>
  );
};

export default TransactionHistory;
