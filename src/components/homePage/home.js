import React, { Component } from 'react';
import { toast } from "react-toastify";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
class home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isEdit: false,
      department_name: "",

    };

  }
  componentDidMount() {
    // if (this.props.auth.isLoggedIn) {
    //   if (this.props.auth.authInfo.user_type_id === 3) {
    //     window.location.href = "/";
    //   }
    // } else {
    //   window.location.href = "/";
    // }
    // this.setState({
    //   access_zone: this.props.auth.authInfo?.user_info?.dist_from_station,
    // });
  }
  render() {
console.log("props",this.props)
    return <div>Home</div>;
  }
}

const mapStateToProps = (state) => {
  return {
    auth: state.auth,
  };
};
export default connect(mapStateToProps)(withRouter(home));
