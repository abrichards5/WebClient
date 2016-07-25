angular.module('proton.message')
.factory('transformImages', function() {
    return function(html) {
        var images = html.querySelectorAll('img');

        if (images.length > 0) {
            images.forEach(function(image) {
                var src = image.getAttribute('src');
                var embedded = new RegExp('^(cid:)', 'g');
                var isEmbedded = embedded.test(src);

                if (image.complete && isEmbedded) {
                    var wrapper = document.createElement('div');

                    wrapper.className = 'image loading';
                    image.before(wrapper);
                    wrapper.append(element);
                }
            });
        }

        return html;
    };
});
