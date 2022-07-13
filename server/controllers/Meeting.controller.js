const { request } = require('express');
const express = require('express');
const meetingService = require('../services/Meeting.service');

module.exports = {
    getAllMeetings: async (req, res) => {
        try {
            const { id } = req.params;
            const meetingsArr = await meetingService.getAllMeetings(id);
            res.status(200).json({ meetingsArr })
        }
        catch (err) {
            res.status(500).json({
                massage: `get all meetings failed: ${err.message}`
            })
        }

    },

    getMeetingByDate: async (req, res) => {
        try {
            let { date } = req.params;
            date = `${date[0]}${date[1]}/${date[2]}${date[3]}/${date[4]}${date[5]}${date[6]}${date[7]}`
            const meet = await meetingService.getMeetingByDate(date);
            res.status(200).json({ meet });
        }
        catch (err) {
            res.status(500).json({
                massage: `get meeting by date failed: ${err.message}`
            })
        }

    },
    addMeeting: async (req, res) => {
        try {
            const { id } = req.params;
            const meeting = req.body;
            meetingService.addMeeting(id, meeting);
            res.status(200).json({ user });
        }
        catch (err) {
            res.status(500).json({
                massage: `add meeting failed: ${err.message}`
            }
            )
        }
    },
    updateMeetingByDate: async (req, res) => {
        try {
            let { id, date } = req.params;
            date = `${date[0]}${date[1]}/${date[2]}${date[3]}/${date[4]}${date[5]}${date[6]}${date[7]}`
            let updateMeeting = req.body;
            meetingService.updateMeetingByDate(id, date, updateMeeting);
            res.status(200).json("success to update meeting");
        }
        catch (err) {
            res.status(500).json({ massage: `error to update meeting` });

        }

    },
    removeMeeting: async (req, res) => {
        try {
            let { id, date } = req.params;
            date = `${date[0]}${date[1]}/${date[2]}${date[3]}/${date[4]}${date[5]}${date[6]}${date[7]}`
            meetingService.removeMeeting(id, date);
            res.status(200).json("success to remove meeting");
        }
        catch (err) {
            res.status(500).json({ massage: `error to remove meeting` });
        }

    }
}