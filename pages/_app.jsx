import "@/styles/globals.css";
import { useState, useEffect } from "react";
/* Component */
import Layout from "@/components/layout";
/* MUI */
import { Box } from "@mui/material";
/* Framer Motion */
import { AnimatePresence, motion } from "framer-motion";

export default function App({ Component, pageProps, router }) {
  const [useLang, setLang] = useState(true);

  useEffect(() => {
    const jssStyles = document.querySelector("#jss-server-side");
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);

  return (
    <>
      {/* <AnimatePresence wait>
        <motion.div
          key={router.route}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          duration={0.6}
          transition={{ delay: 0.6 }}
        > */}
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
      {/* </motion.div>
      </AnimatePresence> */}
      <Layout useLang={useLang} setLang={setLang}>
        <Component {...pageProps} useLang={useLang} key={router.route} />
      </Layout>
    </>
  );
}
