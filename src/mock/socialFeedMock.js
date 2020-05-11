import uuid from 'uuid/v1';
import moment from 'moment';
import mock from 'src/utils/mock';

mock.onGet('/api/social-feed').reply(200, {
  posts: [
    {
      id: uuid(),
      author: {
        name: 'Kwak Seong-Min',
        avatar: '/images/avatars/avatar_10.png'
      },
      message: 'Hey guys! What\'s your favorite framework?',
      liked: true,
      likes: 1,
      comments: [
        {
          id: uuid(),
          author: {
            name: 'Merrile Burgett',
            avatar: '/images/avatars/avatar_12.png'
          },
          message: 'I\'ve been using Angular for the past 3 years',
          created_at: moment().subtract(3, 'hours')
        }
      ],
      created_at: moment().subtract(16, 'minutes')
    },
    {
      id: uuid(),
      author: {
        name: 'Shen Zhi',
        avatar: '/images/avatars/avatar_11.png'
      },
      message: 'Just made this home screen for a project, what-cha thinkin?',
      media: '/images/posts/post_1.jpg',
      liked: true,
      likes: 24,
      comments: [
        {
          id: uuid(),
          author: {
            name: 'Anje Keizer',
            avatar: '/images/avatars/avatar_5.png'
          },
          message: 'Could use some more statistics, but that’s me haha',
          created_at: moment().subtract(3, 'hours')
        },
        {
          id: uuid(),
          author: {
            name: 'Ava Gregoraci',
            avatar: '/images/avatars/avatar_8.png'
          },
          message:
            'Hmm, honestly this looks nice but I would change the shadow though',
          created_at: moment().subtract(2, 'hours')
        }
      ],
      created_at: moment().subtract(4, 'hours')
    },
    {
      id: uuid(),
      author: {
        name: 'Shen Zhi',
        avatar: '/images/avatars/avatar_11.png'
      },
      message:
        'As a human being, you are designed in a way that makes you incapable of experiencing any positive emotion unless you set an aim and progress towards it. What makes you happy is not, in fact, attaining it, but making progress towards it.',
      liked: false,
      likes: 65,
      comments: [
        {
          id: uuid(),
          author: {
            name: 'Clarke Gillebert',
            avatar: '/images/avatars/avatar_6.png'
          },
          message:
            'That’s actually deep. Thanks for the design, would you consider making an interaction?',
          created_at: moment().subtract(3, 'hours')
        },
        {
          id: uuid(),
          author: {
            name: 'Alexa Richardson',
            avatar: '/images/avatars/avatar_4.png'
          },
          message: 'Oh... so sentimental',
          created_at: moment().subtract(2, 'hours')
        }
      ],
      created_at: moment().subtract(7, 'hours')
    }
  ]
});
