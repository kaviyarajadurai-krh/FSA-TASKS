const db = require("../config/db");

exports.loginUser = (req, res) => {

    const { username, password } = req.body;

    // Empty validation
    if(!username || !password){
        return res.json({
            status:"error",
            message:"All fields required"
        });
    }

    const sql = "SELECT * FROM users WHERE username=? AND password=?";

    db.query(sql, [username, password], (err, result) => {

        if(err){
            return res.json({status:"error", message:"Server error"});
        }

        if(result.length > 0){
            res.json({status:"success"});
        }
        else{
            res.json({
                status:"fail",
                message:"Invalid Username or Password"
            });
        }

    });
};
