import React from 'react'




import { useSelector,useDispatch } from 'react-redux'
import { incNumber,decNumber } from './actions'

function App() {

  const mestate=useSelector((state)=>state.changeTheNumber)
  const dispatch=useDispatch()

  return (
    <> 
    <div className='container'>
      <h1>INcrement?decrement</h1>
      <h4>using react redux</h4>

      <div className='quantity'>
        <a className='quantity-minus' title='decrement' onClick={()=> dispatch(decNumber())}><span>-</span></a>
        <input className='quantity_input'  name='quantity'  type='text' value={mestate}/>
        <a className='quantity-plus'title='Increment' onClick={()=> dispatch(incNumber())}><span>+</span></a>
      </div>
       </div>
    </>
  )
}

export default App