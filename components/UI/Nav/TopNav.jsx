import React from 'react';
import LoginButton from "../Buttons/LoginButton";
import { Header, Button, Title, Text, Grid } from '@mantine/core';

export default function TopNav() {
  return (
    <Header height={60} p="xs">
      <Grid justify="space-between">
        <Grid.Col span={4}>
          <Title align="left" order={2}>
            Just For Today
          </Title>
        </Grid.Col>
        <Grid.Col span={4}>
          <Title align="center" order={2}>
            {new Date().toDateString()}
          </Title>
        </Grid.Col>
        <Grid.Col span={4} align="right">
          <LoginButton />
        </Grid.Col>
      </Grid>
    </Header>
  );
}
