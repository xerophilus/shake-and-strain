const cocktails = [
    {
      id: 1,
      name: 'El Cafecita',
      img: 'https://stevethebartender.com.au/wp-content/uploads/2020/06/cafecita-cuban-cocktail-1536x1024.jpg',
      favorite: true,
      videoUrl: 'https://www.youtube.com/watch?v=KIBkilactMg',
      ingredients: [
        {
            name: 'Dark Rum',
            unit: ['45 ml', '1.5 oz']
        },
        {
            name: 'Coffee Liquor',
            unit: ['15 ml', '0.5 oz']
        },
        {
            name: 'Liquor 43',
            unit: ['15 ml', '0.5 oz']
        },
        {
            name: 'Simple Syrup',
            unit: ['Dash of', 'Dash of']
        },
        {
            name: 'Chocolate Bitters',
            unit: ['2 Dashes', '2 Dashes']
        }
      ]
    },
    {
      id: 2,
      name: 'Enzoni',
      img: 'https://stevethebartender.com.au/wp-content/uploads/2023/05/enzoni.jpg',
      favorite: false,
      videoUrl: 'https://www.youtube.com/watch?v=1kKgoGVVFmc',
      ingredients: [
        {
            name: 'Dark Rum',
            unit: ['45 ml', '1.5 oz']
        },
        {
            name: 'Coffee Liquor',
            unit: ['15 ml', '0.5 oz']
        },
        {
            name: 'Liquor 43',
            unit: ['15 ml', '0.5 oz']
        },
        {
            name: 'Simple Syrup',
            unit: ['Dash of', 'Dash of']
        },
        {
            name: 'Chocolate Bitters',
            unit: ['2 Dashes', '2 Dashes']
        }
      ]
    },
    {
      id: 3,
      name: 'Full Monte',
      img: 'https://stevethebartender.com.au/wp-content/uploads/2020/06/full-monte-cocktail-1536x1024.jpg',
      favorite: true,
      videoUrl: 'https://www.youtube.com/watch?v=4_x2qwI9cNc',
      ingredients: [
        {
            name: 'Dark Rum',
            unit: ['45 ml', '1.5 oz']
        },
        {
            name: 'Coffee Liquor',
            unit: ['15 ml', '0.5 oz']
        },
        {
            name: 'Liquor 43',
            unit: ['15 ml', '0.5 oz']
        },
        {
            name: 'Simple Syrup',
            unit: ['Dash of', 'Dash of']
        },
        {
            name: 'Chocolate Bitters',
            unit: ['2 Dashes', '2 Dashes']
        }
      ]
    },
    {
      id: 4,
      name: 'Monte Carlo',
      img: 'https://stevethebartender.com.au/wp-content/uploads/2020/06/monte-carlo-cocktail-1536x1024.jpg',
      favorite: false,
      videoUrl: 'https://www.youtube.com/watch?v=e2pl5-n_yng',
      ingredients: [
        {
            name: 'Dark Rum',
            unit: ['45 ml', '1.5 oz']
        },
        {
            name: 'Coffee Liquor',
            unit: ['15 ml', '0.5 oz']
        },
        {
            name: 'Liquor 43',
            unit: ['15 ml', '0.5 oz']
        },
        {
            name: 'Simple Syrup',
            unit: ['Dash of', 'Dash of']
        },
        {
            name: 'Chocolate Bitters',
            unit: ['2 Dashes', '2 Dashes']
        }
      ]
    },
    {
      id: 5,
      name: 'Don\'s Own Grog',
      img: 'https://stevethebartender.com.au/wp-content/uploads/2020/06/dons-own-grog-recipe-1536x1024.jpg',
      favorite: false,
      videoUrl: 'https://www.youtube.com/watch?v=1JYsyClZo2o',
      ingredients: [
        {
            name: 'Dark Rum',
            unit: ['45 ml', '1.5 oz']
        },
        {
            name: 'Coffee Liquor',
            unit: ['15 ml', '0.5 oz']
        },
        {
            name: 'Liquor 43',
            unit: ['15 ml', '0.5 oz']
        },
        {
            name: 'Simple Syrup',
            unit: ['Dash of', 'Dash of']
        },
        {
            name: 'Chocolate Bitters',
            unit: ['2 Dashes', '2 Dashes']
        }
      ]
    },
    {
      id: 6,
      name: 'Ancient Mariner',
      img: 'https://stevethebartender.com.au/wp-content/uploads/2020/06/ancient-marnier-cocktail-1536x1024.jpg',
      favorite: false,
      videoUrl: 'https://www.youtube.com/watch?v=I06bFMDmxkQ',
      ingredients: [
        {
            name: 'Dark Rum',
            unit: ['45 ml', '1.5 oz']
        },
        {
            name: 'Coffee Liquor',
            unit: ['15 ml', '0.5 oz']
        },
        {
            name: 'Liquor 43',
            unit: ['15 ml', '0.5 oz']
        },
        {
            name: 'Simple Syrup',
            unit: ['Dash of', 'Dash of']
        },
        {
            name: 'Chocolate Bitters',
            unit: ['2 Dashes', '2 Dashes']
        }
      ]
    },
    {
      id: 7,
      name: 'Kingston Soundsystem',
      img: 'https://stevethebartender.com.au/wp-content/uploads/2020/06/kingston-soundsystem.jpg',
      favorite: false,
      videoUrl: 'https://www.youtube.com/watch?v=0TjW0CXiTL4',
      ingredients: [
        {
            name: 'Dark Rum',
            unit: ['45 ml', '1.5 oz']
        },
        {
            name: 'Coffee Liquor',
            unit: ['15 ml', '0.5 oz']
        },
        {
            name: 'Liquor 43',
            unit: ['15 ml', '0.5 oz']
        },
        {
            name: 'Simple Syrup',
            unit: ['Dash of', 'Dash of']
        },
        {
            name: 'Chocolate Bitters',
            unit: ['2 Dashes', '2 Dashes']
        }
      ]
    },
    {
      id: 8,
      name: 'Cosmonaut',
      img: 'https://stevethebartender.com.au/wp-content/uploads/2020/06/cosmonaut-cocktail-recipe-1536x1024.jpg',
      favorite: true,
      videoUrl: 'https://www.youtube.com/watch?v=T2Jks4TGDeE',
      ingredients: [
        {
            name: 'Dark Rum',
            unit: ['45 ml', '1.5 oz']
        },
        {
            name: 'Coffee Liquor',
            unit: ['15 ml', '0.5 oz']
        },
        {
            name: 'Liquor 43',
            unit: ['15 ml', '0.5 oz']
        },
        {
            name: 'Simple Syrup',
            unit: ['Dash of', 'Dash of']
        },
        {
            name: 'Chocolate Bitters',
            unit: ['2 Dashes', '2 Dashes']
        }
      ]
    },
    {
        id: 9,
        name: 'El Cafecita',
        img: 'https://stevethebartender.com.au/wp-content/uploads/2020/06/cafecita-cuban-cocktail-1536x1024.jpg',
        favorite: true,
        videoUrl: 'https://www.youtube.com/watch?v=KIBkilactMg',
        ingredients: [
        {
            name: 'Dark Rum',
            unit: ['45 ml', '1.5 oz']
        },
        {
            name: 'Coffee Liquor',
            unit: ['15 ml', '0.5 oz']
        },
        {
            name: 'Liquor 43',
            unit: ['15 ml', '0.5 oz']
        },
        {
            name: 'Simple Syrup',
            unit: ['Dash of', 'Dash of']
        },
        {
            name: 'Chocolate Bitters',
            unit: ['2 Dashes', '2 Dashes']
        }
        ]
    },
    {
        id: 10,
        name: 'Enzoni',
        img: 'https://stevethebartender.com.au/wp-content/uploads/2023/05/enzoni.jpg',
        favorite: false,
        videoUrl: 'https://www.youtube.com/watch?v=1kKgoGVVFmc',
        ingredients: [
        {
            name: 'Dark Rum',
            unit: ['45 ml', '1.5 oz']
        },
        {
            name: 'Coffee Liquor',
            unit: ['15 ml', '0.5 oz']
        },
        {
            name: 'Liquor 43',
            unit: ['15 ml', '0.5 oz']
        },
        {
            name: 'Simple Syrup',
            unit: ['Dash of', 'Dash of']
        },
        {
            name: 'Chocolate Bitters',
            unit: ['2 Dashes', '2 Dashes']
        }
        ]
    },
    {
        id: 11,
        name: 'Full Monte',
        img: 'https://stevethebartender.com.au/wp-content/uploads/2020/06/full-monte-cocktail-1536x1024.jpg',
        favorite: true,
        videoUrl: 'https://www.youtube.com/watch?v=4_x2qwI9cNc',
        ingredients: [
        {
            name: 'Dark Rum',
            unit: ['45 ml', '1.5 oz']
        },
        {
            name: 'Coffee Liquor',
            unit: ['15 ml', '0.5 oz']
        },
        {
            name: 'Liquor 43',
            unit: ['15 ml', '0.5 oz']
        },
        {
            name: 'Simple Syrup',
            unit: ['Dash of', 'Dash of']
        },
        {
            name: 'Chocolate Bitters',
            unit: ['2 Dashes', '2 Dashes']
        }
        ]
    },
    {
        id: 12,
        name: 'Monte Carlo',
        img: 'https://stevethebartender.com.au/wp-content/uploads/2020/06/monte-carlo-cocktail-1536x1024.jpg',
        favorite: false,
        videoUrl: 'https://www.youtube.com/watch?v=e2pl5-n_yng',
        ingredients: [
        {
            name: 'Dark Rum',
            unit: ['45 ml', '1.5 oz']
        },
        {
            name: 'Coffee Liquor',
            unit: ['15 ml', '0.5 oz']
        },
        {
            name: 'Liquor 43',
            unit: ['15 ml', '0.5 oz']
        },
        {
            name: 'Simple Syrup',
            unit: ['Dash of', 'Dash of']
        },
        {
            name: 'Chocolate Bitters',
            unit: ['2 Dashes', '2 Dashes']
        }
        ]
    },
    {
        id: 13,
        name: 'Don\'s Own Grog',
        img: 'https://stevethebartender.com.au/wp-content/uploads/2020/06/dons-own-grog-recipe-1536x1024.jpg',
        favorite: false,
        videoUrl: 'https://www.youtube.com/watch?v=1JYsyClZo2o',
        ingredients: [
          {
              name: 'Dark Rum',
              unit: ['45 ml', '1.5 oz']
          },
          {
              name: 'Coffee Liquor',
              unit: ['15 ml', '0.5 oz']
          },
          {
              name: 'Liquor 43',
              unit: ['15 ml', '0.5 oz']
          },
          {
              name: 'Simple Syrup',
              unit: ['Dash of', 'Dash of']
          },
          {
              name: 'Chocolate Bitters',
              unit: ['2 Dashes', '2 Dashes']
          }
        ]
    },
    {
        id: 14,
        name: 'Ancient Mariner',
        img: 'https://stevethebartender.com.au/wp-content/uploads/2020/06/ancient-marnier-cocktail-1536x1024.jpg',
        favorite: false,
        videoUrl: 'https://www.youtube.com/watch?v=I06bFMDmxkQ',
        ingredients: [
        {
            name: 'Dark Rum',
            unit: ['45 ml', '1.5 oz']
        },
        {
            name: 'Coffee Liquor',
            unit: ['15 ml', '0.5 oz']
        },
        {
            name: 'Liquor 43',
            unit: ['15 ml', '0.5 oz']
        },
        {
            name: 'Simple Syrup',
            unit: ['Dash of', 'Dash of']
        },
        {
            name: 'Chocolate Bitters',
            unit: ['2 Dashes', '2 Dashes']
        }
        ]
    },
    {
        id: 15,
        name: 'Kingston Soundsystem',
        img: 'https://stevethebartender.com.au/wp-content/uploads/2020/06/kingston-soundsystem.jpg',
        favorite: false,
        videoUrl: 'https://www.youtube.com/watch?v=0TjW0CXiTL4',
        ingredients: [
        {
            name: 'Dark Rum',
            unit: ['45 ml', '1.5 oz']
        },
        {
            name: 'Coffee Liquor',
            unit: ['15 ml', '0.5 oz']
        },
        {
            name: 'Liquor 43',
            unit: ['15 ml', '0.5 oz']
        },
        {
            name: 'Simple Syrup',
            unit: ['Dash of', 'Dash of']
        },
        {
            name: 'Chocolate Bitters',
            unit: ['2 Dashes', '2 Dashes']
        }
        ]
    },
    {
        id: 16,
        name: 'Cosmonaut',
        img: 'https://stevethebartender.com.au/wp-content/uploads/2020/06/cosmonaut-cocktail-recipe-1536x1024.jpg',
        favorite: true,
        videoUrl: 'https://www.youtube.com/watch?v=T2Jks4TGDeE',
        ingredients: [
            {
                name: 'Dark Rum',
                unit: ['45 ml', '1.5 oz']
            },
            {
                name: 'Coffee Liquor',
                unit: ['15 ml', '0.5 oz']
            },
            {
                name: 'Liquor 43',
                unit: ['15 ml', '0.5 oz']
            },
            {
                name: 'Simple Syrup',
                unit: ['Dash of', 'Dash of']
            },
            {
                name: 'Chocolate Bitters',
                unit: ['2 Dashes', '2 Dashes']
            }
    ]
    }
];

const favorites = [

];

export { cocktails, favorites}