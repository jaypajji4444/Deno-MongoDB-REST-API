import { Product } from '../types.ts'
// Genetate Unique Id
import { v4 } from 'https://deno.land/std/uuid/mod.ts'


let products: Product[] = [
    {
      id: "1",
      name: "Product One",
      description: "This is product one",
      price: 29.99,
    },
    {
      id: "2",
      name: "Product Two",
      description: "This is product two",
      price: 39.99,
    },
    {
      id: "3",
      name: "Product Three",
      description: "This is product three",
      price: 59.99,
    },
  ];


/**
 * @route : /api/v1/products
 * @desc : Get all priducts
 */
const getAllProducts=({response}:{response:any})=>{
    response.body={
        success:true,
        data:products
    }
}


/**
 * @route :GET /api/v1/products/:id
 * @desc : Get single product
 */
const getProduct=({params,response}:{params:{id:string},response:any})=>{
    const product :Product | undefined =products.find(el=>el.id===params.id)
    if(product){
        response.status=200;
        response.body={
            success:true,
            data:product
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


/**
 * @route :POST /api/v1/products
 * @desc : Add single product
 */
const addProduct=async({request,response}:{request:any,response:any})=>{
    const body=await request.body();
    console.log(body)
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
        product.id=v4.generate();
        products.push(product)
        response.status=200;
        response.body={
            success:true,
            data:product
        }
        
    }
    
}

/**
 * @route PUT /api/v1/products/:id
 * @desc Update Product
 */
const updateProduct=async({params,response,request}:{params:{id:string},response:any,request:any})=>{
    const product :Product | undefined= products.find(ele=>ele.id===params.id)
    console.log(product)
    if(product){
        const body= await request.body();
        const updateData : {price?:number,description?:string,name?:string}=body.value;
        products=products.map(product=>product.id===params.id?{...product,...updateData}:product)
        response.status = 200
        response.body = {
            success: true,
            data: products
        }
    }
    else{
        response.status = 404
        response.body = {
            success: false,
            msg: 'No product found'
        }
    }
}


/**
 * @route :DELETE /api/v1/products/:id
 * @desc : Selete single product
 */
const deleteProduct = ({ params, response }: { params: { id: string }, response: any }) => {
    products = products.filter(p => p.id !== params.id)
    response.body = { 
        success: true,
        msg: 'Product removed'
    }
}


export {getAllProducts,getProduct,addProduct,deleteProduct,updateProduct}