import { Box } from "@mui/material";
/* Fetch data */
import { UNZIP_API } from "@/lib/api";
export default function Intro({ useLang, data }) {
  //   console.log(data);
  return (
    <>
      <Box sx={{ lineHeight: 1.25, minHeight: 48 }}>
        {useLang ? (
          <>
            <Box>迎接奇異點的來臨</Box>
            <Box>文／吳達坤</Box>
          </>
        ) : (
          <>
            <Box>Embracing the Dawn of the Singularity </Box>
            <Box>WU Dar-Kuen </Box>
          </>
        )}
      </Box>
    </>
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
