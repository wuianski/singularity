import "@/styles/globals.css";
import { useState } from "react";
/* Component */
import Layout from "@/components/layout";
/* MUI */
import { Box } from "@mui/material";
/* Framer Motion */
import { motion } from "framer-motion";

export default function App({ Component, pageProps }) {
  const [useLang, setLang] = useState(true);
  const show_state = {
    hide: { opacity: 0, display: "none" },
    show: { opacity: 1, display: "block" },
    transition: { duration: 0.5 },
  };
  return (
    <>
      <Box sx={{ position: "fixed", bottom: 50, left: 30, zIndex: 100 }}>
        <Box sx={{ display: { xs: "none", md: "block" }, cursor: "pointer" }}>
          <motion.div variants={show_state} animate={useLang ? "show" : "hide"}>
            <Box onClick={() => setLang(false)}>
              <motion.div whileHover={{ scale: 1.1 }}>English</motion.div>
            </Box>
          </motion.div>

          <motion.div variants={show_state} animate={useLang ? "hide" : "show"}>
            <Box onClick={() => setLang(true)}>
              <motion.div whileHover={{ scale: 1.1 }}>中文</motion.div>
            </Box>
          </motion.div>
        </Box>
      </Box>
      <Layout useLang={useLang}>
        <Component {...pageProps} useLang={useLang} />
      </Layout>
    </>
  );
}
