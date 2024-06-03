import AdminPanel from "../components/admin-panel/AdminPanel";
import NavigationBar from "../components/navbar/Navbar";
import { ThemeProvider } from '../components/facility/ThemeContext';

const AdminPanelPage = () => {
    return (
        <>
            <ThemeProvider>
                <div>
            <NavigationBar/>
            <AdminPanel />
                </div>
            </ThemeProvider>
        </>
    );
};

export default AdminPanelPage;
