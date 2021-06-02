const hero = document.getElementsByClassName('hero')[0];
const blocks = document.getElementsByClassName('blocks');

for (let index = 400; index < 400; index++) {
  hero.innnerHTML += '<div class="blocks"></div>';
}
