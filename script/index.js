
  function changeBgImg() {
    var bodyBG = document.getElementsByTagName('body')[0],
      nextImg = document.querySelector('#rightBtn'),
      last = document.querySelector('#leftBtn'),
      bgImages = bodyBG.getAttribute('background'),
      n = 0,
      bgImageArr = ['1.jpg', '2.jpg', '3.jpg', '4.jpg', '5.jpg', '6.jpg', '7.jpg', '8.jpg', '9.jpg', '10.jpg', '11.jpg'],
      bgColor = ['#16a085', '#27ae60', '#2c3e50', '#f39c12', '#e74c3c', '#9b59b6', '#FB6964', "#472E32", "#BDBB99", "#77B1A9", "#73A857"],
      remText = [
        "因为昂是蕾姆的英雄。",
        "在那个昏暗的森林，就连自己都分不清自己的世界里，把只会想着乱来的雷姆救了出来。",
        "为了让醒了后无法动弹的雷姆，为了让魔法使用过度、精疲力尽的姐姐逃脱；",
        "去做诱饵，面对魔兽，就算没有胜算，生命处在真正的危险之中，即便如此还是幸存了下来，保持着微笑回到雷姆的怀里；",
        "醒过来、微笑着把雷姆最想听到的话，在最想听到的时候，让最想说的人说了出来。",
        "蕾姆的时间一直都是静止的，在那个火焰的夜晚，从失去了姐姐以外一切的夜晚开始，蕾姆的时间就一直是静止的。静止的时间、冰冻的心，都被昂宠溺地溶解了，你的温柔，让它们动了起来。",
        "在那个时间、那个早晨，蕾姆得到了何等的救赎，蕾姆有多高兴，昂一定不会知道。",
        "所以，蕾姆相信，无论有怎样痛苦的事情，就算昂就要输了，就算世上谁也不相信昂了，哪怕连昂自己都不相信自己了，蕾姆也会相信你。",
        "救了蕾姆的昂是真正的英雄",
        "就像昂把蕾姆静止的时间运转起来一样，把昂觉得静止的时间现在运转起来；从这里开始吧，从一，不是，从零开始",
        "一个人走下去很艰难的话，蕾姆会支持你；分担包袱，相互支持着走下去吧，那天早晨是这么说的吧！让蕾姆看看昂帅气的一面"
      ]
    var bgColorClass = document.querySelectorAll('.bgColor'),
      btnColorClass = document.querySelectorAll('.btnColor'),
      spanText = document.getElementsByTagName('span')[0],
      timer = null,
      zZceng = document.getElementById('zZceng'),
      inPut = document.getElementsByClassName('btnColor');

/**
 * [改变背景透明度]
 * @param  {[type]}   opacity [初始透明度]
 * @param  {[type]}   target  [目标透明度]
 * @param  {Function} fn      [回调函数]
 */
    function opacityChange(opacity, target, fn) {
      var zZceng = document.getElementById('zZceng');
      var alpha = opacity,
        speed = 0;
      clearInterval(timer);
      timer = setInterval(function() {
        /*speed = (target - opacity) /60;*/
        if (target>opacity) {
          speed=5
        } else{
          speed=-4
        };
        if (alpha == target) {
          clearInterval(timer)
        } else {
          alpha += speed;
        };
        zZceng.style.opacity = alpha / 100;
        if (fn) {
          fn();
        }
      }, 20)
    }
/**
 * [改变背景以及主题文字]
 * @return {[type]} [description]
 */
    function change(opacity, target) {
      opacityChange(opacity, target, function() {
        opacityChange(target, opacity);
        bodyBG.style.background = "url('images/1/" + bgImageArr[n] + "')no-repeat fixed";
        bodyBG.style.backgroundSize = "100% 100%";
        /*主题颜色更改*/
        for (var i = 0; i < bgColorClass.length; i++) {
          bgColorClass[i].style.color = bgColor[n];
          btnColorClass[i].style.backgroundColor = bgColor[n];
          /*文字更改*/
          spanText.innerHTML = '"' + remText[n] + '"';
        }
      })
    }
    nextImg.onclick = function() {
        n++;
        if (n > bgImageArr.length - 1) {
          n = bgImageArr.length - 1;
        }
        change(0,60);
      }
      /*
       *返回按键 得到上一个图片；
       */
    last.onclick = function() {
      n--;
      if (n < 0) {
        n = 0;
      }
      change(0,60);
    }
  }
  changeBgImg();
