import { Box } from "@mui/material";
/* Fetch data */
import { UNZIP_API } from "@/lib/api";
export default function Event({ useLang, data }) {
  //   console.log(data);
  return (
    <>
      <Box sx={{ lineHeight: 1.25, minHeight: 48 }}>
        {useLang ? (
          <>
            <Box>{data.title_zh}</Box>
          </>
        ) : (
          <>
            <Box>{data.title_en}</Box>
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
