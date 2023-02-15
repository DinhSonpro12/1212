import classNames from 'classnames/bind';
import styles from './Header.module.scss';
import Icon from '~/components/Icons/index';
import logo from '~/assets/img/yt.png';
import { useState } from 'react';

const cx = classNames.bind(styles);

function Header() {
  const [focus, setFocus] = useState(false);
  const [change, setchange] = useState(false);
  const [input, setinput] = useState('');

  function handleInput(event, own) {
    if (event == 'blur') setFocus((focus) => false);
    else if (event == 'focus') setFocus((focus) => true);
    else if (event == 'change') {
      setinput(own.target.value);
      own.target.value ? setchange((change) => true) : setchange((change) => false);
    }
  }
  console.log(input);

  return (
    <div class={cx('content-topbar')}>
      <div class={cx('bound', 'handle')}>
        <div class={'bound'}>
          <Icon Name="menu" />
          {/* <!-- logo youtube --> */}
          <img src={logo} alt="ko load đc " class={cx('topbar_thumbnailYT')} />
        </div>

        <div class={cx('topbar_search', 'bound')}>
          <div class={cx('bound padding-04')}>
            {/* <!-- thanh search --> */}
            <div class={cx('topBsearch_boundIp', 'borderLeft', 'bound', { 'borderLeft-active': focus })}>
              {/* <!-- hidden icon_search --> */}
              {focus && <Icon Name="search" classAdd />}
              <div class={cx('bound', 'rr')}>
                <input
                  // {(focus) && 'autoFocus'}
                  // autoFocus={focus}
                  type="text"
                  class={cx('topBsearch_input')}
                  id="query"
                  placeholder="Tìm kiếm"
                  value={input}
                  onBlur={() => handleInput('blur')}
                  onFocus={() => handleInput('focus')}
                  onChange={(e) => handleInput('change', e)}
                />

                {/* icon keyboard */}
                <Icon
                  Name="keyboard"
                  clickk={() => {
                    document.querySelector('#query').focus();
                  }}
                />
                {/* icon close */}
                {change && ( // {/* <!-- hidden icon_close --> */}
                  <div
                    class={cx('bound_btn')}
                    onClick={(e) => {
                      setchange(false);
                      setinput('');
                      document.querySelector('#query').focus();
                    }}
                  >
                    <i class={cx('material-symbols-outlined icon')}>close</i>
                  </div>
                )}
              </div>
            </div>

            <div class={cx('bound', 'borderRight')}>
              <Icon Name="search" />
            </div>

            <Icon Name="voice" />
          </div>
        </div>
      </div>

      <div class={cx('bound')}>
        <Icon Name="create" />
        <Icon Name="noti" />
        <Icon Name="user" />
      </div>
    </div>
  );
}

export default Header;
