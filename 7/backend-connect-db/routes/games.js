const gamesRouter = require("express").Router();

const {
    findAllGames,
    createGame,
    updateGame,
    deleteGame,
    checkEmptyFields,
    checkIfUsersAreSafe,
    checkIfCategoriesAvaliable,
    checkIsGameExists,
    checkIsVoteRequest,
    findGameById
} = require("../middlewares/games");

const {
    sendAllGames,
    sendGameCreated,
    sendGameUpdated,
    sendGameDeleted,
    sendGameById
} = require("../controllers/games");

const { checkAuth } = require("../middlewares/auth");

gamesRouter.get("/games/:id", findGameById, sendGameById);
gamesRouter.get("/games", findAllGames, sendAllGames);
gamesRouter.post(
    "/games",
    findAllGames,
    checkIsGameExists,
    checkEmptyFields,
    checkAuth,
    createGame,
    sendGameCreated
); 
gamesRouter.put(
    "/games/:id",
    findGameById,
    checkIsVoteRequest,
    checkIfUsersAreSafe,
    checkIfCategoriesAvaliable,
    checkEmptyFields,
    checkAuth,
    updateGame,
    sendGameUpdated
  );
gamesRouter.delete(
    "/games/:id",
    checkAuth, 
    deleteGame,
    sendGameDeleted 
  );

module.exports = gamesRouter;
