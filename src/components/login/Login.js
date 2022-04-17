// import React, { Component } from 'react';
// import { LoginAll } from "../../actions/userActions";
// import { toast } from "react-toastify";
// import { connect } from "react-redux";
// import { withRouter } from "react-router-dom";
// class Login extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       email: "",
//       password: "",
//     };

//   }
//    handleSubmit = (e) => {

//     e.preventDefault();
//      let data = {
//        email: this.state.email,
//        password: this.state.password,
//      };
//     if(this.state.email!=null&&this.state.password!=null){
//   this.props.LoginAll(data, this.props.history);
//    this.setState({
//      email: "",
//      password: "",
//    });
//     }
//     else{ toast.error("Field missing");}
//   };

//   onEmailChange = (event) => {
//     this.setState({ email: event.target.value });
//   };
//   onPasswordChange = (event) => {
//     this.setState({ password: event.target.value });
//   };
//   render() {
//       console.log("history",this.props)
//     return (
//       <div>
//         <form>
//           <label>Username</label>
//           <input
//             type="text"
//             name="email"
//             onChange={this.onEmailChange}
//             placeholder="username"
//           />

//           <label>password</label>
//           <input
//             type="text"
//             name="password"
//             onChange={this.onPasswordChange}
//             placeholder="password"
//           />
//           <button onClick={this.handleSubmit.bind(this)} type="submit">
//             submit
//           </button>
//         </form>
//       </div>
//     );
//   }
// }


// const mapStateToProps = (state) => {
//   return {
//     auth: state.auth,    
//   };
// };
// export default connect(mapStateToProps, { LoginAll })(
//   withRouter(Login)
// );
