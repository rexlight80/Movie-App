import React from 'react'

function SearchBox({value,setValue}) {
    return (
        <div className="col col-sm-4">
   <form >
   <input className="form-control" type="text" placeholder="Enter a movie..." value={value} onChange={e=>setValue(e.target.value)}/>
   
   </form>
   </div>
    )
}

export default SearchBox;