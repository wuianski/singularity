import { useState } from "react";
/* Next */
import Link from "next/link";
import { useRouter } from "next/router";
/* MUI */
import { Box, MenuItem } from "@mui/material";

const chapterIntroText = [
  {
    title_zh: "第一章：流動的錨點",
    title_en: "Chapter 1: Flowing Anchor",
    content_zh:
      "回顧科技進展、AI發展歷程與知識文化，探索科技如何動搖人類的認知基石與價值觀。以大量調查研究過程，再次梳理人類在時代變革中的重大立足點（事件）。 ",
    content_en: `In this chapter, we embark on a retrospective journey through the annals of technological advancement, tracing the evolution of AI and its profound impact on human knowledge and cultural landscapes. We delve into the ways in which technology has consistently challenged and reshaped the very foundations of human understanding and values, compelling us to continually re-evaluate our place in an ever-evolving world. Through meticulous research and investigation, we revisit pivotal moments in history — the "anchors"—that have not only shaped humanity's trajectory but also served as grounding points amidst the relentless tides of transformation. `,
  },
];

export default function ChapterIntro1({ useLang, filteredCat }) {
  //   console.log(filteredCat.id);
  const router = useRouter();
  const isActive = (href) => router.asPath === href;

  // console.log("isActive, ", isActive);
  // console.log("router.asPath", router.asPath);

  return (
    <Box sx={{ borderBottom: "1px solid #fff" }}>
      <Link
        href={`/chapters/${filteredCat.id}`}
        as={`/chapters/${filteredCat.id}`}
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
            }}
            style={
              router.asPath == "/chapters/1"
                ? { color: "#FF2E00" }
                : { color: "#fff" }
            }
          >
            {filteredCat.id === 1
              ? useLang
                ? chapterIntroText[0].content_zh
                : chapterIntroText[0].content_en
              : useLang}
          </Box>
        </MenuItem>
      </Link>
    </Box>
  );
}
