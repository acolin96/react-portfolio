import { Card, Col, Row, Container } from 'react-bootstrap';

import SlideIn from '../../utils/SlideIn';

import { Github, BrowserChrome } from 'react-bootstrap-icons';

import projects from '../../utils/projects.json';

// import img1 from `./assets/${projects[0].image}.png`;

function Projects() {
  return (

    <SlideIn>
      <Container className='projects'>
        <Row xs={1} md={3} className="g-4">
          {projects.map(({ title, image, desc, repoLink, liveLink }) => (
            <Col>
              <Card>
               {image}
                {/* <Card.Img variant="top" src={require("./assets/"+image+".png")} /> */}
                {/* <Card.Img variant="top" src={require(`./assets/${image}.png`)} /> */}
                {/* <Card.Img variant="top" src={img1} /> */}
                <Card.Body>
                  <Card.Title>{title}</Card.Title>
                  <Card.Text>
                    {desc}
                  </Card.Text>
                  <Card.Link href={repoLink} target="blank"><Github size={36} /></Card.Link>
                  <Card.Link href={liveLink} target="blank"><BrowserChrome size={36} /></Card.Link>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </SlideIn>
  );
}

export default Projects;