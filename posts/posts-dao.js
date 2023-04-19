import postsModel from './posts-model.js';

export const findPosts = () => postsModel.find();
export const createPost = (post) => postsModel.create(post);
export const deletePost = (pid) => postsModel.deleteOne({_id: pid});
export const updatePost= (pid, post) => postsModel.updateOne({_id: pid}, {$set: post})
export const findPostsByUser = (userId) => postsModel.find({userId: userId});
export const findPostById = (pid) => postsModel.find({_id: pid});

export const addComment = async (pid, comment) => {
    await postsModel.updateOne({ _id: pid }, { $push: { comments: comment } });
    return postsModel.findById(pid);
};

export const getComments = async (pid) => postsModel.findById({_id: pid}).populate('comments');
