import Favicon from "../components/favicon";
import Nav from "../components/nav";

export default function Development() {
  return (
    <div className="h-screen">
      <Favicon />
      <Nav currentPage="Development" />
      <div className="bg-green-200 h-full"></div>
    </div>
  );
}
