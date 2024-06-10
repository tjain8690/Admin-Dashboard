import React, { useState, useContext } from "react";
import DashboardLayout from './components/DashboardLayout';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Topbar from "./scenes/global/Topbar";
import Sidebar from "./scenes/global/Sidebar";
import Dashboard from "./scenes/dashboard";
import Team from "./scenes/team";
import Invoices from "./scenes/invoices";
import Contacts from "./scenes/contacts";
import Courses from "./scenes/courses";
import Bar from "./scenes/bar";
import Form from "./scenes/form";
import Line from "./scenes/line";
import Pie from "./scenes/pie";
import FAQ from "./scenes/faq";
import Geography from "./scenes/geography";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { ColorModeContext, useMode } from "./theme";
import Calendar from "./scenes/calendar/calendar";
import User from "./scenes/user";
import LoginForm from "./scenes/loginForm/app";

function App() {
  const [theme, colorMode] = useMode();
  const [isSidebar, setIsSidebar] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Track user login state

  // Function to handle successful login
  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  // Function to handle logout
  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="app">
          
          <main className="content">

            <Routes>
              <Route path="/" element={ <LoginForm onLogin={handleLogin} />} />
              <Route element={<DashboardLayout />}>
              
                <Route path="/dashboard" element={<Dashboard/>} />
                <Route path="/team" element={<Team /> } />
                <Route path="/contacts" element={<Contacts/>} />
                <Route path="/invoices" element={<Invoices /> } />
                <Route path="/courses" element={<Courses /> } />
                <Route path="/form" element={<Form /> } />
                <Route path="/bar" element={<Bar />} />
                <Route path="/pie" element={<Pie />  } />
                <Route path="/line" element={<Line /> } />
                <Route path="/faq" element={<FAQ /> } />
                <Route path="/calendar" element={<Calendar /> } />
                <Route path="/geography" element= {<Geography />  } />
                <Route path="/user/:userId" element= {<User /> } />
              </Route>
            </Routes>
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;




