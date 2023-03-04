import { Col, Container, Row } from "react-bootstrap";
import "./header.css";

function Header({deskTopText, mobileText, headerClass }) {
  return (
    <header class={`${headerClass} d-flex align-items-center`}>
    <Container>
        <Row>
            <Col md="6">
                <h3 class="d-none d-md-block">{deskTopText}</h3>
                <h3 class="d-block d-md-none text-center">{mobileText}</h3>
            </Col>
        </Row>
    </Container>
</header>
  );
}

export default Header;
