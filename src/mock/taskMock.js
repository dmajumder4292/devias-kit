import uuid from 'uuid/v1';
import moment from 'moment';
import mock from 'src/utils/mock';

mock.onGet('/api/tasks').reply(200, {
  tasks: [
    {
      id: uuid(),
      title: 'Update the API for the project',
      deadline: moment()
        .add(1, 'days')
        .add(1, 'hour'),
      members: [
        '/images/avatars/avatar_2.png',
        '/images/avatars/avatar_3.png',
        '/images/avatars/avatar_4.png',
        '/images/avatars/avatar_5.png',
        '/images/avatars/avatar_6.png',
        '/images/avatars/avatar_7.png'
      ]
    },
    {
      id: uuid(),
      title: 'Redesign the landing page',
      deadline: moment()
        .add(2, 'day')
        .add(1, 'hour'),
      members: [
        '/images/avatars/avatar_8.png',
        '/images/avatars/avatar_10.png',
        '/images/avatars/avatar_12.png'
      ]
    },
    {
      id: uuid(),
      title: 'Solve the bug for the showState',
      deadline: moment(),
      members: ['/images/avatars/avatar_7.png']
    },
    {
      id: uuid(),
      title: 'Release v1.0 Beta',
      deadline: null,
      members: ['/images/avatars/avatar_2.png', '/images/avatars/avatar_10.png']
    },
    {
      id: uuid(),
      title: 'GDPR Compliance',
      deadline: null,
      members: [
        '/images/avatars/avatar_5.png',
        '/images/avatars/avatar_2.png',
        '/images/avatars/avatar_6.png'
      ]
    },
    {
      id: uuid(),
      title: 'Redesign Landing Page',
      deadline: null,
      members: ['/images/avatars/avatar_8.png']
    }
  ]
});
