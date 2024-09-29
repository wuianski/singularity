import { useState } from "react";
/* Next */
import Link from "next/link";
/* MUI */
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { color } from "framer-motion";
import { b } from "framer-motion/client";

export default function NavMobile({
  useLang,
  catData,
  work1,
  work2,
  work3,
  work4,
  eventData,
}) {
  /* Orgnize categories */
  const myCat = catData.map((c, idx) => {
    let result = {
      category_id: c.category_id,
      name_zh: c.name_zh,
      name_en: c.name_en,
      id: idx - 1,
    };
    return result;
  });
  //filter data category_id between 4 and 7
  const filteredCat = myCat.filter(
    (c) => c.category_id >= 4 && c.category_id <= 7
  );
  // console.log(filteredCat);

  const [open, setOpen] = useState(false);

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  const DrawerList = (
    <Box
      sx={{ width: "80vw", color: "#fff", backgroundColor: "#000" }}
      role="presentation"
      onClick={toggleDrawer(false)}
    >
      <List>
        <ListItem disablePadding>
          <ListItemButton>
            <Link href={`/`} as={`/`}>
              {/* {useLang ? <Box>影片</Box> : <Box>Video</Box>} */}
              {useLang ? <Box>展覽簡介</Box> : <Box>Introduction</Box>}
            </Link>
          </ListItemButton>
        </ListItem>
        {/* <ListItem disablePadding>
          <ListItemButton>
            <Link href={`/intro`} as={`/intro`}>
              {useLang ? <Box>展覽簡介</Box> : <Box>Introduction</Box>}
            </Link>
          </ListItemButton>
        </ListItem> */}
      </List>
      <Divider sx={{ borderColor: "#888" }} />
      <List>
        <ListItem disablePadding>
          <ListItemButton>
            <Link
              href={`/chapters/${filteredCat[0].id}`}
              as={`/chapters/${filteredCat[0].id}`}
            >
              <ListItemText
                primary={
                  useLang ? (
                    <Box>{filteredCat[0].name_zh}</Box>
                  ) : (
                    <Box>{filteredCat[0].name_en}</Box>
                  )
                }
              />
            </Link>
          </ListItemButton>
        </ListItem>
        {work1.map((w1, index) => (
          <ListItem key={index} disablePadding>
            <ListItemButton>
              <Link href={`/works/${w1.work_id}`} as={`/works/${w1.work_id}`}>
                <ListItemText
                  primary={useLang ? w1.work_zh.title : w1.work_en.title}
                />
              </Link>
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider sx={{ borderColor: "#888" }} />
      <List>
        <ListItem disablePadding>
          <ListItemButton>
            <Link
              href={`/chapters/${filteredCat[1].id}`}
              as={`/chapters/${filteredCat[1].id}`}
            >
              <ListItemText
                primary={
                  useLang ? (
                    <Box>{filteredCat[1].name_zh}</Box>
                  ) : (
                    <Box>{filteredCat[1].name_en}</Box>
                  )
                }
              />
            </Link>
          </ListItemButton>
        </ListItem>
        {work2.map((w2, index) => (
          <ListItem key={index} disablePadding>
            <ListItemButton>
              <Link href={`/works/${w2.work_id}`} as={`/works/${w2.work_id}`}>
                <ListItemText
                  primary={useLang ? w2.work_zh.title : w2.work_en.title}
                />
              </Link>
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider sx={{ borderColor: "#888" }} />
      <List>
        <ListItem disablePadding>
          <ListItemButton>
            <Link
              href={`/chapters/${filteredCat[2].id}`}
              as={`/chapters/${filteredCat[2].id}`}
            >
              <ListItemText
                primary={
                  useLang ? (
                    <Box>{filteredCat[2].name_zh}</Box>
                  ) : (
                    <Box>{filteredCat[2].name_en}</Box>
                  )
                }
              />
            </Link>
          </ListItemButton>
        </ListItem>
        {work3.map((w3, index) => (
          <ListItem key={index} disablePadding>
            <ListItemButton>
              <Link href={`/works/${w3.work_id}`} as={`/works/${w3.work_id}`}>
                <ListItemText
                  primary={useLang ? w3.work_zh.title : w3.work_en.title}
                />
              </Link>
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider sx={{ borderColor: "#888" }} />
      <List>
        <ListItem disablePadding>
          <ListItemButton>
            <Link
              href={`/chapters/${filteredCat[3].id}`}
              as={`/chapters/${filteredCat[3].id}`}
            >
              <ListItemText
                primary={
                  useLang ? (
                    <Box>{filteredCat[3].name_zh}</Box>
                  ) : (
                    <Box>{filteredCat[3].name_en}</Box>
                  )
                }
              />
            </Link>
          </ListItemButton>
        </ListItem>
        {work4.map((w4, index) => (
          <ListItem key={index} disablePadding>
            <ListItemButton>
              <Link href={`/works/${w4.work_id}`} as={`/works/${w4.work_id}`}>
                <ListItemText
                  primary={useLang ? w4.work_zh.title : w4.work_en.title}
                />
              </Link>
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider sx={{ borderColor: "#888" }} />
      <List>
        {eventData.results.map((event, index) => (
          <ListItem key={index} disablePadding>
            <ListItemButton>
              <Link
                href={`/events/${event.activity_id}`}
                as={`/events/${event.activity_id}`}
              >
                <ListItemText
                  primary={useLang ? event.title_zh : event.title_en}
                />
              </Link>
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <>
      <div>
        <IconButton
          size="large"
          color="inherit"
          aria-label="open drawer"
          // sx={{ mr: 2 }}
          onClick={toggleDrawer(true)}
        >
          <MenuIcon />
        </IconButton>
        <Drawer open={open} onClose={toggleDrawer(false)} anchor="right">
          {DrawerList}
        </Drawer>
      </div>
    </>
  );
}
