import express from 'express'
const router = express.Router()

router.get('/',(_req,res)=>{
    res.send('Fetching entryes')
})

router.post('/',(_req,res)=>{
    res.send('Saving things!')
})

export default router
