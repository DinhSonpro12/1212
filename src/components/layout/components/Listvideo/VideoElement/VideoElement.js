import classNames from 'classnames/bind';

import styles from './VideoElement.module.scss';

const cx = classNames.bind(styles);

function VideoElement({ boolean = true, videoProperties }) {
  function handleTime(time) {
    // Đối tượng thời gian hiện tại
    var a = (new Date() - new Date(videoProperties.time)) / 60000; // phút

    var arr = [
      { value: 1, name: 'phút' },
      { value: 60, name: 'giờ' },
      { value: 24 * 60, name: 'ngày' },
      { value: 30 * 24 * 60, name: 'tháng' },
      { value: 12 * 30 * 24 * 60, name: 'năm' },
    ];
    var b = arr.find((value, i) => {
      return a / value.value < 1;
    });

    if (b === undefined) {
      return Math.floor(a / (12 * 30 * 24 * 60)) + ' năm';
    } else if (b.value == 1) {
      return '1 phút';
    } else {
      var c;
      // var c = arr.find((val) => val.value == b.value);
      for (let i = 1; i < 5; i++) {
        if (arr[i].value == b.value) {
          c = arr[i - 1];
        }
      }

      return `${Math.floor(a / c.value)} ${c.name}`;
    }
  }
  function handleView(views) {
    // 1.000 1.000.000 1.000.000.000
    if (views > 10 ** 9) {
      if ((views / 10 ** 9).toFixed(1) % 1 == 0) {
        return `${Math.floor(views / 10 ** 9)} T`;
      } else {
        return `${(views / 10 ** 9).toFixed(1)} T`;
      }
    } else if (views > 10 ** 6) {
      if ((views / 10 ** 6).toFixed(1) % 1 == 0) {
        return `${Math.floor(views / 10 ** 6)} Tr`;
      } else {
        return `${(views / 10 ** 6).toFixed(1)} Tr`;
      }
    } else if (views > 1000) {
      return `${Math.floor(views / 1000)} N`;
    } else {
      return views;
    }
    return views;
  }

  return (
    <>
      {/* element null */}
      {!boolean && <div class={cx('video_item')}></div>}

      {/* element normal */}

      {boolean && (
        <div class={cx('video_item')}>
          <img class={cx('video_item-thumbnail')} src={videoProperties.channel.avatar} />

          <div class={cx('bound', 'video_item-contet')}>
            <img class={cx(' bound_btn', 'align-self-flexstart', 'img')} src={videoProperties.channel.thumbnail_img} />

            <div class={cx('para')}>
              <h1 className={cx('heading')}>{videoProperties.title}</h1>
              <div>
                <div class={cx('bound', 'flex-start')}>
                  <a className={cx('channel')} href="">
                    {videoProperties.channel.name}
                  </a>
                  <i class={cx('material-symbols-outlined icon', 'icon-listv')}>{videoProperties.channel.icon}</i>
                </div>

                <div class={cx('bound', 'flex-start')}>
                  <p className={cx('parag')}>{handleView(videoProperties.views)} lượt xem</p>
                  <i class={cx('dot')}></i>
                  <p className={cx('parag')}>{handleTime(videoProperties.time)} trước</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default VideoElement;
