import * as React from 'react';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Popover from '@mui/material/Popover';
import PopupState, { bindTrigger, bindPopover } from 'material-ui-popup-state';

export default function PopoverPopupState() {
  return (
    <PopupState variant="popover" popupId="demo-popup-popover">
      {(popupState) => (
        <div>
          <Button variant="contained" name = "pomoc" {...bindTrigger(popupState)}>
            Pomoc 
          </Button>
          <Popover
            {...bindPopover(popupState)}
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'center',
            }}
            transformOrigin={{
              vertical: 'top',
              horizontal: 'center',
            }}
          >
            <Typography sx={{ p: 2 }}>
            
             Kliknij ikonkę fajeczki, żeby zatwierdzić zadanie. 
            
            Kliknij ikonkę smietnika, żeby odrzucić zadanie. 
            
            Kliknij ikonkę ołówka, żeby edytować.
            
            </Typography>
          </Popover>
        </div>
      )}
    </PopupState>
  );
}
