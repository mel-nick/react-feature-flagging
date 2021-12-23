const express = require('express');
const router = express.Router();

router.get('/me', async (_, res) => {
  const userPermissions = {
    CREATE: false,
    DELETE: false,
    DISABLED_SECTION_1: true,
    DISABLED_SECTION_2: false,
    SHOW_SECTION_1: true,
    SHOW_SECTION_5: true,
  };
  try {
    res.json(userPermissions);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
});

module.exports = router;
