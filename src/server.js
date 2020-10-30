import 'dotenv/config'; 

import express from 'express';
import bodyParser from 'body-parser';
import UserController from './app/controllers/UserController';
import BullBoard from 'bull-board';
import Queue from './app/lib/Queue';

const app = express();
BullBoard.setQueues(Queue.queues.map(queue => queue.bull));

app.use(bodyParser.json());

app.post('/users', UserController.store);

app.use('/admin/queues', BullBoard.UI);

app.listen(3000, () => {console.log('~> Server running on localhost:3000...')});
