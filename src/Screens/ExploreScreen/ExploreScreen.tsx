/**
 * @format
 */

import * as React from 'react';
import { ScrollView, View } from 'react-native';
import { useTheme as useRNTheme } from '@react-navigation/native';

import Grid from '#/components/Grid/Grid';
import GridCol from '#/components/Grid/GridCol';
import Flex from '#/components/Flex/Flex';
import FlexCol from '#/components/Flex/FlexCol';
import Typography from '#/components/Typography/Typography';
import stylesFn from './ExploreScreen.styles';

function DemoCard(props: any): React.JSX.Element {
  return (
    <View style={props.style}>
      <Typography role="Body">{props.label}</Typography>
    </View>
  );
}

export default React.memo(function ExploreScreen(): React.JSX.Element {
  const { colors } = useRNTheme();
  const styles = stylesFn(colors);

  React.useEffect(() => {
    console.log('=AAA= ExploreScreen.tsx []');
  }, []);

  console.log(`=AAA= ExploreScreen.tsx ${Math.random()}`);

  return (
    <ScrollView style={styles.ExploreScreen}>
      <Typography />
      <Typography role="Group">Flex, FlexCol size=Float</Typography>

      <Flex>
        <FlexCol>
          <DemoCard
            label="React Native."
            style={{ width: 64, backgroundColor: 'lightblue' }}
          />
        </FlexCol>
        <FlexCol size="Float">
          <DemoCard
            label="Written in JavaScript — rendered with native code."
            style={{ backgroundColor: 'khaki' }}
          />
        </FlexCol>
        <FlexCol>
          <DemoCard
            label="Learn once, write anywhere."
            style={{ width: 84, backgroundColor: 'yellow' }}
          />
        </FlexCol>
        <FlexCol>
          <DemoCard
            label="FlexCol size=Float."
            style={{ width: 84, backgroundColor: 'lightpink' }}
          />
        </FlexCol>
      </Flex>

      <Typography />
      <Typography role="Group">Flex, FlexCol size=Equal</Typography>

      <Flex>
        <FlexCol size="Equal">
          <DemoCard
            label="React Native."
            style={{ backgroundColor: 'lightblue' }}
          />
        </FlexCol>
        <FlexCol size="Equal">
          <DemoCard
            label="Written in JavaScript — rendered with native code."
            style={{ backgroundColor: 'khaki' }}
          />
        </FlexCol>
        <FlexCol size="Equal">
          <DemoCard
            label="Learn once, write anywhere."
            style={{ backgroundColor: 'yellow' }}
          />
        </FlexCol>
        <FlexCol size="Equal">
          <DemoCard
            label="FlexCol size=Equal."
            style={{ backgroundColor: 'lightpink' }}
          />
        </FlexCol>
      </Flex>

      <Typography />
      <Typography role="Group">Grid, 10 columns</Typography>

      <Grid>
        <GridCol col={4}>
          <DemoCard
            label="React Native."
            style={{ backgroundColor: 'lightblue' }}
          />
        </GridCol>
        <GridCol col={6}>
          <DemoCard
            label="Written in JavaScript — rendered with native code."
            style={{ backgroundColor: 'khaki' }}
          />
        </GridCol>
        <GridCol col={6}>
          <DemoCard
            label="Learn once, write anywhere."
            style={{ backgroundColor: 'yellow' }}
          />
        </GridCol>
        <GridCol col={4}>
          <DemoCard
            label="GridCol col=N."
            style={{ backgroundColor: 'lightpink' }}
          />
        </GridCol>
      </Grid>
      <Typography />
    </ScrollView>
  );
});
