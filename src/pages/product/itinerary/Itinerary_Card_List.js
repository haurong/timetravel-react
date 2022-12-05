import { Link } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import moment from 'moment-timezone';
import Trash from './../../../icon/Trash.svg';
import Edit from './../../../icon/edit.svg';

function Itinerary_Card_List({ rows }) {
  return (
    <Row xs={1} md={2} lg={3} className="g-4">
      {rows.map((el) => {
        return (
          <div className="CardList" key={el.sid}>
            <Card className="Card">
              <Card.Img className="card-img" variant="top" src={''} />
              <Card.Body className="d-flex flex-column justify-content-between">
                <div className=" card-margin0">
                  <Card.Title>{el.name}</Card.Title>
                  <Link to={'/itinerary/' + el.list_number}>
                    <h2>{el.list_name}</h2>
                  </Link>

                  <p>
                    {moment(el.date).format('YYYY-MM-DD')}~
                    {moment(el.date).add(el.day, 'd').format('YYYY-MM-DD')}
                  </p>
                  <p>一共{el.day}天</p>
                </div>
                <span className="icon d-flex">
                  <img src={Edit} alt=""></img>
                  <img src={Trash} alt=""></img>
                </span>
              </Card.Body>
            </Card>
          </div>
        );
      })}
    </Row>
  );
}

export default Itinerary_Card_List;
