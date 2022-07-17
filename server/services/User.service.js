
const fs = require('fs');
const mongoose = require('mongoose');
const data = fs.readFileSync('./data/users.json');
let dataUsers = JSON.parse(data);
const dataUser = dataUsers.users;

const saveToFile = async () => {
    const json = JSON.stringify(dataUsers)
    await fs.writeFileSync('./data/users.json', json,
        (err) => {
            if (err) throw err;
            console.log('Data written to file');
        });
}

module.exports = {
    getAllUsers: async () => {
        return await dataUser;
    },

    getUserById: async (id) => {
        return await dataUser.find(user => user.id === id);
    },

    searchUserByParams: async (userName) => {
        if (userName) {

            let indexUser = await dataUser.findIndex(user => user.firstName.userName);
            return dataUsers.users[indexUser];
        }
    },

    addUser: async (user) => {
        if (user) {
            await dataUser.push(user);
            saveToFile();
        }
    },
    updateUser: async (id, user) => {
        if (user && id) {
            const indexUser = await dataUser.findIndex(user => user.id === id);
            dataUser[indexUser] = user;
            saveToFile();
        }
    },
    removeUser: async (id) => {
        if (id) {
            const indexUser = await dataUser.findIndex(user => user.id === id);
            dataUser.splice(indexUser, 1);
            saveToFile();
        }
    },
    searchUserByParams: async (fName, email) => {
        if (fName && email) {
            const indexSearch = dataUser.findIndex(user => user.firstName === fName && user.em);
            userSearch = dataUser[indexSearch];
            return await userSearch;
        }
    }
}