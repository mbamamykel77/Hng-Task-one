const info = async (req, res) => {
  try {
    const slackName = req.query.slack_name || "Chigozie Mbama (Mykel)";
    const track = req.query.track || "Backend Track";
    const currentDayOfWeek = new Date().toLocaleString("en-US", { weekday: "long",});
    const currentUTC = new Date().toUTCString();
    const githubFileURL = "https://github.com/yourusername/yourrepo/blob/main/yourfile.js";
    const githubSourceCodeURL = "https://github.com/yourusername/yourrepo";

    const response = {
      slackName,
      track,
      currentDayOfWeek,
      currentUTC,
      githubFileURL,
      githubSourceCodeURL,
    };

    res.status(200).json(response);
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      status: "failed",
      message: "Internal server error",
    });
  }
};

export { info };
