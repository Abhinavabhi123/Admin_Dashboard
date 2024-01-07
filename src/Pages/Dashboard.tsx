import DashboardMain from "../Components/DashboardMain";
import NavSection from "../Components/NavSection";
import AdminBottom from "../Components/AdminBottom";


export default function Dashboard() {
  window.scrollTo(0, 0);
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
