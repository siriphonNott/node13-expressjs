import { Router } from 'express'
import { onGet, onCreate, onUpdate, onDelete, onLogin, onSignUp } from '../../controllers/user.controller.js'
import { user, check } from '../../validators/index.js'
const router = Router()

router.post('/login', [user.login, check], onLogin)
router.post('/signup', [user.signUp, check], onSignUp)

router.get('/', onGet)
router.post('/', [user.create, check], onCreate)
router.put('/:id', [user.update, check], onUpdate)
router.delete('/:id', [user.remove, check], onDelete)

export default router
