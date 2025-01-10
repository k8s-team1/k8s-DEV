const mongoose = require('mongoose')

const GUESTBOOK_DB_ADDR = process.env.GUESTBOOK_DB_ADDR; 
const mongoURI = "mongodb://" + GUESTBOOK_DB_ADDR + "/guestbook"

const db = mongoose.connection;

db.on('disconnected', () => {
    console.error(`Disconnected: unable to reconnect to ${mongoURI}`)
    throw new Error(`Disconnected: unable to reconnect to ${mongoURI}`) 
})
db.on('error', (err) => {
    console.error(`Unable to connect to ${mongoURI}: ${err}`);
});

db.once('open', () => {
  console.log(`connected to ${mongoURI}`);
});

const connectToMongoDB = async () => {
    await mongoose.connect(mongoURI, {
        useNewUrlParser: true,
        connectTimeoutMS: 2000,
        reconnectTries: 1
    })
};

const messageSchema = mongoose.Schema({
    title: { type: String, required: [true, 'Title is required'] },
    artist: { type: String, required: [true, 'Artist is required'] },
    slength: { type: String, default:'3:00' },
    image: { type: String, required: [true, 'Image URL is required'] }, 
    mp3: {type: String, default: 'https://default.mp3'},
    tracknum: {type: Number},
    views: {type: Number},
    timestamps: {}
});

const messageModel = mongoose.model('Message', messageSchema);

const construct = (params) => {
    const title = params.title
    const artist = params.artist
    const slength = params.slength
    const image = params.image
    const mp3 = params.mp3
    const tracknum = params.tracknum
    const views = params.views
    const message = new messageModel({ title: title, artist: artist, slength: slength, image:image, mp3:mp3, tracknum:tracknum, views:views }) //title(곡제목), artist(가수), slength(곡길이), image(이미지), mp3(곡주소)
    return message
};

const save = (message) => {
    console.log("saving message...")
    message.save((err) => {
        if (err) { throw err }
    })
};

// 메세지 관련 함수
const create = (params) => {
    try {
        const msg = construct(params)
        const validationError = msg.validateSync()
        if (validationError) { throw validationError }
        save(msg)
    } catch (error) {
        throw error
    }
}

// PATCH 요청: tracknum으로 조회 후 views 증가
const incrementViewsByTracknum = async (tracknum) => {
    try {
        const updatedMessage = await messageModel.findOneAndUpdate(
            { tracknum: tracknum }, // tracknum 기준으로 조회
            { $inc: { views: 1 } }, // views 값을 1 증가
            { new: true }           // 업데이트된 문서 반환
        );

        if (!updatedMessage) {
            throw new Error(`No message found with tracknum ${tracknum}`);
        }

        return updatedMessage;
    } catch (error) {
        throw error;
    }
};

module.exports = {
    create: create,
    messageModel: messageModel,
    connectToMongoDB: connectToMongoDB,
    incrementViewsByTracknum: incrementViewsByTracknum
}

