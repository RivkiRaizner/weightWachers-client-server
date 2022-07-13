
const fs = require('fs');
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
    getAllMeetings: async (id) => {
        const _user = dataUser.find(user => user.id === id);
        return _user.meeting;
    },

    addMeeting: async (id, meeting) => {
        const _user = dataUser.find(user => user.id === id);
        _user.meeting.push(meeting);
        saveToFile();
    },

    getMeetingByDate: async (date) => {
        let arrMeeting = [];
        dataUser.forEach(user => {
            user.meeting.forEach(meeting => {
                if (meeting.date === date) arrMeeting.push(meeting);
            })
        });
        return await arrMeeting[0];
    },
    updateMeetingByDate: async (id, date, meeting) => {
        const iUser = dataUser.findIndex(user => user.id === id);
        const iMeet = dataUser[iUser].meeting.findIndex(d => d.date === date);
        dataUser[iUser].meeting[iMeet] = meeting;
        saveToFile();

    },
    removeMeeting: async (id, date) => {
        const rUser = dataUser.findIndex(user => user.id === id);
        const rMeet = dataUser[rUser].meeting.findIndex(d => d.date === date);
        dataUser[rUser].meeting.splice(rMeet, 1);
        saveToFile();
    }




}