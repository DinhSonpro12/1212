import classNames from 'classnames/bind';

import styles from './ComponentIcon.module.scss';
import img_keyboard from '~/assets/img/keyboard.png';
import img_yt from '~/assets/img/yt.png';
import Icon from '../Icon';
const cx = classNames.bind(styles);

function ComponentIcon({ Name, funcVisible, List_menu = null }) {
  var list_user = [
    [
      {
        name: 'Kênh của bạn',
        type: 'account_box',
      },
      {
        name: 'YouTube Studio',
        type: 'token',
      },
      {
        name: 'Chuyển đổi tài khoản',
        type: 'switch_account',
      },
      {
        name: 'Đăng xuất',
        type: 'logout',
      },
    ],
    [
      {
        name: 'Giao dịch mua và gói thành viên',
        type: 'paid',
      },
      {
        name: 'Dữ liệu của bạn trong YouTube',
        type: 'local_police',
      },
    ],
    [
      {
        name: 'Giao diện: Giao diện thiết bị',
        type: 'brightness_3',
      },
      {
        name: 'Ngôn ngữ: Tiếng Việt',
        type: 'translate',
      },
      {
        name: 'Chế độ hạn chế: Đã tắt',
        type: 'admin_panel_settings',
      },
      {
        name: 'Địa điểm: Việt Nam',
        type: 'language',
      },
      {
        name: 'Phím tắt',
        type: 'keyboard',
      },
    ],
    [
      {
        name: 'Cài đặt',
        type: 'settings',
      },
    ],
    [
      {
        name: 'Trợ giúp',
        type: 'help',
      },
      {
        name: 'Gửi ý kiến phản hồi',
        type: 'sms_failed',
      },
    ],
  ];

  var listGuideFooter = [
    [
      'Giới thiệu',
      'Báo chí',
      'Bản quyền',
      'Liên hệ với chúng tôi',
      'Người sáng tạo',
      'Quảng cáo',
      'Nhà phát triển',
      'Điều khoản',
    ],

    ['Quyền riêng tư', 'Chính sách và an toàn', 'Cách YouTube hoạt động', 'Thử các tính năng mới'],
  ];
  //   {
  //     header: '',
  //     arr: [
  //       {
  //         name: 'Trang chủ',
  //         type: 'home',
  //       },
  //       {
  //         name: 'Short',
  //         type: 'token',
  //       },
  //       {
  //         name: 'Kênh đăng kí',
  //         type: 'token',
  //       },
  //     ],
  //   },
  //   {
  //     header: '',
  //     arr: [
  //       {
  //         name: 'Thư viện',
  //         type: 'token',
  //       },
  //       {
  //         name: 'Video đã xem',
  //         type: 'token',
  //       },
  //       {
  //         name: 'Video của bạn',
  //         type: 'token',
  //       },
  //       {
  //         name: 'Xem sau',
  //         type: 'token',
  //       },
  //       {
  //         name: 'Video đã thích',
  //         type: 'token',
  //       },
  //       {
  //         name: 'Thêm',
  //         type: 'expand_more',
  //       },
  //     ],
  //   },
  //   {
  //     header: 'Kênh đăng kí',
  //     arr: [
  //       {
  //         name: 'Nhân tố Y',
  //         path: 'https://yt3.ggpht.com/ytc/AMLnZu9KSLJduZQfVhRt5rrl_ltG5mw4he_6lkrYmg=s88-c-k-c0x00ffffff-no-rj-mo',
  //       },
  //       {
  //         name: 'Nhân tố Y',
  //         path: 'https://yt3.ggpht.com/ytc/AMLnZu9KSLJduZQfVhRt5rrl_ltG5mw4he_6lkrYmg=s88-c-k-c0x00ffffff-no-rj-mo',
  //       },
  //       {
  //         name: 'Nhân tố Y',
  //         path: 'https://yt3.ggpht.com/ytc/AMLnZu9KSLJduZQfVhRt5rrl_ltG5mw4he_6lkrYmg=s88-c-k-c0x00ffffff-no-rj-mo',
  //       },
  //       {
  //         name: 'Nhân tố Y',
  //         path: 'https://yt3.ggpht.com/ytc/AMLnZu9KSLJduZQfVhRt5rrl_ltG5mw4he_6lkrYmg=s88-c-k-c0x00ffffff-no-rj-mo',
  //       },
  //     ],
  //   },
  //   {
  //     header: 'Khám phá',
  //     arr: [
  //       {
  //         name: 'Thịnh hành',
  //         type: 'token',
  //       },
  //       {
  //         name: 'Âm nhạc',
  //         type: 'token',
  //       },
  //       {
  //         name: 'Trò chơi',
  //         type: 'token',
  //       },
  //       {
  //         name: 'Tin tức',
  //         type: 'token',
  //       },
  //       {
  //         name: 'Thể thao',
  //         type: 'token',
  //       },
  //     ],
  //   },
  //   {
  //     header: 'Dịch vụ khác của YouTube',
  //     arr: [
  //       {
  //         name: 'Cài đặt',
  //         type: 'token',
  //       },
  //       {
  //         name: 'Nhật kí báo cáo',
  //         type: 'token',
  //       },
  //       {
  //         name: 'Trợ giúp',
  //         type: 'token',
  //       },
  //       {
  //         name: 'Gửi ý kiến phản hồi',
  //         type: 'token',
  //       },
  //     ],
  //   },
  //   {
  //     header: '',
  //     arr: [
  //       {
  //         name: 'Cài đặt',
  //         type: 'token',
  //       },
  //       {
  //         name: 'Nhật kí báo cáo',
  //         type: 'token',
  //       },
  //       {
  //         name: 'Trợ giúp',
  //         type: 'token',
  //       },
  //       {
  //         name: 'Gửi ý kiến phản hồi',
  //         type: 'token',
  //       },
  //     ],
  //   },
  // ];

  switch (Name) {
    case 'voice':
      return (
        // <!-- của click btn_voice_topbar  -->
        <div class={cx('findvoice')}>
          <div class={cx('findvoice_bound')}>
            <div class={cx('findvoice_bound_title')}>Tìm kiếm bằng giọng nói</div>
            <div class={cx('bound_close')}>
              <div class={cx('bound_btn bgcolor212121')}>
                <i class={cx('material-symbols-outlined icon')}>close</i>
              </div>
            </div>
          </div>

          <div class={cx('findvoice_bound_desc')}>
            <div class={cx('findvoice_desc')}>
              Để tìm kiếm bằng giọng nói, hãy chuyển đến phần cài đặt trong trình duyệt của bạn và cho phép truy cập vào
              micrô
            </div>
          </div>

          <div class={cx('findvoice_bound_voice')}>
            <div class={cx('bound_btn_iconvoice')}>
              <i class={cx('findvoice_icon-voice', 'material-symbols-outlined icon sizeicon-40')}>mic</i>
            </div>
          </div>
        </div>
      );

    case 'create':
      return (
        // {/* <!-- menu --> */}
        <ul class={cx('multi-page-menu')}>
          <li class={cx('multi-page-menu_child')}>
            <i class={cx('material-symbols-outlined icon marginRight-16')}>smart_display</i>
            <p class={cx('')}>Tải video lên</p>
          </li>
          <li class={cx('multi-page-menu_child')}>
            <i class={cx('material-symbols-outlined icon marginRight-16')}>sensors</i>
            <p class={cx('')}>Phát trực tiếp</p>
          </li>
        </ul>
      );

    case 'keyboard':
      return <img src={img_keyboard} alt="" class={cx('virtual_key', 'fixed')} />;

    case 'noti':
      return (
        // <!-- c btn thông báo -->
        <div class={cx('notif')}>
          <div class={cx('notif_header')}>
            <h2 class={cx('notif_header_title', 'paddingLeft-16')}>Thông báo</h2>

            <div class={cx('bound_btn bgcolor282828 marginRight-8')}>
              <i class={cx('material-symbols-outlined icon ')}>settings</i>
            </div>
          </div>

          <div class={cx('notif_bound')}>
            <div class={cx('notif_content')}>
              <div class={cx('new')}>
                <i class={cx('bound_btn', 'new_dot')}></i>
              </div>

              <img
                alt=""
                src="https://www.gstatic.com/images/branding/product/2x/youtube_96in128dp.png"
                class={cx('notif_content_thumbnail')}
              ></img>

              <div class={cx('boundColumn')}>
                <div class={cx('notif_content_message')}>👍 Ai đó đã thích bình luận của bạn: "Th choi làm bẩn vl"</div>
                <p class={cx('notif_content_day')}>3 ngày trước</p>
              </div>
              <img src="https://i.ytimg.com/vi/573K5YictdE/hqdefault.jpg" alt="" class={cx('notif_content_img')} />

              <div class={cx('div')}>
                <i class={cx('notif_content_menu', 'material-symbols-outlined icon')}>more_vert</i>
              </div>
            </div>

            <div class={cx('notif_content')}>
              <div class={cx('new')}>
                <i class={cx('bound_btn', 'new_dot')}></i>
              </div>

              <img
                alt=""
                src="https://yt3.ggpht.com/ytc/AMLnZu8vhMNY22ytJsrtQQ-cRBrnAhmxWFIViuRfnSc=s88-c-k-c0x00ffffff-no-rj"
                class={cx('notif_content_thumbnail')}
              ></img>

              <div class={cx('boundColumn')}>
                <div class={cx('notif_content_message')}>
                  CEtivi đang phát trực tiếp: [UITCARRACING 2022 - BẢNG MỞ RỘNG]: CHẤM ĐIỂM VÒNG 2 ĐỐI KHÁNG
                </div>
                <p class={cx('notif_content_day')}>3 ngày trước</p>
              </div>
              <img src="https://i.ytimg.com/vi/573K5YictdE/hqdefault.jpg" alt="" class={cx('notif_content_img')} />

              <div class={cx('bound40')}>
                <i class={cx('notif_content_menu', 'material-symbols-outlined icon')}>more_vert</i>
              </div>
            </div>
          </div>
        </div>
      );

    case 'user':
      return (
        // thêm for 5
        <div class={cx('menuUser')}>
          {/* <!-- header --> */}
          <div class={cx('menuUser_header')}>
            <div alt="" class={cx('menuUser_header_avatar', 'marginRight-16')}></div>
            <div class={cx('menuUser_header_heading')}>
              <h1>Sơn Đinh Trọng Tùng</h1>
              <h1>@soninhtrongtung6089</h1>
              <a href="">Quản lý Tài khoản Google của bạn</a>
            </div>
          </div>

          <div class={cx('scroll')}>
            <div class={cx('menuUser_bound_menu')}>
              {list_user[0].map((Value, index) => {
                return (
                  <div class={cx('menuUser_scope')}>
                    <i class={cx('material-symbols-outlined marginRight-16 icon')}>{Value.type}</i>
                    <p class={cx('menuUser_scope_name')}>{Value.name}</p>
                  </div>
                );
              })}
            </div>

            {/* {x.map(Value, index) => {
              return(
                Value.map((Value, index) => {
                  return(
                    <div class={cx('menuUser_scope')}>
                    <i class={cx('material-symbols-outlined marginRight-16 icon')}>{Value.type}</i>
                    <p class={cx('menuUser_scope_name')}>{Value.name}</p>
                  </div>
                  )
                })
              )
            }} */}

            <div class={cx('menuUser_bound_menu')}>
              {list_user[1].map((Value, index) => {
                return (
                  <div class={cx('menuUser_scope')}>
                    <i class={cx('material-symbols-outlined marginRight-16 icon')}>{Value.type}</i>
                    <p class={cx('menuUser_scope_name')}>{Value.name}</p>
                  </div>
                );
              })}
            </div>

            <div class={cx('menuUser_bound_menu')}>
              {list_user[2].map((Value, index) => {
                return (
                  <div class={cx('menuUser_scope')}>
                    <i class={cx('material-symbols-outlined marginRight-16 icon')}>{Value.type}</i>
                    <p class={cx('menuUser_scope_name')}>{Value.name}</p>
                  </div>
                );
              })}
            </div>

            <div class={cx('menuUser_bound_menu')}>
              {list_user[3].map((Value, index) => {
                return (
                  <div class={cx('menuUser_scope')}>
                    <i class={cx('material-symbols-outlined marginRight-16 icon')}>{Value.type}</i>
                    <p class={cx('menuUser_scope_name')}>{Value.name}</p>
                  </div>
                );
              })}
            </div>

            <div class={cx('menuUser_bound_menu')}>
              {list_user[4].map((Value, index) => {
                return (
                  <div class={cx('menuUser_scope')}>
                    <i class={cx('material-symbols-outlined marginRight-16 icon')}>{Value.type}</i>
                    <p class={cx('menuUser_scope_name')}>{Value.name}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      );

    case 'menu':
      return (
        // <!-- của menu -->
        <>
          <div class={cx('guidecontent')}>
            <div class={cx('bound', 'guidecontent_header')}>
              <Icon Name="menu" clickk={funcVisible} />
              <img src={img_yt} alt="" class={cx('topbar_thumbnailYT')} />
            </div>

            <div class={cx('guidecontent_scroll')}>
              {console.log(List_menu)}
              {List_menu &&
                List_menu.map((value, index) => {
                  var x;
                  if (value.header == 'Kênh đăng kí') {
                    x = (
                      <div class={cx('menu_scope')}>
                        <h1>{value.header}</h1>
                        {value.arr.map((value, index) => {
                          return (
                            <div class={cx('menu_elem')}>
                              <Icon Name="other" typeIcon="user" path={value.path} />
                              <p class={cx('menuUser_name')}>{value.name}</p>
                            </div>
                          );
                        })}
                        <div class={cx('menu_elem')}>
                          <Icon Name="other" typeIcon="expand_more" />
                          <p class={cx('menuUser_name')}>Thêm</p>
                        </div>
                      </div>
                    );
                  } else {
                    x = (
                      <div class={cx('menu_scope')}>
                        {value.header == '' ? [] : <h1>{value.header}</h1>}
                        {value.arr.map((value, index) => {
                          return (
                            <div class={cx('menu_elem')}>
                              <Icon Name="other" typeIcon={value.type} />
                              <p class={cx('menuUser_name')}>{value.name}</p>
                            </div>
                          );
                        })}
                      </div>
                    );
                  }
                  console.log(x);
                  return x;
                })}

              {/* Footer */}
              <div class={cx('footer')}>
                {listGuideFooter.map((Value, index) => {
                  return (
                    <div id="guide-links-secondary" class={cx('content_bound_menu')}>
                      {listGuideFooter[index].map((Value, index) => {
                        return <a href="">{Value}</a>;
                      })}
                    </div>
                  );
                })}
                <div id={cx('copyright')} class={cx('content_bound_menu')}>
                  © 2022 Google LLC
                </div>
              </div>
            </div>
          </div>
          <div class={cx('opacity')}></div>
        </>
      );

    default:
      return {};
  }
}

export default ComponentIcon;
