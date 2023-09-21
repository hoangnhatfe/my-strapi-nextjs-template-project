import { getGlobalSetting } from '@/lib/api'
import './globals.scss'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { GlobalSetting } from '@/types/api/GlobalSetting'
import { Payload } from '@/types/Payload'
import { notFound } from "next/navigation"
import { getStrapiMedia } from '@/lib/api-helpers'

const inter = Inter({ subsets: ['latin'] })

export async function generateMetadata(): Promise<Metadata> {
  const setting:Payload<GlobalSetting> = await getGlobalSetting()
  if (!setting.data) return notFound()
  const { seo } = setting.data?.attributes || null
  const openGraphImg = seo?.metaImage?.data ? getStrapiMedia(seo?.metaImage?.data.attributes.url || "") : "/meta-cover.png"

  let meta:Metadata = {
    title: {
      template: `%s | ${seo?.metaTitle}`,
      default: seo?.metaTitle || '',
      absolute: '',
    },
    description: seo?.metaDescription || '/meta-cover.png',
    openGraph: {
      images: [openGraphImg || ''],
      title: seo?.metaTitle || '',
      description: seo?.metaDescription || '',
    },
    keywords: seo?.keywords || [],
  }

  if (seo?.canonicalURL) {
    meta.metadataBase = new URL(seo?.canonicalURL || '')
    meta.alternates = {
      canonical: '/',
    }
  } else {
    meta.metadataBase = new URL(process.env.FE_URL || '')
  }

  return meta
}
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
