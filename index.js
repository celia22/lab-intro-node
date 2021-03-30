class SortedList {
  constructor(items, length) {
    this.items = [];
    this.length = 0;
  }

  add(item) {
    this.items.push(item);
    this.items.sort((a, b) => a - b);
  }


  get(pos) {
    this.items.forEach((item, pos) => {
      if (!pos) {
        throw new Error('OutOfBounds');
      }
      return item(pos)
    })
  }

  max() {
    if (this.items.length === 0) {
      throw new Error('EmptySortedList');
    }
    let max = Math.max(...this.items);
    return max
  }

  min() {
    if (this.items.length === 0) {
      throw new Error('EmptySortedList');
    }
    let min = Math.min(...this.items);
    return min
  }

  sum() {
    let result = 0;
    this.items.forEach(item => {
      result += item
    })
    return result
  }

  avg() {
    if (this.items.length === 0) {
      throw new Error('EmptySortedList');
    }
    let av = 0;
    this.items.forEach(item => {
      av += item
    })
    return av / this.items.length
  }
}

module.exports = SortedList;
