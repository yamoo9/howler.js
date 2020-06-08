var modal = document.querySelector('.modal');
var modalFrame = document.querySelector('.modal-frame');
var modalClose = document.querySelector('.modal-close');
var modalTitle = document.querySelector('.modal-title');
(function() {
  var counter = document.querySelector('.stargazers');
  var xhr = new XMLHttpRequest();
  xhr.open('GET', 'https://api.github.com/repos/goldfire/howler.js', true);
  xhr.onload = function() {
    var res = xhr.response;
    var count = 0;
    try {
      count = JSON.parse(xhr.response).stargazers_count;
    } catch (e) {}
    counter.innerText =
      (count
        ? count.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
        : '14,000+') + '명이 좋아해요!';
  };
  xhr.onerror = function() {
    counter.innerText = '16,000+ 명이 좋아해요!';
  };
  xhr.send();
})();
function showDemo(id) {
  if (id === 6) {
    window.location =
      'https://github.com/yamoo9/howler.js/tree/master/examples';
    return;
  }
  var uri = 'https://howlerjs.com/assets/howler.js/examples/';
  if (id === 1) {
    uri += 'player/';
    modalTitle.innerText = '뮤직 플레이어 (Music Player)';
  } else if (id === 2) {
    uri += 'radio/';
    modalTitle.innerText = '라이브 라디오 (Live Radio)';
  } else if (id === 3) {
    uri += 'sprite/';
    modalTitle.innerText = '오디오 스프라이트 (Audio Sprites)';
  } else if (id === 4) {
    uri += '3d/';
    modalTitle.innerText = '스페이셜 오디오 (Spatial Audio)';
  } else if (id === 5) {
    uri = 'https://howlerjs.com/assets/howler.js/tests/';
    modalTitle.innerText = '오디오 컨트롤 테스트 (Basic Functions)';
  }
  modal.className = 'modal fadein';
  modal.style.display = '-webkit-box';
  modal.style.display = '-webkit-flex';
  modal.style.display = '-ms-flexbox';
  modal.style.display = 'flex';
  var iframe = document.createElement('iframe');
  iframe.src = uri;
  modalFrame.appendChild(iframe);
  iframe.focus();
}
(function() {
  var demos = [ 'player', 'radio', 'sprite', 'spatial', 'basic', 'code' ];
  demos.forEach(function(selector, index) {
    var demo = document.querySelector('.' + selector);
    if (demo) {
      demo.addEventListener('click', function(e) {
        e.preventDefault();
        showDemo(index + 1);
      });
    }
  });
  if (modalClose) {
    modalClose.addEventListener('click', function() {
      modal.className = 'modal fadeout';
      setTimeout(function() {
        var iframe = document.querySelector('.modal iframe');
        modal.style.display = 'none';
        iframe.src = 'about:blank';
        modalFrame.removeChild(iframe);
        if (
          window.location.hash &&
          window.location.hash !== '' &&
          window.history &&
          window.history.pushState
        ) {
          window.history.pushState(null, null, '.');
        }
      }, 500);
    });
  }
  var hash = (window.location.hash + '').replace('#', '');
  if (hash && hash.match(/player|radio|sprite|spatial|basic/)) {
    showDemo(demos.indexOf(hash) + 1);
  }
})();
