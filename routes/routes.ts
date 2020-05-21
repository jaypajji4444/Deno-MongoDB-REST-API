import {Router} from "https://deno.land/x/oak/mod.ts";
import {getAllProducts, getProduct ,addProduct, deleteProduct, updateProduct} from "../controllers/products.ts"

const router=new Router();

router.get("/api/products",getAllProducts)
router.get("/api/products/:id",getProduct)
router.post("/api/products",addProduct)
router.delete("/api/products/:id",deleteProduct)
router.put("/api/products/:id",updateProduct)

export default router;
