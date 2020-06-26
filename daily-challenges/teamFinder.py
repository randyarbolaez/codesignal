You and your friends would like to compete, but there is limited time to enter! You need to pick the first 2 Pokemon in your list whose combined attack power is equal to maxPower and return their indices (0-based). If there are no such pairs, return an empty array.

def teamFinder(pokemonList, maxPower):
  pokemons = []
  
  for i in pokemonList:
    if maxPower-i in pokemonList and pokemonList.index(i) != pokemonList.index(maxPower-i) :
      pokemons.append([pokemonList.index(i),pokemonList.index(maxPower-i)])
      break
      
  if len(pokemons) == 0:
      return []
  else:
      return pokemons[0]
