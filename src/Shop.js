import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { actionCreators } from "./state/index";
import { bindActionCreators } from "redux";

const Shop = () => {
  const dispatch = useDispatch();
  const actions = bindActionCreators(actionCreators, dispatch);
  const balance = useSelector((state) => state.amount);

  return (
    <div className="my-2 mx-2">
      <h2>Deposit/Withdraw</h2>
      <button
        className="btn btn-primary mx-2"
        onClick={() => {
          actions.withdrawMoney(100);
        }}
      >
        -
      </button>
      Update Balance (Rs.{balance})
      <button
        className="btn btn-primary mx-2"
        onClick={() => {
          actions.depositMoney(100);
        }}
      >
        +
      </button>
    </div>
  );
};

export default Shop;
