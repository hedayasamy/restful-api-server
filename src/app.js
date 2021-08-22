import express from 'express';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import authenticationMiddleware from './middleware/auth-middleware.js';
dotenv.config()

import {
    postRegisterUser,
    postActivateAccount,
    postLogin
} from './controllers/user/index.js'
import {
  deleteCheck,
  getChecks, 
  postCheck, 
  patchCheck,
  getCheckUrlStatus
} from './controllers/check/index.js'
import makeCallback from './express-callback/index.js'

const PORT = process.env.PORT;
const apiRoot = process.env.API_ROOT
const app = express()
app.use(bodyParser.json())
app.use((_, res, next) => {
  res.set({ Tk: '!' })
  next()
})
app.set('view-engine', 'ejs');

app.post(`/${apiRoot}/register`, makeCallback(postRegisterUser))
app.post(`/${apiRoot}/activate-account/:token`, makeCallback(postActivateAccount))
app.post(`/${apiRoot}/login`, makeCallback(postLogin))
app.post(`/${apiRoot}/check`, authenticationMiddleware.requireAuth, makeCallback(postCheck));
app.delete(`/${apiRoot}/check/:id`, authenticationMiddleware.requireAuth, makeCallback(deleteCheck));
app.patch(`/${apiRoot}/check/:id`, authenticationMiddleware.requireAuth, makeCallback(patchCheck));
app.get(`/${apiRoot}/check/status/:id`, authenticationMiddleware.requireAuth, makeCallback(getCheckUrlStatus));
app.get(`/${apiRoot}/checks/`, authenticationMiddleware.requireAuth, makeCallback(getChecks));
app.get(`/`, authenticationMiddleware.requireAuth, (req, res) => {
  console.log('hello')
});

  app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`)
  })


export default app