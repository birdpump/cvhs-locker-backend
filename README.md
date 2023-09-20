# cvhs-locker-backend

### What to do for dev setup:
1. clone repo
2. run ```npm i``` to install the node modules
3. run ```npm run sync-dev``` to create and sync the local dev db
4. run ```npm run start-dev``` to start the backend with the dev db



### What to do for production setup:
1. clone repo
2. run ```npm i``` to install the node modules
3. verify env var is set for mysql password
4. run ```npm run sync-prod``` to syc the production db
5. run ```npm run start-prod``` to start the backend for production



nodemon --watch "**/*.js" --ext "js" app.js
