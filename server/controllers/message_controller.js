let messages = [];
let displayName = [];
let id = 0;

module.exports = {
    create: (req, res) => {
        let { displayName, text, time } = req.body;
        messages.push({ id, displayName, text, time});
        id++;
        console.log(messages)
        res.send(messages);
        
    },

    read: (req, res) => {
        console.log(messages)
        res.send(messages);

    },

    update: (req, res) => {
        let { text } = req.body;
        let updateID = req.params.id;
        let updateMessage = messages.findIndex( message => message.id == updateID);
        let message = messages[updateMessage];

        messages[updateMessage] = {
            id: message.id,
            displayName: displayName || message.displayName,
            text: text || message.text,
            time: message.time
        };

        res.send(messages)
    },

    delete: (req, res) => {
        let deleteID = req.params.id;
        let deleteMessage = messages.findIndex( message => message.id == deleteID);
        messages.splice(deleteMessage, 1);
        res.send(messages);
    }
}