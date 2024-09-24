import { useRef, useState, useEffect } from "react";
/* Three JS */
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { easing } from "maath";
/* Component */
import { WaveMaterial } from "@/components/WaveMaterial";
import NavMobile from "@/components/navMobile";
import WorkList from "@/components/workList";
import EventList from "@/components/eventList";
import EventCatList from "@/components/eventCatLIst";
import ChapterIntro from "@/components/chapterIntro";
import ChapterIntro1 from "@/components/chapterIntro_1";
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

  /* Client fetch event1 */
  const [event1, setEvent1] = useState(null);
  const [isLoadingEvent1, setLoadingEvent1] = useState(true);
  /* Client fetch event2 */
  const [event2, setEvent2] = useState(null);
  const [isLoadingEvent2, setLoadingEvent2] = useState(true);
  /* Client fetch event3 */
  const [event3, setEvent3] = useState(null);
  const [isLoadingEvent3, setLoadingEvent3] = useState(true);
  /* Client fetch event4 */
  const [event4, setEvent4] = useState(null);
  const [isLoadingEvent4, setLoadingEvent4] = useState(true);

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
      // sort
      result.sort((a, b) => {
        return new Date(a.work_zh.work_zh_id) - new Date(b.work_zh.work_zh_id);
      });
      setWork3(result);
      setLoadingWork3(false);
    };

    fetchWork3().catch((e) => {
      // handle the error as needed
      console.error("An error occurred while fetching the data: ", e);
    });

    // // sort
    // fetchWork3.sort((a, b) => {
    //   return new Date(a.work_zh.work_zh_id) - new Date(b.work_zh.work_zh_id);
    // });

    /* Client fetch work4 */
    const fetchWork4 = async () => {
      const response = await fetch(
        `${process.env.UNZIP_URL}/works?search=第四章：未完的篇章`
      );
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const result = await response.json();
      // sort
      result.sort((a, b) => {
        return new Date(a.work_zh.work_zh_id) - new Date(b.work_zh.work_zh_id);
      });
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
        `${process.env.UNZIP_URL}/schedules/5/activities?page=0&limit=0`
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

    /* Client fetch event1 */
    const fetchEvent1 = async () => {
      const response = await fetch(
        `${process.env.UNZIP_URL}/activities?category=藝術家座談`
      );
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const result = await response.json();
      setEvent1(result);
      setLoadingEvent1(false);
    };

    fetchEvent1().catch((e) => {
      // handle the error as needed
      console.error("An error occurred while fetching the data: ", e);
    });

    /* Client fetch event2 */
    const fetchEvent2 = async () => {
      const response = await fetch(
        `${process.env.UNZIP_URL}/activities?category=講座`
      );
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const result = await response.json();
      setEvent2(result);
      setLoadingEvent2(false);
    };

    fetchEvent2().catch((e) => {
      // handle the error as needed
      console.error("An error occurred while fetching the data: ", e);
    });

    /* Client fetch event3 */
    const fetchEvent3 = async () => {
      const response = await fetch(
        `${process.env.UNZIP_URL}/activities?category=工作坊`
      );
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const result = await response.json();
      setEvent3(result);
      setLoadingEvent3(false);
    };

    fetchEvent3().catch((e) => {
      // handle the error as needed
      console.error("An error occurred while fetching the data: ", e);
    });

    /* Client fetch event4 */
    const fetchEvent4 = async () => {
      const response = await fetch(
        `${process.env.UNZIP_URL}/activities?category=導覽`
      );
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const result = await response.json();
      setEvent4(result);
      setLoadingEvent4(false);
    };

    fetchEvent4().catch((e) => {
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

  const variantEvents = {
    hidden: {
      opacity: 0,
      y: 100,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        delay: 1.2,
        duration: 0.2,
      },
    },
  };

  const variants = {
    hidden: {
      opacity: 0,
      y: 100,
    },
    visible: (custom) => ({
      opacity: 1,
      y: 0,
      transition: { delay: custom * 1.2, duration: 1 },
    }),
  };

  const bg = {
    hidden: {
      opacity: 0,
    },
    visible: (custom) => ({
      opacity: 1,
      transition: { type: "spring", delay: custom * 0.2, duration: 0.4 },
    }),
  };

  return (
    <>
      {/* Background Shader */}
      <motion.div custom={0} variants={bg} initial="hidden" animate="visible">
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
      </motion.div>

      {/* Background Image + Text */}
      <motion.div custom={1} variants={bg} initial="hidden" animate="visible">
        <Background />
      </motion.div>

      {/* Desktop : 3 column | Mobile : 1 column */}
      <Box
        sx={{
          position: "absolute",
          zIndex: 999,
          width: { xs: "100vw", md: "calc(100% - 230px)" },
          height: { xs: "100vh", md: "70vh" },
          bottom: { xs: "unset", md: "5vh" },
          left: { xs: "unset", md: "130px" },
          top: { xs: 0, md: "unset" },
        }}
      >
        <motion.div variants={variantEvents} initial="hidden" animate="visible">
          <Stack direction={{ xs: "column", md: "row" }} spacing={2}>
            <motion.div
              custom={0}
              variants={variants}
              initial="hidden"
              animate="visible"
            >
              <Item
                sx={{
                  width: "22vw",
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
                          ? "2024未來媒體藝術節──奇異點"
                          : "2024 Future Media FEST-Singularity"
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
                      label={useLang ? "公眾活動" : "Events"}
                      {...a11yProps(5)}
                    />
                  </Tabs>
                </Box>
              </Item>
            </motion.div>
            <motion.div
              custom={1}
              variants={variants}
              initial="hidden"
              animate="visible"
            >
              <Item
                sx={{
                  width: "22vw",
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
                    <ChapterIntro1
                      useLang={useLang}
                      filteredCat={filteredCat[0]}
                    />
                    <WorkList useLang={useLang} work={work1} />
                  </TabPanel>
                  <TabPanel value={value} index={2}>
                    <ChapterIntro
                      useLang={useLang}
                      filteredCat={filteredCat[1]}
                    />
                    <WorkList useLang={useLang} work={work2} />
                  </TabPanel>
                  <TabPanel value={value} index={3}>
                    <ChapterIntro
                      useLang={useLang}
                      filteredCat={filteredCat[2]}
                    />
                    <WorkList useLang={useLang} work={work3} />
                  </TabPanel>
                  <TabPanel value={value} index={4}>
                    <ChapterIntro
                      useLang={useLang}
                      filteredCat={filteredCat[3]}
                    />
                    <WorkList useLang={useLang} work={work4} />
                  </TabPanel>
                  <TabPanel value={value} index={5}>
                    <EventList useLang={useLang} eventData={eventData} />
                    {/* <EventCatList
                      useLang={useLang}
                      event1={event1}
                      event2={event2}
                      event3={event3}
                      event4={event4}
                    /> */}
                  </TabPanel>
                </Box>
              </Item>
            </motion.div>
            <motion.div
              custom={2}
              variants={variants}
              initial="hidden"
              animate="visible"
            >
              <Item
                sx={{
                  width: { xs: "100%", md: "38vw" },
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
            </motion.div>
            {/* Mobile : Site Title */}
            <Item
              sx={{
                width: "100%",
                height: 60,
                display: { xs: "block", md: "none" },
                borderBottom: "1px solid rgba(255, 255, 255, 0.7)",
                // backgroundColor: "rgba(0, 255, 0, 0.9)",
                position: "fixed",
                top: 0,
              }}
            >
              <Box
                sx={{ position: "fixed", top: 20, left: 20, lineHeight: 1.25 }}
              >
                <Box component="span">2024 FMF -- </Box>
                <Box component="span">
                  {useLang ? "奇異點 " : "Singularity"}
                </Box>
              </Box>
            </Item>
          </Stack>
        </motion.div>
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
