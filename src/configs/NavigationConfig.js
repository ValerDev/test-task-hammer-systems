import {
  DashboardOutlined,
  ShoppingCartOutlined,
  ShoppingOutlined,
  UserOutlined,
  PictureOutlined,
  GiftOutlined,
  ShopOutlined,
  UsergroupAddOutlined,
  MailOutlined,
  SettingOutlined,
  MobileOutlined,
  FileTextOutlined

} from '@ant-design/icons';
import { APP_PREFIX_PATH } from 'configs/AppConfig'

const dashBoardNavTree = [
  {
    key: 'main',
    path: `${APP_PREFIX_PATH}/main`,
    title: 'main',
    breadcrumb: false,
    submenu: [
      {
        key: 'main.dashboard',
        path: `${APP_PREFIX_PATH}/main/dashboard`,
        title: 'main.dashboard',
        icon: DashboardOutlined,
        breadcrumb: false,
        submenu: []
      },
      {
        key: 'main.catalog',
        path: `${APP_PREFIX_PATH}/main/catalog`,
        title: 'main.catalog',
        icon: ShoppingCartOutlined,
        breadcrumb: false,
        submenu: [
          {
            key: 'main.catalog.products',
            path: `${APP_PREFIX_PATH}/main/catalog/products`,
            title: 'main.catalog.products',
            breadcrumb: false,
            submenu: []
          },
          {
            key: 'main.catalog.categories',
            path: `${APP_PREFIX_PATH}/main/catalog/categories`,
            title: 'main.catalog.categories',
            breadcrumb: false,
            submenu: []
          },
          {
            key: 'main.catalog.collections',
            path: `${APP_PREFIX_PATH}/main/catalog/collections`,
            title: 'main.catalog.collections',
            breadcrumb: false,
            submenu: []
          },
          {
            key: 'main.catalog.combo',
            path: `${APP_PREFIX_PATH}/main/catalog/combo`,
            title: 'main.catalog.combo',
            breadcrumb: false,
            submenu: []
          }
        ]
      },
      {
        key: 'main.offers',
        path: `${APP_PREFIX_PATH}/main/offers`,
        title: 'main.offers',
        icon: ShoppingOutlined,
        breadcrumb: false,
        submenu: []
      },
      {
        key: 'main.clients',
        path: `${APP_PREFIX_PATH}/main/clients`,
        title: 'main.clients',
        icon: UserOutlined,
        breadcrumb: false,
        submenu: [
          {
            key: 'main.clients.list',
            path: `${APP_PREFIX_PATH}/main/clients/list`,
            title: 'main.clients.list',
            breadcrumb: false,
            submenu: []
          },
          {
            key: 'main.clients.group',
            path: `${APP_PREFIX_PATH}/main/clients/group`,
            title: 'main.clients.group',
            breadcrumb: false,
            submenu: []
          },
        ]
      },
      {
        key: 'main.banners',
        path: `${APP_PREFIX_PATH}/main/banners`,
        title: 'main.banners',
        icon: PictureOutlined,
        breadcrumb: false,
        submenu: []
      },
      {
        key: 'main.promocodes',
        path: `${APP_PREFIX_PATH}/main/promocodes`,
        title: 'main.promocodes',
        icon: GiftOutlined,
        breadcrumb: false,
        submenu: []
      },
      {
        key: 'main.offlinepoints',
        path: `${APP_PREFIX_PATH}/main/offlinepoints`,
        title: 'main.offlinepoints',
        icon: ShopOutlined,
        breadcrumb: false,
        submenu: [
          {
            key: 'main.offlinepoints.addresses',
            path: `${APP_PREFIX_PATH}/main/offlinepoints/addresses`,
            title: 'main.offlinepoints.addresses',
            breadcrumb: false,
            submenu: []
          },
          {
            key: 'main.offlinepoints.geofences',
            path: `${APP_PREFIX_PATH}/main/offlinepoints/geofences`,
            title: 'main.offlinepoints.geofences',
            breadcrumb: false,
            submenu: []
          },
        ]
      },
      {
        key: 'main.collaborators',
        path: `${APP_PREFIX_PATH}/main/collaborators`,
        title: 'main.collaborators',
        icon: UsergroupAddOutlined,
        breadcrumb: false,
        submenu: []
      },
      {
        key: 'main.newsletters',
        path: `${APP_PREFIX_PATH}/main/newsletters`,
        title: 'main.newsletters',
        icon: MailOutlined,
        breadcrumb: false,
        submenu: []
      },
    ]
  },
  {
    key: 'system',
    path: `${APP_PREFIX_PATH}/system`,
    title: 'system',
    breadcrumb: false,
    submenu: [
      {
        key: 'system.settings',
        path: `${APP_PREFIX_PATH}/system/settings`,
        title: 'system.settings',
        icon: SettingOutlined,
        breadcrumb: false,
        submenu: []
      },
      {
        key: 'system.mobileapps',
        path: `${APP_PREFIX_PATH}/system/mobileapps`,
        title: 'system.mobileapps',
        icon: MobileOutlined,
        breadcrumb: false,
        submenu: []
      },
      {
        key: 'system.logs',
        path: `${APP_PREFIX_PATH}/system/logs`,
        title: 'system.logs',
        icon: FileTextOutlined,
        breadcrumb: false,
        submenu: []
      },
    ]
  },
]

const navigationConfig = [
  ...dashBoardNavTree
]

export default navigationConfig;
