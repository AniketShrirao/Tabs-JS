/* Author: Aniket*/

function Tab() {
  var tabHead = document.querySelectorAll(".tablinks li");
  var tabBody = document.querySelectorAll(".tabcontent li");
  var tabLinks = Array.from(tabHead);
  var tabContent = Array.from(tabBody);
  var content;
  tabLinks.forEach(function(el) {
    el.addEventListener("click", TabsofCity);
  });

  function firstActive() {
    for (content in tabContent) {
      tabContent[content].classList.add('hidden');
      if(tabContent[content].id === tabContent[0].id) {
        makeitBlock();
        preActive(tabLinks[content]);
      }
    }
  }
  firstActive();

  function TabsofCity(e) {
    city = e.currentTarget;
    cityName = city.innerText;

    for (content in tabContent) {
      tabContent[content].classList.add('hidden');
      if(tabContent[content].id === cityName) {
        makeitBlock();
      }
    }
    for (var Link in tabLinks) {
      tabLinks[Link].className = tabLinks[Link].className.replace(" tabActive", "");
    }
    makeitActive(e);
  }

  function preActive(currentTabLink) {
    currentTabLink.className += " tabActive";
  }

  function makeitActive(e) {
    e.currentTarget.className += " tabActive";
  }

  function makeitBlock() {
    tabContent[content].classList.remove('hidden');
    tabContent[content].classList.add('visible');
  }
}

Tab();

















