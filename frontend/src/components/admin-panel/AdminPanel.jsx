import "./AdminPanel.css";
import MapPanel from "./map-panel/MapPanel";
import NewsPanel from "./news-panel/NewsPanel";
import UserPanel from "./user-panel/UserPanel";
import AdminNav from "./AdminNav";
import {useTheme} from "../theme-context/ThemeContext";

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

    const { fontSize, theme } = useTheme();

    return (
        <>
            <div className="panel-container">
                <AdminNav navItems={navItems} />
            </div>
        </>
    );
};

export default AdminPanel;
