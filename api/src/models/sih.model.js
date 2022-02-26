const mongoose = require('mongoose')


const SIHSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    owner: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    timestamp: {
        type: Date,
        default: Date.nows
    },
    dateFormed: {
        type: Date,
        required: true
    },
    members: {
        type: [mongoose.Types.ObjectId]
    }
})


SIHSchema.methods.RemoveMember = async (_id) => {
    const SIH = this
    SIH.members = SIH.members.filter(member => member !== _id)
    await SIH.save()
    return SIH
}

SIHSchema.methods.AddMember = async (_id) => {
    const SIH = this
    SIH.members.push(_id)
    await SIH.save()
    return SIH
}

SIHSchema.methods.changeOwner = async (_id) => {
    const SIH = this
    SIH.owner = _id
    await SIH.save()
    return SIH
}

module.exports = mongoose.model('SIH', SIHSchema)