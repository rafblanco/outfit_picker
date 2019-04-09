const router = require("express").Router();
const outfitRoutes = require("./outfit");

// Outfit routes
router.use("/outfit", outfitRoutes);

module.exports = router;