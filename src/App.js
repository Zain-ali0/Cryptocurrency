import React from "react";
import { Router , Routes , Link , Route } from "react-router-dom";
import { Layout , Typography , Space } from "antd";
import "./App.css";

import { NavBar , Homepage , Cryptocurrencies , News } from "./components";

const App = () => {
    return(
        <div className="app">
            <div className="navbar">
                <NavBar/>
            </div>
            <div className="main">
                <Layout>
                <div className="routes">
                    <Routes>
                        <Route exact path="/" element={<Homepage/>} />
                        <Route exact path="/Cryptocurrencies" element={<Cryptocurrencies/>} />
                        <Route exact path="/news" element={<News/>} />
                    </Routes>
                </div>
                </Layout>
                <div className="footer">
                    <Space >
                        <Link to="/">Home</Link>
                        <Link to="/cryptocurrencies">Cryptocurrencies</Link>
                        <Link to="/news">News</Link>
                    </Space>
                    <Typography.Title  level={5} style={{color:'white' , textAlign:'center'}} >
                        Crptoverse <br/>
                        All rights reserverd @ <a href="https://github.com/Zain-ali0">Zain</a>
                    </Typography.Title>
                </div>
            </div>
        </div>
    );
}

export default App;