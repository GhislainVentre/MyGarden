import type { WateringGuide } from '../../types';

/** Guides d’arrosage (geste et quantité) — plantes d’intérieur, aromatiques et classiques du jardin. */
export const WATERING_GUIDES_1: Record<string, WateringGuide> = {
  'monstera-adansonii': {
    method: 'Arroser lentement sur tout le terreau avec de l’eau à température ambiante quand les 3 premiers centimètres sont secs, jusqu’à écoulement par les trous ; vider la soucoupe après 15 minutes.',
    amount: 'Environ un quart du volume du pot, soit 0,55 litre pour un pot de 17 cm ; moitié moins en hiver.',
    potShare: 0.25,
  },
  'philodendron-birkin': {
    method: 'Verser l’eau tempérée au pied, en couronne autour des tiges, quand la moitié supérieure du terreau est sèche ; laisser égoutter puis vider la soucoupe.',
    amount: 'Un cinquième à un quart du volume du pot, soit 250 à 300 ml pour un pot de 14 cm ; réduire d’un tiers en hiver.',
    potShare: 0.22,
  },
  'philodendron-pink-princess': {
    method: 'Arroser au pied avec une eau douce à température ambiante dès que le tiers supérieur est sec, sans mouiller les feuilles roses ; ne jamais laisser d’eau dans le cache-pot.',
    amount: 'Un cinquième du volume du pot, soit 250 ml pour un pot de 14 cm ; espacer et réduire de moitié en hiver.',
    potShare: 0.2,
  },
  'philodendron-brasil': {
    method: 'Arroser sur toute la surface du terreau quand les premiers centimètres sont secs, jusqu’à ce que l’eau ressorte, puis jeter l’excédent. En suspension, arroser au-dessus d’un évier pour bien égoutter.',
    amount: 'Un cinquième du volume du pot, soit 160 ml pour un pot de 12 cm ou 250 ml pour 14 cm ; moins en hiver.',
    potShare: 0.2,
  },
  'philodendron-selloum': {
    method: 'Arroser copieusement et lentement sur toute la surface, jusqu’à écoulement, puis laisser sécher les premiers centimètres ; vider la soucoupe au bout de 15 minutes.',
    amount: 'Un peu moins d’un tiers du volume du pot, soit 2 litres pour un pot de 25 cm en été ; environ moitié moins en hiver.',
    potShare: 0.3,
  },
  'pothos-marble-queen': {
    method: 'Attendre que la moitié du terreau soit sèche, puis arroser au pied avec de l’eau à température ambiante jusqu’à écoulement ; vider la soucoupe.',
    amount: 'Un cinquième du volume du pot, soit 250 ml pour un pot de 14 cm ; un arrosage plus léger toutes les deux semaines en hiver.',
    potShare: 0.2,
  },
  'scindapsus-pictus': {
    method: 'Arroser au pied quand les feuilles s’enroulent légèrement et que le terreau est sec à mi-hauteur ; verser lentement, laisser égoutter et ne pas laisser tremper.',
    amount: 'Un cinquième du volume du pot, soit 160 ml pour un pot de 12 cm ; réduire d’un tiers en hiver.',
    potShare: 0.2,
  },
  'rhaphidophora-tetrasperma': {
    method: 'En été, arroser au pied dès que la surface sèche, avec une eau tempérée, pour garder le terreau légèrement humide ; en hiver, attendre que les premiers centimètres soient secs.',
    amount: 'Un quart du volume du pot, soit 300 ml pour un pot de 14 cm ; environ 150 ml en hiver.',
    potShare: 0.25,
  },
  'calathea-orbifolia': {
    method: 'Arroser au pied avec de l’eau de pluie ou filtrée à température ambiante dès que la surface sèche, sans jamais laisser le terreau sécher ni l’eau stagner dans la soucoupe.',
    amount: 'Environ un tiers du volume du pot, soit 0,7 litre pour un pot de 17 cm ; un peu moins en hiver, mais sans laisser sécher.',
    potShare: 0.3,
  },
  'calathea-lancifolia': {
    method: 'Arroser doucement à la base avec une eau non calcaire et tempérée pour garder le terreau frais en permanence ; vider la soucoupe après égouttage.',
    amount: 'Un tiers du volume du pot, soit 0,4 litre pour un pot de 14 cm ; réduire légèrement en hiver.',
    potShare: 0.3,
  },
  'stromanthe-triostar': {
    method: 'Arroser au pied avec une eau peu calcaire à température ambiante dès que le dessus du substrat sèche ; laisser égoutter et ne jamais laisser le pot baigner.',
    amount: 'Un peu moins d’un tiers du volume du pot, soit 0,6 litre pour un pot de 17 cm ; un peu moins en hiver.',
    potShare: 0.28,
  },
  'alocasia-zebrina': {
    method: 'Arroser au pied avec une eau tempérée quand les premiers centimètres sont secs, sans mouiller la base des pétioles ; vider la soucoupe. Pendant le repos hivernal, laisser presque sécher.',
    amount: 'Un quart du volume du pot, soit 0,55 litre pour un pot de 17 cm ; deux à trois fois moins en hiver.',
    potShare: 0.25,
  },
  caladium: {
    method: 'Pendant la végétation, arroser au pied à l’eau tiède dès que la surface sèche pour garder le terreau humide ; à l’automne, cesser presque totalement et conserver le tubercule au sec.',
    amount: 'Un peu moins d’un tiers du volume du pot, soit 0,35 litre pour un pot de 14 cm ; quasiment rien pendant le repos.',
    potShare: 0.3,
  },
  'oxalis-triangularis': {
    method: 'Arroser au pied, sans mouiller le feuillage, dès que la surface sèche ; si la plante jaunit et entre en dormance, suspendre l’arrosage quelques semaines puis reprendre doucement.',
    amount: 'Un quart du volume du pot, soit 0,3 litre pour un pot de 14 cm ; rien pendant la dormance.',
    potShare: 0.25,
  },
  'peperomia-argyreia': {
    method: 'Arroser au pied quand les premiers centimètres sont secs, sans mouiller les feuilles ; laisser bien égoutter car les tiges charnues pourrissent dans l’eau.',
    amount: 'Environ 15 % du volume du pot, soit 120 ml pour un pot de 12 cm ; moitié moins en hiver.',
    potShare: 0.15,
  },
  'peperomia-caperata': {
    method: 'Arroser par le bas en posant le pot 15 minutes dans une soucoupe d’eau tempérée, ou au pied sans toucher les feuilles gaufrées ; laisser sécher entre deux apports.',
    amount: 'Environ 15 % du volume du pot, soit 120 ml pour un pot de 12 cm ; jamais plus de 15 minutes de bassinage.',
    potShare: 0.15,
  },
  'pilea-cadierei': {
    method: 'En été, arroser au pied avec une eau tempérée dès que la surface sèche ; en hiver, laisser sécher le dessus et vider systématiquement la soucoupe.',
    amount: 'Un cinquième du volume du pot, soit 250 ml pour un pot de 14 cm ; environ 150 ml en hiver.',
    potShare: 0.2,
  },
  'begonia-rex': {
    method: 'Arroser au pied quand la surface est sèche, avec une eau non calcaire à température ambiante, sans mouiller le feuillage ; vider la soucoupe aussitôt.',
    amount: 'Un cinquième du volume du pot, soit 250 ml pour un pot de 14 cm ; un peu moins en hiver.',
    potShare: 0.2,
  },
  saintpaulia: {
    method: 'Arroser par la soucoupe avec de l’eau tiède non calcaire, laisser absorber 20 minutes puis jeter l’excédent ; ne jamais mouiller les feuilles ni le cœur.',
    amount: 'Environ un cinquième du volume du pot, soit 150 ml pour un pot de 12 cm ; un peu moins en hiver.',
    potShare: 0.2,
  },
  streptocarpus: {
    method: 'Arroser par la soucoupe ou au pied avec de l’eau à température ambiante quand la surface est sèche, sans mouiller le feuillage velouté ; vider après 20 minutes.',
    amount: 'Un cinquième du volume du pot, soit 160 ml pour un pot de 12 cm ; espacer en hiver.',
    potShare: 0.2,
  },
  gardenia: {
    method: 'Arroser au pied à l’eau de pluie ou filtrée, tiède, dès que la surface s’assèche pour que la motte reste fraîche ; ne jamais laisser sécher ni stagner d’eau dans la soucoupe.',
    amount: 'Un quart du volume du pot, soit 0,55 litre pour un pot de 17 cm ; un peu moins en hiver.',
    potShare: 0.25,
  },
  'jasmin-interieur': {
    method: 'Arroser au pied sur toute la surface du terreau pour le garder frais, surtout pendant la floraison ; laisser égoutter et vider la soucoupe.',
    amount: 'Un quart du volume du pot, soit 0,55 litre pour un pot de 17 cm ; réduire d’un tiers après la floraison.',
    potShare: 0.25,
  },
  stephanotis: {
    method: 'Arroser au pied avec une eau non calcaire tempérée pour garder le terreau frais en été ; en hiver au frais, laisser sécher le dessus entre deux apports.',
    amount: 'Un quart du volume du pot, soit 0,55 litre pour un pot de 17 cm ; environ moitié moins en hiver.',
    potShare: 0.25,
  },
  'hibiscus-interieur': {
    method: 'En été, arroser généreusement au pied dès que la surface sèche, jusqu’à écoulement par les trous ; ne pas laisser la motte sécher, sous peine de voir tomber les boutons.',
    amount: 'Un tiers du volume du pot, soit 0,7 litre pour un pot de 17 cm ou 1,1 litre pour 20 cm ; moitié moins en hiver.',
    potShare: 0.3,
  },
  clivia: {
    method: 'Arroser modérément au pied quand le dessus est sec en été ; pendant le repos hivernal au frais, ne donner qu’un peu d’eau pour éviter que les feuilles se rident.',
    amount: 'Un cinquième du volume du pot, soit 0,45 litre pour un pot de 17 cm ; un verre (100 ml) toutes les trois semaines en hiver.',
    potShare: 0.2,
  },
  amaryllis: {
    method: 'Au démarrage, humidifier à peine le terreau autour du bulbe sans le mouiller ; dès que les feuilles poussent, arroser au pied régulièrement, puis tout arrêter 8 à 10 semaines en fin d’été.',
    amount: 'Un cinquième du volume du pot, soit 160 ml pour un pot de 12 cm en croissance ; quelques cuillerées au démarrage, rien pendant le repos.',
    potShare: 0.2,
  },
  zantedeschia: {
    method: 'Arroser abondamment au pied pendant la croissance et la floraison pour garder le terreau constamment humide ; réduire puis arrêter quand le feuillage jaunit et laisser le rhizome au sec.',
    amount: 'Un tiers du volume du pot, soit 0,7 litre pour un pot de 17 cm ; rien pendant le repos.',
    potShare: 0.33,
  },
  aechmea: {
    method: 'Remplir le cœur de la rosette d’eau non calcaire à température ambiante, puis la vider et la renouveler toutes les deux semaines ; humidifier à peine le terreau.',
    amount: 'De quoi remplir la rosette (50 à 100 ml), plus un dixième du volume du pot sur le terreau, soit 120 ml pour un pot de 14 cm ; rosette vide en hiver au frais.',
    potShare: 0.1,
  },
  'asplenium-nidus': {
    method: 'Arroser autour du cœur, jamais dedans, avec une eau non calcaire tempérée, pour garder le terreau frais ; laisser égoutter et vider la soucoupe.',
    amount: 'Un peu moins d’un tiers du volume du pot, soit 0,35 litre pour un pot de 14 cm ; un peu moins en hiver.',
    potShare: 0.3,
  },
  platycerium: {
    method: 'Plonger la motte ou la plaque dans une bassine d’eau douce à température ambiante, puis laisser égoutter avant de raccrocher ; laisser sécher entre deux bains et brumiser par temps sec.',
    amount: 'Trempage de 10 minutes chaque semaine en été, toutes les deux semaines en hiver.',
    potShare: null,
  },
  adiantum: {
    method: 'Arroser au pied avec une eau non calcaire tempérée dès que la surface pâlit, ou par la soucoupe pendant 15 minutes ; le terreau ne doit jamais sécher, même une seule fois.',
    amount: 'Un tiers du volume du pot, soit 0,4 litre pour un pot de 14 cm, souvent deux fois par semaine en été ; un peu moins en hiver.',
    potShare: 0.3,
  },
  chamaedorea: {
    method: 'Arroser au pied avec une eau tempérée pour garder le terreau légèrement frais en été ; en hiver, attendre que la surface sèche et ne jamais laisser d’eau dans la soucoupe.',
    amount: 'Un quart du volume du pot, soit 0,55 litre pour un pot de 17 cm ; environ moitié moins en hiver.',
    potShare: 0.25,
  },
  'phoenix-roebelenii': {
    method: 'Arroser lentement sur toute la surface jusqu’à écoulement, puis vider la soucoupe ; en été, ne pas laisser sécher la motte, en hiver attendre que la surface soit sèche.',
    amount: 'Un quart du volume du pot, soit 1,75 litre pour un pot de 25 cm ; moitié moins en hiver.',
    potShare: 0.25,
  },
  rhapis: {
    method: 'Arroser au pied quand la surface est sèche, avec de l’eau à température ambiante, jusqu’à ce qu’elle s’écoule ; vider la soucoupe car il ne supporte pas l’eau stagnante.',
    amount: 'Un cinquième du volume du pot, soit 0,7 litre pour un pot de 20 cm ; un peu moins en hiver.',
    potShare: 0.2,
  },
  'cycas-revoluta': {
    method: 'Arroser au pied, sur le terreau uniquement, quand il est sec sur plusieurs centimètres ; ne jamais verser d’eau sur la couronne et vider la soucoupe.',
    amount: 'Environ 15 % du volume du pot, soit 0,55 litre pour un pot de 20 cm ; moitié moins et plus rarement en hiver.',
    potShare: 0.15,
  },
  'dracaena-fragrans': {
    method: 'Laisser sécher la moitié du terreau, puis arroser au pied avec de l’eau de pluie ou reposée 24 heures, jusqu’à écoulement ; vider la soucoupe.',
    amount: 'Un cinquième du volume du pot, soit 0,7 litre pour un pot de 20 cm ; moitié moins en hiver.',
    potShare: 0.2,
  },
  'ficus-audrey': {
    method: 'Arroser régulièrement au pied quand la moitié du terreau est sèche, avec une eau tempérée, jusqu’à écoulement ; vider la soucoupe et éviter les à-coups.',
    amount: 'Un quart du volume du pot, soit 0,9 litre pour un pot de 20 cm ; environ moitié moins en hiver.',
    potShare: 0.25,
  },
  'ficus-tineke': {
    method: 'Attendre que la moitié du terreau soit sèche, puis arroser lentement sur toute la surface avec de l’eau tempérée ; laisser égoutter et ne pas laisser tremper.',
    amount: 'Un cinquième du volume du pot, soit 0,7 litre pour un pot de 20 cm ; moitié moins en hiver.',
    potShare: 0.2,
  },
  'fatsia-japonica': {
    method: 'Arroser au pied jusqu’à écoulement pour garder le terreau frais en été ; en hiver au frais, laisser sécher la surface entre deux apports.',
    amount: 'Un peu plus d’un quart du volume du pot, soit 1 litre pour un pot de 20 cm ; moitié moins en hiver.',
    potShare: 0.28,
  },
  'coffea-arabica': {
    method: 'Arroser au pied avec une eau non calcaire tempérée dès que la surface sèche, pour garder le terreau frais sans excès ; vider la soucoupe.',
    amount: 'Un quart du volume du pot, soit 0,55 litre pour un pot de 17 cm ; un peu moins en hiver.',
    potShare: 0.25,
  },
  aeschynanthus: {
    method: 'Arroser à l’eau douce tempérée quand les premiers centimètres sont secs, au-dessus d’un évier si la suspension n’a pas de soucoupe ; espacer en fin d’hiver pour stimuler la floraison.',
    amount: 'Un cinquième du volume du pot, soit 0,25 litre pour un pot de 14 cm ; environ moitié moins en hiver.',
    potShare: 0.2,
  },
  hypoestes: {
    method: 'Arroser au pied dès que la surface sèche, sans attendre que les feuilles s’affaissent ; utiliser de l’eau à température ambiante et vider la soucoupe.',
    amount: 'Un tiers du volume du pot, soit 250 ml pour un pot de 12 cm ; un peu moins en hiver.',
    potShare: 0.3,
  },
  soleirolia: {
    method: 'Arroser par la soucoupe pendant 15 minutes ou au ras du terreau sous le tapis de feuilles, pour ne pas les écraser ; le substrat doit rester humide en permanence.',
    amount: 'Un tiers du volume du pot, soit 0,25 litre pour un pot de 12 cm ; un peu moins en hiver, sans laisser sécher.',
    potShare: 0.3,
  },
  ctenanthe: {
    method: 'Arroser au pied avec une eau peu calcaire et tempérée dès que la surface sèche, pour garder le terreau légèrement humide ; vider la soucoupe.',
    amount: 'Un tiers du volume du pot, soit 0,65 litre pour un pot de 17 cm ; un peu moins en hiver.',
    potShare: 0.3,
  },
  phlebodium: {
    method: 'Arroser au pied, autour des rhizomes rampants sans les noyer, quand la surface commence à sécher ; laisser égoutter.',
    amount: 'Un quart du volume du pot, soit 0,3 litre pour un pot de 14 cm ; un peu moins en hiver.',
    potShare: 0.25,
  },
  polyscias: {
    method: 'Arroser au pied avec une eau tempérée, jamais froide, quand les premiers centimètres sont secs ; laisser bien égoutter car il redoute l’excès.',
    amount: 'Un cinquième du volume du pot, soit 0,45 litre pour un pot de 17 cm ; moitié moins en hiver.',
    potShare: 0.2,
  },
  cordyline: {
    method: 'Arroser au pied avec une eau non calcaire pour garder le terreau légèrement frais en été ; en hiver, laisser sécher le dessus et vider la soucoupe.',
    amount: 'Un quart du volume du pot, soit 0,55 litre pour un pot de 17 cm ; moitié moins en hiver.',
    potShare: 0.25,
  },
  medinilla: {
    method: 'Arroser au pied avec une eau non calcaire tiède pour garder le terreau frais en végétation ; en hiver, à 15-17 °C, laisser sécher la surface pour déclencher la floraison.',
    amount: 'Un quart du volume du pot, soit 0,9 litre pour un pot de 20 cm ; environ moitié moins en hiver.',
    potShare: 0.25,
  },
  vriesea: {
    method: 'Maintenir un fond d’eau non calcaire dans la rosette, à renouveler toutes les deux semaines ; arroser le terreau très légèrement.',
    amount: 'Environ 50 ml dans la rosette, plus un dixième du volume du pot sur le terreau, soit 120 ml pour un pot de 14 cm ; moins en hiver.',
    potShare: 0.1,
  },
  'asparagus-plumosus': {
    method: 'Arroser au pied dès que la surface sèche, jusqu’à écoulement, pour garder le terreau frais ; vider la soucoupe.',
    amount: 'Un quart du volume du pot, soit 0,3 litre pour un pot de 14 cm ; un peu moins en hiver.',
    potShare: 0.25,
  },
  'philodendron-imperial-red': {
    method: 'Arroser au pied quand les 3 premiers centimètres sont secs, jusqu’à écoulement par les trous ; vider la soucoupe après 15 minutes.',
    amount: 'Un cinquième du volume du pot, soit 0,45 litre pour un pot de 17 cm ; moitié moins en hiver.',
    potShare: 0.2,
  },
  'philodendron-prince-of-orange': {
    method: 'Quand la surface est sèche, arroser à fond sur tout le substrat avec une eau tempérée, puis laisser égoutter complètement.',
    amount: 'Un cinquième du volume du pot, soit 0,25 litre pour un pot de 14 cm ; moitié moins en hiver.',
    potShare: 0.2,
  },
  'philodendron-squamiferum': {
    method: 'Arroser au pied dès que le premier tiers du pot est sec, avec une eau tempérée ; humidifier aussi le tuteur en mousse s’il en a un.',
    amount: 'Un quart du volume du pot, soit 0,55 litre pour un pot de 17 cm ; un peu moins en hiver.',
    potShare: 0.25,
  },
  'philodendron-verrucosum': {
    method: 'Arroser au pied avec une eau douce à température ambiante pour garder le substrat aéré légèrement humide ; laisser égoutter, jamais d’eau stagnante.',
    amount: 'Un quart du volume du pot, soit 0,3 litre pour un pot de 14 cm ; un peu moins en hiver.',
    potShare: 0.25,
  },
  'anthurium-scherzerianum': {
    method: 'Arroser au pied avec une eau non calcaire tempérée pour garder le substrat juste humide ; vider la soucoupe et brumiser autour plutôt que sur les fleurs.',
    amount: 'Un cinquième du volume du pot, soit 160 ml pour un pot de 12 cm ; un peu moins en hiver.',
    potShare: 0.2,
  },
  'anthurium-warocqueanum': {
    method: 'Arroser à l’eau de pluie tempérée sur tout le substrat très aéré, puis laisser égoutter entièrement ; il doit rester frais, jamais compact ni détrempé.',
    amount: 'Un quart du volume du pot, soit 0,3 litre pour un pot de 14 cm ; réduire légèrement en hiver.',
    potShare: 0.25,
  },
  'alocasia-cuprea': {
    method: 'Arroser au pied quand le premier tiers est sec, avec une eau tempérée, sans mouiller les feuilles ; vider la soucoupe.',
    amount: 'Un cinquième du volume du pot, soit 0,25 litre pour un pot de 14 cm ; deux fois moins en hiver.',
    potShare: 0.2,
  },
  'alocasia-wentii': {
    method: 'Arroser au pied à l’eau tempérée pour garder le substrat frais en été ; en hiver, attendre que la surface sèche et vider la soucoupe.',
    amount: 'Un quart du volume du pot, soit 0,55 litre pour un pot de 17 cm ; moitié moins en hiver.',
    potShare: 0.25,
  },
  'alocasia-lauterbachiana': {
    method: 'Arroser au pied quand le dessus du pot est sec, jusqu’à écoulement ; vider la soucoupe car les rhizomes craignent l’eau stagnante.',
    amount: 'Un cinquième à un quart du volume du pot, soit 0,5 litre pour un pot de 17 cm ; moitié moins en hiver.',
    potShare: 0.22,
  },
  'alocasia-black-velvet': {
    method: 'Laisser sécher la moitié du substrat, puis arroser au pied avec une eau tempérée, sans mouiller les feuilles veloutées ; bien égoutter.',
    amount: 'Environ 15 % du volume du pot, soit 120 ml pour un pot de 12 cm ; moitié moins en hiver.',
    potShare: 0.15,
  },
  'alocasia-cucullata': {
    method: 'En été, arroser régulièrement au pied dès que la surface sèche ; espacer en hiver et vider la soucoupe.',
    amount: 'Un quart du volume du pot, soit 0,55 litre pour un pot de 17 cm ; moitié moins en hiver.',
    potShare: 0.25,
  },
  'hoya-bella': {
    method: 'Arroser à l’eau tempérée dès que la surface sèche, sans détremper car ses racines fines pourrissent vite ; en suspension, laisser égoutter au-dessus d’un évier.',
    amount: 'Un cinquième du volume du pot, soit 160 ml pour un pot de 12 cm ; moitié moins en hiver.',
    potShare: 0.2,
  },
  'hoya-krimson-queen': {
    method: 'Quand le substrat est presque entièrement sec, arroser à fond jusqu’à écoulement puis laisser bien égoutter ; ne pas déplacer la plante pendant la formation des boutons.',
    amount: 'Environ 15 % du volume du pot, soit 0,18 litre pour un pot de 14 cm ; environ moitié moins en hiver.',
    potShare: 0.15,
  },
  'hoya-australis': {
    method: 'Arroser au pied quand le substrat est sec sur les deux tiers, jusqu’à écoulement, puis laisser égoutter ; très peu en hiver.',
    amount: 'Environ 15 % du volume du pot, soit 0,18 litre pour un pot de 14 cm ; un petit verre toutes les deux à trois semaines en hiver.',
    potShare: 0.15,
  },
  'hoya-compacta': {
    method: 'Laisser sécher complètement le substrat, puis arroser par la soucoupe ou en glissant le bec de l’arrosoir sous le feuillage dense, sans mouiller les feuilles enroulées.',
    amount: 'Environ 12 % du volume du pot, soit 100 ml pour un pot de 12 cm ; moitié moins en hiver.',
    potShare: 0.12,
  },
  'peperomia-hope': {
    method: 'Laisser sécher le substrat, puis arroser au pied avec parcimonie sans mouiller les petites feuilles charnues ; bien égoutter.',
    amount: 'Environ un dixième du volume du pot, soit 80 ml pour un pot de 12 cm ; moitié moins en hiver.',
    potShare: 0.1,
  },
  'peperomia-rotundifolia': {
    method: 'Arroser légèrement au pied quand la surface est sèche, de préférence le matin ; ne jamais laisser le pot baigner dans la soucoupe.',
    amount: 'Environ un dixième du volume du pot, soit 80 ml pour un pot de 12 cm ; moitié moins en hiver.',
    potShare: 0.1,
  },
  'peperomia-puteolata': {
    method: 'Laisser sécher le premier tiers du substrat, puis arroser au pied avec une eau tempérée ; vider la soucoupe.',
    amount: 'Environ 15 % du volume du pot, soit 120 ml pour un pot de 12 cm ; moitié moins en hiver.',
    potShare: 0.15,
  },
  'nephrolepis-duffii': {
    method: 'Arroser au pied avec une eau peu calcaire et tempérée dès que la surface sèche ; laisser égoutter sans laisser tremper, et brumiser autour de la plante.',
    amount: 'Un tiers du volume du pot, soit 0,4 litre pour un pot de 14 cm ; un peu moins en hiver.',
    potShare: 0.3,
  },
  'blechnum-gibbum': {
    method: 'Arroser à l’eau douce au pied, en périphérie de la rosette sans mouiller le cœur, pour garder le substrat juste humide ; vider la soucoupe.',
    amount: 'Un peu moins d’un tiers du volume du pot, soit 0,65 litre pour un pot de 17 cm ; un peu moins en hiver.',
    potShare: 0.3,
  },
  'pellaea-rotundifolia': {
    method: 'Laisser sécher la surface, puis arroser au pied avec une eau tempérée jusqu’à écoulement ; cette petite fougère redoute l’excès d’eau plus que la sécheresse.',
    amount: 'Un cinquième du volume du pot, soit 160 ml pour un pot de 12 cm ; moitié moins en hiver.',
    potShare: 0.2,
  },
  'cyrtomium-falcatum': {
    method: 'Arroser au pied pour garder le substrat frais en été, plutôt le matin si elle passe la belle saison dehors ; en hiver, laisser sécher légèrement la surface.',
    amount: 'Un quart du volume du pot, soit 0,55 litre pour un pot de 17 cm ; moitié moins en hiver.',
    potShare: 0.25,
  },
  'microsorum-diversifolium': {
    method: 'Arroser au pied autour des rhizomes quand la surface sèche, avec une eau tempérée ; elle tolère un oubli occasionnel.',
    amount: 'Un quart du volume du pot, soit 0,3 litre pour un pot de 14 cm ; moins en hiver.',
    potShare: 0.25,
  },
  'selaginella-martensii': {
    method: 'Arroser à l’eau douce par la soucoupe ou au pied dès que la surface pâlit ; le substrat doit rester humide en permanence, idéalement sous cloche ou en terrarium.',
    amount: 'Un tiers du volume du pot, soit 0,25 litre pour un pot de 12 cm ; un peu moins en hiver.',
    potShare: 0.3,
  },
  cymbidium: {
    method: 'Arroser abondamment le substrat d’écorce à l’eau douce jusqu’à écoulement, puis laisser égoutter ; dehors en été, arroser le matin.',
    amount: 'Un quart du volume du pot, soit 0,9 litre pour un pot de 20 cm ; juste de quoi garder le substrat frais en hiver.',
    potShare: 0.25,
  },
  'dendrobium-nobile': {
    method: 'Pendant la croissance, tremper le pot dans de l’eau douce tempérée puis le laisser égoutter ; de novembre à l’apparition des boutons, ne donner presque rien.',
    amount: 'Trempage de 10 minutes chaque semaine en croissance ; une légère brumisation tous les 15 jours en hiver.',
    potShare: null,
  },
  oncidium: {
    method: 'Quand l’écorce est presque sèche, arroser abondamment à l’eau douce jusqu’à écoulement ou tremper le pot quelques minutes, puis bien égoutter.',
    amount: 'Un cinquième du volume du pot, soit 0,25 litre pour un pot de 14 cm, ou 5 minutes de trempage ; moins en hiver.',
    potShare: 0.2,
  },
  miltoniopsis: {
    method: 'Arroser à l’eau douce tempérée dès que le dessus du substrat sèche, pour qu’il reste juste humide ; bien égoutter, jamais d’eau dans le cache-pot.',
    amount: 'Un cinquième du volume du pot, soit 160 ml pour un pot de 12 cm ; un peu moins en hiver.',
    potShare: 0.2,
  },
  paphiopedilum: {
    method: 'Arroser à l’eau douce sur le substrat en évitant le cœur des rosettes, pour qu’il reste légèrement frais ; arroser le matin afin que les feuilles sèchent avant la nuit.',
    amount: 'Un cinquième du volume du pot, soit 160 ml pour un pot de 12 cm ; un peu moins en hiver.',
    potShare: 0.2,
  },
  vanda: {
    method: 'Plonger les racines dans une bassine d’eau douce tiède jusqu’à ce qu’elles virent du gris au vert, puis égoutter et raccrocher ; brumiser les jours chauds.',
    amount: 'Trempage de 15 à 20 minutes tous les deux jours en été, deux fois par semaine en hiver.',
    potShare: null,
  },
  cattleya: {
    method: 'Laisser sécher l’écorce, puis arroser abondamment à l’eau douce jusqu’à écoulement ou tremper le pot quelques minutes ; laisser égoutter entièrement.',
    amount: 'Un cinquième du volume du pot, soit 0,25 litre pour un pot de 14 cm, ou 10 minutes de trempage ; espacer en hiver.',
    potShare: 0.2,
  },
  ludisia: {
    method: 'Arroser au pied, sans mouiller les feuilles veloutées, pour garder le substrat légèrement humide ; vider la soucoupe.',
    amount: 'Un cinquième du volume du pot, soit 160 ml pour un pot de 12 cm ; un peu moins en hiver.',
    potShare: 0.2,
  },
  neoregelia: {
    method: 'Garder 1 à 2 cm d’eau douce dans le réservoir central, à vider et renouveler toutes les deux semaines ; humidifier à peine le substrat.',
    amount: 'Environ 50 à 100 ml dans la rosette, plus un dixième du volume du pot, soit 120 ml pour un pot de 14 cm ; réservoir presque vide en hiver.',
    potShare: 0.1,
  },
  'tillandsia-cyanea': {
    method: 'Arroser légèrement le substrat quand il sèche et brumiser les feuilles à l’eau douce le matin ; ne jamais le laisser détrempé.',
    amount: 'Environ un dixième du volume du pot, soit 80 ml pour un pot de 12 cm, plus une brumisation ; moins en hiver.',
    potShare: 0.1,
  },
  cryptanthus: {
    method: 'Arroser au pied quand la surface est sèche, sans chercher à remplir la rosette, qui n’a pas de réservoir ; laisser égoutter.',
    amount: 'Environ 15 % du volume du pot, soit 120 ml pour un pot de 12 cm ; moitié moins en hiver.',
    potShare: 0.15,
  },
  'billbergia-nutans': {
    method: 'Arroser modérément au pied quand le substrat sèche ; en été, on peut aussi laisser un peu d’eau douce au creux des rosettes.',
    amount: 'Environ 15 % du volume du pot, soit 0,18 litre pour un pot de 14 cm ; moitié moins en hiver.',
    potShare: 0.15,
  },
  'begonia-elatior': {
    method: 'Arroser par la soucoupe quand la surface sèche, laisser absorber 15 minutes puis jeter l’excédent, sans mouiller fleurs ni feuilles.',
    amount: 'Un quart du volume du pot, soit 0,3 litre pour un pot de 14 cm ; un peu moins hors floraison.',
    potShare: 0.25,
  },
  'begonia-corallina': {
    method: 'Arroser au pied quand le premier centimètre est sec, sans mouiller les feuilles tachetées ; vider la soucoupe.',
    amount: 'Un cinquième du volume du pot, soit 0,45 litre pour un pot de 17 cm ; moitié moins en hiver.',
    potShare: 0.2,
  },
  'begonia-tiger-paws': {
    method: 'Laisser sécher la surface, puis arroser sur le bord du pot, loin du rhizome, sans mouiller le feuillage ; bien égoutter.',
    amount: 'Environ 15 % du volume du pot, soit 120 ml pour un pot de 12 cm ; moitié moins en hiver.',
    potShare: 0.15,
  },
  'ctenanthe-lubbersiana': {
    method: 'Arroser au pied avec une eau douce ou reposée 24 heures dès que la surface sèche ; le substrat ne doit jamais sécher entièrement.',
    amount: 'Un tiers du volume du pot, soit 0,65 litre pour un pot de 17 cm ; un peu moins en hiver.',
    potShare: 0.3,
  },
  'maranta-kerchoveana': {
    method: 'Arroser au pied avec une eau douce à température ambiante pour garder le substrat légèrement humide ; vider la soucoupe après 15 minutes.',
    amount: 'Un tiers du volume du pot, soit 0,25 litre pour un pot de 12 cm ; un peu moins en hiver.',
    potShare: 0.3,
  },
  'fittonia-rouge': {
    method: 'Arroser au pied à l’eau tempérée dès que la surface sèche, sans attendre que les tiges s’effondrent ; laisser égoutter.',
    amount: 'Un tiers du volume du pot, soit 0,25 litre pour un pot de 12 cm ; un peu moins en hiver.',
    potShare: 0.3,
  },
  'syngonium-wendlandii': {
    method: 'Arroser au pied quand la surface sèche, avec une eau tempérée, pour garder le substrat légèrement humide ; vider la soucoupe.',
    amount: 'Un quart du volume du pot, soit 0,3 litre pour un pot de 14 cm ; moitié moins en hiver.',
    potShare: 0.25,
  },
  'syngonium-mojito': {
    method: 'Arroser lentement sur tout le substrat quand les premiers centimètres sont secs, jusqu’à écoulement ; vider la soucoupe.',
    amount: 'Un quart du volume du pot, soit 0,55 litre pour un pot de 17 cm ; moitié moins en hiver.',
    potShare: 0.25,
  },
  'aglaonema-maria': {
    method: 'Laisser sécher la moitié supérieure du substrat, puis arroser au pied avec une eau tempérée jusqu’à écoulement ; vider la soucoupe.',
    amount: 'Un cinquième du volume du pot, soit 0,45 litre pour un pot de 17 cm ; moitié moins en hiver.',
    potShare: 0.2,
  },
  'aglaonema-red-valentine': {
    method: 'Arroser au pied quand le premier tiers est sec, avec une eau tempérée, jamais froide ; ne pas laisser d’eau stagner.',
    amount: 'Un cinquième du volume du pot, soit 0,25 litre pour un pot de 14 cm ; moitié moins en hiver.',
    potShare: 0.2,
  },
  'dieffenbachia-camille': {
    method: 'Arroser au pied quand le premier tiers est sec, sans mouiller la base des tiges ; vider la soucoupe.',
    amount: 'Un quart du volume du pot, soit 0,55 litre pour un pot de 17 cm ; moitié moins en hiver.',
    potShare: 0.25,
  },
  'dracaena-reflexa': {
    method: 'Laisser sécher la moitié du substrat, puis arroser au pied avec une eau non calcaire jusqu’à écoulement ; vider la soucoupe.',
    amount: 'Un cinquième du volume du pot, soit 0,7 litre pour un pot de 20 cm ; moitié moins en hiver.',
    potShare: 0.2,
  },
  'dracaena-compacta': {
    method: 'Quand le substrat est sec à mi-hauteur, arroser lentement au pied, sans verser dans le cœur des rosettes ; bien égoutter.',
    amount: 'Environ 15 % du volume du pot, soit 0,33 litre pour un pot de 17 cm ; moitié moins en hiver.',
    potShare: 0.15,
  },
  'dracaena-surculosa': {
    method: 'Arroser au pied quand le premier tiers du substrat est sec, avec une eau reposée ; vider la soucoupe.',
    amount: 'Un cinquième du volume du pot, soit 0,25 litre pour un pot de 14 cm ; moitié moins en hiver.',
    potShare: 0.2,
  },
  'ficus-alii': {
    method: 'Arroser au pied avec une eau tempérée quand les premiers centimètres sont secs, jusqu’à écoulement ; garder un rythme régulier, sans excès ni sécheresse.',
    amount: 'Un quart du volume du pot, soit 0,9 litre pour un pot de 20 cm ; moitié moins en hiver.',
    potShare: 0.25,
  },
  'ficus-elastica-abidjan': {
    method: 'Laisser sécher le substrat à mi-hauteur, puis arroser à fond sur toute la surface et vider la soucoupe après 15 minutes.',
    amount: 'Un cinquième du volume du pot, soit 0,7 litre pour un pot de 20 cm ; moitié moins en hiver.',
    potShare: 0.2,
  },
  'ficus-deltoidea': {
    method: 'Arroser au pied dès que la surface sèche, avec une eau tempérée ; ne pas laisser la motte sécher complètement.',
    amount: 'Un quart du volume du pot, soit 0,3 litre pour un pot de 14 cm ; un peu moins en hiver.',
    potShare: 0.25,
  },
  gloxinia: {
    method: 'Arroser par la soucoupe avec de l’eau tiède, laisser absorber 20 minutes puis vider, sans mouiller feuilles et fleurs ; arrêter quand le feuillage jaunit en automne.',
    amount: 'Un quart du volume du pot, soit 0,3 litre pour un pot de 14 cm ; rien pendant le repos du tubercule.',
    potShare: 0.25,
  },
  'azalee-interieur': {
    method: 'Dès que le pot s’allège, plonger la motte dans de l’eau de pluie jusqu’à ce que les bulles cessent, puis égoutter ; ne jamais la laisser sécher.',
    amount: 'Trempage de 10 à 15 minutes, ou un tiers du volume du pot à l’arrosoir, soit 0,4 litre pour un pot de 14 cm.',
    potShare: 0.3,
  },
  'primevere-obconica': {
    method: 'Arroser au pied, sur le bord du pot, sans mouiller le cœur ni les feuilles, irritantes au contact ; le substrat doit rester frais.',
    amount: 'Un quart du volume du pot, soit 200 ml pour un pot de 12 cm ; même rythme pendant toute la floraison.',
    potShare: 0.25,
  },
  aphelandra: {
    method: 'Arroser au pied avec une eau douce tiède dès que la surface sèche, pour que le substrat reste humide en croissance ; vider la soucoupe.',
    amount: 'Un tiers du volume du pot, soit 0,4 litre pour un pot de 14 cm ; moitié moins en hiver.',
    potShare: 0.3,
  },
  pachystachys: {
    method: 'Arroser au pied jusqu’à écoulement pour garder le substrat frais en été ; en hiver, laisser sécher la surface entre deux apports.',
    amount: 'Un quart du volume du pot, soit 0,55 litre pour un pot de 17 cm ; moitié moins en hiver.',
    potShare: 0.25,
  },
  columnea: {
    method: 'Arroser à l’eau douce tiède quand la surface sèche, au-dessus d’un évier pour une suspension, sans mouiller les fleurs ; réduire en hiver.',
    amount: 'Un cinquième du volume du pot, soit 0,25 litre pour un pot de 14 cm ; moitié moins en hiver.',
    potShare: 0.2,
  },
  exacum: {
    method: 'Arroser au pied dès que la surface sèche pour garder le substrat frais, sans mouiller les fleurs ; vider la soucoupe.',
    amount: 'Un quart du volume du pot, soit 200 ml pour un pot de 12 cm ; même rythme jusqu’à la fin de la floraison.',
    potShare: 0.25,
  },
  'clerodendrum-thomsoniae': {
    method: 'Arroser généreusement au pied pendant la croissance, jusqu’à écoulement ; pendant le repos hivernal, garder presque sec.',
    amount: 'Un tiers du volume du pot, soit 0,7 litre pour un pot de 17 cm ; un fond de verre toutes les deux semaines en hiver.',
    potShare: 0.3,
  },
  'pilea-moon-valley': {
    method: 'Arroser au pied avec une eau tempérée dès que la surface sèche, sans mouiller le feuillage gaufré ; vider la soucoupe.',
    amount: 'Un quart du volume du pot, soit 200 ml pour un pot de 12 cm ; un peu moins en hiver.',
    potShare: 0.25,
  },
  'tradescantia-nanouk': {
    method: 'Arroser au pied quand la surface est sèche, sans verser dans le cœur des tiges ; laisser égoutter.',
    amount: 'Un cinquième du volume du pot, soit 0,25 litre pour un pot de 14 cm ; moitié moins en hiver.',
    potShare: 0.2,
  },
  'ardisia-crenata': {
    method: 'Arroser au pied avec une eau tempérée pour garder le substrat légèrement frais ; ne jamais laisser la motte sécher entièrement.',
    amount: 'Un quart du volume du pot, soit 0,55 litre pour un pot de 17 cm ; un peu moins en hiver.',
    potShare: 0.25,
  },
  pilea: {
    method: 'Arroser au pied quand les 2 premiers centimètres sont secs, avec une eau tempérée ; vider la soucoupe.',
    amount: 'Un cinquième du volume du pot, soit 160 ml pour un pot de 12 cm ; moitié moins en hiver.',
    potShare: 0.2,
  },
  peperomia: {
    method: 'Laisser sécher le terreau, puis arroser au pied avec parcimonie, sans mouiller les feuilles épaisses ; bien égoutter.',
    amount: 'Environ 12 % du volume du pot, soit 0,15 litre pour un pot de 14 cm ; moitié moins en hiver.',
    potShare: 0.12,
  },
  philodendron: {
    method: 'Arroser sur toute la surface quand la moitié supérieure du terreau est sèche, jusqu’à écoulement ; vider la soucoupe.',
    amount: 'Un cinquième du volume du pot, soit 0,25 litre pour un pot de 14 cm ; moitié moins en hiver.',
    potShare: 0.2,
  },
  alocasia: {
    method: 'En été, arroser au pied avec une eau tempérée pour garder le terreau légèrement humide ; en hiver, laisser sécher davantage et vider la soucoupe.',
    amount: 'Un quart du volume du pot, soit 0,55 litre pour un pot de 17 cm ; deux fois moins en hiver.',
    potShare: 0.25,
  },
  anthurium: {
    method: 'Arroser au pied quand la surface est sèche, avec une eau non calcaire tempérée ; vider la soucoupe.',
    amount: 'Un cinquième du volume du pot, soit 0,25 litre pour un pot de 14 cm ; un peu moins en hiver.',
    potShare: 0.2,
  },
  dracaena: {
    method: 'Laisser sécher la moitié du pot, puis arroser au pied jusqu’à écoulement ; vider la soucoupe.',
    amount: 'Environ 15 % du volume du pot, soit 0,33 litre pour un pot de 17 cm ; moitié moins en hiver.',
    potShare: 0.15,
  },
  yucca: {
    method: 'Quand le terreau est sec sur plusieurs centimètres, arroser à fond au pied puis laisser égoutter ; jamais d’eau dans la soucoupe ni dans le cœur des rosettes.',
    amount: 'Environ 15 % du volume du pot, soit 0,55 litre pour un pot de 20 cm ; un arrosage léger toutes les trois semaines en hiver.',
    potShare: 0.15,
  },
  areca: {
    method: 'Arroser au pied avec une eau peu calcaire et tempérée pour que la motte reste légèrement humide en été ; vider la soucoupe.',
    amount: 'Un quart du volume du pot, soit 1,75 litre pour un pot de 25 cm ; moitié moins en hiver.',
    potShare: 0.25,
  },
  kentia: {
    method: 'Laisser sécher le dessus du terreau, puis arroser lentement jusqu’à écoulement ; vider la soucoupe après 15 minutes.',
    amount: 'Un cinquième du volume du pot, soit 1,4 litre pour un pot de 25 cm ; moitié moins en hiver.',
    potShare: 0.2,
  },
  strelitzia: {
    method: 'Arroser copieusement au pied quand le dessus est sec, jusqu’à écoulement ; en hiver, espacer et laisser sécher davantage.',
    amount: 'Un quart du volume du pot, soit 1,75 litre pour un pot de 25 cm ; moitié moins en hiver.',
    potShare: 0.25,
  },
  'ficus-benjamina': {
    method: 'Arroser au pied avec une eau tempérée quand la surface est sèche ; éviter l’eau froide et les excès, qui font tomber les feuilles.',
    amount: 'Un cinquième du volume du pot, soit 0,7 litre pour un pot de 20 cm ; moitié moins en hiver.',
    potShare: 0.2,
  },
  'ficus-ginseng': {
    method: 'Arroser au pied dès que la surface sèche, ou tremper le petit pot 10 minutes puis égoutter ; brumiser le feuillage à l’eau douce.',
    amount: 'Un quart du volume du pot, soit 200 ml pour un pot de 12 cm ; un peu moins en hiver.',
    potShare: 0.25,
  },
  fougere: {
    method: 'Arroser au pied avec une eau peu calcaire et tempérée pour garder le terreau frais ; laisser égoutter et ne jamais laisser tremper.',
    amount: 'Un tiers du volume du pot, soit 0,7 litre pour un pot de 17 cm ; un peu moins en hiver.',
    potShare: 0.32,
  },
  aspidistra: {
    method: 'Laisser sécher le dessus du terreau, puis arroser au pied jusqu’à écoulement ; vider la soucoupe car il craint l’excès.',
    amount: 'Un cinquième du volume du pot, soit 0,45 litre pour un pot de 17 cm ; moitié moins en hiver.',
    potShare: 0.2,
  },
  aglaonema: {
    method: 'Arroser au pied quand la surface est sèche, avec une eau à température ambiante ; vider la soucoupe.',
    amount: 'Un cinquième du volume du pot, soit 0,25 litre pour un pot de 14 cm ; moitié moins en hiver.',
    potShare: 0.2,
  },
  dieffenbachia: {
    method: 'Arroser au pied pour garder le terreau légèrement humide en été ; en hiver, attendre que la surface sèche. Toujours vider la soucoupe.',
    amount: 'Un quart du volume du pot, soit 0,9 litre pour un pot de 20 cm ; moitié moins en hiver.',
    potShare: 0.25,
  },
  croton: {
    method: 'Arroser au pied avec une eau tempérée pour garder le terreau frais sans excès, et brumiser le feuillage ; vider la soucoupe.',
    amount: 'Un quart du volume du pot, soit 0,55 litre pour un pot de 17 cm ; un peu moins en hiver.',
    potShare: 0.25,
  },
  hoya: {
    method: 'Laisser sécher le terreau, puis arroser au pied jusqu’à écoulement et laisser bien égoutter.',
    amount: 'Environ 15 % du volume du pot, soit 0,18 litre pour un pot de 14 cm ; moitié moins en hiver.',
    potShare: 0.15,
  },
  tradescantia: {
    method: 'Arroser au pied quand la surface sèche, sans mouiller le feuillage zébré ; en suspension, égoutter au-dessus d’un évier.',
    amount: 'Un cinquième du volume du pot, soit 160 ml pour un pot de 12 cm ; moitié moins en hiver.',
    potShare: 0.2,
  },
  ceropegia: {
    method: 'Laisser sécher complètement le terreau, puis arroser à fond au pied et laisser égoutter ; ne pas arroser sur les tiges retombantes.',
    amount: 'Environ un dixième du volume du pot, soit 80 ml pour un pot de 12 cm ; quelques cuillerées par mois en hiver.',
    potShare: 0.1,
  },
  senecio: {
    method: 'Quand les perles se rident légèrement, arroser à fond au pied sans les mouiller, puis laisser sécher complètement.',
    amount: 'Environ un dixième du volume du pot, soit 80 ml pour un pot de 12 cm ; moitié moins en hiver.',
    potShare: 0.1,
  },
  maranta: {
    method: 'Arroser au pied avec une eau non calcaire tempérée pour garder le terreau frais ; vider la soucoupe.',
    amount: 'Un tiers du volume du pot, soit 0,4 litre pour un pot de 14 cm ; un peu moins en hiver.',
    potShare: 0.3,
  },
  fittonia: {
    method: 'Arroser au pied ou par la soucoupe pendant 15 minutes dès que la surface sèche, avec une eau tempérée ; ne jamais laisser sécher.',
    amount: 'Un tiers du volume du pot, soit 0,25 litre pour un pot de 12 cm ; un peu moins en hiver.',
    potShare: 0.3,
  },
  'begonia-maculata': {
    method: 'Arroser au pied quand la surface sèche, avec une eau tempérée, sans mouiller les feuilles à pois ; vider la soucoupe.',
    amount: 'Un peu plus d’un cinquième du volume du pot, soit 0,5 litre pour un pot de 17 cm ; moins en hiver.',
    potShare: 0.22,
  },
  schefflera: {
    method: 'Laisser sécher le dessus du terreau, puis arroser au pied jusqu’à écoulement ; vider la soucoupe.',
    amount: 'Un cinquième du volume du pot, soit 0,7 litre pour un pot de 20 cm ; moitié moins en hiver.',
    potShare: 0.2,
  },
  pachira: {
    method: 'Laisser sécher le terreau en surface, puis arroser au pied, loin des troncs, jusqu’à écoulement ; ne jamais laisser d’eau stagnante.',
    amount: 'Environ 15 % du volume du pot, soit 0,55 litre pour un pot de 20 cm ; moitié moins en hiver.',
    potShare: 0.15,
  },
  lierre: {
    method: 'Arroser au pied pour garder le terreau frais en pot, et brumiser le feuillage en intérieur chauffé ; vider la soucoupe.',
    amount: 'Un quart du volume du pot, soit 0,3 litre pour un pot de 14 cm ; moitié moins en hiver.',
    potShare: 0.25,
  },
  syngonium: {
    method: 'En été, arroser au pied à l’eau tempérée pour garder le terreau légèrement humide ; en hiver, laisser sécher la surface.',
    amount: 'Un quart du volume du pot, soit 0,3 litre pour un pot de 14 cm ; moitié moins en hiver.',
    potShare: 0.25,
  },
  cyclamen: {
    method: 'Pendant la floraison, arroser par la soucoupe 20 minutes puis jeter l’excédent, sans jamais mouiller le tubercule ; en été, laisser presque sec pendant le repos.',
    amount: 'Un quart du volume du pot, soit 0,3 litre pour un pot de 14 cm, absorbé par le bas ; presque rien en été.',
    potShare: 0.25,
  },
  poinsettia: {
    method: 'Arroser au pied avec une eau tempérée quand la surface sèche, puis vider la soucoupe ou le cache-pot au bout de 10 minutes.',
    amount: 'Un cinquième du volume du pot, soit 0,25 litre pour un pot de 14 cm.',
    potShare: 0.2,
  },
  kalanchoe: {
    method: 'Arroser à fond au pied quand le substrat est sec, sans mouiller les feuilles, puis le laisser sécher complètement.',
    amount: 'Environ 12 % du volume du pot, soit 150 ml pour un pot de 14 cm ; moitié moins en hiver.',
    potShare: 0.12,
  },
  haworthia: {
    method: 'Arroser à fond au pied quand le substrat est complètement sec, puis le laisser sécher entièrement ; ne pas laisser d’eau au cœur des rosettes.',
    amount: 'Environ un dixième du volume du pot, soit 80 ml pour un pot de 12 cm ; un petit apport par mois en hiver.',
    potShare: 0.1,
  },
  beaucarnea: {
    method: 'Arroser rarement, à fond au pied quand le substrat est sec, puis laisser sécher complètement ; vider la soucoupe.',
    amount: 'Environ un dixième du volume du pot, soit 0,35 litre pour un pot de 20 cm ; un arrosage par mois en hiver.',
    potShare: 0.1,
  },
  schlumbergera: {
    method: 'Pendant la floraison, arroser au pied avec une eau tempérée dès que la surface sèche ; à l’automne, réduire pour déclencher les boutons et ne pas déplacer la plante.',
    amount: 'Environ 15 % du volume du pot, soit 120 ml pour un pot de 12 cm ; moins pendant le repos automnal.',
    potShare: 0.15,
  },
  guzmania: {
    method: 'Garder un fond d’eau douce au centre de la rosette, à vider et renouveler toutes les deux semaines ; humidifier à peine le terreau.',
    amount: 'Environ 50 ml dans la rosette, plus un dixième du volume du pot, soit 80 ml pour un pot de 12 cm ; un peu moins en hiver.',
    potShare: 0.1,
  },
  tillandsia: {
    method: 'Plonger la plante entière dans de l’eau de pluie à température ambiante, puis l’égoutter tête en bas pour qu’aucune eau ne stagne au cœur ; brumiser entre deux bains si l’air est sec.',
    amount: 'Trempage de 20 minutes chaque semaine en été, tous les 10 jours en hiver ; aucune terre à arroser.',
    potShare: null,
  },
  dionee: {
    method: 'Arroser exclusivement à l’eau de pluie ou déminéralisée, par la soucoupe, en y laissant un fond d’eau en été ; jamais d’eau du robinet.',
    amount: 'Garder 1 à 2 cm d’eau dans la soucoupe d’avril à septembre ; en hiver, substrat juste humide et soucoupe vide.',
    potShare: null,
  },
  citronnier: {
    method: 'Arroser copieusement au pied quand le dessus du terreau sèche, avec de l’eau non calcaire, jusqu’à écoulement ; dehors l’été, arroser le soir et vider la soucoupe.',
    amount: 'Un quart du volume du pot, soit 3 litres pour un bac de 30 cm en été ; moitié moins pendant l’hivernage.',
    potShare: 0.25,
  },
  monstera: {
    method: 'Arroser lentement sur toute la surface du terreau avec de l’eau à température ambiante, jusqu’à ce qu’elle s’écoule par les trous ; vider la soucoupe après 15 minutes.',
    amount: 'Environ un quart du volume du pot, soit 0,9 litre pour un pot de 20 cm ; moitié moins en hiver.',
    potShare: 0.25,
  },
  pothos: {
    method: 'Quand la moitié supérieure du terreau est sèche, arroser au pied avec une eau tempérée jusqu’à écoulement ; vider la soucoupe.',
    amount: 'Un cinquième du volume du pot, soit 0,25 litre pour un pot de 14 cm ; moitié moins en hiver.',
    potShare: 0.2,
  },
  sansevieria: {
    method: 'Arroser à fond au pied uniquement quand le substrat est complètement sec, sans verser d’eau au cœur des feuilles ; laisser égoutter.',
    amount: 'Environ un dixième du volume du pot, soit 0,2 litre pour un pot de 17 cm ; un arrosage par mois en hiver.',
    potShare: 0.1,
  },
  zamioculcas: {
    method: 'Laisser le terreau sécher entièrement, puis arroser à fond au pied et laisser égoutter ; dans le doute, attendre encore quelques jours.',
    amount: 'Environ 12 % du volume du pot, soit 0,25 litre pour un pot de 17 cm ; une fois par mois en hiver.',
    potShare: 0.12,
  },
  'ficus-lyrata': {
    method: 'Quand les 5 premiers centimètres sont secs, arroser copieusement sur toute la surface jusqu’à écoulement ; vider la soucoupe après 15 minutes.',
    amount: 'Un quart du volume du pot, soit 1,75 litre pour un pot de 25 cm ; moitié moins en hiver.',
    potShare: 0.25,
  },
  'ficus-elastica': {
    method: 'Laisser sécher le terreau en surface, puis arroser au pied avec une eau tempérée jusqu’à écoulement ; vider la soucoupe.',
    amount: 'Un cinquième du volume du pot, soit 0,7 litre pour un pot de 20 cm ; moitié moins en hiver.',
    potShare: 0.2,
  },
  spathiphyllum: {
    method: 'Arroser au pied avec une eau non calcaire à température ambiante pour garder le terreau légèrement humide ; s’il s’affaisse, un bassinage de 15 minutes le relance.',
    amount: 'Un tiers du volume du pot, soit 0,4 litre pour un pot de 14 cm ; un peu moins en hiver.',
    potShare: 0.3,
  },
  calathea: {
    method: 'Verser lentement de l’eau de pluie ou filtrée, tempérée, au pied dès que la surface sèche ; le terreau ne doit ni sécher ni rester détrempé.',
    amount: 'Un tiers du volume du pot, soit 0,4 litre pour un pot de 14 cm ; un peu moins en hiver.',
    potShare: 0.3,
  },
  chlorophytum: {
    method: 'Arroser au pied quand la surface est sèche, jusqu’à écoulement ; les racines charnues tolèrent un oubli mais pas l’eau stagnante.',
    amount: 'Un cinquième du volume du pot, soit 0,25 litre pour un pot de 14 cm ; moitié moins en hiver.',
    potShare: 0.2,
  },
  orchidee: {
    method: 'Quand les racines deviennent argentées, tremper le pot dans de l’eau non calcaire tempérée, puis égoutter entièrement ; ne jamais laisser d’eau au cœur des feuilles.',
    amount: 'Trempage de 10 minutes environ chaque semaine, tous les 10 jours en hiver.',
    potShare: null,
  },
  'aloe-vera': {
    method: 'Arroser à fond au pied quand le substrat est sec, puis laisser égoutter et sécher complètement ; ne pas verser d’eau dans la rosette.',
    amount: 'Environ 15 % du volume du pot, soit 0,33 litre pour un pot de 17 cm ; presque rien en hiver.',
    potShare: 0.15,
  },
  cactus: {
    method: 'Arroser abondamment au pied quand le substrat est totalement sec, puis le laisser sécher complètement ; en hiver, repos sec et frais.',
    amount: 'Environ un dixième du volume du pot, soit 80 ml pour un pot de 12 cm ; rien ou presque de novembre à mars.',
    potShare: 0.1,
  },
  echeveria: {
    method: 'Arroser au pied, sans mouiller la rosette, à fond quand le substrat est sec, puis le laisser sécher complètement.',
    amount: 'Environ un dixième du volume du pot, soit 80 ml pour un pot de 12 cm ; une fois par mois en hiver.',
    potShare: 0.1,
  },
  crassula: {
    method: 'Laisser sécher entièrement la terre, puis arroser à fond au pied et laisser égoutter ; les feuilles ridées signalent la soif.',
    amount: 'Environ 15 % du volume du pot, soit 0,33 litre pour un pot de 17 cm ; très peu en hiver.',
    potShare: 0.15,
  },
  basilic: {
    method: 'Arroser le matin au pied, sans mouiller le feuillage, pour garder le terreau frais ; en pot au soleil, vérifier chaque jour en été.',
    amount: 'Un tiers du volume du pot, soit 0,4 litre pour un pot de 14 cm ; en pleine terre, 1 litre par pied tous les deux jours par temps chaud.',
    potShare: 0.33,
  },
  menthe: {
    method: 'Arroser au pied pour garder la terre constamment fraîche, le soir en été ; en pot, un fond d’eau dans la soucoupe aide en pleine chaleur.',
    amount: 'Un tiers du volume du pot, soit 0,7 litre pour un pot de 17 cm ; en pleine terre, environ 10 litres par m² par semaine sans pluie.',
    potShare: 0.33,
  },
  romarin: {
    method: 'Arroser au pied seulement quand la terre est sèche, sans mouiller le feuillage ; en pleine terre, inutile une fois installé, sauf la première année.',
    amount: 'Environ 15 % du volume du pot, soit 0,55 litre pour un pot de 20 cm ; en pleine terre, 5 litres par pied tous les 10 jours la première année.',
    potShare: 0.15,
  },
  thym: {
    method: 'Arroser rarement, au pied, quand la terre est sèche ; en pleine terre, il se passe d’eau une fois installé.',
    amount: 'Environ 15 % du volume du pot, soit 0,18 litre pour un pot de 14 cm ; en pleine terre, 2 à 3 litres par pied seulement les premiers mois.',
    potShare: 0.15,
  },
  lavande: {
    method: 'Arroser au pied les premiers mois après plantation, puis seulement en cas de forte sécheresse ; en pot, attendre que la terre soit sèche, sans mouiller le feuillage.',
    amount: 'Environ 15 % du volume du pot, soit 1,8 litre pour un pot de 30 cm ; en pleine terre, 5 litres par pied tous les 10 jours la première année, puis rien.',
    potShare: 0.15,
  },
  rosier: {
    method: 'Arroser copieusement au pied, le matin, sans mouiller le feuillage pour limiter les maladies ; pailler pour conserver la fraîcheur.',
    amount: '10 à 15 litres par pied en pleine terre par temps sec, en un seul apport ; en pot, un tiers du volume, soit 4 litres pour un pot de 30 cm.',
    potShare: 0.3,
  },
  hortensia: {
    method: 'Arroser généreusement au pied, de préférence à l’eau de pluie et le soir en été, sans mouiller les fleurs ; pailler pour garder la terre fraîche.',
    amount: '10 à 15 litres par pied en pleine terre deux fois par semaine par temps chaud ; en pot, un tiers du volume, soit 4 litres pour un pot de 30 cm.',
    potShare: 0.33,
  },
  olivier: {
    method: 'En pot, arroser à fond au pied quand la terre est sèche sur quelques centimètres, puis laisser égoutter ; en pleine terre, arroser profondément les deux premières années après plantation.',
    amount: 'Un cinquième du volume du pot, soit 2,4 litres pour un pot de 30 cm ; en pleine terre, 20 à 30 litres tous les 10 à 15 jours l’été des deux premières années, très peu en hiver.',
    potShare: 0.2,
  },
  tomate: {
    method: 'Arroser régulièrement au pied, le matin, sans jamais mouiller le feuillage, et pailler pour limiter l’évaporation ; éviter les à-coups qui font éclater les fruits.',
    amount: '3 à 5 litres par pied deux à trois fois par semaine en pleine terre, soit 10 à 15 L/m² ; en pot, un tiers du volume, soit 4 litres pour un bac de 30 cm.',
    potShare: 0.33,
  },
  fraisier: {
    method: 'Arroser au pied, sans mouiller les fruits ni les feuilles, pour garder la terre fraîche pendant la fructification ; pailler pour garder les fraises propres.',
    amount: 'Environ 1 litre par pied, soit 10 L/m² deux fois par semaine en pleine terre ; en pot, un tiers du volume, soit 0,7 litre pour un pot de 17 cm.',
    potShare: 0.3,
  },
};
