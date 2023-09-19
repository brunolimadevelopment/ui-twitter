import { House, Hash, Bell, Pencil, Envelope, BookmarkSimple, FileText, User, DotsThreeCircle, } from 'phosphor-react'
import { NavLink } from 'react-router-dom';
import twitterLogo from "../assets/logo-twitter.svg"

import './Sidebar.css';


export function Sidebar() {
    return (
        <aside className="sidebar">
            <img src={twitterLogo} alt="logo" className="logo" />
            <nav className="main-navegation">
                <NavLink to="/" ><House weight="fill" /><span>Home</span></NavLink>
                <a href=""><Hash /><span>Explore</span></a>
                <NavLink to="/notifications"><Bell /><span>Notification</span></NavLink>
                <a href=""><Envelope /><span>Messages</span></a>
                <a href=""><BookmarkSimple /><span>Bookmarks</span></a>
                <a href=""><FileText /><span>Lists</span></a>
                <a href=""><User /><span>Profile</span></a>
                <a href=""><DotsThreeCircle /><span>More</span></a>
            </nav>
            <button className="new-tweet" type="button"><Pencil /><span>Tweet</span></button>
        </aside>
    )
}