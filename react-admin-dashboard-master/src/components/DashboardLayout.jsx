import { Outlet } from 'react-router-dom';
import Topbar from "../scenes/global/Topbar";
import Sidebar from "../scenes/global/Sidebar";
import "./DashboardLayout.css"

const DashboardLayout = () => {
  return (
    <div className='layout-container'>
        <Sidebar/>
      <div className='layout-body'>
      <Topbar/>
        <div className='layout-content'>
          <Outlet />
        </div>
      </div>
    </div>
  );
};
export default DashboardLayout;
