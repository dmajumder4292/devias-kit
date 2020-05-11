import uuid from 'uuid/v1';
import moment from 'moment';
import mock from 'src/utils/mock';

mock.onGet('/api/management/customers').reply(200, {
  customers: [
    {
      id: uuid(),
      name: 'Ekaterina Tankova',
      email: 'ekaterina.tankova@devias.io',
      avatar: '/images/avatars/avatar_2.png',
      spent: '500.00',
      currency: '$',
      type: 'Agency',
      projects: '1',
      rating: 5,
      location: 'West Virginia, USA'
    },
    {
      id: uuid(),
      name: 'Cao Yu',
      email: 'cao.yu@devias.io',
      avatar: '/images/avatars/avatar_3.png',
      spent: '300.00',
      type: 'Freelancer',
      currency: '$',
      projects: '3',
      rating: 4.3,
      location: 'Bristow'
    },
    {
      id: uuid(),
      name: 'Alexa Richardson',
      email: 'alexa.richardson@devias.io',
      avatar: '/images/avatars/avatar_4.png',
      spent: '2,600.00',
      type: 'Enterprise',
      currency: '$',
      projects: '0',
      rating: 4.5,
      location: 'Georgia, USA'
    },
    {
      id: uuid(),
      name: 'Anje Keizer',
      email: 'anje.keizer@devias.io',
      avatar: '/images/avatars/avatar_5.png',
      spent: '5,600.00',
      type: 'Enterprise',
      currency: '$',
      projects: '6',
      rating: 4,
      location: 'Ohio, USA'
    },
    {
      id: uuid(),
      name: 'Clarke Gillebert',
      email: 'clarke.gillebert@devias.io',
      avatar: '/images/avatars/avatar_6.png',
      spent: '500.00',
      type: 'Agency',
      currency: '$',
      projects: '1',
      rating: 3.5,
      location: 'Texas, USA'
    },
    {
      id: uuid(),
      name: 'Adam Denisov',
      email: 'adam.denisov@devias.io',
      avatar: '/images/avatars/avatar_7.png',
      spent: '5,230.00',
      type: 'Agency',
      currency: '$',
      projects: '0',
      rating: 3,
      location: 'California, USA'
    },
    {
      id: uuid(),
      name: 'Ava Gregoraci',
      email: 'ava.gregoraci@devias.io',
      avatar: '/images/avatars/avatar_8.png',
      spent: '300.00',
      type: 'Freelancer',
      currency: '$',
      projects: '0',
      rating: 4,
      location: 'California, USA'
    },
    {
      id: uuid(),
      name: 'Emilee Simchenko',
      email: 'emilee.simchenko@devias.io',
      avatar: '/images/avatars/avatar_9.png',
      spent: '100.00',
      type: 'Agency',
      currency: '$',
      projects: '4',
      rating: 4.5,
      location: 'Nevada, USA'
    },
    {
      id: uuid(),
      name: 'Kwak Seong-Min',
      email: 'kwak.seong.min@devias.io',
      avatar: '/images/avatars/avatar_10.png',
      spent: '1,000.00',
      type: 'Freelancer',
      currency: '$',
      projects: '2',
      rating: 5,
      location: 'Michigan, USA'
    },
    {
      id: uuid(),
      name: 'Shen Zhi',
      email: 'shen.zhi@devias.io',
      avatar: '/images/avatars/avatar_11.png',
      spent: '2,300.00',
      type: 'Agency',
      currency: '$',
      projects: '0',
      rating: 3.9,
      location: 'Utah, USA'
    },
    {
      id: uuid(),
      name: 'Merrile Burgett',
      email: 'merrile.burgett@devias.io',
      avatar: '/images/avatars/avatar_12.png',
      spent: '200.00',
      type: 'Enterprise',
      currency: '$',
      projects: '7',
      rating: 4.2,
      location: 'Utah, USA'
    }
  ]
});

mock.onGet('/api/management/customers/1/summary').reply(200, {
  summary: {
    name: 'Ekaterina Tankova',
    email: 'ekaterina@devias.io',
    phone: '+55 748 327 439',
    state: 'Alabama',
    country: 'United States',
    zipCode: '240355',
    address1: 'Street John Wick, no. 7',
    address2: 'House #25',
    iban: '4142 **** **** **** ****',
    autoCC: false,
    verified: true,
    currency: '$',
    invoices: [
      {
        id: uuid(),
        type: 'paid',
        value: 10.0
      },
      {
        id: uuid(),
        type: 'paid',
        value: 15.0
      },
      {
        id: uuid(),
        type: 'due',
        value: 5
      },
      {
        id: uuid(),
        type: 'income',
        value: 10.0
      }
    ],
    vat: 19,
    balance: 0,
    emails: [
      {
        id: uuid(),
        description: 'Order confirmation',
        created_at: moment()
          .subtract(3, 'days')
          .subtract(5, 'hours')
          .subtract(34, 'minutes')
      },
      {
        id: uuid(),
        description: 'Order confirmation',
        created_at: moment()
          .subtract(4, 'days')
          .subtract(11, 'hours')
          .subtract(49, 'minutes')
      }
    ]
  }
});

mock.onGet('/api/management/customers/1/invoices').reply(200, {
  invoices: [
    {
      id: uuid(),
      date: moment(),
      description: 'Freelancer Subscription (12/05/2019 - 11/06/2019)',
      paymentMethod: 'Credit Card',
      value: '5.25',
      currency: '$',
      status: 'paid'
    },
    {
      id: uuid(),
      date: moment(),
      description: 'Freelancer Subscription (12/05/2019 - 11/06/2019)',
      paymentMethod: 'Credit Card',
      value: '5.25',
      currency: '$',
      status: 'paid'
    }
  ]
});

mock.onGet('/api/management/customers/1/logs').reply(200, {
  logs: [
    {
      id: uuid(),
      status: 200,
      method: 'POST',
      route: '/api/purchase',
      desc: 'Purchase',
      IP: '84.234.243.42',
      created_at: moment()
        .subtract(2, 'days')
        .subtract(2, 'minutes')
        .subtract(56, 'seconds')
    },
    {
      id: uuid(),
      status: 522,
      error: 'Invalid credit card',
      method: 'POST',
      route: '/api/purchase',
      desc: 'Purchase',
      IP: '84.234.243.42',
      created_at: moment()
        .subtract(2, 'days')
        .subtract(2, 'minutes')
        .subtract(56, 'seconds')
    },
    {
      id: uuid(),
      status: 200,
      method: 'DELETE',
      route: '/api/products/d65654e/remove',
      desc: 'Cart remove',
      IP: '84.234.243.42',
      created_at: moment()
        .subtract(2, 'days')
        .subtract(8, 'minutes')
        .subtract(23, 'seconds')
    },
    {
      id: uuid(),
      status: 200,
      method: 'GET',
      route: '/api/products/d65654e/add',
      desc: 'Cart add',
      IP: '84.234.243.42',
      created_at: moment()
        .subtract(2, 'days')
        .subtract(20, 'minutes')
        .subtract(54, 'seconds')
    },
    {
      id: uuid(),
      status: 200,
      method: 'GET',
      route: '/api/products/c85727f/add',
      desc: 'Cart add',
      IP: '84.234.243.42',
      created_at: moment()
        .subtract(2, 'days')
        .subtract(34, 'minutes')
        .subtract(16, 'seconds')
    },
    {
      id: uuid(),
      status: 200,
      method: 'GET',
      route: '/api/products/c85727f',
      desc: 'View product',
      IP: '84.234.243.42',
      created_at: moment()
        .subtract(2, 'days')
        .subtract(54, 'minutes')
        .subtract(30, 'seconds')
    },
    {
      id: uuid(),
      status: 200,
      method: 'GET',
      route: '/api/products',
      desc: 'Get products',
      IP: '84.234.243.42',
      created_at: moment()
        .subtract(2, 'days')
        .subtract(56, 'minutes')
        .subtract(40, 'seconds')
    },
    {
      id: uuid(),
      status: 200,
      method: 'POST',
      route: '/api/login',
      desc: 'Login',
      IP: '84.234.243.42',
      created_at: moment()
        .subtract(2, 'days')
        .subtract(57, 'minutes')
        .subtract(5, 'seconds')
    }
  ]
});
