import { Router } from 'express'
import userRoute from './user.js'
import postRoute from './post.js'

const router = Router()

router.use('/users', userRoute)
router.use('/posts', postRoute)

export default router
