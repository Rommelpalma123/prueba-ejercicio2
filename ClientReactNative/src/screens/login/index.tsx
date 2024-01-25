import { LogIn, Pen } from 'lucide-react-native';
import React, { useState } from 'react';
import { Keyboard, KeyboardAvoidingView, Platform, TouchableWithoutFeedback } from 'react-native';
import { Button, ScrollView, XStack, YStack } from 'tamagui';
import { FormInput } from '../../components/input';
import { SelectIdioma } from '../../components/idiomaOptions/selectIdioma';
import { useTranslation } from 'react-i18next';

export const Login = () => {
  const [formValues, setFormValues] = useState({ email: '', password: '' });
  const { t, i18n } = useTranslation();

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={{
        flex: 1,
      }}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <ScrollView
          mt='$10'
          bg={'$backgroundFocus'}
          f={1}
          space='$3'
          contentContainerStyle={{
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <SelectIdioma
            placeholder='Seleccione un idioma'
            w='20'
            onValueChange={(text) => {
              i18n.changeLanguage(text);
            }}
          />

          <YStack space='$3' alignItems='center'>
            <FormInput
              placeholder={t('placorreo')}
              type={'email-address'}
              value={formValues.email}
              onChangeText={(text) => {
                setFormValues({ ...formValues, email: text });
              }}
            />

            <FormInput
              placeholder={t('pass')}
              isSecure
              value={formValues.password}
              onChangeText={(text) => {
                setFormValues({ ...formValues, password: text });
              }}
            />

            <XStack space='$5'>
              <Button
                w='$11'
                iconAfter={<LogIn />}
                backgroundColor='$blue8'
                size='$4'
                onPress={() => {}}>
                {t('botonlogin')}
              </Button>

              <Button
                w='$11'
                iconAfter={<Pen />}
                backgroundColor='$blue3'
                borderColor={'$blue8'}
                borderWidth={'$1'}
                size='$4'
                onPress={() => {}}>
                {t('botoneregister')}
              </Button>
            </XStack>

            <Button backgroundColor='$green8' size='$4' w='$20' onPress={() => {}}>
              {t('botongoogle')}
            </Button>
          </YStack>
        </ScrollView>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};
