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
    <Container fluid style={{ paddingBottom: "5rem" }}>
      <Row className="px-4 my-5 d-flex justify-content-center">
        <Col className="sm-8 mx-5 me-auto">
          <Stack>
            <h1>Crawling for Accessibility</h1>
            <p className="mt-5">
              Accessibility features are essential tools within technology that
              facilitate user interaction for individuals with disabilities.
              They encompass a broad spectrum of functionalities designed to
              assist various needs, including visual, auditory, motor, and
              cognitive impairments. For instance, screen readers and text
              enlargement support those with visual impairments, while closed
              captions aid individuals with hearing difficulties. Voice
              recognition technology enables users with motor impairments to
              navigate devices effectively. By integrating these features,
              technology becomes more inclusive, ensuring all users have
              equitable access to digital content and services.
            </p>
            <p>
              Accessibility features are important because they ensure everyone,
              regardless of their abilities or disabilities, can access, use,
              and benefit from technology and digital content. They promote
              inclusivity, enhance user experience, and support equal
              opportunities, enabling all individuals to participate fully in
              society. Going deeper, the importance of accessibility features
              extends beyond individual user benefits to broader societal and
              ethical implications: legal compliance, market expansion,
              innovation, corporate social responsibility, quality of life.
            </p>
            <p>
              Essential accessibility features for a website include text
              alternatives for non-text content, keyboard navigation, sufficient
              color contrast, resizable text, accessible forms, and ARIA
              (Accessible Rich Internet Applications) landmarks for enhanced
              navigation. Additionally, providing captions for audio and video
              content, ensuring compatibility with screen readers, and
              implementing responsive design to accommodate various devices are
              crucial for making a website accessible to all users, including
              those with disabilities.
              <br />
              <br />
              <em>We aim to crawl your website, and ensure it's accesible!</em>
            </p>
          </Stack>
        </Col>
        <Col className="mt-5 sm-4 offset-md-1">
          <YouTube videoId="5H1JGdqLrWo" opts={playerOpts} />
        </Col>
      </Row>
      <h1 className="text-center mb-3">Guidelines</h1>
      <Row className="gap-4">
        {guidelines.map((guideLine, i) => {
          return (
            <ContentCard
              title={guideLine.title}
              subHeading={guideLine.subHeading}
              text={guideLine.text}
              url={guideLine.url}
              key={i}
            />
          );
        })}
      </Row>
    </Container>
  );
};

export default HomePage;
