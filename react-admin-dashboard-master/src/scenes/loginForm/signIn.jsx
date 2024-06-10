// import React, { useState, useEffect } from "react";
// import { Navigate } from "react-router-dom";
// import InstagramIcon from '@mui/icons-material/Instagram';
// import GoogleIcon from '@mui/icons-material/Google';
// import LinkedInIcon from '@mui/icons-material/LinkedIn';

// function SignInForm({ onLogin }) {
//   const [state, setState] = useState({
//     username: "", 
//     password: "",
//     isLoggedIn: false,
//   });

//   const [isLoading, setIsLoading] = useState(false); 
//   const [isLoggedIn, setIsLoggedIn] = useState(false);
//   const [error, setError] = useState(null); // Track any errors

//   const handleChange = (evt) => {
//     const { name, value } = evt.target;
//     setState({
//       ...state,
//       [name]: value,
//     });
//   };

//   const handleOnSubmit = async (evt) => {
//     evt.preventDefault();
//     setIsLoading(true);
//     setError(null); // Clear any previous errors

//     try {
//       const { username, password } = state;
//       const response = await fetch(
//         "https://tele-pra-api.azurewebsites.net/api/login",
//         {
//           method: "POST", 
//           headers: {
//             "Content-Type": "application/json",
//           },
//           body: JSON.stringify({ username, password }),
//         }
//       );
//       if (!response.ok) {
//         throw new Error("Failed to login");
//       }
//       const data = await response.json();
//       const token = data.access_token;  
//       console.log(token)
//       setIsLoggedIn(true)
//       sessionStorage.setItem('isLoggedIn', 'true')
//       sessionStorage.setItem('token', token)
//       // Pass the token to the onLogin callback function
//       onLogin(token);
//     } catch (error) {
//       console.error("Error logging in:", error);
//       setError(error.message); 
//     } finally {
//       setIsLoading(false);
//     }
//   };

  
//   if (isLoggedIn) 
//    { 
//     console.log(sessionStorage.getItem('isLoggedIn'))
//     return <Navigate to="/dashboard" />;
//   }


//   return (
//     <div className="form-container sign-in-container">
//       <form onSubmit={handleOnSubmit}>
//         <h1 className="text">Sign in</h1>
//         <div className="social-container">
//           <a
//             href="https://www.instagram.com/pratech_global/"
//             className="social"
//           >
//             <InstagramIcon />
//           </a>
//           <a href="https://pratechglobal.com/" className="social">
//             <GoogleIcon />
//           </a>
//           <a
//             href="https://www.linkedin.com/company/pratech-global-pvt-limited/?originalSubdomain=in"
//             className="social"
//           >
//             <LinkedInIcon />
//           </a>
//         </div>
//         <span className="text">or use your account</span>
//         <input
//           type="text" 
//           placeholder="Username"
//           name="username"
//           value={state.username}
//           onChange={handleChange}
//         />
//         <input
//           type="password"
//           name="password"
//           placeholder="Password"
//           value={state.password}
//           onChange={handleChange}
//         />
//         <span className="text">Forgot your password?</span>
//         {isLoading ? (
//           <p>Loading...</p>
//         ) : error ? (
//           <p className="error">{error}</p>
//         ) : null}
//         <button type="submit">Sign In</button>
//       </form>
//     </div>
//   );
// }

// export default SignInForm;

import React, { useState, useEffect } from "react";
import { Navigate } from "react-router-dom";
import InstagramIcon from '@mui/icons-material/Instagram';
import GoogleIcon from '@mui/icons-material/Google';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

function SignInForm({ onLogin }) {
  const [state, setState] = useState({
    username: "", 
    password: "",
    isLoggedIn: false,
  });

  const [isLoading, setIsLoading] = useState(false); 
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [error, setError] = useState(null); // Track any errors

  const handleChange = (evt) => {
    const { name, value } = evt.target;
    setState({
      ...state,
      [name]: value,
    });
  };

  const handleOnSubmit = async (evt) => {
    evt.preventDefault();
    setIsLoading(true);
    setError(null); // Clear any previous errors

    const { username, password } = state;
    
    // Check credentials directly
    if (username === "tushar" && password === "Tjain@1234") {
      // Simulate fetching a token
      const token = "fake-jwt-token";  
      setIsLoggedIn(true);
      sessionStorage.setItem('isLoggedIn', 'true');
      sessionStorage.setItem('token', token);
      // Pass the token to the onLogin callback function
      onLogin(token);
    } else {
      setError("Invalid username or password");
    }

    setIsLoading(false);
  };

  if (isLoggedIn) {
    console.log(sessionStorage.getItem('isLoggedIn'));
    return <Navigate to="/dashboard" />;
  }

  return (
    <div className="form-container sign-in-container">
      <form onSubmit={handleOnSubmit}>
        <h1 className="text">Sign in</h1>
        <div className="social-container">
          <a
            href="https://www.instagram.com/pratech_global/"
            className="social"
          >
            <InstagramIcon />
          </a>
          <a href="https://pratechglobal.com/" className="social">
            <GoogleIcon />
          </a>
          <a
            href="https://www.linkedin.com/company/pratech-global-pvt-limited/?originalSubdomain=in"
            className="social"
          >
            <LinkedInIcon />
          </a>
        </div>
        <span className="text">or use your account</span>
        <input
          type="text" 
          placeholder="Username -> (tushar)"
          name="username"
          value={state.username}
          onChange={handleChange}
        />
        <input
          type="password"
          name="password"
          placeholder="Password -> (Tjain@1234)"
          value={state.password}
          onChange={handleChange}
        />
        <span className="text">Forgot your password?</span>
        {isLoading ? (
          <p>Loading...</p>
        ) : error ? (
          <p className="error">{error}</p>
        ) : null}
        <button type="submit">Sign In</button>
      </form>
    </div>
  );
}

export default SignInForm;


