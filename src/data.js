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
        text: 'hehehe',
        date: new Date('2022-07-07'),
        time: '',
        isRead: true,
      },
      {
        text: 'Fine, thanks',
        date: new Date('2022-07-07'),
        time: '',
        isRead: true,
      },
      {
        text: 'How are you?',
        date: new Date('2022-07-07'),
        time: '',
        isRead: true,
      },
      {
        text: 'Hey',
        date: new Date('2022-07-07'),
        time: '',
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
        date: new Date('2022-07-07'),
        time: '',
        isRead: false,
      },
    ],
  },
  {
    id: 3,
    avatar: function () {
      return this.id + '.jpeg';
    },
    username: 'Victoriya',
    isOnline: true,
    msgHistory: [
      {
        text: '',
        date: new Date('2022-07-07'),
        time: '',
        isRead: '',
      },
    ],
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
        text: '',
        date: new Date('2022-07-07'),
        time: '',
        isRead: '',
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
        text: '',
        date: new Date('2022-07-07'),
        time: '',
        isRead: '',
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
        text: '',
        date: new Date('2022-07-07'),
        time: '',
        isRead: '',
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
    msgHistory: [
      {
        text: '',
        date: new Date('2022-07-07'),
        time: '',
        isRead: '',
      },
    ],
  },
];

export const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
