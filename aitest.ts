const password = "admin123";

function getUser(id: string) {
  const query = "SELECT * FROM users WHERE id=" + id;
  return query;
}

function divide(a: number, b: number) {
  return a / b;
}
