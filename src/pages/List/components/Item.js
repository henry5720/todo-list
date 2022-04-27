import React from "react";

// [Item組件] 從[List組件]接收 data 處理 -> 傳給[Lis組件]
const Item=function({listData, del}){
    return (
        <ul className="item">
            {listData.map(item=>{
                const {id, note}=item;
                return (
                    <Lis key={id} del={del} id={id} note={note}/>
                );
            })}
        </ul>
    );
}

// [Lis組件]個別id 過濾 [Lis組件]全部id -> 留下不相等的 -> 使用setData
const Lis=function({del, id, note}){
    function delNote(){
        // del={setData()}
        del(prev=>{ 
            const newPrev=prev.filter(item=>{
                console.log("item.id:",item.id);
                console.log("id:",id);
                return item.id != id;
            })
            // console.log("newPrev:",newPrev);
            return newPrev
        }); 
    }
    return (
        <li id={id}>
            {note}
            <button onClick={delNote} className="remove">del</button>
        </li>
    );
}

export default Item;