import React from "react";
import InstagramIcon from '@mui/icons-material/Instagram';
import GoogleIcon from '@mui/icons-material/Google';
import LinkedInIcon from '@mui/icons-material/LinkedIn';


function SignUpForm() {
  const [state, setState] = React.useState({
    name: "",
    email: "",
    password: ""
  });
  const handleChange = evt => {
    const value = evt.target.value;
    setState({
      ...state,
      [evt.target.name]: value
    });
  };

  const handleOnSubmit = evt => {
    evt.preventDefault();

    const { name, email, password } = state;
    alert(
      `You are sign up with name: ${name} email: ${email} and password: ${password}`
    );

    for (const key in state) {
      setState({
        ...state,
        [key]: ""
      });
    }
  };

 

  return (
    <div className="form-container sign-up-container">
      <form onSubmit={handleOnSubmit}>
        <h1 className="text">Create Account</h1>
        <div className="social-container">
        <a
            href="https://www.instagram.com/pratech_global/"
            className="social"
          >
            
            <InstagramIcon/>
          </a>
          <a href="https://pratechglobal.com/" className="social">
          
            <GoogleIcon/>
          </a>
          <a
            href="https://www.linkedin.com/company/pratech-global-pvt-limited/?originalSubdomain=in"
            className="social"
          >
            
            <LinkedInIcon/>
            
          </a>
          
        </div>
        <span className="text">or use your email for registration</span>
        <input
          type="text"
          name="name"
          value={state.name}
          onChange={handleChange}
          placeholder="Name"
        />
        <input
          type="email"
          name="email"
          value={state.email}
          onChange={handleChange}
          placeholder="Email"
        />
        <input
          type="password"
          name="password"
          value={state.password}
          onChange={handleChange}
          placeholder="Password"
        />
        <button>Sign Up</button>

        <InstagramIcon/>
      </form>
    </div>
  );
}

export default SignUpForm;
