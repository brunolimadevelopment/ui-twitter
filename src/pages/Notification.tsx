import { useState } from "react"
import { Header } from "../components/Header"
import { Separator } from "../components/Separator"
import { Tab } from "../components/Tab"
import './Notification.css'


export function Notification() {
    return (
        <main className="notification">
            <Header title="Notifications" />

            <Separator />

            <Tab />
            <Tab />
            <Tab />
        </main>
    )
}