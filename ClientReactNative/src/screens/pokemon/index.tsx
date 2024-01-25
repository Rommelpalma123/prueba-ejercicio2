import React, { useState, useEffect } from 'react';
import { getPokemon } from '../../utils/axios';
import { Button, Image, Text, View, XStack, YStack } from 'tamagui';
import { useTranslation } from 'react-i18next';

export const Pokemon = () => {
  const [pokemonData, setPokemonData] = useState(null);
  const { t } = useTranslation();

  const fetchRandomPokemon = async () => {
    try {
      const randomPokemonId = Math.floor(Math.random() * 500) + 1;
      const response = await getPokemon(`https://pokeapi.co/api/v2/pokemon/${randomPokemonId}`);
      setPokemonData(response);
    } catch (error) {
      console.error('Error fetching Pokémon:', error);
    }
  };

  useEffect(() => {
    fetchRandomPokemon();
  }, []);

  return (
    <YStack justifyContent='center'>
      <XStack justifyContent='center' mt='$3'>
        <Button bg={'$green10'} w={'$20'} onPress={fetchRandomPokemon}>
          {t('botompokemon')}
        </Button>
      </XStack>

      {pokemonData !== null ? (
        <YStack justifyContent='center' alignContent='center'>
          <XStack justifyContent='center'>
            <Image
              width={150}
              height={150}
              borderRadius={50}
              source={{ uri: pokemonData?.sprites?.front_default }}
            />
          </XStack>
          <XStack space='$3' justifyContent='space-around'>
            <Text>{t('nombre')}</Text>
            <Text>{pokemonData?.name}</Text>
          </XStack>
          <XStack space='$3' justifyContent='space-around'>
            <Text>Id:</Text>
            <Text>{pokemonData?.id}</Text>
          </XStack>
        </YStack>
      ) : (
        <XStack justifyContent='center' mt='$3'>
          <Text>El pokemon no existe </Text>
        </XStack>
      )}
    </YStack>
  );
};
