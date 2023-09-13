import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Container, Row, Col } from 'react-bootstrap';
import colorSharp from '../assets/images/color-sharp.png';


export const Skills = () => {
    const responsive = {
        superLargeDesktop: {
            breakpoint: { max: 4000, min: 3000},
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 }, 
            items: 5
        }, 
        tablet: {
            breakpoint: { max: 1024, min: 464 }, 
            items: 5
        },
        mobile: {
            breakpoint: { max: 464, min: 0 }, 
            items: 5
        }
    };

    return (
        <section className="skill" id="skills">
            <Container>
                <Row>
                    <Col>
                    <div className = "skill-bx">
                        <h2>
                            Skills
                        </h2>
                        <p>
                        The skills, tools and technologies I use to bring ideas to life
                        </p>
                        <Carousel responsive={responsive} infinite={true} className="skill-slider">
                            <div className="item">
                                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" 
                                alt="CSS3"
                                style={{ width: "100px", height: "100px" }} />
                                <h5>CSS3</h5> 
                                <br></br>
                                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" 
                                alt="Javascript"
                                style={{ width: "100px", height: "100px" }} />
                                <h5>Javascript</h5>
                            </div>
                            <div className="item">
                                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg"
                                 alt="Firebase"
                                 style={{ width: "100px", height: "100px" }} />
                                <h5>Firebase</h5> 
                                <br></br>
                                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jquery/jquery-original.svg"
                                 alt="Jquery"
                                 style={{ width: "100px", height: "100px" }} />
                                <h5>Jquery</h5> 
                            </div>
                            <div className="item">
                                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg"
                                 alt="Python"
                                 style={{ width: "100px", height: "100px" }} />
                                <h5>Python</h5>
                                <br></br>
                                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg"
                                 alt="C"
                                 style={{ width: "100px", height: "100px" }} />
                                <h5>C</h5> 
                            </div>
                            <div className="item">
                                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
                                 alt="React"
                                 style={{ width: "100px", height: "100px" }} />
                                <h5>React</h5> 
                                <br></br>
                                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg"
                                 alt="Nodejs"
                                 style={{ width: "100px", height: "100px" }} />
                                <h5>Nodejs</h5> 
                            </div>
                            <div className="item">
                                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg"
                                 alt="HTML5"
                                 style={{ width: "100px", height: "100px" }} />
                                <h5>HTML5</h5> 
                                <br></br>
                                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg"
                                 alt="Git"
                                 style={{ width: "100px", height: "100px" }} />
                                <h5>Git</h5> 
                            </div>
                            <div className="item">
                                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/oracle/oracle-original.svg"
                                 alt="Oracle"
                                 style={{ width: "100px", height: "100px" }} />
                                <h5>Oracle</h5> 
                                <br></br>
                                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg"
                                 alt="VScode"
                                 style={{ width: "100px", height: "100px" }} />
                                <h5>VScode</h5> 
                            </div>
                            <div className="item">
                                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/unity/unity-original.svg"
                                 alt="Unity"
                                 style={{ width: "100px", height: "100px", filter: "invert(1)" }} />
                                <h5>Unity</h5> 
                                <br></br>
                                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"
                                 alt="Github"
                                 style={{ width: "100px", height: "100px", filter: "invert(1)" }} />
                                <h5>Github</h5> 
                            </div>
                        </Carousel>
                    </div>
                    </Col>
                </Row>
            </Container>
            <img className="background-image-left" src={colorSharp} alt="left-background"/>
        </section>
    )

}