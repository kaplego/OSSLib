window.addEventListener('load', () => {
    var jq = document.createElement('script');
    jq.src = 'https://code.jquery.com/jquery-3.6.0.min.js';
    jq.charset = 'utf-8';
    jq.type = 'text/javascript';
    document.querySelector('body').appendChild(jq);

    jq.addEventListener('load', async() => {
        if (image_vars !== undefined) {
            const image_vars = {
                "--github-mark": "https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"
            }
        }
        
        [...$('*[ossbg]')].forEach(el => {
            if (el.parentElement.nodeName == "PRE") return;
            var url = el.attributes.getNamedItem('ossbg').value;

            if (!image_vars[url] && url.match(/((([A-Za-z]{3,9}:(?:\/\/)?)(?:[\-;:&=\+\$,\w]+@)?[A-Za-z0-9\.\-]+|(?:www\.|[\-;:&=\+\$,\w]+@)[A-Za-z0-9\.\-]+)((?:\/[\+~%\/\.\w\-_]*)?\??(?:[\-\+=&;%@\.\w_]*)#?(?:[\.\!\/\\\w]*))?)/) == null) return;

            if (image_vars[url]) url = image_vars[url];

            // POSITION
            if (el.attributes.getNamedItem('ossbg-pos') != null) pos = el.attributes.getNamedItem('ossbg-pos').value;
            else pos = 'center';

            // SIZE
            if (el.attributes.getNamedItem('ossbg-size') != null) size = el.attributes.getNamedItem('ossbg-size').value;
            else size = 'cover';

            // REPEAT
            if (el.attributes.getNamedItem('ossbg-rep') != null) rep = el.attributes.getNamedItem('ossbg-rep').value;
            else rep = 'no-repeat';

            el.style.background = pos + ' / ' + size + ' ' + rep + ' url("' + url + '")';
        });


        [...$('code[fillby]')].forEach(el => {
            el.innerText = el[el.attributes.getNamedItem('fillby').value].innerText;
        })
    });
})
