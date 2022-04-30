import React from "react";
import { Link } from 'react-router-dom'

import "../../scss/Home.scss";

/* ==================== [Home組件] ==================== */ 
const Home=function(){
    return (
        <div className="home">
            <h1>Simple Todo List</h1>
            <Link to="/list" className="btn">
                start
            </Link>
        </div>
    );
    // 點擊跳轉 /link (Link 會渲染成 a)
}

export default Home;