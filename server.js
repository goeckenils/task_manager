const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('API Running!')
})

const PORT = process.env.PORT || 3200

app.use(express.json({ extended: false }))

// Define routes
app.use('/api/register/user', require('./routes/api/users'))
app.use('/api/tasks', require('./routes/api/tasks'))



app.listen(PORT, () => {
    console.log(`Server started on Port ${PORT}`)
})