import uuid from 'uuid/v1';
import moment from 'moment';
import { colors } from '@material-ui/core';
import mock from 'src/utils/mock';

mock.onGet('/api/projects').reply(200, {
  projects: [
    {
      id: uuid(),
      title: 'Mella Full Screen Slider',
      author: {
        name: 'Anje Keizer',
        avatar: '/images/avatars/avatar_5.png'
      },
      price: '12,500',
      currency: '$',
      type: 'Full-Time',
      location: 'Europe',
      members: 5,
      tags: [
        {
          text: 'Angular JS',
          color: colors.red[600]
        }
      ],
      start_date: moment(),
      end_date: moment(),
      updated_at: moment().subtract(24, 'minutes')
    },
    {
      id: uuid(),
      title: 'Dashboard Design',
      author: {
        name: 'Emilee Simchenko',
        avatar: '/images/avatars/avatar_9.png'
      },
      price: '15,750',
      currency: '$',
      type: 'Full-Time',
      location: 'Europe',
      members: 3,
      tags: [
        {
          text: 'HTML & CSS',
          color: colors.grey[600]
        }
      ],
      start_date: moment(),
      end_date: moment(),
      updated_at: moment().subtract(1, 'hour')
    },
    {
      id: uuid(),
      title: 'Ten80 Web Design',
      author: {
        name: 'Kwak Seong-Min',
        avatar: '/images/avatars/avatar_10.png'
      },
      price: '15,750',
      currency: '$',
      type: 'Full-Time',
      location: 'Europe',
      members: 8,
      tags: [
        {
          text: 'React JS',
          color: colors.indigo[600]
        }
      ],
      start_date: moment(),
      end_date: moment(),
      updated_at: moment().subtract(16, 'hour')
    },
    {
      id: uuid(),
      title: 'Neura e-commerce UI Kit',
      author: {
        name: 'Shen Zhi',
        avatar: '/images/avatars/avatar_11.png'
      },
      price: '12,500',
      currency: '$',
      type: 'Full-Time',
      location: 'Europe',
      members: 10,
      tags: [
        {
          text: 'Vue JS',
          color: colors.green[600]
        }
      ],
      start_date: moment(),
      end_date: moment(),
      updated_at: moment().subtract(3, 'days')
    },
    {
      id: uuid(),
      title: 'Administrator Dashboard',
      author: {
        name: 'Cao Yu',
        avatar: '/images/avatars/avatar_3.png'
      },
      price: '15,750',
      currency: '$',
      type: 'Full-Time',
      location: 'Europe',
      members: 2,
      tags: [
        {
          text: 'Angular JS',
          color: colors.red[600]
        },
        {
          text: 'HTML & CSS',
          color: colors.grey[600]
        }
      ],
      start_date: moment(),
      end_date: moment(),
      updated_at: moment().subtract(7, 'days')
    },
    {
      id: uuid(),
      title: 'Kalli UI Kit',
      author: {
        name: 'Anje Keizer',
        avatar: '/images/avatars/avatar_5.png'
      },
      price: '15,750',
      currency: '$',
      type: 'Full-Time',
      location: 'Europe',
      members: 12,
      tags: [
        {
          text: 'Vue JS',
          color: colors.green[600]
        }
      ],
      start_date: moment(),
      end_date: moment(),
      updated_at: moment().subtract(8, 'days')
    }
  ]
});

mock.onGet('/api/projects/1').reply(200, {
  project: {
    title: 'Develop a PDF Export App',
    author: {
      name: 'Emilee Simchenko',
      avatar: '/images/avatars/avatar_9.png',
      bio: 'We build beautiful functional themes for web professionals'
    },
    brief: `
#### TL;DR

The primary aim of the product is to convert survery responses into PDF reports, these reports are generated on to what we call templates. This product is designer to work with 3rd party survery providers. The first MVP will integrate with TypeForm, because the's no direct way to convert results to PDF from the form people create in TypeForm and then ask users to fill out.

#### Background information

Design files are attachedin the files tab.

Develop the web app screens for our product called "PDFace". Please look at the wireframes, system activity workflow and read the section above to understand what we're trying to archive.

There's not many screens we need designed, but there will be modals and various other system triggered evenets that will need to be considered.

The project has benn created in Sketch so let me know if there are any problmes opening this project and I'll try to convert into a usable file.

I have attached a chat with our users most used devices.

#### Goals:
  - Maintainable Code
  - Easy UX
  - Readable Code
  - No Redux
    `,
    price: '12,500',
    currency: 'USD',
    tags: [
      {
        text: 'React JS',
        color: colors.indigo[600]
      }
    ],
    members: [
      {
        id: uuid(),
        name: 'Ekaterina Tankova',
        avatar: '/images/avatars/avatar_2.png',
        bio: 'Front End Developer'
      },
      {
        id: uuid(),
        name: 'Cao Yu',
        avatar: '/images/avatars/avatar_3.png',
        bio: 'UX Designer'
      },
      {
        id: uuid(),
        name: 'Anje Keizer',
        avatar: '/images/avatars/avatar_5.png',
        bio: 'Copyright'
      }
    ],
    files: [
      {
        id: uuid(),
        name: 'example-project1.jpg',
        url: '/images/projects/project_2.jpg',
        mimeType: 'image/png',
        size: 1024 * 1024 * 3
      },
      {
        id: uuid(),
        name: 'docs.zip',
        url: '#',
        mimeType: 'application/zip',
        size: 1024 * 1024 * 25
      },
      {
        id: uuid(),
        name: 'example-project2.jpg',
        url: '/images/projects/project_1.jpg',
        mimeType: 'image/png',
        size: 1024 * 1024 * 2
      }
    ],
    activities: [
      {
        id: uuid(),
        subject: 'Project owner',
        subject_type: 'user',
        action_type: 'upload_file',
        action_desc: 'has uploaded a new file',
        created_at: moment().subtract(23, 'minutes')
      },
      {
        id: uuid(),
        subject: 'Adrian Stefan',
        subject_type: 'user',
        action_type: 'join_team',
        action_desc: 'joined team as a Front-End Developer',
        created_at: moment().subtract(2, 'hours')
      },
      {
        id: uuid(),
        subject: 'Alexandru Robert',
        action_type: 'join_team',
        action_desc: 'joined team as a Full Stack Developer',
        created_at: moment().subtract(9, 'hours')
      },
      {
        id: uuid(),
        subject: 'Project owner',
        subject_type: 'user',
        action_type: 'price_change',
        action_desc: 'raised the project budget',
        created_at: moment().subtract(2, 'days')
      },
      {
        id: uuid(),
        subject: 'Contest',
        subject_type: 'project',
        action_type: 'contest_created',
        action_desc: 'created',
        created_at: moment().subtract(4, 'days')
      }
    ],
    subscribers: [
      {
        id: uuid(),
        name: 'Ekaterina Tankova',
        avatar: '/images/avatars/avatar_2.png',
        cover: '/images/covers/cover_1.jpg',
        common_connections: 12,
        labels: [
          'User Experience',
          'FrontEnd development',
          'HTML5',
          'VueJS',
          'ReactJS'
        ]
      },
      {
        id: uuid(),
        name: 'Cao Yu',
        avatar: '/images/avatars/avatar_3.png',
        cover: '/images/covers/cover_2.jpg',
        common_connections: 5,
        labels: [
          'User Interface',
          'FullStack development',
          'Angular',
          'ExpressJS'
        ]
      },
      {
        id: uuid(),
        name: 'Clarke Gillebert',
        avatar: '/images/avatars/avatar_6.png',
        cover: '/images/covers/cover_2.jpg',
        common_connections: 17,
        labels: ['BackEnd development', 'Firebase', 'MongoDB', 'ExpressJS']
      }
    ],
    deadline: moment().add(7, 'days'),
    updated_at: moment().subtract(23, 'minutes')
  }
});
