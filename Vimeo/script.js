var isBrowserChrome = (function (window) {
    return window.navigator.userAgent.includes('Chrome') && window.navigator.vendor.includes('Google Inc');
})(window);

var isBrowserIE = (function (window) {
    return /(MSIE|Trident|Edge)/.test(window.navigator.userAgent);
})(window);

// IE fix for Dropdown menu
(function () {
    const dropDownSelector = '.topnav_desktop_menu_items_dropdown';
    const dropDownEle = document.querySelector(dropDownSelector);
    if (isBrowserIE) {
        dropDownEle.classList.add('column_flex');
    }
})();

(function (window) {
    const bannerSelector = '.highlights_banner';
    const bannerTextSelector = '.highlights_banner .banner_main_text ' + (isBrowserChrome ? '.chrome' : '.not_chrome');
    const bannerEle = document.querySelector(bannerSelector);
    const bannerTextEle = document.querySelector(bannerTextSelector);
    if (bannerEle && isBrowserIE) {
        bannerEle.classList.add('hide');
        return;
    }
    if (bannerTextEle) {
        bannerTextEle.classList.remove('hide');
    }
})(window);

function handleNewVideoClick() {
    if (window.vimeo && window.vimeo.cur_user) {
        if (window.location.pathname !== '/upload') {
            window.location.href = '/upload';
        }
    } else {
        window.vimeo.Modal.create({ size: 'xsmall', content: '/join?modal=new&redirect=/upload' })
            .then(completeUserLogin);
    }
}

function handleBannerButtonClick() {
    if (isBrowserChrome) {
        if (window) {
            window.location.href = 'https://chrome.google.com/webstore/detail/vimeo-record-screen-webca/ejfmffkmeigkphomnpabpdabfddeadcb';
            if (window.__fa) {
                window.__fa.push(['trackEvent', {
                    container: 'top_nav',
                    type: 'click',
                    component: 'features_highlight',
                    target: 'https://chrome.google.com/webstore/detail/vimeo-record-screen-webca/ejfmffkmeigkphomnpabpdabfddeadcb',
                    keyword: 'vimeo_record:_video_messaging_for_teams'
                }]);
            }
        }
    }
    else {
        if (window.__fa) {
            window.__fa.push(['trackEvent', {
                container: 'top_nav',
                type: 'click',
                component: 'features_highlight',
                target: '/create/templates',
                keyword: 'vimeo_create'
            }]);
        }
        window.vimeo.Modal.create({
            size: 'xsmall',
            content: `/join?modal=new&redirect=${encodeURIComponent("/welcome-survey?type=segment&vimeoHref=create_templates")}`
        }).then(completeUserLogin);
    }
}

function handleCreateVideoClick(e, isRecordScreen) {
    isRecordScreen = isRecordScreen ?? false;
    if (window.vimeo && !window.vimeo.cur_user) {
        if (!isRecordScreen) {
            e.preventDefault();

            window.vimeo.Modal.create({
                size: 'xsmall',
                content: `/join?modal=new&redirect=${encodeURIComponent("/welcome-survey?type=segment&vimeoHref=create_templates")}`
            }).then(completeUserLogin);
        }
    }
}

function handleWebinarClick(e) {
    if (window.vimeo && !window.vimeo.cur_user) {
        // TODO
    }
}

function trackFeatureDropdownImpression(hasBanner) {
    if (window && window.__fa && hasBanner) {
        if (isBrowserChrome) {
            window.__fa.push(['trackEvent', {
                type: 'impression',
                container: 'top_nav',
                component: 'features_menu',
                keyword: 'record_highlight',
            }]);
        } else {
            window.__fa.push(['trackEvent', {
                type: 'impression',
                container: 'top_nav',
                component: 'features_menu',
                keyword: 'create_highlight',
            }]);
        }
    }
}

function trackNewVideoDropdownImpression(recordOption) {
    if (window.__fa) {
        window.__fa.push(['trackEvent', {
            type: 'impression',
            container: 'top_nav',
            component: 'new_video',
        }]);

        if (recordOption) {
            window.__fa.push(['trackEvent', {
                type: 'impression',
                container: 'top_nav',
                component: 'record',
                keyword: recordOption,
            }]);
        }
    }
}

function trackCreateLiveImpressionForSubscribedUsers(isShown) {
    if (window.__fa) {
        window.__fa.push(['trackEvent', {
            type: 'impression',
            container: 'top_nav',
            component: 'create_live_event',
            keyword: isShown ? 'variant_create_event' : 'control'
        }]);
    }
}