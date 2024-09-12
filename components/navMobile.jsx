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
  const myCat = catData.map((c) => {
    let result = {
      category_id: c.category_id,
      name_zh: c.name_zh,
      name_en: c.name_en,
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
      sx={{ width: "80vw" }}
      role="presentation"
      onClick={toggleDrawer(false)}
    >
      <List>
        <ListItem disablePadding>
          <ListItemButton disabled={false}>
            <ListItemText
              primary={useLang ? <Box>影片</Box> : <Box>Video</Box>}
            />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton disabled={false}>
            {useLang ? <Box>展覽簡介</Box> : <Box>Introduction</Box>}
          </ListItemButton>
        </ListItem>
      </List>
      <Divider />
      <List>
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemText
              primary={
                useLang ? (
                  <Box>{filteredCat[0].name_zh}</Box>
                ) : (
                  <Box>{filteredCat[0].name_en}</Box>
                )
              }
            />
          </ListItemButton>
        </ListItem>
        {work1.map((w1, index) => (
          <ListItem key={index} disablePadding>
            <ListItemButton>
              <ListItemText
                primary={useLang ? w1.work_zh.title : w1.work_en.title}
              />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemText
              primary={
                useLang ? (
                  <Box>{filteredCat[1].name_zh}</Box>
                ) : (
                  <Box>{filteredCat[1].name_en}</Box>
                )
              }
            />
          </ListItemButton>
        </ListItem>
        {work2.map((w2, index) => (
          <ListItem key={index} disablePadding>
            <ListItemButton>
              <ListItemText
                primary={useLang ? w2.work_zh.title : w2.work_en.title}
              />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemText
              primary={
                useLang ? (
                  <Box>{filteredCat[2].name_zh}</Box>
                ) : (
                  <Box>{filteredCat[2].name_en}</Box>
                )
              }
            />
          </ListItemButton>
        </ListItem>
        {work3.map((w3, index) => (
          <ListItem key={index} disablePadding>
            <ListItemButton>
              <ListItemText
                primary={useLang ? w3.work_zh.title : w3.work_en.title}
              />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemText
              primary={
                useLang ? (
                  <Box>{filteredCat[3].name_zh}</Box>
                ) : (
                  <Box>{filteredCat[3].name_en}</Box>
                )
              }
            />
          </ListItemButton>
        </ListItem>
        {work4.map((w4, index) => (
          <ListItem key={index} disablePadding>
            <ListItemButton>
              <ListItemText
                primary={useLang ? w4.work_zh.title : w4.work_en.title}
              />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {eventData.results.map((event, index) => (
          <ListItem key={index} disablePadding>
            <ListItemButton>
              <ListItemText
                primary={useLang ? event.title_zh : event.title_en}
              />
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
