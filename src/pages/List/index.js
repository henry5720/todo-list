import React, { useState } from "react";
import { Link } from "react-router-dom";

import Edit from "./components/Edit";
import Item from "./components/Item";

import "../../scss/List.scss";

// [List組件] 設置 data -> 傳給 [Edit組件] & [Item組件]
const List=function(){
    const [data, setData]=useState([]);
    return (
        <div className="list">
            <Edit listData={data} add={setData}/>
            <Item listData={data} del={setData}/>
            <Link to="/" className="btn">
                home
            </Link>
        </div>
    );
}

export default List;