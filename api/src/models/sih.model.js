const mongoose = require("mongoose");

const SIHSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: false,
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
    default: Date.nows,
  },
  dateFormed: {
    type: Date,
    required: true,
  },
  members: {
    type: [mongoose.Types.ObjectId],
    default: [],
  },
});

SIHSchema.methods.RemoveMember = async (_id) => {
  this.members = this.members.filter((member) => member !== _id);
};

SIHSchema.methods.AddMember = async (_id) => {
  if (!this.members) {
    this.members = [_id];
  } else {
    this.members.push(_id);
  }
};

SIHSchema.methods.changeOwner = async (_id) => {
  this.owner = _id;
};

module.exports = mongoose.model("SIH", SIHSchema);
