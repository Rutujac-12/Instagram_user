
import express from 'express';
import User from '../models/userModel.js';

const app = express();


app.post('/', async (req, res) => {
  try {
    const user = await User.create(req.body);
    res.status(200).json({ user });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});


app.get('/:userId', async (req, res) => {
  try {
    const user = await User.findById(req.params.userId);
    if (!user) throw new Error('User not found');
    res.status(200).json({ user });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});


app.put('/:userId', async (req, res) => {
  try {
    const user = await User.findByIdAndUpdate(req.params.userId, req.body, { new: true });
    if (!user) throw new Error('User not found');
    res.status(200).json({ user });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});


app.delete('/:userId', async (req, res) => {
  try {
    const user = await User.findByIdAndDelete(req.params.userId);
    if (!user) throw new Error('User not found');
    res.status(200).end();
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});


app.get('/', async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json({ users });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

export default app;
