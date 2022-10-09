const titleDesign = document.getElementById('design-title')
const designColumns = document.querySelectorAll('.left_panel_col')
const talentItem = document.querySelectorAll('.talent_item')

const titleWeb = document.querySelectorAll('.web_title')
const webColumns = document.querySelectorAll('.right_panel_col')
const talentWeb = document.querySelectorAll('.web_talent_item')

const backBtnDesign = document.querySelector('.back_button_design')
const backBtnWeb = document.querySelector('.back_button_web')

const revealEach = e => {
    e.classList.add('animation')
    e.classList.remove('animation_hide')
}
const hideEach = e => {
    e.classList.add('animation_hide')
    e.classList.remove('animation')
}

function revealDesign() {
    designColumns.forEach((item, i) => {
        setTimeout(() => {
          revealEach(item);
        }, i * 500);
      });

      setTimeout(() => {
        titleDesign.classList.add('inactive')
      }, 1500);
    
      talentItem.forEach(item => {
        setTimeout(() => {
            item.classList.remove('inactive')
            item.classList.add('talent_animation')
          }, 1600);
      })

      backBtnDesign.classList.toggle('inactive')
}

function hideDesign() {
    designColumns.forEach((item, i) => {
        setTimeout(() => {
          hideEach(item);
        }, i * 500);
      });

      setTimeout(() => {
        titleDesign.classList.remove('inactive')
      }, 1500);
    
      talentItem.forEach(item => {
        setTimeout(() => {
            item.classList.add('inactive')
          }, 1000);
      })

      backBtnDesign.classList.toggle('inactive')
}

function revealWeb() {
    webColumns.forEach((item, i) => {
        setTimeout(() => {
            revealEach(item)
        }, i * 500)
    })

    titleWeb.forEach( element => {
        setTimeout(() => {
            element.classList.add('inactive')
          }, 1500);
    })

    talentWeb.forEach( item => {
        setTimeout(() => {
            item.classList.remove('inactive')
        }, 2000);
    })

    backBtnWeb.classList.toggle('inactive')
}

function hideWeb() {
    webColumns.forEach((item, i) => {
        setTimeout(() => {
            hideEach(item)
        }, i * 500)
    })

    titleWeb.forEach( element => {
        setTimeout(() => {
            element.classList.remove('inactive')
          }, 1500);
    })

    talentWeb.forEach( item => {
        setTimeout(() => {
            item.classList.add('inactive')
        }, 1000);
    })

    backBtnWeb.classList.toggle('inactive')
}

titleDesign.addEventListener('pointerdown', revealDesign)

titleWeb.forEach( title => {
    title.addEventListener('pointerdown', revealWeb)
})

backBtnDesign.addEventListener('pointerdown', hideDesign)
backBtnWeb.addEventListener('pointerdown', hideWeb)