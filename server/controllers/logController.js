import Log from "../models/logModel.js";


export default class LogController{

    //create log
    async createLog(req,res,next){
        try{
            const log = new Log(req.body)
            const createdEntry = await log.save();
            res.json(createdEntry)
        }catch(error){
            if(error.name === 'ValidationError'){
                res.status(422);
            }
            next(error);
        }

    }
    async getAllLogs(req,res,next){
        try{
            const entries = await Log.find();
            res.json(entries)
        }catch(error){
            next(error);
        }
    }

}