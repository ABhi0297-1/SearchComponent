import React from 'react'

function SuggestedItems(props) {
    const selectItem = (e) => {
        props.setsearchItem(e.target.innerText)
        
    }
    return (
        <div>
            <li className="Array_list_Items" onClick={selectItem}>{props.name}</li>
        </div>
    )
}

export default SuggestedItems
