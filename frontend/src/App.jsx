import { Box, Button } from "@chakra-ui/react";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import CreatePage from "./pages/CreatePage";
import Navbar from "./components/Navbar";
import { useColorModeValue } from "./components/ui/color-mode";
import { Toaster } from "@/components/ui/toaster"


function App() {
  return (
    <Box
      minH={"100vh"}
      bgGradient="to-r"
      gradientFrom={useColorModeValue("gray.200", "gray.900")}
      gradientTo={useColorModeValue("green.200", "green.950")}
    >
      <Navbar />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/create" element={<CreatePage />} />
      </Routes>

      <Toaster />
    </Box>
  );
}

export default App;
