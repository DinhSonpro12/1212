import { useState, useEffect } from 'react';
import classNames from 'classnames/bind';

import styles from './Icon.module.scss';
import ComponentIcon from './components/index';

const cx = classNames.bind(styles);

function Icon({ Name, classAdd = null, clickk = false, typeIcon, path = '' }) {
  const [visible, Setvisible] = useState(false);
  const [hidden, Sethidden] = useState(false);

  const [arrListMenu, setAarrListMenu] = useState([]);

  // call apis
  useEffect(() => {
    fetch('http://localhost:3000/Refcontent')
      .then((respon) => respon.json())
      .then((ob) => {
        setAarrListMenu(ob);
      });
  }, []);

  var handleVisible = (event) => {
    Setvisible((x) => {
      return !x;
    });
    Sethidden(false);
  };

  var handleMouseOver = (event) => {
    Sethidden((x) => {
      return true;
    });
  };

  var handleMouseLeave = (event) => {
    Sethidden((x) => {
      return false;
    });
  };

  switch (Name) {
    case 'search':
      return (
        <i
          class={cx('material-symbols-outlined icon relative', { 'paddingRight-10': classAdd })}
          onMouseOver={handleMouseOver}
          onMouseLeave={handleMouseLeave}
        >
          search
          {!classAdd && hidden && <div class={cx('popupTitle')}>Tìm kiếm</div>}
        </i>
      );

    case 'voice':
      return (
        //   {/* <!-- icon mic --> */}
        <div
          class={cx('bound_btn marginLeft-4  color181818')}
          onMouseOver={handleMouseOver}
          onClick={handleVisible}
          onMouseLeave={handleMouseLeave}
        >
          <i class={cx('material-symbols-outlined icon relative', 'icon-header')}>
            mic
            {hidden && <div class={cx('popupTitle')}>Tìm kiếm bằng giọng nói</div>}
          </i>
          {visible && <ComponentIcon Name="voice" />}
        </div>
      );

    case 'create':
      return (
        // {/* <!-- icon create --> */}
        <div
          class={cx('bound_btn marginRight-8 ')}
          onMouseOver={handleMouseOver}
          onClick={handleVisible}
          onMouseLeave={handleMouseLeave}
        >
          <i class={cx('material-symbols-outlined relative icon', 'icon-header')}>
            video_call
            {hidden && <div class={cx('popupTitle')}>Tạo</div>}
          </i>
          {visible && <ComponentIcon Name="create" />}
        </div>
      );

    case 'noti':
      return (
        //   {/* <!-- icon noti --> */}
        <div
          class={cx('bound marginRight-8')}
          onMouseOver={handleMouseOver}
          onClick={handleVisible}
          onMouseLeave={handleMouseLeave}
        >
          <div class={cx('bound_btn')}>
            <i class={cx('material-symbols-outlined icon relative', 'icon-header')}>
              notifications
              <div id={cx('icon_noti')} class={cx('bound_btn')}>
                2
              </div>
              {hidden && <div class={cx('popupTitle')}>Thông báo</div>}
            </i>
            {visible && <ComponentIcon Name="noti" />}
          </div>
        </div>
      );

    case 'user':
      return (
        //   {/* <!-- icon user --> */}
        <div
          class={cx('bound marginRight-8', 'bound_topbar_user')}
          onMouseOver={handleMouseOver}
          onClick={handleVisible}
          onMouseLeave={handleMouseLeave}
        >
          <div class={cx('bound_btn', 'topbar_user')}></div>
          {visible && <ComponentIcon Name="user" />}
        </div>
      );

    case 'keyboard':
      return (
        //   {/* <!-- keyboard --> */}
        <div
          class={cx('bound  padding-02')}
          onClick={() => {
            handleVisible();
            clickk();
          }}
        >
          <i class={cx('topBsearch_key material-symbols-outlined icon relative visible')}>keyboard_alt</i>
          {visible && <ComponentIcon Name="keyboard" />}
        </div>
      );

    case 'menu':
      return (
        <>
          <div class={cx('bound_btn')} onClick={clickk || handleVisible}>
            <i class={cx('material-symbols-outlined icon')}>menu</i>
          </div>
          {console.log(arrListMenu)}
          {visible && <ComponentIcon Name="menu" funcVisible={handleVisible} List_menu={arrListMenu} />}
        </>
      );

    case 'other':
      if (typeIcon == 'user') return <img class={cx('thumbnail_avatar')} src={path} />;
      else return <i class="material-symbols-outlined marginRight-16 icon">{typeIcon}</i>;

    case 'refbar':
      return <i class={cx('material-symbols-outlined icon', 'refbar-icon')}>{typeIcon}</i>;

    default:
      return {};
  }
}

export default Icon;
