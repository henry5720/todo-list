import React, { useState } from "react";
import Edit from "./components/Edit";
import Item from "./components/Item";
import { Link } from "react-router-dom";

import "../../scss/List.scss";


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