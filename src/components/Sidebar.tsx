import { House, Hash, Bell, Envelope, BookmarkSimple, FileText, User, DotsThreeCircle, } from 'phosphor-react'
import { NavLink } from 'react-router-dom';
import twitterLogo from "../assets/logo-twitter.svg"

import './Sidebar.css';


export function Sidebar() {
    return (
        <aside className="sidebar">
            <img src={twitterLogo} alt="logo" className="logo" />
            <nav className="main-navegation">
                <NavLink to="/" ><House weight="fill" />Home</NavLink>
                <a href=""><Hash /> Explore</a>
                <a href=""><Bell />Notification</a>
                <a href=""><Envelope />Messages</a>
                <a href=""><BookmarkSimple />Bookmarks</a>
                <a href=""><FileText />Lists</a>
                <a href=""><User />Profile</a>
                <a href=""><DotsThreeCircle />More</a>
            </nav>
            <button className="new-tweet" type="button">Tweet</button>
        </aside>
    )
}