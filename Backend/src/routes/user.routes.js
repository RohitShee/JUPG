import {Router} from 'express'
import { signUpUser,loginUser, addRoom , getRooms, getSomeRooms, getRoom, getUserRoom, updateRooms, deleteRooms, logoutUser} from '../controllers/user.controller.js'
import { verifyJWT } from '../middlewares/auth.middlware.js'

const router = Router()

router.route("/sign-up").post(
    signUpUser
)
router.route("/logout").post(verifyJWT,logoutUser)
router.route("/login").post(loginUser)
router.route("/add-room").post(verifyJWT,addRoom)
router.route("/rooms").get(verifyJWT,getRooms)
router.route("/someRooms").get(getSomeRooms)
router.route("/rooms/:id").get(getRoom)
router.route("/:username").get(verifyJWT,getUserRoom)
router.route("/edit/:id").patch(updateRooms)
router.route("/delete/:id").delete(deleteRooms)
export default router