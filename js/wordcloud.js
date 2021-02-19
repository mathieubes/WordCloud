const CLASS_WC_LINE = "wordcloud-line"
const CLASS_WORD = "word"
const CLASS_STROKED_WORD = "stroked"

const WORDS = ["Strategy", "Design", "Development", "Marketing"]
const LINE_WORD_COUNT = 100
const ANIMATION_TIMEOUT = 10

let wordcloud;

function main() {
    wordcloud = document.getElementById("wordcloud")

    fillWordCloudLines(WORDS)
}

function fillWordCloudLines(words) {
    words.forEach(word => {
        let wordcloudLine = new WordcloudLine(word)
        setInterval(() => wordcloudLine.animate(wordcloudLine), ANIMATION_TIMEOUT)

        wordcloud.appendChild(wordcloudLine.element)
    })
}