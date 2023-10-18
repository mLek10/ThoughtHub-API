// Define your routes (e.g., /api/users, /api/thoughts, etc.)
app.use('/api/users', require('./routes/user-routes'));
app.use('/api/thoughts', require('./routes/thought-routes'));

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});