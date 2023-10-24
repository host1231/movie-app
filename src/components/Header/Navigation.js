import * as React from 'react';
import { useNavigate } from "react-router-dom";
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import MovieIcon from '@mui/icons-material/Movie';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ScreenSearchDesktopOutlinedIcon from '@mui/icons-material/ScreenSearchDesktopOutlined';

export default function SimpleBottomNavigation() {
  const [value, setValue] = React.useState(0);

  const navigate = useNavigate();

  React.useEffect(() => {
    if (value === 0) {
      navigate('/');
    }
    else if (value === 1) {
      navigate('/favourites');
    }
    else {
      navigate('/search');
    }

  }, [value])


  return (
      <BottomNavigation sx={ {position: 'fixed', bottom: 0, zIndex: 100, width: '100%', backgroundColor: '#0B0B0F', borderTop: '1px solid #C4C4C4'} }
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      >
        <BottomNavigationAction sx={{color: '#FEFEFE'}} label="Фильмы" icon={<MovieIcon />} />
        <BottomNavigationAction sx={{color: '#FEFEFE'}} label="Избранные" icon={<FavoriteIcon />} />
        <BottomNavigationAction sx={{color: '#FEFEFE'}} label="Поиск" icon={<ScreenSearchDesktopOutlinedIcon />} />
      </BottomNavigation>
  );
}


