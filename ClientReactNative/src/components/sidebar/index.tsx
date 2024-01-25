import React from 'react';
import { DrawerContentScrollView } from '@react-navigation/drawer';
import { YStack, XStack, Text, Image, Stack } from 'tamagui';

import { SidebarItem } from '../sidebarItem';

export const Sidebar = (props) => {
  const { state, descriptors, navigation } = props;

  return (
    <YStack bg={'$backgroundFocus'} f={1}>
      <DrawerContentScrollView {...props}>
        <XStack bg={'$blue8'} jc='space-around' padding='$2' ai='center' mt='$-1.5'>
          <Text>dvhhbsdpv</Text>
        </XStack>

        <YStack pl={'$1'} mt='$2'>
          {state.routes.map((route, index) => (
            <SidebarItem
              key={index}
              active={state.index === index}
              label={descriptors[route.key].options.drawerLabel}
              iconName={descriptors[route.key].options.title}
              onPress={() =>
                navigation.reset({
                  index: 0,
                  routes: [{ name: route.name }],
                })
              }
            />
          ))}
        </YStack>
      </DrawerContentScrollView>

      <XStack borderTopColor={'$gray12'} borderTopWidth='$0.25' p='$2.5'>
        <Text color={'$gray12'} ta='center' f={1} fontWeight={'$true'}>
          ©2023 - Bus On Time.
        </Text>
      </XStack>
    </YStack>
  );
};
