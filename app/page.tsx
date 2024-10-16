// app/page.tsx
import Link from 'next/link';

export default function HomePage() {
  return (
    <div className="p-6 bg-black">
      <h1 className="text-4xl font-bold mb-6 text-red-400">Countries Information</h1>
      <ul className="space-y-4">
        <li><Link href="/countries/pakistan" className="text-green-300 hover:underline">Pakistan</Link></li>
        <li><Link href="/countries/india" className="text-green-400 hover:underline">India</Link></li>
        <li><Link href="/countries/china" className="text-green-500 hover:underline">China</Link></li>
        <li><Link href="/countries/japan" className="text-green-600 hover:underline">Japan</Link></li>
        <li><Link href="/countries/switzerland" className="text-green-700 hover:underline">Switzerland</Link></li>
      </ul>
    </div>
  );
}