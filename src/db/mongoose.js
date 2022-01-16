const mongoose=require('mongoose')

mongoose.connect(process.env.MONGODB_URL,{
    useNewUrlParser:true,
    useCreateIndex:true
})




// const task=new Task({
//     description:'cleaning',
// })

// task.save().then((result)=>{
// console.log(result)
// }).catch((error)=>{
//     console.log(error)
// })



// const me=new User({
//    name:'  vivek  ',
//    email:'vKumar@gmail.com',
//    password:'vivek123'
// })

// me.save().then((result)=>{
//     console.log(result)
// }).catch((error)=>{
//     console.log(error)
// })