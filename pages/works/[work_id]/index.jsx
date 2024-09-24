import { useState, useEffect } from "react";
/* MUI */
import { Box, Paper, Stack, styled } from "@mui/material";
/* Fetch data */
import { UNZIP_API } from "@/lib/api";
import Image from "next/image";
/* Keen Slider */
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";

import { useRouter } from "next/router";

/* Item */
const Item = styled(Paper)(({ theme }) => ({
  borderRadius: 0,
  color: "rgba(220, 220, 220, 1)",
  backgroundColor: "rgba(0, 0, 0, 0.0)",
  // padding: theme.spacing(1),
  paddingLeft: theme.spacing(1),
  marginTop: "0 !important",
}));

function Arrow(props) {
  const disabled = props.disabled ? " arrow--disabled" : "";
  return (
    <svg
      onClick={props.onClick}
      className={`arrow ${
        props.left ? "arrow--left" : "arrow--right"
      } ${disabled}`}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
    >
      {props.left && (
        <path d="M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z" />
      )}
      {!props.left && (
        <path d="M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z" />
      )}
    </svg>
  );
}

export default function Work({ useLang, data }) {
  const router = useRouter();
  // console.log(router.query.work_id);
  const images = [
    {
      image: data.photo_1
        ? `https://unzip-clab-api.clab.org.tw/${data.photo_1}`
        : null,
      description_zh: data.photo_1 ? `${data.work_zh.photo_1_d}` : null,
      description_en: data.photo_1 ? `${data.work_en.photo_1_d}` : null,
    },
    {
      image: data.photo_2
        ? `https://unzip-clab-api.clab.org.tw/${data.photo_2}`
        : null,
      description_zh: data.photo_2 ? `${data.work_zh.photo_2_d}` : null,
      description_en: data.photo_2 ? `${data.work_en.photo_2_d}` : null,
    },
    {
      image: data.photo_3
        ? `https://unzip-clab-api.clab.org.tw/${data.photo_3}`
        : null,
      description_zh: data.photo_3 ? `${data.work_zh.photo_3_d}` : null,
      description_en: data.photo_3 ? `${data.work_en.photo_3_d}` : null,
    },
    {
      image: data.photo_4
        ? `https://unzip-clab-api.clab.org.tw/${data.photo_4}`
        : null,
      description_zh: data.photo_4 ? `${data.work_zh.photo_4_d}` : null,
      description_en: data.photo_4 ? `${data.work_en.photo_4_d}` : null,
    },
    {
      image: data.photo_5
        ? `https://unzip-clab-api.clab.org.tw/${data.photo_5}`
        : null,
      description_zh: data.photo_5 ? `${data.work_zh.photo_5_d}` : null,
      description_en: data.photo_5 ? `${data.work_en.photo_5_d}` : null,
    },
  ];
  const newImages = images.filter((image) => image.image !== null);
  // console.log(newImages);

  const [loaded, setLoaded] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);

  const [sliderRef, instanceRef] = useKeenSlider({
    // animationEnded(s) {
    //   setCurrentSlide(s.track.details.rel);
    // },
    initial: 0,
    range: {
      align: true,
      min: 0,
      max: newImages.length - 1,
    },
    // loop: {
    //   min: 0,
    //   max: newImages.length - 1,
    // },
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel);
    },
    created(slider) {
      setLoaded(true);
    },
  });

  // console.log(currentSlide);

  useEffect(() => {
    instanceRef.current?.moveToIdx(0);
  }, [router]);

  return (
    <>
      {/* artwork slider */}
      <Box>
        <div ref={sliderRef} className="keen-slider">
          {newImages.map((src, idx) => (
            <div key={idx} className="keen-slider__slide lazy__slide">
              <Box
                sx={{
                  backgroundColor: "none",
                  position: "relative",
                  width: "100%",
                  height: { xs: 200, md: "22vw" },
                }}
              >
                {src.image && (
                  <Image
                    fill
                    // src={loaded[idx] ? src.image : ""}
                    src={src.image ? src.image : ""}
                    alt="Picture of the artwork"
                    // quality={90}
                    style={{
                      objectFit: "cover",
                      objectPosition: "center",
                    }}
                    sizes="(max-width: 768px) 50vw,  50vw"
                  />
                )}
              </Box>

              {src.image && src.description_zh && src.description_en && (
                <Box
                  sx={{
                    position: "relative",
                    top: "0px",
                    zIndex: 999,
                    color: "#fff",
                    backgroundColor: "#000",
                    width: "100%",
                    height: 50,
                    // borderBottom: "1px solid #fff",
                    fontSize: 14,
                  }}
                  pt={{ xs: 0, md: 1 }}
                  pl={2}
                  pb={0.5}
                >
                  {useLang ? (
                    <Box pt={1}>{src.description_zh && src.description_zh}</Box>
                  ) : (
                    <Box pt={1}>{src.description_en && src.description_en}</Box>
                  )}
                </Box>
              )}
            </div>
          ))}
          {loaded && instanceRef.current && (
            <>
              <Arrow
                left
                onClick={(e) =>
                  e.stopPropagation() || instanceRef.current?.prev()
                }
                disabled={currentSlide === 0}
              />

              <Arrow
                onClick={(e) =>
                  e.stopPropagation() || instanceRef.current?.next()
                }
                disabled={currentSlide === newImages.length - 1}
              />
            </>
          )}
        </div>
      </Box>
      {/* artwork info */}
      <Box
        p={2}
        sx={{ fontSize: 14, fontWeight: 400, borderTop: "1px solid #fff" }}
      >
        <Box pt={6} pb={3}>
          <Stack direction={{ xs: "column", md: "row" }} spacing={0}>
            <Item
              sx={{
                width: { xs: "100%", md: "50%" },
                borderLeft: "1px solid #fff",
                fontSize: 20,
                fontWeight: 600,
                marginBottom: { xs: 2, md: "unset" },
              }}
            >
              {useLang ? data.work_zh.title : data.work_en.title}
            </Item>
            <Item
              sx={{
                width: { xs: "100%", md: "50%" },
                borderLeft: "1px solid #fff",
                fontSize: 20,
                fontWeight: 600,
                marginBottom: { xs: 2, md: "unset" },
              }}
            >
              <Box component="span">
                {data.artists &&
                  data.artists.map((artist, index) => (
                    <Box key={index} mr={1}>
                      {useLang ? artist.artist_zh.name : artist.artist_en.name}
                    </Box>
                  ))}
              </Box>
            </Item>
          </Stack>
          <Box pt={{ xs: 0, md: 3 }} pb={0}>
            <Stack direction={{ xs: "column", md: "row" }} spacing={0}>
              <Item
                sx={{
                  width: { xs: "100%", md: "50%" },
                  borderLeft: ".5px solid #fff",
                  marginBottom: { xs: 2, md: "unset" },
                }}
              >
                <Box>{new Date(data.year).getFullYear()}</Box>
                <Box component="span">
                  {data.materials &&
                    data.materials.map((material, index) => (
                      <Box key={index} mr={1}>
                        {useLang ? material.name_zh : material.name_en}
                      </Box>
                    ))}
                </Box>
                <Box> {data.work_en.dimension}</Box>
              </Item>
              <Item
                sx={{
                  width: { xs: "100%", md: "50%" },
                  borderLeft: ".5px solid #FF2E00",
                  color: "#FF2E00",
                }}
              >
                {useLang ? data.location.name_zh : data.location.name_en}
              </Item>
            </Stack>
          </Box>
        </Box>
      </Box>
      {/* artwork main text + artist intro */}
      <Box p={2} sx={{ fontSize: 14, fontWeight: 400 }}>
        <Box
          pb={6}
          sx={{
            lineHeight: 1.56,
            color: "#fff",
            fontWeight: 500,
            borderBottom: "1px solid #fff",
          }}
        >
          {useLang ? (
            <>
              <Box
                sx={{ fontSize: 14, fontWeight: 400 }}
                dangerouslySetInnerHTML={{ __html: data.work_zh.proposal }}
              />
            </>
          ) : (
            <>
              <Box
                sx={{ fontSize: 14, fontWeight: 400 }}
                dangerouslySetInnerHTML={{ __html: data.work_en.proposal }}
              />
            </>
          )}
        </Box>

        <Box
          pb={6}
          pt={2}
          sx={{ lineHeight: 1.56, color: "#fff", fontWeight: 500 }}
        >
          <Box>
            {data.artists &&
              data.artists.map((artist, index) => (
                <Box key={index} mr={1} pb={1}>
                  <Box pb={1}>
                    {useLang ? artist.artist_zh.name : artist.artist_en.name}
                  </Box>
                  <Box>
                    {useLang
                      ? artist.artist_zh.introduction
                      : artist.artist_en.introduction}
                  </Box>
                </Box>
              ))}
          </Box>
        </Box>
      </Box>
    </>
  );
}

export async function getServerSideProps(context) {
  const { work_id } = await context.query;

  const [data] = await Promise.all([
    await UNZIP_API(`/works/${work_id}?relation=true`),
  ]);

  return {
    props: { data },
  };
}
