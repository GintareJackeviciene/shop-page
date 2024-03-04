const bcrypt = require('bcryptjs');
const { makeSqlQuery, makeJWTToken } = require('../helpers');
const APIError = require('../apiError/ApiError');

const login = async (req, res, next) => {
  const { email, slaptažodis } = req.body;

  const sql = 'SELECT * FROM customers WHERE email=?';
  const [rowsArr, error] = await makeSqlQuery(sql, [email]);

  if (error) {
    console.log('login error ===');
    return next(error);
  }

  if (rowsArr.length === 0) {
    return next(new APIError('Email not found', 400));
  }

  const foundUserInDB = rowsArr[0];

  const passHash = foundUserInDB.slaptažodis;

  if (!bcrypt.compareSync(slaptažodis, passHash)) {
    return next(new APIError('pass or email not match (pass no match)', 401));
  }

  const token = makeJWTToken({ email: foundUserInDB.email, userId: foundUserInDB.id, scope: foundUserInDB.scope });
  res.json({
    message: `Sveiki ${foundUserInDB.vardas}!`,
    token,
  });
};

const register = async (req, res, next) => {
  const {vardas, pavardė, email, slaptažodis} = req.body;

  const salt = process.env.SALT || 5;
  const passwordHash = bcrypt.hashSync(slaptažodis, +salt);

  const sql = 'INSERT INTO `customers` (`vardas`, `pavardė`, `email`, `slaptažodis`) VALUES (?, ?, ? ,?)';
  const [resObj, error] = await makeSqlQuery(sql, [vardas, pavardė, email, passwordHash]);

  if (error) {
    console.log('register error ===');
    return next(error);
  }

  if (resObj.affectedRows === 1) {
    res.status(201).json({
      message: 'User created successfully',
      id: resObj.insertId,
    });
  }

  res.end();
};

module.exports = {
  login,
  register,
};
