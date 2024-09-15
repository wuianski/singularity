/* MUI */
import { Box, Paper, Stack, styled } from "@mui/material";
/* Fetch data */
import { UNZIP_API } from "@/lib/api";

/* Item */
const Item = styled(Paper)(({ theme }) => ({
  borderRadius: 0,
  color: "rgba(220, 220, 220, 1)",
  backgroundColor: "rgba(0, 0, 0, 0.0)",
  // padding: theme.spacing(1),
  marginTop: "0 !important",
}));

export default function Event({ useLang, data }) {
  //   console.log(data);
  const dayNames = ["Sun.", "Mon.", "Tue.", "Wed.", "Thur.", "Fri.", "Sat."];

  return (
    <>
      <Box pt={8} pb={3} pl={2} pr={2}>
        {/* Time */}
        <Box pb={1} pt={4} sx={{ borderTop: "solid 1px #FF2E00" }}>
          {data.activity_sessions &&
            data.activity_sessions.map((as, index) => (
              <Box key={index}>
                <Stack direction={{ xs: "column", md: "row" }} spacing={0}>
                  <Item
                    sx={{
                      width: "33%",
                      fontSize: 26,
                      fontWeight: 600,
                      color: "#FF2E00",
                    }}
                  >
                    <Box>
                      {(new Date(as.start_time).getMonth() + 1)
                        .toString()
                        .padStart(2, "0")}
                      /
                      {new Date(as.start_time)
                        .getDate()
                        .toString()
                        .padStart(2, "0")}
                    </Box>
                  </Item>
                  <Item
                    sx={{
                      width: "33%",
                      fontSize: 26,
                      fontWeight: 600,
                      color: "#FF2E00",
                    }}
                  >
                    <Box>{dayNames[new Date(as.start_time).getDay()]}</Box>
                  </Item>
                  <Item
                    sx={{
                      width: { xs: "100%", md: "33%" },
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
        <Box pb={1} sx={{ fontSize: 26, fontWeight: 600, lineHeight: 1.2 }}>
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
