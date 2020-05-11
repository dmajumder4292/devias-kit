import uuid from 'uuid/v1';
import moment from 'moment';
import mock from 'src/utils/mock';

mock.onGet('/api/invoices').reply(200, {
  invoices: []
});

mock.onGet('/api/invoices/1').reply(200, {
  invoice: {
    id: uuid(),
    due_date: moment(),
    issue_date: moment().add(15, 'days'),
    ref: 'DEV-9483',
    customer: {
      name: 'Tracey Herman',
      company: 'Countdown Grey Lynn',
      nzbn: '6934656584231',
      address: '271 Richmond Rd, Grey Lynn, Auckland 1022, New Zealand'
    },
    products: [
      {
        id: uuid(),
        desc: 'Freelancer Subscription (12/05/2019 - 11/06/2019)',
        value: '55.50'
      }
    ],
    subtotal: '50.00',
    taxes: '5.50',
    total: '55.50',
    currency: '$',
    created_at: moment()
  }
});
