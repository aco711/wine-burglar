'use strict';

import mongoose from 'mongoose';

var RecSchema = new mongoose.Schema({
    name: String,
    user: {type: mongoose.Schema.Types.ObjectId, ref: 'User'},
    content: String,
    consumed: Boolean
});

export default mongoose.model('Rec', RecSchema);
