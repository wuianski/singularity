/* Next */
import Link from "next/link";
import { useRouter } from "next/router";
/* MUI */
import { Box, MenuItem } from "@mui/material";

export default function eventList({ useLang, eventData }) {
  // console.log(eventData);
  const router = useRouter();
  const isActive = (href) => router.asPath === href;

  return (
    <Box sx={{ lineHeight: 1.25, whiteSpace: "normal" }}>
      {eventData.results.map((event, idx) => (
        <Box key={idx}>
          <MenuItem>
            <Link
              href={`/events/${event.activity_id}`}
              as={`/events/${event.activity_id}`}
            >
              <Box
                pt={1.5}
                pb={0.5}
                sx={{
                  lineHeight: 1.25,
                  whiteSpace: "normal",
                  color: "rgba(255,255,255,0.6)",
                }}
                className={
                  isActive(`/events/${event.activity_id}`) ? "active" : ""
                }
              >
                {useLang ? (
                  <Box>{event.title_zh}</Box>
                ) : (
                  <Box>{event.title_en}</Box>
                )}
              </Box>
            </Link>
          </MenuItem>
        </Box>
      ))}
    </Box>
  );
}
