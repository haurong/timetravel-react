import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import moment from 'moment-timezone';
// import { imgUrl } from '../../config';
// import Star from '../../icon/star.svg';
// import Heart from '../../icon/heart_white.svg';
import './Card_List.scss';
function Itinerary_Card_List({ rows }) {
  return (
    <Row xs={1} md={2} lg={3} className="g-4">
      {rows.map((el) => {
        return (
          <div key={el.sid}>
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
                  {el.list_name}
                  {el.date}
                  {el.day}
                </p>
              </Card.Body>
            </Card>
            <p className="card-text">
              {el.member_sid}
              {el.list_name}
              <br />
              {moment(el.date).format('YYYY-MM-DD')}
              <br />
              {el.day}
            </p>
          </div>
        );
      })}
    </Row>
  );
}

export default Itinerary_Card_List;
