import mongoose from 'mongoose';

const talentSchema = new mongoose.Schema({
    name: { type: String, required: true },
    description: { type: String, required: true },
    skills: { type: [String], required: true },
    phone: { type: Number, required: true },
}, { timestamps: true });

const talent = mongoose.models.talent || mongoose.model('talent', talentSchema);

export { talent };