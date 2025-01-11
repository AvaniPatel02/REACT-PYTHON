import React from 'react'
import { useDispatch } from 'react-redux';
import { actionCreators } from './state/index';
import { bindActionCreators } from 'redux';
// import { depositMoney, withdrawMoney } from './state/action-creators/index';
import {useSelector} from 'react-redux';


const Shop = () => {
  const balance = useSelector(state => state.amount)

  const dispatch = useDispatch();
  const {withdrawMoney,depositMoney}= bindActionCreators(actionCreators,dispatch)

  return (
    <div>
        <h2>Deposite/Withdraw Money</h2>
      <button className="btn btn-primary mx-2" onClick={() => (withdrawMoney(100))}>-</button>
     Update Balance ({balance})
      <button className="btn btn-primary mx-2" onClick={() => (depositMoney(100))}>+</button>
    </div>
  )
}

export default Shop
