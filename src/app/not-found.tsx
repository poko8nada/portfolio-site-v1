import Link from 'next/link';
export default function NotFound() {
  return (
    <div style={{ textAlign: 'center', lineHeight: '1.5' }}>
      <h2>Not Found</h2>
      <p>Could not find requested resource</p>
      <Link
        href="/"
        style={{ marginTop: '3rem', display: 'inline-block', color: '#0070f3' }}
      >
        Return Home
      </Link>
    </div>
  );
}
