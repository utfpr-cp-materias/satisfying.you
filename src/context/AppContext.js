import { createContext, useState } from 'react';

const basicCards = [
  {
    id: 1,
    name: 'SECOMP 2023',
    date: new Date('2023-10-10'),
    image: require('../../assets/images/devices.png'),
  },
  {
    id: 2,
    name: 'UBUNTU 2022',
    date: new Date('2022-06-05'),
    image: require('../../assets/images/groups.png'),
  },
  {
    id: 3,
    name: 'MENINAS CPU',
    date: new Date('2022-04-01'),
    image: require('../../assets/images/woman.png'),
  },
  {
    id: 4,
    name: 'COTB',
    date: new Date('2022-04-01'),
    image: require('../../assets/images/umbrella.png'),
  },
  {
    id: 5,
    name: 'CARNAVAL',
    date: new Date('2020-02-15'),
    image: require('../../assets/images/party.png'),
  },
];

export const AppContext = createContext({
  userEmail: '',
  setUserEmail: () => { },
  cards: [],
  addCard: () => { },
  removeCard: () => { },
  updateCard: () => { },
});

const AppProvider = ({ children }) => {
  const [userEmail, setUserEmail] = useState('');
  const [cards, setCards] = useState(basicCards);

  const addCard = (card) => {
    let newCard = card;

    if (!newCard.id) {
      newCard.id = cards.length + 1;
    }
    setCards(currentCards => [...currentCards, newCard]);
  };

  const removeCard = (id) => {
    setCards(currentCards => currentCards.filter(card => card.id !== id));
  };

  const updateCard = (updatedCard) => {
    setCards(currentCards =>
      currentCards.map(card =>
        card.id === updatedCard.id ? updatedCard : card
      )
    );
  };

  const contextValue = {
    userEmail,
    setUserEmail,
    cards,
    addCard,
    removeCard,
    updateCard,
  };

  return (
    <AppContext.Provider value={contextValue}>
      {children}
    </AppContext.Provider>
  );
};

export default AppProvider;
