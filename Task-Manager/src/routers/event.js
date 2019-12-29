const express = require('express')
const Event = require('../models/event')
const router = new express.Router()

router.post('/events', async (req,res)=>{
  const event = new Event(req.body)
  try{
      await event.save()
      res.status(201).send(event)
  }
  catch(e){
      res.status(400).send(e)
  }
})


router.get('/events', async (req,res)=>{
    try{
        const event= await Event.find({})
        res.send(event)
    }
    catch(e){
        res.status(500).send()
    }
})

router.get('/event/:id',async(req,res)=>{
    const _id = req.params.id;
    try{
        const event =  await Event.findById(_id)

        if(!event){
            return res.status(404).send()
           
            }
            res.send(event)
    } 
    catch(e){
        res.status(500).send()
    }
 })
 


router.patch('/event/:id', async(req,res)=>{
    const updates = Object.keys(req.body)
    const allwoedUpdates = ['eventname','date','description']
    const isValidOperation = updates.every((update)=> allwoedUpdates.includes(update))
    if (!isValidOperation){
        return res.status(400).send({error: 'Invalid updates!'})
    }
    try {
        const event = await Event.findByIdAndUpdate(req.params.id , req.body ,{new: true, runValidators: true})

        if (!event){
            return res.status(404).send()
        }
        res.send(event)
    }
    catch(e){
        res.status(400).send(e)
    }
    
})


router.delete('/events/:id' , async(req,res)=>{
    try{
        const event= await Event.findByIdAndDelete(req.params.id)
        if(!event){
            return res.status(404).send()
        }
        res.send(event)
    }
    catch(e){
        res.status(500).send()
    }
})

module.exports= router