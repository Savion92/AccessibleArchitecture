import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Stack from "react-bootstrap/Stack";
import ContentCard from "../components/ContentCards";

const guidelines = [
  {
    title: "Web Content Accessibility Guidelines",
    url: "https://www.w3.org/TR/WCAG21/",
    subHeading: "WCAG 2.1",
    text: "Web Content Accessibility Guidelines (WCAG) 2.1 covers a wide range of recommendations for making Web content more accessible. ",
  },
  {
    title: "Web Content Accessibility Guidelines",
    url: "https://www.w3.org/TR/WCAG21/",
    subHeading: "WCAG 2.1",
    text: "Web Content Accessibility Guidelines (WCAG) 2.1 covers a wide range of recommendations for making Web content more accessible. ",
  },
  {
    title: "Web Content Accessibility Guidelines",
    url: "https://www.w3.org/TR/WCAG21/",
    subHeading: "WCAG 2.1",
    text: "Web Content Accessibility Guidelines (WCAG) 2.1 covers a wide range of recommendations for making Web content more accessible. ",
  },
  {
    title: "Web Content Accessibility Guidelines",
    url: "https://www.w3.org/TR/WCAG21/",
    subHeading: "WCAG 2.1",
    text: "Web Content Accessibility Guidelines (WCAG) 2.1 covers a wide range of recommendations for making Web content more accessible. ",
  },
  {
    title: "Web Content Accessibility Guidelines",
    url: "https://www.w3.org/TR/WCAG21/",
    subHeading: "WCAG 2.1",
    text: "Web Content Accessibility Guidelines (WCAG) 2.1 covers a wide range of recommendations for making Web content more accessible. ",
  },
  {
    title: "Web Content Accessibility Guidelines",
    url: "https://www.w3.org/TR/WCAG21/",
    subHeading: "WCAG 2.1",
    text: "Web Content Accessibility Guidelines (WCAG) 2.1 covers a wide range of recommendations for making Web content more accessible. ",
  },
];

const HomePage = () => {
  return (
    <Container fluid>
      <Row className="px-4 my-5">
        <Col sm={7}>
          <Stack>
            <h1>Crawling for Accessibility</h1>
            <p class="mt-5">
              We crawl your website to lorem ipsum dolor sit abet, consectetur
              adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna Alicia. Ut enim ad minim venom, quis nostrum
              exercitation ullamco laboris nisi ut aliquip ex ea commodo
              consequent.
            </p>
            <p>
              We crawl your website to lorem ipsum dolor sit abet, consectetur
              adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna Alicia. Ut enim ad minim venom, quis nostrum
              exercitation ullamco laboris nisi ut aliquip ex ea commodo
              consequent. We crawl your website to lorem ipsum dolor sit abet,
              consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
              labore et dolore magna Alicia. Ut enim ad minim venom, quis
              nostrum exercitation ullamco laboris nisi ut aliquip ex ea commodo
              consequent.
            </p>
            <p>
              We crawl your website to lorem ipsum dolor sit abet, consectetur
              adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna Alicia. Ut enim ad minim venom, quis nostrum
              exercitation ullamco laboris nisi ut aliquip ex ea commodo
              consequent. We crawl your website to lorem ipsum dolor sit abet,
              consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
              labore et dolore magna Alicia. Ut enim ad minim venom, quis
              nostrum exercitation ullamco laboris nisi ut aliquip ex ea commodo
              consequent.
            </p>
          </Stack>
        </Col>
        <Col sm={5}>
          {/* <iframe
            class="video responsive-iframe"
            title="Youtube player"
            sandbox="allow-same-origin allow-forms allow-popups allow-scripts allow-presentation"
            src={`https://youtube.com/embed/5H1JGdqLrWo?autoplay=0`}
            styles=" height: 100%, width: 100%"
          ></iframe> */}
        </Col>
      </Row>
      <h1>Guidelines</h1>
      <Row className>
        {guidelines.map((guideLine) => {
          return (
            <ContentCard
              title={guideLine.title}
              subHeading={guideLine.subHeading}
              text={guideLine.text}
              url={guideLine.url}
            />
          );
        })}
      </Row>
    </Container>
  );
};

export default HomePage;
