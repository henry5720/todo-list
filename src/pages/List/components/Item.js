import React, { useEffect, useContext } from "react";
import { DataContext } from "..";

import regeneratorRuntime from "regenerator-runtime";

import {getDb, delDb} from "../../../utils/firebase"

/* ==================== [Item組件] ==================== */ 
const Item=function(){
    const data=useContext(DataContext);

    useEffect(()=>{
        getDb(data.setData);
    }, []);

    return (
        <ul className="item">
            {data.data.map(item=>{
                const {id, note}=item;
                return (
                    <Lis key={id} id={id} note={note}/>
                );
            })}
        </ul>
    );
}

/* ==================== [Lis組件] ==================== */ 
// 過濾全部id -> 移除當前點擊(同id) -> 剩下不匹配的(不同id) 
const Lis=function({id, note}){
    const data=useContext(DataContext);

    function delNote(){
        // del={setData()}
        data.setData(prev=>{ 
            const newPrev=prev.filter(item=>{
                // console.log("item.id:",item.id);
                // console.log("id:",id);
                return item.id != id;
            })
            // console.log("newPrev:",newPrev);
            return newPrev;
        });
        delDb(id);
    }
    return (
        <li id={id}>
            {note}
            <button onClick={delNote} className="remove">del</button>
        </li>
    );
}

export default Item;