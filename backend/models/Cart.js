const mongoose=require('mongoose')

const cartSchema=new mongoose.Schema({
    userId:{type:String,unique:true,required:true},
    cartItems:[{
        id:{type:String,required:true},
        itemName:{type:String},
        price:{type:Number,required:true},
        quantity:{type:Number,default:1}
    }]
})

const Cart=mongoose.model('Cart',cartSchema)

module.exports=Cart