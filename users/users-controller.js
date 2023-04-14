// import users from "./users.js";
import * as usersDao from "./users-dao.js";

// let currentUser = null;

function UsersController(app) {
    const findAllUsers = async (req, res) => {
        const users = await usersDao.findAllUsers();
        res.send(users);
    };

    const findUserById = async (req, res) => {
        const id = req.params["id"];
        const user = await usersDao.findUserById(id);
        res.send(user);
    };
    const deleteUser = (req, res) => {
        const id = req.params["id"];
        const status = usersDao.deleteUser(id);
        res.json(status);
    };
    const updateUser = async (req, res) => {
        const id = req.params["id"];
        const user = req.body;
        const status = await usersDao.updateUser(id, user);
        res.json(status);
    };

    const createUser = (req, res) => {
        const user = req.body;
        const newUser = usersDao.createUser(user);
        res.json(newUser);
    };

    const signin = async (req, res) => {
        // const user = req.body;
        const foundUser = await usersDao.findUserByCredentials(
            req.body.email,
            req.body.password
        );

        if (foundUser) {
            req.session["currentUser"] = foundUser;
            // currentUser = foundUser;
            // res.send(foundUser);
            res.json(foundUser);
        } else {
            res.status(404).json({ message: 'User not found.' });
        }
    };

    const signout = async (req, res) => {
        req.session.destroy();
        res.sendStatus(204);
    };

    const profile = (req, res) => {
        const currentUser = req.session["currentUser"];
        if (currentUser) {
            res.json(currentUser);
        } else {
            res.sendStatus(404);
            return;
        }
    };

    const signup = async (req, res) => {
        const user = req.body;

        const foundUser = await usersDao.findUserByEmail(
         req.body.email);
        if (foundUser) {
            res.status(409).json({ message: 'Email has already been registered.' });
        } else {
            const newUser = await usersDao.createUser(user);
            req.session["currentUser"] = newUser;
            // currentUser = newUser;
            res.json(newUser);
        }
    };

    app.get("/api/users", findAllUsers);
    app.get("/api/users/:id", findUserById);
    app.delete("/api/users/:id", deleteUser);
    app.put("/api/users/:id", updateUser);
    app.post("/api/users", createUser);
    app.post("/api/users/signin", signin);
    app.post("/api/users/signup", signup);
    app.post("/api/users/signout", signout);
    app.get("/api/users/profile", profile);
}

export default UsersController;