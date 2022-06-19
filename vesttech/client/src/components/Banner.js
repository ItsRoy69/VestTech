import Platform from '../images/platform.png'
import '../styles/Banner.css'
import {Row, Col, Container} from 'react-bootstrap'

const Banner = () => {
    return (  
        <Container>
            <Row className='align-items-center'>
                <Col className="image-wrapper h-100" lg={6} md={6} sm={12}>
                    <img src={Platform} alt="platform-img" className='platform' />
                </Col>
                <Col className="text-wrapper h-100 pb-5 ps-5 pe-5" lg={5} md={6} sm={12}>
                    <p className='company-name'>VestTech</p>
                    <p className='banner-txt'>Innovative platform for smart investments 🚀</p>
                    <button className='how-btn'>How?</button>
                </Col>
            </Row>

        </Container>
    );
}
 
export default Banner;



