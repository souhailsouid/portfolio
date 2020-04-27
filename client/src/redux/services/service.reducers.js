const INITIAL_STATE = {
    services: [
      {
        title: 'Mon profile',
        imageUrl: 'https://image.noelshack.com/fichiers/2020/12/3/1584522248-parametre-171129122246.png',
        id: 1,
        linkUrl: 'profile'
      },
      {
        title: 'Mes commandes',
        imageUrl: 'https://image.noelshack.com/fichiers/2020/12/3/1584522345-commande-171129104959.png',
        id: 2,
        linkUrl: 'commandes'
      },
      {
        title: 'Wishlist',
        iconUrl: "",
        id: 3,
        linkUrl: 'favoris'
      } 
    ]
  }
  const directoryReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
      default:
        return state
    }
  }
  
  export default directoryReducer
  