
'use strict';
// use app here
window.addEventListener('load', function() {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', 'scripts/faq.json', true);
    xhr.responseType = 'json';
    xhr.send();
    var question = document.querySelector('#question');
    var answer = document.querySelector('#answer');
    var author = document.querySelector('#author');
    var reference = document.querySelector('#reference');
    var container = document.querySelector('#container');

    function update(item) {
        container.classList.remove('up');
        question.textContent = item['question'];
        answer.textContent = item['answer'];
        author.textContent = item['provider'];
        reference.textContent = item['reference'];
        answer.classList.add('show');
    }

    xhr.onreadystatechange = function() {
        if (xhr.readyState === 4) {
            var res;
            if (typeof(xhr.response) === 'string') {
                res = JSON.parse(xhr.response);
            } else {
                res = xhr.response;
            }
            var item = res[Math.floor(Math.random() * res.length)];
            answer.classList.remove('show');
            update(item);
            window.setInterval(function() {
                item = res[Math.floor(Math.random() * res.length)];
                answer.classList.remove('show');
                container.classList.add('up');
                window.setTimeout(update.bind(null, item), 1000);
            }, 20000);
        }
    };
})
