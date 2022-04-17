import React, { Component } from 'react';
import {
  dataAdd,
  singleDataFetch,
  dataEdit,
} from "../../actions/dataListActions";
import { toast } from "react-toastify";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { Container, Table, Button, Row, Col, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import Moment from "moment";
class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      body: "",
      add: false,
      edit: false,
      getId: "",
      singledata: null,
    };
  }

  getId() {
    const urlSearchParams = new URLSearchParams(window.location.search);
    const id = urlSearchParams.get("id");

    if (!id || id.length === 0) {
      return "";
    }

    return id;
  }
  componentDidMount() {
    const job_id = this.getId();
    this.setState({ getId: job_id });
    if (job_id != "") {
      this.props.singleDataFetch(job_id);
    }

  }

  componentWillReceiveProps(newProps) {
    this.setState({
      title: newProps.singledata.title,
      body: newProps.singledata.body,
    });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    let data = {
      title: this.state.title,
      body: this.state.body,
    };

    if (
      this.state.title != null &&
      this.state.body != null
    ) {
      this.props.dataAdd(data);
      this.setState({
        title: "",
        body: "",
      });
    } else {
      toast.error("Field missing");
    }
  };

  handleEdit = (e) => {
    e.preventDefault();
    let data = {
      title: this.state.title,
      body: this.state.body,
    };

    if (
      this.state.title != null &&
      this.state.body != null
    ) {
      this.props.dataEdit(data, this.state.getId);
      this.setState({
        title: "",
        body: "",
      });
    } else {
      toast.error("Field missing");
    }
  }

  BodyChange = (event) => {
    this.setState({ body: event.target.value });
  };
  TitleChange = (event) => {
    this.setState({ title: event.target.value });
  };
  render() {
    const data = this.props.data?.data;
    return (
      <Container>
        <Row>
          <Col xs={6} style={{ margin: "auto", marginBottom: "50px" }}>
            <h4>Edit TimeLog</h4>
          </Col>
        </Row>
        <Row>
          <Col xs={6} style={{ margin: "auto", marginBottom: "50px" }}>
            <Link to="/">
              <Button>Back to the List</Button>
            </Link>
          </Col>
        </Row>
        <Row>
          <Col xs={6} style={{ margin: "auto" }}>
            <div>
              <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Title</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Title"
                    name="title"
                    value={data.title}
                    onChange={this.TitleChange}
                  />
                  <Form.Label>Body</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Body"
                    name="body"
                    value={data.body}
                    onChange={this.BodyChange}
                  />
                </Form.Group>
                {this.state.getId != "" ? (
                  <Button
                    variant="primary"
                    type="submit"
                    onClick={this.handleEdit.bind(this)}
                  >
                    Update
                  </Button>
                ) : (
                  <Button
                    variant="primary"
                    type="submit"
                    onClick={this.handleSubmit.bind(this)}
                  >
                    Submit
                  </Button>
                )}
              </Form>

              <br />
            </div>
          </Col>
        </Row>
      </Container>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    auth: state.auth,
    data: state.data,
    singledata: state.data.singledata,
  };
};
export default connect(mapStateToProps, { dataAdd, singleDataFetch, dataEdit })(
  withRouter(Login)
);
