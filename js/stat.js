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
  // Начальная x координата колонки
  var BAR_X = CLOUD_X + BAR_GAP;
  // 2 x координата 2 колонки
  var BAR_X2 = BAR_WIDTH + BAR_GAP;
  // Начальная y координата колонки
  var BAR_Y = CLOUD_HEIGHT - FONT_GAP;
  // Начальная x координата текста
  var BAR_TEXT_X = CLOUD_X + BAR_GAP;
  // 2 x координата 2 текста
  var BAR_TEXT_X2 = BAR_WIDTH + BAR_GAP;
  // Начальная y координата текста
  var BAR_TEXT_Y = CLOUD_HEIGHT - 2 * FONT_GAP;

  var renderCloud = function (ctx, x, y, color) {
    ctx.fillStyle = color;
    ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
  };

  var textsWin = ['Ура вы победили!', 'Список результатов:'];
  var textsWinFontSize = 16;
  var renderTextWin = function (ctx, array, x, y) {
    ctx.fillStyle = '#000';
    ctx.font = textsWinFontSize.toString() + 'px PT mono';
    for (var i = 0; i < array.length; i++) {
      ctx.fillText(array[i], x, y + i * textsWinFontSize);
    }
  };

  var getMaxElement = function (arr) {
    var maxElement = arr[0];

    arr.forEach(function (item) {
      if (item > maxElement) {
        maxElement = item;
      }
    });

    return maxElement;
  };

  var renderColumn = function (ctx, x, y, width, height) {
    ctx.fillRect(x, y, width, height);
  };

  window.renderStatistics = function (ctx, names, times) {
    renderCloud(ctx, CLOUD_X + GAP, CLOUD_Y + GAP, 'rgba(0, 0, 0, 0.7)');
    renderCloud(ctx, CLOUD_X, CLOUD_Y, '#fff');
    renderTextWin(ctx, textsWin, CLOUD_X + 20, CLOUD_Y + 30);
    var maxTime = getMaxElement(times);
    var barHeightUser;

    for (var i = 0; i < names.length; i++) {
      barHeightUser = BAR_HEIGHT * Math.round(times[i]) / maxTime;

      ctx.fillStyle = '#000';
      ctx.fillText(names[i], BAR_TEXT_X + BAR_TEXT_X2 * i, CLOUD_HEIGHT);
      ctx.fillText(Math.round(times[i]), BAR_TEXT_X + BAR_TEXT_X2 * i, BAR_TEXT_Y - barHeightUser);
      if (names[i] === 'Вы') {
        ctx.fillStyle = 'rgb(255, 0, 0)';
        renderColumn(ctx, BAR_X + BAR_X2 * i, BAR_Y - barHeightUser, BAR_WIDTH, barHeightUser);
      } else {
        ctx.fillStyle = 'rgba(0, 0, 255, ' + Math.random().toString() + ')';
        renderColumn(ctx, BAR_X + BAR_X2 * i, BAR_Y - barHeightUser, BAR_WIDTH, barHeightUser);
      }
    }
  };
})();
