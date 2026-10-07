import type { WateringGuide } from '../../types';

export const WATERING_GUIDES_5: Record<string, WateringGuide> = {
  // Fruitiers
  pommier: {
    method: 'Arroser lentement au pied, dans une cuvette creusée autour du tronc, le soir en été ; pailler pour garder la fraîcheur et ne pas mouiller le feuillage (tavelure).',
    amount: 'Jeune arbre : 30 à 40 L par semaine les trois premiers étés. En bac de 50 L, environ un quart du volume (10 à 12 L) dès que le dessus sèche ; rien en hiver en pleine terre.',
    potShare: 0.25,
  },
  poirier: {
    method: 'Arroser au pied en une fois, lentement, pour humidifier la terre en profondeur ; éviter les arrosages fréquents en surface, il redoute les sols détrempés.',
    amount: 'Jeune arbre : 30 L par semaine en été les premières années, puis seulement en sécheresse marquée. En bac, un quart du volume, soit 1,8 L pour un pot de 25 cm de jeune scion.',
    potShare: 0.25,
  },
  cerisier: {
    method: 'Arrosage profond au pied, espacé, surtout dans les semaines précédant la récolte ; arroser régulièrement plutôt que beaucoup d’un coup pour éviter l’éclatement des cerises.',
    amount: 'Jeune arbre : 30 L tous les 10 jours en été. En pot (porte-greffe nain), environ un quart du volume, soit 10 L pour un bac de 40 L ; rien en hiver.',
    potShare: 0.25,
  },
  prunier: {
    method: 'Arroser au pied dans une cuvette, le soir, seulement en sécheresse prolongée pendant le grossissement des fruits ; pailler le sol.',
    amount: 'Environ 30 à 40 L par arrosage pour un jeune arbre, 50 L pour un arbre adulte en sécheresse. En bac, un quart du volume, soit 1,8 L pour un pot de 25 cm.',
    potShare: 0.25,
  },
  mirabellier: {
    method: 'Arroser copieusement au pied les premières années, en laissant l’eau s’infiltrer lentement ; ensuite, n’arroser qu’en sécheresse marquée.',
    amount: 'Jeune arbre : 30 L par semaine en été les deux ou trois premières années. En pot, un quart du volume, soit 1,8 L pour 25 cm ; aucun arrosage en hiver.',
    potShare: 0.25,
  },
  abricotier: {
    method: 'Arroser au pied, jamais sur le feuillage ni le tronc, pendant le grossissement des fruits puis réduire ; laisser la terre sécher en surface entre deux arrosages.',
    amount: 'Jeune arbre : 20 à 30 L tous les 10 jours en été. En bac de 60 L, environ 10 à 12 L (un cinquième du volume) quand le dessus est sec.',
    potShare: 0.2,
  },
  pecher: {
    method: 'Arroser régulièrement au pied, sans mouiller le feuillage (cloque), de préférence le matin ; pailler pour limiter l’évaporation.',
    amount: 'Environ 20 à 30 L par semaine en été pour un jeune arbre. En pot, un quart du volume, soit 1,8 L pour un pot de 25 cm ; rien en hiver.',
    potShare: 0.25,
  },
  figuier: {
    method: 'En pleine terre, arroser seulement les jeunes sujets, au pied et en profondeur. En pot, arroser à fond dès que la surface sèche en été et vider la soucoupe.',
    amount: 'Jeune figuier : 20 L tous les 10 jours en été. En pot, environ un quart du volume, soit 1,8 L pour un pot de 25 cm ; presque au sec en hiver.',
    potShare: 0.25,
  },
  vigne: {
    method: 'En pleine terre, n’arroser que les jeunes plants, lentement au pied pour encourager les racines à descendre. En bac, arroser quand le substrat est sec sur 3 cm.',
    amount: 'Jeune pied : 10 à 15 L tous les 10 jours la première année. En bac de 50 L, environ 8 à 10 L (un cinquième) ; aucun arrosage en hiver.',
    potShare: 0.2,
  },
  kiwi: {
    method: 'Arroser copieusement au pied, idéalement en goutte-à-goutte, le soir en été ; pailler généreusement, ses racines superficielles craignent le dessèchement.',
    amount: 'Environ 20 à 30 L par pied deux fois par semaine en été. En grand bac, un tiers du volume, soit 15 L pour 50 L ; très peu en hiver.',
    potShare: 0.3,
  },
  noisetier: {
    method: 'Arroser au pied en profondeur les deux premières années, avec une cuvette pour retenir l’eau ; ensuite seulement en sécheresse sévère.',
    amount: 'Jeune cépée : 15 à 20 L tous les 10 jours en été. En bac, un quart du volume, soit 7 L pour 30 L ; rien en hiver.',
    potShare: 0.25,
  },
  noyer: {
    method: 'Arroser lentement au pied les trois premiers étés, en arrosages espacés et profonds qui suivent le pivot ; ensuite ses racines profondes suffisent.',
    amount: 'Jeune arbre : 40 à 50 L tous les 15 jours en été. Aucun arrosage en hiver ni une fois l’arbre installé.',
    potShare: null,
  },
  chataignier: {
    method: 'Arroser les jeunes sujets au pied, en profondeur et de façon espacée, avec une eau non calcaire si possible ; pailler pour garder le sol frais.',
    amount: 'Jeune arbre : 40 à 50 L tous les 15 jours en été. Rien en hiver ; adulte, seulement en sécheresse prolongée sur sol superficiel.',
    potShare: null,
  },
  amandier: {
    method: 'Arroser seulement les jeunes arbres, au pied et en profondeur, puis laisser sécher le sol : il redoute l’excès d’eau plus que la sécheresse.',
    amount: 'Jeune arbre : 20 à 30 L tous les 15 jours en été. En pot, un cinquième du volume, soit 2 L pour 20 cm ; rien en hiver.',
    potShare: 0.2,
  },
  cognassier: {
    method: 'Arroser au pied, lentement, les premières années en été ; il aime les sols frais, un paillage épais réduit les arrosages.',
    amount: 'Jeune arbre : 20 à 30 L par semaine en été. En bac, un quart du volume, soit 7 L pour un bac de 30 L ; rien en hiver.',
    potShare: 0.25,
  },
  'neflier-du-japon': {
    method: 'Arroser régulièrement au pied en été en laissant juste sécher la surface ; en pot, garder le substrat légèrement frais sans eau stagnante dans la soucoupe.',
    amount: 'En pleine terre, 20 L par semaine en été. En bac de 40 L, environ 10 L (un quart) par arrosage ; moitié moins en hiver.',
    potShare: 0.25,
  },
  grenadier: {
    method: 'Arroser au pied de façon régulière pendant le grossissement des fruits, sans à-coups pour éviter qu’ils éclatent ; laisser sécher le dessus entre deux arrosages.',
    amount: 'Pleine terre : 15 à 20 L par semaine en été. En bac de 40 L, environ 8 L (un cinquième) ; presque au sec en hiver.',
    potShare: 0.2,
  },
  kaki: {
    method: 'Arroser au pied régulièrement les premiers étés, plutôt le soir, et pailler ; un sol qui sèche brutalement fait tomber les jeunes fruits.',
    amount: 'Jeune arbre : 20 à 30 L par semaine en été. En bac, un quart du volume, soit 7 L pour 30 L ; rien en hiver.',
    potShare: 0.25,
  },
  oranger: {
    method: 'Arroser abondamment dès que la surface sèche, avec de l’eau de pluie ou non calcaire à température ambiante, puis vider la soucoupe après 15 minutes.',
    amount: 'Environ un quart du volume du pot, soit 1,8 L pour un pot de 25 cm ; tous les 10 jours seulement en hiver au frais.',
    potShare: 0.25,
  },
  mandarinier: {
    method: 'Arroser à fond quand le dessus du substrat est sec, avec une eau peu calcaire, et laisser bien s’égoutter ; réduire nettement en hiver dans un local frais.',
    amount: 'Environ un quart du volume du pot, soit 1,8 L pour un pot de 25 cm ; moitié moins en hiver.',
    potShare: 0.25,
  },
  kumquat: {
    method: 'Arroser à fond quand la surface sèche, à l’eau de pluie, sans laisser d’eau dans la soucoupe ; en hiver au chaud, bassiner le feuillage pour l’humidité.',
    amount: 'Environ un quart du volume du pot, soit 0,9 L pour un pot de 20 cm ; moitié moins en hiver.',
    potShare: 0.25,
  },
  'citron-caviar': {
    method: 'Arroser modérément quand le dessus est sec sur 2 cm, avec une eau non calcaire, et vider la soucoupe : il craint autant l’excès que le manque d’eau.',
    amount: 'Environ un cinquième du volume du pot, soit 1,4 L pour un pot de 25 cm ; moitié moins en hiver.',
    potShare: 0.2,
  },
  avocatier: {
    method: 'Arroser doucement à l’eau à température ambiante pour garder le substrat juste frais, jamais détrempé ; vider la soucoupe, ses racines s’asphyxient vite.',
    amount: 'Environ un cinquième du volume du pot, soit 0,7 L pour un pot de 20 cm ; moitié moins en hiver.',
    potShare: 0.2,
  },
  bananier: {
    method: 'Arroser copieusement au pied en été, le soir, et pailler épais ; en hiver, réduire fortement et protéger la souche, surtout en pot.',
    amount: 'Pleine terre : 20 à 30 L deux fois par semaine en été. En bac de 50 L, environ 15 L (un tiers) ; presque au sec en hiver.',
    potShare: 0.3,
  },
  feijoa: {
    method: 'Arroser au pied pendant la floraison et le grossissement des fruits, en laissant sécher la surface entre deux arrosages ; pailler.',
    amount: 'Pleine terre : 15 à 20 L par semaine en été. En pot, un quart du volume, soit 1,8 L pour 25 cm ; peu en hiver.',
    potShare: 0.25,
  },
  arbousier: {
    method: 'Arroser au pied la première année, de préférence à l’eau de pluie (il préfère les sols non calcaires), puis le laisser se débrouiller.',
    amount: 'Jeune sujet : 15 L tous les 10 jours en été la première année. En pot, un cinquième du volume, soit 1,4 L pour 25 cm.',
    potShare: 0.2,
  },
  jujubier: {
    method: 'Arroser seulement les jeunes plants, au pied et en profondeur, puis laisser sécher complètement le sol entre deux arrosages.',
    amount: 'Jeune plant : 15 à 20 L tous les 15 jours en été. En pot, un cinquième du volume, soit 1,4 L pour 25 cm ; rien en hiver.',
    potShare: 0.2,
  },
  passiflore: {
    method: 'Arroser copieusement au pied en été, dès que la surface sèche, sans mouiller les feuilles ; réduire nettement en hiver à l’abri.',
    amount: 'Environ un tiers du volume du pot, soit 2,3 L pour un pot de 25 cm ; en hiver, un petit verre toutes les deux semaines.',
    potShare: 0.3,
  },
  goji: {
    method: 'Arroser au pied les deux premières années en laissant sécher la terre entre deux apports ; ensuite il résiste à la sécheresse.',
    amount: 'Environ 10 L par pied par semaine en été la première année. En pot, un cinquième du volume, soit 2,5 L pour un pot de 30 cm.',
    potShare: 0.2,
  },
  'cornouiller-male': {
    method: 'Arroser au pied l’année de plantation, en profondeur ; une fois installé, aucun arrosage sauf sécheresse extrême.',
    amount: 'Jeune sujet : 15 à 20 L tous les 15 jours en été la première année. En bac, un quart du volume, soit 7 L pour 30 L.',
    potShare: 0.25,
  },
  'sureau-noir': {
    method: 'Arroser au pied la première année, le soir, en arrosage copieux ; il aime les sols frais, un paillage suffit ensuite.',
    amount: 'Jeune arbuste : 15 à 20 L tous les 10 jours en été. En bac, un quart du volume, soit 7 L pour 30 L.',
    potShare: 0.25,
  },
  argousier: {
    method: 'Arroser seulement après la plantation, au pied, puis plus du tout : il supporte sécheresse et embruns, l’eau stagnante lui nuit.',
    amount: 'Environ 10 à 15 L par pied tous les 15 jours le premier été. En pot, un cinquième du volume, soit 1,4 L pour 25 cm.',
    potShare: 0.2,
  },
  amelanchier: {
    method: 'Arroser au pied les deux premières années, en profondeur et sans détremper, puis le laisser autonome ; pailler le sol.',
    amount: 'Jeune arbuste : 15 à 20 L par semaine en été. En bac, un quart du volume, soit 7 L pour 30 L.',
    potShare: 0.25,
  },
  camerisier: {
    method: 'Garder le sol frais par des arrosages réguliers au pied et un paillage épais ; il redoute la sécheresse estivale.',
    amount: 'Environ 10 L par pied tous les 5 jours en été. En pot, un tiers du volume, soit 2,3 L pour un pot de 25 cm.',
    potShare: 0.3,
  },
  asiminier: {
    method: 'Arroser régulièrement au pied en été pour que le sol reste frais en permanence, avec de l’eau de pluie si possible ; pailler épais.',
    amount: 'Jeune arbre : 15 à 20 L tous les 5 jours en été. En bac, un tiers du volume, soit 10 L pour 30 L ; rien en hiver.',
    potShare: 0.3,
  },

  // Arbres d’ornement
  'bouleau-de-l-himalaya': {
    method: 'Arroser copieusement au pied chaque semaine les deux premiers étés, en laissant l’eau s’infiltrer lentement ; pailler, il craint les sols qui se dessèchent.',
    amount: 'Jeune arbre : 30 à 50 L par semaine en été. Ensuite seulement en sécheresse prolongée ; rien en hiver.',
    potShare: null,
  },
  'erable-champetre': {
    method: 'Arroser au pied la première année, en arrosage profond ; pour une haie, arroser au tuyau le long du rang au ras du sol.',
    amount: 'Jeune arbre : 20 à 30 L tous les 10 jours ; en haie, 10 L par mètre linéaire. En bac, un quart du volume, soit 7 L pour 30 L.',
    potShare: 0.25,
  },
  'erable-plane-crimson-king': {
    method: 'Faire des arrosages profonds au pied, dans une cuvette, les trois premiers étés ; ensuite seulement en canicule.',
    amount: 'Environ 40 à 50 L par arrosage tous les 7 jours en été pour un jeune arbre ; rien en hiver.',
    potShare: null,
  },
  'ginkgo-biloba': {
    method: 'Arroser régulièrement au pied les deux premières années, en profondeur ; en pot (formes naines), arroser quand le dessus sèche.',
    amount: 'Jeune arbre : 30 L tous les 10 jours en été. En pot, un quart du volume, soit 1,8 L pour un pot de 25 cm.',
    potShare: 0.25,
  },
  liquidambar: {
    method: 'Maintenir le sol frais en été les premières années par des arrosages profonds au pied, de préférence à l’eau de pluie ; pailler.',
    amount: 'Jeune arbre : 30 à 50 L par semaine en été. Rien en hiver.',
    potShare: null,
  },
  'albizia-julibrissin': {
    method: 'Arroser régulièrement au pied les deux premiers étés, puis laisser sécher la terre entre deux arrosages ; en bac, éviter toute eau stagnante.',
    amount: 'Jeune arbre : 20 à 30 L par semaine en été. En bac de 60 L, environ 12 L (un cinquième) ; presque rien en hiver.',
    potShare: 0.2,
  },
  catalpa: {
    method: 'Arroser régulièrement au pied les premiers étés, en arrosages copieux et espacés ; ensuite seulement en sécheresse.',
    amount: 'Jeune arbre : 30 à 40 L par semaine en été. En bac (forme boule), un quart du volume, soit 12 L pour 50 L.',
    potShare: 0.25,
  },
  'pommier-d-ornement': {
    method: 'Arroser au pied les deux premiers étés sans mouiller les feuilles ; en bac, arroser à fond dès que le dessus sèche.',
    amount: 'Jeune arbre : 20 à 30 L par semaine en été. En bac, un quart du volume, soit 7 L pour un bac de 30 L.',
    potShare: 0.25,
  },
  'sorbier-des-oiseleurs': {
    method: 'Garder le sol frais en été par des arrosages au pied le soir, surtout en région chaude, et pailler ; il souffre de la canicule.',
    amount: 'Jeune arbre : 30 L par semaine en été, davantage en canicule. En bac, un tiers du volume, soit 10 L pour 30 L.',
    potShare: 0.3,
  },
  savonnier: {
    method: 'Arroser au pied les deux premiers étés, en arrosage profond, puis le laisser résister seul à la sécheresse.',
    amount: 'Jeune arbre : 30 L tous les 10 jours en été. En bac, un cinquième du volume, soit 10 L pour 50 L.',
    potShare: 0.2,
  },
  'mimosa-d-hiver': {
    method: 'Arroser au pied les premiers étés, de préférence à l’eau de pluie (il craint le calcaire) ; en bac, arroser dès que le substrat sèche.',
    amount: 'Jeune arbre : 20 L tous les 10 jours en été. En bac, un cinquième du volume, soit 2,5 L pour un pot de 30 cm.',
    potShare: 0.2,
  },
  'arbre-a-perruque': {
    method: 'Arroser au pied la première année puis cesser : un sol trop riche en eau réduit les couleurs d’automne.',
    amount: 'Jeune arbuste : 15 à 20 L tous les 10 jours la première année. En bac, un cinquième du volume, soit 6 L pour 30 L.',
    potShare: 0.2,
  },
  'cornouiller-kousa': {
    method: 'Arroser au pied à l’eau de pluie pour garder le sol frais en été, et pailler avec des feuilles ou de l’écorce ; il craint la sécheresse.',
    amount: 'Jeune arbre : 20 L tous les 5 jours en été. En bac, un tiers du volume, soit 10 L pour 30 L.',
    potShare: 0.3,
  },
  'parrotia-persica': {
    method: 'Arroser au pied les premiers étés, en arrosage profond ; une fois installé, il supporte des sécheresses modérées.',
    amount: 'Jeune arbre : 20 à 30 L par semaine en été. En bac, un quart du volume, soit 7 L pour 30 L.',
    potShare: 0.25,
  },
  'chene-vert': {
    method: 'Arroser au pied les deux premiers étés pour aider le pivot à descendre, puis plus du tout en pleine terre.',
    amount: 'Jeune arbre : 20 à 30 L tous les 10 jours en été. Aucun arrosage ensuite ni en hiver.',
    potShare: null,
  },
  'robinier-frisia': {
    method: 'Arroser au pied les premiers étés, en arrosage espacé et profond ; ensuite il supporte bien la sécheresse.',
    amount: 'Jeune arbre : 30 L tous les 10 jours en été. En bac, un cinquième du volume, soit 10 L pour 50 L.',
    potShare: 0.2,
  },
  'cercis-forest-pansy': {
    method: 'Garder le sol frais en été les premières années par des arrosages au pied, sans mouiller le feuillage, et pailler.',
    amount: 'Jeune arbre : 20 L par semaine en été. En bac, un quart du volume, soit 7 L pour 30 L.',
    potShare: 0.25,
  },
  'hetre-commun': {
    method: 'Arroser régulièrement au pied les trois premiers étés ; en haie, arroser le long du rang au tuyau poreux et pailler.',
    amount: 'Jeune arbre : 30 à 50 L par semaine en été ; en haie, 10 à 15 L par mètre linéaire. Rien en hiver.',
    potShare: null,
  },
  'magnolia-grandiflora': {
    method: 'Arroser copieusement au pied en été les premières années, à l’eau de pluie de préférence ; en bac, ne jamais laisser sécher complètement la motte.',
    amount: 'Jeune arbre : 30 L par semaine en été. En bac, un quart du volume, soit 12 L pour un bac de 50 L.',
    potShare: 0.25,
  },
  'saule-crevette': {
    method: 'Arroser souvent au pied pour que le sol reste toujours frais, surtout en pot ; pailler, il brunit dès qu’il manque d’eau.',
    amount: 'Pleine terre : 15 à 20 L deux fois par semaine en été. En pot, un tiers du volume, soit 4 L pour un pot de 30 cm.',
    potShare: 0.35,
  },
  'eucalyptus-gunnii': {
    method: 'Arroser régulièrement au pied la première année, puis seulement en sécheresse ; en pot, arroser dès que le substrat sèche sans laisser d’eau stagnante.',
    amount: 'Jeune arbre : 20 L par semaine en été. En pot, un quart du volume, soit 3 L pour un pot de 30 cm.',
    potShare: 0.25,
  },
  'thuya-smaragd': {
    method: 'Arroser au pied chaque semaine les deux premiers étés, au tuyau poreux le long d’une haie ; ne jamais mouiller le feuillage en plein soleil.',
    amount: 'Environ 10 à 15 L par pied par semaine en été. En bac, un tiers du volume, soit 10 L pour 30 L : la motte ne doit jamais sécher.',
    potShare: 0.3,
  },
  'thuya-geant': {
    method: 'Arroser régulièrement au pied les deux premières années ; il apprécie un sol frais toute l’année, un paillage aide beaucoup.',
    amount: 'Environ 15 à 20 L par pied par semaine en été les deux premières années. Rien en hiver sauf sécheresse.',
    potShare: null,
  },
  'cypres-de-leyland': {
    method: 'Arroser chaque semaine en été les deux premières années, au pied ou au goutte-à-goutte le long de la haie.',
    amount: 'Environ 15 à 20 L par pied par semaine en été. Ensuite seulement en sécheresse ; rien en hiver.',
    potShare: null,
  },
  'cypres-de-provence': {
    method: 'Arroser au pied les deux premiers étés, puis laisser faire : il résiste très bien à la sécheresse et craint l’humidité stagnante.',
    amount: 'Jeune sujet : 15 à 20 L tous les 10 jours en été. En bac (‘Totem’), un cinquième du volume, soit 6 L pour 30 L.',
    potShare: 0.2,
  },
  'pin-parasol': {
    method: 'Arroser au pied la première année seulement, en arrosage profond pour que le pivot descende ; ensuite aucun arrosage.',
    amount: 'Jeune arbre : 20 à 30 L tous les 10 jours le premier été. Rien en hiver.',
    potShare: null,
  },
  'pin-mugo': {
    method: 'En pleine terre, arroser seulement la première année. En pot, arroser dès que le substrat sèche en surface et laisser s’écouler l’excédent.',
    amount: 'Pleine terre : 10 L par semaine le premier été. En pot, un quart du volume, soit 1,8 L pour un pot de 25 cm.',
    potShare: 0.25,
  },
  'cedre-bleu-de-l-atlas': {
    method: 'Arroser régulièrement au pied les deux premières années, de façon profonde et espacée ; ensuite très résistant à la sécheresse.',
    amount: 'Jeune arbre : 30 L tous les 10 jours en été. Rien en hiver.',
    potShare: null,
  },
  'sapin-de-nordmann': {
    method: 'Garder la motte fraîche par des arrosages réguliers au pied, sans détremper ; à l’intérieur pour Noël, arroser tous les deux jours.',
    amount: 'En pot, environ un quart du volume, soit 1,8 L pour un pot de 25 cm ; à Noël au chaud, 0,5 L tous les deux jours. En pleine terre, 20 L par semaine en été.',
    potShare: 0.25,
  },
  'epicea-conica': {
    method: 'Arroser au pied dès que la surface sèche pour garder la motte fraîche, et brumiser le feuillage le soir en été contre les acariens.',
    amount: 'En pot, environ un quart du volume, soit 1,8 L pour un pot de 25 cm. En pleine terre, 10 L par semaine en été.',
    potShare: 0.25,
  },
  'genevrier-rampant': {
    method: 'Arroser au pied la première année puis cesser ; sur un talus, arroser lentement pour éviter le ruissellement.',
    amount: 'Environ 10 L par pied tous les 10 jours le premier été. En pot, un cinquième du volume, soit 1,4 L pour 25 cm.',
    potShare: 0.2,
  },
  'faux-cypres-de-lawson': {
    method: 'Garder le sol frais en été par des arrosages au pied, sans excès d’eau qui fait pourrir les racines ; pailler.',
    amount: 'Environ 15 L par pied par semaine en été. En bac, un quart du volume, soit 7 L pour 30 L.',
    potShare: 0.25,
  },

  // Arbustes de haie et méditerranéens
  'eleagnus-ebbingei': {
    method: 'Arroser au pied la première année pour l’installation, puis plus du tout : il supporte très bien la sécheresse.',
    amount: 'Environ 10 à 15 L par pied tous les 10 jours le premier été. En bac, un cinquième du volume, soit 6 L pour 30 L.',
    potShare: 0.2,
  },
  'osmanthe-de-burkwood': {
    method: 'Arroser régulièrement au pied les deux premiers étés ; en bac, garder la motte fraîche sans laisser d’eau dans la soucoupe.',
    amount: 'Pleine terre : 10 à 15 L par semaine en été. En bac, un quart du volume, soit 7 L pour 30 L.',
    potShare: 0.25,
  },
  escallonia: {
    method: 'Arroser au pied la première année ; ensuite seulement en sécheresse prolongée, de préférence le soir.',
    amount: 'Environ 10 L par pied par semaine le premier été. En bac, un quart du volume, soit 1,8 L pour un pot de 25 cm.',
    potShare: 0.25,
  },
  'laurier-du-portugal': {
    method: 'Arroser régulièrement au pied l’année de plantation ; ensuite il tolère la sécheresse, ne pas mouiller le feuillage.',
    amount: 'Environ 10 à 15 L par pied par semaine le premier été. En bac, un quart du volume, soit 7 L pour 30 L.',
    potShare: 0.25,
  },
  'buisson-ardent': {
    method: 'Arroser au pied la première année puis cesser ; éviter d’arroser le feuillage, sensible au feu bactérien et à la tavelure.',
    amount: 'Environ 10 L par pied tous les 10 jours le premier été. En bac, un cinquième du volume, soit 6 L pour 30 L.',
    potShare: 0.2,
  },
  griselinia: {
    method: 'Arroser régulièrement au pied la première année, puis seulement en sécheresse ; il supporte bien les embruns.',
    amount: 'Environ 10 à 15 L par pied par semaine le premier été. En bac, un quart du volume, soit 7 L pour 30 L.',
    potShare: 0.25,
  },
  'chevrefeuille-arbustif': {
    method: 'Arroser au pied la première année, le long de la bordure ; ensuite il supporte des sécheresses modérées.',
    amount: 'Environ 5 à 10 L par pied par semaine le premier été. En pot, un quart du volume, soit 0,9 L pour 20 cm.',
    potShare: 0.25,
  },
  'houx-crenele': {
    method: 'Arroser au pied à l’eau de pluie pour garder le sol frais en été, surtout en pot ; il supporte mal la sécheresse.',
    amount: 'Pleine terre : 5 à 10 L par pied tous les 5 jours en été. En pot, un tiers du volume, soit 2,3 L pour un pot de 25 cm.',
    potShare: 0.3,
  },
  'ciste-pourpre': {
    method: 'Arroser seulement la première année, au pied ; ensuite aucun arrosage : l’excès d’eau le tue, laisser la terre sécher complètement.',
    amount: 'Environ 5 L par pied tous les 15 jours le premier été. En pot, un sixième du volume, soit 1,2 L pour 25 cm.',
    potShare: 0.15,
  },
  'myrte-commun': {
    method: 'En pleine terre, arroser au pied les premiers étés. En bac, arroser dès que le dessus sèche avec une eau peu calcaire et vider la soucoupe.',
    amount: 'Pleine terre : 10 L par semaine en été. En bac, un quart du volume, soit 1,8 L pour un pot de 25 cm ; peu en hiver.',
    potShare: 0.25,
  },
  lentisque: {
    method: 'Arroser au pied la première année puis plus du tout en pleine terre ; laisser sécher complètement entre deux arrosages en pot.',
    amount: 'Environ 10 L par pied tous les 15 jours le premier été. En pot, un sixième du volume, soit 1,2 L pour 25 cm.',
    potShare: 0.15,
  },
  'pittosporum-tobira': {
    method: 'Arroser au pied les deux premiers étés ; en bac, arroser à fond dès que le substrat sèche et laisser s’égoutter.',
    amount: 'Pleine terre : 10 à 15 L par semaine en été. En bac, un quart du volume, soit 1,8 L pour un pot de 25 cm.',
    potShare: 0.25,
  },
  callistemon: {
    method: 'Arroser régulièrement au pied en été les premières années, à l’eau non calcaire ; en bac, ne pas laisser sécher la motte.',
    amount: 'Pleine terre : 10 à 15 L par semaine en été. En bac, un quart du volume, soit 1,8 L pour un pot de 25 cm ; peu en hiver.',
    potShare: 0.25,
  },
  'germandree-arbustive': {
    method: 'Arroser au pied la première année, puis laisser la terre sécher complètement : très résistante à la sécheresse.',
    amount: 'Environ 5 L par pied tous les 15 jours le premier été. En pot, un sixième du volume, soit 1,2 L pour 25 cm.',
    potShare: 0.15,
  },
  'genet-d-espagne': {
    method: 'Arroser seulement la première année, au pied et sans excès ; ensuite aucun arrosage, il craint l’humidité.',
    amount: 'Environ 5 à 10 L par pied tous les 15 jours le premier été. En pot, un sixième du volume, soit 1,2 L pour 25 cm.',
    potShare: 0.15,
  },

  // Grimpantes
  'clematite-montana': {
    method: 'Arroser chaque semaine au pied, en gardant la base à l’ombre et paillée : la tête au soleil, les pieds au frais.',
    amount: 'Environ 10 L par pied par semaine en été les premières années. En bac, un tiers du volume, soit 10 L pour 30 L.',
    potShare: 0.3,
  },
  'clematite-armandii': {
    method: 'Arroser régulièrement au pied en été, sans mouiller le feuillage persistant, et pailler la base.',
    amount: 'Environ 10 L par pied tous les 5 jours en été. En bac, un tiers du volume, soit 10 L pour 30 L.',
    potShare: 0.3,
  },
  'clematite-jackmanii': {
    method: 'Arroser copieusement au pied, jamais sur les feuilles (flétrissement), et pailler ; en pot, arroser plus souvent.',
    amount: 'Environ 10 à 15 L par pied par semaine en été. En bac de 40 L, environ 12 L (un tiers).',
    potShare: 0.3,
  },
  'clematite-nelly-moser': {
    method: 'Arroser régulièrement le pied en été, le soir, en ombrageant la base avec un paillage ou une plante basse.',
    amount: 'Environ 10 L par pied tous les 4 à 5 jours en été. En grand pot, un tiers du volume, soit 4 L pour un pot de 30 cm.',
    potShare: 0.3,
  },
  'clematite-etoile-violette': {
    method: 'Arroser au pied chaque semaine en été les premières années ; pailler et éviter de mouiller le feuillage.',
    amount: 'Environ 10 L par pied par semaine en été. En bac, un tiers du volume, soit 10 L pour 30 L.',
    potShare: 0.3,
  },
  'clematite-cirrhosa': {
    method: 'Arroser modérément en été pendant son repos, puis davantage d’octobre à mars pendant sa croissance et sa floraison.',
    amount: 'Environ 5 L par pied tous les 10 jours en été, 10 L en automne-hiver par temps sec. En pot, un cinquième du volume, soit 2,5 L pour 30 cm.',
    potShare: 0.2,
  },
  'chevrefeuille-du-japon': {
    method: 'Arroser au pied chaque semaine en été les premières années, sans mouiller les feuilles (oïdium) ; en pot, plus souvent.',
    amount: 'Environ 10 L par pied par semaine en été. En pot, un quart du volume, soit 1,8 L pour un pot de 25 cm.',
    potShare: 0.25,
  },
  'chevrefeuille-de-henry': {
    method: 'Arroser régulièrement au pied la première année, puis seulement en sécheresse ; pailler la base.',
    amount: 'Environ 10 L par pied par semaine le premier été. En pot, un quart du volume, soit 1,8 L pour un pot de 25 cm.',
    potShare: 0.25,
  },
  'jasmin-officinal': {
    method: 'Arroser régulièrement au pied en été, surtout en pot, en laissant sécher la surface ; ne pas détremper.',
    amount: 'Pleine terre : 10 L par semaine en été. En pot, un quart du volume, soit 1,8 L pour un pot de 25 cm.',
    potShare: 0.25,
  },
  'glycine-du-japon': {
    method: 'Arroser au pied les premières années, copieusement et sans excès ; installée, elle se contente des pluies.',
    amount: 'Jeune plant : 15 à 20 L par semaine en été. En bac, un quart du volume, soit 12 L pour 50 L.',
    potShare: 0.25,
  },
  'passiflore-bleue': {
    method: 'Arroser régulièrement au pied en été, surtout en pot, et très peu en hiver ; pailler la souche.',
    amount: 'Pleine terre : 10 L tous les 4 jours en été. En pot, un quart du volume, soit 1,8 L pour 25 cm ; presque rien en hiver.',
    potShare: 0.25,
  },
  'bougainvillier-hybride': {
    method: 'Arroser à fond quand le substrat est sec en été, puis laisser sécher ; en hiver, presque au sec dans un local frais et lumineux.',
    amount: 'Environ un cinquième du volume du pot, soit 1,4 L pour un pot de 25 cm ; un verre par mois en hiver.',
    potShare: 0.2,
  },
  'morelle-faux-jasmin': {
    method: 'Arroser régulièrement au pied en été ; en pot, dès que le dessus sèche, en vidant la soucoupe.',
    amount: 'Pleine terre : 10 L tous les 4 jours en été. En pot, un quart du volume, soit 1,8 L pour un pot de 25 cm.',
    potShare: 0.25,
  },
  'houblon-dore': {
    method: 'Arroser régulièrement au pied en été pour garder le sol frais, le soir, et pailler ; arrêt en hiver quand la souche est en repos.',
    amount: 'Environ 10 à 15 L par pied tous les 5 jours en été. En bac, un tiers du volume, soit 10 L pour 30 L.',
    potShare: 0.3,
  },
  akebia: {
    method: 'Arroser régulièrement au pied les premiers étés, puis seulement en sécheresse.',
    amount: 'Environ 10 L par pied par semaine en été. En bac, un quart du volume, soit 7 L pour 30 L.',
    potShare: 0.25,
  },
  'vigne-vierge-vraie': {
    method: 'Arroser au pied la première année, surtout contre un mur où la pluie arrive mal ; ensuite autonome.',
    amount: 'Environ 10 L par pied par semaine le premier été. En bac, un quart du volume, soit 7 L pour 30 L.',
    potShare: 0.25,
  },
  'actinidia-kolomikta': {
    method: 'Arroser au pied pour garder le sol frais en été, le soir, et pailler généreusement.',
    amount: 'Environ 10 à 15 L par pied tous les 5 jours en été. En bac, un tiers du volume, soit 10 L pour 30 L.',
    potShare: 0.3,
  },
  'jasmin-du-chili': {
    method: 'Arroser régulièrement au pied en été quand la surface sèche ; en hiver, garder presque au sec dans un local hors gel.',
    amount: 'En pot, environ un quart du volume, soit 1,8 L pour un pot de 25 cm ; un verre toutes les trois semaines en hiver.',
    potShare: 0.25,
  },

  // Légumes
  concombre: {
    method: 'Arroser copieusement au pied, à l’eau tiède ou ayant séjourné au soleil, le matin, sans jamais mouiller les feuilles (oïdium) ; pailler.',
    amount: 'Environ 5 L par pied tous les 2 jours en été, soit 10 à 15 L/m². En pot, un tiers du volume, soit 4 L pour un pot de 30 cm.',
    potShare: 0.35,
  },
  cornichon: {
    method: 'Garder la terre toujours fraîche par des arrosages au pied, sans mouiller le feuillage, et pailler épais.',
    amount: 'Environ 4 à 5 L par poquet tous les 2 jours en été, soit 10 L/m². En pot, un tiers du volume, soit 4 L pour 30 cm.',
    potShare: 0.35,
  },
  aubergine: {
    method: 'Arroser régulièrement au pied, sans excès et sans mouiller le feuillage, à l’eau non glacée ; pailler pour garder la chaleur et l’humidité.',
    amount: 'Environ 3 à 4 L par pied tous les 2 jours en été. En pot de 30 cm, environ 3,5 L (un tiers).',
    potShare: 0.3,
  },
  potiron: {
    method: 'Arroser abondamment au pied, dans une cuvette, sans mouiller les feuilles ; réduire en fin d’été pour favoriser la maturation.',
    amount: 'Environ 10 L par pied tous les 3 jours en été, puis moitié moins en septembre.',
    potShare: 0.35,
  },
  potimarron: {
    method: 'Arrosages copieux mais espacés, au pied, à l’eau non froide ; jamais sur les feuilles, sensibles à l’oïdium.',
    amount: 'Environ 10 L par pied tous les 3 jours en été. En grand bac, un tiers du volume, soit 15 L pour 50 L.',
    potShare: 0.35,
  },
  melon: {
    method: 'Arroser au pied à l’eau tiède, sans mouiller les feuilles ni les fruits ; réduire fortement dès que les melons approchent de la maturité.',
    amount: 'Environ 3 à 5 L par pied tous les 3 jours, puis presque rien les deux dernières semaines. En pot, un quart du volume, soit 1,8 L pour 25 cm.',
    potShare: 0.25,
  },
  carotte: {
    method: 'Garder le sol frais en arrosant en pluie fine jusqu’à la levée, puis arroser régulièrement et sans excès ; des à-coups font éclater les racines.',
    amount: 'Environ 10 L/m² tous les 3 jours en été. En jardinière profonde, un quart du volume par arrosage.',
    potShare: 0.25,
  },
  radis: {
    method: 'Arroser souvent en pluie fine pour que la terre ne sèche jamais : un radis qui a soif devient piquant et creux.',
    amount: 'Environ 5 L/m² chaque jour par temps chaud. En jardinière, un quart du volume, soit 0,5 L pour 2 L de terreau.',
    potShare: 0.25,
  },
  betterave: {
    method: 'Arroser régulièrement au pied, surtout pendant la formation des racines ; un paillage limite l’évaporation.',
    amount: 'Environ 10 à 15 L/m² tous les 3 jours en été. En bac, un quart du volume par arrosage.',
    potShare: 0.25,
  },
  navet: {
    method: 'Garder la terre toujours fraîche par des arrosages réguliers en pluie fine : un navet qui a soif devient filandreux et piquant.',
    amount: 'Environ 10 L/m² tous les 2 jours par temps sec. En bac, un quart du volume par arrosage.',
    potShare: 0.25,
  },
  panais: {
    method: 'Garder le sol humide en pluie fine jusqu’à la levée, qui est lente ; ensuite arroser au pied seulement en période sèche.',
    amount: 'Environ 10 L/m² tous les 4 jours en période sèche. Rien en hiver, la pluie suffit.',
    potShare: 0.25,
  },
  'pomme-de-terre': {
    method: 'Arroser au pied, entre les buttes, en période sèche surtout à la floraison ; ne jamais mouiller le feuillage (mildiou).',
    amount: 'Environ 10 à 15 L/m² par semaine en période sèche. En sac de culture de 40 L, environ 10 L (un quart).',
    potShare: 0.25,
  },
  'patate-douce': {
    method: 'Arroser régulièrement au pied des buttes par temps sec, le matin ; réduire un mois avant la récolte pour de meilleurs tubercules.',
    amount: 'Environ 3 à 5 L par pied tous les 3 jours en été. En bac, un quart du volume, soit 7 L pour 30 L.',
    potShare: 0.25,
  },
  oignon: {
    method: 'Arroser peu, au pied, seulement si la terre est sèche ; arrêter totalement un mois avant la récolte pour une bonne conservation.',
    amount: 'Environ 5 à 10 L/m² par semaine en sécheresse. En jardinière, un cinquième du volume par arrosage.',
    potShare: 0.2,
  },
  echalote: {
    method: 'Arroser très peu, uniquement en sécheresse prolongée, au pied ; arrêter un mois avant la récolte.',
    amount: 'Environ 5 L/m² tous les 7 à 10 jours en sécheresse. En jardinière, un cinquième du volume.',
    potShare: 0.2,
  },
  ail: {
    method: 'Quasiment aucun arrosage : seulement au printemps si très sec, au pied ; arrêter totalement dès juin.',
    amount: 'Au plus 5 L/m² tous les 10 jours au printemps sec. En jardinière, un sixième du volume.',
    potShare: 0.15,
  },
  poireau: {
    method: 'Arroser copieusement au pied après le repiquage (plombage), puis régulièrement en été dans les sillons.',
    amount: 'Environ 10 à 15 L/m² tous les 3 jours en été. En bac, un quart du volume par arrosage.',
    potShare: 0.25,
  },
  epinard: {
    method: 'Garder la terre fraîche par des arrosages réguliers au pied ou en pluie fine, le soir : la sécheresse provoque la montée à graines.',
    amount: 'Environ 10 L/m² tous les 2 jours par temps chaud. En jardinière, un tiers du volume.',
    potShare: 0.3,
  },
  blette: {
    method: 'Arroser régulièrement au pied pour garder le sol frais, ce qui garde les côtes et les feuilles tendres ; pailler.',
    amount: 'Environ 3 L par pied tous les 3 jours en été, soit 10 L/m². En pot, un tiers du volume, soit 4 L pour 30 cm.',
    potShare: 0.3,
  },
  mache: {
    method: 'Garder humide en pluie fine jusqu’à la levée, puis arroser seulement par temps sec ; en hiver, la pluie suffit généralement.',
    amount: 'Environ 5 L/m² tous les 2 jours jusqu’à la levée, puis 5 à 10 L/m² par temps sec. En jardinière, un quart du volume.',
    potShare: 0.25,
  },
  roquette: {
    method: 'Arroser régulièrement en pluie fine, le soir : la sécheresse la rend très piquante et la fait fleurir.',
    amount: 'Environ 5 à 10 L/m² tous les 2 jours. En jardinière, un tiers du volume.',
    potShare: 0.3,
  },
  'chou-pomme': {
    method: 'Arroser régulièrement et copieusement au pied, le soir, et pailler : le chou est gourmand en eau.',
    amount: 'Environ 3 à 5 L par pied tous les 3 jours en été, soit 15 L/m². En bac, un tiers du volume.',
    potShare: 0.3,
  },
  'chou-fleur': {
    method: 'Ne jamais laisser sécher : arroser au pied souvent et régulièrement, et pailler épais ; tout stress hydrique donne une pomme minuscule.',
    amount: 'Environ 5 L par pied tous les 2 jours en été, soit 15 L/m². En bac, un tiers du volume.',
    potShare: 0.35,
  },
  brocoli: {
    method: 'Arroser régulièrement au pied, sans mouiller les têtes, et pailler pour garder la fraîcheur.',
    amount: 'Environ 3 à 5 L par pied tous les 3 jours en été. En bac, un tiers du volume.',
    potShare: 0.3,
  },
  'chou-kale': {
    method: 'Arroser au pied en été par temps sec ; en hiver, la pluie suffit.',
    amount: 'Environ 3 L par pied tous les 3 jours en été, soit 10 L/m². En pot, un tiers du volume, soit 4 L pour 30 cm.',
    potShare: 0.3,
  },
  'petit-pois': {
    method: 'Arroser modérément au pied le long du rang, puis davantage à la floraison et au grossissement des gousses ; ne pas mouiller le feuillage.',
    amount: 'Environ 10 L/m² tous les 3 jours à la floraison, moitié moins avant. En jardinière, un quart du volume.',
    potShare: 0.25,
  },
  feve: {
    method: 'Peu d’arrosage : au pied, seulement à la formation des gousses par temps sec.',
    amount: 'Environ 10 L/m² tous les 4 jours au moment des gousses si le temps est sec. En pot, un quart du volume.',
    potShare: 0.25,
  },
  'mais-doux': {
    method: 'Arroser abondamment au pied, de préférence en raie ou au goutte-à-goutte, à la floraison et au remplissage des grains.',
    amount: 'Environ 15 à 20 L/m² tous les 3 jours à la floraison. En grand bac, un tiers du volume.',
    potShare: 0.3,
  },
  artichaut: {
    method: 'Arroser copieusement au pied en été, dans une cuvette, et pailler ; garder plutôt sec en hiver pour éviter la pourriture de la souche.',
    amount: 'Environ 10 à 15 L par pied tous les 4 jours en été ; aucun arrosage en hiver. En grand bac, un tiers du volume.',
    potShare: 0.3,
  },
  rhubarbe: {
    method: 'Arroser copieusement au pied par temps sec en été, en évitant le cœur de la souche, et pailler épais.',
    amount: 'Environ 10 à 15 L par pied tous les 4 jours en été. En grand bac, un tiers du volume, soit 15 L pour 50 L.',
    potShare: 0.3,
  },
  piment: {
    method: 'Arroser modérément au pied, sans mouiller le feuillage, en laissant sécher la surface : un léger stress hydrique renforce le piquant.',
    amount: 'Environ 2 à 3 L par pied tous les 3 jours en été. En pot de 10 L, environ 2,5 L (un quart).',
    potShare: 0.25,
  },
  framboisier: {
    method: 'Arroser au pied par temps sec, surtout pendant la fructification, sans mouiller les fruits ; pailler le rang.',
    amount: 'Environ 5 à 10 L par pied tous les 4 jours pendant la récolte. En bac, un tiers du volume, soit 10 L pour 30 L.',
    potShare: 0.3,
  },

  // Aromatiques
  aneth: {
    method: 'Arroser au pied pour garder le sol frais sans excès, le matin ; la sécheresse précipite la floraison.',
    amount: 'Environ 5 à 10 L/m² tous les 3 jours. En pot, un quart du volume, soit 0,5 L pour un pot de 17 cm.',
    potShare: 0.25,
  },
  estragon: {
    method: 'Arroser modérément au pied en laissant sécher la surface ; il craint l’humidité stagnante, surtout en hiver.',
    amount: 'Environ 1 L par pied tous les 4 jours en été. En pot, un cinquième du volume, soit 0,7 L pour un pot de 20 cm.',
    potShare: 0.2,
  },
  cerfeuil: {
    method: 'Garder la terre toujours fraîche par des arrosages fréquents en pluie fine, de préférence à mi-ombre : il flétrit vite au sec.',
    amount: 'Environ 5 L/m² tous les 2 jours. En pot, un tiers du volume, soit 0,4 L pour un pot de 14 cm.',
    potShare: 0.3,
  },
  melisse: {
    method: 'Arroser au pied pour garder le sol frais en été, le soir ; elle tolère de courtes sécheresses.',
    amount: 'Environ 1 à 2 L par pied tous les 3 jours en été. En pot, un quart du volume, soit 0,9 L pour un pot de 20 cm.',
    potShare: 0.25,
  },
  'verveine-citronnelle': {
    method: 'Arroser régulièrement au pied en été dès que la surface sèche ; en hiver, quand elle perd ses feuilles, presque au sec.',
    amount: 'En pot de 30 cm, environ 3 L (un quart) par arrosage en été ; un verre par mois en hiver. En pleine terre, 3 L par pied.',
    potShare: 0.25,
  },
  sarriette: {
    method: 'Arroser au pied en laissant sécher la terre entre deux arrosages ; elle redoute l’excès d’eau.',
    amount: 'Environ 1 L par pied par semaine en été. En pot, un sixième du volume, soit 0,3 L pour un pot de 17 cm.',
    potShare: 0.15,
  },
  marjolaine: {
    method: 'Arroser modérément au pied en laissant sécher la surface entre deux arrosages ; vider la soucoupe en pot.',
    amount: 'Environ 1 L par pied tous les 4 jours en été. En pot, un cinquième du volume, soit 0,4 L pour un pot de 17 cm.',
    potShare: 0.2,
  },
  camomille: {
    method: 'Arroser modérément en pluie fine jusqu’à la levée, puis au pied seulement par temps sec ; elle tolère bien la sécheresse.',
    amount: 'Environ 5 L/m² tous les 4 jours. En pot, un cinquième du volume, soit 0,4 L pour un pot de 17 cm.',
    potShare: 0.2,
  },
  'ail-des-ours': {
    method: 'Garder le sol frais au printemps par des arrosages au pied, à l’ombre ; ne plus arroser du tout après la disparition du feuillage en été.',
    amount: 'Environ 5 L/m² par semaine au printemps sec. En pot, un tiers du volume, soit 0,7 L pour un pot de 17 cm.',
    potShare: 0.3,
  },
  oseille: {
    method: 'Garder la terre fraîche par des arrosages réguliers au pied : au sec, les feuilles deviennent coriaces et amères.',
    amount: 'Environ 1 à 2 L par pied tous les 3 jours en été. En pot, un tiers du volume, soit 1,2 L pour un pot de 20 cm.',
    potShare: 0.3,
  },
  bourrache: {
    method: 'Arroser modérément au pied jusqu’à l’installation ; elle se débrouille seule une fois levée.',
    amount: 'Environ 2 L par pied tous les 4 jours par temps sec. En pot, un quart du volume, soit 1,8 L pour un pot de 25 cm.',
    potShare: 0.25,
  },
  hysope: {
    method: 'Arroser au pied en laissant sécher la terre entre deux arrosages ; pas d’eau stagnante, surtout en hiver.',
    amount: 'Environ 1 L par pied par semaine en été. En pot, un sixième du volume, soit 0,6 L pour un pot de 20 cm.',
    potShare: 0.15,
  },
  shiso: {
    method: 'Garder la terre fraîche par des arrosages au pied, le matin, sans mouiller les feuilles ; il flétrit vite au sec.',
    amount: 'Environ 1 à 2 L par pied tous les 2 jours en été. En pot, un tiers du volume, soit 0,7 L pour un pot de 17 cm.',
    potShare: 0.3,
  },
};
