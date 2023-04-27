import css from './styles.module.scss'
import SiteFooterText from '@/components/site-footer-text'
import SiteFooterVersion from '@/components/site-footer-version'
import VercelBanner from '@/components/VercelBanner'

export default function LayoutFooter () {
  return (
    <footer className={css.layout_footer}>
      <div>
        <SiteFooterText/>
        <VercelBanner height={30}/>
        <SiteFooterVersion/>
      </div>
    </footer>
  )
}
