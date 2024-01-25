import React from 'react';
import { Button, Text, XStack } from 'tamagui';

export const SidebarItem = ({
  label,
  iconName = 'home',
  onPress = () => {},
  active = false,
  isRed = false,
}) => {
  return (
    <XStack
      borderLeftColor={active ? '$blue8' : 'transparent'}
      borderLeftWidth={'$1.5'}
      borderRadius={'$2'}>
      <Button
        f={1}
        paddingHorizontal='$2'
        justifyContent='flex-start'
        backgroundColor='transparent'
        onPress={onPress}>
        <Text color={isRed ? 'red' : '$gray12'}>{label}</Text>
      </Button>
    </XStack>
  );
};
