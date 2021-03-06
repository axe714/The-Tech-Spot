const router = require('express').Router();
const loggedIn = require('../utils/auth');

//renders comment creation form
router.get('/blogs/:blog_id/comment/', loggedIn, (req, res) => {
  res.render('postCommentForm', {
    logged_in: req.session.logged_in,
  });
});

module.exports = router;