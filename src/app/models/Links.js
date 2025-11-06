import mongoose from 'mongoose';

const LinkSchema = new mongoose.Schema({
    url: { type: String, required: true },
    alias: { type: String, required: true },
    createdAt: {
        type: Date,
        default: Date.now,
    },
});

export const Link = mongoose.models.Link || mongoose.model('Link', LinkSchema);
