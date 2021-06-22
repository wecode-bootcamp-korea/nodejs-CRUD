import express from "express";
import productsList from "../productsList.js";
import productsList2 from "../productsList2.js";
const router = express.Router();

router.get("/", (req, res) => {
  res.json({ message: "/ 안녕하세요? 김지현의 노드 서버입니다." });
});

router.get("/products", productsList);

router.get("/:id", (req, res) => {
  res.json({ message: "/ 안녕하십니까. 환영합니다! 👩🏻‍💻" });
});

router.get("/products/2", productsList2);

export default router;
