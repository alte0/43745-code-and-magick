'use strict';

(function () {

  var USER_DIALOG = document.querySelector('.setup');
  USER_DIALOG.classList.remove('hidden');

  var similarListElement = USER_DIALOG.querySelector('.setup-similar-list');

  var similarWizardTemplate = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');

  var WIZARD_NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
  var WIZARD_SURNAME = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
  var WIZARD_COAT_COLOR = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
  var WIZARD_EYES_COLOR = ['black', 'red', 'blue', 'yellow', 'green'];

  var WIZARDS_COUNT = 4;

  var getRandomNumber = function (min, max) {
    return min + Math.floor(Math.random() * (max + 1 - min));
  };

  var getRandomItem = function (arr) {
    return getRandomNumber(0, arr.length);
  };

  var getWizardList = function (count) {
    var wizards = [];

    for (var i = 0; i < count; i++) {
      wizards.push({
        name: WIZARD_NAMES[getRandomItem(WIZARD_NAMES)] + ' ' + WIZARD_NAMES[getRandomItem(WIZARD_SURNAME)],
        coatColor: WIZARD_COAT_COLOR[getRandomItem(WIZARD_COAT_COLOR)],
        eyesColor: WIZARD_EYES_COLOR[getRandomItem(WIZARD_EYES_COLOR)]
      });
    }

    return wizards;
  };
  var wizards = getWizardList(WIZARDS_COUNT);

  var renderWizard = function (wizard) {
    var wizardElement = similarWizardTemplate.cloneNode(true);

    wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
    wizardElement.querySelector('.wizard-coat').style.fill = wizard.coatColor;
    wizardElement.querySelector('.wizard-eyes').style.fill = wizard.eyesColor;

    return wizardElement;
  };

  var fragment = document.createDocumentFragment();
  wizards.forEach(function (item) {
    fragment.appendChild(renderWizard(item));
  });

  similarListElement.appendChild(fragment);

  document.querySelector('.setup-similar').classList.remove('hidden');

})();
