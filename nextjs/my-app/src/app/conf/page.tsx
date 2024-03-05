import Link from 'next/link'

export default function Home() {
    return (
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        注文が完了しました
        <div>
          <Link href="/">
            back to top
          </Link>
        </div>
      </main>
    );
  }