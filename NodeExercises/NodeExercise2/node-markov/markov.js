// /** Textual markov chain generator */

class MarkovMachine {
  /** build markov machine; read in text.*/

  constructor(text) {
    //split text on spaces and line breaks
    let words = text.split(/[ \r\n]+/);
    //Filter out any empty strings
    this.words = words.filter((c) => c !== "");
    //build the chains
    this.makeChains();
  }

  //   /** set markov chains:
  //    *
  //    *  for text of "the cat in the hat", chains will be
  //    *  {"the": ["cat", "hat"], "cat": ["in"], "in": ["the"], "hat": [null]} */

  makeChains() {
    //makes a new empty Map object
    this.chains = new Map();

    //Go through the object list of this.word
    for (let i = 0; i < this.words.length; i++) {
      //word is the first one we start with at i=0
      let word = this.words[i];
      //nextWord is the next word of the current word one or null
      let nextWord = this.words[i + 1] || null;

      //if the key word is in this.chain
      if (this.chains.has(word)) {
        //if yes, get the values for that key word, and push that nextWord into the values for that key word.
        this.chains.get(word).push(nextWord);
      } else {
        //if no, use '.set' to make that word as the key, and nextWord as the value for it
        this.chains.set(word, [nextWord]);
      }
    }
  }

  /** create a function to return random element from an array */
  static choice(ar) {
    return ar[Math.floor(Math.random() * ar.length)];
  }

  //   /** return random text from chains */

  makeText(numWords = 100) {
    //empty starting Array
    let out = [];
    // keys will be an array of the keys in the object from this.chains
    let keys = Array.from(this.chains.keys());
    //key is the random key, when we use the static choice function with keys being the array(ar)
    let key = MarkovMachine.choice(keys);

    //generate words until hitting null or max words

    //while the lenght of out is less than numWords(100) and key is not null
    while (out.length < numWords && key !== null) {
      //push the random key into out
      out.push(key);
      //nextWords is going get the values of that key
      let nextWords = this.chains.get(key);
      //key is going be another random choice from values in nextword.
      key = MarkovMachine.choice(nextWords);
    }
    //return out Array with a space between them
    return out.join(" ");
  }
}

module.exports = { MarkovMachine };
