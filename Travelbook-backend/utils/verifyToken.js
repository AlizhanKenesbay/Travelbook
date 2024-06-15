import jwt from 'jsonwebtoken';
import User from '../models/User.js';

const errorHandler = (res, statusCode, message) => {
  return res.status(statusCode).json({ message });
};

const verifyToken = async (req, res, next) => {
  const token = req.cookies.token;

  if (!token) {
    return errorHandler(res, 401, 'Токен не предоставлен');
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const userId = decoded.userId;

    const user = await User.findById(userId);

    if (!user) {
      return errorHandler(res, 401, 'Неверный токен');
    }

    req.user = user;
    next();
  } catch (error) {
    console.error(error);
    return errorHandler(res, 401, 'Неверный токен');
  }
};

export const verifyUser = (req, res, next) => {
  if (req.user && req.user.role === 'user') {
    next();
  } else {
    return errorHandler(res, 403, 'Доступ запрещен');
  }
};

export const verifyAdmin = (req, res, next) => {
  if (req.user && req.user.role === 'admin') {
    next();
  } else {
    return errorHandler(res, 403, 'Доступ запрещен');
  }
};

export default verifyToken;