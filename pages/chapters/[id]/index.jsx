/* MUI */
import { Box, Paper, Stack, styled } from "@mui/material";
/* Fetch data */
import { UNZIP_API } from "@/lib/api";
import { useRouter } from "next/router";

/* Item */
const Item = styled(Paper)(({ theme }) => ({
  borderRadius: 0,
  color: "rgba(220, 220, 220, 1)",
  backgroundColor: "rgba(0, 0, 0, 0.0)",
  // padding: theme.spacing(1),
  paddingLeft: theme.spacing(1),
  marginTop: "0 !important",
}));

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

export default function Chapter({ useLang }) {
  const router = useRouter();
  const { id } = router.query;
  //   console.log(id);

  return (
    <Box pt={8} pl={2} pr={2}>
      {id === "1" ? (
        <>
          {/* <Box sx={{ whiteSpace: "normal", lineHeight: 1.56 }}>
            {useLang ? (
              <Box>
                <Box pb={2} sx={{ fontSize: 20, fontWeight: 500 }}>
                  {chapterIntroText[0].content_zh}
                </Box>
              </Box>
            ) : (
              <Box>
                <Box pb={2} sx={{ fontSize: 20, fontWeight: 500 }}>
                  {chapterIntroText[0].content_en}
                </Box>
              </Box>
            )}
          </Box> */}
          {/* 研究內容 */}

          <Box
            pt={2}
            sx={{
              lineHeight: 1.56,
              whiteSpace: "normal",
              borderTop: "solid 1px #fff",
            }}
          >
            {useLang ? (
              <Box pb={2} sx={{ fontSize: 16 }}>
                <Box pb={2}>
                  關於 AI
                  發展的歷史分期有諸多說法，但大多起始於第二次世界大戰之後。1956
                  年， 約翰． 麥卡錫（John MCCARTHY） 在達特茅斯 院（Dartmouth
                  College）的一場會議上提出「Artificial
                  Intelligence」一詞，標誌著 AI 研究的誕生。1960 年代，早期 AI
                  如 ELIZA 模擬心理治療師對話，展現了 AI 的潛力。但到了 1970
                  年代，由於技術限制和資金減少，進入了所謂的「AI 寒冬」。 
                </Box>
                <Box pb={2}>
                  隨著 IBM 的深藍超級電腦在 1997
                  年擊敗西洋棋冠軍卡斯巴洛夫（Garry KASPAROV），AI
                  又回到大眾的視野；2010 年代，深度學習技術推動了 AI
                  的巨大進步，2016 年 AlphaGo
                  擊敗圍棋世界冠軍李世乭，標誌著深度學習的成熟。進入 2020
                  年代，AI
                  技術在自然語言處理和圖像生成方面取得重大突破，誕生了大型語言模型如
                  GPT-3。生成式人工智慧 GAI（Generative
                  AI）則可生成逼真的圖像、影片和音樂等文本，GAI
                  有望在更多領域發揮作用，從創意產業到科學研究，繼續改變我們的生活和工作方式。 
                </Box>
                <Box pb={2}>
                  在本次計畫中，我們重點轉譯了科學研究與技術史的龐大內容，以關鍵的技術突破與相關事件為核心，在各個時期從「AI
                  發展」（軟體與演算法為主）、「世界史」（例如繪圖晶片量產、戰爭等事件）與「文化與藝術」（包括文學、藝術、大眾文化中的
                  AI 形象）三個層面平行呈現在不同階段 AI
                  演進同時的全球政治經濟與文化狀態，邀請觀眾從自己較為熟悉的面向找到閱讀的入口。
                </Box>
              </Box>
            ) : (
              <Box pb={2} sx={{ fontSize: 16 }}>
                <Box pb={2}>
                  There are many different accounts of the history of AI
                  development, but most agree that it began after World War II.
                  In 1956, John MCCARTHY coined the term "Artificial
                  Intelligence" at a conference at Dartmouth College, marking
                  the birth of AI research. In the 1960s, early AI like ELIZA,
                  which simulated a psychotherapist's conversation, demonstrated
                  the potential of AI. However, in the 1970s, due to
                  technological limitations and reduced funding, AI entered a
                  period known as the "AI Winter."
                </Box>
                <Box pb={2}>
                  With IBM's Deep Blue supercomputer defeating chess champion
                  Garry KASPAROV in 1997, AI returned to the public eye. In the
                  2010s, deep learning technology drove significant progress in
                  AI. In 2016, AlphaGo defeated Go world champion LEE Sedol,
                  marking the maturity of deep learning. Entering the 2020s, AI
                  technology has made significant breakthroughs in natural
                  language processing and image generation, giving rise to large
                  language models like GPT-3. Generative AI (GAI) can generate
                  realistic images, videos, music, and other text. GAI is
                  expected to play a role in more fields, from creative
                  industries to scientific research, continuing to change the
                  way we live and work.
                </Box>
                <Box pb={2}>
                  In this project, we have translated extensive scientific
                  research and technological history, focusing on key
                  technological breakthroughs and related events. We present the
                  evolution of AI in parallel with the global political,
                  economic, and cultural state during each period, from three
                  perspectives: "AI Development" (primarily software and
                  algorithms), "World History" (including mass production of
                  graphics chips, wars, etc.), and "Culture and Art" (involving
                  AI imagery in literature, art, and popular culture). We invite
                  viewers to discover a starting point for exploration based on
                  their familiarity with these aspects.
                </Box>
              </Box>
            )}
          </Box>
          {/* 研究團隊 */}
          <Box
            pt={3}
            pb={8}
            sx={{
              lineHeight: 1.25,
              whiteSpace: "normal",
              borderTop: "solid 1px #fff",
            }}
          >
            <Box
              pl={1}
              mb={2}
              sx={{
                fontSize: 14,
                fontWeight: 400,
                borderLeft: "1px solid #fff",
              }}
            >
              <Box> {useLang ? "研究團隊" : "Research Team"}</Box>
            </Box>
            <Stack direction={{ xs: "column", md: "row" }} spacing={0}>
              <Item
                sx={{
                  width: { xs: "100%", md: "20%" },
                  fontSize: 20,
                  fontWeight: 600,
                  borderLeft: "1px solid #fff",
                  marginBottom: { xs: 2, md: "unset" },
                }}
              >
                <Box> {useLang ? "自牧文化" : "ZIMU CULTURE"}</Box>
              </Item>
              <Item
                sx={{
                  width: { xs: "100%", md: "20%" },
                  fontSize: 14,
                  fontWeight: 400,
                  borderLeft: "1px solid #fff",
                  marginBottom: { xs: 2, md: "unset" },
                }}
              >
                <Box> {useLang ? "臺灣" : "Taiwan"}</Box>
              </Item>
              <Item
                sx={{
                  width: "60%",
                  fontSize: 14,
                  fontWeight: 400,
                  borderLeft: "1px solid #fff",
                  lineHeight: 1.4,
                }}
              >
                <Box mb={2}>
                  {useLang ? (
                    <Box>
                      自牧文化創立於 2022
                      年，關注數位時代的文化研究、影像理論與藝術創作。致力於譯介、製作相關的出版與展覽等多型態計畫。本次研究計畫由獨立策展人李佳霖與藝術家／研究者蔡侑霖共同執行。 
                    </Box>
                  ) : (
                    <Box>
                      ZIMU CULTURE was established in 2022, with a focus on
                      cultural studies, image theory, and artistic creation in
                      the digital age, dedicating to translating, producing, and
                      curating various forms of projects such as publications
                      and exhibitions. This research project is being carried
                      out by independent curator Angie Chia-Lin LEE and artist/
                      researcher Eric TSAI.
                    </Box>
                  )}
                </Box>
              </Item>
            </Stack>
          </Box>
        </>
      ) : id === "2" ? (
        <Box sx={{ lineHeight: 1.25, whiteSpace: "normal" }}>
          {useLang ? (
            <Box>
              {/* <Box pb={3} sx={{ fontSize: 20, fontWeight: 600 }}>
                {chapterIntroText[1].title_zh}
              </Box> */}
              <Box pb={2} sx={{ fontSize: 20, fontWeight: 500 }}>
                {chapterIntroText[1].content_zh}
              </Box>
            </Box>
          ) : (
            <Box>
              {/* <Box pb={3} sx={{ fontSize: 20, fontWeight: 600 }}>
                {chapterIntroText[1].title_en}
              </Box> */}
              <Box pb={2} sx={{ fontSize: 20, fontWeight: 500 }}>
                {chapterIntroText[1].content_en}
              </Box>
            </Box>
          )}
        </Box>
      ) : id === "3" ? (
        <Box sx={{ lineHeight: 1.25, whiteSpace: "normal" }}>
          {useLang ? (
            <Box>
              {/* <Box pb={3} sx={{ fontSize: 20, fontWeight: 600 }}>
                {chapterIntroText[2].title_zh}
              </Box> */}
              <Box pb={2} sx={{ fontSize: 20, fontWeight: 500 }}>
                {chapterIntroText[2].content_zh}
              </Box>
            </Box>
          ) : (
            <Box>
              {/* <Box pb={3} sx={{ fontSize: 20, fontWeight: 600 }}>
                {chapterIntroText[2].title_en}
              </Box> */}
              <Box pb={2} sx={{ fontSize: 20, fontWeight: 500 }}>
                {chapterIntroText[2].content_en}
              </Box>
            </Box>
          )}
        </Box>
      ) : id === "4" ? (
        <Box sx={{ lineHeight: 1.25, whiteSpace: "normal" }}>
          {useLang ? (
            <Box>
              {/* <Box pb={3} sx={{ fontSize: 20, fontWeight: 600 }}>
                {chapterIntroText[3].title_zh}
              </Box> */}
              <Box pb={2} sx={{ fontSize: 20, fontWeight: 500 }}>
                {chapterIntroText[3].content_zh}
              </Box>
            </Box>
          ) : (
            <Box>
              {/* <Box pb={3} sx={{ fontSize: 20, fontWeight: 600 }}>
                {chapterIntroText[3].title_en}
              </Box> */}
              <Box pb={2} sx={{ fontSize: 20, fontWeight: 500 }}>
                {chapterIntroText[3].content_en}
              </Box>
            </Box>
          )}
        </Box>
      ) : null}
    </Box>
  );
}
