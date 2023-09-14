import { Col } from "react-bootstrap";

export const ProjectCard = ({ title, description, imageUrl, link}) => {
    return (
        <Col sm={6} md={4}>
            <a href={link} 
            target="_blank" 
            rel="noopener noreferrer" 
            style={{ textDecoration: 'none', color: 'white' }}>
                <div className="proj-imgbox">
                    <img src={ imageUrl } alt="projectImg"/>
                    <div className="proj=txtx">
                        <h4>{title}</h4>
                        <span>{description}</span>
                    </div>
                </div>
            </a>
        </Col>
    )
}