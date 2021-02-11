import React from 'react';
import {ListItem, Avatar} from 'react-native-elements';
const ListInLines = ({item, images}) => {
  return (
    <ListItem bottomDivider>
      <Avatar
        source={images.flags[String(item.country).toLowerCase()]}
        style={{width: 40, height: 40}}
      />
      <ListItem.Content>
        <ListItem.Title> {item.country}</ListItem.Title>
        <ListItem.Subtitle style={{marginLeft: 3}}>
          {item.year}
        </ListItem.Subtitle>
      </ListItem.Content>
      {Array(item.winner)
        .fill(1)
        .map((el, key) => (
          <Avatar
            key={key}
            source={require('../img/icon.png')}
            style={{width: 20, height: 40}}
          />
        ))}
    </ListItem>
  );
};
export default ListInLines;
