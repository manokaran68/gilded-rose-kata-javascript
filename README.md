We are a development agency who helps our
clients improve both their systems as well as the quality of their code. First,
its worthwhile to mention the things we value:

1. **Readability:** We value readable code that is easily understood by the
   next developer.
2. **Maintainability:** We value code that is easily maintained.
3. **Extendability:** We value code that is easy to extend to new use cases.
4. **Testing:** We value code that is well tested as manual testing is slow and
   prone to errors.

We have recently engaged with a client, The Gilded Rose, who has hired us to
update their inventory management system. The Gilded Rose is a small inn with a
prime location in a prominent city ran by a friendly innkeeper named Allison.
They only buy and sell only the finest goods. Unfortunately, our goods are
constantly degrading in quality as they approach their sell by date.

Prior to our engagement, The Gilded Rose hired an independent developer named
Leeroy to build their inventory management system. Leeroy was a no-nonsense
type (and a bit gung-ho) who has moved on to new adventures. We will be taking
over updating, supporting, and maintaining the inventory management system he
built moving forward.

Our first task is to add a new feature to the inventory management system so
that The Gilded Rose can start selling a new category of item.

First an introduction to our system:

  - All items have a sell-in value which denotes the number of days we have to
    sell the item

  - All items have a quality value which denotes how valuable the item is

  - At the end of each day our system lowers both values for every item

Pretty simple, right? Well this is where it gets interesting:

  - Once the sell by date has passed, quality degrades twice as fast

  - The quality of an item is never negative

  - "Aged Brie" actually increases in quality the older it gets

  - The quality of an item is never more than 50

  - "Sulfuras", being a legendary item, never has to be sold or decreases in
    quality

  - "Backstage passes", like aged brie, increases in quality as its sell-in
    value approaches; quality increases by 2 when there are 10 days or less
    and by 3 when there are 5 days or less but quality drops to 0 after the
    concert

We have recently signed a supplier of conjured items. This requires an update
to our system:

  - "Conjured" items degrade in quality twice as fast as normal items

Feel free to make any changes to the update-quality method and add any new code
as long as everything still works correctly. However, do not alter the item
function as that belongs to the goblin in the corner who will insta-rage and
one-shot you as he doesn't believe in shared code ownership.


Just for clarification, an item can never have its quality increase above 50,
however "Sulfuras" is a legendary item and as such its quality is 80 and it
never alters.
