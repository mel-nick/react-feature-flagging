const express = require('express');
const router = express.Router();

router.get('/', async (_, res) => {
  const allPermissions = {
    DELETE: 'DELETE',
    CREATE: 'CREATE',
    DISABLED_SECTION_1: 'DISABLED_SECTION_1',
    DISABLED_SECTION_2: 'DISABLED_SECTION_2',
    DISABLED_SECTION_3: 'DISABLED_SECTION_3',
    SHOW_SECTION_4: 'SHOW_SECTION_4',
    SHOW_SECTION_5: 'SHOW_SECTION_5',
    SHOW_SECTION_6: 'SHOW_SECTION_6',
  };
  try {
    res.json(allPermissions);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
});

module.exports = router;
