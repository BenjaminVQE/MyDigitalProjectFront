import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { registerUser } from "../../services/api/signin";
import {
  TextField,
  Button,
  Box,
  Typography,
  Container,
  Stack,
} from "@mui/material";
import Header from "../../components/Header";
import Slider from "../../components/Slider";
import { useEffect } from "react";
import "./Register.css";

function Inscription() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [lastName, setName] = useState("");
  const [firstName, setFirstname] = useState("");
  const [company, setCompany] = useState("");
  const [phoneNumber, setPhone] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    try {
      const data = await registerUser(
        email,
        password,
        lastName,
        firstName,
        company,
        phoneNumber
      );
      navigate("/connexion");
    } catch (err) {
      console.error("Erreur lors de la connexion :", err);
    }
  };
  useEffect(() => {
      document.title = "Inscription/Tissup"; 
    }, []);
  return (
    <>  
      <Header />
      <Container maxWidth="sm" >
        <Box
          sx={{
            marginTop: 0,
            padding: 4,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            boxShadow: 3,
            borderRadius: 2,
            backgroundColor: "var(--light-bg-color)",
          }}
        >
          <Typography component="h1" variant="h5" mb={2}>
            Inscription
          </Typography>
          <Box
            component="form"
            onSubmit={handleSubmit}
            sx={{ mt: 2, width: "100%" }}
          >
            <Stack spacing={2}>
              <TextField
                label="Email address"
                variant="outlined"
                type="email"
                color="primary"
                fullWidth
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <TextField
                label="Last Name"
                variant="outlined"
                fullWidth
                value={lastName}
                onChange={(e) => setName(e.target.value)}
                required
              />
              <TextField
                label="First Name"
                variant="outlined"
                fullWidth
                value={firstName}
                onChange={(e) => setFirstname(e.target.value)}
                required
              />
              <TextField
                label="Company"
                variant="outlined"
                fullWidth
                value={company}
                onChange={(e) => setCompany(e.target.value)}
                required
              />
              <TextField
                label="Phone Number"
                variant="outlined"
                fullWidth
                value={phoneNumber}
                onChange={(e) => setPhone(e.target.value)}
                required
              />
              <TextField
                label="Password"
                variant="outlined"
                type="password"
                fullWidth
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />

              <Button variant="contained" color="primary" type="submit" fullWidth>
                Inscription
              </Button>
            </Stack>
          </Box>
        </Box>
      </Container>
    </>
  
  );
}
export default Inscription;
