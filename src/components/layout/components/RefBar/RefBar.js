import classNames from 'classnames/bind';

import styles from './RefBar.module.scss';
import Icon from '~/components/Icons/index';
const cx = classNames.bind(styles);

function RefBar() {
  var list = [
    { name: 'Trang chủ', type: 'home' },
    { name: 'Shorts', type: 'radio' },
    { name: 'Kênh đăng kí', type: 'subscriptions' },
    { name: 'Thư viện', type: 'video_library' },
  ];

  return (
    <div class={cx('refbar')}>
      {list.map((value, index) => {
        return (
          <div class={cx('refbar_element')} key={index}>
            <Icon Name="refbar" typeIcon={value.type} />
            <p class={cx('refbar_element_desc')}>{value.name}</p>
          </div>
        );
      })}
    </div>
  );
}

export default RefBar;
