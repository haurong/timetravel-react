import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { TICKET_IMG } from '../ticket-config';
import Map from '../../../../icon/map.svg';
import Heart from '../../../../icon/heart_gray.svg';
import PinkHeart from '../../../../icon/heart.svg';
function Ticket_Card_List({ rows }) {
  return (
    <Row xs={1} md={2} lg={3} className="g-4">
      {rows.map((el, i) => {
        return (
          <Col key={i}>
            <div className=""></div>
            <Card className="Card">
              <Card.Img
                className="card-img"
                variant="top"
                src={`${TICKET_IMG}${el.product_cover}`}
              />

              <Card.Body className="card-margin0">
                <Card.Title>{el.product_name}</Card.Title>
                <Card.Text></Card.Text>
                <p>{el.site_category_name}</p>
                <p className="card-text">
                  {el.city_name}
                  {el.area_name}
                </p>
              </Card.Body>
            </Card>
          </Col>
        );
      })}
    </Row>
  );
}

export default Ticket_Card_List;
