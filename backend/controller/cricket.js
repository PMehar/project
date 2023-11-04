const Cricket = require('../models/cricket');

exports.addCricket =  async(req, res, next) =>{
  try{
      const name =  req.body.name;
      const birth  =  req.body.birth;
      const url  =  req.body.url;
      const birth_place  =  req.body.birth_place;
      const career =  req.body.career;
      const matches =  req.body.matches;
      const score =  req.body.score;
      const fifties =  req.body.fifties;
      const centuries =  req.body.centuries;
      const wickets =  req.body.wickets;
      const avg =  req.body.avg;
   
      const cricketData  =  await Cricket.create ( {name: name ,birth: birth ,url: url ,birth_place: birth_place ,career: career ,matches: matches ,score: score ,fifties: fifties ,centuries: centuries ,wickets: wickets ,avg:avg });
      res.status(201).json( {newCricketDetails: cricketData});
      console.log("post is successful");
  }
  catch(err){
      console.log("Post User is not working",JSON.stringify(err));
      console.log(err);
      res.status(500).json({
          error: err
      })
  }
}

exports.getCricket = async (req, res, next) =>{
  try{
      const crickets = await Cricket.findAll();
      res.status(200).json({allCrickets : crickets});
      console.log("get is successful");
  }
  catch(err){
      console.log("Get User is failing ", JSON.stringify(err));
      res.status(500).json({
          error: err
      })
  }
}
  exports.deleteCricket = async(req, res, next) =>{
    try{
        if(req.params.id === 'undefined'){
            console.log("id is missing");
            return res.status(400).json({err :'Id is missing'});
        }
        const cricketId = req.params.id;
        console.log(cricketId);
        await Cricket.destroy({where: {id: cricketId}});
        console.log("successfully deleted");
        return res.sendStatus(200);
       
    }
    catch(err){
        console.log("Delete User is failing ", JSON.stringify(err));
        console.log(err + "helo");
        res.sendStatus(500).json({
            error: err
        })
    }
  }

