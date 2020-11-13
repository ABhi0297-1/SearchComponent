import React, { useState } from 'react'
import "./Search.css"
import { Data } from "./Data.js"
import SuggestedItems from './SuggestedItems'
function Search(props) {
    const [data, setData] = useState(Data)
    const [show, setShow] = useState(false)
    const SearchStr = (event) => {
        props.setsearchItem(event.target.value)
        // data.map(data => {
        //     console.log(data);
        // })
        
    }
    
    const SearchAction = () => {
        return data.filter(name => name.name.toLowerCase().includes(props.searchItem.toLowerCase()))
    }
    const addItem = () => {
        let count = 0;
        data.map(data => {
            if (data.name.toLowerCase() == props.searchItem.toLowerCase()) {
                count++;
            }
            ;
        })
        if (count == 0) {
            setData([...data, { name: props.searchItem }])
        }
    }
    const showItems = () => {
        setShow(true)
    }
    const hideItems = () => {
        setShow(false)
    }
    
    return (
        <div className="Main_Cont" >
            <div className="searchCont">
                <input type="text"
                    id="Search_Cont"
                    className="SearchBox"
                    placeholder="Search"
                    value={props.searchItem}
                    onChange={SearchStr}
                    autocomplete="off"
                    onClick={showItems}
                    
                />
                <button id="button" onClick={addItem}>Search</button>
            </div>
            <div className="Array_list_cont" onClick={hideItems} >
                {show && <ul className="ArrayList">
                    {SearchAction().map(name => (
                       <SuggestedItems searchItem={props.searchItem} setsearchItem={props.setsearchItem} name={name.name}/>
                       // <li className="Array_list_Items" onClick={selectItem}>{name.name}</li>
                    ))}
                </ul>}
            </div>
        </div>
    )
}

export default Search
