exports.createBlog = async (req, res) => {
    try {
        const { title, content, author } = req.body;
        const newBlog = new Blog({ title, content, author });
        await newBlog.save();
        res.status(201).json(newBlog);
    } catch (error) {
        res.status(500).json({ message: "Error creating blog", error });
    }
};

exports.getAllBlogs = async (req, res) => {
    try {
        const blogs = await Blog.find();
        res.status(200).json(blogs);
    } catch (error) {
        res.status(500).json({ message: "Error fetching blogs", error });
    }
};

exports.getBlogById = async (req, res) => {
    try {
        const blog = await Blog.findById(req.params.id);
        if (!blog) {
            return res.status(404).json({ message: "Blog not found" });
        }
        res.status(200).json(blog);
    } catch (error) {
        res.status(500).json({ message: "Error fetching blog", error });
    }
};

exports.commentOnBlog = async (req, res) => {
    try {
        const { comment } = req.body;
        const blog = await Blog.findById(req.params.id);
        if (!blog) {
            return res.status(404).json({ message: "Blog not found" });
        }
        blog.comments.push(comment);
        await blog.save();
        res.status(200).json(blog);
    } catch (error) {
        res.status(500).json({ message: "Error commenting on blog", error });
    }
};