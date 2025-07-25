// we are going to register the express router
// This is router for routes
const express = require('express');
// we can have more router object
const router = express.Router();

const v1Routes = require('./v1');
const v2Routes = require('./v2');
router.use('/v1',v1Routes); // if your incoming url starts with /v1 then you are going to mount the v1Routes which is router object of v1 with v1 i.e /v1 whatever is present was handle by v1Routes

router.use('/v2',v2Routes);

module.exports = router // we exporting this router object also

