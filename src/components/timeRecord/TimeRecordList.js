import React, { Component } from "react";
import { dataFetch, dataDelete } from "../../actions/dataListActions";
import { toast } from "react-toastify";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { Container, Table, Button, Row, Col } from "react-bootstrap";
import Moment from "moment";
import {Link } from "react-router-dom";
class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      startDateTime: "",
      endDateTime: "",
      description: "",
      add: false,
      edit: false,
    };
  }

  componentDidMount() {
    this.props.dataFetch();
  }
  addRow(){
    this.setState({add:true})
  }
  handleDelete= (id) => {
    this.props.dataDelete(id)
    console.log("id",id)
  }
  
  render() {

    const data = this.props.data?.data;
    console.log("data",data)
    return (
      <Container>
        <Row>
          <Col>
            <h3>Time Log Record</h3>
          </Col>
        </Row>
        <Table striped bordered hover style={{ marginTop: "100px" }}>
          <thead>
            <tr>
              <th>Id</th>
              <th>Title</th>
              <th>Body</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {data
              ? data.map((data) => (
                  <tr>
                    <td>{data.id}</td>
                    <td>{data.title}</td>
                    <td>{data.body}</td>

                    <td
                      style={{
                        display: "flex",
                        justifyContent: "space-evenly",
                      }}
                    >
                     
                      <Link to={`/edit?id=${data.id}`}>
                        <Button>Edit</Button>
                      </Link>
                      &nbsp;
                      <Button
                        variant="danger"
                        onClick={() => this.handleDelete(data.id)}
                      >
                        Delete
                      </Button>
                    </td>{" "}
                  </tr>
                ))
              : null}
          </tbody>
        </Table>
        <Link to="/add">
          <Button>Add</Button>
        </Link>
      </Container>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    auth: state.auth,
    data:state.data
  };
};
export default connect(mapStateToProps, { dataFetch, dataDelete })(
  withRouter(Login)
);
