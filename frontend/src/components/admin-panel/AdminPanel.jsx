import Nav from "react-bootstrap/Nav";
import Tab from "react-bootstrap/Tab";
import "./AdminPanel.css";
import MapPanel from "./map-panel/MapPanel";
import NewsPanel from "./news-panel/NewsPanel";
import UserPanel from "./user-panel/UserPanel";

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
                <Tab.Container defaultActiveKey={navItems[0].eventKey}>
                    <Nav
                        justify
                        variant="pills"
                        defaultActiveKey="/home"
                        style={{ padding: "10px" }}
                    >
                        {navItems.map((item, i) => {
                            return (
                                <Nav.Item className="custom-nav-item" key={i}>
                                    <Nav.Link
                                        eventKey={item.eventKey}
                                        className="nav-link"
                                    >
                                        {" "}
                                        {item.text}
                                    </Nav.Link>
                                </Nav.Item>
                            );
                        })}
                    </Nav>
                    <Tab.Content
                        style={{ padding: "10px", paddingTop: "50px" }}
                    >
                        {navItems.map((item, i) => {
                            return (
                                <Tab.Pane eventKey={item.eventKey}>
                                    {item.component}
                                </Tab.Pane>
                            );
                        })}
                    </Tab.Content>
                </Tab.Container>
            </div>
        </>
    );
};

export default AdminPanel;
