import Image from 'next/image'
import Link from 'next/link'

const RAW_WIDTH = 212
const RAW_HEIGHT = 44
const RATIO = RAW_WIDTH / RAW_HEIGHT

export default function VercelBanner ({ width, height }) {
  const finalWidth = width || height * RATIO
  const finalHeight = height || width / RATIO

  return (
    <Link href="https://vercel.com/?utm_source=Osmium&utm_campaign=oss">
      <Image
        src="https://images.ctfassets.net/e5382hct74si/78Olo8EZRdUlcDUFQvnzG7/fa4cdb6dc04c40fceac194134788a0e2/1618983297-powered-by-vercel.svg"
        alt="Powered by Vercel"
        width={finalWidth}
        height={finalHeight}
      />
    </Link>
  )
}
