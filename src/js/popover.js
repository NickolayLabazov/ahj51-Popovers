

export default class Popover {
  constructor(div) {
    this.parent = div;
    this.div = 0;
  }

  create() {
    const div = document.createElement('div');
    div.setAttribute('class', 'whiteDiv');
    this.parent.appendChild(div);

    this.div = document.createElement('div');
    this.div.setAttribute('class', 'redDiv');
    this.parent.appendChild(this.div);
    this.addListener();
  }

  message() {
    this.mes = document.createElement('div');
    this.mes.setAttribute('class', 'mes');
    this.div.appendChild(this.mes);
    const name = document.createElement('h3');
    const text = document.createElement('p');
    name.innerHTML = 'Название';
    text.innerHTML = 'Описание';
    this.mes.appendChild(name);
    this.mes.appendChild(text);
    this.mes.style.top = `-${this.mes.offsetHeight}px`;
    this.mes.style.left = `${this.div.offsetWidth / 2 - this.mes.offsetWidth / 2}px`;
  }

  addListener() {
    this.div.addEventListener('click', () => {
      this.message();
    });
  }
}
