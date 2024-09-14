/* Next */
import Link from "next/link";
import { useRouter } from "next/router";
/* MUI */
import { Box, MenuItem } from "@mui/material";

export default function WventList({ useLang, eventData }) {
  // console.log(eventData);
  const router = useRouter();
  const isActive = (href) => router.asPath === href;

  return (
    <Box sx={{ lineHeight: 1.25, whiteSpace: "normal" }}>
      {eventData.results.map((event, idx) => (
        <Box key={idx} sx={{ borderBottom: "1px solid #fff" }}>
          <Link
            href={`/events/${event.activity_id}`}
            as={`/events/${event.activity_id}`}
          >
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
                className={
                  isActive(`/events/${event.activity_id}`) ? "active" : ""
                }
              >
                {useLang ? event.title_zh : event.title_en}
              </Box>
            </MenuItem>
          </Link>
        </Box>
      ))}
    </Box>
  );
}
