import "./AdminPanel.css";
import MapPanel from "./map-panel/MapPanel";
import NewsPanel from "./news-panel/NewsPanel";
import UserPanel from "./user-panel/UserPanel";
import AdminNav from "./AdminNav";
import {useEffect, useState} from "react";

const navItems = [
    {
        eventKey: "first",
        text: "Dodaj/Usuń Budynek",
        component: <MapPanel />,
    },
    {
        eventKey: "second",
        text: "Edytuj aktualności",
        component: <NewsPanel />,
    },
    {
        eventKey: "third",
        text: "Usuń użytkownika",
        component: <UserPanel />,
    },
];

const AdminPanel = () => {

    const savedFontSize = parseInt(localStorage.getItem('fontSize'), 10) || 20;
    const savedTheme = localStorage.getItem('theme') || 'light';
    const [fontSize] = useState(savedFontSize);
    const [theme] = useState(savedTheme);

    useEffect(() => {
        document.documentElement.style.setProperty('--font-size', `${fontSize-5}px`);
        document.documentElement.classList.remove('light-theme', 'dark-theme', 'blue-theme', 'purple-theme');
        document.documentElement.classList.add(`${theme}-theme`);
    }, [fontSize, theme]);

    return (
        <>
            <div className="panel-container">
                <AdminNav navItems={navItems} />
            </div>
        </>
    );
};

export default AdminPanel;
