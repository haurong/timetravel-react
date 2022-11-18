import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { imgUrl } from '../../config';
import Star from '../../icon/star.svg';
import Heart from '../../icon/heart_white.svg';
import './Card_List.scss';
function Card_List() {
  return (
    <Row xs={1} md={2} lg={3} className="g-4">
      {Array.from({ length: 12 }).map((_, idx) => (
        <Col>
          <div className=""></div>
          <Card>
            <Card.Img variant="top" src={`${imgUrl}/uploads/Food/F116-1.jpg`} />
            <button className="Heart_Btn">
              <Card.Img src={Heart} className="Card_Heart" />
            </button>
            <Card.Body>
              <Card.Title>Cama | 現金抵用券</Card.Title>
              <Card.Text>
                <Card.Img src={Star} className="Star_icon" />
                <span class="Card_Score">4.5/5</span>
              </Card.Text>
              <h4 variant="primary" class="Card_Price">
                NT100
              </h4>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  );
}

export default Card_List;
