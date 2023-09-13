import "react-multi-carousel/lib/styles.css";
import { Container, Row, Col } from 'react-bootstrap';
import colorSharp from '../assets/images/color-sharp.png';
import profilePic from '../assets/images/linkedinprofilepic.jpg';

export const AboutMe = () => {
    const responsive = {
        superLargeDesktop: {
            breakpoint: { max: 4000, min: 3000},
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 }, 
            items: 3
        }, 
        tablet: {
            breakpoint: { max: 1024, min: 464 }, 
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 }, 
            items: 1
        }
    };

    return (
        <section className="aboutme">
            <Container>
                <Row>
                    <div className = "aboutme-bx">
                        <Col>
                            <h2>
                                About Me
                            </h2>
                        </Col>
                        <br></br>
                        <Row>
                        <Col xs={12} md={5}>
                        <img src={ profilePic } alt="left-background" id="profilePic"/>
                        </Col>
                        <Col xs={12} md={7} className="d-flex flex-column justify-content-center">
                        <b>I love building things</b>
						<p>I've been playing with computers since I was 10 years old. 
										Since then I have been tinkering with all sorts of technologies that 
									in some way or another led me to be want to learn computer science. While I 
								consider myself above proficient in multiple coding languages, I know I have a lot to learn
							and am extremely eager to improve my skills!</p>
                        </Col>
                        </Row> 
                    </div>
                </Row>
            </Container>
            <img className="background-image-left" src={colorSharp} alt="left-background"/>
        </section>
    )

}