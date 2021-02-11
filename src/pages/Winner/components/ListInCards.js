import React from 'react';
import {Avatar, Card, ListItem, Button, Icon} from 'react-native-elements';
import {Image, View} from 'react-native';
const ListInCards = ({item, images}) => {
  return (
    <Card
      containerStyle={{
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
      }}>
      <Card.Title>{item.country}</Card.Title>
      <Image
        source={images.flags[String(item.country).toLowerCase()]}
        style={{width: 100, height: 100, marginBottom: 10}}
      />
      <View
        style={{
          flex: 1,
          flexDirection: 'row',
          justifyContent: 'center',
        }}>
        {Array(item.winner)
          .fill(1)
          .map((el, key) => (
            <Avatar
              key={key}
              source={require('../img/icon.png')}
              style={{width: 20, height: 40}}
            />
          ))}
      </View>
    </Card>
  );
};
export default ListInCards;
