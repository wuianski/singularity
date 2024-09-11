import { useRef, useState, useEffect } from "react";
/* Three JS */
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { easing } from "maath";
/* Component */
import { WaveMaterial } from "@/components/WaveMaterial";
/* MUI */
import {
  Box,
  Paper,
  Stack,
  styled,
  Typography,
  Tab,
  Tabs,
} from "@mui/material";
import PropTypes from "prop-types";
/* Next */
import Link from "next/link";

/* Shader */
function ShaderPlane() {
  const ref = useRef();
  const { viewport, size } = useThree();
  useFrame((state, delta) => {
    ref.current.time += delta;
    easing.damp3(ref.current.pointer, state.pointer, 0.2, delta);
  });
  return (
    <mesh scale={[viewport.width, viewport.height, 1]}>
      <planeGeometry />
      <waveMaterial
        ref={ref}
        key={WaveMaterial.key}
        resolution={[size.width * viewport.dpr, size.height * viewport.dpr]}
      />
    </mesh>
  );
}

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
      {value === index && (
        <Box sx={{ pl: 0, pt: 1.5 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
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
  fontWeight: theme.typography.fontWeightRegular,
  fontSize: "1rem",
  //   marginRight: theme.spacing(1),
  color: "rgba(255, 255, 255, 0.7)",
  "&.Mui-selected": {
    color: "#fff",
  },
  //   "&.Mui-focusVisible": {
  //     backgroundColor: "rgba(100, 95, 228, 0.32)",
  //   },
  alignItems: "flex-start",
  paddingBottom: "4px",
  paddingLeft: "0px",
  paddingRight: "0px",
  minHeight: "unset",
  textAlign: "left",
}));

export default function Layout({ children, useLang }) {
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

  if (isLoadingCat) return <p>Loading...</p>;
  if (!catData) return <p>No categories</p>;
  if (isLoadingWork4) return <p>Loading...</p>;
  if (!work4) return <p>No work4</p>;
  if (isLoadingWork3) return <p>Loading...</p>;
  if (!work3) return <p>No work3</p>;
  if (isLoadingWork2) return <p>Loading...</p>;
  if (!work2) return <p>No work2</p>;
  if (isLoadingWork1) return <p>Loading...</p>;
  if (!work1) return <p>No work1</p>;
  if (isLoadingEvent) return <p>Loading...</p>;
  if (!eventData) return <p>No events</p>;
  //   console.log(eventData);

  const myCat = catData.map((c) => {
    let result = {
      category_id: c.category_id,
      name_zh: c.name_zh,
      name_en: c.name_en,
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
      {/* Shader */}
      <Box
        sx={{
          position: "absolute",
          zIndex: 1,
          width: "100vw",
          height: "100vh",
        }}
      >
        <Canvas>
          <ShaderPlane />
        </Canvas>
      </Box>
      {/* Desktop : 3 column | Mobile : 1 column */}
      <Box
        sx={{
          position: "absolute",
          zIndex: 999,
          width: { xs: "100vw", sm: "calc(100% - 300px)" },
          height: { xs: "100vh", sm: "70vh" },
          //   bottom: "5vh",
          bottom: { xs: "unset", sm: "5vh" },
          left: { xs: "unset", sm: "150px" },
          top: { xs: 0, sm: "unset" },
        }}
      >
        <Stack direction={{ xs: "column", sm: "row" }} spacing={2}>
          <Item
            sx={{
              width: "25%",
              height: "70vh",
              display: { xs: "none", md: "block" },
            }}
          >
            <Box>
              <Tabs
                orientation="vertical"
                variant="scrollable"
                value={value}
                onChange={handleChange}
                aria-label="Vertical tabs example"
                indicatorColor="none"
                // sx={{ borderRight: 1, borderColor: "divider" }}
              >
                <StyledTab
                  label={useLang ? "策展論述" : "INTRODUCTION"}
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
            <Box sx={{ height: "100%", overflowY: "auto" }}>
              <TabPanel value={value} index={0}>
                <Link href={`/intro`} as={`/intro`}>
                  <Box>展覽簡介</Box>
                </Link>
              </TabPanel>
              <TabPanel value={value} index={1}>
                <Box pb={2} sx={{ lineHeight: 1.25 }}>
                  {useLang ? (
                    <Box>{filteredCat[0].name_zh}</Box>
                  ) : (
                    <Box>{filteredCat[0].name_en}</Box>
                  )}
                </Box>
                <Box>
                  {work1.map((w1, idx) => (
                    <Link
                      key={idx}
                      href={`/works/${w1.work_id}`}
                      as={`/works/${w1.work_id}`}
                    >
                      <Box pb={2} sx={{ lineHeight: 1.25 }}>
                        {useLang ? (
                          <Box>{w1.work_zh.title}</Box>
                        ) : (
                          <Box>{w1.work_en.title}</Box>
                        )}
                      </Box>
                    </Link>
                  ))}
                </Box>
              </TabPanel>
              <TabPanel value={value} index={2}>
                <Box pb={2} sx={{ lineHeight: 1.25 }}>
                  {useLang ? (
                    <Box>{filteredCat[1].name_zh}</Box>
                  ) : (
                    <Box>{filteredCat[1].name_en}</Box>
                  )}
                </Box>
                <Box>
                  {work2.map((w2, idx) => (
                    <Link
                      key={idx}
                      href={`/works/${w2.work_id}`}
                      as={`/works/${w2.work_id}`}
                    >
                      <Box pb={2} sx={{ lineHeight: 1.25 }}>
                        {useLang ? (
                          <Box>{w2.work_zh.title}</Box>
                        ) : (
                          <Box>{w2.work_en.title}</Box>
                        )}
                      </Box>
                    </Link>
                  ))}
                </Box>
              </TabPanel>
              <TabPanel value={value} index={3}>
                <Box pb={2} sx={{ lineHeight: 1.25 }}>
                  {useLang ? (
                    <Box>{filteredCat[2].name_zh}</Box>
                  ) : (
                    <Box>{filteredCat[2].name_en}</Box>
                  )}
                </Box>
                <Box>
                  {work3.map((w3, idx) => (
                    <Link
                      key={idx}
                      href={`/works/${w3.work_id}`}
                      as={`/works/${w3.work_id}`}
                    >
                      <Box pb={2} sx={{ lineHeight: 1.25 }}>
                        {useLang ? (
                          <Box>{w3.work_zh.title}</Box>
                        ) : (
                          <Box>{w3.work_en.title}</Box>
                        )}
                      </Box>
                    </Link>
                  ))}
                </Box>
              </TabPanel>
              <TabPanel value={value} index={4}>
                <Box pb={2} sx={{ lineHeight: 1.25 }}>
                  {useLang ? (
                    <Box>{filteredCat[3].name_zh}</Box>
                  ) : (
                    <Box>{filteredCat[3].name_en}</Box>
                  )}
                </Box>
                <Box>
                  {work4.map((w4, idx) => (
                    <Link
                      key={idx}
                      href={`/works/${w4.work_id}`}
                      as={`/works/${w4.work_id}`}
                    >
                      <Box pb={2} sx={{ lineHeight: 1.25 }}>
                        {useLang ? (
                          <Box>{w4.work_zh.title}</Box>
                        ) : (
                          <Box>{w4.work_en.title}</Box>
                        )}
                      </Box>
                    </Link>
                  ))}
                </Box>
              </TabPanel>
              <TabPanel value={value} index={5}>
                <Box>
                  {eventData.results.map((event, idx) => (
                    <Link
                      key={idx}
                      href={`/events/${event.activity_id}`}
                      as={`/events/${event.activity_id}`}
                    >
                      <Box pb={2} sx={{ lineHeight: 1.25 }}>
                        {useLang ? (
                          <Box>{event.title_zh}</Box>
                        ) : (
                          <Box>{event.title_en}</Box>
                        )}
                      </Box>
                    </Link>
                  ))}
                </Box>
              </TabPanel>
            </Box>
          </Item>
          <Item
            sx={{
              width: { xs: "100%", sm: "50%" },
              height: { xs: "100vh", sm: "70vh" },
            }}
          >
            <Box>
              <main>{children}</main>
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
          top: 10,
          right: 10,
        }}
      >
        nav
      </Box>
    </>
  );
}
