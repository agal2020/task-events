import { visitFunctionBody } from 'typescript';

/*
   1. Создайте функцию createButton(). Необходимо, чтобы эта функция осуществила вставку в body тег button с текстом: "Удали меня".
      При клике по button удалить этот button.
*/
export function createButton() {
    let button = document.createElement('button');
    button.innerHTML = 'Удали меня';
    document.body.append(button);

    button.addEventListener('click', () => {
        button.remove();
    });
}

/*
   2. Создайте функцию createArrList(arr), в которую передается 1 параметр: arr - массив строк.
      Функция выводит этот массив в виде маркированного списка внутри тега body.
      При наведении курсора мыши на элемент списка у этого элемента создается атрибут title, в котором записан его текст.
*/
export function createArrList(arr) {
    const ul = document.createElement('ul');

    for (let i of arr) {
        const li = document.createElement('li');
        li.innerHTML = i;
        li.addEventListener('mouseover', (event) => {
            event.target.setAttribute('title', event.target.innerHTML);
        });
        ul.append(li);
    }
    document.body.append(ul);
}

/*
   3. Создайте функцию createLink(), которая сгенерирует следующую разметку и вставит ее в body:
      <a href="https://tensor.ru/">tensor</a>
      При первом клике по ссылке в конец ее текста через пробел дописывается ее href.
      При следующем клике происходит действие по умолчанию (переход по ссылке в текущей вкладке).
*/
export function createLink() {
    const a = document.createElement('a');
    a.setAttribute('href', 'https://tensor.ru/');
    a.innerHTML = 'tensor';
    document.body.append(a);
    a.addEventListener(
        'click',
        (event) => {
            event.target.innerHTML =
                event.target.innerHTML +
                ' ' +
                event.target.getAttribute('href');
            event.preventDefault();
        },
        { once: true },
    );
}

/*
   4. Создайте функцию createList(), которая сгенерирует следующую разметку и вставит ее в body:
      <ul>
         <li>Пункт</li>
      </ul>
      <button>Добавить пункт</button>
      При клике по элементу li ему в конец текста добавляется восклицательный знак.
      При клике по button в конец списка добавляется новый элемент li с текстом: "Пункт".
      Клик по новому li также добавляет восклицательный знак в конец текста.
*/
export function createList() {
    const ul = document.createElement('ul');
    const li = document.createElement('li');
    li.innerHTML = 'Пункт';

    ul.addEventListener('click', (event) => {
        if (event.target && event.target.nodeName === 'LI') {
            event.target.innerHTML += '!';
        }
    });
    const btn = document.createElement('button');
    btn.innerHTML = 'Добавить пункт';
    btn.addEventListener('click', (event) => {
        const li = document.createElement('li');
        li.innerHTML = 'Пункт';
        ul.append(li);
    });

    ul.append(li);
    document.body.append(ul);
    document.body.append(btn);
}
