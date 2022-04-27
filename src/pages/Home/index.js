import React, { useState } from "react";
import { Link } from 'react-router-dom'

import "../../scss/Home.scss";

// 展示組件(點擊換頁)
const Home=function(){
    return (
        <div className="home">
            <h1>Simple Todo List</h1>
            <Link to="/list" className="btn">
                start
            </Link>
        </div>
    );
}

export default Home;