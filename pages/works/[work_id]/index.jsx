import { Box } from "@mui/material";
/* Fetch data */
import { UNZIP_API } from "@/lib/api";
import Image from "next/image";

export default function Snews({ useLang, data }) {
  //   console.log(data);
  return (
    <>
      <Box sx={{ lineHeight: 1.25, minHeight: 48 }}>
        {useLang ? (
          <>
            <Box>{data.work_zh.title}</Box>
            <Box component="span">
              {data.artists &&
                data.artists.map((artist, index) => (
                  <Box key={index} component="span" mr={1}>
                    {artist.artist_zh.name}
                  </Box>
                ))}
            </Box>
            <Box
              sx={{
                backgroundColor: "none",
                width: { xs: "100%", md: "100%" },
                height: { xs: 200, md: 255 },
                position: "relative",
              }}
            >
              <Image
                priority={true}
                fill
                alt="Picture of the artwork"
                src={`https://unzip-clab-api.clab.org.tw/${data.photo_1}`}
                quality={90}
                style={{
                  objectFit: "contain",
                  objectPosition: "right",
                }}
                sizes="(max-width: 768px) 50vw,  25vw"
              />
            </Box>
          </>
        ) : (
          <>
            <Box>{data.work_en.title}</Box>
            <Box component="span">
              {data.artists &&
                data.artists.map((artist, index) => (
                  <Box key={index} component="span" mr={1}>
                    {artist.artist_en.name}
                  </Box>
                ))}
            </Box>
          </>
        )}
      </Box>
    </>
  );
}

export async function getServerSideProps(context) {
  const { work_id } = await context.query;

  const [data] = await Promise.all([
    await UNZIP_API(`/works/${work_id}?relation=true`),
  ]);

  return {
    props: { data },
  };
}
