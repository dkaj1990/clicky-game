import React, { useState } from 'react';
import {
  Wrapper,
  Title,
  Score,
  FriendCard,
} from './components';
import friendsData from './friends.json';

const App = () => {
  
    const [friends, setFriends] = useState(friendsData);
    const [clicked, setClicked] = useState([]);
    const [score, setScore] = useState(0);
       
   

    const checkIfClicked = id => {
      if(clicked.includes(id)){
        setScore(0);
        setClicked([]); 
        alert("Game over");        

      }else{
      setClicked([...clicked, id]);
      randomizeCharacters(friends); 
      setScore(score + 1);
      }

      //const filteredFriends = friends.filter(friend => friend.id !== id);

     // setFriends(filteredFriends);

     
    }

    const randomizeCharacters = friends => {
      friends.sort((a, b) => {
        return 0.5 - Math.random();
      });
    };

    

    return (
      <Wrapper>
        <Title>Memory Game</Title>
        <Score score={score}/> 
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
