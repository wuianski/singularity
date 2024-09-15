/* MUI */
import { Box } from "@mui/material";
/* Next */
import Image from "next/image";

export default function Background() {
  return (
    <>
      {/* Background Image */}
      <Box
        sx={{
          position: "absolute",
          zIndex: 2,
          width: "100vw",
          height: "100vh",
        }}
      >
        <Image
          priority={true}
          src="/bg1.png"
          fill
          alt="Picture of the author"
          style={{ objectFit: "cover" }}
        />
      </Box>
      {/* Background Image Text Left */}
      <Box
        sx={{
          display: { xs: "none", md: "block" },
          position: "absolute",
          zIndex: 3,
          width: "100vw",
          height: "100vh",
        }}
      >
        <Image
          priority={true}
          src="/bg2_left.png"
          fill
          alt="Picture of the author"
          style={{ objectFit: "cover", objectPosition: "top left" }}
        />
      </Box>
      {/* Background Image Text Right */}
      <Box
        sx={{
          display: { xs: "none", lg: "block" },
          position: "absolute",
          zIndex: 3,
          width: "100vw",
          height: "100vh",
        }}
      >
        <Image
          priority={true}
          src="/bg2_right.png"
          fill
          alt="Picture of the author"
          style={{ objectFit: "cover", objectPosition: "top right" }}
        />
      </Box>
    </>
  );
}
