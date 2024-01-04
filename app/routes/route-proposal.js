const router = require("express").Router();
const { proposal } = require("../controllers");
const path = require("path");
const { authentication, authorization } = require("../../config/auth");
const { upload } = require("../helper/upload");

// GET localhost:8080/home => Ambil data semua dari awal
router.post("/create", authentication, upload.single("lampiran"), proposal.createProposal);
router.get("/details/:id", authentication, proposal.detailProposal);
router.get("/all", authentication, proposal.getAllProposal);
router.get("/penyaluranAll", authentication, proposal.kategoriPenyaluran);
router.post("/approved", authentication, proposal.approvalProposal);
router.post("/update/:id", authentication, proposal.updateProposal);
router.put("/identified/:id", authentication, proposal.updateKategoriPenyaluran);
//router.post("/upload", authentication, upload.single("lampiran"), proposal.registerProgram);

module.exports = router;
