import "@/styles/globals.css";
import { useState } from "react";
/* Component */
import Layout from "@/components/layout";
/* MUI */
import { Box } from "@mui/material";
/* Framer Motion */
import { motion } from "framer-motion";
import { Widgets } from "@mui/icons-material";

export default function App({ Component, pageProps }) {
  const [useLang, setLang] = useState(true);

  return (
    <>
      <Box
        sx={{
          position: "fixed",
          bottom: { xs: "unset", sm: 40 },
          left: { xs: "unset", sm: "unset" },
          top: { xs: 19, sm: "unset" },
          right: { xs: 60, sm: 40 },
          zIndex: 1000,
          color: "white",
          cursor: "pointer",
          fontSize: { xs: 16, sm: 20 },
          fontWeight: 600,
          width: { xs: 80, sm: 50 },
          textAlign: "center",
        }}
      >
        <Box
          onClick={() => setLang(false)}
          className={useLang == false ? "active" : ""}
          sx={{ display: { xs: "none", sm: "block" } }}
        >
          EN
        </Box>
        <Box
          onClick={() => setLang(false)}
          className={useLang == false ? "active" : ""}
          sx={{ display: { xs: "inline", sm: "none" } }}
          component="span"
          pr={1}
        >
          EN
        </Box>
        <Box sx={{ cursor: "initial", display: "inline" }} component="span">
          /
        </Box>
        <Box
          onClick={() => setLang(true)}
          className={useLang == true ? "active" : ""}
          sx={{ display: { xs: "none", sm: "block" } }}
        >
          繁
        </Box>
        <Box
          onClick={() => setLang(true)}
          className={useLang == true ? "active" : ""}
          sx={{ display: { xs: "inline", sm: "none" } }}
          component="span"
          pl={1}
        >
          繁
        </Box>
      </Box>
      <Layout useLang={useLang} setLang={setLang}>
        <Component {...pageProps} useLang={useLang} />
      </Layout>
    </>
  );
}
