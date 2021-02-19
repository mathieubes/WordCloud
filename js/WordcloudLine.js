class WordcloudLine {
    constructor(word) {
        this.word = word
        this.element = this.getWordcloudLine(word)
        this.x = 0.0
    }

    getWordcloudLine(word) {
        let wcLine = document.createElement("div")
        wcLine.className = CLASS_WC_LINE

        for (let i = 0; i < LINE_WORD_COUNT; i++) {
            let wcWord = document.createElement("div")
            wcWord.className = CLASS_WORD
            if ((i % 2) === 1)
                wcWord.classList.add(CLASS_STROKED_WORD)
            wcWord.innerText = word

            wcLine.appendChild(wcWord)
        }

        return wcLine
    }

    animate(instance) {
        let speedMultiplicator = instance.word.length * 0.03
        instance.x -= speedMultiplicator
        instance.element.style.transform = `translateX(${instance.x}px)`
        console.log(instance)
    }
}