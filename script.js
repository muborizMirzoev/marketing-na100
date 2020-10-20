
const btn = document.querySelectorAll('.btn');

for(const item of btn) {
  item.addEventListener('click', udateBtn);
}

function udateBtn() {
  if (this.classList.contains('btn--focus')) {
      this.classList.remove('btn--focus');
  } else {
    this.classList.add('btn--focus');
    this.classList.remove('hover');
  }
}
