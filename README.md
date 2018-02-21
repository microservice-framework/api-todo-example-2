# api-todo-example-2

API example with user auth service.

- Make sure that you have local mongo installed and running without auth (testing purposes only).

- Install mfw-cli if not installed yet.
  ```sh
  # npm install @microservice-framework/mfw-cli -g
  ```

- Clone this repo
  ```sh
  # git clone https://github.com/microservice-framework/api-todo-example-2.git
  Cloning into 'api-todo-example-2'...
  remote: Counting objects: 11, done.
  remote: Compressing objects: 100% (10/10), done.
  remote: Total 11 (delta 1), reused 6 (delta 0), pack-reused 0
  Unpacking objects: 100% (11/11), done.
  # cd api-todo-example-2
  ```
  Application folder is a bundle for all services.
  
- Install all services that a part of this bundle
  ```sh
  # mfw setup
	-	downloading microservice-router
	-	downloading example-todo
	-	downloading microservice-auth
	-	downloading microservice-users
	-	downloading microservice-users-login
	-	copiyng microservice-users-login to /Volumes/DATA/gor/tmp/api-todo-example-2/services/microservice-users-login
	-	copiyng microservice-users to /Volumes/DATA/gor/tmp/api-todo-example-2/services/microservice-users
	-	copiyng example-todo to /Volumes/DATA/gor/tmp/api-todo-example-2/services/example-todo
	-	updating dependencies for microservice-users-login
	-	updating dependencies for example-todo
	-	updating dependencies for microservice-users
	-	copiyng microservice-router to /Volumes/DATA/gor/tmp/api-todo-example-2/services/microservice-router
	-	updating dependencies for microservice-router
	-	copiyng microservice-auth to /Volumes/DATA/gor/tmp/api-todo-example-2/services/microservice-auth
	-	updating dependencies for microservice-auth
	[ok]	/Volumes/DATA/gor/tmp/api-todo-example-2/services created.
	[ok]	/Volumes/DATA/gor/tmp/api-todo-example-2/logs created.
	[ok]	/Volumes/DATA/gor/tmp/api-todo-example-2/pids created.
	[ok]	/Volumes/DATA/gor/tmp/api-todo-example-2/configs created.
	[ok]	github:microservice-framework/microservice-users-login updated.
	[ok]	@microservice-framework/microservice-auth updated.
	[ok]	@microservice-framework/microservice-router updated.
	[ok]	github:microservice-framework/example-todo updated.
	[ok]	github:microservice-framework/microservice-users updated.
	[war]	/Volumes/DATA/gor/tmp/api-todo-example-2 already exists.
	[war]	.gitignore already exists
  ```

- start all service
  ```sh
  # mfw start all
	-	starting example-todo:start
	-	starting microservice-users:start
	-	starting microservice-users-login:start
	-	starting microservice-auth:start
	-	starting microservice-router:start-proxy
	-	starting microservice-router:start-admin
	[ok]	example-todo:start started
	[ok]	microservice-users:start started
	[ok]	microservice-users-login:start started
	[ok]	microservice-auth:start started
	[ok]	microservice-router:start-proxy started
	[ok]	microservice-router:start-admin started
	[war]	failed to read .env file. Creating default one.
  ```

- wait 30 seconds until route will be cached.
- run script to add user to database
  ```sh
  # NODE_PATH=services/microservice-users/node_modules node create-user.js
  null
  { login: 'user',
    role: 'user',
    hash:
     { salt: 'SvEkKqzW5KQXiy15hN3faIFY0CsSRzNEcNOjPWZWPsrJYex067GoQg8GJmaWBdo/qzQCHvFL9jf2VJ3TLp8LFErF94isnDzP8jDCvFbI0WeNC3Hj2p5ExxjVURh8iEhaJX04DiHAUKOXd5dm40nISVbUGKJNAyJT5PTEPjM/lgo=',
       iterations: 1000,
       keylen: 512,
       digest: 'sha512',
       hash: '1b89e77893efaf69f10f92b2afa61f7fd95a2c8a7cbf582763b98434097d2662519a96d60703d44e5dfe252f771ca94c5402b6398e0db1268ae2f9da48fddb4d771855d57044255c3e80d3d556850f1c44e0a61819c26063dcd30d02fc3d5a1f721c34ff423f88439465d0b665e9f140b1f885bbe8909436f9c0cd9ad01546920e44f5a4f76904ca787f48ec731c6d0ba5a8ca063fd4de0dbe8d02e87743dc16c487729953573418f65c1b01c56aef1624d779bcd5b1cf31141f177ec27975028382058a77e7b9b43d562cb89959acc1bf06a1bef866a9262091248e3e6392f1035500328099b96c9872b8ff5f5c6cb184318c3d0cdedca19aeea813f9bf7f6070a53ad3aaf0468ac2a660cdace54c32dd37363b2c3d4c2f24a026ff9b0de8ec385e55b45b0fcc5772ce51cb3c3e0c02ce80db4bff50332704dec7c8d40add82168966aa693698998000093cb4da531c089fbed8c327832405ca87440abf9ae3ac98dadfc79526c5bbb3e5a41f27c629b2e9723370b61ceb1d3a14c913711c1ad761aff134a07fbb6629c9b0729351e568f522cdf28af9469c6d6b757a4d0607e8a16be55e139214cf65bbc661fefe984e14c06774470deaccc0ae0069c228bac00ceea4c2e0dafe84314234278a8ef2314052023c297c564aa75253d81c4ff94527a8611dc0a961e55dab29056426903e2406c87fefd9c85c74cd219d87023c' },
    created: 1519186296452,
    changed: 1519186296452,
    token: 'b4c1f2b5b382c99c0956502d452f610de64be6bf0d8d2582',
    url: 'http://localhost:3100/users/user' }
  ```
- open [Example App Page](http://microservice-frame.work/api-todo-example-2/)
  This page will connect your local API. Login with credentials: Login: user, Password: user.
  