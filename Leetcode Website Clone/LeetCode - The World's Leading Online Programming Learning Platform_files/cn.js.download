// localStorage
var identity = '20210719'
var cnRedirectExpiredAtKey = `cnRedirectExpiredAt_${identity}`;
var redirectStateCacheTime = 60 * 60 * 1000 // 1 hours
var regionSwitcherLastClosedAtKey = `regionSwitcherLastClosedAt_${identity}`;
var bannerHiddenPeriodAfterClose = 24 * 60 * 60 * 1000 // 24 hours

var signInCheckerTimeout = 30 * 1000 // 30 secs

// only do redirect in specific pages
// string and RegExp are both accepted.
// exact match is used for string type.
var bannerRedirectPathnameList = [
  '/',
  /^\/problemset/,
  /^\/problems/,
  /^\/contest/,
]

var disabledPathnameList = [
  /^\/playground\//,
]

var asideId = '#region_switcher';
var asideEle = document.querySelector(asideId)
var afterCheckCnIp = function() {}

var isFromChinaPromise = !!asideEle
  ? new Promise(function(resolve) {
      asideEle.parentNode.removeChild(asideEle)
      resolve(true);
    })
  : new Promise(function(resolve) {
      var ckIpScript = document.createElement('script')
      ckIpScript.type = 'text/javascript'
      ckIpScript.src = `//leetcode.com/api/is_china_ip/?callback=afterCheckCnIp`
      ckIpScript.async = true
      document.head.appendChild(ckIpScript)
      afterCheckCnIp = function(fromChina, _ip) {
        localStorage.setItem("isCnUser", fromChina);
        resolve(fromChina)
      }
    })

var isSignedInPromise = !!window.LeetCodeData
  ? Promise.resolve(LeetCodeData.userStatus.isSignedIn)
  : new Promise(function(resolve) {
      var times = signInCheckerTimeout / 100;
      var checkIfHasAuthLinks = function() {
        if (document.querySelector('div[class*="auth-links"]')) {
          resolve(false);
          return;
        }
        if (document.querySelector('svg[class*="account-icon"]')) {
          resolve(true);
          return;
        }
        times -= 1;
        if (times === 0) {
          resolve(false);
          return;
        }
        setTimeout(function() {
          checkIfHasAuthLinks();
        }, 100);
      }

      checkIfHasAuthLinks();
    })

;Promise.all([isFromChinaPromise, isSignedInPromise]).then(function([fromChina, isSignedIn]) {
  if (!fromChina && !window.cnJsDebug) {
    return
  }

  // after getting both `fromChina` and `isSignedIn` information
  if (!isSignedIn && shouldRedirectToCn()) {
    autoRedirect2China()
  }

  // if it's landing page, add some additional styles for cn users
  if (window.location.pathname === '/' && !isSignedIn && fromChina) {
    var style = document.createElement('style')
    style.innerHTML = `
      #lc_navbar {
        display: block!important;
        margin-bottom: 0!important;
      }
      #landing-page-app {
        overflow: hidden;
      }
      #lc_navbar > .container {
        display: none;
      }
      @media (max-width: 768px){
        #lc_navbar > .container {
          display: block;
        }
        #landing-page-app {
          padding-top: 160px;
        }
      }
    `
    document.head.appendChild(style)
  }

  if (shouldShowBanner()) {
    renderTransfer2CnBar(isSignedIn, 3);
  }
})

function autoRedirect2China() {
  console.info('前往中文站...');
  localStorage.setItem(cnRedirectExpiredAtKey, new Date(Date.now() + redirectStateCacheTime).toISOString());
  var redirectingPath = getRedirectingPath()
  window.location.href = `https://leetcode-cn.com${redirectingPath}?utm_source=LCUS&utm_medium=ip_redirect&utm_campaign=transfer2china`
}

function getRedirectingPath(pathname) {
  pathname = pathname || window.location.pathname
  for (var i = 0; i < bannerRedirectPathnameList.length; i++) {
    var pattern = bannerRedirectPathnameList[i];
    if (typeof pattern === 'string' && pathname === pattern) {
      return pathname;
    } else if (pattern.test && pattern.test(pathname)) {
      return pathname;
    }
  }
  return '/';
}

function shouldRedirectToCn() {
	if (window.location.pathname.startsWith('/playground/')) {
		return false;
	}

	if (window.location.pathname.startsWith('/subscribe') && window.location.search.includes("ref")) {
		return false;
	}

  var cnRedirectExpiredAt = localStorage.getItem(cnRedirectExpiredAtKey)
  if (!cnRedirectExpiredAt) {
    return true;
  }
  return new Date() > new Date(cnRedirectExpiredAt);
}

function shouldShowBanner() {
  var regionSwitcherLastClosedAt = localStorage.getItem(regionSwitcherLastClosedAtKey)
  if (!regionSwitcherLastClosedAt) {
    return true;
  }
  return Date.now() > new Date(regionSwitcherLastClosedAt).valueOf() + bannerHiddenPeriodAfterClose;
}

function renderTransfer2CnBar(isSignedIn, retryCount) {
  var utmLink = "?utm_source=LCUS&utm_medium=new_banner_click&utm_campaign=transfer2china";
  var newPgBanner = document.createElement("div");
  newPgBanner.id = "cn-banner";
  newPgBanner.innerHTML = `
  <style>
  @media (min-width: 768px){
    .navbar {
      height: initial !important;
    }
  }
  #cn-banner {
    padding-top: 10px;
    position: relative;
    z-index: 500;
  }
  #cn-banner.hide {
    display: none;
  }
  #cn-banner {
    width: 100%;
    background: white;
    margin-top: -1px;
    border-bottom: 1px solid rgba(0,0,0,0.07);
  }
  #cn-banner .banner-inner {
    max-width: 1240px;
    width: 100%;
    margin: 0 auto;
  }
  #cn-banner a {
    color: #263238;
  }
  #cn-banner a:hover {
    opacity: 0.7;
  }
  .ba-img {
    height: 55px;
    position: absolute;
    bottom: 0;
    left: 20px;
  }
  .cn-close-btn {
    position: absolute;
    font-weight: bold;
    font-size: 14px;
    top: 10px;
    right: 10px;
    border-radius: 50px;
    height: 20px;
    width: 20px;
    background: rgba(0,0,0,0.2);
    color: white;
    line-height: 1.3;
    text-align: center;
    cursor: pointer;
    transition: 0.6s all;
  }
  .cn-close-btn:hover {
    background: rgba(0,0,0,0.7);
  }
  [data-original-title*="Taiwan"],
  [data-original-title*="China"] {
    opacity: 0;
    display: none;
  }
  </style>
  <div class="banner-inner">
    <div style="position: relative; height: 100%; width: 100%;">
      <a href="https://support.leetcode-cn.com/hc/kb/article/1286274/${utmLink}&utm_content=img">
        <img class="ba-img" src="https://assets.leetcode-cn.com/lccn-resources/profile.svg" />
      </a>
      <div style="margin-left: 170px">
        <div>
          力扣「<a href="https://leetcode-cn.com/problemset/all/${utmLink}&utm_content=title_main" style="font-weight: bold;">中文社区</a>」现已上线，
          全新「<a href="https://support.leetcode-cn.com/hc/kb/article/1286061/${utmLink}&utm_content=title_profile_help" style="font-weight: bold;">个人主页</a>」更优体验，
          <a href="https://leetcode-cn.com/problemset/all/${utmLink}&utm_content=title_go">即刻加入先人一步攒积分！</a>
        </div>
        <div style="font-size: 12px; margin-top: 5px; margin-bottom: 10px;">
          <span style="opacity: 0.7;">新功能推荐：
            <a href="https://leetcode-cn.com/store/${utmLink}&utm_content=sub_store" style="color: rgba(239,108,0,1); font-weight: bold;">🎁 全新积分商场礼品</a> &nbsp;| &nbsp;
            <a href="https://support.leetcode-cn.com/hc/kb/article/1277893/${utmLink}&utm_content=sub_solution" >上万社区题解</a> &nbsp;| &nbsp;
            <a href="https://support.leetcode-cn.com/hc/kb/article/1278078/${utmLink}&utm_content=sub_company" >企业题库</a> &nbsp;| &nbsp;
            <a href="https://support.leetcode-cn.com/hc/kb/article/1278079/${utmLink}&utm_content=sub_mock" >面试模拟</a> &nbsp;| &nbsp;
            <a href="https://leetcode-cn.com/contest/${utmLink}&utm_content=sub_contest" >更多竞赛</a> &nbsp;| &nbsp;
            <a href="https://support.leetcode-cn.com/hc/kb/article/1252597/${utmLink}&utm_content=sub_sync" style="color: rgba(239,108,0,1);">轻松数据同步使用已有积分</a>
          </span>
        </div>
      </div>

      <div class="cn-close-btn" onclick="closeCnButton()">×</div>
    </div>
  </div>
  `;
  var containerElement;
  var navElement;
  // landing page
  if (location.pathname === '/' && !isSignedIn) {
    containerElement = document.querySelector('#landing-page-app');
    containerElement && containerElement.insertBefore(newPgBanner, containerElement.children[0]);
  }
  // question detail pages
  else if (location.pathname.match(/^\/problems\//)) {
    containerElement = document.querySelector('body > #app > div[class*="layout"]');
    containerElement && containerElement.insertBefore(newPgBanner, containerElement.children[1]);
  } else {
    containerElement = document.querySelector('#navbar-root, #profile-root');
    containerElement && containerElement.insertBefore(newPgBanner, containerElement.children[0]);
  }
  // discuss / mock
  if (!containerElement) {
    navElement = document.querySelector('#app > div > div > [class*=navbar__], #app > div > [class*=navbar__]');
    navElement && navElement.parentNode.insertBefore(newPgBanner, navElement);
  }
  if (!containerElement && !navElement) {
    console.info('cannot find target container.')
    if (retryCount !== 0) {
      setTimeout(function() {
        renderTransfer2CnBar(isSignedIn, retryCount - 1)
      }, 1000)
    }
  }
}

function closeCnButton(){
  localStorage.setItem(regionSwitcherLastClosedAtKey, new Date().toISOString());
  var banner = document.querySelector('#cn-banner');
  banner.parentNode.removeChild(banner);
}

// contest flag problem
renderCnFlags()

function renderCnFlags(counter) {
  counter = counter || 0
  setTimeout(function() {
    var result = replaceCnFlagUrls()
    if (!result && counter < 20) {
      renderCnFlags(counter + 1)
    }
  }, 500)
}

function replaceCnFlagUrls() {
  var nodes = document.querySelectorAll('.contest-home-base .country-name span');
  if (!nodes) {
    return false;
  }
  nodes = document.querySelectorAll('.contest-home-base .country-name[data-original-title="中国"] span');
  if (!nodes) {
    return true;
  }
  for (var i = 0; i < nodes.length; i++) {
    // sample:
    // - before: url("https://cdnjs.cloudflare.com/ajax/libs/flag-icon-css/2.8.0/flags/4x3/.svg")
    // - after: url("https://cdnjs.cloudflare.com/ajax/libs/flag-icon-css/2.8.0/flags/4x3/cn.svg")
    nodes[i].style.backgroundImage = nodes[i].style.backgroundImage.replace(`/.svg")`, `/cn.svg")`)
  }
  return true
}
