import DrawerAppBar from "../../components/Header";
import Slider from "../../components/Slider";
import { useEffect } from "react";
import Button from "@mui/material/Button";
function Home() {
  useEffect(() => {
      document.title = "Mockup/Tissup"; 
    }, []);
  return (
    <>
      <DrawerAppBar />
      <Slider currentStep={0} /> 
    </>
  );
}

export default Home;
