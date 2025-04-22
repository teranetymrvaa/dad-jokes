const joketext = document.querySelector('.joke-text');
const jokeBtn = document.querySelector('.joke-btn');
let jokes=[
    "Why are skeletons so calm? Because nothing gets under their skin.",
    "What's the difference between a hippo and a zippo? One is really heavy, the other is a little lighter.",
    "I been watching a channel on TV that is strictly just about origami — of course it is paper-view.",
    "Where do owls go to buy their baby clothes? The owlet malls.",
    "Ben & Jerry's really need to improve their operation. The only way to get there is down a rocky road.",
    "Why did the scarecrow win an award? Because he was outstanding in his field.",
    "Why do choirs keep buckets handy? So they can carry their tune",
    "How do locomotives know where they're going? Lots of training",
    "My boss told me to have a good day. So I went home...",
    "."
]
let count=0
jokeBtn.addEventListener("click",function () {
    joketext.textContent=jokes[count]
    count++
    if (count >= jokes.length) {
        count = 0; 
    }
})