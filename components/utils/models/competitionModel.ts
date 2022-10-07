import { model, models, Schema } from 'mongoose';


const CompetitionShema = new Schema({
    name: {
        type: String,
        required: true,
    },
    isCompleted: {
        type: Boolean,
        required: true
    }
})

const Competition = models.Competition || model('Competition', CompetitionShema);

export default Competition;