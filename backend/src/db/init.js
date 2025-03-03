import SavedSearchModel from "../models/SavedSearchModel.js";
import UserModel from "../models/UserModel.js";

const dbInit = async () => {
  await UserModel.sync({ alert: true, force: false });
  await SavedSearchModel.sync({ alert: true, force: false });
};

export default dbInit;
