import React from "react";
import { Header, Button, Title, Text, Grid } from "@mantine/core";

export default function TopNav() {
  return (
    <Header height={60} p="xs">
      <Grid justify="space-between">
        <Grid.Col span={4}>
          <Title align="left" order={4}>
            JFT
          </Title>
        </Grid.Col>
        <Grid.Col span={4}>
          <Title align="center" order={1}>
            {new Date().toDateString()}
          </Title>
        </Grid.Col>
        <Grid.Col span={4} align="right">
          <Button variant="subtle">Login</Button>
        </Grid.Col>
      </Grid>
    </Header>
  );
}
