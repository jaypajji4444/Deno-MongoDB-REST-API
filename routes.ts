import {Router} from "https://deno.land/x/oak/mod.ts";
import {getAllProducts, getProduct ,addProduct, deleteProduct, updateProduct} from "./controllers/products.ts"

const router=new Router();

router.get("/api/v1/products",getAllProducts)
router.get("/api/v1/products/:id",getProduct)
router.post("/api/v1/products",addProduct)
router.delete("/api/v1/products/:id",deleteProduct)
router.put("/api/v1/products/:id",updateProduct)

export default router;
