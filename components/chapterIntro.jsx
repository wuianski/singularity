/* Next */
import Link from "next/link";
import { useRouter } from "next/router";
/* MUI */
import { Box, MenuItem } from "@mui/material";

export default function ChapterIntro({ useLang, filteredCat }) {
  //   console.log(filteredCat.id);
  const router = useRouter();
  const isActive = (href) => router.asPath === href;

  return (
    <Box sx={{ borderBottom: "1px solid #fff" }}>
      <Link
        href={`/chapters/${filteredCat.id}`}
        as={`/chapters/${filteredCat.id}`}
      >
        <MenuItem>
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
            className={isActive(`/chapters/${filteredCat.id}`) ? "active" : ""}
          >
            {/* {useLang ? filteredCat.name_zh : filteredCat.name_en} */}
            {useLang ? "章節介紹" : "Chapter Introduction"}
          </Box>
        </MenuItem>
      </Link>
    </Box>
  );
}
