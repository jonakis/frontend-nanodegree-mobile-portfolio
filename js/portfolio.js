
const images = document.querySelectorAll("img");

const options = {
    root: null, // it is the viewport
    threshhold: 0, // part of the sectio/div visible to trigger function call(eg. set image)
    rootMargin: "0px 0px"
}

var lazyLoadbgImage = (image) => {
    if (image == undefined)
        return;
    var imgSrc = image.getAttribute("data-src");
    if (imgSrc == undefined)
        return;
    image.src = imgSrc;
}

const oberver = new IntersectionObserver(function (entries, observer) {
    entries.forEach(entry => {
        if (!entry.isIntersecting) {
            return;
        }
        lazyLoadbgImage(entry.target);
        observer.unobserve(entry.target);
    });

}, options);

images.forEach(section => {
    oberver.observe(section);
});