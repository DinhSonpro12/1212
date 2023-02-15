import classNames from 'classnames/bind';
import { useState, useEffect } from 'react';

import styles from './ChipBar.module.scss';
const cx = classNames.bind(styles);

function ChipBar() {
  const [arrListTopic, setArrListTopic] = useState([]);

  // call apis
  useEffect(() => {
    fetch('http://localhost:3000/Topic')
      .then((respon) => respon.json())
      .then((ob) => {
        setArrListTopic(ob);
      });
  }, []);

  return (
    // <!-- scroll_bar -->
    <div class={cx('scroll_container')}>
      <div id={cx('left_arrow')} class={cx('scroll_container_arrow')}>
        <div class={cx('boundcolor')}>
          <div class={cx('bound_btn margin-08 ')}>
            <i class={cx('material-symbols-outlined icon')}>navigate_before</i>
          </div>
        </div>
        <div class={cx('filter')}></div>
      </div>

      {arrListTopic.map((value, index) => (
        <div class={cx('scroll_container_item')} key={index}>
          {value}
        </div>
      ))}

      <div id={cx('right_arrow')} class={cx('scroll_container_arrow')}>
        <div class={cx('boundcolor')}>
          <div class={cx('bound_btn margin-08')}>
            <i class={cx('material-symbols-outlined icon')}>navigate_next</i>
          </div>
        </div>
        <div class={cx('filter')}></div>
      </div>
    </div>
  );
}

export default ChipBar;
