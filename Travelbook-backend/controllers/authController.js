import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import User from '../models/User.js';

export const registerUser = async (req, res) => {
  const { username, fullName, email, password, photo } = req.body;

  try {
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: 'Почта уже используется' });
    }

    const existingUsername = await User.findOne({ username });
    if (existingUsername) {
      return res.status(400).json({ message: 'Логин уже используется' });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new User({ username, fullName, email, password: hashedPassword, photo });
    await newUser.save();

    res.status(201).json({ message: 'Регистрация прошла успешно' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Возникла ошибка при регистрации' });
  }
};

export const loginUser = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).json({ message: 'Пользователь не найден.' });
    }

    const isPasswordCorrect = await bcrypt.compare(password, user.password);
    if (!isPasswordCorrect) {
      return res.status(401).json({ message: 'Неправильный пароль.' });
    }

    const token = jwt.sign({ userId: user._id, role: user.role }, process.env.JWT_SECRET, { expiresIn: '15d' });

    res.status(200).json({
      id: user._id,
      username: user.username,
      email: user.email,
      createdAt: user.createdAt,
      updatedAt: user.updatedAt,
      token,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Не получилось войти в аккаунт' });
  }
};

export default { registerUser, loginUser };