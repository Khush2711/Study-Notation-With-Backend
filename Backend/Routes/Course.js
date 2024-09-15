// Import the required modules
const express = require("express")
const router = express.Router()

// Import the Controllers

// Course Controllers Import
const {
  createCourse,
  getAllCourse,
  getCourseDetails,
} = require("../Controllers/Course")


// Categories Controllers Import
const {
  showAllCategory,
  createCategory,
  categoryPageDetails,
} = require("../controllers/Category")

// Sections Controllers Import
const {
  createSection,
  updateSection,
  deleteSection,
} = require("../controllers/Section")

// Sub-Sections Controllers Import
const {
  createSubSection,
  updateSubSection,
  deleteSubSection,
} = require("../controllers/Subsection")

// Rating Controllers Import
const {
  createRatingAndReview,
  averageRatingAndReview,
  getAllRating,
} = require("../controllers/RatingAndReview")

// Importing Middlewares
const { auth, isInstructor, isStudent, isAdmin } = require("../middlewares/auth")


// Courses can Only be Created by Instructors
router.post("/createCourse", auth, isInstructor, createCourse)
//Add a Section to a Course
router.post("/addSection", auth, isInstructor, createSection)
// Update a Section
router.post("/updateSection", auth, isInstructor, updateSection)
// Delete a Section
router.post("/deleteSection", auth, isInstructor, deleteSection)
// Edit Sub Section
router.post("/updateSubSection", auth, isInstructor, updateSubSection)
// Delete Sub Section
router.post("/deleteSubSection", auth, isInstructor, deleteSubSection)
// Add a Sub Section to a Section
router.post("/addSubSection", auth, isInstructor, createSubSection)
// Get all Registered Courses
router.get("/getAllCourses", getAllCourse)
// Get Details for a Specific Courses
router.post("/getCourseDetails", getCourseDetails)


// Category can Only be Created by Admin
// TODO: Put IsAdmin Middleware here
router.post("/createCategory", auth, isAdmin, createCategory)
router.get("/showAllCategories", showAllCategory)
router.post("/getCategoryPageDetails", categoryPageDetails)



router.post("/createRating", auth, isStudent, createRatingAndReview)
router.get("/getAverageRating", averageRatingAndReview)
router.get("/getReviews", getAllRating)

module.exports = router