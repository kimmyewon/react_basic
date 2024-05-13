import React, { useState } from "react";
import Toolbar from "./Toolbar";

function Landingpage(props) {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const onClickLogin = () => {
        setIsLoggedIn(true);
    };

    const onClickLogout = () => {
        setIsLoggedIn(false);
    };

    return (
        <div>
            <Toolbar 
                isLoggedIn = {isLoggedIn}
                onClickLogin = {onClickLogin}
                onClickLogout = {onClickLogout}
            />

            <div style={{ padding: 16 }}>로그인화면</div>
        </div>
    )
}

export default Landingpage;