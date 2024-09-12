/* Next */
import Link from "next/link";
import { useRouter } from "next/router";
/* MUI */
import { Box, MenuItem } from "@mui/material";

export default function ExhibitionIntro({ useLang }) {
  // console.log(eventData);
  const router = useRouter();
  const isActive = (href) => router.asPath === href;

  return (
    <>
      <Box>
        <MenuItem>
          <Link href={`/`} as={`/`}>
            <Box
              pt={1.5}
              pb={0.5}
              sx={{
                lineHeight: 1.25,
                whiteSpace: "normal",
                color: "rgba(255,255,255,0.6)",
              }}
              className={isActive(`/`) ? "active" : ""}
            >
              {useLang ? <Box>影片</Box> : <Box>Video</Box>}
            </Box>
          </Link>
        </MenuItem>
      </Box>
      <Box pb={2}>
        <MenuItem>
          <Link href={`/intro`} as={`/intro`}>
            <Box
              pt={1.5}
              pb={0.5}
              sx={{
                lineHeight: 1.25,
                whiteSpace: "normal",
                color: "rgba(255,255,255,0.6)",
              }}
              className={isActive(`/intro`) ? "active" : ""}
            >
              {useLang ? <Box>展覽簡介</Box> : <Box>Introduction</Box>}
            </Box>
          </Link>
        </MenuItem>
      </Box>
    </>
  );
}
