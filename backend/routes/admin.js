const express = require('express');
const router = express.Router();
const { verifyAdmin, admin } = require('../middlewares/auth');
const {
  registerAdmin,
  authAdmin,
  acceptRequest,
} = require('../controllers/admin');
const { getAllStudents } = require('../controllers/student');
const { getAllFaculties } = require('../controllers/faculty');

router.post('/', registerAdmin);
router.post('/login', authAdmin);
router.get('/students', verifyAdmin, admin, getAllStudents);
router.get('/faculties', verifyAdmin, admin, getAllFaculties);
router.put('/student/request/accept/:id', verifyAdmin, admin, acceptRequest);
module.exports = router;
