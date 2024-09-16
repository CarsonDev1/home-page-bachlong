import Container from "./components/Container";
import Section from "./components/Section";
import Banner from "./pages/home/banner";
import Category from "./pages/home/category";

export default function Home() {
  return (
    <div className="">
      <Container>
        <Section>
          <Banner />
          <Category />
        </Section>
      </Container>
    </div>
  );
}
