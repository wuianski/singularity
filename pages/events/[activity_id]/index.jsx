import { useState, useEffect } from "react";
/* MUI */
import { Box, Paper, Stack, styled } from "@mui/material";
/* Fetch data */
import { UNZIP_API } from "@/lib/api";
import { use } from "react";
/* Next */
import { useRouter } from "next/router";
/* Seamless scroll polyfill */
import { scrollIntoView } from "seamless-scroll-polyfill";

/* Item */
const Item = styled(Paper)(({ theme }) => ({
  borderRadius: 0,
  color: "rgba(220, 220, 220, 1)",
  backgroundColor: "rgba(0, 0, 0, 0.0)",
  // padding: theme.spacing(1),
  marginTop: "0 !important",
}));

export default function Event({ useLang, data }) {
  // console.log(data.start_date);
  const dayNames = ["Sun.", "Mon.", "Tue.", "Wed.", "Thur.", "Fri.", "Sat."];
  const router = useRouter();

  useEffect(() => {
    scrollIntoView(document.getElementById("event_container"), {
      behavior: "auto",
      block: "start",
      inline: "start",
    });
  }, [router]);

  return (
    <>
      <Box pt={8} pb={3} pl={2} pr={2} id="event_container">
        {/* Time */}
        <Box pb={1} pt={4} sx={{ borderTop: "solid 1px #FF2E00" }}>
          {data.activity_sessions &&
            data.activity_sessions.map((as, index) => (
              <Box key={index}>
                <Stack direction={{ xs: "column", md: "row" }} spacing={0}>
                  <Item
                    sx={{
                      width: "30%",
                      fontSize: 26,
                      fontWeight: 600,
                      color: "#FF2E00",
                    }}
                  >
                    <Box>{dayNames[new Date(as.start_time).getDay()]}</Box>
                  </Item>
                  <Item
                    sx={{
                      width: "35%",
                      fontSize: 26,
                      fontWeight: 600,
                      color: "#FF2E00",
                    }}
                  >
                    <Box component="span">
                      {(new Date(as.start_time).getMonth() + 1)
                        .toString()
                        .padStart(2, "0")}
                      /
                      {new Date(as.start_time)
                        .getDate()
                        .toString()
                        .padStart(2, "0")}
                    </Box>
                    {data.title_zh == "團體導覽預約" ? (
                      <Box component="span">
                        -
                        {(new Date(data.start_date).getMonth() + 1)
                          .toString()
                          .padStart(2, "0")}
                        /
                        {(new Date(data.end_date).getMonth() + 1)
                          .toString()
                          .padStart(2, "0")}
                      </Box>
                    ) : (
                      ""
                    )}
                  </Item>

                  <Item
                    sx={{
                      width: { xs: "100%", md: "35%" },
                      fontSize: 26,
                      fontWeight: 600,
                      color: "#FF2E00",
                      textAlign: { xs: "left", md: "right" },
                    }}
                  >
                    <Box>
                      {new Date(as.start_time)
                        .getHours()
                        .toString()
                        .padStart(2, "0")}
                      :
                      {new Date(as.start_time)
                        .getMinutes()
                        .toString()
                        .padStart(2, "0")}
                      -
                      {new Date(as.end_time)
                        .getHours()
                        .toString()
                        .padStart(2, "0")}
                      :
                      {new Date(as.end_time)
                        .getMinutes()
                        .toString()
                        .padStart(2, "0")}
                    </Box>
                  </Item>
                </Stack>
              </Box>
            ))}
        </Box>

        {/* Intro */}
        <Box pb={2} sx={{ fontSize: 26, fontWeight: 600, lineHeight: 1.2 }}>
          {useLang ? (
            <Box dangerouslySetInnerHTML={{ __html: data.introduction_zh }} />
          ) : (
            <Box dangerouslySetInnerHTML={{ __html: data.introduction_en }} />
          )}
        </Box>
        {/* Location */}
        <Box sx={{ fontSize: 20, fontWeight: 600 }}>
          <Box component="span" pr={2} sx={{ color: "#FF2E00" }}>
            {useLang ? "地點" : "Location"}
          </Box>
          <Box
            component="span"
            sx={{ display: { xs: "none", md: "inline-block" } }}
          >
            {useLang ? data.location_zh : data.location_en}
          </Box>
          <Box sx={{ display: { xs: "block", md: "none" } }}>
            {useLang ? data.location_zh : data.location_en}
          </Box>
        </Box>
        {/* Sign up */}
        <Box pt={2}>
          {useLang ? (
            <a href={data.registration_url} target="_blank">
              <Box sx={{ fontSize: 20, fontWeight: 600, color: "#FF2E00" }}>
                報名
              </Box>
            </a>
          ) : (
            <a href={data.registration_url} target="_blank">
              <Box sx={{ fontSize: 20, fontWeight: 600, color: "#FF2E00" }}>
                Sign up
              </Box>
            </a>
          )}
        </Box>
      </Box>
    </>
  );
}

export async function getServerSideProps(context) {
  const { activity_id } = await context.query;

  const [data] = await Promise.all([
    await UNZIP_API(`/activities/${activity_id}?relation=true`),
  ]);

  return {
    props: { data },
  };
}
