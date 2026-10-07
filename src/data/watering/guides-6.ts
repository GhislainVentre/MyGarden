import type { WateringGuide } from '../../types';

export const WATERING_GUIDES_6: Record<string, WateringGuide> = {
  // ---------------------------------------------------------------- Potager (species-edible-2)
  topinambour: {
    method: 'Arroser au pied, au tuyau ou à l’arrosoir sans pomme, seulement lors des sécheresses prolongées d’été, de préférence le soir ; ne jamais arroser en hiver, les tubercules restent en terre.',
    amount: 'En pleine terre, 10 à 15 L/m² par arrosage en période sèche, aucun en hiver ; en grand bac, environ 30 % du volume, soit 9 L pour un bac de 40 cm.',
    potShare: 0.3,
  },
  rutabaga: {
    method: 'Arroser au pied le long des rangs, le soir en été, pour garder la terre fraîche en continu ; un paillage léger limite les à-coups qui rendent la racine fibreuse.',
    amount: 'Environ 10 à 15 L/m² par arrosage en été ; en hiver la pluie suffit. En pot profond, un tiers du volume, soit 2,3 L pour un pot de 25 cm.',
    potShare: 0.3,
  },
  'chou-rave': {
    method: 'Arroser régulièrement au pied, sans mouiller la boule ni le feuillage, tôt le matin ou le soir ; pailler pour que la terre ne sèche jamais entre deux arrosages.',
    amount: 'Environ 1 à 2 L par pied ou 10 à 15 L/m² tous les 3 jours en été ; en pot, un tiers du volume, soit 1,2 L pour un pot de 20 cm.',
    potShare: 0.3,
  },
  'chou-de-bruxelles': {
    method: 'Arroser copieusement au pied en été, dans une petite cuvette autour de la tige butée, puis pailler ; en automne et en hiver, laisser faire la pluie.',
    amount: 'Environ 5 L par pied ou 15 L/m² par arrosage en été ; en grand bac, 30 % du volume, soit 3,5 L pour un bac de 30 cm.',
    potShare: 0.3,
  },
  'pak-choi': {
    method: 'Arroser souvent et en pluie fine au pied pour que la terre reste constamment fraîche, sinon le pak choï monte en graines ; arroser le matin et pailler.',
    amount: 'Environ 1 L par pied ou 10 L/m² tous les 2 jours en été ; en jardinière, un tiers du volume, soit 1,2 L pour un pot de 20 cm.',
    potShare: 0.35,
  },
  cardon: {
    method: 'Arroser copieusement au pied dans une cuvette, le soir en été, et pailler épais pour obtenir des côtes tendres ; réduire fortement après l’arrachage avant l’hiver.',
    amount: 'Environ 10 L par pied par arrosage en été, tous les 4 jours ; en très grand bac, 30 % du volume, soit 9 L pour un bac de 40 cm.',
    potShare: 0.3,
  },
  'celeri-rave': {
    method: 'Arroser très souvent au pied, sans enterrer ni noyer le collet, le soir en été ; un paillage épais est indispensable pour garder la terre humide.',
    amount: 'Environ 2 L par pied ou 15 à 20 L/m² tous les 2 jours en été ; en pot, un tiers du volume, soit 2,4 L pour un pot de 25 cm.',
    potShare: 0.35,
  },
  fenouil: {
    method: 'Arroser au pied fréquemment et régulièrement, en évitant les à-coups qui le font monter en graines ; arroser le soir et pailler autour du bulbe.',
    amount: 'Environ 1 à 1,5 L par pied ou 10 à 15 L/m² tous les 2 jours en été ; en pot, 30 % du volume, soit 2 L pour un pot de 25 cm.',
    potShare: 0.3,
  },
  endive: {
    method: 'En été, arroser modérément au pied les racines en croissance ; pendant le forçage en caisse au noir, humidifier légèrement le substrat sans mouiller les chicons.',
    amount: 'Environ 10 L/m² par arrosage en été tous les 5 jours ; au forçage, un simple voile d’eau (environ 0,5 L pour une caisse de 40 cm) quand le dessus sèche.',
    potShare: 0.25,
  },
  scarole: {
    method: 'Arroser régulièrement au pied, sans jamais mouiller le cœur où l’eau stagnante fait pourrir les feuilles ; arroser le matin et pailler.',
    amount: 'Environ 1 L par pied ou 10 à 15 L/m² tous les 3 jours en été ; en pot, 30 % du volume, soit 1,1 L pour un pot de 20 cm.',
    potShare: 0.3,
  },
  cresson: {
    method: 'Cultiver dans une jardinière posée dans une soucoupe toujours pleine : le substrat doit rester gorgé d’eau ; renouveler l’eau de la soucoupe souvent pour qu’elle reste claire.',
    amount: 'Maintenir 2 à 3 cm d’eau dans la soucoupe en permanence et verser en plus 30 % du volume par le haut, soit 1 L pour une jardinière de 20 cm, en été chaque jour.',
    potShare: 0.3,
  },
  pourpier: {
    method: 'Arroser au pied quand la terre est sèche en surface, le soir ; il supporte la sécheresse mais reste plus tendre et charnu avec des arrosages réguliers.',
    amount: 'Environ 5 à 10 L/m² tous les 4 jours en été ; en pot, 20 % du volume, soit 0,7 L pour un pot de 20 cm.',
    potShare: 0.2,
  },
  crosne: {
    method: 'Arroser au pied par temps sec en été et pailler pour garder la terre fraîche, condition pour de beaux tubercules en automne ; aucun arrosage en hiver.',
    amount: 'Environ 10 L/m² par arrosage en été ; en bac, 30 % du volume, soit 2 L pour un pot de 25 cm.',
    potShare: 0.3,
  },
  gombo: {
    method: 'Arroser régulièrement au pied avec une eau non froide, le matin par temps chaud, sans mouiller le feuillage ; pailler pour garder la chaleur et l’humidité.',
    amount: 'Environ 2 à 3 L par pied tous les 3 jours en été ; en pot, 30 % du volume, soit 3,5 L pour un pot de 30 cm.',
    potShare: 0.3,
  },
  tomatillo: {
    method: 'Arroser au pied comme la tomate, jamais sur les feuilles, de préférence le matin, puis pailler ; garder un rythme régulier pour éviter l’éclatement des fruits.',
    amount: 'Environ 3 à 5 L par pied tous les 3 jours en été ; en pot, 30 % du volume, soit 3,5 L pour un pot de 30 cm.',
    potShare: 0.3,
  },
  'pois-chiche': {
    method: 'Arroser rarement, au pied et seulement par temps sec pendant la floraison ; laisser la terre sécher entre deux apports, le pois chiche craint l’excès d’eau.',
    amount: 'Environ 5 à 10 L/m² par arrosage, une fois par semaine au plus ; en pot, 20 % du volume, soit 0,7 L pour un pot de 20 cm.',
    potShare: 0.2,
  },
  lentille: {
    method: 'Arroser au pied seulement lors des sécheresses de printemps, en laissant sécher la terre entre deux arrosages ; ne pas arroser en fin de cycle, quand les gousses mûrissent.',
    amount: 'Environ 5 à 10 L/m² par arrosage en période sèche ; en jardinière, 20 % du volume, soit 0,7 L pour un pot de 20 cm.',
    potShare: 0.2,
  },
  'haricot-d-espagne': {
    method: 'Arroser copieusement au pied des rames, sans mouiller le feuillage, surtout pendant la floraison ; arroser le soir et pailler pour éviter la coulure des fleurs.',
    amount: 'Environ 3 à 5 L par pied ou 15 L/m² tous les 2 jours à la floraison ; en grand pot, un tiers du volume, soit 4 L pour un pot de 30 cm.',
    potShare: 0.35,
  },
  asperge: {
    method: 'Arroser au pied le long de la planche par sécheresse estivale, après la récolte, pour reconstituer les griffes ; aucun arrosage en hiver, la plante est en repos.',
    amount: 'Environ 10 à 15 L/m² par arrosage en été sec, une fois par semaine ; jamais en hiver.',
    potShare: 0.25,
  },
  'courge-butternut': {
    method: 'Arroser copieusement au pied, dans une cuvette, sans mouiller les feuilles sensibles à l’oïdium ; arroser le matin, pailler, et réduire en fin d’été quand les fruits mûrissent.',
    amount: 'Environ 10 L par pied par arrosage en croissance, tous les 3 jours ; en très grand bac, 30 % du volume, soit 9 L pour un bac de 40 cm.',
    potShare: 0.3,
  },
  pasteque: {
    method: 'Arroser copieusement au pied jusqu’au grossissement des fruits, sans mouiller le feuillage, puis réduire nettement pour concentrer le sucre ; pailler sous les fruits.',
    amount: 'Environ 8 à 10 L par pied tous les 3 jours en croissance, puis moitié moins à la maturation ; en grand bac, 30 % du volume, soit 9 L pour un bac de 40 cm.',
    potShare: 0.3,
  },
  raifort: {
    method: 'Arroser au pied seulement en cas de sécheresse prolongée, en profondeur pour la longue racine ; aucun arrosage en hiver.',
    amount: 'Environ 10 L/m² par arrosage en été sec ; dans un grand bac, 25 % du volume, soit 3 L pour un bac de 30 cm.',
    potShare: 0.25,
  },
  cassis: {
    method: 'Arroser copieusement au pied par sécheresse, surtout pendant le grossissement des fruits, puis pailler ; arroser profondément mais rarement, jamais en hiver.',
    amount: 'Environ 10 à 15 L par pied par arrosage en été sec, et 10 L par semaine les deux premières années ; en bac, 25 % du volume, soit 7 L pour un bac de 40 cm.',
    potShare: 0.25,
  },
  groseillier: {
    method: 'Arroser au pied par sécheresse, de façon lente et profonde, puis pailler épais pour garder la fraîcheur ; pas d’arrosage en hiver.',
    amount: 'Environ 10 à 15 L par pied par arrosage en été sec ; en bac, 25 % du volume, soit 3 L pour un pot de 30 cm.',
    potShare: 0.25,
  },
  'groseillier-a-maquereau': {
    method: 'Arroser au pied par temps sec pendant la formation des fruits, sans mouiller le feuillage pour limiter l’oïdium ; pailler et ne pas arroser en hiver.',
    amount: 'Environ 10 L par pied par arrosage en été sec ; en bac, 25 % du volume, soit 3 L pour un pot de 30 cm.',
    potShare: 0.25,
  },
  myrtillier: {
    method: 'Arroser à l’eau de pluie, jamais à l’eau calcaire qui le fait jaunir, au pied sur un paillis d’écorces de pin ; garder la terre toujours fraîche, plus encore en bac.',
    amount: 'Environ 5 à 10 L par pied tous les 2 jours en été ; en bac, un tiers du volume, soit 4 L pour un bac de 30 cm ; arroser peu en hiver.',
    potShare: 0.3,
  },
  'ronce-fruitiere': {
    method: 'Arroser au pied le long du palissage par sécheresse, pendant le grossissement des fruits, en évitant de mouiller les mûres ; pailler et ne pas arroser en hiver.',
    amount: 'Environ 10 à 15 L par pied par arrosage en été sec ; en grand bac, 25 % du volume, soit 7 L pour un bac de 40 cm.',
    potShare: 0.25,
  },
  physalis: {
    method: 'Arroser régulièrement au pied, sans excès ni eau sur le feuillage ; s’il est hiverné hors gel, le garder presque au sec jusqu’au printemps.',
    amount: 'Environ 2 à 3 L par pied tous les 3 jours en été ; en grand pot, 30 % du volume, soit 3,5 L pour un pot de 30 cm ; en hivernage, un verre par mois.',
    potShare: 0.3,
  },
  kiwai: {
    method: 'Arroser copieusement au pied de la liane en été, dans une cuvette, car elle craint la sécheresse ; pailler largement et ne pas arroser en hiver.',
    amount: 'Environ 15 à 20 L par pied par arrosage en été, tous les 3 jours par forte chaleur ; en très grand bac, 30 % du volume, soit 15 L pour un bac de 50 cm.',
    potShare: 0.3,
  },
  'fraisier-des-bois': {
    method: 'Arroser au pied, sans mouiller les fruits, le matin, pour garder la terre fraîche en été ; un paillis de paille garde les fraises propres. Arroser rarement en hiver.',
    amount: 'Environ 0,5 L par pied tous les 3 jours en été ; en pot, 30 % du volume, soit 0,7 L pour un pot de 17 cm.',
    potShare: 0.3,
  },
  aronia: {
    method: 'Arroser profondément au pied la première année après la plantation, puis seulement par forte sécheresse ; pailler et ne pas arroser en hiver.',
    amount: 'Environ 10 à 15 L par pied par semaine la première année en été, ensuite seulement en sécheresse ; en bac, 25 % du volume, soit 3 L pour un pot de 30 cm.',
    potShare: 0.25,
  },
  citronnelle: {
    method: 'Arroser au pied pour garder la motte fraîche en été, avec une eau à température ambiante ; à l’abri en hiver, arroser peu et laisser sécher en surface.',
    amount: 'En pot, 30 % du volume, soit 2 L pour un pot de 25 cm tous les 2 jours en été ; en hiver, environ 10 % du volume tous les 10 jours.',
    potShare: 0.3,
  },
  stevia: {
    method: 'Arroser au pied quand la surface commence à sécher, sans laisser la terre détrempée ; en hivernage, rabattue dans un local frais, la garder presque au sec.',
    amount: 'En pot, 25 % du volume, soit 0,5 L pour un pot de 17 cm en été ; en pleine terre, environ 1 L par pied ; en hiver, un petit verre toutes les deux semaines.',
    potShare: 0.25,
  },
  liveche: {
    method: 'Arroser au pied par temps sec en été, en profondeur pour cette grande plante ; aucun arrosage en hiver, la souche disparaît sous terre.',
    amount: 'Environ 5 L par pied par arrosage en été sec ; en grand pot, 30 % du volume, soit 3,5 L pour un pot de 30 cm.',
    potShare: 0.3,
  },
  'menthe-poivree': {
    method: 'Arroser au pied pour que la terre reste toujours fraîche en été, de préférence le soir ; en hiver la partie aérienne disparaît, arroser seulement si le pot sèche.',
    amount: 'En pot, un tiers du volume, soit 1,2 L pour un pot de 20 cm tous les 2 jours en été ; en pleine terre, environ 1 L par touffe.',
    potShare: 0.35,
  },
  'menthe-marocaine': {
    method: 'Arroser au pied régulièrement pour une terre fraîche en permanence, surtout en pot où elle sèche vite ; une soucoupe aide en plein été, arroser peu en hiver.',
    amount: 'En pot, un tiers du volume, soit 1,2 L pour un pot de 20 cm tous les 2 jours en été ; en hiver, environ 10 % du volume toutes les deux semaines.',
    potShare: 0.35,
  },
  'basilic-thai': {
    method: 'Arroser au pied le matin, jamais sur les feuilles ni le soir, avec une eau tiède ; laisser à peine sécher la surface entre deux arrosages.',
    amount: 'En pot, 30 % du volume, soit 0,7 L pour un pot de 17 cm tous les 2 jours en été ; en pleine terre, environ 0,5 à 1 L par pied.',
    potShare: 0.3,
  },
  'origan-grec': {
    method: 'Arroser au pied seulement quand la terre est sèche en profondeur, en une fois et à fond ; aucun arrosage en hiver, il craint l’humidité.',
    amount: 'En pleine terre, environ 1 à 2 L par pied par sécheresse ; en pot, 15 % du volume, soit 0,5 L pour un pot de 20 cm.',
    potShare: 0.15,
  },
  'sarriette-annuelle': {
    method: 'Arroser modérément au pied quand la terre est sèche en surface, le soir, en évitant les excès qui affadissent son arôme.',
    amount: 'Environ 0,5 L par pied ou 5 L/m² par arrosage en été ; en pot, 20 % du volume, soit 0,5 L pour un pot de 17 cm.',
    potShare: 0.2,
  },
  'thym-citron': {
    method: 'Arroser au pied seulement par sécheresse prolongée, en laissant la terre sécher complètement entre deux apports ; plus souvent en pot, jamais en hiver en pleine terre.',
    amount: 'En pleine terre, environ 1 L par pied en été sec ; en pot, 15 % du volume, soit 0,3 L pour un pot de 17 cm.',
    potShare: 0.15,
  },
  ciboule: {
    method: 'Arroser au pied des touffes pour garder la terre fraîche en été, le soir ; laisser faire la pluie en hiver.',
    amount: 'Environ 10 L/m² par arrosage en été ; en pot, 25 % du volume, soit 0,9 L pour un pot de 20 cm.',
    potShare: 0.25,
  },
  // ---------------------------------------------------------------- Arbres fruitiers
  'murier-noir': {
    method: 'Arroser lentement au pied, dans une cuvette, les jeunes arbres pendant les deux premiers étés ; ensuite inutile, et jamais en hiver.',
    amount: 'Environ 30 à 50 L par arrosage tous les 7 à 10 jours en été pour un jeune arbre ; en grand bac, 25 % du volume, soit 15 L pour un bac de 50 cm.',
    potShare: 0.25,
  },
  nashi: {
    method: 'Arroser copieusement au pied par sécheresse pendant le grossissement des fruits, en profondeur et lentement ; pailler et ne jamais arroser en hiver.',
    amount: 'Environ 30 à 50 L par arrosage pour un jeune arbre, une fois par semaine en été sec ; en bac, 25 % du volume, soit 15 L pour un bac de 50 cm.',
    potShare: 0.25,
  },
  'neflier-commun': {
    method: 'Arroser profondément au pied la première année après la plantation ; ensuite seulement lors de sécheresses exceptionnelles. Pailler le pied.',
    amount: 'Environ 30 L par arrosage tous les 10 jours en été la première année ; en grand bac, 25 % du volume, soit 15 L pour un bac de 50 cm.',
    potShare: 0.25,
  },
  yuzu: {
    method: 'Arroser à fond quand le substrat est sec sur 3 cm, à l’eau de pluie ou peu calcaire, puis vider la soucoupe ; en hiver à l’abri, arroser très peu.',
    amount: 'En pot, 25 % du volume, soit 3 L pour un pot de 30 cm en été ; en hiver, moins de 10 % du volume toutes les deux semaines. En pleine terre, 15 à 20 L par pied.',
    potShare: 0.25,
  },
  combava: {
    method: 'Arroser à fond dès que le dessus du terreau sèche, avec une eau peu calcaire à température ambiante, puis vider la soucoupe ; espacer en hiver dans une pièce fraîche.',
    amount: 'En pot, 25 % du volume, soit 1,8 L pour un pot de 25 cm en été ; en hiver, environ 10 % du volume tous les 10 jours.',
    potShare: 0.25,
  },
  theier: {
    method: 'Arroser au pied à l’eau de pluie, l’eau calcaire étant mal tolérée, pour garder la terre fraîche en été ; pailler d’écorces et arroser peu en hiver, un peu plus en pot.',
    amount: 'En pleine terre, environ 10 L par pied par arrosage en été ; en pot, 30 % du volume, soit 2 L pour un pot de 25 cm.',
    potShare: 0.3,
  },
  manguier: {
    method: 'Arroser à fond quand le dessus du terreau est sec, avec une eau tiède, jusqu’à écoulement, puis vider la soucoupe ; espacer en hiver sans laisser sécher la motte.',
    amount: 'Environ 25 % du volume du pot, soit 1,8 L pour un pot de 25 cm ; en hiver, environ 15 % du volume.',
    potShare: 0.25,
  },
  papayer: {
    method: 'Arroser régulièrement le terreau sans le détremper, avec une eau tiède, et vider la soucoupe aussitôt ; en hiver, arroser très peu car les racines pourrissent vite.',
    amount: 'Environ 20 % du volume du pot, soit 2,4 L pour un pot de 30 cm en été ; en hiver, à peine 10 % du volume tous les 10 jours.',
    potShare: 0.2,
  },
  goyavier: {
    method: 'Arroser au pied pour garder le substrat légèrement humide en été, avec une eau à température ambiante ; en hiver, laisser sécher la surface entre deux arrosages.',
    amount: 'Environ 25 % du volume du pot, soit 1,8 L pour un pot de 25 cm ; moitié moins en hiver.',
    potShare: 0.25,
  },
  ananas: {
    method: 'Arroser le substrat quand il est sec et verser un peu d’eau douce et tiède dans la rosette centrale, à renouveler chaque semaine ; très peu en hiver, rosette vide.',
    amount: 'Environ 15 % du volume du pot, soit 0,3 L pour un pot de 17 cm, plus un demi-verre dans la rosette ; en hiver, un demi-verre au pied toutes les deux semaines.',
    potShare: 0.15,
  },
  litchi: {
    method: 'Garder le substrat toujours légèrement humide avec de l’eau non calcaire et tiède, sans jamais laisser d’eau stagnante dans la soucoupe ; brumiser le feuillage par temps sec.',
    amount: 'Environ 20 % du volume du pot, soit 0,7 L pour un pot de 20 cm, tous les 3 jours en été ; un peu moins en hiver.',
    potShare: 0.2,
  },
  pitaya: {
    method: 'Arroser à fond quand le substrat est sec, comme un cactus, puis laisser sécher complètement ; presque au sec en hiver.',
    amount: 'Environ 15 % du volume du pot, soit 1 L pour un pot de 25 cm en été ; en hiver, un petit verre par mois.',
    potShare: 0.15,
  },
  cacaoyer: {
    method: 'Arroser à l’eau tiède non calcaire pour garder le substrat toujours frais, sans jamais le laisser sécher, puis vider la soucoupe ; brumiser souvent le feuillage.',
    amount: 'Environ 25 % du volume du pot, soit 1,8 L pour un pot de 25 cm tous les 3 jours en été ; un peu moins en hiver.',
    potShare: 0.25,
  },
  'romarin-rampant': {
    method: 'Arroser au pied seulement quand la terre est sèche en surface, en laissant bien égoutter ; en pleine terre, plus besoin d’arroser une fois installé.',
    amount: 'En pot, 15 % du volume, soit 0,5 L pour un pot de 20 cm en été ; en pleine terre, environ 2 L par pied la première année par sécheresse.',
    potShare: 0.15,
  },
  // ---------------------------------------------------------------- Potager (species-edible-3)
  'laitue-romaine': {
    method: 'Arroser régulièrement au pied, le matin, sans mouiller le feuillage ; un manque d’eau rend les feuilles amères, un paillage léger aide.',
    amount: 'Environ 0,5 à 1 L par pied ou 10 L/m² tous les 2 jours en été ; en pot, 30 % du volume, soit 1,1 L pour un pot de 20 cm.',
    potShare: 0.3,
  },
  'laitue-a-couper': {
    method: 'Arroser en pluie fine au ras du sol pour garder le substrat frais en permanence, surtout en jardinière où il sèche vite ; arroser le matin.',
    amount: 'En jardinière, un tiers du volume, soit 1,2 L pour un pot de 20 cm, souvent tous les jours en été ; en pleine terre, environ 10 L/m².',
    potShare: 0.35,
  },
  'chicoree-frisee': {
    method: 'Arroser régulièrement au pied, entre les rosettes, sans laisser d’eau stagner dans le cœur qui pourrirait ; arroser le matin.',
    amount: 'Environ 1 L par pied ou 10 à 15 L/m² tous les 3 jours en été ; en pot, 30 % du volume, soit 1,1 L pour un pot de 20 cm.',
    potShare: 0.3,
  },
  radicchio: {
    method: 'Arroser au pied pour garder la terre fraîche pendant la croissance d’été ; en automne, la pluie suffit et un sol trop humide favorise la pourriture.',
    amount: 'Environ 10 L/m² par arrosage en été ; en pot, 30 % du volume, soit 1,1 L pour un pot de 20 cm.',
    potShare: 0.3,
  },
  mizuna: {
    method: 'Arroser au pied en pluie fine pour que la terre reste fraîche, car la sécheresse déclenche la montée en graines ; pailler finement entre les rangs.',
    amount: 'Environ 10 L/m² tous les 3 jours en été ; en jardinière, 30 % du volume, soit 1,1 L pour un pot de 20 cm.',
    potShare: 0.3,
  },
  'moutarde-de-chine': {
    method: 'Arroser régulièrement au pied, le matin, pour des feuilles tendres et moins piquantes ; éviter de laisser la terre sécher entre deux arrosages.',
    amount: 'Environ 10 L/m² tous les 3 jours ; en pot, 30 % du volume, soit 1,1 L pour un pot de 20 cm.',
    potShare: 0.3,
  },
  'chou-chinois': {
    method: 'Arroser abondamment et sans interruption au pied, sans mouiller la pomme ; le moindre stress hydrique déclenche la montée en graines, pailler épais.',
    amount: 'Environ 2 L par pied ou 15 L/m² tous les 2 jours ; en pot, un tiers du volume, soit 2,4 L pour un pot de 25 cm.',
    potShare: 0.35,
  },
  'chou-de-milan': {
    method: 'Arroser copieusement au pied en été, dans une cuvette, sans mouiller la pomme ; pailler, puis laisser faire la pluie en hiver.',
    amount: 'Environ 4 à 5 L par pied ou 15 L/m² tous les 3 jours en été ; en grand bac, 30 % du volume, soit 3,5 L pour un pot de 30 cm.',
    potShare: 0.3,
  },
  'chou-romanesco': {
    method: 'Arroser abondamment et à intervalles réguliers au pied, sans à-coups, car tout stress fait former une pomme minuscule ; pailler et arroser le soir.',
    amount: 'Environ 5 L par pied ou 15 à 20 L/m² tous les 2 jours ; en grand bac, un tiers du volume, soit 4 L pour un pot de 30 cm.',
    potShare: 0.35,
  },
  patisson: {
    method: 'Arroser abondamment au pied, jamais sur les feuilles sensibles à l’oïdium, de préférence le matin ; pailler pour garder l’humidité.',
    amount: 'Environ 5 à 10 L par pied tous les 3 jours en été ; en grand bac, 30 % du volume, soit 6 L pour un bac de 35 cm.',
    potShare: 0.3,
  },
  chayotte: {
    method: 'Arroser copieusement au pied du treillage en été, dans une cuvette paillée ; si la souche reste en terre, la laisser au sec en hiver.',
    amount: 'Environ 10 à 15 L par pied tous les 3 jours en été ; en très grand bac, 30 % du volume, soit 15 L pour un bac de 50 cm.',
    potShare: 0.3,
  },
  'pois-mangetout': {
    method: 'Arroser au pied des rames dès la floraison, sans mouiller le feuillage sensible à l’oïdium ; inutile avant si le printemps est humide.',
    amount: 'Environ 10 L/m² tous les 3 jours à la floraison ; en jardinière, 30 % du volume, soit 1,1 L pour un pot de 20 cm.',
    potShare: 0.3,
  },
  'haricot-kilometre': {
    method: 'Arroser régulièrement au pied des rames avec une eau non froide, le soir, surtout pendant la floraison ; pailler pour garder le sol chaud et frais.',
    amount: 'Environ 2 à 3 L par pied ou 15 L/m² tous les 3 jours ; en grand pot, 30 % du volume, soit 3,5 L pour un pot de 30 cm.',
    potShare: 0.3,
  },
  soja: {
    method: 'Arroser au pied, en profondeur, pendant la floraison et le remplissage des gousses ; en dehors de ces périodes, laisser la surface sécher entre deux apports.',
    amount: 'Environ 10 à 15 L/m² tous les 4 jours en été ; en pot, 25 % du volume, soit 1,8 L pour un pot de 25 cm.',
    potShare: 0.25,
  },
  arachide: {
    method: 'Arroser au pied en sol léger et meuble jusqu’à la formation des gousses, sans tasser la terre où s’enfoncent les fleurs ; réduire avant la récolte.',
    amount: 'Environ 1 à 2 L par pied ou 10 L/m² tous les 4 jours ; en pot large, 25 % du volume, soit 1,8 L pour un pot de 25 cm.',
    potShare: 0.25,
  },
  'celeri-branche': {
    method: 'Arroser très régulièrement au pied, sans jamais laisser sécher le sol qui rend les côtes creuses et fibreuses ; pailler épais et arroser le soir.',
    amount: 'Environ 2 L par pied ou 15 à 20 L/m² tous les 2 jours en été ; en pot, un tiers du volume, soit 2,4 L pour un pot de 25 cm.',
    potShare: 0.35,
  },
  salsifis: {
    method: 'Arroser au pied, en profondeur pour la longue racine, seulement lors des sécheresses d’été ; aucun arrosage en hiver.',
    amount: 'Environ 10 L/m² par arrosage en été sec ; en bac profond, 25 % du volume, soit 3 L pour un bac de 30 cm.',
    potShare: 0.25,
  },
  scorsonere: {
    method: 'Arroser profondément au pied pendant les sécheresses estivales pour une racine longue et droite ; la pluie suffit le reste de l’année.',
    amount: 'Environ 10 L/m² par arrosage en été sec ; en bac profond, 25 % du volume, soit 3 L pour un bac de 30 cm.',
    potShare: 0.25,
  },
  'cerfeuil-tubereux': {
    method: 'Garder le sol frais au printemps par des arrosages au pied en pluie fine ; cesser une fois le feuillage jauni en juillet, les tubercules se conservent en terre.',
    amount: 'Environ 10 L/m² par arrosage au printemps si sec ; en pot, 25 % du volume, soit 0,9 L pour un pot de 20 cm.',
    potShare: 0.25,
  },
  'oca-du-perou': {
    method: 'Arroser au pied pour garder la terre fraîche en été, et plus encore en automne pendant la formation des tubercules ; pailler.',
    amount: 'Environ 2 L par pied ou 10 à 15 L/m² tous les 5 jours ; en grand pot, 30 % du volume, soit 3,5 L pour un pot de 30 cm.',
    potShare: 0.3,
  },
  yacon: {
    method: 'Arroser généreusement au pied en été, dans une cuvette, cette grande plante dépassant 1,5 m ; aucun arrosage des souches stockées en hiver.',
    amount: 'Environ 10 L par pied tous les 4 jours en été ; en très grand bac, 30 % du volume, soit 9 L pour un bac de 40 cm.',
    potShare: 0.3,
  },
  daikon: {
    method: 'Arroser régulièrement au pied le long du rang, sans à-coups, pour une racine tendre et peu piquante ; pailler en fin d’été.',
    amount: 'Environ 10 à 15 L/m² tous les 3 jours ; en bac profond, 30 % du volume, soit 3,5 L pour un bac de 30 cm.',
    potShare: 0.3,
  },
  tetragone: {
    method: 'Arroser au pied quand la terre sèche, de préférence le soir ; elle supporte la sécheresse mais des arrosages réguliers donnent des pousses plus tendres.',
    amount: 'Environ 3 L par pied ou 10 L/m² tous les 4 jours en été ; en grand pot, 25 % du volume, soit 3 L pour un pot de 30 cm.',
    potShare: 0.25,
  },
  'claytone-de-cuba': {
    method: 'Arroser légèrement au pied pour garder la terre juste fraîche, sans détremper ; la pluie suffit généralement en hiver.',
    amount: 'Environ 5 à 10 L/m² par arrosage ; en jardinière, 25 % du volume, soit 0,9 L pour un pot de 20 cm.',
    potShare: 0.25,
  },
  'cresson-alenois': {
    method: 'Garder le support (terreau, coton ou germoir) constamment humide en pulvérisant ou en arrosant en pluie très fine, pour ne pas déchausser les graines.',
    amount: 'En pot, 20 % du volume, soit 0,15 L pour une barquette de 12 cm, une à deux fois par jour ; sur coton, quelques pulvérisations matin et soir.',
    potShare: 0.2,
  },
  pissenlit: {
    method: 'Arroser au pied seulement en cas de sécheresse, la plante étant très résistante ; un arrosage avant la récolte attendrit les feuilles.',
    amount: 'Environ 5 à 10 L/m² par arrosage en été sec ; en pot, 20 % du volume, soit 0,7 L pour un pot de 20 cm.',
    potShare: 0.2,
  },
  'ciboulette-chinoise': {
    method: 'Arroser au pied des touffes régulièrement en été, surtout en pot, en laissant juste sécher la surface ; peu en hiver pendant le repos.',
    amount: 'En pot, 25 % du volume, soit 0,9 L pour un pot de 20 cm en été ; en pleine terre, environ 10 L/m².',
    potShare: 0.25,
  },
  'basilic-citron': {
    method: 'Arroser au pied le matin dès que la surface sèche, avec une eau à température ambiante ; jamais le soir ni sur le feuillage.',
    amount: 'En pot, 30 % du volume, soit 0,7 L pour un pot de 17 cm tous les 2 jours en été ; en pleine terre, environ 0,5 à 1 L par pied.',
    potShare: 0.3,
  },
  'basilic-sacre': {
    method: 'Arroser au pied pour garder le substrat légèrement humide, avec une eau tiède ; à l’intérieur en hiver, réduire et laisser sécher la surface.',
    amount: 'En pot, 30 % du volume, soit 0,7 L pour un pot de 17 cm en été ; en hiver, environ 15 % du volume chaque semaine.',
    potShare: 0.3,
  },
  'menthe-bergamote': {
    method: 'Arroser au pied pour que la terre reste toujours fraîche, surtout en pot ; une soucoupe d’eau peut rester sous le pot en plein été.',
    amount: 'En pot, un tiers du volume, soit 1,2 L pour un pot de 20 cm tous les 2 jours en été ; en pleine terre, environ 1 L par touffe.',
    potShare: 0.35,
  },
  'menthe-pomme': {
    method: 'Arroser régulièrement au pied en été, le soir ; elle supporte mieux la sécheresse que les autres menthes, la surface peut sécher entre deux arrosages.',
    amount: 'En pot, 30 % du volume, soit 1,1 L pour un pot de 20 cm en été ; en pleine terre, environ 1 L par touffe tous les 3 jours.',
    potShare: 0.3,
  },
  'coriandre-vietnamienne': {
    method: 'Garder le substrat toujours humide ; en été on peut laisser une soucoupe d’eau sous le pot, et l’arroser par le haut en plus.',
    amount: 'Environ un tiers du volume du pot, soit 1,2 L pour un pot de 20 cm, plus 1 à 2 cm d’eau dans la soucoupe en été ; un peu moins en hiver.',
    potShare: 0.35,
  },
  'angelique-officinale': {
    method: 'Arroser au pied en profondeur pour garder le sol frais en permanence, car elle souffre vite de la sécheresse ; pailler épais à la mi-ombre.',
    amount: 'Environ 5 L par pied tous les 3 jours en été ; en grand bac, un tiers du volume, soit 4 L pour un bac de 30 cm.',
    potShare: 0.3,
  },
  cumin: {
    method: 'Arroser modérément au pied et laisser sécher la surface entre deux apports ; arrêter d’arroser quand les graines brunissent.',
    amount: 'Environ 5 L/m² par arrosage ; en pot, 20 % du volume, soit 0,5 L pour un pot de 17 cm.',
    potShare: 0.2,
  },
  carvi: {
    method: 'Arroser au pied pendant les sécheresses de la première année, quand la rosette s’installe ; la deuxième année, la pluie suffit généralement.',
    amount: 'Environ 10 L/m² par arrosage en été sec ; en pot, 25 % du volume, soit 0,9 L pour un pot de 20 cm.',
    potShare: 0.25,
  },
  'anis-vert': {
    method: 'Arroser au pied en pluie fine pour garder la terre légèrement fraîche jusqu’à la floraison, puis espacer pour faire mûrir les graines.',
    amount: 'Environ 5 L/m² par arrosage ; en pot, 20 % du volume, soit 0,7 L pour un pot de 20 cm.',
    potShare: 0.2,
  },
  pimprenelle: {
    method: 'Arroser au pied seulement en été très sec, en laissant la terre sécher entre deux arrosages ; elle résiste bien à la sécheresse.',
    amount: 'Environ 1 L par touffe en été sec ; en pot, 20 % du volume, soit 0,5 L pour un pot de 17 cm.',
    potShare: 0.2,
  },
  'sauge-ananas': {
    method: 'Arroser régulièrement au pied en été, plus que les sauges méditerranéennes, le soir ; en pot hiverné hors gel, arroser peu.',
    amount: 'En pleine terre, environ 3 L par pied tous les 3 jours en été ; en pot, 25 % du volume, soit 1,8 L pour un pot de 25 cm.',
    potShare: 0.25,
  },
  'camomille-romaine': {
    method: 'Arroser au pied en été sec, sans mouiller les fleurs, puis laisser ressuyer ; elle craint l’humidité stagnante en hiver, n’arroser alors jamais.',
    amount: 'Environ 5 L/m² par arrosage en été sec ; en pot, 20 % du volume, soit 0,5 L pour un pot de 17 cm.',
    potShare: 0.2,
  },
  'herbe-aux-chats': {
    method: 'Une fois installée, ne l’arroser au pied que par forte sécheresse ; en pot, arroser quand la terre est sèche sur 2 cm.',
    amount: 'En pleine terre, environ 1 à 2 L par pied en été sec ; en pot, 20 % du volume, soit 0,7 L pour un pot de 20 cm.',
    potShare: 0.2,
  },
  safran: {
    method: 'Ne pas arroser en été pendant la dormance des cormes ; arroser légèrement au pied en septembre pour déclencher la floraison, puis seulement si l’automne est sec.',
    amount: 'Environ 5 L/m² en septembre puis toutes les 3 semaines si sec ; en pot, 10 % du volume, soit 0,4 L pour un pot de 20 cm.',
    potShare: 0.1,
  },
  'huitre-vegetale': {
    method: 'Arroser au pied, sans mouiller les feuilles bleutées, pour garder la terre fraîche en été ; sol très drainant et aucune eau stagnante dans la soucoupe.',
    amount: 'En pot profond, 20 % du volume, soit 0,7 L pour un pot de 20 cm ; en pleine terre, environ 0,5 L par pied tous les 4 jours en été.',
    potShare: 0.2,
  },
  'estragon-du-mexique': {
    method: 'Arroser au pied quand la surface sèche, puis laisser égoutter ; en pot rentré hors gel, garder presque au sec en hiver.',
    amount: 'En pot, 20 % du volume, soit 0,7 L pour un pot de 20 cm en été ; en pleine terre, environ 1 à 2 L par pied.',
    potShare: 0.2,
  },
  // ---------------------------------------------------------------- Petits fruits et arbres (species-edible-3)
  canneberge: {
    method: 'Garder le substrat toujours humide avec de l’eau de pluie, jamais calcaire ; en bac, une soucoupe peu profonde laissée pleine en été convient bien.',
    amount: 'Environ un tiers du volume du bac, soit 2,4 L pour un pot de 25 cm, tous les 2 jours en été ; en hiver, juste empêcher la motte de sécher.',
    potShare: 0.35,
  },
  'airelle-rouge': {
    method: 'Arroser au pied à l’eau de pluie pour garder le sol frais, sans le détremper ; un paillis d’aiguilles de pin ou d’écorces aide à conserver l’humidité.',
    amount: 'Environ 2 L par pied tous les 3 jours en été ; en pot, 25 % du volume, soit 0,9 L pour un pot de 20 cm.',
    potShare: 0.25,
  },
  'ronce-de-logan': {
    method: 'Arroser au pied le long du palissage pendant la fructification en été sec, sans mouiller les fruits ; pailler largement.',
    amount: 'Environ 10 à 15 L par pied par arrosage en été sec ; en grand bac, 25 % du volume, soit 7 L pour un bac de 40 cm.',
    potShare: 0.25,
  },
  'framboisier-du-japon': {
    method: 'Arroser au pied par temps sec en été, lentement pour que l’eau pénètre ; la pluie suffit le reste de l’année.',
    amount: 'Environ 10 L par pied par arrosage en été sec ; en bac, 25 % du volume, soit 3 L pour un pot de 30 cm.',
    potShare: 0.25,
  },
  casseille: {
    method: 'Arroser au pied en été sec, surtout pendant la formation des fruits, puis pailler ; arrosages profonds et espacés, rien en hiver.',
    amount: 'Environ 10 à 15 L par pied par arrosage en été sec ; en bac, 25 % du volume, soit 7 L pour un bac de 40 cm.',
    potShare: 0.25,
  },
  'goumi-du-japon': {
    method: 'Arroser profondément au pied la première année après la plantation ; ensuite, très résistant à la sécheresse, il se contente de la pluie.',
    amount: 'Environ 10 à 15 L par pied par semaine en été la première année ; en bac, 20 % du volume, soit 2,4 L pour un pot de 30 cm.',
    potShare: 0.2,
  },
  'goyavier-du-chili': {
    method: 'Arroser au pied pour garder le sol frais en été, sans excès ; en pot, ne jamais laisser la motte sécher complètement et arroser plus souvent.',
    amount: 'En pleine terre, environ 5 L par pied tous les 4 jours en été ; en pot, 25 % du volume, soit 1,8 L pour un pot de 25 cm.',
    potShare: 0.25,
  },
  tamarillo: {
    method: 'Arroser régulièrement au pied en été, à fond puis laisser sécher la surface, en vidant la soucoupe ; en hiver à l’abri, espacer nettement.',
    amount: 'En pot, 25 % du volume, soit 3 L pour un pot de 30 cm en été ; en hiver, environ 10 % du volume tous les 10 jours.',
    potShare: 0.25,
  },
  griottier: {
    method: 'Arroser lentement au pied, dans une cuvette, les jeunes arbres en été sec les deux premières années ; un arbre installé se contente de la pluie.',
    amount: 'Environ 30 à 50 L par arrosage tous les 10 jours en été pour un jeune arbre ; en grand bac, 25 % du volume, soit 15 L pour un bac de 50 cm.',
    potShare: 0.25,
  },
  'prunier-japonais': {
    method: 'Arroser copieusement au pied les jeunes arbres en été, lentement dans une cuvette, puis pailler ; arrosages espacés mais profonds.',
    amount: 'Environ 30 à 50 L par arrosage tous les 10 jours en été pour un jeune arbre ; en grand bac, 25 % du volume, soit 15 L pour un bac de 50 cm.',
    potShare: 0.25,
  },
  pistachier: {
    method: 'Arroser profondément au pied les jeunes sujets en été, en laissant sécher la terre entre deux apports ; un arbre adulte supporte la sécheresse.',
    amount: 'Environ 30 L par arrosage tous les 2 semaines en été pour un jeune arbre ; rien en hiver.',
    potShare: null,
  },
  pacanier: {
    method: 'Arroser copieusement au pied les jeunes arbres en été, en profondeur pour la racine pivotante ; maintenir les apports pendant le remplissage des noix.',
    amount: 'Environ 40 à 50 L par arrosage tous les 10 jours en été pour un jeune arbre ; rien en hiver.',
    potShare: null,
  },
  limettier: {
    method: 'Arroser à fond quand les premiers centimètres sont secs, à l’eau peu calcaire et à température ambiante ; ne jamais laisser d’eau stagnante dans la soucoupe.',
    amount: 'En pot, 25 % du volume, soit 1,8 L pour un pot de 25 cm en été ; en hiver, environ 10 % du volume tous les 10 jours.',
    potShare: 0.25,
  },
  pamplemoussier: {
    method: 'Arroser copieusement quand la surface sèche, à l’eau de pluie de préférence, jusqu’à écoulement, puis vider la soucoupe ; espacer en hiver.',
    amount: 'En bac, 25 % du volume, soit 3 L pour un pot de 30 cm en été ; en pleine terre, 20 à 30 L par pied ; en hiver, 10 % du volume tous les 10 jours.',
    potShare: 0.25,
  },
  cedratier: {
    method: 'Arroser régulièrement en été, à fond, quand le dessus du terreau est sec ; en véranda l’hiver, arroser modérément et vider la soucoupe.',
    amount: 'En pot, 25 % du volume, soit 3 L pour un pot de 30 cm en été ; en hiver, environ 10 % du volume tous les 10 jours.',
    potShare: 0.25,
  },
  calamondin: {
    method: 'Arroser dès que la surface du terreau sèche, avec une eau peu calcaire, puis vider la soucoupe après quelques minutes pour éviter l’eau stagnante.',
    amount: 'En pot, 25 % du volume, soit 0,9 L pour un pot de 20 cm en été ; en hiver, environ 15 % du volume chaque semaine.',
    potShare: 0.25,
  },
  bergamotier: {
    method: 'Arroser copieusement jusqu’à écoulement puis laisser sécher la surface avant le suivant ; réduire en hiver en véranda lumineuse.',
    amount: 'En pot, 25 % du volume, soit 3 L pour un pot de 30 cm en été ; en hiver, environ 10 % du volume tous les 10 jours.',
    potShare: 0.25,
  },
  'citronnier-meyer': {
    method: 'Arroser à fond quand les 2 premiers centimètres sont secs, à l’eau peu calcaire et tempérée, puis vider la soucoupe.',
    amount: 'En pot, 25 % du volume, soit 1,8 L pour un pot de 25 cm en été ; en hiver, environ 10 % du volume tous les 10 jours.',
    potShare: 0.25,
  },
};
