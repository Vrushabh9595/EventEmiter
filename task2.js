const EventEmitter = require('events')

class Chat extends EventEmitter {
    constructor() {
        super();
        this.users = [];
    }
    sendMessage(user, message) {
        this.emit('message',user, message);
    }

    addUser(user){
        this.emit('add',user);
        this.users.push(user);
    }

    deleteUser(user){
        const rem = this.users.findIndex(u=>u===user);
        this.users.splice(rem,1);
        this.emit('remove',`${user} removed from the chat`);
    }
}

const chatRoom=new Chat();

chatRoom.on('message',(user,message)=>{
    console.log(`${user} says: ${message}`);
})

chatRoom.on('add',(user)=>{
    console.log(`welcome ${user}`);
})
chatRoom.on('remove',(message)=>{
    console.log(message);
})


chatRoom.sendMessage('Alice','Hello everyone...');
chatRoom.sendMessage('Bob','hey alice');
chatRoom.addUser('Harry');
chatRoom.deleteUser('Alice');
chatRoom.deleteUser('Harry');
chatRoom.addUser('Jhon');
chatRoom.sendMessage('Jhon','Hi i am jhon');
chatRoom.deleteUser('Jhon');


