import { useState } from 'react';
import {FaPlus, FaMinus, } from 'react-icons/fa';
import {GrPowerReset} from 'react-icons/gr';

import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement, reset, incrementByAmount } from './counterSlice';

function Counter(){
    const count = useSelector((state)=> state.counter.count);
    const dispatch = useDispatch();
    return (
        <div className="card w-96 bg-neutral text-neutral-content">
          <div className="card-body items-center text-center">
            <div className="stats shadow">
              <div className="stat">
                <div className="stat-value">{count}</div>
              </div>
            </div>
            <div className="card-actions justify-end">
            <button className="btn  btn-square" onClick={()=> dispatch(reset())}>
              <GrPowerReset/>
            </button>
            <button className="btn  btn-square" onClick={()=> dispatch(incrementByAmount(2))}>
              +2
            </button>
            <button className="btn  btn-square" onClick={()=> dispatch(incrementByAmount(-2))}>
              -2
            </button>
            <button className="btn  btn-square" onClick={()=> dispatch(decrement())}>
              <FaMinus/>
            </button>
            <button className="btn  btn-square" onClick={()=> dispatch(increment())}>
              <FaPlus/>
            </button>
            </div>
          </div>
        </div>
    )
}
export {Counter}