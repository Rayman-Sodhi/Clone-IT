var mainNavListItemsMap = {
  "income-tax": "income-tax-overlay", "gst": "gst-overlay", "personal-finance": "personal-finance-overlay", "business-compliance": "business-compliance-overlay",
};
var mobileNavigationData = {
  "containerId": "mobile-navigation-container",
  "id": "mobile-navigation",
  "navListItemsMap": {
    "taxFileSaveMobile": "taxFileSaveMobileSubNav", "caLegalServicesMobile": "caLegalServicesMobileSubNav", "gstBillingMobile": "gstBillingMobileSubNav",
  },
  "mobileNavigationTriggers": {
    "mobile-menu-trigger": true,
    "close-button": false,
    "mobile-navigation-container": false
  }
};

; (function attachNavigationEventListeners(navListItemsMap, mobileNavigationData) {
  if (!navListItemsMap) return;
  var MOUSE_ENTER_TIMEOUT = 200;
  var MOUSE_LEAVE_TIMEOUT = 210;
  var key, item, overlayTarget, shouldOpen,
    accordionTrigger, accordionTarget, timer;

  var mobileNavListItemsMap = mobileNavigationData.navListItemsMap,
    mobileNavigationTriggers = mobileNavigationData.mobileNavigationTriggers,
    mobileNavigationContainer = document.getElementById(mobileNavigationData.containerId),
    mobileNavigation = document.getElementById(mobileNavigationData.id);

  function addClassExceptActive(classes, currentClass) {
    if (currentClass !== 'active') classes.unshift(currentClass);
    return classes;
  }

  function addClassExceptNoScroll(classes, currentClass) {
    if (currentClass !== 'no-scroll') classes.unshift(currentClass);
    return classes;
  }

  function mouseEnterHandler(item, overlayTarget) {
    timer = window.setTimeout(function setActiveClasses() {
      var itemClasses =
        String(item.className)
          .split(' ')
          .reduce(addClassExceptActive, ['active'])
          .join(' ');
      var overlayClasses =
        String(overlayTarget.className)
          .split(' ')
          .reduce(addClassExceptActive, ['active'])
          .join(' ');
      item.className = itemClasses;
      overlayTarget.className = overlayClasses;
    }, MOUSE_ENTER_TIMEOUT);
  }

  function mouseLeaveHandler(item, overlayTarget, event) {
    window.clearTimeout(timer);
    if ((event.target === item && !overlayTarget.contains(event.relatedTarget))
      || (event.target === overlayTarget && !item.contains(event.relatedTarget))) {
      window.setTimeout(function unsetActiveClasses() {
        var itemClasses =
          String(item.className)
            .split(' ')
            .reduce(addClassExceptActive, [])
            .join(' ');
        var overlayClasses =
          String(overlayTarget.className)
            .split(' ')
            .reduce(addClassExceptActive, [])
            .join(' ');
        item.className = itemClasses;
        overlayTarget.className = overlayClasses;
      }, MOUSE_LEAVE_TIMEOUT);
    }
  }

  function toggleAccordionStates(trigger, target, accordionsMap, event) {
    event && event.preventDefault();
    var isActive = String(trigger.className).indexOf('active') !== -1;
    var key, acc, accTarget;

    for (key in accordionsMap) {
      acc = document.getElementById(key);
      accTarget = document.getElementById(accordionsMap[key]);

      if (!acc || !accTarget) break;

      if (acc === trigger) {
        acc.className =
          String(acc.className)
            .split(' ')
            .reduce(addClassExceptActive, isActive ? [] : ['active'])
            .join(' ');
        accTarget.className =
          String(accTarget.className)
            .split(' ')
            .reduce(addClassExceptActive, isActive ? [] : ['active'])
            .join(' ');
      } else {
        acc.className =
          String(acc.className)
            .split(' ')
            .reduce(addClassExceptActive, [])
            .join(' ');
        accTarget.className =
          String(accTarget.className)
            .split(' ')
            .reduce(addClassExceptActive, [])
            .join(' ');
      }
    }
  }

  function openMobileNavigation(mobileNavContainer, event) {
    if (mobileNavContainer) {
      event && event.preventDefault();
      mobileNavContainer.className =
        String(mobileNavContainer.className)
          .split(' ')
          .reduce(addClassExceptActive, ['active'])
          .join(' ');
      document.body.className =
        String(document.body.className)
          .split(' ')
          .reduce(addClassExceptNoScroll, ['no-scroll'])
          .join(' ');
    }
  }

  function closeMobileNavigation(mobileNavContainer, event) {
    if (mobileNavContainer) {
      event && event.preventDefault();
      mobileNavContainer.className =
        String(mobileNavContainer.className)
          .split(' ')
          .reduce(addClassExceptActive, [])
          .join(' ');
      document.body.className =
        String(document.body.className)
          .split(' ')
          .reduce(addClassExceptNoScroll, [])
          .join(' ');
    }
  }

  for (key in navListItemsMap) {
    item = document.getElementById(key);
    overlayTarget = document.getElementById(navListItemsMap[key]);
    if (!item || !overlayTarget) break;

    item.addEventListener('mouseenter', mouseEnterHandler.bind(null, item, overlayTarget));
    item.addEventListener('mouseleave', mouseLeaveHandler.bind(null, item, overlayTarget));
    overlayTarget.addEventListener('mouseleave', mouseLeaveHandler.bind(null, item, overlayTarget));
  }

  for (key in mobileNavListItemsMap) {
    accordionTrigger = document.getElementById(key);
    accordionTarget = document.getElementById(mobileNavListItemsMap[key]);
    if (!accordionTrigger || !accordionTarget) break;

    accordionTrigger.addEventListener('click', toggleAccordionStates.bind(null, accordionTrigger, accordionTarget, mobileNavListItemsMap));
  }

  if (mobileNavigationContainer) {
    for (key in mobileNavigationTriggers) {
      item = document.getElementById(key);
      shouldOpen = mobileNavigationTriggers[key] === true;

      if (!item) break;

      item.addEventListener('click',
        shouldOpen
          ? openMobileNavigation.bind(null, mobileNavigationContainer)
          : closeMobileNavigation.bind(null, mobileNavigationContainer));
    }
  }
  if (mobileNavigation) {
    mobileNavigation.addEventListener('click', function (event) {
      event && event.stopPropagation();
    });
  }
})(window.mainNavListItemsMap, window.mobileNavigationData);



var $menu = $(".show-anchors");

// jQuery-menu-aim: <meaningful part of the example>
// Hook up events to be fired on menu row activation.
$menu.menuAim({
  activate: activateSubmenu,
  deactivate: deactivateSubmenu
});
// jQuery-menu-aim: </meaningful part of the example>

// jQuery-menu-aim: the following JS is used to show and hide the submenu
// contents. Again, this can be done in any number of ways. jQuery-menu-aim
// doesn't care how you do this, it just fires the activate and deactivate
// events at the right times so you know when to show and hide your submenus.
function activateSubmenu(row) {
  var $row = $(row),
      submenuId = $row.data("submenuId"),
      $submenu = $("#" + submenuId),
      height = $menu.outerHeight(),
      width = $menu.outerWidth();

  // Show the submenu
  $submenu.css({
    display: "block"
  });

  // Keep the currently activated row's highlighted look
  $row.find("a").addClass("maintainHover");
}

function deactivateSubmenu(row) {
  var $row = $(row),
      submenuId = $row.data("submenuId"),
      $submenu = $("#" + submenuId);

  // Hide the submenu and remove the row's highlighted look
  $submenu.css("display", "none");
  $row.find("a").removeClass("maintainHover");
}

$(document).click(function() {
  // Simply hide the submenu on any click. Again, this is just a hacked
  // together menu/submenu structure to show the use of jQuery-menu-aim.
  $(".popover").css("display", "none");
  $("a.maintainHover").removeClass("maintainHover");
});