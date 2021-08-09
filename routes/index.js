import { Router } from 'express'
import apis from './apis/index.js'
import config from '../configs/app.js'

const router = Router()

router.use(`/api/v${config.version}`, apis)

export default router
