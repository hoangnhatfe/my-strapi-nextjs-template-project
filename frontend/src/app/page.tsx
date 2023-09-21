import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Hello world!',
}

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1 className="text-6xl font-bold text-center">Hello world!</h1>
    </main>
  )
}
