import { summary } from 'wikipedia';
import SummaryModel from '../model/SummaryModel.js';
export const findSummary = async (req, res) => {
    try {
        const FindQuery = req.query.query;
        const isExist = await SummaryModel.findOne({ title: FindQuery });
        if (!isExist) {
            let result = await summary(FindQuery);
            if (!result)
                return res.json({ error: "Title doesn't Exist on wikipedia" });
            let newModel = new SummaryModel({
                Title: FindQuery,
                Description: result?.extract,
                OriginalImage: result?.originalimage?.source
            });
            await newModel.save();
            return res.json({
                "Description": result?.extract,
                "OriginalImage": result?.originalimage?.source
            });
        }
        return res.json(isExist.toJSON());
    }
    catch (error) {
        res.json(error);
    }
};
//# sourceMappingURL=findController.js.map