import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import FolderIcon from '@material-ui/icons/Folder';
import RestoreIcon from '@material-ui/icons/Restore';
import FavoriteIcon from '@material-ui/icons/Favorite';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import { Link } from 'react-router-dom';

const useStyles = makeStyles({
  root: {
    width: '100%',
    position: 'fixed',
    bottom: 0,
  },
});

export function NavigationBar() {
  const classes = useStyles();
  const [value, setValue] = React.useState('recents');

  const handleChange = (event: React.ChangeEvent<{}>, newValue: any) => {
    setValue(newValue);
  };

  return (
    <BottomNavigation value={value} onChange={handleChange} className={classes.root} >
      <BottomNavigationAction
        label="Recents"
        value="recents"
        icon={< RestoreIcon />}
        component={Link}
        to="/signal"
      />
      <BottomNavigationAction label="Favorites" value="favorites" icon={< FavoriteIcon />} />
      <BottomNavigationAction label="Nearby" value="nearby" icon={< LocationOnIcon />} />
      <BottomNavigationAction label="Folder" value="folder" icon={< FolderIcon />} />
    </BottomNavigation>
  );
}