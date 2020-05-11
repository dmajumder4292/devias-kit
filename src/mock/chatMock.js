import uuid from 'uuid/v1';
import moment from 'moment';
import mock from 'src/utils/mock';

mock.onGet('/api/chat/conversations').reply(200, {
  conversations: [
    {
      id: uuid(),
      otherUser: {
        name: 'Adam Denisov',
        avatar: '/images/avatars/avatar_7.png',
        active: true,
        lastActivity: moment()
      },
      messages: [
        {
          id: uuid(),
          sender: {
            authUser: false,
            name: 'Adam Denisov',
            avatar: '/images/avatars/avatar_7.png',
            lastActivity: moment()
          },
          content:
            'Hey, nice projects! I really liked the one in react. What\'s your quote on kinda similar project?',
          contentType: 'text',
          created_at: moment().subtract(10, 'hours')
        },
        {
          id: uuid(),
          sender: {
            authUser: true,
            name: 'Shen Zhi',
            avatar: '/images/avatars/avatar_11.png'
          },
          content:
            'I would need to know more details, but my hourly rate stats at $35/hour. Thanks!',
          contentType: 'text',
          created_at: moment().subtract(2, 'hours')
        },
        {
          id: uuid(),
          sender: {
            authUser: false,
            name: 'Adam Denisov',
            avatar: '/images/avatars/avatar_7.png'
          },
          content:
            'Well it\'s a really easy one, I\'m sure we can make it half of the price.',
          contentType: 'text',
          created_at: moment().subtract(5, 'minutes')
        },
        {
          id: uuid(),
          sender: {
            authUser: true,
            name: 'Shen Zhi',
            avatar: '/images/avatars/avatar_11.png'
          },
          content:
            'Then why don\'t you make it if it\'s that easy? Sorry I\'m not interetes, have fantastic day Adam!',
          contentType: 'text',
          created_at: moment().subtract(3, 'minutes')
        },
        {
          id: uuid(),
          sender: {
            authUser: false,
            name: 'Adam Denisov',
            avatar: '/images/avatars/avatar_7.png'
          },
          content: 'Last offer, $25 per hour',
          contentType: 'text',
          created_at: moment().subtract(1, 'minute')
        },
        {
          id: uuid(),
          sender: {
            authUser: false,
            name: 'Adam Denisov',
            avatar: '/images/avatars/avatar_7.png'
          },
          content: '/images/projects/project_1.jpg',
          contentType: 'image',
          created_at: moment().subtract(1, 'minute')
        }
      ],
      unread: 0,
      created_at: moment().subtract(1, 'minute')
    },
    {
      id: uuid(),
      otherUser: {
        name: 'Ekaterina Tankova',
        avatar: '/images/avatars/avatar_2.png',
        active: true,
        lastActivity: moment()
      },
      messages: [
        {
          id: uuid(),
          sender: {
            authUser: true,
            name: 'Shen Zhi',
            avatar: '/images/avatars/avatar_11.png'
          },
          content: 'Hey, would you like to collaborate?',
          contentType: 'text',
          created_at: moment().subtract(6, 'minutes')
        },
        {
          id: uuid(),
          sender: {
            authUser: false,
            name: 'Ekaterina Tankova',
            avatar: '/images/avatars/avatar_2.png'
          },
          content: 'I don\'t think that\'s ideal',
          contentType: 'text',
          created_at: moment().subtract(5, 'minutes')
        }
      ],
      unread: 3,
      created_at: moment().subtract(26, 'minutes')
    },
    {
      id: uuid(),
      otherUser: {
        name: 'Emilee Simchenko',
        avatar: '/images/avatars/avatar_9.png',
        active: false,
        lastActivity: moment().subtract(2, 'minutes')
      },
      messages: [
        {
          id: uuid(),
          sender: {
            authUser: false,
            name: 'Emilee Simchenko',
            avatar: '/images/avatars/avatar_9.png'
          },
          content: 'Hi Shen, we should submit the product today',
          contentType: 'text',
          created_at: moment().subtract(2, 'hours')
        },
        {
          id: uuid(),
          sender: {
            authUser: true,
            name: 'Shen Zhi',
            avatar: '/images/avatars/avatar_11.png'
          },
          content: 'Oh, totally forgot about it',
          contentType: 'text',
          created_at: moment()
            .subtract(1, 'hour')
            .subtract(2, 'minutes')
        },
        {
          id: uuid(),
          sender: {
            authUser: true,
            name: 'Shen Zhi',
            avatar: '/images/avatars/avatar_11.png'
          },
          content: 'Alright then',
          contentType: 'text',
          created_at: moment().subtract(1, 'hour')
        }
      ],
      unread: 0,
      created_at: moment().subtract(3, 'hours')
    },
    {
      id: uuid(),
      otherUser: {
        name: 'Kwak Seong-Min',
        avatar: '/images/avatars/avatar_10.png',
        active: true,
        lastActivity: moment()
      },
      messages: [
        {
          id: uuid(),
          sender: {
            authUser: true,
            name: 'Shen Zhi',
            avatar: '/images/avatars/avatar_11.png'
          },
          content:
            'Hi Kwak! I\'ve seen your projects and we can work together on a project. Will send you the details later.',
          contentType: 'text',
          created_at: moment().subtract(3, 'days')
        },
        {
          id: uuid(),
          sender: {
            authUser: false,
            name: 'Kwak Seong-Min',
            avatar: '/images/avatars/avatar_10.png'
          },
          content: 'Haha, right, we\'ll do it',
          contentType: 'text',
          created_at: moment().subtract(2, 'days')
        }
      ],
      unread: 1,
      created_at: moment().subtract(2, 'days')
    },
    {
      id: uuid(),
      otherUser: {
        name: 'Cao Yu',
        avatar: '/images/avatars/avatar_3.png',
        active: false,
        lastActivity: moment().subtract(4, 'hours')
      },
      messages: [
        {
          id: uuid(),
          sender: {
            authUser: true,
            name: 'Shen Zhi',
            avatar: '/images/avatars/avatar_11.png'
          },
          content: 'Did you receive my email about the brief?',
          contentType: 'text',
          created_at: moment().subtract(3, 'days')
        },
        {
          id: uuid(),
          sender: {
            authUser: false,
            name: 'Cao Yu',
            avatar: '/images/avatars/avatar_3.png'
          },
          content: 'I\'m not sure, but I will check it later',
          contentType: 'text',
          created_at: moment().subtract(2, 'days')
        }
      ],
      unread: 0,
      created_at: moment().subtract(5, 'days')
    },
    {
      id: uuid(),
      otherUser: {
        name: 'Clarke Gillebert',
        avatar: '/images/avatars/avatar_6.png',
        active: true,
        lastActivity: moment()
      },
      messages: [
        {
          id: uuid(),
          sender: {
            authUser: false,
            name: 'Clarke Gillebert',
            avatar: '/images/avatars/avatar_6.png'
          },
          content: 'Hey Shen! I love your projects!!!',
          contentType: 'text',
          created_at: moment().subtract(2, 'days')
        },
        {
          id: uuid(),
          sender: {
            authUser: true,
            name: 'Shen Zhi',
            avatar: '/images/avatars/avatar_11.png'
          },
          content: 'Haha thank you Clarke, I\'m doing our best',
          contentType: 'text',
          created_at: moment().subtract(3, 'days')
        }
      ],
      unread: 0,
      created_at: moment().subtract(5, 'days')
    }
  ]
});

mock.onGet('/api/chat/activity').reply(200, {
  groups: [
    {
      id: 'clients',
      name: 'Clients'
    },
    {
      id: 'friends',
      name: 'Friends'
    }
  ],
  connections: [
    {
      id: uuid(),
      name: 'Ekaterina Tankova',
      avatar: '/images/avatars/avatar_2.png',
      active: false,
      lastActivity: moment().subtract(24, 'minutes'),
      group: 'clients'
    },
    {
      id: uuid(),
      name: 'Cao Yu',
      avatar: '/images/avatars/avatar_3.png',
      active: true,
      lastActivity: moment(),
      group: 'clients'
    },
    {
      id: uuid(),
      name: 'Anje Keizer',
      avatar: '/images/avatars/avatar_5.png',
      active: false,
      lastActivity: moment().subtract(1, 'minutes'),
      group: 'clients'
    },
    {
      id: uuid(),
      name: 'Ava Gregoraci',
      avatar: '/images/avatars/avatar_8.png',
      active: true,
      lastActivity: moment(),
      group: 'clients'
    },
    {
      id: uuid(),
      name: 'Clarke Gillebert',
      avatar: '/images/avatars/avatar_6.png',
      active: true,
      lastActivity: moment(),
      group: 'friends'
    },
    {
      id: uuid(),
      name: 'Adam Denisov',
      avatar: '/images/avatars/avatar_7.png',
      active: false,
      lastActivity: moment().subtract(24, 'minutes'),
      group: 'friends'
    },
    {
      id: uuid(),
      name: 'Emilee Simchenko',
      avatar: '/images/avatars/avatar_9.png',
      active: true,
      lastActivity: moment(),
      group: 'friends'
    },
    {
      id: uuid(),
      name: 'Kwak Seong-Min',
      avatar: '/images/avatars/avatar_10.png',
      active: true,
      lastActivity: moment(),
      group: 'friends'
    },
    {
      id: uuid(),
      name: 'Shen Zhi',
      avatar: '/images/avatars/avatar_11.png',
      active: true,
      lastActivity: moment(),
      group: 'friends'
    },
    {
      id: uuid(),
      name: 'Merrile Burgett',
      avatar: '/images/avatars/avatar_12.png',
      active: false,
      lastActivity: moment().subtract(2, 'days')
    }
  ]
});
