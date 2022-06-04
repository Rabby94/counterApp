import React, { useState } from 'react'

const StateData = () => {
  const [data,dataChange]=useState(0);
  const incriment= ()=>{
    dataChange(data+1);
  }
  const decriment= ()=>{
    dataChange(data-1)
  }
  return (
    <div>
      {/* Count: <span className={`badge bg-${count===0 ? "danger" : count>0 ? "success" : 'warning'}`}>{count}</span> */}

      <div className="row">
        <div className="col-12">
            <div>
              Counter :
              <span className={`badge bg-${data==0 ? "danger" : data<0 ? "warning" : "primary"} `} > {data}</span>
            </div>
            <div className="buttone mt-5">
              <button className='px-5 py-1 bg-light border border-danger border-3 fs-4 mx-3'
              onClick={incriment}
              >Incriment</button>
              <button className='px-5 py-1 bg-light border border-danger border-3 fs-4 mx-3'>Rrset</button>
              <button className='px-5 py-1 bg-light border border-danger border-3 fs-4 mx-3'
              onClick={decriment}
              >Decriment</button>
            </div>
            <hr className='border border-danger border-2 '/>
        </div>
      </div>

    </div>
  )
}

export default StateData