import uuid from 'uuid/v1';
import moment from 'moment';
import { colors } from '@material-ui/core';
import mock from 'src/utils/mock';

mock.onGet('/api/mail').reply(200, {
  emails: [
    {
      id: uuid(),
      seen: true,
      favorited: true,
      labels: [
        {
          text: 'Business',
          color: colors.blue[600]
        },
        {
          text: 'Personal',
          color: colors.orange[600]
        }
      ],
      subject: 'Website redesign. Interested in collaboration',
      message: `
Hi Matt, I saw your work on instagram and would be interested in getting a quote for Logo and slider

Integer velit massa, pharetra sed lacus eu, pulvinar faucibus ex. Ut pretium ex id turpis elementum, aliquam accumsan enim sollicitudin. Sed nec consectetur lorem, ac ullamcorper augue. Suspendisse tempus ligula suscipit finibus vehicula. Morbi viverra finibus lectus, egestas dictum mi mollis nec. Proin eget vehicula eros, sit amet molestie ipsum. Morbi feugiat, elit non placerat fringilla, leo risus tristique felis, sollicitudin tristique nibh arcu nec arcu. Maecenas vel turpis nibh. Etiam in lectus quis felis facilisis dictum. Morbi id vehicula lectus, vel imperdiet dolor. Phasellus consequat tempor tellus, quis placerat quam posuere eget. Mauris blandit, nisl eu sollicitudin tincidunt, tellus diam accumsan arcu, vel pharetra lectus est nec nisi. In sem dolor, mollis sed risus eu, mattis dictum lectus. Suspendisse urna est, finibus et urna non, tincidunt placerat eros.

Donec viverra ipsum id auctor rutrum. Morbi consequat a nunc non interdum. Nulla accumsan eget felis a dictum. Cras rhoncus tortor eget velit fringilla suscipit. Donec quis arcu eu nibh aliquet auctor eget fringilla felis. Sed commodo efficitur massa. Proin maximus elit in suscipit laoreet. Integer pretium arcu ac mauris ullamcorper auctor. Vivamus tincidunt lacus eget purus feugiat tincidunt. Etiam feugiat gravida ullamcorper. Pellentesque cursus vehicula lectus et consectetur. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nam ligula risus, congue eu pellentesque id, volutpat aliquam arcu. Donec efficitur ipsum id neque rhoncus viverra. Vestibulum hendrerit et eros eu bibendum.


Kind regards,

Ekaterina Tankova
      `,
      receiver: {
        name: 'Ekaterina Tankova',
        email: 'ekaterina.tankova@devias.io',
        avatar: '/images/avatars/avatar_2.png'
      },
      created_at: moment()
    },
    {
      id: uuid(),
      seen: false,
      favorited: false,
      labels: [],
      subject: 'Amazing work',
      message:
        'Hey, nice projects! I really liked the one in react. What\'s your quote on kinda similar project?',
      receiver: {
        name: 'Adam Denisov',
        email: 'adam.denisov@devias.io',
        avatar: '/images/avatars/avatar_7.png'
      },
      created_at: moment()
    },
    {
      id: uuid(),
      seen: false,
      favorited: false,
      subject: 'Flight reminder',
      labels: [
        {
          text: 'Work',
          color: colors.green[600]
        }
      ],
      message:
        'Dear Shen, Your flight is coming up soon. Please don’t forget to check in for your scheduled flight.',
      receiver: {
        name: 'Clarke Gillebert',
        avatar: '/images/avatars/avatar_6.png'
      },
      created_at: moment()
    },
    {
      id: uuid(),
      seen: true,
      favorited: true,
      labels: [],
      subject: 'Posible candidates for the position',
      message:
        'My market leading client has another fantastic opportunity for an experienced Software Developer to join them on a heavily remote basis',
      receiver: {
        name: 'Cao Yu',
        avatar: '/images/avatars/avatar_3.png'
      },
      created_at: moment()
    }
  ]
});
