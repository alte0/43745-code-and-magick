'use strict';

(function () {
  var CLOUD_WIDTH = 420;
  var CLOUD_HEIGHT = 270;
  var CLOUD_X = 100;
  var CLOUD_Y = 10;
  var GAP = 10;
  var FONT_GAP = 16;
  // Высота гистограммы 150px.
  var BAR_HEIGHT = 150;
  // Ширина колонки 40px.
  var BAR_WIDTH = 40;
  // Расстояние между колонками 50px.
  var BAR_GAP = 50;

  var renderCloud = function (ctx, x, y, color) {
    ctx.fillStyle = color;
    ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
  };

  var textsWin = ['Ура вы победили!', 'Список результатов:'];
  var textsWinSizeFont = 16;
  var renderTextWin = function (ctx, array, x, y) {
    ctx.fillStyle = '#000';
    ctx.font = '16px PT mono';
    for (var i = 0; i < array.length; i++) {
      ctx.fillText(array[i], x, y + i * textsWinSizeFont);
    }
  };

  var getMaxElement = function (arr) {
    var maxElement = arr[0];

    for (var i = 0; i < arr.length; i++) {
      if (arr[i] > maxElement) {
        maxElement = arr[i];
      }
    }

    return maxElement;
  };

  window.renderStatistics = function (ctx, names, times) {
    renderCloud(ctx, CLOUD_X + GAP, CLOUD_Y + GAP, 'rgba(0, 0, 0, 0.7)');
    renderCloud(ctx, CLOUD_X, CLOUD_Y, '#fff');
    renderTextWin(ctx, textsWin, CLOUD_X + 20, CLOUD_Y + 30);
    var maxTime = getMaxElement(times);

    for (var i = 0; i < names.length; i++) {
      ctx.fillStyle = '#000';
      ctx.fillText(names[i], CLOUD_X + BAR_GAP + (BAR_WIDTH + BAR_GAP) * i, CLOUD_HEIGHT);
      ctx.fillText(Math.round(times[i]), CLOUD_X + BAR_GAP + (BAR_WIDTH + BAR_GAP) * i, CLOUD_HEIGHT - FONT_GAP - BAR_HEIGHT * Math.round(times[i]) / maxTime - FONT_GAP);
      // console.log(CLOUD_HEIGHT - FONT_GAP - BAR_HEIGHT * Math.round(times[i]) - 50);
      if (names[i] === 'Вы') {
        ctx.fillStyle = 'rgb(255, 0, 0)';
        ctx.fillRect(CLOUD_X + BAR_GAP + (BAR_WIDTH + BAR_GAP) * i, CLOUD_HEIGHT - FONT_GAP - BAR_HEIGHT * Math.round(times[i]) / maxTime, BAR_WIDTH, BAR_HEIGHT * Math.round(times[i]) / maxTime);
      } else {
        ctx.fillStyle = 'rgba(0, 0, 255, ' + Math.random().toString() + ')';
        ctx.fillRect(CLOUD_X + BAR_GAP + (BAR_WIDTH + BAR_GAP) * i, CLOUD_HEIGHT - FONT_GAP - BAR_HEIGHT * Math.round(times[i]) / maxTime, BAR_WIDTH, BAR_HEIGHT * Math.round(times[i]) / maxTime);
      }
    }
  };
})();
