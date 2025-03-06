import { Router } from "express";
import SearchHistoryController from "../../controllers/SearchHistoryController/SearchHistoryController.js";
import AuthMiddleware from "../../middlewares/AuthMiddleware.js";
import SearchHistoryValidator from "../../validators/SearchHistoryValidator/SearchHistoryValidator.js";

const SearchHistoryRouter = Router();

SearchHistoryRouter.post(
  "/",
  AuthMiddleware,
  SearchHistoryValidator.saveSearchHistory,
  SearchHistoryController.saveSearchHistory
);
SearchHistoryRouter.get(
  "/",
  AuthMiddleware,
  SearchHistoryController.getAllSearchHistory
);
SearchHistoryRouter.delete(
  "/:searchId",
  AuthMiddleware,
  SearchHistoryController.deleteSingleSearch
);
SearchHistoryRouter.delete(
  "/",
  AuthMiddleware,
  SearchHistoryController.deleteAllSearchHistory
);

export default SearchHistoryRouter;
