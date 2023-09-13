import { Container, Row, Col } from "react-bootstrap";
import logo from "../assets/images/portfolio.svg";
import navIcon1 from "../assets/images/linkedin.svg";
import navIcon2 from "../assets/images/github.svg";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <Col size={12} sm={6}>
            <img src={logo} alt="Logo" style={{ width: '80px', height: 'auto'}}/>
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end py-3">
              <div className="social-icon">
                <a href="https://linkedin.com/in/alejandro-silva-343094250" target="_blank" rel="noreferrer"><img src={navIcon1} alt="" /></a>
                <a href="https://github.com/AlejSilva" target="_blank" rel="noreferrer"><img src={navIcon2} alt="" /></a>
              </div>
            <p>Alejandro Silva 2023</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}