const db = require('./connection');
const { User, Product, Category } = require('../models');

db.once('open', async () => {
  await Category.deleteMany();

  const categories = await Category.insertMany([
    { name: 'Game Consoles' },
    { name: 'Music Players' },
    { name: 'Clothes' },
    { name: 'Furniture' }
  ]);

  console.log('categories seeded');

  await Product.deleteMany();

  const products = await Product.insertMany([
    {
      name: 'Atari',
      description:
        'Atari was created by Nolan Bushnell and Ted Dabney in 1972 and became a pioneer in arcade games, home video game consoles and home computers.',
      image: 'cookie-tin.jpg',
      category: categories[0]._id,
      price: 99.99,
      quantity: 1
    },
    {
      name: 'Sega Genesis',
      description:
        "The Sega Genesis, known as the Mega Drive[b] outside North America, is a 16-bit fourth-generation home video game console developed and sold by Sega. The Genesis was Sega's third console and the successor to the Master System.",
      image: 'canned-coffee.jpg',
      category: categories[0]._id,
      price: 59.99,
      quantity: 1
    },
    {
      name: 'Nintendo Entertainment System (NES)',
      category: categories[1]._id,
      description:
        'Designed to look like a household appliance (and not like a video game console), the NES was the first console released post 1984-tech crash.',
      image: 'toilet-paper.jpg',
      price: 250.00,
      quantity: 2
    },
    {
      name: 'Nintendo 64 (N64)',
      category: categories[1]._id,
      description:
        'The Nintendo 64 (abbreviated as N64, stylized as NINTENDO64) is a home video game console developed and marketed by Nintendo. The console is the successor to the Super Nintendo Entertainment System.',
      image: 'soap.jpg',
      price: 75.99,
      quantity: 5
    },
    {
      name: 'Playstation',
      category: categories[1]._id,
      description:
        'The PlayStation[a] (abbreviated as PS, commonly known as the PS1 or its codename PSX) is a home video game console developed and marketed by Sony Computer Entertainment.',
      image: 'wooden-spoons.jpg',
      price: 29.99,
      quantity: 0
    },
    {
      name: 'Cassette Deck (Cassette Player)',
      category: categories[2]._id,
      description:
        'A cassette deck is a type of tape machine for playing and recording audio cassettes that does not have built-in power amplifier or speakers or both, and serves primarily as a transport.',
      image: 'camera.jpg',
      price: 39.99,
      quantity: 3
    },
    {
      name: 'CD Player',
      category: categories[2]._id,
      description:
        'A CD player is an electronic device that plays audio compact discs, which are a digital optical disc data storage format.',
      image: 'tablet.jpg',
      price: 7.50,
      quantity: 0
    },
    {
      name: 'Bell Bottom Jeans',
      category: categories[3]._id,
      description:
        'Add some vintage charm to your everyday wardrobe with our flare jeans for women.',
      image: 'bedtime-book.jpg',
      price: 19.99,
      quantity: 4
    },
    {
      name: 'Replica John Lennon Sun Glasses',
      category: categories[3]._id,
      description:
        "Round hippie sunglasses colored scratch-resistant and anti-reflective coatings.",
      image: 'bedtime-book.jpg',
      price: 9.99,
      quantity: 2
    },
    {
      name: 'Go-go Boots',
      category: categories[3]._id,
      description:
        'Go-go boots are known for their practical features and comfort. They are stylish, durable, and comfortable to wear.',
      image: 'bedtime-book.jpg',
      price: 29.99,
      quantity: 5
    },
    {
      name: 'Shag Carpet',
      category: categories[4]._id,
      description: 'Shag rugs get their name from their distinctive appearance — a shaggy, uneven pile that is an inch or more. These rugs are available in a variety of colors and materials like wool, cotton, and leather.',
      image: 'spinning-top.jpg',
      price: 49.99,
      quantity: 1000
    },
    {
      name: 'Ash Tray',
      category: categories[4]._id,
      description:
        'A receptacle for ash from cigarettes and cigars. Ashtrays are typically made of fire-retardant material such as glass, heat-resistant plastic, pottery, metal, or stone.',
      image: 'plastic-horses.jpg',
      price: 2.99,
      quantity: 10
    },
    {
      name: 'Animal Statues',
      category: categories[4]._id,
      description:
        'Offering Curated Wildlife Themed Fine Gifts, Jewelry, and Home Decor for Your Home.',
      image: 'teddy-bear.jpg',
      price: 7.99,
      quantity: 100
    },
    {
      name: 'Lava Lamp',
      category: categories[4]._id,
      description:
        'A decorative lamp constructed of a transparent glass container filled with liquid and wax that is heated by an incandescent bulb which melts the wax and causes it to form random moving shapes within the liquid.',
      image: 'alphabet-blocks.jpg',
      price: 9.99,
      quantity: 7
    }
  ]);

  console.log('products seeded');

  await User.deleteMany();

  await User.create({
    firstName: 'Pamela',
    lastName: 'Washington',
    email: 'pamela@testmail.com',
    password: 'password12345',
    orders: [
      {
        products: [products[0]._id, products[0]._id, products[1]._id]
      }
    ]
  });

  await User.create({
    firstName: 'Elijah',
    lastName: 'Holt',
    email: 'eholt@testmail.com',
    password: 'password12345'
  });

  console.log('users seeded');

  process.exit();
});
