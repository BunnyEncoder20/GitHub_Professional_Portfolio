
// Importing Bootstraps 
import Col from 'react-bootstrap/Col';

export const ProjectCard = ({ title, description, image}) => {
    return (
        <Col sm={6} md={4}>
            <div className="proj-imgbx">
                <img src={image} alt=''/>
                <div className="proj-txtx">
                    <h2>{title}</h2>
                    <span>{description}</span>
                </div>
            </div>
        </Col>
    )
}