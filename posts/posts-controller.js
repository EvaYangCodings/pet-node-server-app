import * as postsDao from './posts-dao.js'

const PostsController = (app) => {

    const createPost = async (req, res) => {
        const newPost = req.body;
        newPost.likes = 0;
        newPost.liked = false;
        newPost.replies = 0;
        newPost.reposts = 0;
        newPost.collects = 0;
        newPost.collected = false;
        newPost.comments = [];

        const insertedPost = await postsDao.createPost(newPost);
        res.json(insertedPost);
    }

    const findPosts = async (req, res) => {
        const posts = await postsDao.findPosts()
        res.json(posts);
    }

    const updatePost = async (req, res) => {
        const postIdToUpdate = req.params.pid;
        const updates = req.body;
        const status = await postsDao.updatePost(postIdToUpdate, updates);
        res.json(status);
    }

    const deletePost = async (req, res) => {
        const postIdToDelete = req.params.pid;
        const status = await postsDao.deletePost(postIdToDelete);
        if (status) {
            res.status(200).json({ message: `Post with ID ${postIdToDelete} has been deleted.` });
        } else {
            res.status(400).json({ error: `Failed to delete post with ID ${postIdToDelete}.` });
        }
    }

    const findPostsByUser = async (req, res) => {
        const userId = req.params.userId;
        const posts = await postsDao.findPostsByUser(userId)
        res.json(posts);
    }

    const findPostById = async (req, res) => {
        const pid = req.params.pid;
        const post = await postsDao.findPostById(pid);
        res.json(post);
    }

    const addComment = async (req, res) => {
        const pid = req.params.pid;
        const newComment = req.body.comment;
        try {
            await postsDao.addComment(pid, newComment);
            res.json({ message: 'Comment added successfully' });
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: 'Server error' });
        }
    };

    const getComments = async (req, res) => {
        const pid = req.params.pid;
        const post = await postsDao.getComments(pid);
        if (!post) {
            return res.status(404).json({message: 'Post not found'});
        }
        if (!post.comments) {
            post.comments = [];
        }
        res.json(post.comments);
    };


    app.post('/api/posts', createPost);
    app.get('/api/posts', findPosts);
    app.get('/api/posts/user/:userId', findPostsByUser);
    app.put('/api/posts/:pid', updatePost);
    app.delete('/api/posts/:pid', deletePost);

    app.get('/api/posts/id/:pid', findPostById);
    app.post('/api/posts/id/:pid/comments', addComment);
    app.get('/api/posts/id/:pid/comments', getComments);
}

export default PostsController;