"use strict";

var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 270;
var CLOUD_X = 100;
var CLOUD_Y = 10;
var GAP = 20;
var FONT_GAP = 16;
var BAR_GAP = 50;
var TEXT_HEIGHT = 20;
var BAR_WIDTH = 40;
var BAR_HEIGHT = 150;
var TEXT_Y = CLOUD_HEIGHT - CLOUD_Y;
var FIRST_BAR_GAP = 150;
var UPPER_GAP = 90;
var BETWEEN_BAR_GAP = 90;

var renderCloud = function(ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
};

var createColumn = function(ctx, name, number, barColor, heightPercent) {
  ctx.fillStyle = '#000';
  ctx.fillText(name, CLOUD_X + (BAR_GAP * (number + 1)) + (BAR_WIDTH * number), TEXT_Y);
  ctx.fillStyle = barColor;
  ctx.fillRect(FIRST_BAR_GAP + (BETWEEN_BAR_GAP * number), UPPER_GAP + (BAR_HEIGHT - (BAR_HEIGHT * heightPercent)), BAR_WIDTH, heightPercent * BAR_HEIGHT);
};

window.renderStatistics = function(ctx, players, times) {
  console.log(players, times);
  renderCloud(ctx, CLOUD_X + GAP, CLOUD_Y + GAP, 'rgba(0, 0, 0, 0.7)');
  renderCloud(ctx, CLOUD_X, CLOUD_Y, '#fff');

  ctx.fillStyle = '#000';
  ctx.font = "16px PT Mono";
  ctx.fillText('Ура вы победили!', CLOUD_X + GAP, CLOUD_Y + GAP);
  ctx.fillText('Список результатов:', CLOUD_X + GAP, CLOUD_Y + (GAP * 2));

  for(var i = 0; i < 4; i++) {
    var getRandomPercent = function(min, max) {
        min = Math.ceil(0);
        max = Math.floor(101);
        return Math.floor(Math.random() * (max - min)) + min;
      };

    var color = players[i] === 'Вы' ? 'red' : 'hsl(240, 50%,' + getRandomPercent() + '%)';
    createColumn(ctx, players[i], i, color, Math.random());
  }
};
