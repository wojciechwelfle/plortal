import { Card } from "react-bootstrap";
import LogoutButton from "../components/LogoutButton";
import AdminPanel from "../components/admin-panel/AdminPanel";

const AdminPanelPage = () => {
    return (
        <>
            <Card>
                <Card.Body>
                    ADMIN <LogoutButton />
                </Card.Body>
            </Card>

            <AdminPanel />
        </>
    );
};

export default AdminPanelPage;
