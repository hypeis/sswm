document.addEventListener('DOMContentLoaded', function() {
	const navItems = document.querySelectorAll('.school_nav ul li');
	const lunboItem = document.querySelector('.school_lunbo ul li');
  
	navItems.forEach((item, index) => {
	  item.addEventListener('click', function() {
		// 移除所有导航项的 "on" 类
		navItems.forEach(nav => nav.classList.remove('on'));
		// 给当前点击的导航项添加 "on" 类
		item.classList.add('on');
  
		// 更新轮播图项的类名
		lunboItem.className = `school_${index + 1}`;
	  });
	});
  
	// 初始化时给第一个导航项添加 "on" 类
	navItems[0].classList.add('on');
  });
  document.addEventListener('DOMContentLoaded', function() {
	const navItems = document.querySelectorAll('.school_nav ul li');
	const lunboItem = document.querySelector('.school_lunbo ul li');
	let currentIndex = 0;
  
	function updateLunbo(index) {
	  // 移除所有导航项的 "on" 类
	  navItems.forEach(nav => nav.classList.remove('on'));
	  // 给当前导航项添加 "on" 类
	  navItems[index].classList.add('on');
  
	  // 更新轮播图项的类名
	  lunboItem.className = `school_${index + 1}`;
	}
  
	function nextLunbo() {
	  currentIndex = (currentIndex + 1) % navItems.length;
	  updateLunbo(currentIndex);
	}
  
	// 初始化时给第一个导航项添加 "on" 类
	updateLunbo(currentIndex);
  
	// 添加点击事件监听器
	navItems.forEach((item, index) => {
	  item.addEventListener('click', function() {
		currentIndex = index;
		updateLunbo(currentIndex);
	  });
	});
  
	// 设置自动切换定时器
	setInterval(nextLunbo, 2600);
  });