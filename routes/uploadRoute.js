const express = require("express");
const router = express.Router();
const multer = require("multer");
const { v2: cloudinary } = require("cloudinary");
const fs = require("fs");
require("dotenv").config();

// Cloudinary Config
cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.API_KEY,
  api_secret: process.env.API_SECRET,
});

// Multer Setup (store locally before upload to Cloudinary)
const upload = multer({ dest: "uploads/" });

router.post("/", upload.single("file"), async (req, res) => {
  try {
    const file = req.file;
    const result = await cloudinary.uploader.upload(file.path, {
      resource_type: "auto",
    });
    console.log("file uploaded to cloudinary ...")
    fs.unlinkSync(file.path); // delete local file after upload

    res.status(200).json({
      message: "File uploaded successfully!",
      url: result.secure_url,
      result: result,
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Upload failed", error: err });
  }
});

module.exports = router;
