import Link from 'next/link';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/fontawesome-free-solid';
import LanguageSwitcher from './LanguageSwitcher';

const MenuItems = ({ t }) => (
  <div className="links">
    <Link prefetch href="/">
      <a href="/" className="visible-xs">
        {t('header:home', { defaultValue: 'Home' })}
      </a>
    </Link>
    <span className="submenu">
      {t('header:about', { defaultValue: 'About' })}
      <FontAwesomeIcon icon={faChevronDown} />
      <div className="submenu__content">
        <Link prefetch href="/about">
          <a href="/about">{t('header:about', { defaultValue: 'About' })}</a>
        </Link>
      </div>
    </span>
    <span className="submenu">
      {t('header:resources', { defaultValue: 'Resources' })}
      <FontAwesomeIcon icon={faChevronDown} />
      <div className="submenu__content">
        {/* <Link href="/guides">
          <a href="/guides">{t('header:guides', { defaultValue: 'Guides' })}</a>
        </Link> */}
        <Link prefetch href="/faq">
          <a href="/faq">{t('header:faq', { defaultValue: 'FAQ' })}
          </a>
        </Link>
        <Link prefetch href="/developers">
          <a href="/developers">{t('header:developers', { defaultValue: 'Developers' })}</a>
        </Link>
      </div>
    </span>
    <Link prefetch href="/get-verge">
      <a href="/get-verge">{t('header:get-verge', { defaultValue: 'Get Verge' })}</a>
    </Link>
    <LanguageSwitcher />
  </div>
);

export default MenuItems;
