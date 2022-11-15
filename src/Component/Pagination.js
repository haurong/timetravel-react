import * as React from 'react';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    secondary: {
      main: '#63D2FF;',
    },
  },
});

export default function BasicPagination() {
  return (
    <ThemeProvider theme={theme}>
      <Stack spacing={0}>
        <Pagination count={7} variant="outlined" color="secondary" />
      </Stack>
    </ThemeProvider>
  );
}
