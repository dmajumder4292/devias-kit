import uuid from 'uuid/v1';
import moment from 'moment';
import { colors } from '@material-ui/core';
import mock from 'src/utils/mock';

mock.onGet('/api/calendar').reply(200, {
  draft: [],
  events: [
    {
      id: uuid(),
      title: 'Call Samantha',
      desc: 'Inform about new contract',
      color: colors.green['700'],
      start: moment('2019-07-01 16:55:00'),
      end: moment('2019-07-01 17:02:00')
    },
    {
      id: uuid(),
      title: 'Meet with IBM',
      desc: 'Discuss about new partnership',
      start: moment('2019-07-03 08:55:00'),
      end: moment('2019-07-04 15:02:00')
    },
    {
      id: uuid(),
      title: 'SCRUM Planning',
      desc: 'Prepare documentation',
      allDay: true,
      start: moment('2019-07-14 16:55:00')
    },
    {
      id: uuid(),
      title: 'Beign SEM',
      desc: 'Meet with team to discuss',
      allDay: true,
      start: moment('2019-07-18 07:00:00')
    },
    {
      id: uuid(),
      title: 'Fire John',
      desc: 'Sorry, John',
      color: colors.green['700'],
      start: moment('2019-07-20 08:55:00'),
      end: moment('2019-07-20 09:30:00')
    },
    {
      id: uuid(),
      title: 'Call Alex',
      desc: 'Discuss about the new project',
      allDay: true,
      start: moment('2019-07-30 08:00:00')
    },
    {
      id: uuid(),
      title: 'Visit Samantha',
      color: colors.green['700'],
      desc: 'Get a new quote for the payment processor',
      start: moment('2019-07-30 08:00:00'),
      end: moment('2019-07-30 09:00:00')
    }
  ]
});
