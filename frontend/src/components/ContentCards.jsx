import Card from "react-bootstrap/Card";

const getDomain = (url) => {
  try {
    const urlObject = new URL(url) || "Origin";
    return urlObject.hostname;
  } catch (error) {
    console.log("Invalid domain: ", error);
  }
};

function ContentCard({ title, url, subHeading, text }) {
  return (
    <Card style={{ width: "17rem" }} className="shadow">
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">{subHeading}</Card.Subtitle>
        <Card.Text>{text}</Card.Text>
        <Card.Link href={url}>{getDomain(url)}</Card.Link>
      </Card.Body>
    </Card>
  );
}

export default ContentCard;
