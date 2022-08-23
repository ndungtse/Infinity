import mongoose, { model, models} from 'mongoose';
// const { registerSchema } = require('swaggiffy');

const postSchema = new mongoose.Schema({
    text: {
        type: String,
        required: true
    },
    creatorId: {
        type: Object,
        required: true
    },
    pictures: {
        type: Array,
        default: []
    },
    tags: {
        type: Array,
        default: []
    },
    group: {
        type: String,
    },
    videos: {
        type: Array,
        default: []
    },
    likes: {
        count: {
            type: Number,
            default: 0
        },
        users: {
            type: Array,
            default: []
        }
    },
    comments: {
        count: {
            type: Number,
            default: 0
        },
        users: {
            type: Array,
            default: []
        }
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
}
);

const Post = models.Post || model('Post', postSchema);

export default Post