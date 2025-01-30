exports.startGame = (req, res) => {
    // Logic to start a game
    res.status(200).json({ message: "Game started successfully" });
};

exports.validateGameLink = (req, res) => {
    const { gameLink } = req.body;
    // Logic to validate the game link
    if (gameLink) {
        res.status(200).json({ message: "Game link is valid" });
    } else {
        res.status(400).json({ message: "Invalid game link" });
    }
};

exports.saveGame = (req, res) => {
    const gameData = req.body;
    // Logic to save game data to the database
    res.status(201).json({ message: "Game saved successfully", game: gameData });
};