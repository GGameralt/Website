app.post('/api/login', (req, res) => {
  const { email, password } = req.body;

  console.log('Login attempt:', { email, password }); // Log the incoming credentials

  const user = users[email];

  if (user && user.password === password) {
    if (user.verified) {
      return res.status(200).json({ message: 'Login successful!', verified: true });
    } else {
      return res.status(403).json({ message: 'Email not verified. Please check your inbox.' });
    }
  }

  return res.status(401).json({ message: 'Invalid email or password.' });
});
