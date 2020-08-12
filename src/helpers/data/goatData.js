const goats = [
  {
    id: 'goat1',
    name: 'Billy the Kid',
    age: 2,
    description: 'I like Yoga!',
    imgUrl: 'https://upload.wikimedia.org/wikipedia/commons/b/b2/Hausziege_04.jpg',
    isTaken: true,
  },
  {
    id: 'goat2',
    name: 'Wooly',
    age: 85,
    description: 'I like eating grass.',
    imgUrl: 'https://pbs.twimg.com/profile_images/980547001166295041/eBs20xF4.jpg',
    isTaken: true,
  },
  {
    id: 'goat3',
    name: 'Vincent van Goat',
    age: 18,
    description: 'SHHHHHHH',
    imgUrl: 'https://www.seattlenorthcountry.com/imager/s3_amazonaws_com/snohomish-2018/craft/Outdoors/Goat-Yoga-4_930104bc5592b0f48aa7a928055610d9.jpg',
    isTaken: false,
  },
  {
    id: 'goat4',
    name: 'Butter',
    age: 1,
    description: 'RAWRRRR',
    imgUrl: 'https://i.ytimg.com/vi/cEJy2q27hVk/maxresdefault.jpg',
    isTaken: false,
  },
  {
    id: 'goat5',
    name: 'Ramsey',
    age: 0.5,
    description: 'Nope',
    imgUrl: 'https://www.psephizo.com/wp-content/uploads/2018/09/1438297793139.jpeg',
    isTaken: false,
  },
];

const thatReallyGetsMyGoat = () => goats;

const takeGoat = (goatId) => {
  goats.forEach((response) => {
    if (response.id === goatId) {
      response.isTaken = true;
    }
  });
};

const freeGoat = (goatId) => {
  goats.forEach((response) => {
    if (response.id === goatId) {
      response.isTaken = false;
    }
  });
};

export default { thatReallyGetsMyGoat, takeGoat, freeGoat };
