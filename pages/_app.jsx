import "@/styles/globals.css";
import { useState, useEffect } from "react";
/* Component */
import Layout from "@/components/layout";
import InfoModal from "@/components/InfoModal";
/* MUI */
import { Box } from "@mui/material";
import InfoIcon from "@mui/icons-material/Info";
import Modal from "@mui/material/Modal";
import styles from "@/components/InfoModal.module.css";
import Fade from "@mui/material/Fade";
import Image from "next/image";
import closeIcon from "@/public/close_icon.jpg";
/* Framer Motion */
import { AnimatePresence, motion } from "framer-motion";
import { line } from "framer-motion/client";
import zIndex from "@mui/material/styles/zIndex";

export default function App({ Component, pageProps, router }) {
  const [useLang, setLang] = useState(true);

  useEffect(() => {
    const jssStyles = document.querySelector("#jss-server-side");
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);

  /* drawer */
  const [openDrawer, setOpenDrawer] = useState(false);
  const handleOpenDrawer = () => setOpenDrawer(true);
  const handleCloseDrawer = () => setOpenDrawer(false);

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
          width: { xs: 130, sm: 50 },
          textAlign: "center",
        }}
      >
        <Box
          onClick={() => setLang(false)}
          style={useLang == false ? { color: "#FF2E00" } : { color: "#fff" }}
          sx={{ display: { xs: "none", sm: "block" } }}
        >
          EN
        </Box>
        <Box
          onClick={() => setLang(false)}
          style={useLang == false ? { color: "#FF2E00" } : { color: "#fff" }}
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
          style={useLang == true ? { color: "#FF2E00" } : { color: "#fff" }}
          sx={{ display: { xs: "none", sm: "block" } }}
        >
          繁
        </Box>
        <Box
          onClick={() => setLang(true)}
          style={useLang == true ? { color: "#FF2E00" } : { color: "#fff" }}
          sx={{ display: { xs: "inline", sm: "none" }, marginTop: "-20px" }}
          component="span"
          pl={1}
          pr={1}
        >
          繁
        </Box>
        <Box
          pt={3}
          sx={{ display: { xs: "none", sm: "block" } }}
          onClick={handleOpenDrawer}
        >
          <InfoIcon />
        </Box>
        <Modal open={openDrawer} onClose={handleCloseDrawer}>
          <Box
            sx={{
              backgroundColor: "#ff0000",
              position: "fixed",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              width: "100%",
              height: "100%",
              border: "#fff 1px solid",
              overflowY: "auto",
            }}
          >
            <Fade in={openDrawer} timeout={1000}>
              <div>
                <Box
                  sx={{
                    position: "fixed",
                    right: 0,
                    cursor: "pointer",
                    zIndex: 99,
                  }}
                  onClick={handleCloseDrawer}
                >
                  <Image
                    src={closeIcon}
                    alt="Icon of close modal"
                    width={73}
                    height={73}
                  />
                </Box>

                <div>
                  <InfoModal />
                </div>
              </div>
            </Fade>
          </Box>
        </Modal>
        <Box
          component="span"
          pl={0.5}
          sx={{ display: { xs: "inline", sm: "none" }, top: -1 }}
          position="absolute"
          onClick={handleOpenDrawer}
        >
          <InfoIcon />
        </Box>
      </Box>

      <Layout useLang={useLang} setLang={setLang}>
        <Component {...pageProps} useLang={useLang} key={router.route} />
      </Layout>
    </>
  );
}
