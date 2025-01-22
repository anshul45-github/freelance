import mongoose from 'mongoose';

const clientSchema = new mongoose.Schema({
    name: { type: String, required: true },
    phone: { type: Number, required: true },
    countryCode: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    companyName: { type: String, required: true },
    companyDescription: { type: String, required: true },
    companyRole: { type: String, required: true },
}, { timestamps: true });

const client = mongoose.models.client || mongoose.model('client', clientSchema);

const exportedClient = { client };

export default exportedClient;