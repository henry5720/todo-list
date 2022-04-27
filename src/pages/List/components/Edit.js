import React, { useState } from "react";
import {v4} from "uuid";

// [Edit組件] 設置note -> 傳給[List組件]
const Edit=function({listData, add}){
    const [note, setNote]=useState("");

    // [onChange] 紀錄 value
    function getNote(e){
        setNote(e.target.value);
    }

    // [setData] 紀錄 id(uuid) & note
    function addNote(){
        if(note){
            add((prev)=>{
                return [
                    ...prev,
                    {
                        id: v4(),
                        note,
                    }
                ];
            });    
        }
    }
    // console.log("note:", note);
    // console.log("listData:", listData);

    return (
        <div className="edit">
            <input value={note} onChange={getNote} type="text" placeholder="write something"/>
            <button onClick={addNote} className="add">add</button>
        </div>
    );
}

export default Edit;