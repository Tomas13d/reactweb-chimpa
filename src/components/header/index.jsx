import { Col, Container, Row } from "react-bootstrap";
import "./header.css";

function Header({deskTopText, mobileText, headerClass }) {
  return (
    <header className={`${headerClass} d-flex align-items-center`}>
    <Container>
        <Row>
            <Col md="6">
                <h3 className="d-none d-md-block ff-circularBlack">{deskTopText}</h3>
                <h3 className="d-block d-md-none text-center ff-circularBlack">{mobileText}</h3>
            </Col>
        </Row>
    </Container>
</header>
  );
}

export default Header;
