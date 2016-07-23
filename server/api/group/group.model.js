'use strict';

import mongoose from 'mongoose';

var GroupSchema = new mongoose.Schema({
    name: String,
    admin: {type: mongoose.Schema.Types.ObjectId, ref: 'Rec'},
    members: [{type: mongoose.Schema.Types.ObjectId, ref: 'User'}]
});

export default mongoose.model('Group', GroupSchema);