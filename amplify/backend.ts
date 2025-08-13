import { defineBackend } from '@aws-amplify/backend';
import { auth } from './auth/resource';
import { data } from './data/resource';
import { sayHello } from './functions/sayHello/resource';
import { getS3Objects } from './functions/getS3Objects/resource';

defineBackend({
  auth,
  data,
  sayHello,
  getS3Objects
});
