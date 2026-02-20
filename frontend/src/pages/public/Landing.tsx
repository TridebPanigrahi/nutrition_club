import { Container, Box } from "@mui/material";

import Navbar from "../../components/landing/Navbar";
import Hero from "../../components/landing/Hero";
import Features from "../../components/landing/Features";
import Stats from "../../components/landing/Stats";
import CTA from "../../components/landing/CTA";
import HeroSection from "../../components/landing/HeroSection";

export default function Landing() {
  return (
    <>
      {/* <Navbar /> */}

      <HeroSection />

      <Container maxWidth="lg">
        <Box mt={5}>
          {/* <Hero /> */}
          <Features />
          <Stats />
          <CTA />
        </Box>
      </Container>
    </>
  );
}
