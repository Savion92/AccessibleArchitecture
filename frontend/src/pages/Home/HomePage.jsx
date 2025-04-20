import YouTube from "react-youtube";

import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Stack from "react-bootstrap/Stack";
import ContentCard from "../../components/ContentCards";

import { guidelines } from "./cardData";

const playerOpts = { playerVars: { cc_load_policy: 1, rel: 0 } };
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
        <Col sm={5} className="mt-5">
          <YouTube videoId="5H1JGdqLrWo" opts={playerOpts} />
        </Col>
      </Row>
      <h1>Guidelines</h1>
      <Row className="gap-4">
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
