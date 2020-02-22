import React, { useState } from 'react';
import {
  Wrapper,
  Title,
  Score,
  FriendCard,
} from './components';
import friendsData from './friends.json';



const App = () => {
  const gameScore = 0;
    const [friends, setFriends] = useState(friendsData);

    const checkIfClicked = id => {

      
      const filteredFriends = friends.filter(friend => friend.id !== id);

      setFriends(filteredFriends);
    };

    return (
      <Wrapper>
        <Title>Memory Game</Title>
        <Score> {gameScore} </Score>
        {friends.map(friend => (
          <FriendCard
            checkIfClicked={checkIfClicked}
            id={friend.id}
            key={friend.id}
            name={friend.name}
            image={friend.image}
            isClicked={friend.isClicked}
            location={friend.location}
          />
        ))}
      </Wrapper>
    );
}

export default App;
