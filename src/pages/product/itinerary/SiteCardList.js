import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
// import { imgUrl } from '../../config';
// import Star from '../../icon/star.svg';
// import Heart from '../../icon/heart_white.svg';
function SiteCardList({ rows }) {
  return (
    <Row xs={1} md={2} lg={3} className="g-4">
      {rows.map((el, i) => {
        return (
          <Col key={i}>
            <div className=""></div>
            <Card className="Card">
              <Card.Img className="card-img" variant="top" src={''} />
              {/* <button className="Heart_Btn">
                <Card.Img src={''} className="Card_Heart" />
              </button> */}
              <Card.Body className="card-margin0">
                <Card.Title>{el.name}</Card.Title>
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

export default SiteCardList;
