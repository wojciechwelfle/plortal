import Nav from "react-bootstrap/Nav";
import Col from "react-bootstrap/Col";

import Row from "react-bootstrap/Row";
import Tab from "react-bootstrap/Tab";
import "./AdminPanel.css";
import { Card } from "react-bootstrap";

const navItems = [
    {
        eventKey: "first",
        text: "Dodaj/Usuń Budynek",
        component: <Card>test</Card>,
    },
    {
        eventKey: "second",
        text: "Edytuj obiekty na mapie",
        component: <Card>test2</Card>,
    },
    {
        eventKey: "third",
        text: "Dodaj/Usuń użytkownika",
        component: <Card>test3</Card>,
    },
];

const AdminPanel = () => {
    return (
        <div className="panel-container">
            <Tab.Container id="left-tabs-example" defaultActiveKey="first">
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
                                            style={{ fontSize: "17px" }}
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
