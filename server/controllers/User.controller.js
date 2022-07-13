const { request } = require('express');
const express = require('express');
const userService = require('../services/User.service');

module.exports = {
    getAllUsers: async (req, res) => {
        try {
            const users = await userService.getAllUsers();
            res.status(200).json({ users })
        }
        catch (err) {
            res.status(500).json({
                massage: `get all users failed: ${err.message}`
            })
        }

    },

    getUserById: async (req, res) => {
        try {
            const { id } = req.params;
            const user = await userService.getUserById(id);
            res.status(200).json({ user });
        }
        catch (err) {
            res.status(500).json({
                massage: `get user by id ${req.params.id} failed: ${err.message}`
            })
        }

    },
    searchUserByParams: async (req, res) => {
        try {
            const { name, email } = req.params;
            const user = await userService.searchUserByParams(name, email);
            res.status(200).json({ user });
        }
        catch (err) {
            res.status(500).json({
                massage: `search user by params failed: ${err.message}`
            })
        }

    },
    addUser: async (req, res) => {
        try {
            const user = req.body;
            userService.addUser(user);
            res.status(200).json({ user });

        }
        catch (err) {
            res.status(500).json({
                massage: `add user failed: ${err.message}`
            }
            )
        }
    },
    updateUser: async (req, res) => {
        try {
            const user = req.body;
            const { id } = req.params;
            userService.updateUser(id, user);
            res.status(200).json({ user });

        }
        catch (err) {
            res.status(500).json({
                massage: `update user failed: ${err.message}`
            }
            )
        }
    },
    removeUser: async (req, res) => {
        try {
            const { id } = req.params;
            userService.removeUser(id);
            res.status(200).json({ id });

        }
        catch (err) {
            res.status(500).json({
                massage: `remove user failed: ${err.message}`
            }
            )
        }
    }

}

