import { Router } from 'express'
import { onGet, onCreate, onUpdate, onDelete } from '../../controllers/user.controller.js'
import { post, check } from '../../validators/index.js'
import auth from '../auth.js'

const router = Router()

router.get('/', auth.required, onGet)
router.post('/', auth.required, [post.create, check], onCreate)
router.put('/', auth.required, [post.update, check], onUpdate)
router.delete('/', auth.required, [post.remove, check], onDelete)

export default router
