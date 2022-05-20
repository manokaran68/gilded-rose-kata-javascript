const DEFAULT_QUALITY_STEP = 1;
const SELL_IN_STEP = 1;
const MIN_QUALITY = 0;
const MAX_QUALITY = 50;
const NEGATIVE_MODIFIER = -1;
const EXPIRY_MODIFIER = 2;
const TO = "..";

const ITEM_TYPES = {
  "Sulfuras, Hand of Ragnaros": {
    legendary: true,
  },
  "Aged Brie": {
    appreciate_on_aging: true,
  },
  "Backstage passes to a TAFKAL80ETC concert": {
    appreciate_on_aging: true,
    expiry_quality: 0,
    quality_steps: {
      [`1${TO}5`]: 3,
      [`6${TO}10`]: 2,
      [`11${TO}Infinity`]: 1,
    },
  },
  "Conjured Mana Cake": {
    quality_steps: {
      [`-Infinity${TO}Infinity`]: 2,
    },
  },
  "Misconfigured demon": {
    quality_steps: {
      [`Hell${TO}Highwater`]: 2,
    },
  },
};

var itemsCopy = [];

function update_quality_v2() {
  itemsCopy.forEach((item) => {
    const itype = ITEM_TYPES[item.name] || {};

    if (itype.legendary) {
      return;
    }

    let new_quality;
    let quality_step = DEFAULT_QUALITY_STEP;

    if (itype.quality_steps) {
      const sell_in_range = Object.keys(itype.quality_steps).find(
        (sell_in_range) => {
          let [min, max] = sell_in_range.split(TO).map(Number);
          if (isNaN(min) || isNaN(max)) {
            console.log(
              `${sell_in_range} does not split neatly to numbers! Skipping this.`
            );
            return;
          }
          return min <= item.sell_in && item.sell_in <= max;
        }
      );
      if (sell_in_range) {
        quality_step = itype.quality_steps[sell_in_range];
      }
    }

    if (!itype.appreciate_on_aging) {
      quality_step = quality_step * NEGATIVE_MODIFIER;
    }

    if (item.sell_in <= 0 && itype.expiry_quality !== undefined) {
      new_quality = itype.expiry_quality;
    } else if (item.sell_in <= 0) {
      new_quality = item.quality + quality_step * EXPIRY_MODIFIER;
    } else {
      new_quality = item.quality + quality_step;
    }

    if (new_quality > MAX_QUALITY) {
      new_quality = MAX_QUALITY;
    }
    if (new_quality < MIN_QUALITY) {
      new_quality = MIN_QUALITY;
    }

    item.quality = new_quality;
    item.sell_in -= SELL_IN_STEP;
  });
}
