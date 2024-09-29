/* Next */
import Link from "next/link";
import { useRouter } from "next/router";
/* MUI */
import { Box, MenuItem } from "@mui/material";
import { Padding } from "@mui/icons-material";

export default function ExhibitionIntro({ useLang }) {
  // console.log(eventData);
  const router = useRouter();
  const isActive = (href) => router.asPath === href;

  return (
    <>
      <Box sx={{ borderBottom: "1px solid #fff" }}>
        <Link href={`/`} as={`/`}>
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
              }}
              // className={isActive(`/`) ? "active " : ""}
              style={isActive(`/`) ? { color: "#434AD2" } : { color: "#fff" }}
            >
              {/* {useLang ? <Box>影片</Box> : <Box>Video</Box>} */}
              {useLang ? <Box>展覽簡介</Box> : <Box>Introduction</Box>}
            </Box>
          </MenuItem>
        </Link>
      </Box>
      {/* <Box sx={{ borderBottom: "1px solid #fff" }}>
        <Link href={`/intro`} as={`/intro`}>
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
              }}
              className={isActive(`/intro`) ? "active" : ""}
            >
              {useLang ? <Box>展覽簡介</Box> : <Box>Introduction</Box>}
            </Box>
          </MenuItem>
        </Link>
      </Box> */}
    </>
  );
}
