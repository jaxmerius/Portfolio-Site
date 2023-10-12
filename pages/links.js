import Container from "../components/container";
import Link from "next/link";

export default function Links() {
  return (
    <Container currentPage={"links"}>
      <div className="lg:grid-cols-3 md:grid-cols-2 custGrid">
        <div className="lg:col-span-3 md:col-span-2 text-4xl font-bold">
          Relevant Links
        </div>
      </div>
    </Container>
  );
}
