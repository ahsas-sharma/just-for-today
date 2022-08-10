import React from 'react';
import { Container, Title, Text, Card } from '@mantine/core';

export default function JFTSample() {
  return (
    <Container size='md' px='xs'>
      <Title order={1} align='center' mb='lg'>
        Regular Prayer and Meditation
      </Title>
      <Card radius='md' shadow='xs' p='sm'>
        <Text p='xs' italic='true' size='xl'>
          "Most of us pray when we are hurting. We learn that if we pray
          regularly, we won't be hurting as often or as intensely."
        </Text>
        <Text align='right' color='dimmed'>
          Basic Text, p.44
        </Text>
      </Card>
      <Text m='md' align='justify' size='xl'>
        Regular prayer and meditation are two more key elements in our new
        pattern of living. Our active addiction was more than just a bad habit
        waiting to be broken by force of will. Our addiction was a negative,
        draining dependence that stole all our positive energy. That dependence
        was so total, it prevented us from developing any kind of reliance on a
        Higher Power.
      </Text>

      <Text m='md' align='justify' size='xl'>
        From the very beginning of our recovery, our Higher Power has been the
        force that's brought us freedom. First, it relieved us of our compulsion
        to keep taking drugs, even when we knew they were killing us. Then, it
        gave us freedom from the more deeply ingrained aspects of our disease.
        Our Higher Power gave us the direction, the strength, and the courage to
        inventory ourselves; to admit out loud to another person what our lives
        had been like, perhaps for the first time; to begin seeking release from
        the chronic defects of character underlying our troubles; and, at last,
        to make amends for the wrongs we'd done.
      </Text>
      <Text m='md' align='justify' size='xl'>
        That first contact with a Higher Power, and that first freedom, has
        grown into a life full of freedom. We maintain that freedom by
        maintaining and improving our conscious contact with our Higher Power
        through regular prayer and meditation.
      </Text>
      <Text size='lg' m='md' weight={700} color='dimmed' align='center'>
        Just for Today
      </Text>
      <Title order={2} m='md' align='center'>
        I will make a commitment to include regular prayer and meditation in my
        new pattern of living.
      </Title>
    </Container>
  );
}
