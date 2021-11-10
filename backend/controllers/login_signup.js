exports.sign_up = (req, res) => {
  console.log(req.body);
  return res.json({ status: "ok" });
};
