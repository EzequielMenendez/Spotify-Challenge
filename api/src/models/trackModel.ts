import mongoose from "mongoose"

const trackModel = new mongoose.Schema({
    name:{
        type: String,
        require: true
    },
    track:{
        type: String,
        require: true
    }
})

export default mongoose.model('Track', trackModel)