import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const prescriptionSchema = new Schema({
	prescriptionId: {
		type: Number,
		required: [true, 'PrescriptionId  is required']
	},
	date: {
		type: Date,
		required: [true, 'Birthdate is required']
	},
	appointmentnId: {
		type: Number,
		required: [true, 'appointmentId  is required']
	},

	medicine: {
		type: String,
		required: [true, 'Medicine is required']
	},
	dosage: {
		type: String,
		required: [true, 'Dosage is required']
	},
	instructions: {
		type: String,
	},
	createdAt: {
		type: Date,
		default: Date.now
	}
});

const prescription = mongoose.model('Prescription', prescriptionSchema);

export default prescription;
