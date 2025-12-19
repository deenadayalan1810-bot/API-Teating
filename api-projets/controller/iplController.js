import iplTeam from "../models/iplModels.js"

export const iplIndex = async (req, res)=>{

     try{
     const newIpl = await iplTeam.find()
     res.json(newIpl)
     }catch(error){
     res.status(500).json({message:error.message})
     }
    
}

export const iplCreator =async (req, res)=>{
    //id, Team, Players, Cup

    console.log(req.body)

    // validate data

    const newIpl =  new iplTeam ({
        teamId : Number(req.body.teamId),
        team: req.body.team,
        players: req.body.players,
        titleWon: Number(req.body.titleWon)
    })

    try{
        const iplTeam = await newIpl.save();
        return res.status(201).json(iplTeam)
    }catch(error){
        return res.status(400).json({message: error.message})
    }
}

export const iplDetails =async (req, res)=>{
    try{
        const team = await iplTeam.findOne({teamId: req.params.teamId})

        if(!team){
            return res.status(404).json({message: "cannot find the team"})
        }else{
            res.json(team)
        }
    }catch(error){
        return res.status(500).json({message: error.message})
    }
    
}

export const iplUpdate =async (req, res)=>{

    try {
        const updateTeam = await iplTeam.findOneAndUpdate(
        {teamId: req.params.teamId},
        {
            team: req.body.team,
            players: req.body.players,
            titleWon: req.body.titleWon
        },
        {
            new: true,
        }
    )
    res.status(200).json(updateTeam)
        
    } catch (error) {
        res.status(400).json({message: error.message})
    }
    
}

export const iplDelete = async (req, res)=>{

    try {
        const teamDelete = await iplTeam.findByIdAndDelete({teamId: req.params.teamId});

    if(!teamDelete){
        res.status(404).json({message: "Cannot find the team"})
    }
    return res.json({message: "Deleted sucessfully", teamDelete})

    } catch (error) {
        return res.status(500).json({message: error.message})
    }
    

}

