/* Next */
import Link from "next/link";
import { useRouter } from "next/router";
/* MUI */
import { Box, MenuItem } from "@mui/material";

export default function WorkList({ useLang, work }) {
  // console.log(filteredCat);
  const router = useRouter();
  const isActive = (href) => router.asPath === href;
  //   console.log(router.asPath);
  return (
    <Box>
      {work.map((w, idx) => (
        <Box key={idx} sx={{ borderBottom: "1px solid #fff" }}>
          <Link href={`/works/${w.work_id}`} as={`/works/${w.work_id}`}>
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
                className={isActive(`/works/${w.work_id}`) ? "active" : ""}
              >
                {useLang ? w.work_zh.title : w.work_en.title}
              </Box>
            </MenuItem>
          </Link>
        </Box>
      ))}
    </Box>
  );
}
