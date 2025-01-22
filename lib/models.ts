import mongoose from 'mongoose';

const talentSchema = new mongoose.Schema({
    id: { type: String, required: true, unique: true },
    userId: { type: String, required: true },
    name: { type: String, required: true },
    description: { type: String, required: true },
    imageUrl: { type: String, required: false },
    skills: { type: [String], required: true },
    phone: { type: Number, required: true },
}, { timestamps: true });

const talent = mongoose.models.talent || mongoose.model('talent', talentSchema);

export { talent };