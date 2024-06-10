
// import { useState, useEffect } from "react";
// import { Box, Typography, useTheme } from "@mui/material";
// import { useParams } from "react-router-dom"; // Import useParams to access URL parameters

// const UserDetails = () => {
//   const theme = useTheme();
//   const colors = tokens(theme.palette.mode);
//   const { userId } = useParams(); // Get the userId from URL parameters
//   const [user, setUser] = useState(null);

//   useEffect(() => {
//     const fetchUser = async () => {
//       try {
//         const response = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`);
//         if (response.ok) {
//           const data = await response.json();
//           setUser(data);
//         } else {
//           throw new Error("Failed to fetch user");
//         }
//       } catch (error) {
//         console.error("Error fetching user:", error);
//       }
//     };

//     fetchUser();
//   }, [userId]); // Fetch user whenever userId changes

//   if (!user) {
//     return <div>Loading...</div>;
//   }

//   return (
//     <Box m="20px">
//       <Typography variant="h5" color={colors.blueAccent[700]} mb="10px">
//         User Details
//       </Typography>
//       <Box>
//         <Typography variant="body1">ID: {user.id}</Typography>
//         <Typography variant="body1">Name: {user.name}</Typography>
//         <Typography variant="body1">Username: {user.username}</Typography>
//         <Typography variant="body1">Email: {user.email}</Typography>
//         <Typography variant="body1">Phone: {user.phone}</Typography>
//         <Typography variant="body1">Website: {user.website}</Typography>
//         <Typography variant="body1">Address: {user.address.street}, {user.address.suite}, {user.address.city}, {user.address.zipcode}</Typography>
//         <Typography variant="body1">Company: {user.company.name}</Typography>
//       </Box>
//     </Box>
//   );
// };

// export default UserDetails;



import { useState, useEffect } from "react";
import { Box, Typography, useTheme } from "@mui/material";
import { useParams } from "react-router-dom"; 

const User = () => {
  const theme = useTheme();
  const colors = theme.palette.mode === 'dark' ? theme.palette.primary : theme.palette.secondary; // Adjust the colors based on your theme
  const { userId } = useParams(); 
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`);
        if (response.ok) {
          const data = await response.json();
          setUser(data);
        } else {
          throw new Error("Failed to fetch user");
        }
      } catch (error) {
        console.error("Error fetching user:", error);
      }
    };

    fetchUser();
  }, [userId]); 

  if (!user) {
    return <div>Loading...</div>;
  }

  return (
    <Box m="20px">
      <Typography variant="h5" color={colors.main} mb="10px"> {/* Use main color for primary text */}
        User Details
      </Typography>
      <Box>
        <Typography variant="body1">ID: {user.id}</Typography>
        <Typography variant="body1">Name: {user.name}</Typography>
        <Typography variant="body1">Username: {user.username}</Typography>
        <Typography variant="body1">Email: {user.email}</Typography>
        <Typography variant="body1">Phone: {user.phone}</Typography>
        <Typography variant="body1">Website: {user.website}</Typography>
        <Typography variant="body1">Address: {user.address.street}, {user.address.suite}, {user.address.city}, {user.address.zipcode}</Typography>
        <Typography variant="body1">Company: {user.company.name}</Typography>
      </Box>
    </Box>
  );
};

export default User;

