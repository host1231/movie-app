import * as React from 'react';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import MovieIcon from '@mui/icons-material/Movie';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ScreenSearchDesktopOutlinedIcon from '@mui/icons-material/ScreenSearchDesktopOutlined';

export default function SimpleBottomNavigation() {
  const [value, setValue] = React.useState(0);

  return (
    <Box sx={{ 
        width: '100%',
        position: 'fixed',
        bottom: 0,
        zIndex: 100


        }}>
      <BottomNavigation
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      >
        <BottomNavigationAction label="Фильмы" icon={<MovieIcon />} />
        <BottomNavigationAction label="Избранные" icon={<FavoriteIcon />} />
        <BottomNavigationAction label="Поиск" icon={<ScreenSearchDesktopOutlinedIcon />} />
      </BottomNavigation>
    </Box>
  );
}


