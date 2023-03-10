import { Col, Container, Row } from "react-bootstrap";
import DesktopGalery from "./desktop";
import GaleryMobile from "./mobile";

function Galery({ firstTitle, secondTitle }) {
  return (
    <Container className="galery-section">
      <Row>
        <Col className="d-none d-md-block">
          <DesktopGalery firstTitle={firstTitle} secondTitle={secondTitle} />
        </Col>
        <Col md="d-block d-md-none">
          <GaleryMobile secondTitle={secondTitle} />
        </Col>
      </Row>
    </Container>
  );
}

export default Galery;
