/* Aquí va la lógica que maneja el comportamiento de nuestra API cada vez que se recibe una request a través de las rutas*/
const {
  getAllUsers,
  getUserById,
  registerUser,
  loginUser,
  deleteUserById,
  editUserById,
} = require("./usersModel");
const notNumber = require("../utils/notNumber");
const { hashPassword, checkPassword } = require("../utils/handlePassword");
const { tokenSign } = require("../utils/handleJWT");
const url = process.env.public_url;

//get all users
const listAll = async (req, res, next) => {
  const dbResponse = await getAllUsers();
  if (dbResponse instanceof Error) return next(dbResponse);
  dbResponse.length ? res.status(200).json(dbResponse) : next();
};

/*-------------------*/
//get user by id
const listOne = async function (req, res, next) {
  if (notNumber(req.params.id, res)) return;
  const dbResponse = await getUserById(Number(req.params.id));
  if (dbResponse instanceof Error) return next(dbResponse);
  dbResponse.length ? res.status(200).json(dbResponse) : next();
};
//patch existing user
const editOne = async (req, res, next) => {
  if (notNumber(req.params.id, res)) return;
  const dbResponse = await editUserById(+req.params.id, req.body);
  if (dbResponse instanceof Error) return next(dbResponse);
  dbResponse.affectedRows ? res.status(200).json(req.body) : next();
};

//Register new user
const register = async (req, res, next) => {
  const image = url + req.file.filename;
  const password = await hashPassword(req.body.password);
  const dbResponse = await registerUser({ ...req.body, password, image });
  if (dbResponse instanceof Error) return next(dbResponse);
  const user = {
    name: req.body.name,
    email: req.body.email,
  };
  const tokenData = {
    token: await tokenSign(user, "2h"),
    user,
  };
  res.status(201).json({ user: req.body.name, Token_Info: tokenData });
};

//Login user
const login = async (req, res, next) => {
  const dbResponse = await loginUser(req.body.email);
  if (!dbResponse.length) return next();
  if (await checkPassword(req.body.password, dbResponse[0].password)) {
    const user = {
      id: dbResponse[0].id,
      name: dbResponse[0].name,
      email: dbResponse[0].email,
      image: dbResponse[0].image,
    };
    const tokenData = {
      token: await tokenSign(user, "30s"),
      user,
    };
    res
      .status(200)
      .json({ message: `User ${user.name} Logged in!`, Token_info: tokenData });
  } else {
    let error = new Error();
    error.status = 401;
    error.message = "Unauthorized";
    next(error);
  }
};

//delete user by ID
const removeOne = async (req, res, next) => {
  if (notNumber(req.params.id, res)) return;
  const dbResponse = await deleteUserById(+req.params.id);
  console.log(dbResponse);
  if (dbResponse instanceof Error) return next(dbResponse);
  dbResponse.affectedRows ? res.status(204).end() : next();
};

module.exports = { listAll, listOne, register, login, removeOne, editOne };
