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
      <Stack spacing={0} variant="text">
        <Pagination
          count={5}
          color="secondary"
          variant="text"
        />
      </Stack>
    </ThemeProvider>
  );
}
// variant="outlined"
