import { Outlet } from 'react-router-dom';
import Header from '../components/Header.jsx';
import Footer from '../components/Footer.jsx';
import Main from '../components/Main.jsx';
import Sidebar from '../components/Sidebar.jsx';

export default function DashboardLayout() {
  return (
    <>
      <Header />
      <div className="container dashboard">
        <Sidebar />
        <Main className="main--dashboard"><Outlet /></Main>
      </div>
      <Footer />
    </>
  );
}
