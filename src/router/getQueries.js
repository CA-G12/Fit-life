const {PlayerQueries, ClassesQueries} =require('../database/queries')
const player = new PlayerQueries();
const classQ = new ClassesQueries();
const userName=(req, res)=>{
  return player.getUserById(req.user.id).then(data=>res.json(data.rows[0]))
}
const showclass=(req, res)=>{
  return classQ.showAllClasses().then(data=>res.json(data.rows)).catch(console.log);
}

module.exports= {userName ,showclass};