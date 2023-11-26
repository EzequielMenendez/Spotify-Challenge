import mongoose from "mongoose"

const trackModel = new mongoose.Schema({
    name:{
        type: String,
        require: true
    },
    track:{
        type: Buffer,
        require: true
    }
})

export default mongoose.model('Track', trackModel)