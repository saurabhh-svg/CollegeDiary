import e from "express";
import mongoose from "mongoose";
import blog from "../models/Blog";
import Blog from "../models/Blog";
import User from "../models/User";

export const getAllBlogs = async (req, res, next) => {
  let blogs;
  try {
    blogs = await Blog.find();
  } catch (error) {
    return console.log(error);
  }
  if (!blogs) {
    return res.status(404).json({ message: "No blogs Foubd" });
  }
  return res.status(200).json({ blogs });
};

export const addBlog = async (req, res, next) => {
  const { title, description, image, user } = req.body;

  let exisitingUser;
  try {
    exisitingUser = await User.findById(user);
  } catch (error) {
    return console.log(error);
  }
  if (!exisitingUser) {
    return res.status(400).json({ message: "unable to find user by this id" });
  }
  const blog = new Blog({
    title,
    description,
    image,
    user,
  });
  try {
    const session = await mongoose.startSession();
    session.startTransaction();
    await blog.save({ session });
    exisitingUser.blogs.push(blog);
    await exisitingUser.save({ session });
    await session.commitTransaction();
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: error });
  }
  return res.status(200).json({ blog });
};

export const updateBlog = async (req, res, next) => {
  const { title, description } = req.body;
  const blogId = req.params.id;
  let blog;
  try {
    blog = await Blog.findByIdAndUpdate(blogId, {
      title,
      description,
    });
  } catch (error) {
    return console.log(error);
  }

  if (!blog) {
    return res.status(500).json({ message: "unable to update" });
  }
  return res.status(200).json({ blog });
};

export const getById = async (req, res, next) => {
  const id = req.params.id;
  let blog;
  try {
    blog = await Blog.findById(id);
  } catch (error) {
    console.log(error);
  }
  if (!blog) {
    return res.status(404).json({ message: "No Blog found" });
  }
  return res.status(200).json({ blog });
};

export const deleteBlog = async (req, res, next) => {
  const id = req.params.id;
  let blog;
  try {
    blog = await Blog.findByIdAndRemove(id);
  } catch (error) {
    console.log(error);
  }
  if (!blog) {
    return res.status(500).json({ message: "Unable to delete" });
  }
  return res.status(200).json({ message: "Succesfully deleted" });
};
