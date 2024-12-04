import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
const user = [
  {
    name: "Kiprono Hillary",
    imageUrl: "https://i.imgur.com/yXOvdOSs.jpg",
    imageSize: 90
    },
    {
        name: "Kiprono Hillary",
        imageUrl: "https://i.imgur.com/yXOvdOSs.jpg",
        imageSize: 90
    },
    
    {
        name: "Kiprono Hillary",
        imageUrl: "https://i.imgur.com/yXOvdOSs.jpg",
        imageSize: 90
    },
    
    {
        name: "Kiprono Hillary",
        imageUrl: "https://i.imgur.com/yXOvdOSs.jpg",
        imageSize: 90
    },
    
    {
        name: "Kiprono Hillary",
        imageUrl: "https://i.imgur.com/yXOvdOSs.jpg",
        imageSize: 90
      },
];

function Profile() {
  return (
    
      <Container fluid>
        <Row>
          {user.map((users) => {
            return (
              <Col sm={6}>
                <img
                  src={users.imageUrl}
                  alt=""
                //   style={{
                //     width: users.imageSize,
                //     height: users.imageSize,
                //   }}
                />
                <h2>{users.name}</h2>
              </Col>
            );
          })}
        </Row>
      </Container>
    
  );
}

export default Profile;
