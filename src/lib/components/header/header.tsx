import { Logo } from '@/lib/components/logo/logo'
import { ThemeSwitcher } from '@/lib/components/theme-switcher/theme-switcher'

export const Header = () => {
  return (
    <header>
      <Logo size={30} />
      <div className="title">
        <h1>
          Ross <span className="hidden-xxsm">MacPhee</span>
        </h1>
        <p>
          /rɒs<span className="hidden-xxsm"> məkfi</span>/{' '}
          <span className="hidden-sm"> - RITTech Advanced MBCS MIET BSc</span>
        </p>
      </div>
      <ThemeSwitcher />
    </header>
  )
}
