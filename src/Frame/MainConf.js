export default {
	// 基本配置
	/*
	* 顶部栏左侧的logo
	* logoUrl 可以是绝对路径,也可以是相对路径,如果是相对路径,图片文件必须在 src/Images 目录下
	* 且路径必须以 '/Images/' 开头,如 '/Images/xxx.png'
	* */
	logoUrl: '/Images/logo2.png',
	// logoText: '材联合采购',                          // 顶部栏左侧的logo文字
	// projectName: '耗材联采限价采购-宁德耗材联合谈判',  // 顶部栏左侧显示的 项目名称
	logoText: '株洲商务局报表',                          // 顶部栏左侧的logo文字
	projectName: '株洲商务局和粮食局报表平台',  // 顶部栏左侧显示的 项目名称
	user: {
		// company: '宁德市药械联合限价采购平台',     // 客户所在单位
		company: '株洲商务局和粮食局报表平台',     // 客户所在单位
		name: '张三丰',                          // 当前登陆的用户名称
		avatar: '/Images/default.jpg',     // 当前登陆的用户头像 (用法同 logoUrl)
	},

	// 列表配置
	// 菜单列表
	menu: [
		{
			title: '主菜单1',           // 一级菜单名称
			icon: 'el-icon-location',  // 一级菜单 icon
			menuId: '1',                // 索引(必须唯一，是字符串)
			sub: [                     // 子菜单(二级菜单)
				{
					title: '子菜单1-1',      // 菜单名称
					component: 'hello1',   // 点击菜单打开的组件名称
					menuId: '1-1'           // 索引 (用于识别当前打开的tab,必须唯一，是字符串)
				},
				{title: '子菜单1-2', component: 'index', menuId: '1-2'},
				{title: '子菜单1-3', component: 'hello3', menuId: '1-3'}
			]
		},

		{
			title: '主菜单2',
			icon: 'el-icon-menu',
			menuId: '2',
			sub: [
				{title: '子菜单2-1', component: 'hello1', menuId: '2-1'},
				{title: '子菜单2-2', component: 'hello2', menuId: '2-2'},
				{title: '子菜单2-3', component: 'hello3', menuId: '2-3'}
			]
		},

		{
			title: '主菜单3',
			icon: 'el-icon-document',
			menuId: '3',
			sub: [
				{title: '子菜单3-1', component: 'hello1', menuId: '3-1'},
				{title: '子菜单3-2', component: 'hello2', menuId: '3-2'},
				{title: '子菜单3-3', component: 'hello3', menuId: '3-3'}
			]
		},

		{
			title: '主菜单4',
			icon: 'el-icon-setting',
			menuId: '4',
			sub: [
				{title: '子菜单4-1', component: 'hello1', menuId: '4-1'},
				{title: '子菜单4-2', component: 'hello2', menuId: '4-2'},
				{title: '子菜单4-3', component: 'hello3', menuId: '4-3'}
			]
		},
	],
	// 收藏列表  字段说明同 [菜单列表]
	favor: [
		{title: '子菜单1-1', component: 'hello1', menuId: '1-1'},
		{title: '子菜单1-2', component: 'hello2', menuId: '1-2'},
		{title: '子菜单1-3', component: 'hello3', menuId: '1-3'},
		{title: '子菜单2-1', component: 'hello1', menuId: '2-1'},
		{title: '子菜单2-2', component: 'hello2', menuId: '2-2'},
		{title: '子菜单2-3', component: 'hello3', menuId: '2-3'}
	],

	// 应用列表
	application: [
		{
			title: '应用1：组件管理',
			divided: false,
			url: '/',
		},
		{
			title: '应用2：注册证管理',
			divided: false,
			url: '/',
		},
		{
			title: '应用3：产品管理',
			divided: false,
			url: '/',
		},
		{
			title: '返回应用中心',        // 显示名称
			divided: true,              // 分割线
			url: 'http://www.baidu.com', // 跳转地址
			icon: 'el-icon-arrow-left'  // 图标（可选）
		}
	],

	// 主页 tab 配置
	homeTab: {
		title: '首页',                     //  tab 显示标题
		menuId: 'home',                   //  tab 内部名称(用来识别当前打开的tab)
		components: [{path: 'home'}],     //  tab 对应的组件
	},

	// 函数配置

	/**
	 * 页面初始化
	 */
	onInit () {
	},
	/**
	 * 页面挂载
	 */
	onShow () {
	},
	/**
	 * 页面销毁
	 */
	onDistory () {
	},

	/**
	 * 搜索
	 * @param key  搜索关键字
	 */
	onSearch (key) {
	},
	/**
	 * 修改密码
	 */
	onEditPassword () {
	},
	/**
	 * 查看用户基本信息
	 */
	onViewBaseInfo () {
	},
	/**
	 * 绑定手机
	 */
	onBindPhone () {
	},
	/**
	 * 查看操作日志
	 */
	onViewOperateLog () {
	},
	/**
	 * 退出系统
	 */
	onExit () {
	},
	/**
	 * 添加收藏
	 * @param item  Object 要添加的菜单项
	 */
	addCollect (item) {
	},
	/**
	 * 取消收藏
	 * @param item  Object 要取消的菜单项
	 */
	removeCollect (item) {
	}


}
