import Box from "@mui/material/Box";
/* Fetch data */
import { UNZIP_API } from "@/lib/api";
import { useEffect, useState } from "react";
/* React-Player */
import ReactPlayer from "react-player";

export default function Home({ data }) {
  return (
    <Box>
      <Box sx={{ width: "100%", height: { xs: 200, md: "20vw" } }}>
        <ReactPlayer
          width="100%"
          height="100%"
          url="https://www.youtube.com/watch?v=giGOnnZUuwE"
          controls={true}
        />
      </Box>
    </Box>
  );
}

export async function getServerSideProps(params) {
  //   console.log(params.params.id);
  const [data] = await Promise.all([await UNZIP_API(`/categories`)]);

  return {
    props: { data },
  };
}
