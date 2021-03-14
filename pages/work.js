import Favicon from "../components/favicon";
import Nav from "../components/nav";

export default function Work() {
  return (
    <div className="h-screen">
      <Favicon />
      <Nav currentPage="Work" />
      <div className="bg-green-200 h-full"></div>
    </div>
  );
}
