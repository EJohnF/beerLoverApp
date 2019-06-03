## Purpose

The solution of the test task for Medici-Living company

## Know limitations

The task requires "see the total amount of beers". However I don't see a proper end point in the API to get this information. Surely, it's possible to do by retrieving all beers page-by-page. But I don't think that it's a good solution in sense of traffic consumption and speed. 
Ideally, I would either add new API point for that or add info for queries about total number (like it is in [pokemon API](https://pokeapi.co/))
 
## Tests

After implementing Detox tests I noticed that testing library was specified in the task.
So, I decided not change it because:
* Detox has some significant advantages (we can discuss it)
* If it's very important for you to see the usage of specified lib - I can learn it and implement. Just let me know.

## Other notes

Martin mentioned that over redux middlewares he prefers redux-sage, so that I tried to use it. It was my first experience with it, hopefully I've got the patterns correct :)

It also might be good to move specified dispatcher from the MainList/mapAction function to separate core/actions place. But it's already too much essences for such a small project.

## What's next

I'd add react-native-offline to support offline state of application (re-fetching) and displaying the problem to user.
Add internalisation (react-native-localize)