import uuid from 'uuid/v1';
import moment from 'moment';
import mock from 'src/utils/mock';

mock.onGet('/api/orders').reply(200, {
  orders: [
    {
      id: uuid(),
      created_at: moment().subtract(10, 'minutes'),
      customer: {
        name: 'Ekaterina Tankova'
      },
      payment: {
        ref: 'FAD103',
        method: 'CreditCard',
        total: '500.00',
        currency: '$',
        status: 'pending'
      },
      status: 'inactive'
    },
    {
      id: uuid(),
      created_at: moment()
        .subtract(32, 'minutes')
        .subtract(23, 'seconds'),
      customer: {
        name: 'Cao Yu'
      },
      payment: {
        ref: 'FAD102',
        method: 'CreditCard',
        total: '500.00',
        currency: '$',
        status: 'pending'
      },
      status: 'inactive'
    },
    {
      id: uuid(),
      created_at: moment()
        .subtract(36, 'minutes')
        .subtract(51, 'seconds'),
      customer: {
        name: 'Alexa Richardson'
      },
      payment: {
        ref: 'FAD101',
        method: 'PayPal',
        total: '500.00',
        currency: '$',
        status: 'completed'
      },
      status: 'active'
    },
    {
      id: uuid(),
      created_at: moment()
        .subtract(38, 'minutes')
        .subtract(55, 'seconds'),
      customer: {
        name: 'Anje Keizer'
      },
      payment: {
        ref: 'FAD100',
        method: 'CreditCard',
        total: '500.00',
        currency: '$',
        status: 'pending'
      },
      status: 'inactive'
    },
    {
      id: uuid(),
      created_at: moment()
        .subtract(40, 'minutes')
        .subtract(3, 'seconds'),
      customer: {
        name: 'Clarke Gillebert'
      },
      payment: {
        ref: 'FAD99',
        method: 'PayPal',
        total: '500.00',
        currency: '$',
        status: 'completed'
      },
      status: 'active'
    },
    {
      id: uuid(),
      created_at: moment()
        .subtract(45, 'minutes')
        .subtract(32, 'seconds'),
      customer: {
        name: 'Adam Denisov'
      },
      payment: {
        ref: 'FAD98',
        method: 'PayPal',
        total: '500.00',
        currency: '$',
        status: 'completed'
      },
      status: 'active'
    },
    {
      id: uuid(),
      created_at: moment()
        .subtract(48, 'minutes')
        .subtract(57, 'seconds'),
      customer: {
        name: 'Ava Gregoraci',
        avatar: '/images/avatars/avatar_8.png'
      },
      payment: {
        ref: 'FAD97',
        method: 'CreditCard',
        total: '500.00',
        currency: '$',
        status: 'pending'
      },
      status: 'inactive'
    },
    {
      id: uuid(),
      created_at: moment()
        .subtract(49, 'minutes')
        .subtract(4, 'seconds'),
      customer: {
        name: 'Emilee Simchenko'
      },
      payment: {
        ref: 'FAD96',
        method: 'CreditCard',
        total: '500.00',
        currency: '$',
        status: 'completed'
      },
      status: 'active'
    },
    {
      id: uuid(),
      created_at: moment()
        .subtract(57, 'minutes')
        .subtract(43, 'seconds'),
      customer: {
        name: 'Kwak Seong-Min'
      },
      payment: {
        ref: 'FAD95',
        method: 'PayPal',
        total: '500.00',
        currency: '$',
        status: 'rejected'
      },
      status: 'inactive'
    },
    {
      id: uuid(),
      created_at: moment()
        .subtract(59, 'minutes')
        .subtract(6, 'seconds'),
      customer: {
        name: 'Shen Zhi'
      },
      payment: {
        ref: 'FAD94',
        method: 'CreditCard',
        total: '500.00',
        currency: '$',
        status: 'canceled'
      },
      status: 'inactive'
    },
    {
      id: uuid(),
      created_at: moment()
        .subtract(1, 'hour')
        .subtract(15, 'minutes')
        .subtract(43, 'seconds'),
      customer: {
        name: 'Merrile Burgett'
      },
      payment: {
        ref: 'FAD93',
        method: 'PayPal',
        total: '500.00',
        currency: '$',
        status: 'canceled'
      },
      status: 'inactive'
    }
  ]
});

mock.onGet('/api/orders/1').reply(200, {
  order: {
    id: uuid(),
    ref: 'FAD107',
    promoCode: null,
    value: '55.25',
    currency: '$',
    status: 'canceled',
    customer: {
      name: 'Ekaterina Tankova',
      address: 'Street King William, 42456',
      city: 'Montgomery',
      country: 'United States'
    },
    items: [
      {
        id: uuid(),
        name: 'Project Points',
        cuantity: 25,
        billing: 'monthly',
        status: 'completed',
        value: '50.25',
        currency: '$'
      },
      {
        id: uuid(),
        name: 'Freelancer Subscription',
        cuantity: 1,
        billing: 'monthly',
        status: 'completed',
        value: '5.00',
        currency: '$'
      }
    ],
    created_at: moment()
  }
});
