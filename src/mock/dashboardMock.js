import uuid from 'uuid/v1';
import moment from 'moment';
import { colors } from '@material-ui/core';
import mock from 'src/utils/mock';

mock.onGet('/api/dashboard/top-referrals').reply(200, {
  referrals: [
    {
      id: uuid(),
      color: colors.blueGrey['700'],
      name: 'GitHub',
      initials: 'GT',
      value: '53,032'
    },
    {
      id: uuid(),
      color: colors.cyan['500'],
      name: 'Twitter',
      initials: 'TW',
      value: '39,551'
    },
    {
      id: uuid(),
      color: colors.indigo[600],
      name: 'Hacker News',
      initials: 'HN',
      value: '23,150'
    },
    {
      id: uuid(),
      color: colors.red['500'],
      name: 'Stack Overflow',
      initials: 'SO',
      value: '14,093'
    },
    {
      id: uuid(),
      color: colors.orange['900'],
      name: 'Reddit.com',
      initials: 'RD',
      value: '7,251'
    },
    {
      id: uuid(),
      color: colors.blueGrey['900'],
      name: 'Dev.to',
      initials: 'DE',
      value: '5,694'
    },
    {
      id: uuid(),
      color: colors.blue['900'],
      name: 'Facebook',
      initials: 'FB',
      value: '3,643'
    },
    {
      id: uuid(),
      color: colors.blueGrey['900'],
      name: 'Medium',
      initials: 'MD',
      value: '1,654'
    }
  ]
});

mock.onGet('/api/dashboard/profitable-products').reply(200, {
  products: [
    {
      id: uuid(),
      type: 'freelancer_basic',
      name: 'Freelancer Basic Subscription',
      image: '/images/products/product_freelancer.svg',
      subscriptions: '13,153',
      currency: '$',
      price: '5.00',
      progress: 93
    },
    {
      id: uuid(),
      type: 'freelancer_extra',
      name: 'Freelancer Extra Subscription',
      image: '/images/products/product_freelancer.svg',
      subscriptions: '10,300',
      currency: '$',
      price: '15.00',
      progress: 76
    },
    {
      id: uuid(),
      type: 'agency_basic',
      name: 'Agency Basic Subscription',
      image: '/images/products/product_agency.svg',
      subscriptions: '5,300',
      currency: '$',
      price: '25.00',
      progress: 60
    },
    {
      id: uuid(),
      type: 'enterprise_basic',
      name: 'Enterprise Basic Subscription',
      image: '/images/products/product_enterprise.svg',
      subscriptions: '1,203',
      currency: '$',
      price: '205.00',
      progress: 46
    },
    {
      id: uuid(),
      type: 'enterprise_extra',
      name: 'Enterprise Extra Subscription',
      image: '/images/products/product_enterprise.svg',
      subscriptions: '254',
      currency: '$',
      price: '500.00',
      progress: 41
    }
  ]
});

mock.onGet('/api/dashboard/customer-activity').reply(200, {
  customers: [
    {
      id: uuid(),
      type: 'payment',
      description: 'Subscription Purchase',
      author: {
        name: 'Ekaterina Tankova',
        avatar: '/images/avatars/avatar_2.png'
      },
      created_at: moment().subtract(23, 'minutes')
    },
    {
      id: uuid(),
      type: 'payment',
      description: 'Subscription Purchase',
      author: {
        name: 'Cao Yu',
        avatar: '/images/avatars/avatar_3.png'
      },
      created_at: moment().subtract(56, 'minutes')
    },
    {
      id: uuid(),
      type: 'payment',
      description: 'Subscription Purchase',
      author: {
        name: 'Alexa Richardson',
        avatar: '/images/avatars/avatar_4.png'
      },
      created_at: moment().subtract(2, 'hours')
    },
    {
      id: uuid(),
      type: 'payment',
      description: 'Subscription Purchase',
      author: {
        name: 'Anje Keizer',
        avatar: '/images/avatars/avatar_5.png'
      },
      created_at: moment().subtract(5, 'minutes')
    },
    {
      id: uuid(),
      type: 'payment',
      description: 'Subscription Purchase',
      author: {
        name: 'Clarke Gillebert',
        avatar: '/images/avatars/avatar_6.png'
      },
      created_at: moment().subtract(5, 'minutes')
    }
  ]
});

mock.onGet('/api/dashboard/earnings').reply(200, {
  earnings: [
    {
      id: uuid(),
      label: 'Subscriptions',
      value: 56,
      color: colors.indigo[500]
    },
    {
      id: uuid(),
      label: 'Afiliate',
      value: 24,
      color: colors.indigo[300]
    },
    {
      id: uuid(),
      label: 'Sales',
      value: 20,
      color: colors.indigo[100]
    }
  ]
});

mock.onGet('/api/dashboard/latest-orders').reply(200, {
  orders: [
    {
      id: uuid(),
      ref: 'DEV1042',
      items: 7,
      value: '25.00',
      currency: '$',
      customer: {
        name: 'Ekaterina Tankova',
        email: 'ekaterina@devias.io'
      },
      status: 'pending'
    },
    {
      id: uuid(),
      ref: 'DEV1041',
      items: 8,
      value: '25.00',
      currency: '$',
      customer: {
        name: 'Cao Yu',
        email: 'cao.yu@devias.io'
      },
      status: 'complete'
    },
    {
      id: uuid(),
      ref: 'DEV1040',
      items: 4,
      value: '25.00',
      currency: '$',
      customer: {
        name: 'Alexa Richardson',
        email: 'alexa.richardson@devias.io'
      },
      status: 'rejected'
    },
    {
      id: uuid(),
      ref: 'DEV1039',
      items: 1,
      value: '25.00',
      currency: '$',
      customer: {
        name: 'Anje Keizer',
        email: 'anje.keiser@devias.io'
      },
      status: 'pending'
    },
    {
      id: uuid(),
      ref: 'DEV1038',
      items: 5,
      value: '25.00',
      currency: '$',
      customer: {
        name: 'Clarke Gillebert',
        email: 'clarke.gillebert@devias.io'
      },
      status: 'complete'
    },
    {
      id: uuid(),
      ref: 'DEV1037',
      items: 2,
      value: '25.00',
      currency: '$',
      customer: {
        name: 'Merrile Burgett',
        email: 'merrile.burgett@devias.io'
      },
      status: 'complete'
    }
  ]
});

mock.onGet('/api/dashboard/latest-projects').reply(200, {
  projects: [
    {
      id: uuid(),
      title: 'Mella Full Screen Slider',
      price: '12,500',
      currency: '$',
      author: {
        name: 'Anje Keizer',
        avatar: '/images/avatars/avatar_5.png'
      },
      tags: [
        {
          text: 'Angular JS',
          color: colors.red[600]
        }
      ]
    },
    {
      id: uuid(),
      title: 'Dashboard Design',
      price: '15,750',
      currency: '$',
      author: {
        name: 'Emilee Simchenko',
        avatar: '/images/avatars/avatar_9.png'
      },
      tags: [
        {
          text: 'HTML & CSS',
          color: colors.grey[600]
        }
      ]
    },
    {
      id: uuid(),
      title: 'Ten80 Web Design',
      price: '15,750',
      currency: '$',
      author: {
        name: 'Kwak Seong-Min',
        avatar: '/images/avatars/avatar_10.png'
      },
      tags: [
        {
          text: 'React JS',
          color: colors.indigo[600]
        }
      ]
    },
    {
      id: uuid(),
      title: 'Neura e-commerce UI Kit',
      price: '12,500',
      currency: '$',
      author: {
        name: 'Shen Zhi',
        avatar: '/images/avatars/avatar_11.png'
      },
      tags: [
        {
          text: 'Vue JS',
          color: colors.green[600]
        }
      ]
    },
    {
      id: uuid(),
      title: 'Administrator Dashboard',
      price: '15,750',
      currency: '$',
      author: {
        name: 'Cao Yu',
        avatar: '/images/avatars/avatar_3.png'
      },
      tags: [
        {
          text: 'Angular JS',
          color: colors.red[600]
        }
      ]
    }
  ]
});
