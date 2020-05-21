// Instance of products
import { Product } from '../types.ts'
// Database object
import db from "../DB.ts";
// Making your collection
const productsCollection=db.collection("products")


/**
 * @route : /api/v1/products
 * @desc : Get all priducts
 */
const getAllProducts=async({response}:{response:any})=>{
    try{
        const products : Product[]= await productsCollection.find({})
        if(!products){
            response.status=404;
            response.body={
                data:"No Products Found"
            }
        }
        const list= products.length?products.map(product=>{
            const {_id:{$oid},name,description,price}=product;
            return {id:$oid,name,description,price}
        }):"No data";

        response.status=200;
        response.body={
            success:true,
            data:list
        }
    }
    catch(err){
        response.status=400;
        response.body=err
    }

}


/**
 * @route :GET /api/v1/products/:id
 * @desc : Get single product
 */
const getProduct=async({params,response}:{params:{id:string},response:any})=>{
    try{
    const product :Product | undefined = await productsCollection.findOne({_id:{$oid:params.id}})
    if(product){
        response.status=200;
        // formating 
        const {_id:{$oid},name,description,price}=product

        response.body={
            success:true,
            data:{id:$oid,name,description,price}
        }
    }
    else {
        response.status = 404
        response.body = {
            success: false,
            msg: 'No product found'
        }
    }
    }
    catch(err){
        response.status=400;
        response.body=err
    }
}


/**
 * @route :POST /api/v1/products
 * @desc : Add single product
 */
const addProduct=async({request,response}:{request:any,response:any})=>{
    try{
        const body=await request.body();
    if(!request.hasBody){
        console.log("No Body");
        response.status=400;
        response.body={
            success:false,
            data:"No data"
        }
    }
    else{
        const product : Product= body.value
        const newProduct = await productsCollection.insertOne(product);
        response.status=200;
        response.body={success:true,data:newProduct}
        
    }
    }
    catch(err){
        response.status=400;
        response.body=err;
    }
    
}

/**
 * @route PUT /api/v1/products/:id
 * @desc Update Product
 */
const updateProduct=async({params,response,request}:{params:{id:string},response:any,request:any})=>{
    try{
    const body= await request.body();
    const product :Product | undefined= await productsCollection.updateOne({_id:{$oid:params.id}},body.value);
    if(!product){
        response.status = 404
        response.body = {
            success: false,
            msg: 'No product found'
        }
    }
    
    if(product.modifiedCount){
        response.status = 200
        response.body = {
            success: true,
            data: "Update Successfull"
        }
    }
    else{
        response.status=400;
        response.body={
            success:false,
            data:"Could Not update"
        }
    }

    }
    catch(err){
        response.status=400;
        response.body=err;
    }
}


/**
 * @route :DELETE /api/v1/products/:id
 * @desc : Selete single product
 */
const deleteProduct = async({ params, response }: { params: { id: string }, response: any }) => {
    const deletedProduct=await productsCollection.deleteOne({_id:{$oid:params.id}})

    response.body = { 
        success: true,
        msg: 'Product removed',
    }
}


export {getAllProducts,getProduct,addProduct,deleteProduct,updateProduct}