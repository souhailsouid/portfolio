const SHOP_DATA = {

  duckvador: {
    id: 1,
    title: 'Collections Duck Vador',
    routeName: 'duckvador',
    items: [
      {
        id: 1,
        name: 'Coding the world | Homme',
        imageUrl: 'https://s3.eu-central-1.amazonaws.com/balibart-s3/Products/5cacc18c839e400010e51376/Mockups/front.png',
        price: 20,
        stocks: 
          [
          {size: 's', quantity: 1},
          {size: 'm', quantity: 2},
          {size:'l', quantity: 0},
          {size:'xl', quantity: 12},
          {size:'xxl', quantity: 8}
        ]
      
      },
      {
        id: 2,
        name: 'Coding the world | Femme',
        imageUrl: 'https://s3.eu-central-1.amazonaws.com/balibart-s3/Products/5cacc1a9e3e9eb0017f0c619/Mockups/front.png',
        price: 20,
        stocks: 
        [
          {size: 's', quantity: 7},
          {size: 'm', quantity: 0},
          {size:'l', quantity: 6},
          {size:'xl', quantity: 2},
          {size:'xxl', quantity: 2}
        ]

      },
      {
        id: 3,
        name: 'Coding the world | Unisexe',
        imageUrl: 'https://s3.eu-central-1.amazonaws.com/balibart-s3/Products/5cacc0afc71e4e00109a2d92/Mockups/front.png',
        price: 41,
        stocks: 
        [
        {size: 's', quantity: 0},
        {size: 'm', quantity: 24},
        {size:'l', quantity: 4},
        {size:'xl', quantity: 0},
        {size:'xxl', quantity: 2}
      ]
      },

      {
        id: 4,
        name: 'ZeniDuck Buster | Femme',
        imageUrl: 'https://s3.eu-central-1.amazonaws.com/balibart-s3/Products/5cab5611b00b2f0017245b32/Mockups/front.png',
        price: 44,
        stocks: 
        [
        {size: 's', quantity: 1},
        {size: 'm', quantity: 2},
        {size:'l', quantity: 15},
        {size:'xl', quantity: 21},
        {size:'xxl', quantity: 2}
      ]
      },
      {
        id: 5,
        name: 'ZeniDuck Buster | Homme',
        imageUrl: 'https://s3.eu-central-1.amazonaws.com/balibart-s3/Products/5cab5717a467f60017b1fd0f/Mockups/front.png',
        price: 44,
        stocks: 
        [
        {size: 's', quantity: 1},
        {size: 'm', quantity: 0},
        {size:'l', quantity: 6},
        {size:'xl', quantity: 0},
        {size:'xxl', quantity: 8}
      ]
      },
      {
        id: 6,
        name: 'ZeniDuck Buster | Unisexe',
        imageUrl: 'https://s3.eu-central-1.amazonaws.com/balibart-s3/Products/5cacbff62537920017f04650/Mockups/front.png',
        price: 44,
        stocks: 
        [
        {size: 's', quantity: 0},
        {size: 'm', quantity: 2},
        {size:'l', quantity: 9},
        {size:'xl', quantity: 12},
        {size:'xxl', quantity: 0}
      ]
      }
    ]
  },
  hackingtheworld: {
    id: 2,
    title: 'Collections Hacking the World',
    routeName: 'hackingtheworld',
    items: [
      {
        id: 1,
        name: 'Hello Green World | Homme',
        imageUrl: 'https://s3.eu-central-1.amazonaws.com/balibart-s3/Products/5b290f6eab33424aec592bd5/Mockups/front.png',
        price: 20,
        stocks: 
        [
        {size: 's', quantity: 7},
        {size: 'm', quantity: 0},
        {size:'l', quantity: 10},
        {size:'xl', quantity: 2},
        {size:'xxl', quantity: 0}
      ]
      },
      {
        id: 2,
        name: 'Hello Green World | Femme',
        imageUrl: 'https://s3.eu-central-1.amazonaws.com/balibart-s3/Products/5b290d26ab33424aec592bd4/Mockups/front.png',
        price: 20,
        stocks: 
        [
        {size: 's', quantity: 7},
        {size: 'm', quantity: 2},
        {size:'l', quantity: 3},
        {size:'xl', quantity: 12},
        {size:'xxl', quantity: 9}
      ]
      },
      {
        id: 3,
        name: 'Coding the world | Homme',
        imageUrl: 'https://s3.eu-central-1.amazonaws.com/balibart-s3/Products/5cacc18c839e400010e51376/Mockups/front.png',
        price: 20,
         stocks: 
          [
          {size: 's', quantity: 1},
          {size: 'm', quantity: 2},
          {size:'l', quantity: 0},
          {size:'xl', quantity: 12},
          {size:'xxl', quantity: 8}
        ]
      },
      {
        id: 4,
        name: 'Coding the world | Femme',
        imageUrl: 'https://s3.eu-central-1.amazonaws.com/balibart-s3/Products/5cacc1a9e3e9eb0017f0c619/Mockups/front.png',
        price: 20,
        stocks: 
        [
        {size: 's', quantity: 0},
        {size: 'm', quantity: 0},
        {size:'l', quantity: 0},
        {size:'xl', quantity: 12},
        {size:'xxl', quantity: 8}
      ]
      },
      {
        id: 5,
        name: 'Coding the Future | Femme',
        imageUrl: 'https://s3.eu-central-1.amazonaws.com/balibart-s3/Products/5d2493ac105ee000173f4d99/Mockups/front.png',
        price: 20,
        stocks: 
        [
        {size: 's', quantity: 18},
        {size: 'm', quantity: 26},
        {size:'l', quantity: 10},
        {size:'xl', quantity: 12},
        {size:'xxl', quantity: 18}
      ]
      },
      {
        id: 6,
        name: 'Coding the Future | Unisexe',
        imageUrl: 'https://s3.eu-central-1.amazonaws.com/balibart-s3/Products/5cacc491c71e4e00109a3106/Mockups/front.png',
        price: 41,
        stocks: 
        [
        {size: 's', quantity: 7},
        {size: 'm', quantity: 2},
        {size:'l', quantity: 20},
        {size:'xl', quantity: 2},
        {size:'xxl', quantity: 0}
      ]
      }

    ]
  },
  coding2art: {
    id: 3,
    title: 'Collections This is Art',
    routeName: 'coding2art',
    items: [
      {
        id: 1,
        name: 'This is Art | Homme',
        imageUrl: 'https://s3.eu-central-1.amazonaws.com/balibart-s3/Products/5cacc1a9e3e9eb0017f0c619/Mockups/front.png',
        price: 125,
        stocks: 
          [
          {size: 's', quantity: 7},
          {size: 'm', quantity: 1},
          {size:'l', quantity: 0},
          {size:'xl', quantity: 1},
          {size:'xxl', quantity: 1}
        ]
      },
      {
        id: 2,
        name: 'This is Art | Femme',
        imageUrl: 'https://s3.eu-central-1.amazonaws.com/balibart-s3/Products/5d2493ac105ee000173f4d99/Mockups/front.png',
        price: 90,
        stocks: 
        [
        {size: 's', quantity: 10},
        {size: 'm', quantity: 20},
        {size:'l', quantity: 0},
        {size:'xl', quantity: 0},
        {size:'xxl', quantity: 0}
      ]
      }

    ]
  },
  femmes: {
    id: 4,
    title: 'Femmes',
    routeName: 'femmes',
    items: [

      {
        id: 1,
        name: 'Coding the world | Femme',
        imageUrl: 'https://s3.eu-central-1.amazonaws.com/balibart-s3/Products/5cacc1a9e3e9eb0017f0c619/Mockups/front.png',
        price: 20,
        stocks: 
        [
        {size: 's', quantity: 0},
        {size: 'm', quantity: 0},
        {size:'l', quantity: 1},
        {size:'xl', quantity: 1},
        {size:'xxl', quantity: 1}
      ]
      },
      {
        id: 2,
        name: 'Coding the world | Unisexe',
        imageUrl: 'https://s3.eu-central-1.amazonaws.com/balibart-s3/Products/5cacc0afc71e4e00109a2d92/Mockups/front.png',
        price: 41,
        stocks: 
        [
        {size: 's', quantity: 11},
        {size: 'm', quantity: 11},
        {size:'l', quantity: 10},
        {size:'xl', quantity: 12},
        {size:'xxl', quantity: 9}
      ]
      },

      {
        id: 3,
        name: 'ZeniDuck Buster | Femme',
        imageUrl: 'https://s3.eu-central-1.amazonaws.com/balibart-s3/Products/5cab5611b00b2f0017245b32/Mockups/front.png',
        price: 44,
        stocks: 
        [
        {size: 's', quantity: 0},
        {size: 'm', quantity: 0},
        {size:'l', quantity: 0},
        {size:'xl', quantity: 1},
        {size:'xxl', quantity: 0}
      ]
      },

      {
        id: 4,
        name: 'ZeniDuck Buster | Unisexe',
        imageUrl: 'https://s3.eu-central-1.amazonaws.com/balibart-s3/Products/5cacbff62537920017f04650/Mockups/front.png',
        price: 44,
        stocks: 
          [
          {size: 's', quantity: 0},
          {size: 'm', quantity: 21},
          {size:'l', quantity: 2},
          {size:'xl', quantity: 1},
          {size:'xxl', quantity: 8}
        ]
      }

    ]
  },
  hommes: {
    id: 5,
    title: 'Hommes',
    routeName: 'hommes',
    items: [
      {
        id: 1,
        name: 'Coding the world | Homme',
        imageUrl: 'https://s3.eu-central-1.amazonaws.com/balibart-s3/Products/5cacc18c839e400010e51376/Mockups/front.png',
        price: 20,
        stocks: 
        [
        {size: 's', quantity: 19},
        {size: 'm', quantity: 29},
        {size:'l', quantity: 2},
        {size:'xl', quantity: 19},
        {size:'xxl', quantity: 1}
      ]
      },
      {
        id: 2,
        name: 'Coding the world | Unisexe',
        imageUrl: 'https://s3.eu-central-1.amazonaws.com/balibart-s3/Products/5cacc0afc71e4e00109a2d92/Mockups/front.png',
        price: 41,
        stocks: 
        [
        {size: 's', quantity: 10},
        {size: 'm', quantity: 20},
        {size:'l', quantity: 90},
        {size:'xl', quantity: 1},
        {size:'xxl', quantity: 0}
      ]
      },

      {
        id: 3,
        name: 'ZeniDuck Buster | Homme',
        imageUrl: 'https://s3.eu-central-1.amazonaws.com/balibart-s3/Products/5cab5717a467f60017b1fd0f/Mockups/front.png',
        price: 44,
        stocks: 
        [
        {size: 's', quantity: 10},
        {size: 'm', quantity: 2},
        {size:'l', quantity: 0},
        {size:'xl', quantity: 0},
        {size:'xxl', quantity: 0}
      ]
      },
      {
        id: 4,
        name: 'ZeniDuck Buster | Unisexe',
        imageUrl: 'https://s3.eu-central-1.amazonaws.com/balibart-s3/Products/5cacbff62537920017f04650/Mockups/front.png',
        price: 44,    
        stocks: 
          [
          {size: 's', quantity: 0},
          {size: 'm', quantity: 0},
          {size:'l', quantity: 0},
          {size:'xl', quantity: 0},
          {size:'xxl', quantity: 15}
        ]
      }
    ]
  }
}
export default SHOP_DATA
