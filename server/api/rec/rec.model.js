'use strict';

import mongoose from 'mongoose';

var RecSchema = new mongoose.Schema({
    description: String,
    user: {type: mongoose.Schema.Types.ObjectId, ref: 'User'},
    group: {type: mongoose.Schema.Types.ObjectId, ref: 'Group'},
    link: String
});

export default mongoose.model('Rec', RecSchema);
