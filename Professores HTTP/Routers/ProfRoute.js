const { Router } = require('express');
const router = Router();
const Info = require('../models/info.model');

router.get('/professores', async (req, res) => {
    try{
        const infos = await Info.find(req.body);
        res.status (200).json(infos)
    }
    catch(error){
        res.status(400).json({mensage: error.mensage});
    }
});

router.get('/professores/:id', async(req, res) =>{
    try{
        const{id} = req.params;
        const info = await Info.findById(id);
        res.status(200).json(info);
    }
    catch(error){
        res.status(500).json({message: error.message});  
    }
});

router.post('/professores/por', async (req, res) => {
    try{
        const info = await Info.create(req.body);
        res.status(200).json(info);
    }
    catch(error){
        res.status(500).json({message: error.message});

    }
});

router.put('/professores/att/:id', async (req, res) => {
    const {id} = req.params;
    try{
        const info = await Info.findByIdAndUpdate(id, req.body);
        if(!info){
            return res.send(500).json({message: 'Professor não encontrado'})
        }
        const infoatt = await Info.findById(id);
        res.status(200).json(infoatt);
    }
    catch(error){
        res.status(500).json({message: error.message});
    }
});

router.delete('/professores/del/:id', async(req, res) => {
    try {
        const {id} = req.params;
        const info = await Info.findByIdAndDelete(id);
        if(!info){
            return res.status(404).json({message: 'Professor não encontrado'});
        }
        res.status(200).json({info, message: 'Informações apagadas com sucesso'});
    } 
    catch(error){
        res.status(500).json({message: error.message});
    }
});

module.exports = router;
