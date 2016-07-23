'use strict';

import mongoose from 'mongoose';

var GroupSchema = new mongoose.Schema({
    name: String,
    admin: {type: mongoose.Schema.Types.ObjectId, ref: 'User'},
    members: [{type: mongoose.Schema.Types.ObjectId, ref: 'User'}],
    recs: [{type: mongoose.Schema.Types.ObjectId, ref: 'Rec'}]
});

export default mongoose.model('Group', GroupSchema);