import './index.scss';

class MyClass {
  private container: HTMLElement;
  constructor(private name: string) {
    const container: HTMLElement = document.createElement('div');
    container.classList.add('container');
    document.body.appendChild(container);
    this.container = container;
  }
  sayName() {
    console.log(this.name);
  }
  appendChildren(num: number) {
    if (!num) {
      throw Error('no number provided to appendChildren method');
    }
    if (!this.container) {
      throw Error('container is null');
    }
    for (let i = 0; i < num; ++i) {
      const elt: HTMLElement = document.createElement('div');
      this.container.appendChild(elt);
      elt.classList.add('child');
      //elt.innerHTML = this.name;
    }
  }
  appendChildrenToChildren(num: number) {
    const children: HTMLElement[] = document.getElementsByClassName('child');
    [].forEach.call(children, (elt: HTMLElement, idx: number) => {
      for (let i = 0; i < num; ++i) {
        const childChild: HTMLElement = document.createElement('div');
        if (i === 3 && idx === 0) {
          childChild.classList.add('stepChild');
        } else {
          childChild.classList.add('childChild');
        }
          elt.appendChild(childChild);
      }
    })
  }
}

window.onload = () => {
  const mc = new MyClass('test');
  mc.sayName();
  mc.appendChildren(20);
  mc.appendChildrenToChildren(5);
}
