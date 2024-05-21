import "./AdminPanel.css";
import MapPanel from "./map-panel/MapPanel";
import NewsPanel from "./news-panel/NewsPanel";
import UserPanel from "./user-panel/UserPanel";
import AdminNav from "./AdminNav";

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
        text: "Dodaj/Usuń użytkownika",
        component: <UserPanel />,
    },
];

const AdminPanel = () => {
    return (
        <>
            <div className="panel-container">
                <AdminNav navItems={navItems} />
            </div>
        </>
    );
};

export default AdminPanel;
