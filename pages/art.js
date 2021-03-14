import Favicon from "../components/favicon";
import Nav from "../components/nav";

export default function Art() {
  return (
    <div className="h-screen">
      <Favicon />
      <Nav currentPage="Art" />
      <div className="bg-green-200 h-full"></div>
    </div>
  );
}
