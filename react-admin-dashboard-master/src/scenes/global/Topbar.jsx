// import { Box, IconButton, useTheme } from "@mui/material";
// import { useContext , useState} from "react";
// import { ColorModeContext, tokens } from "../../theme";
// import InputBase from "@mui/material/InputBase";
// import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
// import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
// import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
// import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
// import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
// import SearchIcon from "@mui/icons-material/Search";

// const Topbar = () => {
//   const theme = useTheme();
//   const colors = tokens(theme.palette.mode);
//   const colorMode = useContext(ColorModeContext);

//   return (
//     <Box display="flex" justifyContent="space-between" p={2}>
//       {/* SEARCH BAR */}
//       <Box
//         display="flex"
//         backgroundColor={colors.primary[400]}
//         borderRadius="3px"
//       >
//         <InputBase sx={{ ml: 2, flex: 1 }} placeholder="Search" />
//         <IconButton type="button" sx={{ p: 1 }}>
//           <SearchIcon />
//         </IconButton>
//       </Box>

//       {/* ICONS */}
//       <Box display="flex">
//         <IconButton onClick={colorMode.toggleColorMode}>
//           {theme.palette.mode === "dark" ? (
//             <DarkModeOutlinedIcon />
//           ) : (
//             <LightModeOutlinedIcon />
//           )}
//         </IconButton>
//         <IconButton>
//           <NotificationsOutlinedIcon />
//         </IconButton>
//         <IconButton>
//           <SettingsOutlinedIcon />
//         </IconButton>
//         <IconButton>
//           <PersonOutlinedIcon />
//         </IconButton>
//       </Box>
//     </Box>
//   );
// };

// export default Topbar;


import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { ColorModeContext, tokens } from '../../theme';
import InputBase from '@mui/material/InputBase';
import { useTheme } from '@mui/material/styles';
import { Box, IconButton, Menu, MenuItem } from '@mui/material';
import LightModeOutlinedIcon from '@mui/icons-material/LightModeOutlined';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined';
import SearchIcon from '@mui/icons-material/Search';

const Topbar = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const colorMode = useContext(ColorModeContext);
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box display="flex" justifyContent="space-between" p={2}>
      {/* SEARCH BAR */}
      <Box
        display="flex"
        backgroundColor={colors.primary[400]}
        borderRadius="3px"
      >
        <InputBase sx={{ ml: 2, flex: 1 }} placeholder="Search" />
        <IconButton type="button" sx={{ p: 1 }}>
          <SearchIcon />
        </IconButton>
      </Box>

      {/* ICONS */}
      <Box display="flex">
        <IconButton onClick={colorMode.toggleColorMode}>
          {theme.palette.mode === 'dark' ? (
            <DarkModeOutlinedIcon />
          ) : (
            <LightModeOutlinedIcon />
          )}
        </IconButton>
        <IconButton>
          <NotificationsOutlinedIcon />
        </IconButton>
        <IconButton>
          <SettingsOutlinedIcon />
        </IconButton>
        
        {/* Replace login button with Link */}
        <IconButton onClick={handleClick}>
          <PersonOutlinedIcon />
        </IconButton>
        
        {/* Dropdown menu for login and signup */}
        <Menu
          anchorEl={anchorEl}
          keepMounted
          open={Boolean(anchorEl)}
          onClose={handleClose}
        >
          <MenuItem onClick={handleClose}>
            <Link to='/Signin'>SignIn</Link>  
          </MenuItem>
          <MenuItem onClick={handleClose}>
          <Link to='/signUp'>SignUp</Link>  
          </MenuItem>
        </Menu>
      </Box>
    </Box>
  );
};

export default Topbar;





