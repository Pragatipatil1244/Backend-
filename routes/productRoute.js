const express= require("express");
const { createProduct, getAllProducts,getProductById, updateProductById, deleteProductById } = require("../controller/Productcontroller");
 const{auth}=require("../Middleware/auth");
 const upload = require("../Middleware/upload");
const router=express.Router();
router.post("/",auth,upload.single("image"),
createProduct)
router.post("/",createProduct)
router.get("/",getAllProducts);
router.get("/:id",getProductById);
router.put("/:id",auth,upload.single("image"),updateProductById);
router.delete("/:id",deleteProductById);

module.exports=router;