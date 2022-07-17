const cards = [
   {
      id: 1,
      name: "Набор Для ванной комнаты 2.0",
      price: 639,
      prePrice: 1028,
      discount: 30,
      imgUrl: 'https://dummyimage.com/700x700/FFE4EB/000',
      count: 1,
      info: [
         ['Назначение', 'Для мытья стекол и зеркал'],
         ['Срок годности', '24 месяца'],
         ['Бренд', 'Ника'],
      ],
      url: 'https://google.com',
   },
   {
      id: 2,
      name: "Набор “Для кухни 2.0”",
      price: 3999,
      imgUrl: 'https://dummyimage.com/700x700/FFE4EB/000',
      count: 2,
      info: [
         ['Назначение', 'Для мытья стекол и зеркал'],
      ],
      url: 'https://google.com',
   },
   {
      id: 3,
      name: "Набор “Эко-уборка”",
      price: 639,
      prePrice: 939,
      discount: 30,
      imgUrl: 'https://dummyimage.com/700x700/FFE4EB/000',
      count: 1,
      info: [
         ['Срок годности', '24 месяца'],
         ['Бренд', 'Ника'],
      ],
      url: 'https://google.com',
   },
];


const sliderCards = [
   {
      name: "Набор Для ванной комнаты 2.0",
      tag: "Бестселлер",
      package: [{
         cost: "639",
      }]
   },
   {
      name: "Набор “Для кухни 2.0”",
      tag: "Новинка",
      package: [{
         cost: "639",
      }]
   },
   {
      name: "Набор “Эко-уборка”",
      package: [{
         cost: "639",
      }],
      discount: "30",
   },
   {
      name: "Набор “Защита для дома”",
      package: [{
         cost: "639",
      }]
   },
   {
      name: "Дозатор настенный в ассортименте",
      tag: "Бестселлер",
      package: [{
         cost: "639",
      }],
      discount: "10",
   },
   {
      name: "Комбинезон одноразовый с капюшоне",
      package: [{
         cost: "639",
      }],
      discount: "25",
   },
   {
      name: "Набор Для ванной комнаты 2.0",
      tag: "Новинка",
      package: [{
         cost: "639",
      }],
   },
   {
      name: "Набор Для ванной комнаты 2.0",
      tag: "Бестселлер",
      package: [{
         cost: "639",
      }],
   },
   {
      name: "Набор “Для кухни 2.0”",
      tag: "Новинка",
      package: [{
         cost: "639",
      }],
   },
];


const testCard = {
   id: 327192478,
   name: 'Средство для мытья стекол и зеркал “Ника”',
   tag: 'Бестселлер',
   compound: "Изопропиловый спирт, Аммиак водный, Н'ПАВ, Триклозан, Ароматическая добавка, Краситель",
   price: '1639',
   prePrice: '2022',
   discount: '- 15',
   count: 2590,
   description: 'Средство чистящее предназначено для чистки оконных стекол, зеркал, стеклянных поверхностей витрин и витражей, кафеля, керамики, фарфора, хрусталя, а также пластиковых окон и твердых полимерных поверхностей от различных видов загрязнений, остатков насекомых.',
   package: [
      {
         name: '1 л.',
         image: {
            image: 'https://dummyimage.com/700x700/FFE4EB/000',
         },
         price: 999,
      },
      {
         name: '2 л.',
         image: {
            image: 'https://dummyimage.com/700x700/FFE4EB/000',
         },
         price: 999,
      },
      {
         name: '3 л.',
         image: {
            image: 'https://dummyimage.com/700x700/FFE4EB/000',
         },
         price: 999,
      },
      {
         name: '4 л.',
         image: {
            image: 'https://dummyimage.com/700x700/FFE4EB/000',
         },
         price: 999,
      }
   ],
   info: [
      ['Назначение', 'Для мытья стекол и зеркал'],
      ['Срок годности', '24 месяца'],
      ['Бренд', 'Ника'],
      ['Страна изготовитель', 'Россия'],
   ]
}

export { cards, sliderCards, testCard }