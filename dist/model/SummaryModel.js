import mongoose from "mongoose";
const SumModel = new mongoose.Schema({
    Title: { type: String },
    Description: { type: String, required: true },
    OriginalImage: { type: String }
});
export default mongoose.model("SummaryModel", SumModel);
//# sourceMappingURL=SummaryModel.js.map