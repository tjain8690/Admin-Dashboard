import React, { useState, useEffect } from "react";
import { Box, useTheme } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { tokens } from "../../theme";
import Header from "../../components/Header"; 
import { Alert, AlertTitle } from "@mui/material";


const Invoices = ({ token }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [invoices, setInvoices] = useState([]); 
  const [isLoading, setIsLoading] = useState(false); 
  const [error, setError] = useState(null);
  const API_token = sessionStorage.getItem('token')
 
  const fetchInvoices = async () => {
    setIsLoading(true);
    setError(null);

    try {
      if (!API_token) {
        throw new Error("No token found. Please sign in."); // Handle missing token
      }

      const response = await fetch(
        "https://tele-pra-api.azurewebsites.net/api/callback",
        {
          method: "GET",
          headers: {
            Authorization: `Bearer ${API_token}`,
          },
        }
      );

      if (!response.ok) {
        throw new Error("Failed to fetch invoices");
      }
      const data = await response.json();
      setInvoices(data);
    } catch (error) {
      console.error("Error fetching invoices:", error);
      setError(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchInvoices();
  }, []); 


  return (
    <>
      <Header title="Invoices" />
      <Box sx={{ height: 400, width: "100%" }}>
        {isLoading ? (
          <p>Loading invoices...</p>
        ) : error ? (
          
          <Alert severity="error">
            <AlertTitle>Error</AlertTitle>
            {error}
          </Alert>
        ) : (
          <DataGrid
            rows={invoices}
            const columns = { [
              { field: '_id', headerName: 'ID', width: 100 },
              { field: 'name', headerName: 'Name', width: 200 },
              { field: 'email', headerName: 'Email', width: 250 },
              { field: 'mobile', headerName: 'Mobile', width: 150 },
              { field: 'company', headerName: 'Company', width: 150 },
              { field: 'city', headerName: 'City', width: 120 },
              { field: 'country', headerName: 'Country', width: 120 },
              { field: 'domain', headerName: 'Domain', width: 150 },
              { field: 'role', headerName: 'Role', width: 150 },
              { field: 'callback', headerName: 'Callback', width: 100 },
              { field: 'interested', headerName: 'Interested', width: 100 },
              { field: 'valid', headerName: 'Valid', width: 100 },    
            ]
            }
            getRowId={(row) => row._id}
            pageSize={10}
            rowsPerPageOptions={[5, 10, 25]}
          />
        )}
      </Box>
      </>
  );
};

export default Invoices;






