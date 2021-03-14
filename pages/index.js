import Favicon from "../components/favicon";
import Nav from "../components/nav";

export default function Overview() {
  return (
    <div className="h-screen">
      <Favicon />
      <Nav currentPage="Overview" />
      <div className="bg-green-200 h-full"></div>
    </div>
  );
}
