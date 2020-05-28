<!-- 이미지 -->
[![howler.js](https://s3.amazonaws.com/howler.js/howler-logo.png "howler.js")](https://howlerjs.com)

<br>

# howler.js
[howler.js](https://howlerjs.com)는 **모던 웹 오디오 라이브러리**입니다. 기본적으로 [Web Audio API](http://webaudio.github.io/web-audio-api/)로 작동되며, [HTML5 Audio](https://html.spec.whatwg.org/multipage/embedded-content.html#the-audio-element)로 대체(Fallback)되어 **모든 플랫폼에서 JavaScript로 오디오 작업을 쉽고 안정적으로 수행**할 수 있습니다.

[howlerjs.com](https://howlerjs.com)에서 추가 정보 및 라이브 데모, 사용자 쇼케이스를 살펴보거나, [@GoldFireStudios](https://twitter.com/goldfirestudios) 트위터를 팔로우하여 howler.js 개발에 관해 이야기를 나눌 수 있습니다.

### 기능 

* 모든 오디오를 처리하는 단 하나의 API (단순성)
* 기본적으로 Web Audio API로 작동되며, HTML5 Audio로 대체 (호환성)
* 작동 환경 전반에 걸친 엣지 케이스(edge cases) 및 버그 처리
* 브라우저 간 완벽 호환을 목표로 하는 모든 코덱(codecs) 지원
* 성능 향상을 목적으로 자동 캐싱(automatic caching) 지원
* 전역(globally), 그룹(group) 또는 개별(indivisial) 사운드 제어
* 다수의 사운드(multiple sounds)를 한 번에 재생(playback)
* 쉬운 사운드 스프라이트(sound sprite) 정의 및 재생
* 페이딩(fading), 레이트(rate), 탐색(seek), 볼륨(volume) 등 모든 컨트롤 지원
* 3D 공간 사운드(spatial sound) 또는 스트레오 패닝(stereo panning) 지원
* 모듈러(Modular) - 필요한 것을 조립 구성하거나, 손쉽게 확장
* 외부 의존성(dependencies)이 없으며, 순수한 JavaScript로 구성됨
* 7kb(gzip 압축)로 매우 가벼움

### 브라우저 호환성

다음 브라우저/버전에서 테스트되었습니다.

* Google Chrome 7.0+
* Internet Explorer 9.0+
* Microsoft Edge
* Firefox 4.0+
* Safari 5.1.4+
* Mobile Safari 6.0+ (after user input)
* Opera 12.0+

### 라이브 데모
* [오디오 플레이어 (Audio Player)](https://howlerjs.com/#player)
* [라디오 (Radio)](https://howlerjs.com/#radio)
* [공간 사운드 (Spatial Audio)](https://howlerjs.com/#spatial)
* [오디오 스프라이트 (Audio Sprites)](https://howlerjs.com/#sprite)

# 문서

howler.js를 활용하는 방법을 살펴봅니다.

### 목차
* [시작하기 (Quick Start)](#시작하기)
* [예제 (Examples)](#예제)
* [코어 (Core)](#코어)
  * [옵션 (Options)](#코어-옵션)
  * [메서드 (Methods)](#코어-메서드)
  * [글로벌 옵션 (Global Options)](#글로벌-옵션)
  * [글로벌 메서드 (Global Methods)](#글로벌-메서드)
* [플러그인: Spatial](#플러그인-spatial)
  * [옵션 (Options)](#플러그인-옵션)
  * [메서드 (Methods)](#플러그인-메서드)
  * [글로벌 메서드 (Global Methods)](#플러그인-글로벌-메서드)
* [모바일 재생 (Playback)](#모바일-재생)
* [돌비(Dolby) 사운드 재생](#dolby-사운드-재생)
* [Facebook 인스턴트 게임(Instant Games)](#facebook-인스턴스-게임)
* [권장 포멧 (Format)](#권장-포멧)
* [저작권 (License)](#저작권)

<br>

### 시작하기

howler.js를 시작하는 몇 가지 방법을 안내합니다.

#### 방법 1

howler.js 저장소를 복제(clone) 합니다.

```sh
$ git clone https://github.com/goldfire/howler.js.git
```

#### 방법 2

[howler](https://www.npmjs.com/package/howler) NPM 패키지를 설치합니다.

```sh
$ npm i howler
```

#### 방법 3

howler.js 라이브러리 CDN 주소를 사용하거나, 다운로드 받아 시작합니다.

- [`cdnjs`](https://cdnjs.com/libraries/howler) 
- [`jsDelivr`](https://www.jsdelivr.com/projects/howler.js)

```html
<script src="https://cdnjs.com/libraries/howler"></script>

<!-- 또는 -->

<script src="https://www.jsdelivr.com/projects/howler.js"></script>
```

### 브라우저 환경

브라우저 환경에서 howler.js를 시작하려면, 방법 3을 사용합니다.

```html
<!-- howler.js 라이브러리 호출 -->
<script src="/path/to/howler.js"></script>

<script>
  // 옵션 객체 - src 음원 경로 설정
  var bgmSoundOptions = { src: ['sound/bgm.webm', 'sound/bgm.mp3'] };
  // Howl 인스턴스(객체) 생성 - 옵션 설정
  var bgmSound = new Howl(bgmSoundOptions);
</script>
```

### ES6 모듈 또는 Node.js 환경

ES6 모듈을 사용할 수 있는 환경에서는 다음과 같이 howler.js 패키지로부터 필요한 모듈을 추출할 수 있습니다.

```js
import { Howl, Howler } from 'howler';
```

Node.js 환경에서는 `require()` 함수를 사용하여 howler.js 패키지로부터 필요한 모듈을 추출할 수 있습니다.

```js
const { Howl, Howler } = require('howler');
```

<br>

### 예제

가장 기본적인 MP3 오디오 재생 방법은 다음과 같습니다.

```js
// 사운드 객체 생성 (옵션 설정)
var howlSound = new Howl({
  src: ['sound/howl.mp3']
});

// 사운드 재생 메서드
sound.play();
```

Howl 객체 생성 시, 다음과 같이 다양한 재생(playback) 옵션을 설정할 수도 있습니다.

```js
var howlSound = new Howl({
  // 사운드 소스
  src: ['sound/howl.webm', 'sound/howl.mp3', 'sound/howl.wav'],
  // 자동 재생 설정
  autoplay: true,
  // 반복 설정
  loop: true,
  // 볼륨 설정
  volume: 0.5,
  // 종료(end) 이벤트 콜백 함수 설정
  onend: function() {
    console.log('사운드 재생이 종료되었습니다!');
  }
});
```

사운드 스프라이트(sound sprite)를 정의하고 재생하는 방법은 다음과 같습니다.

```js
var howlSound = new Howl({
  src: ['sound/howl.webm', 'sound/howl.mp3'],
  // 스프라이트 설정(객체)
  sprite: {
    blast: [0, 3000],
    laser: [4000, 1000],
    winner: [6000, 5000]
  }
});

// 레이저(laser)를 설정하여 사운드 재생
howlSound.play('laser');
```

이벤트를 감지하여 처리하는 방법은 다음과 같습니다.

```js
var howlSound = new Howl({
  src: ['sound/howl.webm', 'sound/howl.mp3'],
});

// 초기 로딩 시 1회만 처리되며, 실행 후 제거됩니다.
howlSound.once('load', function(){
  // 사운드 재생
  howlSound.play();
});

// 사운드 재생이 끝나면 처리됩니다.
howlSound.on('end', function(){
  console.log('사운드 재생이 종료되었습니다!');
});
```

여러 사운드 재생 설정은 다음과 같이 작성합니다.

```js
var howlSound = new Howl({
  src: ['sound/howl.webm', 'sound/howl.mp3'],
});

// play() 메서드는 특정 사운드를 제어 할 수 있는 고유한 사운드 ID를 반환합니다.
var hawlId1 = howlSound.play();
var hawlId2 = howlSound.play();

// 첫 번째 사운드를 1초 뒤에 페이드 아웃 처리하고, 
howlSound.fade(1, 0, 1000, hawlId1);
// 두 번째 사운드를 1.5x 빠르게(rate) 합니다.
howlSound.rate(1.5, hawlId2);
```

ES6 모듈을 사용할 수 있는 환경에서는 다음과 같이 사용합니다.

```js
import { Howl, Howler } from 'howler';

// 새로운 Howl 객체 생성 설정합니다.
const howlSound = new Howl({
  src: ['sound/howl.webm', 'sound/howl.mp3'],
  // 사운드 재생 종료 이벤트 콜백 함수 설정
  onend: () => console.log('사운드 재생이 종료되었습니다!'),
});

// 초기 로딩 시 1회만 처리되며, 실행 후 제거됩니다.
howlSound.once('load', () => {
  // 사운드 재생
  howlSound.play();
});

// Howler를 사용해 글로벌 볼륨(globally volume)을 변경할 수 있습니다.
Howler.volume(0.5);
```

보다 자세한 예제는 [예제 폴더](https://github.com/goldfire/howler.js/tree/master/examples)를 살펴보고 사용법을 확인하세요.


## 코어

howler.js 코어 옵션 설정에 대해 살펴봅니다.

### 코어 옵션

- [src](#src)
- [volume](#volume)
- [html5](#html5)
- [loop](#loop)
- [preload](#preload)
- [autoplay](#autoplay)
- [mute](#mute)
- [sprite](#sprite)
- [rate](#rate)
- [pool](#pool)
- [format](#format)
- [xhr](#xhr)
- [onload](#onload)
- [onloaderror](#onloaderror)
- [onplayerror](#onplayerror)
- [onplay](#onplay)
- [onend](#onend)
- [onpause](#onpause)
- [onstop](#onstop)
- [onmute](#onmute)
- [onvolume](#onvolume)
- [onrate](#onrate)
- [onseek](#onseek)
- [onfade](#onfade)
- [onunlock](#onunlock)

---

#### src

속성 | 유형 | 기본 값 | 필수 / 옵션
--- | --- | --- | ---
`src` | Array 또는 String | `[]` | 필수 (required)

사운드에 설정 할 트랙 소스(URL 또는 base64 데이터 URI)로 우선 순위(배열) 설정에 따라 howler.js가 현재 브라우저와 호환되는 트랙 소스를 자동으로 로드합니다. 파일에 확장자가 없을 경우, `format` 속성을 사용해 확장자를 명시 적으로 설정해야 합니다.

---

#### volume

속성 | 유형 | 기본 값 | 필수 / 옵션
--- | --- | --- | ---
`volume` | Number | `1.0` | 

특정 트랙의 볼륨은 `0.0`에서 `1.0`까지 조절 가능합니다.

---

#### html5

속성 | 유형 | 기본 값 | 필수 / 옵션
--- | --- | --- | ---
`html5` | Boolean | `false` | 

`html5` 설정이 `true`일 경우, HTML5 Audio로 강제(force) 설정됩니다. 이 설정은 다운로드, 디코딩 될 때까지 재생 할 필요가 없는 큰 오디오 파일(large audio files)인 경우 사용해야 합니다.

---

#### loop

속성 | 유형 | 기본 값 | 필수 / 옵션
--- | --- | --- | ---
`loop` | Boolean | `false` | 

사운드를 자동 반복하려면 'true'로 설정합니다.

---

#### preload

속성 | 유형 | 기본 값 | 필수 / 옵션
--- | --- | --- | ---
`preload` | Boolean 또는 String | `true` | 

`preload` 설정 값이 `true`라면 오디오 파일 다운로드가 자동으로 시작됩니다. 
그리고 HTML5 Audio를 사용한 경우, 메타데이터(metadata)만 미리 다운로드 하도록 `'metadata'` 값을 설정할 수 있습니다. (오디오 전체 파일 다운로드 전에 재생시간(duration)을 알고자 할 경우)

---

#### autoplay

속성 | 유형 | 기본 값 | 필수 / 옵션
--- | --- | --- | ---
`autoplay` | Boolean | `false` | 

사운드 재생이 준비되었을 때 자동으로 재생 시작하려면 `true`로 설정합니다.

---

#### mute 

속성 | 유형 | 기본 값 | 필수 / 옵션
--- | --- | --- | ---
`mute` | Boolean | `false` | 

사운드를 음소거 할 경우 `true` 값을 설정합니다.

---

#### sprite

속성 | 유형 | 기본 값 | 필수 / 옵션
--- | --- | --- | ---
`sprite` | Object | `{}` | 

사운드의 사운드 스프라이트(sprite)를 정의할 경우 설정합니다.
오프셋(offset)과 지속 시간(duration)은 밀리 초(ms)로 정의됩니다. 
스프라이트를 반복 설정(looping) 하려면 3번째 매개변수(옵션)를 사용 할 수 있습니다. 

```js
new Howl({
  sprite: {
    key1: [offset, duration, (loop)]
  },
});
```

> 호환되는 사운드 스프라이트를 손쉽게 만들려면 [audiosprite](https://github.com/tonistiigi/audiosprite) 제너레이터를 활용하세요.

---

#### rate

속성 | 유형 | 기본 값 | 필수 / 옵션
--- | --- | --- | ---
`rate` | Number | `1.0` | 

재생 속도(`0.5` ~ `4.0`)를 설정할 때 사용합니다. (`1.0` = 기본 속도)

---

#### pool

속성 | 유형 | 기본 값 | 필수 / 옵션
--- | --- | --- | ---
`pool` | Number | `5` | 

비활성(inactive) 사운드 풀(pool) 크기를 설정할 때 사용합니다. 소리가 중지되거나 재생이 완료되면 종료된 것으로 표시(marked as ended)되고 정리(cleanup) 준비가 완료됩니다. 성능 향상을 위해 재활용(recycle)하기 위해 이 풀들을 보관(keep)하고 있습니다. 

> 일반적인 경우 이 설정은 필요하지 없습니다. 사운드가 일시 중지(paused)되면 풀에서 제거되지 않고 나중에 다시 시작(resumed later) 될 수 있도록 활성 상태로 간주됩니다.

---

#### format

속성 | 유형 | 기본 값 | 필수 / 옵션
--- | --- | --- | ---
`format` | Array | `[]` | 

howler.js는 확장명(extension)으로 부터 파일 형식(format)을 자동으로 탐지(detects)하지만, SoundCloud 스트림(strean)과 같이 압축을 풀 수 없는 상황일 경우 형식을 지정 할 수도 있습니다.

---

#### xhr

속성 | 유형 | 기본 값 | 필수 / 옵션
--- | --- | --- | ---
`xhr` | Object | `null` | 

웹 오디오를 사용할 때 howler.js는 XHR 요청을 통해 오디오 파일을 로드합니다.
사용자 정의 헤더(headers)를 설정하여 전송 요청해야 할 경우, HTTP 메서드를 설정하거나 `withCredentials`([참고](https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest/withCredentials))을 사용하도록 설정합니다.

```js
// HTTP 메서드, 사용자정의 헤더, 자격 증명 속성 설정
new Howl({
  xhr: {
    method: 'POST',
    headers: {
      Authorization: 'Bearer:' + token,
    },
    withCredentials: true,
  }
});
```

각 설정은 옵션이며 기본 값은 HTTP 메서드는 `GET`, 헤더는 `null`, 자격 증명은 `false` 입니다.

```js
// HTTP 메서드만 변경한 경우
// headers: null, withCredentials: false 기본 값 사용
new Howl({
  xhr: {
    method: 'POST',
  }
});
```

---

#### onload

속성 | 유형 | 기본 값 | 필수 / 옵션
--- | --- | --- | ---
`onload` | Function | `null` | 

사운드가 로드되면 이벤트 감지되어 설정된 함수를 실행합니다.

---

#### onloaderror

속성 | 유형 | 기본 값 | 필수 / 옵션
--- | --- | --- | ---
`onloaderror` | Function | `null` | 

사운드를 로드할 수 없을 때 이벤트 감지되어 설정된 함수를 실행합니다.
1번째 매개 변수는 사운드 ID, 2번째 매개 변수는 오류 메시지/코드입니다.

```js
new Hawl({
  onloaderror: function(soundId, error) { /* ... */ }
})
```

---

#### onplayerror

속성 | 유형 | 기본 값 | 필수 / 옵션
--- | --- | --- | ---
`onplayerror` | Function | `null` | 

사운드를 재생할 수 없을 때 이벤트 감지되어 설정된 함수를 실행합니다. 1번째 매개 변수는 사운드 ID, 2번째 매개 변수는 오류 메시지/코드입니다.

---

#### onplay

속성 | 유형 | 기본 값 | 필수 / 옵션
--- | --- | --- | ---
`onplay` | Function | `null` | 

사운드를 재생 시작 할 때 이벤트 감지되어 설정된 함수를 실행합니다.
1번째 매개 변수는 사운드 ID입니다.

---

#### onend

속성 | 유형 | 기본 값 | 필수 / 옵션
--- | --- | --- | ---
`onend` | Function | `null` | 

사운드 재생이 종료되면 이벤트 감지되어 설정된 함수를 실행합니다. (루핑(looping) 될 경우, 각 루프의 끝 지점에서 실행) 1번째 매개 변수는 사운드 ID입니다.

---

#### onpause

속성 | 유형 | 기본 값 | 필수 / 옵션
--- | --- | --- | ---
`onpause` | Function | `null` | 

사운드 재생이 일시 정지되면 이벤트 감지되어 설정된 함수를 실행합니다. 1번째 매개 변수는 사운드 ID입니다.

---

#### onstop

속성 | 유형 | 기본 값 | 필수 / 옵션
--- | --- | --- | ---
`onstop` | Function | `null` | 

사운드 재생이 멈추면 이벤트 감지되어 설정된 함수를 실행합니다. 1번째 매개 변수는 사운드 ID입니다.

---

#### onmute

속성 | 유형 | 기본 값 | 필수 / 옵션
--- | --- | --- | ---
`onmute` | Function | `null` | 

사운드 음소거(muted) 또는 음소거 해제(unmuted)가 되면 이벤트 감지되어 설정된 함수를 실행합니다. 1번째 매개 변수는 사운드 ID입니다.

---

#### onvolume

속성 | 유형 | 기본 값 | 필수 / 옵션
--- | --- | --- | ---
`onvolume` | Function | `null` | 

사운드 볼륨이 변경되면 되면 이벤트 감지되어 설정된 함수를 실행합니다. 1번째 매개 변수는 사운드 ID입니다.

---

#### onrate

속성 | 유형 | 기본 값 | 필수 / 옵션
--- | --- | --- | ---
`onrate` | Function | `null` | 

사운드 재생 속도(rate)가 변경되면 되면 이벤트 감지되어 설정된 함수를 실행합니다. 1번째 매개 변수는 사운드 ID입니다.

---

#### onseek

속성 | 유형 | 기본 값 | 필수 / 옵션
--- | --- | --- | ---
`onseek` | Function | `null` | 

사운드 재생 위치가 변경(seeking)되면 되면 이벤트 감지되어 설정된 함수를 실행합니다. 1번째 매개 변수는 사운드 ID입니다.

---

#### onfade

속성 | 유형 | 기본 값 | 필수 / 옵션
--- | --- | --- | ---
`onfade` | Function | `null` | 

현재 사운드의 볼륨 페이드 인/아웃이 종료되면 이벤트 감지되어 설정된 함수를 실행합니다. 1번째 매개 변수는 사운드 ID입니다.

---

#### onunlock

속성 | 유형 | 기본 값 | 필수 / 옵션
--- | --- | --- | ---
`onunlock` | Function | `null` | 

터치(touch) 또는 클릭(click) 이벤트를 통해 사운드가 자동으로 잠금 해제(unlock) 될 경우, 이벤트가 감지되어 설정된 함수가 실행됩니다.

<br>

### 코어 메서드

- [play()](#playspriteid)
- [pause()](#pauseid)
- [stop()](#stopid)
- [mute()](#mutemuted-id)
- [volume()](#volumevolume-id)
- [fade()](#fadefrom-to-duration-id)
- [rate()](#raterate-id)
- [seek()](#seekseek-id)
- [loop()](#looploop-id)
- [state()](#state)
- [playing()](#playingid)
- [duration()](#durationid)
- [on()](#onevent-function-id)
- [once()](#onceevent-function-id)
- [off()](#offevent-function-id)
- [load()](#load)
- [unload()](#unload)

<br>

#### play([sprite/id])

사운드 재생(playback)을 시작합니다. 다른 메서드와 함께 사용 할 사운드 ID를 반환합니다. 체인(chained) 방식으로 연결할 수 없는 유일한 메서드입니다.

속성 | 유형 | 필수 여부 | 설명
--- | --- | --- | ---
sprite / id | String / Number | 선택(optional)  | 스프라이트 또는 사운드 ID 매개변수를 선택적으로 전달할 수 있습니다. 스프라이트 값이 전달되면 스프라이트 정의에 따라 새로운 사운드가 재생됩니다. 사운드 ID가 전달될 경우, 일시 정지 후 이전 재생된 사운드가 재생됩니다. 하지만 풀(pool)에서 배출된(drained) 사운드 ID가 전닫되면 아무 것도 재생되지 않습니다.

#### pause([id])

사운드 또는 그룹의 재생(playback)을 일시 정지(paused)하고 탐색(seek) 위치를 저장합니다.

속성 | 유형 | 필수 여부 | 설명
--- | --- | --- | ---
id | Number | 선택(optional) | 사운드 ID 값이 매개변수로 전달되지 않을 경우, 그룹의 모든 사운드가 일시 정지됩니다.

#### stop([id])

사운드를 정지(stoped)하고, 탐색(seek) 위치를 0으로 변경합니다.

속성 | 유형 | 필수 여부 | 설명
--- | --- | --- | ---
id | Number | 선택(optional) | 사운드 ID 값이 매개변수로 전달되지 않을 경우, 그룹의 모든 사운드가 정지됩니다.

#### mute([muted], [id])

사운드는 음소거되지만, 재생이 멈추지 않습니다.

속성 | 유형 | 필수 여부 | 설명
--- | --- | --- | ---
muted | Boolean | 선택(optional) | 음소거(`true`), 음소거 해제(`false`)
id | Number | 선택(optional) | 사운드 ID 값이 매개변수로 전달되지 않을 경우, 그룹의 모든 사운드가 음소거됩니다.

#### volume([volume], [id])

사운드 또는 그룹의 볼륨을 가져오거나 설정합니다. 이 메서드는 선택적으로 0, 1 또는 2번째 전달인자를 설정할 수 있습니다.

속성 | 유형 | 필수 여부 | 설명
--- | --- | --- | ---
volume | Number | 선택(optional) | `0.0`에서 `1.0`까지 조절 가능합니다.
id | Number | 선택(optional) | 사운드 ID 값이 매개변수로 전달되지 않을 경우, 그룹의 모든 사운드 볼륨이 일괄적으로 변경됩니다.

#### fade(from, to, duration, [id])

이전 / 현재 재생중인 사운드를 페이드(fade) 합니다. 페이드가 완료되면 [fade](#onfade) 이벤트가 발생합니다.

속성 | 유형 | 필수 여부 | 설명
--- | --- | --- | ---
from | Number | 필수(required) | 페이드 할 볼륨(from) 값을 `0.0`에서 `1.0`까지 조절할 수 있습니다.
to | Number | 필수(required) | 페이드 할 볼륨(to) 값을 `0.0`에서 `1.0`까지 조절할 수 있습니다.
duration | Number | 필수(required) | 페이드 시간(ms)을 설정합니다.
id | Number | 선택(optional) | 사운드 ID 값을 전달하지 않으면 그룹의 모든 사운드가 페이드 됩니다.

#### rate([rate], [id])

사운드 재생 속도(rate) 값을 가져 오거나(GET), 설정(SET) 합니다. 이 메서드는 선택적으로 0, 1 또는 2번째 전달인자를 설정할 수 있습니다.

속성 | 유형 | 필수 여부 | 설명
--- | --- | --- | ---
rate | Number | 선택(optional) | 재생 속도(`0.5` ~ `4.0`)를 설정합니다. (`1.0` = 기본 속도)
id | Number | 선택(optional) | 사운드 ID 값이 매개변수로 전달되지 않을 경우, 그룹의 모든 사운드 재생 속도가 일괄적으로 변경됩니다.

#### seek([seek], [id])

사운드 재생 위치(position of playback)를 가져 오거나 설정합니다. 이 메서드는 선택적으로 0, 1 또는 2번째 전달인자를 설정할 수 있습니다.

속성 | 유형 | 필수 여부 | 설명
--- | --- | --- | ---
seek | Number | 선택(optional) | 현재 재생 위치를 이동시킵니다. (초 단위)
id | Number | 선택(optional) | 사운드 ID 값이 매개변수로 전달되지 않을 경우, 1번째 사운드의 재생 위치가 변경됩니다.

#### loop([loop], [id])

사운드 또는 그룹의 반복 설정 값을 가져 오거나 설정합니다. 이 메서드는 선택적으로 0, 1 또는 2번째 전달인자를 설정할 수 있습니다.

속성 | 유형 | 필수 여부 | 설명
--- | --- | --- | ---
loop | Boolean | 선택(optional) | 반복(`true`) 또는 반복 해제(`false`) 값을 설정합니다.
id | Number | 선택(optional) | 사운드 ID 값이 매개변수로 전달되지 않을 경우, 그룹의 모든 사운드 반복 설정이 일괄 업데이트 됩니다.

#### state()

Howl 객체의 로딩 상태를 체크하여 다음 상태 값을 반환합니다.

상태 | 설명
--- | ---
`unloaded` | **로딩 아님** 상태
`loading` | **로딩 중**인 상태
`loaded` | **로딩 완료** 상태

#### playing([id])

사운드가 현재 재생 중인지 여부(상태) 값(Boolean)을 반환합니다. 사운드 ID가 전달되지 않으면 Howl 그룹의 사운드가 재생됩니다.

속성 | 유형 | 필수 여부 | 설명
--- | --- | --- | ---
id | Number | 선택(optional) | 확인 할 사운드 ID

#### duration([id])

사운드 소스의 지속 시간을 초 단위로 가져옵니다. ([load](#onload) 이벤트가 발생할 때까지 `0`을 반환)

속성 | 유형 | 필수 여부 | 설명
--- | --- | --- | ---
id | Number | 선택(optional) | 확인 할 사운드 ID입니다. ID 값을 전달하면 해당 인스턴스에서 재생되는 스프라이트의 지속 시간이 반환되고, 그렇지 않을 경우 전체 사운드 소스의 지속 시간이 반환됩니다.

#### on(event, function, [id])

이벤트를 청취(listen)하는 메서드입니다. 메서드를 여러 번 호출하여 복수의 이벤트를 추가할 수 있습니다. 

속성 | 유형 | 필수 여부 | 설명
--- | --- | --- | ---
event | String | 필수(required) | 이벤트 이름(`load`, `loaderror`, `playerror`, `play`, `end`, `pause`, `stop`, `mute`, `volume`, `rate`, `seek`, `fade`, `unlock`)을 설정합니다.
function | Function | 필수(required) | 이벤트 감지 시 처리될 함수를 설정합니다.
id | Number | 선택(optional) | 사운드 ID 값을 전달하면 해당 ID 값의 이벤트만 청취합니다.

#### once(event, function, [id])

on 메서드와 동일하지만, 단 1번만 호출된 후 연결된 콜백함수가 제거됩니다.

속성 | 유형 | 필수 여부 | 설명
--- | --- | --- | ---
event | String | 필수(required) | 이벤트 이름(load, loaderror, playerror, play, end, pause, stop, mute, volume, rate, seek, fade, unlock)을 설정합니다.
function | Function | 필수(required) | 이벤트 감지 시 처리될 함수를 설정합니다.
id | Number | 선택(optional) | 사운드 ID 값을 전달하면 해당 ID 값의 이벤트만 청취합니다.

#### off(event, [function], [id])

설정된 이벤트 리스너를 제거합니다. 모든 이벤트를 제거하려면 매개 변수 없이 호출합니다.

속성 | 유형 | 필수 여부 | 설명
--- | --- | --- | ---
event | String | 필수(required) | 이벤트 이름(load, loaderror, playerror, play, end, pause, stop, mute, volume, rate, seek, fade, unlock)을 설정합니다.
function | Function | 선택(optional) | 제거할 이벤트 리스너(함수 참조)를 설정합니다. 이 설정이 생략될 경우 연결된 모든 이벤트가 제거됩니다.
id | Number | 선택(optional) | 사운드 ID 값을 전달하면 해당 ID 값의 이벤트 리스너만 제거합니다.

#### load()

기본적으로 호출되지만 `preload` 값이 `false`로 설정된 경우, 사운드 재생 전에 `load` 메서드를 호출 실행해야 합니다.

#### unload()

Howl 인스턴스(객체)를 언로드(unload) 하고 파괴(destroy)합니다. 파괴되면 연결된 모든 사운드가 즉시 중지 되고 캐시(cache)에서 제거됩니다.

<br>

### 글로벌 옵션

옵션 | 유형 | 기본값 | 설명
--- | --- | --- | ---
`usingWebAudio` | Boolean | | 웹 오디오(Web Audio) API를 사용할 수 있는 경우 `true`를 반환합니다.
`noAudio` | Boolean | | 오디오(audio)를 사용할 수 없는 경우 `true`를 반환합니다.
`autoUnlock` | Boolean | `true` | 모바일(iOS, Android 등) 기기 및 데스크톱 Chrome / Safari 브라우저에서 오디오를 자동으로 사용하도록 설정합니다. 
`html5PoolSize` | Number | `10` | 각 HTML5 Audio 객체는 개별적으로 잠금 해제(unlocked) 되어야 하므로, 모든 Howl 인스턴스(객체) 간에 공유 할 수 있도록 전역 잠금 해제 노드 풀(global pool of unlocked nodes)을 유지합니다. 이 풀은 첫 번째 사용자 인터랙션에서 생성되며, 이 속성의 크기로 설정됩니다.
`autoSuspend` | Boolean | `true` | 프로세싱 및 에너지 사용량을 줄이기 위해 30초 동안 사용되지 않은 웹 오디오 `AudioContext`를 자동으로 일시 정지합니다. 재생(playback) 시, 자동으로 다시 시작합니다. 이 동작을 사용하지 않으려면 'false'로 속성 값을 설정합니다.
`ctx` | Boolean | `Web Audio Only` | 웹 오디오 API로 `AudioContext`를 표시합니다.
`masterGain` | Boolean | `Web Audio Only` | 웹 오디오 API로 마스터 `GainNode`를 표시합니다. 이 기능은 플러그인 또는 고급 사용법에 유용합니다.


### 글로벌 메서드

다음의 메서드는 모든 사운드를 전체적으로 편집하는 데 사용되며, Howler 인스턴스(객체)를 통해 사용될 수 있습니다.

#### mute(muted)

모든 사운드를 음소거하거나, 음소거 해제합니다.

속성 | 유형 | 설명
--- | --- | ---
muted | Boolean | 음소거 하려면 `true`, 해제하려면 `false`를 전달합니다.

#### volume([volume])

자체 볼륨을 기준으로 모든 사운드의 글로벌 볼륨을 가져 오거나(GET), 설정(SET) 합니다.

속성 | 유형 | 설명
--- | --- | ---
volume | Number | `0.0` ~ `1.0` 값을 설정하여 볼륨을 조절합니다. (옵션)

#### stop()

모든 사운드를 정지하고, 탐색 위치(seek)를 처음으로 재설정(`0`) 합니다.

#### codecs(ext)

지원하는 오디오 코덱을 체크합니다.
현재 브라우저에서 코덱을 지원할 경우 'true' 값을 반환합니다.

속성 | 유형 | 설명
--- | --- | ---
ext | String | 파일 확장자로 다음 중 하나를 설정할 수 있습니다.<br>(`mp3`, `mpeg`, `opus`, `ogg`, `oga`, `wav`, `aac`, `caf`, `m4a`, `m4b`, `mp4`, `weba`, `webm`, `dolby`, `flac`)

#### unload()

현재 로드 된 모든 Howl 인스턴스(객체)를 언로드 하고 제거합니다. 
그러면 모든 사운드가 즉시 정지되고 캐시에서 제거됩니다.

<br>

## 플러그인: Spatial

> 역자: ※ 플러그인 부분은 아직 해석 전입니다.

### 플러그인 옵션 

#### orientation `Array` `[1, 0, 0]`
Sets the direction the audio source is pointing in the 3D cartesian coordinate space. Depending on how directional the sound is, based on the `cone` attributes, a sound pointing away from the listener can be quiet or silent.
#### stereo `Number` `null`
Sets the stereo panning value of the audio source for this sound or group. This makes it easy to setup left/right panning with a value of `-1.0` being far left and a value of `1.0` being far right.
#### pos `Array` `null`
Sets the 3D spatial position of the audio source for this sound or group relative to the global listener.
#### pannerAttr `Object`
Sets the panner node's attributes for a sound or group of sounds. See the `pannerAttr` method for all available options.
#### onstereo `Function`
Fires when the current sound has the stereo panning changed. The first parameter is the ID of the sound.
#### onpos `Function`
Fires when the current sound has the listener position changed. The first parameter is the ID of the sound.
#### onorientation `Function`
Fires when the current sound has the direction of the listener changed. The first parameter is the ID of the sound.

<br>

### 플러그인 메서드

#### stereo(pan, [id])
Get/set the stereo panning of the audio source for this sound or all in the group.
* **pan**: `Number` A value of `-1.0` is all the way left and `1.0` is all the way right.
* **id**: `Number` `optional` The sound ID. If none is passed, all in group will be updated.

#### pos(x, y, z, [id])
Get/set the 3D spatial position of the audio source for this sound or group relative to the global listener.
* **x**: `Number` The x-position of the audio source.
* **y**: `Number` The y-position of the audio source.
* **z**: `Number` The z-position of the audio source.
* **id**: `Number` `optional` The sound ID. If none is passed, all in group will be updated.

#### orientation(x, y, z, [id])
Get/set the direction the audio source is pointing in the 3D cartesian coordinate space. Depending on how directional the sound is, based on the `cone` attributes, a sound pointing away from the listener can be quiet or silent.
* **x**: `Number` The x-orientation of the source.
* **y**: `Number` The y-orientation of the source.
* **z**: `Number` The z-orientation of the source.
* **id**: `Number` `optional` The sound ID. If none is passed, all in group will be updated.

#### pannerAttr(o, [id])
Get/set the panner node's attributes for a sound or group of sounds.
* **o**: `Object` All values to update.
  * **coneInnerAngle** `360` A parameter for directional audio sources, this is an angle, in degrees, inside of which there will be no volume reduction.
  * **coneOuterAngle** `360` A parameter for directional audio sources, this is an angle, in degrees, outside of which the volume will be reduced to a constant value of `coneOuterGain`.
  * **coneOuterGain** `0` A parameter for directional audio sources, this is the gain outside of the `coneOuterAngle`. It is a linear value in the range `[0, 1]`.
  * **distanceModel** `inverse` Determines algorithm used to reduce volume as audio moves away from listener. Can be `linear`, `inverse` or `exponential. You can find the implementations of each in the [spec](https://webaudio.github.io/web-audio-api/#idl-def-DistanceModelType).
  * **maxDistance** `10000` The maximum distance between source and listener, after which the volume will not be reduced any further.
  * **refDistance** `1` A reference distance for reducing volume as source moves further from the listener. This is simply a variable of the distance model and has a different effect depending on which model is used and the scale of your coordinates. Generally, volume will be equal to 1 at this distance.
  * **rolloffFactor** `1` How quickly the volume reduces as source moves from listener. This is simply a variable of the distance model and can be in the range of `[0, 1]` with `linear` and `[0, ∞]` with `inverse` and `exponential`.
  * **panningModel** `HRTF` Determines which spatialization algorithm is used to position audio. Can be `HRTF` or `equalpower`.
* **id**: `Number` `optional` The sound ID. If none is passed, all in group will be updated.


### 플러그인 글로벌 메서드

#### stereo(pan)
Helper method to update the stereo panning position of all current `Howls`. Future `Howls` will not use this value unless explicitly set.
* **pan**: `Number` A value of -1.0 is all the way left and 1.0 is all the way right.

#### pos(x, y, z)
Get/set the position of the listener in 3D cartesian space. Sounds using 3D position will be relative to the listener's position.
* **x**: `Number` The x-position of the listener.
* **y**: `Number` The y-position of the listener.
* **z**: `Number` The z-position of the listener.

#### orientation(x, y, z, xUp, yUp, zUp)
Get/set the direction the listener is pointing in the 3D cartesian space. A front and up vector must be provided. The front is the direction the face of the listener is pointing, and up is the direction the top of the listener is pointing. Thus, these values are expected to be at right angles from each other.
* **x**: `Number` The x-orientation of listener.
* **y**: `Number` The y-orientation of listener.
* **z**: `Number` The z-orientation of listener.
* **xUp**: `Number` The x-orientation of the top of the listener.
* **yUp**: `Number` The y-orientation of the top of the listener.
* **zUp**: `Number` The z-orientation of the top of the listener.

<br>

### 모바일 재생

기본적으로 모바일 브라우저 또는 Chrome/Safari 데스크탑 브라우저의 사운드는 사용자 인터랙션 과정에서 사운드가 재생 될 때까지 잠긴(locked) 다음 나머지 페이지 세션에서 정상적으로 재생됩니다. ([Apple 문서](https://developer.apple.com/library/safari/documentation/audiovideo/conceptual/using_html5_audio_video/PlayingandSynthesizingSounds/PlayingandSynthesizingSounds.html))

howler.js의 기본 동작은 1번째 'touchend' 이벤트에서 빈 버퍼(buffer)를 재생하여 사운드 재생을 자동으로 잠금 해제(unlock)하는 것입니다. 이 동작은 다음을 호출하여 비활성화 할 수 있습니다.

```js
Howler.autoUnlock = false;
```

페이지 로드시 자동으로 오디오를 재생 하려면? `playerror` 이벤트를 수신한 다음 `unlock` 이벤트를 통해 언록 상태가 되면 오디오를 다시 재생하도록 설정할 수 있습니다. 다음 코드를 참고하세요.

```js
var sound = new Howl({
  src: ['sound.webm', 'sound.mp3'],
  // 재생에 실패하면 콜백 함수 실행
  onplayerror: function() {
    // 자동 잠금해제 상태가 되면 사운드 재생 (콜백 함수 실행)
    sound.once('unlock', function() {
      sound.play();
    });
  }
});

// 사운드 재생
sound.play();
```

<br>

### Dolby 사운드 재생

howler.js는 Dolby 사운드 포멧([현재 Edge, Safari에서 지원](https://developer.dolby.com/platforms/html5/browser-support/)) 재생을 완벽하게 지원합니다. 하지만 로드 중인 파일이 `mp4` 컨테이너에 있으므로 `dolby` 임을 지정해야 합니다.

```js
var dolbySound = new Howl({
  src: ['sound.mp4', 'sound.webm', 'sound.mp3'],
  format: ['dolby', 'webm', 'mp3']
});
```

<br>

### Facebook 인스턴스 게임

howler.js는 [Facebook Instant Games](https://developers.facebook.com/docs/games/instant-games/engine-recommendations) 플랫폼에 대한 오디오 지원을 제공합니다. 인스턴트 게임을 개발하는 동안 문제가 발생하면 `[IG]` 태그로 문제를 알려주세요.

<br>

### 권장 포멧

howler.js는 다양한 오디오 코덱을 지원합니다. (`mp3`, `opus`, `ogg`, `wav`, `aac`, `m4a`, `m4b`, `mp4`, `webm` 등) 다만, 브라우저 호환을 위해 최소 2개 포멧을 설정 사용하길 권장합니다.

```js
new Howl({
  // 최소 2개 이상 설정
  src: ['sound/howl.webm', 'sound/howl.mp3'],
})
```

광범위 한 프로덕션(배포) 테스트를 기반으로 작은 용량의 파일 크기 및 고품질을 목표로 한다면 기본적으로 `webm`과 `mp3`로 대체하는 것이 가장 좋습니다. `webm`은 압축과 품질의 훌륭한 조합으로 거의 대부분의 브라우저에서 지원합니다. 하지만 IE(Internet Explorer) 브라우저는 `webm`을 지원하지 않으므로 `mp3` 포멧으로 대체할 필요가 있습니다.

howler.js는 `src` 배열 아이템(설정 포멧) 중 적용할 포멧을 우선 배치해야 합니다. 예를 들어 `webm` 포멧을 `mp3`보다 우선시 하려면 첫번째 아이템으로 `webm`을 설정해야 합니다.

Firefox 브라우저에서 `webm` 포멧을 지원되도록 하려면 큐(cues) 요소로 인코딩 해야 합니다. 큐 요소로 인코딩 하는 방법 중 하나는 [ffmpeg](https://www.ffmpeg.org/)에서 `dash` 플래그(flag)를 사용하는 것입니다.

```sh
# ffmpeg -i 인풋소스 -dash 1 아우풋소스
$ ffmpeg -i sound/howl.wav -dash 1 sound/howl.webm
```

<br>

### 저작권

Copyright (c) 2013-2020 [James Simpson](https://twitter.com/GoldFireStudios) & [GoldFire Studios, Inc.](http://goldfirestudios.com)
 | [MIT 라이선스](https://github.com/goldfire/howler.js/blob/master/LICENSE.md)

 