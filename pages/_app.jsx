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
  // const show_state = {
  //   hide: { opacity: 0, display: "none" },
  //   show: { opacity: 1, display: "block" },
  //   transition: { duration: 0.5 },
  // };
  return (
    <>
      <Box
        sx={{
          position: "fixed",
          bottom: { xs: "unset", sm: 50 },
          left: { xs: "unset", sm: 30 },
          top: { xs: 19, sm: "unset" },
          right: { xs: 60, sm: "unset" },
          zIndex: 1000,
          color: "white",
          // width: 50,
        }}
      >
        <Box sx={{ display: { xs: "block", md: "block" }, cursor: "pointer" }}>
          {/* <motion.div variants={show_state} animate={useLang ? "show" : "hide"}> */}
          <Box component="span" onClick={() => setLang(false)}>
            English
          </Box>
          {/* </motion.div> */}
          <Box component="span"> | </Box>
          {/* <motion.div variants={show_state} animate={useLang ? "hide" : "show"}> */}
          <Box component="span" onClick={() => setLang(true)}>
            中文
          </Box>
          {/* </motion.div> */}
        </Box>
      </Box>
      <Layout useLang={useLang} setLang={setLang}>
        <Component {...pageProps} useLang={useLang} />
      </Layout>
    </>
  );
}
