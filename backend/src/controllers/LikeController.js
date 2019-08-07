const Dev = require('../models/Dev');

module.exports = {
    async store(req, res){
        const{user} = req.headers;
        const{devId} = req.params; //acessar um parametro que vem através da rota

        const loggedDev = await Dev.findById(user);
        const targetDev = await Dev.findById(devId);

if (! targetDev){
    return res.status(400).json({ error: 'Dev not exists'})
}

if (targetDev.likes.includes(loggedDev._id)){
    console.log("DEU MATCH!");
}

loggedDev.likes.push(targetDev._id);//push add id dentro da prop likes

await loggedDev.save();


        return res.json(loggedDev);
    }
};