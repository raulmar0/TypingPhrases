let i: number = 0

class TypingPhrases {
  phraseContainer: HTMLElement
  input: string[]
  phrases: string[]
  currentPhrase: string
  phraseSpeed: number
  typingSpeed: number

  constructor(input: string[], phraseSpeed: number, typingSpeed: number) {
    this.phraseContainer = document.querySelector('.phrase')
    this.input = input
    this.phraseSpeed = phraseSpeed
    this.typingSpeed = typingSpeed
    window.addEventListener('load', this.initPhrases())
  }

  initPhrases(): any {
    this.phrases = [...this.input]
    
    setInterval(() => {
      this.renderPhrase()
    },0)
  }
  
  renderPhrase() {
    if(this.currentPhrase) {
      return
    }
    const phrase = this.getPhrase()
    this.renderLetters(phrase)
    this.currentPhrase = phrase
    
    setTimeout(() => {
      this.currentPhrase = null
      this.phraseContainer.innerHTML = ''
      i = 0
    }, this.phraseSpeed)
  }

  getPhrase() {
    if(this.phrases.length === 0) {
      this.initPhrases()
    }
    return this.phrases.pop()
  }

  renderLetters(phrase) {
    if(i < phrase.length) {
      // debugger
      this.phraseContainer.innerHTML += phrase.charAt(i)
      i++
      setTimeout(() => {this.renderLetters(phrase)},this.typingSpeed)
    }
    return
  }
}

export default TypingPhrases