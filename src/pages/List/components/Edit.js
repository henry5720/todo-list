import React, { useContext } from "react";
import { DataContext } from "..";
import {v4} from "uuid";

import {addDb, getDb} from "../../../utils/firebase"

/* ==================== [Edit組件] ==================== */ 
const Edit=function(){
    const data=useContext(DataContext);

    // [onChange] 紀錄 value
    function getNote(e){
        data.setNote(e.target.value);
    }

    // [setData] 紀錄 id(uuid) & note
    function addNote(){
        const id=v4();
        addDb(id, data.note);
        data.setNote("");
        getDb(data.setData);

    }
    return (
        <div className="edit">
            <input value={data.note} onChange={getNote} type="text" placeholder="write something"/>
            <button onClick={addNote} className="add">add</button>
        </div>
    );
}

export default Edit;