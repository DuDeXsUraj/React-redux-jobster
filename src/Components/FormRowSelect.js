import React from 'react'

function FormRowSelect({name,labelText,handleChange,value,list}) {
  return (
    <div className="form-group">
              <label htmlFor={name}>{labelText || name}</label>
              <select
                className="form-control"
                id="exampleSelect"
                value={value}
                name={name}
                onChange={handleChange}
              >
                {list.map((itemValue,index)=>{
                    return(
                        <option key={index} value={itemValue}>
                            {itemValue}
                        </option>
                    )
                })}
              </select>
    </div>
  )
}

export default FormRowSelect