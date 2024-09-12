/* Next */
import Link from "next/link";
import { useRouter } from "next/router";
/* MUI */
import { Box, MenuItem } from "@mui/material";

export default function workList({ useLang, work }) {
  // console.log(filteredCat);
  const router = useRouter();
  const isActive = (href) => router.asPath === href;
  //   console.log(router.asPath);
  return (
    <Box>
      {work.map((w, idx) => (
        <Box key={idx}>
          <MenuItem>
            <Link href={`/works/${w.work_id}`} as={`/works/${w.work_id}`}>
              <Box
                pt={1.5}
                pb={0.5}
                sx={{
                  lineHeight: 1.25,
                  whiteSpace: "normal",
                  color: "rgba(255,255,255,0.6)",
                }}
                className={isActive(`/works/${w.work_id}`) ? "active" : ""}
              >
                {useLang ? (
                  <Box>{w.work_zh.title}</Box>
                ) : (
                  <Box>{w.work_en.title}</Box>
                )}
              </Box>
            </Link>
          </MenuItem>
        </Box>
      ))}
    </Box>
  );
}
