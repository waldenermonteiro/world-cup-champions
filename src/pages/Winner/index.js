import React, {useEffect, useState} from 'react';
import {Alert, SafeAreaView, ScrollView, View} from 'react-native';
import {ListItem, Avatar} from 'react-native-elements';
import Loader from '../../components/Loader';

import WinnerService from './services/index';
const Winner = () => {
  const [loading, setLoading] = useState(false);
  const [winners, setWinners] = useState([]);
  useEffect(() => {
    async function loadStorageData() {
      setLoading(true);
      try {
        const response = await WinnerService.list();
        setWinners(response.winners);
        setLoading(false);
      } catch (error) {
        Alert.alert(error.message);
      }
    }
    loadStorageData();
  }, []);
  return (
    <SafeAreaView>
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        <View>
          <Loader loading={loading} />
          {winners.map((item, i) => (
            <ListItem bottomDivider key={i}>
              <Avatar
                source={require('../..//assets/icon.png')}
                style={{width: 20, height: 40}}
              />
              <ListItem.Content>
                <ListItem.Title>{item.country}</ListItem.Title>
                <ListItem.Subtitle>{item.year}</ListItem.Subtitle>
              </ListItem.Content>
            </ListItem>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Winner;
