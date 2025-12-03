import User from "../models/user-model.js";

const getUser = async () => {
    const users = await User.findAll();
    return users;
};

export default { getUser }