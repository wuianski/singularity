/* Next */
import Link from "next/link";
import { useRouter } from "next/router";
/* MUI */
import { Box, MenuItem } from "@mui/material";

export default function chapterIntro({ useLang, filteredCat }) {
  //   console.log(filteredCat.id);
  const router = useRouter();
  const isActive = (href) => router.asPath === href;

  return (
    <Box>
      <MenuItem>
        <Link
          href={`/chapters/${filteredCat.id}`}
          as={`/chapters/${filteredCat.id}`}
        >
          <Box
            pt={1.5}
            pb={0.5}
            sx={{
              lineHeight: 1.25,
              whiteSpace: "normal",
              color: "rgba(255,255,255,0.6)",
            }}
            className={isActive(`/chapters/${filteredCat.id}`) ? "active" : ""}
          >
            {useLang ? (
              <Box>{filteredCat.name_zh}</Box>
            ) : (
              <Box>{filteredCat.name_en}</Box>
            )}
          </Box>
        </Link>
      </MenuItem>
    </Box>
  );
}
