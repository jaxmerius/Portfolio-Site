import Favicon from "../components/favicon";
import Nav from "../components/nav";

export default function Contact() {
  return (
    <div className="h-screen">
      <Favicon />
      <Nav currentPage="Contact" />
      <div className="bg-gray-400 h-full"></div>
    </div>
  );
}
