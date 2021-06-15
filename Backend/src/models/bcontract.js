const mongoose = require("mongoose");
const bcontractSchema = new mongoose.Schema({
    createdBy: {
        type: mongoose.Schema.Types.ObjectId, ref: 'Buyer',
        required: true
    },

    productName: {
        type: String,
        required: true,
        trim: true
    },
    idproof: [
        { img: { type: String } }
    ],
    description: {
        type: String,

    },
    firmname: {
        type: String
    },
    regId: {
        type: String
    },
    reqQuantity: {
        type: String
    },

    location: {
        address: {
            type: String,

        },
        city: {
            type: String,

        },
        district: {
            type: String,
            required: true
        },
        postalCode: {
            type: Number,
            required: true
        }
    },

    ContractDuration: {
        startDate: {
            type: Date,
            required: true
        },
        EndDate: {
            type: Date,
            required: true
        }
    },
    

}, { timestamps: true });

module.exports = mongoose.model('Bcontract', bcontractSchema);

