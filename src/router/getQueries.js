const {PlayerQueries, ClassesQueries} =require('../database/queries')
const player = new PlayerQueries();
const classQ = new ClassesQueries();
const userName=(req, res)=>{
   player.getUserByI(req.user.id).then(data=>res.json(data.rows[0])).catch(console.log)
}
const showclass=(req, res)=>{
   classQ.showAllClasses().then(data=>res.json(data.rows)).catch(console.log);
}

module.exports= {userName ,showclass};