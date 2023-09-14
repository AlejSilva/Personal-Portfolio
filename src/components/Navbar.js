/* eslint-disable jsx-a11y/anchor-is-valid */
import { useState, useEffect } from "react";
import { Navbar as BootstrapNavbar, Nav, Container } from "react-bootstrap";
import logo from '../assets/images/portfolio.svg';
import navIcon1 from '../assets/images/linkedin.svg';
import navIcon2 from '../assets/images/github.svg';

export const MyNavBar = () => {

  const [activeLink, setActiveLink] = useState('home');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    }

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, [])

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  }

  return (
      <BootstrapNavbar expand="md" className={scrolled ? "scrolled" : ""}>
        <Container>
          <BootstrapNavbar.Brand href="/">
            <img src={logo} alt="Logo" style={{ width: '80px', height: 'auto' }}/>
          </BootstrapNavbar.Brand>
          <BootstrapNavbar.Toggle aria-controls="basic-navbar-nav">
            <span className="navbar-toggler-icon"></span>
          </BootstrapNavbar.Toggle>
          <BootstrapNavbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="#home" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('home')}>Home</Nav.Link>
              <Nav.Link href="#aboutme" className={activeLink === 'aboutme' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('aboutme')}>About Me</Nav.Link>
              <Nav.Link href="#skills" className={activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('skills')}>Skills</Nav.Link>
              <Nav.Link href="#projects" className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('projects')}>Projects</Nav.Link>
            </Nav>
            <span className="navbar-text">
              <div className="social-icon">
                <a href="https://linkedin.com/in/alejandro-silva-343094250" target="_blank" rel="noreferrer"><img src={navIcon1} alt="" /></a>
                <a href="https://github.com/AlejSilva" target="_blank" rel="noreferrer"><img src={navIcon2} alt="" /></a>
              </div>
                <button className="vvd"><span>Let’s Connect</span></button>
            </span>
          </BootstrapNavbar.Collapse>
        </Container>
      </BootstrapNavbar>
  )
}