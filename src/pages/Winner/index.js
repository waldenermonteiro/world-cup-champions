import React, {useEffect, useState} from 'react';
import {SafeAreaView, ScrollView, View} from 'react-native';
import {CheckBox} from 'react-native-elements';
import ListInLines from './components/ListInLines';
import ListInCards from './components/ListInCards';
import {winnersArray} from './winnerArray';
const Winner = () => {
  const [winners, setWinners] = useState([]);
  const [checked, setChecked] = useState(false);
  useEffect(() => {
    async function loadWinners() {
      setWinners(winnersArray);
    }
    loadWinners();
  }, []);
  const images = {
    flags: {
      argentina: require('../../assets/flags/argentina.png'),
      brazil: require('../../assets/flags/brazil.png'),
      england: require('../../assets/flags/england.png'),
      france: require('../../assets/flags/france.png'),
      germany: require('../../assets/flags/germany.png'),
      italy: require('../../assets/flags/italy.png'),
      spain: require('../../assets/flags/spain.png'),
      uruguay: require('../../assets/flags/uruguay.png'),
      'west germany': require('../../assets/flags/germany.png'),
    },
  };
  function verifyChecked(item, key) {
    if (!checked) {
      return <ListInLines item={item} images={images} key={key} />;
    } else {
      return <ListInCards item={item} images={images} key={key} />;
    }
  }
  return (
    <SafeAreaView>
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        <View>
          <CheckBox
            title="View in cards"
            checked={checked}
            onPress={() => setChecked(!checked)}
          />
          {winners.map((item, key) => verifyChecked(item, key))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Winner;
