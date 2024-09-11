import Box from "@mui/material/Box";
/* Fetch data */
import { UNZIP_API } from "@/lib/api";
import { useEffect, useState } from "react";

export default function Home({ data }) {
  return (
    <>
      <Box>front page</Box>
    </>
  );
}

export async function getServerSideProps(params) {
  //   console.log(params.params.id);
  const [data] = await Promise.all([await UNZIP_API(`/categories`)]);

  return {
    props: { data },
  };
}
