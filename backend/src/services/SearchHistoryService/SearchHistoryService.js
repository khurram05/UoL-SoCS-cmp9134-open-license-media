import SavedSearchModel from "../../models/SavedSearchModel";

const SearchHistoryService = {
  saveSearchHistory: async (req) => {
    try {
      const userId = req.session.user.id;
      const { query } = req.body;
      // check if user exists
      const checkUser = await UserModel.findByPk(userId);
      if (!checkUser) {
        const error = new Error("User not found");
        error.status = 404;
        throw error;
      }
      // save search history
      const searchHistory = await SavedSearchModel.create({
        query,
        userId,
      });
      return searchHistory;
    } catch (error) {
      throw error;
    }
  },

  getAllSearchHistory: async (req) => {
    try {
      const userId = req.session.user.id;
      // check if user exists
      const checkUser = await UserModel.findByPk(userId);
      if (!checkUser) {
        const error = new Error("User not found");
        error.status = 404;
        throw error;
      }
      const searchHistory = await SavedSearchModel.findAll({ where: userId });
      return searchHistory;
    } catch (error) {
      throw error;
    }
  },

  deleteSingleSearch: async (req, searchId) => {
    try {
      const userId = req.session.user.id;
      // check if user exists
      const checkUser = await UserModel.findByPk(userId);
      if (!checkUser) {
        const error = new Error("User not found");
        error.status = 404;
        throw error;
      }
      await SavedSearchModel.destroy({
        where: { id: searchId, userId },
      });
    } catch (error) {
      throw error;
    }
  },

  deleteAllSearchHistory: async (req) => {
    try {
      const userId = req.session.user.id;
      // check if user exists
      const checkUser = await UserModel.findByPk(userId);
      if (!checkUser) {
        const error = new Error("User not found");
        error.status = 404;
        throw error;
      }
      await SavedSearchModel.destroy({ where: userId });
    } catch (error) {}
  },

  deleteSingleSearchHistory: async (req, searchId) => {
    try {
      const userId = req.session.user.id;
      // check if user exists
      const checkUser = await UserModel.findByPk(userId);
      if (!checkUser) {
        const error = new Error("User not found");
        error.status = 404;
        throw error;
      }
      await SavedSearchModel.destroy({
        where: { id: searchId, userId },
      });
    } catch (error) {
      throw error;
    }
  },
};

export default SearchHistoryService;
