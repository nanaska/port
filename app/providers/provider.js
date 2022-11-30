'use client'
import { MantineProvider } from '@mantine/core';
import Head from 'next/head';
import { CssBaseline } from '@nextui-org/react';

import { createTheme, NextUIProvider } from "@nextui-org/react"
import { ThemeProvider as NextThemesProvider } from 'next-themes';

export default function Provider({children}){
  const darkTheme = createTheme({
    type: 'dark',
    
  })
    return (<>
    
      <Head>{CssBaseline.flush()}</Head>
      <NextThemesProvider
    defaultTheme="dark"
    attribute="class"
    value={{
      dark: darkTheme.className
    }}
  >
    <NextUIProvider
   
    >
    {/* <MantineProvider
        withGlobalStyles
        withNormalizeCSS
        theme={{
          /** Put your mantine theme override here  colorScheme: 'dark',}}> */}
        {children}
      {/* </MantineProvider> */}
      </NextUIProvider>
      </NextThemesProvider>
    </>)
}