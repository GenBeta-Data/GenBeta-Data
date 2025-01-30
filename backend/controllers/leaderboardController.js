exports.getLeaderboard = async (req, res) => {
    try {
        const leaderboard = await Leaderboard.find().sort({ score: -1 }).limit(10);
        res.status(200).json(leaderboard);
    } catch (error) {
        res.status(500).json({ message: "Error retrieving leaderboard", error });
    }
};

exports.submitScore = async (req, res) => {
    const { userName, userCountry, score } = req.body;

    try {
        const newScore = new Leaderboard({ userName, userCountry, score });
        await newScore.save();
        res.status(201).json({ message: "Score submitted successfully", newScore });
    } catch (error) {
        res.status(500).json({ message: "Error submitting score", error });
    }
};