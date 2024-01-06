import DashboardMain from "../Components/DashboardMain";
import NavSection from "../Components/NavSection";
import AdminBottom from "../Components/AdminBottom";


export default function Dashboard() {


  return (
    <div className="w-[100%] h-[100%] bg-primary">
      {/* Nav bar */}
      <NavSection/>
      {/* Dashboard Main Section */}
      <DashboardMain/>
      {/* Bottom section */}
      <AdminBottom/>
    </div>
  );
}
