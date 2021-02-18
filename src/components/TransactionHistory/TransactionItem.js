import React from "react";

const TransactionItem = ({ el }) => (
  <tr key={el.id}>
    <td>{el.type}</td>
    <td>{el.amount}</td>
    <td>{el.currency}</td>
  </tr>
);

export default TransactionItem;
