const router = require("express").Router();
const userController = require("../controllers/userController");
const { verifyTokenAndAuthorization, verifyTokenAndAdmin } = require("../middleware/verifyToken");


// UPADATE USER
router.put("/updateUser/:id", verifyTokenAndAuthorization, userController.updateUser);

// DELETE USER

router.delete("/deleteUser/:id", verifyTokenAndAuthorization, userController.deleteUser);

// GET USER

router.get("/getUser/:id", verifyTokenAndAuthorization, userController.getUser);


// GET ALL USER

router.get("/getALLUser/", verifyTokenAndAdmin, userController.getAllUsers);


module.exports = router