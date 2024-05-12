import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { ThemeProvider } from '@mui/material/styles';
import { theme } from '../../utils/style/colors';


export default function BasicCard({children, width}) {

  return (
    <ThemeProvider theme={theme}>
        <Card sx={{ minWidth: 275, backgroundColor: '#039be5', margin: "auto", width: width || '30%' }}  >
          <CardContent >
            {children}
          </CardContent>
        </Card>
    </ThemeProvider>
  )
}
