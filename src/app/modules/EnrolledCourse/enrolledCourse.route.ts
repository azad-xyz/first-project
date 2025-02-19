import express from 'express'
import validateRequest from '../../middlewares/validateRequest'
import { EnrolledCourseValidations } from './enrolledCourse.validations'
import { EnrolledCourseControllers } from './enrolledCourse.controller'
import auth from '../../middlewares/auth'
import { USER_ROLE } from '../user/user.constant'

const router = express.Router()


router.post(
    '/create-enrolled-course',
    auth(USER_ROLE.student),
    validateRequest(
        EnrolledCourseValidations.createEnrolledCourseValidationSchema),
    EnrolledCourseControllers.createEnrolledCourse)


router.patch('/update-enrolled-course-marks',
    auth(USER_ROLE.faculty),
    validateRequest(EnrolledCourseValidations.updateEnrolledCourseValidationSchema),
    EnrolledCourseControllers.updateEnrolledCourseMarks
)


export const EnrolledCourseRoutes = router