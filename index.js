const express = require('express');
const router = require('./Services/webServices'); 
const PORT = 4851;
const app = express();
app.use(express.json());
app.use('/api', router); 

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});