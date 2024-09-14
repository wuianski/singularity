import { useRef, useState, useEffect } from "react";
/* Three JS */
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { easing } from "maath";
/* Component */
import { WaveMaterial } from "@/components/WaveMaterial";
import NavMobile from "@/components/navMobile";
import WorkList from "@/components/workList";
import EventList from "@/components/eventList";
import ChapterIntro from "@/components/chapterIntro";
import ExhibitionIntro from "@/components/exhibitionIntro";
import Background from "@/components/background";
/* MUI */
import {
  Box,
  Paper,
  Stack,
  styled,
  Typography,
  Tab,
  Tabs,
  MenuList,
  MenuItem,
} from "@mui/material";
import PropTypes from "prop-types";
/* Next */
import Link from "next/link";
import Image from "next/image";
/* Framer Motion */
import { motion } from "framer-motion";
import { line } from "framer-motion/client";

/* Shader */
function ShaderPlane({ mousePosition }) {
  //   console.log(mousePosition);
  const ref = useRef();
  const myMouseX = Math.sin(mousePosition.x * 0.001);
  const myMouseY = Math.sin(mousePosition.y * 0.001);
  const myMouse = { x: myMouseX, y: myMouseY };
  const { viewport, size } = useThree();
  useFrame((state, delta) => {
    ref.current.time += delta;
    // console.log(state.pointer);
    // easing.damp3(ref.current.pointer, state.pointer, 0.2, delta);
    easing.damp3(ref.current.pointer, myMouse, 0.2, delta);
  });

  return (
    <>
      <mesh scale={[viewport.width, viewport.height, 1]}>
        <planeGeometry />
        <waveMaterial
          ref={ref}
          key={WaveMaterial.key}
          resolution={[size.width * viewport.dpr, size.height * viewport.dpr]}
        />
      </mesh>
    </>
  );
}

// pass the current position to ShaderPlane()
const useMousePosition = () => {
  const [mousePosition, setMousePosition] = useState({
    x: null,
    y: null,
  });

  useEffect(() => {
    const updateMousePosition = (ev) => {
      setMousePosition({ x: ev.clientX, y: ev.clientY });
    };

    window.addEventListener("mousemove", updateMousePosition);

    return () => {
      window.removeEventListener("mousemove", updateMousePosition);
    };
  }, []);
  //   console.log(mousePosition);

  return mousePosition;
};

/* Item */
const Item = styled(Paper)(({ theme }) => ({
  borderRadius: 0,
  color: "rgba(220, 220, 220, 1)",
  backgroundColor: "rgba(0, 0, 0, 0.9)",
  padding: theme.spacing(1),
  marginTop: "0 !important",
}));

/* TabPanel */
function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ pl: 0, pt: 0 }}>{children}</Box>}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    "aria-controls": `vertical-tabpanel-${index}`,
  };
}

/* StyledTab */
const StyledTab = styled((props) => <Tab {...props} />)(({ theme }) => ({
  textTransform: "none",
  // fontWeight: theme.typography.fontWeightRegular,
  fontSize: "26px",
  fontWeight: 600,
  color: "#fff",
  "&.Mui-selected": {
    color: "#FF2E00",
  },
  //   "&.Mui-focusVisible": {
  //     backgroundColor: "rgba(100, 95, 228, 0.32)",
  //   },
  alignItems: "flex-start",
  paddingLeft: "0px",
  paddingRight: "0px",
  minHeight: "unset",
  textAlign: "left",
  borderBottom: "1px solid #fff",
  paddingTop: "30px",
  paddingBottom: "18px",
  margin: 0,
  letterSpacing: "-0.01em",
}));

export default function Layout({ children, useLang, setLang }) {
  /* Mouse Position */
  const mousePosition = useMousePosition();
  //console.log(useLang);
  /* Client fetch categories */
  const [catData, setCatData] = useState(null);
  const [isLoadingCat, setLoadingCat] = useState(true);
  /* Tab's value */
  const [value, setValue] = useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  /* Client fetch work1 */
  const [work1, setWork1] = useState(null);
  const [isLoadingWork1, setLoadingWork1] = useState(true);
  /* Client fetch work2 */
  const [work2, setWork2] = useState(null);
  const [isLoadingWork2, setLoadingWork2] = useState(true);
  /* Client fetch work3 */
  const [work3, setWork3] = useState(null);
  const [isLoadingWork3, setLoadingWork3] = useState(true);
  /* Client fetch work4 */
  const [work4, setWork4] = useState(null);
  const [isLoadingWork4, setLoadingWork4] = useState(true);
  /* Client fetch events */
  const [eventData, setEventData] = useState(null);
  const [isLoadingEvent, setLoadingEvent] = useState(true);

  useEffect(() => {
    /* Client fetch categories */
    const fetchCat = async () => {
      const response = await fetch(`${process.env.UNZIP_URL}/categories`);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const result = await response.json();
      setCatData(result);
      setLoadingCat(false);
    };

    fetchCat().catch((e) => {
      // handle the error as needed
      console.error("An error occurred while fetching the data: ", e);
    });

    /* Client fetch work1 */
    const fetchWork1 = async () => {
      const response = await fetch(
        `${process.env.UNZIP_URL}/works?search=第一章：流動的錨點`
      );
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const result = await response.json();
      setWork1(result);
      setLoadingWork1(false);
    };

    fetchWork1().catch((e) => {
      // handle the error as needed
      console.error("An error occurred while fetching the data: ", e);
    });

    /* Client fetch work2 */
    const fetchWork2 = async () => {
      const response = await fetch(
        `${process.env.UNZIP_URL}/works?search=第二章：創造力的轉變`
      );
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const result = await response.json();
      setWork2(result);
      setLoadingWork2(false);
    };

    fetchWork2().catch((e) => {
      // handle the error as needed
      console.error("An error occurred while fetching the data: ", e);
    });

    /* Client fetch work3 */
    const fetchWork3 = async () => {
      const response = await fetch(
        `${process.env.UNZIP_URL}/works?search=第三章：創作者的洞見`
      );
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const result = await response.json();
      setWork3(result);
      setLoadingWork3(false);
    };

    fetchWork3().catch((e) => {
      // handle the error as needed
      console.error("An error occurred while fetching the data: ", e);
    });

    /* Client fetch work4 */
    const fetchWork4 = async () => {
      const response = await fetch(
        `${process.env.UNZIP_URL}/works?search=第四章：未完的篇章`
      );
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const result = await response.json();
      setWork4(result);
      setLoadingWork4(false);
    };

    fetchWork4().catch((e) => {
      // handle the error as needed
      console.error("An error occurred while fetching the data: ", e);
    });

    /* Client fetch events */
    const fetchEvents = async () => {
      const response = await fetch(
        `${process.env.UNZIP_URL}/schedules/5/activities?page=0&limit=25`
      );
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const result = await response.json();
      setEventData(result);
      setLoadingEvent(false);
    };

    fetchEvents().catch((e) => {
      // handle the error as needed
      console.error("An error occurred while fetching the data: ", e);
    });
  }, []);

  if (isLoadingCat) return <div>Loading...</div>;
  if (!catData) return <div>No categories</div>;
  if (isLoadingWork4) return <div>Loading...</div>;
  if (!work4) return <div>No work4</div>;
  if (isLoadingWork3) return <div>Loading...</div>;
  if (!work3) return <div>No work3</div>;
  if (isLoadingWork2) return <div>Loading...</div>;
  if (!work2) return <div>No work2</div>;
  if (isLoadingWork1) return <div>Loading...</div>;
  if (!work1) return <div>No work1</div>;
  if (isLoadingEvent) return <div>Loading...</div>;
  if (!eventData) return <div>No events</div>;
  //   console.log(eventData);

  const myCat = catData.map((c, idx) => {
    let result = {
      category_id: c.category_id,
      name_zh: c.name_zh,
      name_en: c.name_en,
      id: idx - 1,
    };
    return result;
  });
  //filter data category_id between 4 and 7
  const filteredCat = myCat.filter(
    (c) => c.category_id >= 4 && c.category_id <= 7
  );
  //   console.log(filteredCat);

  return (
    <>
      {/* Background Shader */}
      <Box
        sx={{
          position: "absolute",
          zIndex: 1,
          width: "100vw",
          height: "100vh",
        }}
      >
        <Canvas>
          <ShaderPlane mousePosition={mousePosition} />
        </Canvas>
      </Box>

      {/* Background Image + Text */}
      <Background />

      {/* Desktop : 3 column | Mobile : 1 column */}
      <Box
        sx={{
          position: "absolute",
          zIndex: 999,
          width: { xs: "100vw", md: "calc(100% - 240px)" },
          height: { xs: "100vh", md: "70vh" },
          bottom: { xs: "unset", md: "5vh" },
          left: { xs: "unset", md: "130px" },
          top: { xs: 0, md: "unset" },
        }}
      >
        <Stack direction={{ xs: "column", md: "row" }} spacing={2}>
          <Item
            sx={{
              width: "25%",
              height: "70vh",
              display: { xs: "none", md: "block" },
            }}
          >
            <Box
              pt={4}
              pl={1}
              pr={1}
              sx={{ height: "100%", overflowY: "auto" }}
            >
              <Tabs
                orientation="vertical"
                variant="scrollable"
                value={value}
                onChange={handleChange}
                aria-label="Vertical tabs example"
                indicatorColor="none"
              >
                <StyledTab
                  label={
                    useLang
                      ? "2024 Future Media FEST -- 奇異點 "
                      : "2024 Future Media FEST -- Singularity"
                  }
                  {...a11yProps(0)}
                />
                {filteredCat.map((c, idx) => (
                  <StyledTab
                    label={useLang ? c.name_zh : c.name_en}
                    {...a11yProps(idx + 1)}
                    key={c.category_id}
                  />
                ))}
                <StyledTab
                  label={useLang ? "公眾活動" : "EVENTS"}
                  {...a11yProps(5)}
                />
              </Tabs>
            </Box>
          </Item>
          <Item
            sx={{
              width: "25%",
              height: "70vh",
              display: { xs: "none", md: "block" },
            }}
          >
            <Box
              pt={4}
              pl={1}
              pr={1}
              sx={{ height: "100%", overflowY: "auto" }}
            >
              <TabPanel value={value} index={0}>
                <ExhibitionIntro useLang={useLang} />
              </TabPanel>
              <TabPanel value={value} index={1}>
                <ChapterIntro useLang={useLang} filteredCat={filteredCat[0]} />
                <WorkList useLang={useLang} work={work1} />
              </TabPanel>
              <TabPanel value={value} index={2}>
                <ChapterIntro useLang={useLang} filteredCat={filteredCat[1]} />
                <WorkList useLang={useLang} work={work2} />
              </TabPanel>
              <TabPanel value={value} index={3}>
                <ChapterIntro useLang={useLang} filteredCat={filteredCat[2]} />
                <WorkList useLang={useLang} work={work3} />
              </TabPanel>
              <TabPanel value={value} index={4}>
                <ChapterIntro useLang={useLang} filteredCat={filteredCat[3]} />
                <WorkList useLang={useLang} work={work4} />
              </TabPanel>
              <TabPanel value={value} index={5}>
                <EventList useLang={useLang} eventData={eventData} />
              </TabPanel>
            </Box>
          </Item>
          <Item
            sx={{
              width: { xs: "100%", md: "50%" },
              height: { xs: "calc(100vh - 60px)", md: "70vh" },
              position: { xs: "absolute", md: "relative" },
              bottom: { xs: 0, md: "unset" },
              padding: 0,
            }}
          >
            <Box
              // pt={4}
              // pl={1}
              // pr={1}
              sx={{ width: "100%", height: "100%", overflowY: "auto" }}
            >
              <main>{children}</main>
            </Box>
          </Item>
          {/* Mobile : Site Title */}
          <Item
            sx={{
              width: "100%",
              height: 60,
              display: { xs: "block", md: "none" },
              borderBottom: "1px solid rgba(255, 255, 255, 0.7)",
            }}
          >
            <Box
              sx={{ position: "fixed", top: 20, left: 20, lineHeight: 1.25 }}
            >
              <Box component="span">2024 FMF -- </Box>
              <Box component="span">{useLang ? "奇異點 " : "Singularity"}</Box>
            </Box>
          </Item>
        </Stack>
      </Box>
      {/* Mobile : Nav */}
      <Box
        sx={{
          display: { xs: "block", md: "none" },
          position: "absolute",
          zIndex: 999,
          top: 6,
          right: 10,
          color: "white",
        }}
      >
        <NavMobile
          useLang={useLang}
          catData={catData}
          work1={work1}
          work2={work2}
          work3={work3}
          work4={work4}
          eventData={eventData}
        />
      </Box>
    </>
  );
}
