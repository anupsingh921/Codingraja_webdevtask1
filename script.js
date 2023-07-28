const quotes = [{
    quote: `"Almost everything will work again if you unplug it for a few minutes, including you"`,
    writer: `– Anne Lamott`
}, {
    quote: `"A dead end is just a good place to turn around."`,
    writer: `– Naomi Judd`
}, {
    quote: `"All you need in this life is ignorance and confidence; then success is sure."`,
    writer: `– Mark Twain`
}, {
    quote: `"Life has no limitations, except the ones you make."`,
    writer: `– Les Brown`
}, {
    quote: `"Perfection is not attainable.But if we chase perfection we can catch excellence"`,
    writer: `– Vince Lombardi`
}, {
    quote: `"Life is not a problem to be solved, but a reality to be experienced."`,
    writer: `– Soren Kierkegaard`
}, {
    quote: `"You don't have to be great to start, but you have to start to be great."`,
    writer: `– Zig Ziglar`
}, {
    quote: `"No Matter What Happens In Life, Be Good To People. Being Good To People Is A Wonderful Legacy To Leave Behind."`,
    writer: `- Taylor Swift`
}, {
    quote: `"Through hard work, perseverance and a faith in God, you can live your dreams."`,
    writer: `- Ben Carson`
}, ]



let btn = document.querySelector("#Qbtn");
let quote = document.querySelector(".quote");
let writer = document.querySelector(".writer");

btn.addEventListener("click", function() {

    let random = Math.floor(Math.random() * quotes.length);
    quote.innerHTML = quotes[random].quote;
    writer.innerHTML = quotes[random].writer;

})