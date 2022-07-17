import { UsersListComponent } from './classes/components/users-list.class.js';
import { UsersPreviewComponent } from './classes/components/users-preview.class.js';
import { UsersControlsComponent } from './classes/components/users-controls.class.js';
import { UsersMock } from './data/data.js';
import { UserReciever } from './classes/entities/user-reciever.class.js';
import { Invoker } from './classes/command.class.js';
const userInvoker = new Invoker();
const userReceiver = new UserReciever([...UsersMock]);
const usersControlsComponent = new UsersControlsComponent('controls', userReceiver, userInvoker);
const usersComponent = new UsersListComponent('main', userReceiver, userInvoker);
const usersPreviewComponent = new UsersPreviewComponent('preview', userReceiver, userInvoker);
