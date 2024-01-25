import React, { useState, useEffect } from 'react';
import { Platform, Modal } from 'react-native';
import { YStack, Input, Button, Label, XStack, Stack } from 'tamagui';
import { Eye, EyeOff } from 'lucide-react-native';

export const FormInput = ({
  label = '',
  placeholder = '',
  value = '',
  onChangeText = (val) => {},
  type = 'default',
  isSecure = false,
  disabled = false,
  editable = true,
  w = '$20',
  onPress = () => {},
}) => {
  const [field, setField] = useState(value);
  const [showPassword, setShowPassword] = useState(isSecure);

  return (
    <YStack bg={'$colorTransparent'}>
      {label && <Label>{label}</Label>}
      <XStack space={'$3'}>
        <Input
          placeholder={placeholder}
          value={field}
          onFocus={onPress}
          keyboardType={type}
          secureTextEntry={showPassword}
          disabled={disabled}
          editable={editable}
          w={w}
          focusStyle={{
            bw: 2,
            boc: '$blue8',
          }}
          pr={isSecure ? '$8' : '$4'}
        />
        {isSecure && (
          <Button
            pos='absolute'
            right={'$3'}
            p='$0'
            backgroundColor='transparent'
            onPress={() => {
              setShowPassword(!showPassword);
            }}
            icon={showPassword ? <EyeOff color={'black'} size={25} /> : <Eye color={'black'} />}
          />
        )}
      </XStack>
    </YStack>
  );
};
