export const contacts = [
  {
    id: 1,
    avatar: function () {
      return this.id + '.jpeg';
    },
    username: 'Vitaliy',
    isOnline: false,
    msgHistory: [
      {
        text: 'Hey',
        date: new Date('2022-07-07T23:10:12'),
        isRead: true,
      },
      {
        text: 'Morning!',
        isAuthor: true,
        date: new Date('2022-07-07T23:10:22'),
        isRead: true,
      },
      {
        text: 'How are you?',
        date: new Date('2022-07-07T23:10:51'),
        isRead: true,
      },
      {
        text: 'Fine) I`ve seen your work. Can you explain a few things later?',
        date: new Date('2022-07-07T23:11:02'),
        isRead: true,
        isAuthor: true,
      },
      {
        text: 'No problem)',
        date: new Date('2022-07-07T23:11:32'),
        isRead: true,
      },
      {
        text: 'ty, sensei',
        date: new Date('2022-07-07T23:12:00'),
        isRead: true,
        isAuthor: true,
      },
      {
        text: 'hehehe',
        date: new Date('2022-07-07T23:12:12'),
        isRead: true,
      },
    ],
  },
  {
    id: 2,
    avatar: function () {
      return this.id + '.jpeg';
    },
    username: 'Denis',
    isOnline: true,
    msgHistory: [
      {
        text: 'Btw, is it dog?',
        date: new Date('2022-07-07T23:42:12'),
        isRead: false,
        isAuthor: false
      },

    ],
  },
  {
    id: 8,
    avatar: function () {
      return this.id + '.jpeg';
    },
    username: 'Denis',
    isOnline: true,
    msgHistory: [

    ],
  },
  {
    id: 3,
    avatar: function () {
      return this.id + '.jpeg';
    },
    username: 'Victoriya',
    isOnline: true,
    msgHistory: [],
  },
  {
    id: 4,
    avatar: function () {
      return this.id + '.jpeg';
    },
    username: 'Dasha',
    isOnline: false,
    msgHistory: [
      {
        text: 'Pls, send me some extra info',
        date: new Date('2022-07-07T23:10:12'),
        isRead: true,
      },
    ],
  },
  {
    id: 5,
    avatar: function () {
      return this.id + '.jpeg';
    },
    username: 'Semonenko',
    isOnline: false,
    msgHistory: [
      {
        text: 'I`d like to have pork right now xD',
        date: new Date('2022-07-03T23:10:12'),
        isRead: true
      },
    ],
  },
  {
    id: 6,
    avatar: function () {
      return this.id + '.jpeg';
    },
    username: 'g.skovoroda',
    isOnline: true,
    msgHistory: [
      {
        text: 'See you later ;)',
        date: new Date('2022-07-07T23:10:12'),
        isRead: true,
      },
    ],
  },
  {
    id: 7,
    avatar: function () {
      return this.id + '.jpeg';
    },
    username: 'Mykolay',
    isOnline: false,
    msgHistory: [],
  },
];

export const months = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];
