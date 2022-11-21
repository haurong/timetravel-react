import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
// import { imgUrl } from '../../config';
// import Star from '../../icon/star.svg';
// import Heart from '../../icon/heart_white.svg';
import './Card_List.scss';
function Site_Card_List({ rows }) {
  return (
    <Row xs={1} md={2} lg={3} className="g-4">
      {rows.map((el) => {
        return (
          <Col key={el.sid}>
            <div className=""></div>
            <Card>
              <Card.Img variant="top" src={''} />
              <button className="Heart_Btn">
                <Card.Img src={''} className="Card_Heart" />
              </button>
              <Card.Body>
                <Card.Title>{el.name}</Card.Title>
                <Card.Text></Card.Text>
                <h5>{el.site_category_name}</h5>
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

export default Site_Card_List;
