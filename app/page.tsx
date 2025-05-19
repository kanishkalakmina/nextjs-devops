import styles from "./page.module.css";

type User = {
  id: number;
  name: string;
  email: string;
  role: string;
};

export default async function Home() {
  const response = await fetch('http://localhost:3000/api/users', { cache: 'no-store' });
  const users: User[] = await response.json();

  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <h1>User List</h1>
        <div className={styles.grid}>
          {users.map((user) => (
            <div key={user.id} className={styles.card}>
              <h2>{user.name}</h2>
              <p><strong>Email:</strong> {user.email}</p>
              <p><strong>Role:</strong> {user.role}</p>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
