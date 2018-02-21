const MicroserviceClient = require('@microservice-framework/microservice-client');

const client = new MicroserviceClient({
  URL: 'http://localhost:3100/users',
  secureKey: 'de4703e35d056339336f60170e48e67dbf4d1d5e68af9c96',
});
const userMember = {
  login: 'user',
  password: 'user',
  role: 'user'
}
client.post(userMember, function(err, handlerResponse){
  console.log(err);
  console.log(handlerResponse);
});
