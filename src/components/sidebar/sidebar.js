import React from "react";
import {Link} from "react-router-dom"
import "./sidebar.css"
import { AiFillAppstore } from "react-icons/ai";
const Sidebar = () =>{
    return(
        <div className="Sidebar-Container">
            <div className="Sidebar-menu">
                <div className="Sidebar-menu-button">
                    <span className="Sidebar-menu-span">
                    <div className="Sidebar-menu-span-icon">
                        <AiFillAppstore/>
                    </div>
                    <span className="Sidebar-menu-list">
                        <Link to={"/admin/dashboard"}>Hynah Sambar</Link>
                    </span>
                    </span>
                </div>
                <div className="Sidebar-menu-button">
                    <span className="Sidebar-menu-span">
                    <div className="Sidebar-menu-span-icon">
                        <AiFillAppstore/>
                    </div>
                    <span className="Sidebar-menu-list">
                        <Link to={"/"}>Nuur huudas</Link>
                    </span>
                    </span>
                </div>
            </div>
        </div>
    )
}
export default Sidebar