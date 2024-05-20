import Nav from "react-bootstrap/Nav";
import Col from "react-bootstrap/Col";

import Row from "react-bootstrap/Row";
import Tab from "react-bootstrap/Tab";
import "./AdminPanel.css";
import MapPanel from "./map-panel/MapPanel";
import NewsPanel from "./news-panel/NewsPanel";
import UserPanel from "./user-panel/UserPanel";

const navItems = [
    {
        eventKey: "first",
        text: "Dodaj/Usuń Budynek",
        component: <MapPanel/>,
    },
    {
        eventKey: "second",
        text: "Edytuj aktualności",
        component: <NewsPanel/>,
    },
    {
        eventKey: "third",
        text: "Dodaj/Usuń użytkownika",
        component: <UserPanel/>,
    },
];

const AdminPanel = () => {
    return (
        <div className="panel-container">
            <Tab.Container id="left-tabs-example" defaultActiveKey={navItems[0].eventKey}>
                <Row>
                    <Col sm={3}>
                        <Nav
                            variant="pills"
                            className="flex-column"
                            style={{ padding: "10px" }}
                        >
                            {navItems.map((item, i) => {
                                return (
                                    <Nav.Item
                                        className="custom-nav-item"
                                        key={i}
                                    >
                                        <Nav.Link
                                            eventKey={item.eventKey}
                                            className="nav-link"
                                        >
                                            {console.log(`${i} ${item.text}`)}
                                            {item.text}
                                        </Nav.Link>
                                    </Nav.Item>
                                );
                            })}
                        </Nav>
                    </Col>
                    <Col sm={9}>
                        <Tab.Content style={{ padding: "10px" }}>
                            {navItems.map((item, i) => {
                                return (
                                    <Tab.Pane eventKey={item.eventKey}>
                                        {item.component}
                                    </Tab.Pane>
                                );
                            })}
                        </Tab.Content>
                    </Col>
                </Row>
            </Tab.Container>
        </div>
    );
};

export default AdminPanel;
