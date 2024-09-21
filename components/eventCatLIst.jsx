/* Next */
import Link from "next/link";
import { useRouter } from "next/router";
/* MUI */
import { Box, MenuItem } from "@mui/material";

export default function EventCatList({
  useLang,
  eventData,
  event1,
  event2,
  event3,
  event4,
}) {
  // console.log(eventData);
  const router = useRouter();
  const isActive = (href) => router.asPath === href;
  //   console.log(eventData);
  const eventCat = [
    {
      cat_zh: "藝術家座談",
      cat_en: "Artist Talks",
      data: event1,
    },
    {
      cat_zh: "講座",
      cat_en: "Talks",
      data: event2,
    },
    {
      cat_zh: "工作坊",
      cat_en: "Workshops",
      data: event3,
    },
    {
      cat_zh: "導覽",
      cat_en: "Guided Tour",
      data: event4,
    },
  ];

  return (
    <>
      <Box sx={{ lineHeight: 1.25, whiteSpace: "normal" }}>
        {eventCat.map((event, idx) => (
          <Box key={idx} sx={{ borderBottom: "1px solid #fff" }}>
            <Link href={`/event/${event.cat_zh}`} as={`/event/${event.cat_zh}`}>
              <MenuItem
                disableGutters={true}
                sx={{ paddingTop: 0, paddingBottom: 0 }}
              >
                <Box
                  sx={{
                    lineHeight: 1.25,
                    whiteSpace: "normal",
                    color: "#fff",
                    fontSize: "26px",
                    fontWeight: 600,
                    paddingTop: "30px",
                    paddingBottom: "18px",
                    letterSpacing: "-0.01em",
                  }}
                  // className={
                  //   isActive(`/events/${event.activity_id}`) ? "active" : ""
                  // }
                >
                  {useLang ? event.cat_zh : event.cat_en}
                </Box>
              </MenuItem>
            </Link>

            <Box
              sx={{
                lineHeight: 1.25,
                whiteSpace: "normal",
                color: "#fff",
                fontSize: "26px",
                fontWeight: 600,
                paddingTop: "30px",
                paddingBottom: "18px",
                letterSpacing: "-0.01em",
              }}
              // className={
              //   isActive(`/events/${event.activity_id}`) ? "active" : ""
              // }
            >
              {event.data.map((d, idx) => (
                <MenuItem
                  disableGutters={true}
                  sx={{ paddingTop: 0, paddingBottom: 0 }}
                >
                  <Box key={idx} sx={{ borderBottom: "1px solid #fff" }}>
                    {d.title_zh}
                  </Box>
                </MenuItem>
              ))}
            </Box>
          </Box>
        ))}
      </Box>
    </>
  );
}
