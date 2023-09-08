const info = async (req, res) => {
  try {
    const slack_name = req.query.slack_name || "Chigozie Mbama (Mykel)";
    const track = req.query.track || "Backend";
    const current_day = new Date().toLocaleString("en-US", { weekday: "long",});
    const utc_time = new Date().toISOString();
    const github_file_url = "https://github.com/yourusername/yourrepo/blob/main/yourfile.js";
    const github_repo_url = "https://github.com/mbamamykel77/Zuri-Task-1";

    const response = {
      slack_name,
      track,
      current_day,
      utc_time,
      github_file_url,
      github_repo_url,
      "status_code": 200
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
