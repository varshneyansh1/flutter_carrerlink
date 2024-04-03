const router = require("express").Router();
const userController = require("../controllers/userController");
const { verifyTokenAndAuthorization, verifyTokenAndAdmin } = require("../middleware/verifyToken");


// UPADATE USER
router.put("/updateUser/", verifyTokenAndAuthorization, userController.updateUser);

// DELETE USER

router.delete("/deleteUser/", verifyTokenAndAuthorization, userController.deleteUser);

// GET USER

router.get("/getUser/", verifyTokenAndAuthorization, userController.getUser);


// GET ALL USER

router.get("/getALLUser/", verifyTokenAndAdmin, userController.getAllUsers);


module.exports = router