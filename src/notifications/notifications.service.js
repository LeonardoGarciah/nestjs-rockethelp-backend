"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.NotificationsService = void 0;
const common_1 = require("@nestjs/common");
const firebase_admin_1 = require("firebase-admin");
const rocketHelpSecret_json_1 = require("/Users/leona/Desktop/rocketHelpSecret.json");
const token = 'ffCHeT3OQuS8w1eypATU9k:APA91bG_6AZrYNy_IauaQ_-QwmSaC7HHeVMZ-JAzSuKQW6b20IwmLwZjmRrMA3E3FZzfsBmZV8AuR5LHZeMGFXLk6XRs7Ic00oNoTFpqBRiWjXvGvMjfpZuZPCmgtzaN7lXJt_f48HAK';
firebase_admin_1.default.initializeApp({
    credential: firebase_admin_1.default.credential.cert(rocketHelpSecret_json_1.default),
    projectId: 'rockethelp-2446a',
});
let NotificationsService = class NotificationsService {
    create(createNotificationDto) {
        const payload = {
            data: {
                MyKey1: 'Hello',
            },
        };
        const options = {
            priority: 'high',
            timeToLive: 60 * 60 * 24,
        };
        firebase_admin_1.default
            .messaging()
            .sendToDevice(token, payload, options)
            .then((resp) => {
            console.log('Succes', resp);
        })
            .catch((error) => {
            console.log('Error: ', error);
        });
        return 'This action adds a new notification';
    }
    findAll() {
        return `This action returns all notifications`;
    }
    findOne(id) {
        return `This action returns a #${id} notification`;
    }
    update(id, updateNotificationDto) {
        return `This action updates a #${id} notification`;
    }
    remove(id) {
        return `This action removes a #${id} notification`;
    }
};
NotificationsService = __decorate([
    (0, common_1.Injectable)()
], NotificationsService);
exports.NotificationsService = NotificationsService;
//# sourceMappingURL=notifications.service.js.map