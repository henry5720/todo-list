import React, { useState } from "react";


const Item=function({listData, del}){
    return (
        <ul className="item">
            <Lis del={del} listData={listData}/>
        </ul>
    );
}

const Lis=function({listData, del}){
    function delNote(){
        del(
            prev=>{
                console.log("prev:",prev);
                return []
            }
        ); // setData()
    }
    return listData.map(
        (item)=>{
            const {id, note}=item;
            return (
                <li key={id}>
                    {note}
                    <button onClick={delNote} className="remove">del</button>
                </li>
            );
        }
    );
}



export default Item;