export default function formatApi(drink) {
  const formattedApi = drink;
  if (formattedApi === 'Alcoholic') {
    return '/filter.php?a=Alcoholic';
  } else if (formattedApi === 'Non Alcoholic') {
    return '/filter.php?a=Non_Alcoholic';
  } else if (formattedApi === 'Cocktail') {
    return '/filter.php?c=Cocktail';
  } else if (formattedApi === 'Ordinary Drink') {
    return '/filter.php?c=Ordinary_Drink';
  } else if (formattedApi === 'Cocktail glass') {
    return '/filter.php?g=Cocktail_glass';
  } else if (formattedApi === 'Champagne flute') {
    return '/filter.php?g=Champagne_flute';
  } else {
    return '/lookup.php?i=';
  }
}
