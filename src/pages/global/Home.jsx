import React, { useState } from "react";
import { Sidebar } from "../../components/@Global/sidebar/Sidebar";
import '../../assets/css/@Global.css';

export const Home = () => {
    const [active, setActive] = useState('');

    return (
        <div className="home">
            <Sidebar active={active} setActive={setActive} />
            <h1>
                Hello World
            </h1>
        </div>
    );
}