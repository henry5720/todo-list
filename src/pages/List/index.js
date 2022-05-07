import React, { useState } from "react";
import { Link } from "react-router-dom";

import Edit from "./components/Edit";
import Item from "./components/Item";

import "../../scss/List.scss";

const DataContext=React.createContext();

/* ==================== [List組件] ==================== */ 
const List=function(){
    const [data, setData]=useState([]);
    const [note, setNote]=useState("");

    return (
        <div className="list">
            <DataContext.Provider value={{
                data: data, 
                setData: setData,
                note: note,
                setNote: setNote
            }}>
                <Edit/>
                <Item/>
                <Link to="/" className="btn">
                    home
                </Link>
            </DataContext.Provider>
        </div>
    );
}

export {List as default, DataContext};