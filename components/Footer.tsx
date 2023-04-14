import { useConfig } from '@/lib/config'
import { execTemplate } from '@/lib/utils'
import VercelBanner from '@/components/VercelBanner'

type Props = {
  fullWidth: boolean
}

/**
 * The site footer
 */
export default function Footer ({ fullWidth }: Props) {
  const { author, since, footerText, version } = useConfig()

  let text: string
  // If user defined `footerText`, use it as a template
  if (footerText) {
    text = execTemplate(footerText, { since })
  }
  // If not, generate a simple version
  else {
    text = `© ${author} ${getSinceText(since)}`
  }

  return (
    <div
      className={`mt-6 flex-shrink-0 m-auto w-full text-gray-500 dark:text-gray-400 transition-all ${
        !fullWidth ? 'max-w-2xl px-4' : 'px-4 md:px-24'
      }`}
    >
      <div className="py-4 text-sm leading-6 border-t border-gray-200 dark:border-gray-600">
        <div className="flex justify-between items-center flex-wrap">
          <span dangerouslySetInnerHTML={{ __html: text }}/>
          <VercelBanner height={30}/>
        </div>
      </div>
    </div>
  )
}

function getSinceText (since: string | number): string {
  since = +since
  const now = new Date().getFullYear()
  return Number.isNaN(since) || since === now ? String(since) : `${since} - ${now}`
}
