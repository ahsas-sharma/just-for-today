import React from 'react';
import { Navbar } from '@mantine/core';

export default function SideNav() {
  return (
    // <Navbar width={{ base: 300 }} height={500} p="xs">
    //   This is the Sidenav
    // </Navbar>
    <Navbar
      p='md'
      hiddenBreakpoint='sm'
      hidden={!opened}
      width={{ sm: 200, lg: 300 }}
    >
      <Text>Application navbar</Text>
    </Navbar>
  );
}
