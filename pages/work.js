import Favicon from "../components/favicon";
import Nav from "../components/nav";

export default function Work() {
  return (
    <div className="h-screen">
      <Favicon />
      <Nav currentPage="Work" />
      <div className="bg-gray-400 h-full"></div>
    </div>
  );
}
