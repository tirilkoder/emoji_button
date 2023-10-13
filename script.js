//HTML kobling
const emojiList = document.querySelector("#emoji_list");
console.log(emojiList);

const emojis = {
    catEmojis: ["😺", "😸", "😹", "😻", "😼", "😽", "🙀", "😿", "😾", "🐱"]
};

const list = document.querySelector("#emoji_list")

function renderEmojis() {
    for (i = 0; i < emojis.catEmojis.length; i++) {
        let newListElement = document.createElement("li");
        newListElement.innerText = emojis.catEmojis[i];
        list.appendChild(newListElement);
    }   
}