import Favicon from "../components/favicon";
import Nav from "../components/nav";

export default function Education() {
  return (
    <div className="h-screen">
      <Favicon />
      <Nav currentPage="Education" />
      <div className="bg-green-200 h-full"></div>
    </div>
  );
}
