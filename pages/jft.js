import React from 'react';
import { Container, Tabs } from '@mantine/core';
import JFTSample from '../components/JFTSample';
import Journal from '../components/UI/Tabs/JournalTab';
export default function JFT() {
  return (
    <Container>
      {/* <JFTSample /> */}
      <Tabs radius="xl" defaultValue="first">
        <Tabs.List>
          <Tabs.Tab value="comments">Comments</Tabs.Tab>
          <Tabs.Tab value="journal">Journal</Tabs.Tab>
        </Tabs.List>
        <Tabs.Panel value="comments">Comments Panel</Tabs.Panel>
        <Tabs.Panel value="journal">
          <Journal />
        </Tabs.Panel>
      </Tabs>
    </Container>
  );
}
