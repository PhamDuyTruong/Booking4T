const roomControllers = require("../controllers/roomController");
const authMiddleware = require("../middleware/authMiddleware");
const router = require("express").Router();

// Create Room
router.post("/admin/:id", roomControllers.createRoom);
// Get all rooms
router.get("/", roomControllers.getAllRooms);
//Get detail room
router.get("/:id", roomControllers.getDetailRoom);
//Get Room by placeId
router.get("/allrooms/:id", roomControllers.getRoomsByPlaceId);

//Delete room
router.delete("/admin/:id", roomControllers.deleteRoom);

// Update room
router.put("/admin/:id", roomControllers.updateRoom);

module.exports = router;