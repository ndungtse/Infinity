import * as React from 'react';
import Box from '@mui/material/Box';
import LinearProgress from '@mui/material/LinearProgress';
import { Stack } from '@mui/material';

export default function LinearIndeterminate() {
  return (
    <Stack sx={{ width: '100%', color: 'pink' }}>
      <LinearProgress color='inherit'/>
    </Stack>
  );
}
