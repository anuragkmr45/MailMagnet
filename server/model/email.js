import mongoose from "mongoose";

const EmailSchema = mongoose.Schema({
    to: {
        type: String,
        required: true
    },
    from: {
        type: String,
        required: true
    },
    subject: {
        type: String,
        required: false
    },
    body: {
        type: String,
        required: false
    },
    date: {
        type: Date,
        required: true
    },
    image: {
        type: String,
        required: false
    },
    name: {
        type: String,
        required: true
    },
    starred: {
        type: Boolean,
        required: true,
        default: false
    },
    bin: {
        type: Boolean,
        required: true,
        default: false
    },
    type: {
        type: String,
        required: true,
    }
})

const email = mongoose.model('email', EmailSchema);

export default EmailSchema;