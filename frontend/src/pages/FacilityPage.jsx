import Facility from "../components/facility/Facility";
import NavigationBar from "../components/navbar/Navbar";
import { ThemeProvider } from '../components/facility/ThemeContext';

const FacilityPage = () => {
  return (
    <>
        <ThemeProvider>
            <div>
      <NavigationBar />
      <Facility />
            </div>
        </ThemeProvider>
    </>
  );
};

export default FacilityPage;
