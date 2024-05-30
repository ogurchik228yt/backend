const usersRouter = require("express").Router();

const {
    findAllUsers,
    createUser,
    updateUser,
    deleteUser,
    checkEmptyNameAndEmailAndPassword,
    checkEmptyNameAndEmail,
    hashPassword,
    checkIsUserExists
} = require("../middlewares/users");

const {
    sendAllUsers,
    sendUserCreated,
    sendUserUpdated,
    sendUserDeleted,
    sendMe
} = require("../controllers/users");

const { checkAuth } = require("../middlewares/auth");

gamesRouter.get("/games/:id", findGameById, sendGameById);
gamesRouter.get("/games", findAllGames, sendAllGames);
usersRouter.post(
    "/users",
    findAllUsers,
    checkIsUserExists,
    checkEmptyNameAndEmailAndPassword,
    hashPassword,
    checkAuth,
    createUser,
    sendUserCreated
);
usersRouter.put(
    "/users/:id",
    checkEmptyNameAndEmail,
    checkAuth,
    updateUser,
    sendUserUpdated
);

usersRouter.delete(
    "/users/:id", 
    checkAuth,
    deleteUser,
    sendUserDeleted 
);

usersRouter.get("/me", checkAuth, sendMe);

module.exports = usersRouter;
