import { Box } from "@mui/material";
/* Fetch data */
import { UNZIP_API } from "@/lib/api";
export default function Intro({ useLang, data }) {
  //   console.log(data);
  return (
    <Box pt={5.5}>
      <Box p={2} sx={{ lineHeight: 1.56, color: "#fff", fontWeight: 500 }}>
        {useLang ? (
          <>
            <Box pb={3} sx={{ fontSize: 36, fontWeight: 600 }}>
              迎接奇異點的來臨
            </Box>
            <Box pb={3} sx={{ fontSize: 14, fontWeight: 300 }}>
              文／吳達坤
            </Box>
            <Box pb={2} sx={{ fontSize: 16 }}>
              <Box pb={2}>
                我們正處於21世紀的數位時代，科技的高速發展深刻影響著人類的生活方式、思維模式和社會結構。而在這一切變革的背後，存在著一個極具吸引力且深邃迷人的科技理論：奇異點（Singularity）。
              </Box>
              <Box pb={2}>
                「技術奇異點」（Technological
                Singularity）由數學家和電腦科學家維諾．文奇（Vernor
                Vinge）於1993年提出，並在其論文《即將到來的奇點：如何在後人類時代生存》中加以闡述。他將奇異點定義為一個關鍵時間點，此刻，機器智慧將超越人類智慧，並引發科技進步的加速爆炸，從根本上改變文明的發展路徑。學術界進一步將奇異點理解為人工智慧達到某一臨界點，從而引發技術的徹底顛覆，並產生所謂的「智慧爆炸」效應。
              </Box>
              <Box pb={2}>
                經過數十年全球CPU、GPU等半導體產業的推進，晶片算力和機器學習的速度已經達到不可同日而語的高度。人工智慧（Artificial
                Intelligence）逐漸變得更加自主、更加聰明，一切都揭示著人類科技正趨近這不可預測的「奇異點」。在今年臺北COMPUTEX
                2024前一晚，NVIDIA創辦人黃仁勳在台大體育館的演講讓我一度感受到那個臨界點或許已悄然而至。「奇異點」標誌著這個即將到來的全新紀元，人工智慧的普及和應用將對科學、政治、經濟、醫學、通訊、區塊鏈、量子力學等多個領域產生深遠影響，帶來翻天覆地的巨大躍進。這既充滿無限可能，也爲科技樂觀主義及悲觀主義者分別帶來前所未有的挑戰。
              </Box>
              <Box pb={2}>
                例如，雲端上傳技術可能使人類意識擺脫有機體的束縛，從而帶來難以想像的文明進步，科技也可能帶來巨大的倫理挑戰和道德風險。或者，超越人類智慧的機器或AI系統變得難以控制，那麼人類的生存將面臨重大威脅。在奇異點出現後，文明可能會像量子力學中的暗物質一樣，變得不可預測且充滿未知。
              </Box>
            </Box>

            <Box pb={2} sx={{ fontSize: 20, fontWeight: 600 }}>
              創造力與文化的重塑
            </Box>
            <Box pb={2} sx={{ fontSize: 16 }}>
              <Box pb={2}>
                技術奇異點的理論挑戰了我們對技術進步和未來的傳統認知，同時也重新定義了藝術創作的邊界，不僅象徵著技術革命的來臨，更是一次重新審視人類與科技共生關係的契機。在這個新紀元中，人工智慧不僅將改變我們的生活方式，還將深刻影響創造力和文化的發展方向。
              </Box>
              <Box pb={2}>
                隨著AI技術的不斷進步，創造範式正在經歷前所未有的轉變，藝術創作的未來也在這一過程中被重新塑造。AI不僅是創作工具，它還逐漸參與到創作過程中，與藝術家形成合作關係，甚至能夠獨立完成創作。AI可以生成圖像作品、分析創作風格，甚至預測藝術趨勢。這對傳統的創作過程提出了挑戰，也推動藝術創作走向更加多樣化和創新性的未來。
              </Box>
              <Box pb={2}>
                在音樂創作領域，AI技術已經能夠依據數據集生成音樂作品，這些作品在某些情況下甚至可以與人類音樂家的創作媲美。這引發了一個值得深入探討的問題：如果AI能夠自主創作藝術作品，那麼人類創作的獨特性是否會因此被削弱？AI的參與模糊了人類與機器在創作中的界限，也促使藝術家成為新技術應用於藝術創作的先鋒。
              </Box>
            </Box>

            <Box pb={2} sx={{ fontSize: 20, fontWeight: 600 }}>
              2024未來媒體藝術節
            </Box>
            <Box pb={2} sx={{ fontSize: 16 }}>
              <Box pb={2}>
                今年的「未來媒體藝術節」，C-LAB策展團隊透過定期的策展會議討論，整合協作來實現這場三年前的約定。展覽作品分布於四個主題章節：「流動的錨點（Flowing
                Anchor）」、「創造力的轉變（Transformation of
                Creativity）」、「創作者的洞見（Creator's
                Insight）」與「未完的篇章（AI
                Ongoing）」，以多重視角探討人工智慧與人類的共生關係。在這四個章節中，藝術家將展示他們對奇異點的探索與思考，利用最尖端的創作科技，如動態捕捉、演算法生成人物場景、遊戲引擎與程式語言等人工智慧，創造出超越傳統藝術界限的作品。這些創造範式的轉變，無疑為我們帶來了前所未有的視聽體驗跟更深刻的思維向度。
              </Box>
              <Box pb={2}>
                展覽邀請了來自9個國家的23組藝術家，展出26件作品，以各自獨特的創作方式，揭示人工智慧在藝術領域中的無限可能。同時，觀眾參與藝術節的互動過程中，將切身感受科技如何重新定義我們與世界的關係。在這個臨界點上，技術將不再只是工具，而是塑造了通向未來的力量。
              </Box>
            </Box>

            <Box pb={2} sx={{ fontSize: 20, fontWeight: 600 }}>
              小結
            </Box>
            <Box pb={2} sx={{ fontSize: 16 }}>
              <Box pb={2}>
                「未來媒體藝術節」深入探索科技藝術的無限潛力，在多元包容的藝術觀點中，匯聚了對技術論發展及未來影響的深刻思考。讓我們一起思索，「奇異點」不僅是技術的臨界點，更是一扇通向無限想像與創造的未來之門。打開這扇門的背後，是人類與科技創作共生的嶄新未來，充滿著未知、挑戰以及無限的機遇。
              </Box>
            </Box>
          </>
        ) : (
          <>
            <Box pb={3} sx={{ fontSize: 36, fontWeight: 600 }}>
              Embracing the Dawn of the Singularity{" "}
            </Box>
            <Box pb={3} sx={{ fontSize: 14, fontWeight: 300 }}>
              WU Dar-Kuen
            </Box>
            <Box pb={2} sx={{ fontSize: 16 }}>
              <Box pb={2}>
                In the heart of the 21st century's digital revolution,
                technological advancements are reshaping human existence—our
                lifestyles, thought processes, and societal structures.
                Underpinning this transformation is the captivating concept of
                the Singularity, a theory both alluring and profound.
              </Box>
              <Box pb={2}>
                The Technological Singularity, as envisioned by mathematician
                and computer scientist Vernor Vinge in 1993, designates a
                pivotal moment when machine intelligence eclipses human
                intellect. This event is predicted to trigger an exponential
                surge in technological progress, irrevocably altering the
                trajectory of civilization. The academic community further
                understands the Singularity as an inflection point where
                artificial intelligence reaches a certain threshold, catalyzing
                a cascade of technological disruptions and an "intelligence
                explosion."
              </Box>
              <Box pb={2}>
                Decades of global semiconductor industry progress, notably in
                CPUs and GPUs, have propelled computing power and machine
                learning to staggering heights. Artificial intelligence is
                evolving, becoming increasingly autonomous and sophisticated,
                hinting at humanity's approach toward the enigmatic Singularity.
                Jensen Huang, founder of NVIDIA, whose keynote address at NTU
                Sports Center, on the eve of COMPUTEX 2024, intensified this
                sensation, suggesting that the threshold might be upon us. The
                Singularity heralds a transformative epoch. Pervasive AI
                implementation is poised to revolutionize science, politics,
                economics, medicine, communication, blockchain, quantum
                mechanics, and countless other domains. While brimming with
                potential, this paradigm shift presents challenges to both
                technological optimists and pessimists.
              </Box>
              <Box pb={2}>
                Cloud upload technology, for instance, might liberate human
                consciousness from biological constraints, fostering
                unimaginable societal progress. Yet, it also raises profound
                ethical dilemmas and moral hazards. The prospect of
                uncontrollable, superintelligent AI systems poses an existential
                threat. Post-Singularity civilization could mirror quantum
                mechanics' dark matter—unpredictable and shrouded in mystery.
              </Box>
            </Box>

            <Box pb={2} sx={{ fontSize: 20, fontWeight: 600 }}>
              Reshaping Creativity and Culture
            </Box>
            <Box pb={2} sx={{ fontSize: 16 }}>
              <Box pb={2}>
                The concept of Technological Singularity challenges our
                preconceived notions of technological progress and the future.
                It redefines the very essence of artistic expression, heralding
                not just a technological revolution but a profound re-evaluation
                of the human-technology symbiosis. In this nascent era,
                artificial intelligence is poised to transform not only our
                lifestyles but the very fabric of creativity and culture.
              </Box>
              <Box pb={2}>
                The relentless march of AI is ushering in an unprecedented shift
                in the creative paradigm, reshaping the future of artistic
                creation. AI is no longer a mere tool; it is evolving into a
                collaborative partner, co-creating with artists and even
                venturing into independent artistic expression. AI's
                capabilities span from generating visual masterpieces and
                analyzing artistic styles to predicting future trends,
                challenging traditional artistic practices while simultaneously
                fostering a more diverse and innovative creative landscape.
              </Box>
              <Box pb={2}>
                In the realm of music, AI's ability to compose pieces that rival
                human creations has sparked a crucial debate: does AI's creative
                prowess diminish the uniqueness of human artistry? This blurring
                of lines between human and machine creativity compels artists to
                embrace the forefront of technological integration in the arts.
              </Box>
            </Box>

            <Box pb={2} sx={{ fontSize: 20, fontWeight: 600 }}>
              2024 Future Media FEST
            </Box>
            <Box pb={2} sx={{ fontSize: 16 }}>
              <Box pb={2}>
                This year's Future Media FEST, a culmination of C-LAB curatorial
                team's meticulous planning and passionate discussions through
                regular curatorial meetings, collaborates to fulfill the promise
                kindled three years ago. The exhibition's diverse collection of
                artworks, thoughtfully curated into four thematic
                chapters—"Flowing Anchor," "Transformation of Creativity,"
                "Creator's Insight," and "AI Ongoing"—to explore the intricate
                dance between artificial intelligence and humanity from
                multifaceted perspectives.
              </Box>
              <Box pb={2}>
                Within these thematic chapters, artists unveil their
                explorations and contemplations on the enigmatic Singularity.
                Leveraging cutting-edge creative technologies—motion capture,
                algorithmic character and scene generation, game engines, and
                AI-powered programming languages, they have crafted works that
                transcend traditional artistic boundaries, offering us a glimpse
                into uncharted creative territories. These paradigm shifts in
                the creative process promise to deliver unprecedented
                audiovisual experiences that challenge our perceptions and
                stimulate profound introspection.
              </Box>
              <Box pb={2}>
                The exhibition showcases 26 captivating works by 23 groups of
                artists hailing from 9 countries. Each artist, with their unique
                creative vision, demonstrates the boundless potential of
                artificial intelligence in the realm of art. As visitors engage
                with the exhibition's interactive installations, they will
                tangibly experience how technology is reshaping our
                understanding of the world and our place within it. At this
                pivotal moment, technology transcends its role as a mere tool;
                it emerges as a driving force, shaping the contours of our
                collective future.
              </Box>
            </Box>
            <Box pb={2} sx={{ fontSize: 20, fontWeight: 600 }}>
              Epilogue
            </Box>
            <Box pb={2} sx={{ fontSize: 16 }}>
              <Box pb={2}>
                The 2024 Future Media FEST ventures deep into the limitless
                potential of technological art, converging a multitude of
                perspectives on the evolution and implications of technology
                within an inclusive artistic landscape. Let us ponder together:
                the "Singularity" represents more than just a technological
                turning point; it is a portal to a future brimming with
                boundless imagination and creativity. As we step through this
                threshold, we embrace a new era of human-technology creative
                symbiosis, an era filled with both the thrill of the unknown and
                the promise of infinite possibilities.
              </Box>
            </Box>
          </>
        )}
      </Box>
    </Box>
  );
}

export async function getServerSideProps(context) {
  const { activity_id } = await context.query;

  const [data] = await Promise.all([
    await UNZIP_API(`/activities/${activity_id}?relation=true`),
  ]);

  return {
    props: { data },
  };
}
