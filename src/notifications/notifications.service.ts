import { Injectable } from '@nestjs/common';
import { CreateNotificationDto } from './dto/create-notification.dto';

import * as admin from 'firebase-admin';

import * as firebaseAccountCredentials from './rocketHelpSecret.json';

const serviceAccount = firebaseAccountCredentials as admin.ServiceAccount;

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: 'https://rockethelp-2446a-default-rtdb.firebaseio.com',
});

@Injectable()
export class NotificationsService {
  create(createNotificationDto: CreateNotificationDto) {
    const payload = {
      notification: {
        title: createNotificationDto.title,
        body: createNotificationDto.body,
      },
      data: {
        orderId: createNotificationDto.orderId,
      },
    };

    const options = {
      priority: 'high',
      timeToLive: 60 * 60 * 24,
    };

    admin
      .messaging()
      .sendToDevice(createNotificationDto.deviceReceiverToken, payload, options)
      .then((resp) => {
        console.log('Succes', resp);
      })
      .catch((error) => {
        console.log('Error: ', error);
      });
    return 'This action adds a new notification';
  }
}
