import React, { useState } from 'react';
import QueuePlayNextIcon from '@mui/icons-material/QueuePlayNext';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import AddIcon from '@mui/icons-material/Add';
import ShareIcon from '@mui/icons-material/Share';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import PlaylistPlayIcon from '@mui/icons-material/PlaylistPlay';
import './PlaylistDrawer.css';

export default function PlaylistDrawer() {
  const [open, setOpen] = useState(false);

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  const menuItems = [
    { text: 'Ma playlist', icon: <PlaylistPlayIcon /> },
    { text: 'Ajouter une playlist', icon: <AddIcon /> },
    { text: 'Partager', icon: <ShareIcon /> },
    { text: 'Supprimer', icon: <DeleteIcon /> },
    { text: 'Modifier', icon: <EditIcon /> },
  ];

  const DrawerList = (
    <Box sx={{ width: 250 }} role="presentation" onClick={toggleDrawer(false)}>
      <List>
        {menuItems.map(({ text, icon }) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>{icon}</ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <div>
      <Button className="drawer-button" onClick={toggleDrawer(true)}>
        <QueuePlayNextIcon />
      </Button>
      <Drawer open={open} onClose={toggleDrawer(false)}>
        {DrawerList}
      </Drawer>
    </div>
  );
}
