import Link from 'next/link';
export default function NotFound() {
  return (
    <div style={{ textAlign: 'center' }}>
      <h2>Not Found</h2>
      <p>Could not find requested resource</p>
      <Link href="/" style={{ marginTop: '1rem', display: 'inline-block' }}>
        Return Home
      </Link>
    </div>
  );
}
