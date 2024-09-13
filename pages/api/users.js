import userData from '../../data/users.json';

export default function handler(req, res) {
  const { query } = req.query;

  if (!query) {
    return res.status(400).json({ error: 'Query is required' });
  }

  const lowerCaseQuery = query.toLowerCase();

  const filteredUsers = userData.filter(user =>
    user.first_name.toLowerCase().includes(lowerCaseQuery) ||
    user.last_name.toLowerCase().includes(lowerCaseQuery) ||
    user.city.toLowerCase().includes(lowerCaseQuery) ||
    user.contact_number.includes(lowerCaseQuery) 
  );

  if (filteredUsers.length === 0) {
    return res.status(404).json({ error: 'No users found' });
  }

  res.status(200).json(filteredUsers);
}
