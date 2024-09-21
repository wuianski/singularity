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
  {
    title_zh: "第二章：創造力的轉變",
    title_en: "Chapter 2: Transformation of Creativity",
    content_zh:
      "隨著人工智慧技術逐漸融入創作領域，創意實現的過程正經歷範式轉移。不僅重新定義了創造力的內涵，促使藝術家探索新形式的製程跟創意。 ",
    content_en: `As artificial intelligence technology becomes increasingly integrated into the creative realm, the process of realizing creative visions is undergoing a paradigm shift. This not only redefines the very essence of creativity but also compels artists to explore new forms of artistic processes and innovative expressions. `,
  },
  {
    title_zh: "第三章：創作者的洞見",
    title_en: "Chapter 3: Creator's Insight",
    content_zh:
      "呈現藝術家作為創意工作者的深刻洞見。透過他們獨特的思維模式，從多元視角推演出的獨一無二藝術觀點，展現出對未來前瞻性思考。 ",
    content_en: `This chapter showcases the creators' unique insights and forward-thinking visions, offering a glimpse into the future of art and technology through their unique thought processes and diverse perspectives. `,
  },
  {
    title_zh: "第四章：未完的篇章",
    title_en: "Chapter 4: AI Ongoing",
    content_zh:
      "以開放性的結尾，引導觀眾思辨歷史與未來不斷演進的過程，並思索尚待書寫的篇章。 ",
    content_en: `With an open ending, this chapter guides the audience to reflect on the ever-evolving process of history and the future, and to contemplate the chapters yet to be written. `,
  },
];

export default function ChapterIntro({ useLang, filteredCat }) {
  //   console.log(filteredCat.id);
  const router = useRouter();
  const isActive = (href) => router.asPath === href;

  return (
    <Box sx={{ borderBottom: "1px solid #fff" }}>
      {/* <Link
        href={`/chapters/${filteredCat.id}`}
        as={`/chapters/${filteredCat.id}`}
      > */}
      <MenuItem
        disableGutters={true}
        sx={{ paddingTop: 0, paddingBottom: 0 }}
        disabled={true}
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
          // className={isActive(`/chapters/${filteredCat.id}`) ? "active" : ""}
        >
          {/* {useLang ? "章節介紹" : "Chapter Introduction"} */}
          {filteredCat.id === 1
            ? useLang
              ? chapterIntroText[0].content_zh
              : chapterIntroText[0].content_en
            : filteredCat.id === 2
            ? useLang
              ? chapterIntroText[1].content_zh
              : chapterIntroText[1].content_en
            : filteredCat.id === 3
            ? useLang
              ? chapterIntroText[2].content_zh
              : chapterIntroText[2].content_en
            : filteredCat.id === 4
            ? useLang
              ? chapterIntroText[3].content_zh
              : chapterIntroText[3].content_en
            : useLang
            ? chapterIntroText[0].content_zh
            : chapterIntroText[0].content_en}
        </Box>
      </MenuItem>
      {/* </Link> */}
    </Box>
  );
}
