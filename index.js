class SortedList {
  constructor(items, length) {
    this.items = [];
    this.length = 0;
  }

  add(item) {
    this.items.push(item);
    this.items.sort((a, b) => a - b);
  }


  // deleteBrains() {
  //   generatedBrain.forEach((item, index) => {
  //     if (item.y > canvas.height) {
  //       generatedBrain.splice(item, index);
  //     }
  //   });
  // }


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

  sum() { }

  avg() { }
}

module.exports = SortedList;
