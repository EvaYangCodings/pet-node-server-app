import users from "./users.js";
let currentUser = null;

function UsersController(app) {
    const getUsers = (req, res) => {
        res.send(users);
    };

    const getUserById = (req, res) => {
        const user = users.find(user => user.id == parseInt(req.params.id));
        res.send(user);
    };
    const deleteUser = (req, res) => {
        const user = users.find(user => user.id == parseInt(req.params.id));
        const index = users.indexOf(user);
        users.splice(index, 1);
        res.sendStatus(204);
    };
    const updateUser = (req, res) => {
        const user = users.find(user => user.id == parseInt(req.params.id));
        const index = users.indexOf(user);
        users[index] = { ...user, ...req.body };
        res.sendStatus(204);
    };

    const createUser = (req, res) => {
        const user = req.body;
        users.push({ ...user, id: new Date().getTime() });
        res.sendStatus(201);
    };

    const signin = (req, res) => {
        const user = req.body;
        const foundUser = users.find(
            user =>
                user.firstName === req.body.firstName &&
                user.lastName === req.body.lastName &&
                user.password === req.body.password);
        if (foundUser) {
            currentUser = foundUser;
            res.send(foundUser);
        } else {
            res.sendStatus(404).json({ message: 'User not found.' });
        }
    };

    const signout = (req, res) => {
        currentUser = null;
        res.sendStatus(204);
    };

    // const profile = (req, res) => {
    //     if (currentUser) {
    //         res.send(currentUser);
    //     } else {
    //         res.sendStatus(404);
    //     }
    // };

    const signup = (req, res) => {
        const user = req.body;
        const foundUser = users.find(
            user =>
                user.email === req.body.email);
        if (foundUser) {
            res.status(409).json({ message: 'Email has already been registered.' });
        } else {
            const newUser = { ...user, id: new Date().getTime() }
            currentUser = newUser;
            users.push(newUser);
            res.sendStatus(201);
        }
    };

    app.get("/api/users", getUsers);
    app.get("/api/users/:id", getUserById);
    app.delete("/api/users/:id", deleteUser);
    app.put("/api/users/:id", updateUser);
    app.post("/api/users", createUser);
    app.post("/api/signin", signin);
    app.post("/api/signup", signup);
    app.get("/api/signout", signout);
        // app.get("/api/profile", profile);
}

export default UsersController;