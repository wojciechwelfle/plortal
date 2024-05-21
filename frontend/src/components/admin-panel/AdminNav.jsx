import Nav from "react-bootstrap/Nav";
import Tab from "react-bootstrap/Tab";
import "./AdminPanel.css";

const AdminNav = ({ navItems }) => {
    return (
        <>
            <Tab.Container defaultActiveKey={navItems[0].eventKey}>
                <Nav
                    justify
                    variant="pills"
                    defaultActiveKey="/home"
                    style={{ padding: "10px" }}
                >
                    {navItems.map((item, i) => (
                        <Nav.Item className="custom-nav-item" key={i}>
                            <Nav.Link
                                eventKey={item.eventKey}
                                className="nav-link"
                            >
                                {item.text}
                            </Nav.Link>
                        </Nav.Item>
                    ))}
                </Nav>
                <Tab.Content style={{ padding: "10px", paddingTop: "50px" }}>
                    {navItems.map((item, i) => (
                        <Tab.Pane eventKey={item.eventKey} key={i}>
                            {item.component}
                        </Tab.Pane>
                    ))}
                </Tab.Content>
            </Tab.Container>
        </>
    );
};

export default AdminNav;
