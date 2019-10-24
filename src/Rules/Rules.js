class Rule {
  constructor(params) {
    //put all props in params on instance
    Object.assign(this, params);
  }

  sum(dice) {
    //sum of all dice
    return dice.reduce((prev, curr) => prev + curr);
  }
  freq(dice) {
    //frequencies of dice values
    const freqs = new Map();
    for (let d of dice) freqs.set(d, (freqs.get(d) || 0) + 1);
    return Array.from(freqs.values());
  }

  count(dice, val) {
    // times val appears in dice
    return dice.filter((d) => d === val).length;
  }
}

//return the sum of the dices with that val for example sum of all ones
class TotalOneNumber extends Rule {
  evalRoll = (dice) => {
    return this.val * this.count(dice, this.val);
  };
}

//return sum all dices that given a required val of dice for example sum of all dice when there is a 3-of-kind
class SumDistro extends Rule {
  evalRoll = (dice) => {
    return this.freq(dice).some((c) => c >= this.count) ? this.sum(dice) : 0;
  };
}

class FullHouse extends Rule {
  evalRoll = (dice) => {
    const freqs = this.freq(dice);
    return freqs.includes(2) && freqs.includes(3) ? this.score : 0;
  };
}

class SmallStraight extends Rule {
  evalRoll = (dice) => {
    const d = new Set(dice);
    if ((d.has(2) && d.has(3) && d.has(4) && d.has(1)) || d.has(5)) {
      return this.score;
    }
    if ((d.has(3) && d.has(4) && d.has(5) && d.has(2)) || d.has(6)) {
      return this.score;
    }
    return 0;
  };
}

//check if there is 5 diffrent dice & only one can be a 1 or 6
class LargeStraight extends Rule {
  evalRoll = (dice) => {
    const d = new Set(dice);

    return d.size === 5 && (!d.has(1) || !d.has(6)) ? this.score : 0;
  };
}

// check if the dice are same
class Yahtzee extends Rule {
  evalRoll = (dice) => {
    return this.freq(dice)[0] === 5 ? this.score : 0;
  };
}

const ones = new TotalOneNumber({ val: 1 });
const twos = new TotalOneNumber({ val: 2 });
const threes = new TotalOneNumber({ val: 3 });
const fours = new TotalOneNumber({ val: 4 });
const fives = new TotalOneNumber({ val: 5 });
const sixes = new TotalOneNumber({ val: 6 });

const threeOfKind = new SumDistro({ count: 3 });
const fourOfKind = new SumDistro({ count: 4 });

const fullHouse = new FullHouse({ score: 25 });

const smallStraight = new SmallStraight({score: 30});
const largeStraight = new LargeStraight({ score: 40 });

const yahtzee = new Yahtzee({ score: 50 });

//some of all dice with at least 0 of a kind
const chance = new SumDistro({ count: 0 });

export {
  ones,
  twos,
  threes,
  fours,
  fives,
  sixes,
  threeOfKind,
  fourOfKind,
  fullHouse,
  smallStraight,
  largeStraight,
  yahtzee,
  chance
};
