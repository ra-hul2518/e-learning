import express from "express";
import {
  addAnwser,
  addQuestion,
  addReplyToReview,
  addReview,
  deleteCourse,
  editCourse,
  getAdminAllCourses,
  getAllCourses,
  getCourseByUser,
  getSingleCourse,
  uploadCourse,
} from "../controllers/course.controller";
import { authorizeRoles, isAuthenticated } from "../middleware/auth";
import { isatty } from "tty";
const courseRouter = express.Router();

courseRouter.post(
  "/createcourse",
  isAuthenticated,
  authorizeRoles("admin"),
  uploadCourse
);
courseRouter.put(
  "/editcourse/:id",
  isAuthenticated,
  authorizeRoles("admin"),
  editCourse
);
courseRouter.get("/getcourse/:id", getSingleCourse);
courseRouter.get("/getcourses", getAllCourses);
courseRouter.get("/getcoursecontent/:id", isAuthenticated, getCourseByUser);
courseRouter.put("/addquestion", isAuthenticated, addQuestion);
courseRouter.put("/addanswer", isAuthenticated, addAnwser);
courseRouter.put("/addreview/:id", isAuthenticated, addReview);
courseRouter.put("/addreviewreply", isAuthenticated,authorizeRoles("admin"), addReplyToReview);
courseRouter.get(
  "/getcourses",
  isAuthenticated,
  authorizeRoles("admin"),
  getAdminAllCourses
);
courseRouter.delete(
  "/deletecourse/:id",
  isAuthenticated,
  authorizeRoles("admin"),
  deleteCourse
);



export default courseRouter;
