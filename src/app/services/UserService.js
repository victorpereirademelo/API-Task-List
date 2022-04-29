import User from "../models/User";

class UserService {
    create = data => User.create(data);
};

export default new UserService();