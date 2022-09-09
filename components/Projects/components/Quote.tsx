import Link from "next/link";

export function Quote() {
  return (
    <Link href="https://i.kym-cdn.com/entries/icons/mobile/000/028/021/work.jpg">
      <p className="block w-full text-gray-500 text-xs text-center cursor-default">
        &rdquo;It ain&rsquo;t much, but it&rsquo;s honest work&rdquo;
      </p>
    </Link>
  );
}
