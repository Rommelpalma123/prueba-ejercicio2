import React, { useState, useEffect } from 'react';
import { YStack, Adapt, Select, Sheet, Label, H3 } from 'tamagui';
import { useTranslation } from 'react-i18next';

import { Check, ChevronDown } from 'lucide-react-native';

export const FormSelect = ({
  label = '',
  placeholder = '',
  onValueChange = (val) => {},
  w = '$20',
}) => {
  const [render, setRender] = useState(false);
  const { t } = useTranslation();
  const items = [{ tarea: t('homework') }, { tarea: t('work') }, { tarea: t('pending') }];

  useEffect(() => {
    setRender(true);
  }, []);

  return (
    <YStack>
      {label && <Label>{label}</Label>}
      {render && (
        <Select onValueChange={onValueChange} disablePreventBodyScroll>
          <Select.Trigger width={w} iconAfter={<ChevronDown size={22} />}>
            <Select.Value placeholder={placeholder} color={'$color'} />
          </Select.Trigger>

          <Adapt when='sm' platform='touch'>
            <Sheet
              modal
              dismissOnSnapToBottom
              animationConfig={{
                type: 'spring',
                damping: 20,
                mass: 1.2,
                stiffness: 250,
              }}>
              <Sheet.Frame>
                <Sheet.ScrollView>
                  <Adapt.Contents />
                </Sheet.ScrollView>
              </Sheet.Frame>

              <Sheet.Overlay
                animation='bouncy'
                enterStyle={{ opacity: 0 }}
                exitStyle={{ opacity: 0 }}
              />
            </Sheet>
          </Adapt>

          <Select.Content zIndex={100}>
            <Select.Viewport
              animation='quick'
              animateOnly={['transform', 'opacity']}
              enterStyle={{ o: 0, y: -10 }}
              exitStyle={{ o: 0, y: 10 }}
              minWidth={200}>
              {items.map((item, i) => (
                <Select.Item index={i} key={i} value={item.tarea} paddingHorizontal='$5'>
                  <Select.ItemText>{item.tarea}</Select.ItemText>
                  <Select.ItemIndicator>
                    <Check size={24} color='black' />
                  </Select.ItemIndicator>
                </Select.Item>
              ))}
            </Select.Viewport>
          </Select.Content>
        </Select>
      )}
    </YStack>
  );
};
