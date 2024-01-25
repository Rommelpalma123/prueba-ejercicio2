import React, { useState, useEffect } from 'react';
import { FlatList, PermissionsAndroid } from 'react-native';
import WifiManager from 'react-native-wifi-reborn';
import { Text, View, XStack, YStack } from 'tamagui';

export const Wifi = () => {
  const [wifiList, setWifiList] = useState([]);

  useEffect(() => {
    requestLocationPermission();
  }, []);

  const requestLocationPermission = async () => {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
        {
          title: 'Permiso de Ubicación',
          message: 'Se requiere permiso de ubicación para escanear redes WiFi.',
          buttonNeutral: 'Preguntar después',
          buttonNegative: 'Cancelar',
          buttonPositive: 'Aceptar',
        }
      );

      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        console.log('Location permission granted');
        scanWifi();
      } else {
        console.log('Location permission denied');
      }
    } catch (error) {
      console.error('Error requesting location permission:', error);
    }
  };

  const scanWifi = async () => {
    try {
      const wifiArray = await WifiManager.loadWifiList();
      setWifiList(wifiArray);
    } catch (error) {
      console.error('Error scanning WiFi:', error);
    }
  };

  const renderItem = ({ item }) => (
    <YStack space='$1' p='$4'>
      <XStack space='$3'>
        <Text color={'$color'}>Nombre red:</Text>
        <Text color={'$color'}>{item.SSID}</Text>
      </XStack>
      <XStack>
        <Text color={'$color'}>Direccion: </Text>
        <Text color={'$color'}>{item.BSSID}</Text>
      </XStack>
      <XStack>
        <Text color={'$color'}>Nivel: </Text>
        <Text color={'$color'}>{item.level}</Text>
      </XStack>
    </YStack>
  );

  return (
    <View>
      <FlatList data={wifiList} renderItem={renderItem} keyExtractor={(item) => item.BSSID} />
    </View>
  );
};
