import React, { useState } from "react";
import {v4} from "uuid";

const Edit=function({listData, add}){
    const [note, setNote]=useState("");

    function getNote(e){
        setNote(e.target.value);
    }

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