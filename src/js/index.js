import '../styles/main.scss';

const refs = {
  button: document.querySelector('.btn-delete'),
  input: document.querySelectorAll('.keys input'),
  display: document.querySelector('.display textarea'),
};

refs.button.addEventListener('click', (e) => {
  e.preventDefault();
  refs.display.textContent = refs.display.innerHTML.slice(0, -1);
});

refs.input.forEach((item) =>
  item.addEventListener('click', () => {
    const inputValue = item.value.toLowerCase();
    refs.display.textContent += inputValue;
    setTimeout(() => {
      item.blur();
    }, 200);
  })
);
