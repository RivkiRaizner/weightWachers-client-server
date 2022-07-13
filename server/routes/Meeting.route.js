const express = require('express');
const router = express.Router();
const meetingController = require('../controllers/Meeting.controller');

router.get('/:id', meetingController.getAllMeetings);
router.get('/findMeeting/:date', meetingController.getMeetingByDate);

router.post('/:id', meetingController.addMeeting);

router.put('/:id/:date', meetingController.updateMeetingByDate);

router.delete('/:id/:date', meetingController.removeMeeting);




module.exports = router;