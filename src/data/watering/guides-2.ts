import type { WateringGuide } from '../../types';

/** Guides d’arrosage : plantes tropicales, exotiques, bambous et succulentes. */
export const WATERING_GUIDES_2: Record<string, WateringGuide> = {
  // ——— Bambous ———
  'fargesia-murielae-jumbo': {
    method: 'Arroser lentement au pied de la touffe pour humidifier le sol en profondeur, le soir en été ; pailler pour garder la fraîcheur, surtout les deux premières années.',
    amount: 'En pleine terre, 15 à 20 L par pied chaque semaine en été les deux premières années ; en bac, environ 30 % du volume, soit 18 L pour un bac de 60 L. En hiver, arroser le bac seulement par temps sec et hors gel.',
    potShare: 0.3,
  },
  'fargesia-murielae-simba': {
    method: 'En pot, arroser généreusement toute la motte jusqu’à ce que l’eau ressorte par le fond, le matin ou le soir ; ne jamais laisser la motte sécher, même en hiver hors gel.',
    amount: 'Environ 30 % du volume du pot, soit 3,5 L pour un pot de 30 cm ; en pleine terre, 10 à 15 L par pied et par semaine en été.',
    potShare: 0.3,
  },
  'fargesia-nitida': {
    method: 'Arroser au pied, à l’eau de pluie de préférence, en arrosages profonds le soir pendant les chaleurs ; garder un paillis épais car il craint la chaleur sèche.',
    amount: '15 à 20 L par pied deux fois par semaine en été sec ; en bac, un tiers du volume, soit 4 L pour un pot de 30 cm. En hiver, la pluie suffit en pleine terre.',
    potShare: 0.3,
  },
  'fargesia-rufa': {
    method: 'La première année, arroser régulièrement au pied en imbibant bien la motte ; ensuite, ne donner de l’eau qu’en période sèche, par arrosages copieux et espacés.',
    amount: '10 à 15 L par pied et par semaine la première année ; adulte, 20 L par pied lors des sécheresses. En pot, environ 25 % du volume, soit 3 L pour un pot de 30 cm.',
    potShare: 0.25,
  },
  'fargesia-robusta-campbell': {
    method: 'Arroser au pied, lentement, pour que l’eau pénètre en profondeur ; en été, compléter avec un paillage de feuilles ou de tonte qui limite l’évaporation.',
    amount: '15 L par pied chaque semaine en été, davantage en canicule ; en bac, un tiers du volume, soit 20 L pour un bac de 60 L. Arrosage inutile en hiver en pleine terre.',
    potShare: 0.3,
  },
  'fargesia-scabrida-asian-wonder': {
    method: 'Garder le sol frais en arrosant au pied de la touffe, au tuyau à faible débit ou à l’arrosoir sans pomme ; en pot, arroser dès que la surface sèche.',
    amount: 'En pot, environ 30 % du volume, soit 2 L pour un pot de 25 cm ; en pleine terre, 10 à 15 L par pied et par semaine en été.',
    potShare: 0.3,
  },
  'fargesia-red-panda': {
    method: 'Arroser régulièrement au pied en été, le soir, puis pailler pour conserver la fraîcheur ; en bac, arroser jusqu’à écoulement par les trous.',
    amount: 'En bac, 30 % du volume, soit 3,5 L pour un pot de 30 cm ; en pleine terre, 10 à 15 L par pied chaque semaine en été. En hiver, seulement si le bac est sec et hors gel.',
    potShare: 0.3,
  },
  'fargesia-denudata': {
    method: 'Préférer un arrosage copieux une fois par semaine à de petits apports : laisser couler l’eau lentement au pied pour humidifier toute la zone racinaire.',
    amount: '20 L par pied une fois par semaine en été ; en bac, environ un tiers du volume, soit 4 L pour un pot de 30 cm. Rien en hiver en pleine terre.',
    potShare: 0.3,
  },
  'thamnocalamus-kew-beauty': {
    method: 'Maintenir un sol constamment frais en arrosant au pied à l’eau de pluie, le soir en été, et pailler généreusement : il souffre vite de la sécheresse estivale.',
    amount: '15 à 20 L par pied deux fois par semaine en été ; en bac, un tiers du volume, soit 20 L pour un bac de 60 L. En hiver, laisser faire la pluie.',
    potShare: 0.3,
  },
  'borinda-papyrifera': {
    method: 'Arroser au pied en été pour garder le sol frais, sans détremper ; en hiver, éviter toute eau stagnante autour de la souche.',
    amount: '10 à 15 L par pied et par semaine en été ; en bac, environ 25 % du volume, soit 3 L pour un pot de 30 cm. En hiver, seulement si le bac est sec.',
    potShare: 0.25,
  },
  'chusquea-culeou': {
    method: 'Arroser profondément au pied en période sèche, surtout dans le sud, de préférence le soir ; un paillis maintient la fraîcheur appréciée par ce bambou de montagne.',
    amount: '15 à 20 L par pied et par semaine en été sec ; en bac, 30 % du volume, soit 3,5 L pour un pot de 30 cm. Inutile en hiver en pleine terre.',
    potShare: 0.3,
  },
  'bambusa-alphonse-karr': {
    method: 'Arroser copieusement au pied en été jusqu’à ce que l’eau ressorte du bac ; en hiver, espacer nettement, surtout si le bac est rentré à l’abri.',
    amount: 'Environ 30 % du volume du pot, soit 3,5 L pour un pot de 30 cm ; en pleine terre, 15 L par pied et par semaine en été. En hiver, deux fois moins.',
    potShare: 0.3,
  },
  'bambusa-golden-goddess': {
    method: 'En pot, arroser dès que la surface du substrat sèche, sur toute la motte et à l’eau peu calcaire si possible ; vider la soucoupe après l’arrosage.',
    amount: 'Environ 25 % du volume, soit 1,75 L pour un pot de 25 cm ; réduire de moitié en hiver.',
    potShare: 0.25,
  },
  'bambusa-fernleaf': {
    method: 'Garder le substrat frais en été en arrosant lentement la surface du pot jusqu’à écoulement ; en hiver, laisser sécher le dessus avant d’arroser à nouveau.',
    amount: 'Environ 25 % du volume du pot, soit 1,75 L pour un pot de 25 cm ; en hiver, un arrosage léger tous les 15 jours environ.',
    potShare: 0.25,
  },
  'bambusa-ventricosa': {
    method: 'Laisser sécher légèrement la surface entre deux arrosages puis arroser au pied jusqu’à écoulement ; une légère restriction d’eau favorise les entre-nœuds renflés.',
    amount: 'Environ 20 % du volume du pot, soit 0,7 L pour un pot de 20 cm ; nettement moins en hiver.',
    potShare: 0.2,
  },
  'himalayacalamus-falconeri': {
    method: 'Garder le sol constamment frais en été par des arrosages au pied, le soir, et un bon paillis ; en hiver, éviter un sol détrempé.',
    amount: '15 L par pied deux fois par semaine en été ; en bac, un tiers du volume, soit 4 L pour un pot de 30 cm. En hiver, seulement si le bac est sec.',
    potShare: 0.3,
  },
  'phyllostachys-aurea': {
    method: 'Les deux premières années, arroser copieusement au pied pour faire descendre les racines ; ensuite, n’arroser qu’en sécheresse prolongée, en profondeur.',
    amount: '20 à 30 L par pied chaque semaine les deux premiers étés ; en bac, environ 30 % du volume, soit 18 L pour un bac de 60 L. Rien en hiver en pleine terre.',
    potShare: 0.3,
  },
  'phyllostachys-spectabilis': {
    method: 'Arroser au pied à faible débit pour que l’eau s’infiltre profondément, surtout les premières années ; adulte, ne l’arroser qu’en été sec.',
    amount: '20 L par pied et par semaine les premiers étés, puis seulement en sécheresse ; en bac, 30 % du volume, soit 18 L pour un bac de 60 L. En hiver, la pluie suffit.',
    potShare: 0.3,
  },
  'phyllostachys-aureosulcata-aureocaulis': {
    method: 'La première année, arroser régulièrement au pied en laissant couler l’eau doucement ; ensuite, intervenir seulement en période sèche, plutôt le soir.',
    amount: '15 à 20 L par pied et par semaine la première année ; en bac, environ 30 % du volume, soit 3,5 L pour un pot de 30 cm.',
    potShare: 0.3,
  },
  'phyllostachys-nigra': {
    method: 'En pleine terre, arroser au pied en été pour garder le sol frais ; en bac, arroser dès que la surface sèche, jusqu’à ce que l’eau s’écoule par le fond.',
    amount: 'En bac, environ 30 % du volume, soit 18 L pour un bac de 60 L ; en pleine terre, 15 à 20 L par pied et par semaine en été. En hiver, seulement si le bac est sec et hors gel.',
    potShare: 0.3,
  },
  'phyllostachys-nigra-boryana': {
    method: 'Arroser les jeunes plantations au pied, en profondeur, sans mouiller le feuillage en plein soleil ; adulte, il supporte de courtes sécheresses.',
    amount: '15 à 20 L par pied et par semaine les deux premiers étés ; en bac, un quart du volume, soit 3 L pour un pot de 30 cm.',
    potShare: 0.25,
  },
  'phyllostachys-bissetii': {
    method: 'Arroser au pied les deux premiers étés, en arrosages copieux le soir ; ensuite, la pluie suffit, sauf en canicule où l’on donne un arrosage profond.',
    amount: '20 L par pied et par semaine les deux premiers étés, 20 à 30 L en canicule ; en bac, 25 % du volume, soit 15 L pour un bac de 60 L.',
    potShare: 0.25,
  },
  'phyllostachys-vivax-aureocaulis': {
    method: 'Bambou géant gourmand : arroser copieusement au pied en été, au tuyau à faible débit, pour humidifier le sol sur 30 cm ; pailler.',
    amount: '30 à 40 L par pied et par semaine en été ; en bac, un tiers du volume, soit 20 L pour un bac de 60 L. Rien en hiver en pleine terre.',
    potShare: 0.3,
  },
  'phyllostachys-edulis': {
    method: 'Arroser abondamment au pied les premières années, par arrosages profonds et réguliers en été ; un épais paillis aide à garder le sol frais.',
    amount: '40 à 50 L par pied et par semaine en été les premières années ; en grand bac, un tiers du volume, soit 30 L pour un bac de 100 L. En hiver, la pluie suffit.',
    potShare: 0.3,
  },
  'phyllostachys-viridiglaucescens': {
    method: 'Arroser régulièrement au pied la première année en laissant l’eau s’infiltrer lentement ; ensuite, seulement en période de sécheresse.',
    amount: '15 à 20 L par pied et par semaine la première année, puis 20 L lors des sécheresses ; en bac, 25 % du volume, soit 15 L pour un bac de 60 L.',
    potShare: 0.25,
  },
  'phyllostachys-viridis': {
    method: 'Arrosages copieux au pied l’été les premières années, plutôt le soir, puis paillage ; une fois établi, il se contente de la pluie hors canicule.',
    amount: '20 à 30 L par pied et par semaine en été les premières années ; en bac, 30 % du volume, soit 18 L pour un bac de 60 L.',
    potShare: 0.3,
  },
  'phyllostachys-castillonii': {
    method: 'Garder le sol frais en été et arroser abondamment au pied en sécheresse, en un seul arrosage profond plutôt que plusieurs petits.',
    amount: '20 à 30 L par pied et par semaine en été sec ; en bac, 30 % du volume, soit 3,5 L pour un pot de 30 cm. Rien en hiver en pleine terre.',
    potShare: 0.3,
  },
  'pseudosasa-japonica': {
    method: 'Arroser régulièrement au pied la première année pour installer la touffe ; ensuite, ne l’arroser qu’en sécheresse, en profondeur.',
    amount: '10 à 15 L par pied et par semaine la première année ; en bac, un quart du volume, soit 3 L pour un pot de 30 cm.',
    potShare: 0.25,
  },
  'semiarundinaria-fastuosa': {
    method: 'Arroser au pied en été, surtout les premières années, avec un faible débit pour bien humidifier le sol ; pailler pour limiter l’évaporation.',
    amount: '15 à 20 L par pied et par semaine en été ; en bac, 30 % du volume, soit 18 L pour un bac de 60 L.',
    potShare: 0.3,
  },
  'sasa-palmata': {
    method: 'Il aime les sols frais à humides : en période sèche, arroser largement toute la zone plantée, au pied, de préférence le soir.',
    amount: '10 à 15 L par m² une à deux fois par semaine en été sec ; en bac, 30 % du volume, soit 3,5 L pour un pot de 30 cm.',
    potShare: 0.3,
  },
  'sasa-veitchii': {
    method: 'Arroser la touffe au pied en été sec, d’un arrosage large qui couvre toute la zone colonisée ; à l’ombre, il demande moins d’eau.',
    amount: '10 L par m² chaque semaine en été sec ; en pot, un quart du volume, soit 1,75 L pour un pot de 25 cm.',
    potShare: 0.25,
  },
  'pleioblastus-pygmaeus': {
    method: 'Comme un couvre-sol, arroser en pluie fine toute la surface plantée en été ; en pot, arroser dès que la surface sèche, jusqu’à écoulement.',
    amount: '10 L par m² chaque semaine en été ; en pot, 30 % du volume, soit 0,65 L pour un pot de 17 cm.',
    potShare: 0.3,
  },
  'pleioblastus-variegatus': {
    method: 'Garder le sol frais par des arrosages au pied ; en pot, arroser souvent l’été en mouillant toute la motte, sans laisser d’eau dans la soucoupe.',
    amount: 'En pot, environ 30 % du volume, soit 1,1 L pour un pot de 20 cm ; en pleine terre, 10 L par m² chaque semaine en été.',
    potShare: 0.3,
  },
  'pleioblastus-auricomus': {
    method: 'Arroser régulièrement au pied, en pot surtout, en humidifiant toute la motte ; en plein soleil, arroser de préférence le soir.',
    amount: 'En pot, 30 % du volume, soit 2 L pour un pot de 25 cm ; en pleine terre, 10 à 15 L par pied et par semaine en été.',
    potShare: 0.3,
  },
  'shibataea-kumasaca': {
    method: 'Il craint la sécheresse : arroser au pied dès que le sol commence à sécher, à l’eau de pluie de préférence, et pailler.',
    amount: '10 à 15 L par pied chaque semaine en été ; en pot, un tiers du volume, soit 2,3 L pour un pot de 25 cm.',
    potShare: 0.3,
  },
  'indocalamus-tessellatus': {
    method: 'Garder un sol frais à humide en arrosant largement au pied en été sec ; à l’ombre, un paillis de feuilles suffit souvent entre deux pluies.',
    amount: '15 L par pied ou par m² chaque semaine en été sec ; en bac, 30 % du volume, soit 3,5 L pour un pot de 30 cm.',
    potShare: 0.3,
  },
  'hibanobambusa-shiroshima': {
    method: 'Arroser au pied en été pour garder le sol frais ; en bac, arroser dès que la surface sèche, jusqu’à écoulement par le fond.',
    amount: 'En bac, 30 % du volume, soit 18 L pour un bac de 60 L ; en pleine terre, 15 L par pied et par semaine en été.',
    potShare: 0.3,
  },
  'chimonobambusa-quadrangularis': {
    method: 'Maintenir le sol constamment frais par des arrosages au pied, y compris en automne pendant la pousse des nouvelles cannes ; pailler.',
    amount: '15 L par pied chaque semaine de juin à octobre ; en bac, 30 % du volume, soit 3,5 L pour un pot de 30 cm.',
    potShare: 0.3,
  },
  'dracaena-sanderiana': {
    method: 'Dans l’eau, garder 3 à 5 cm d’eau non calcaire (pluie, filtrée ou reposée) sur les racines et la renouveler chaque semaine ; en terre, arroser quand le dessus sèche et vider la soucoupe.',
    amount: 'En vase, maintenir 3 à 5 cm d’eau en permanence ; en pot, environ 20 % du volume, soit 160 ml pour un pot de 12 cm.',
    potShare: 0.2,
  },
  'pogonatherum-paniceum': {
    method: 'Arroser souvent sur le terreau pour qu’il reste légèrement humide, jamais sec ; en été, on peut laisser un peu d’eau dans la soucoupe.',
    amount: 'Environ 30 % du volume du pot, soit 350 ml pour un pot de 14 cm ; un peu moins en hiver.',
    potShare: 0.3,
  },

  // ——— Bananiers et plantes exotiques ———
  'bananier-nain-cavendish': {
    method: 'Arroser copieusement tout le terreau dès que la surface sèche, à l’eau à température ambiante ; en hiver, laisser sécher la moitié du pot pour éviter la pourriture du bulbe.',
    amount: 'Environ 30 % du volume du pot, soit 3,5 L pour un pot de 30 cm ; en hiver, deux à trois fois moins.',
    potShare: 0.3,
  },
  'bananier-super-nain': {
    method: 'Garder le terreau frais en croissance en arrosant lentement jusqu’à écoulement, puis vider la soucoupe ; espacer nettement en hiver.',
    amount: 'Environ 30 % du volume, soit 1,1 L pour un pot de 20 cm ; en hiver, un arrosage léger quand le dessus est sec.',
    potShare: 0.3,
  },
  'bananier-grande-naine': {
    method: 'Très gourmand en été : arroser abondamment toute la surface du terreau dès qu’elle sèche, jusqu’à ce que l’eau ressorte ; en hiver, juste de quoi éviter un dessèchement complet.',
    amount: 'Un bon tiers du volume du pot, soit 4 L pour un pot de 30 cm ; en hiver, environ 10 % du volume.',
    potShare: 0.35,
  },
  'bananier-rose': {
    method: 'Arroser généreusement au pied en été, le soir, surtout en pot ; en pleine terre, cesser l’arrosage de novembre à mars et pailler la souche.',
    amount: 'En pot, 30 % du volume, soit 3,5 L pour un pot de 30 cm ; en pleine terre, 10 à 15 L par pied deux fois par semaine en été.',
    potShare: 0.3,
  },
  'bananier-de-darjeeling': {
    method: 'Arroser copieusement au pied en été, sans verser d’eau dans le cœur, pour une croissance rapide ; aucun arrosage en hiver en pleine terre, souche protégée par un paillis sec.',
    amount: 'En pleine terre, 15 à 20 L par pied deux fois par semaine en été ; en pot, un tiers du volume, soit 4 L pour un pot de 30 cm.',
    potShare: 0.3,
  },
  'bananier-ornata': {
    method: 'Garder le terreau frais en été en arrosant toute la surface ; en hiver, arroser peu, seulement quand le pot est sec sur plusieurs centimètres.',
    amount: 'Environ 30 % du volume, soit 2,1 L pour un pot de 25 cm ; en hiver, environ un tiers de cette dose.',
    potShare: 0.3,
  },
  'bananier-siam-ruby': {
    method: 'Arroser à l’eau non calcaire tempérée dès que la surface sèche, pour un substrat légèrement humide jamais détrempé ; vider la soucoupe après 15 minutes.',
    amount: 'Environ 25 % du volume du pot, soit 0,9 L pour un pot de 20 cm ; moitié moins en hiver.',
    potShare: 0.25,
  },
  'bananier-zebre': {
    method: 'Arrosages réguliers et abondants en été, en mouillant tout le terreau jusqu’à écoulement ; en hiver, réduire fortement sans laisser la motte sécher totalement.',
    amount: 'Environ 30 % du volume, soit 2,1 L pour un pot de 25 cm ; en hiver, environ 10 % du volume.',
    potShare: 0.3,
  },
  'bananier-dwarf-red': {
    method: 'En saison chaude, arroser abondamment dès que la surface sèche, à l’eau à température ambiante ; en hiver, espacer et vider systématiquement la soucoupe.',
    amount: 'Environ 30 % du volume du pot, soit 3,5 L pour un pot de 30 cm ; moitié moins en hiver.',
    potShare: 0.3,
  },
  'bananier-ice-cream': {
    method: 'Arroser copieusement en été sur toute la motte, jusqu’à écoulement ; en hivernage frais, garder le substrat juste légèrement humide par de petits apports.',
    amount: 'Environ 30 % du volume, soit 3,5 L pour un pot de 30 cm ; en hiver, 0,5 L environ quand le dessus est sec.',
    potShare: 0.3,
  },
  'ensete-maurelii': {
    method: 'De mai à septembre, arroser abondamment au pied sans verser d’eau dans le cœur du stipe ; en hivernage, garder presque au sec pour éviter la pourriture.',
    amount: 'En pot, un tiers du volume, soit 4 L pour un pot de 30 cm ; en pleine terre, 20 L par pied deux fois par semaine en été.',
    potShare: 0.3,
  },
  'ensete-ventricosum': {
    method: 'Arroser au pied, généreusement et souvent en été, sans détremper le cœur ; hiverner avec très peu d’eau, juste pour éviter le dessèchement des racines.',
    amount: 'En pot, environ un tiers du volume, soit 10 L pour un pot de 40 cm ; en pleine terre, 20 à 30 L par pied deux fois par semaine en été.',
    potShare: 0.35,
  },
  'musella-lasiocarpa': {
    method: 'Arroser régulièrement au pied en été ; une fois installé, il supporte un peu de sécheresse. Pas d’arrosage en hiver en pleine terre.',
    amount: '10 à 15 L par pied et par semaine en été ; en pot, 25 % du volume, soit 1,75 L pour un pot de 25 cm.',
    potShare: 0.25,
  },
  'strelitzia-nicolai': {
    method: 'Arroser lentement toute la surface quand les 5 premiers centimètres sont secs, jusqu’à écoulement ; vider la soucoupe, ses racines charnues craignant l’excès.',
    amount: 'Environ 20 % du volume, soit 2,4 L pour un pot de 30 cm ; moitié moins en hiver.',
    potShare: 0.2,
  },
  ravenala: {
    method: 'En été, garder le substrat légèrement frais en arrosant toute la surface à l’eau à température ambiante ; en hiver, laisser sécher le dessus entre deux arrosages.',
    amount: 'Environ 25 % du volume, soit 3 L pour un pot de 30 cm ; moitié moins en hiver.',
    potShare: 0.25,
  },
  heliconia: {
    method: 'Arroser à l’eau tiède non calcaire pour un terreau humide mais jamais détrempé ; vider la soucoupe et réduire en hiver sans laisser sécher complètement.',
    amount: 'Environ 30 % du volume, soit 1,1 L pour un pot de 20 cm ; en hiver, environ la moitié.',
    potShare: 0.3,
  },
  'colocasia-esculenta': {
    method: 'Plante de milieu humide : arroser abondamment pour que le sol reste mouillé en été, soucoupe pleine ou pot posé au bord du bassin ; au sec en hiver.',
    amount: 'En pot, environ 35 % du volume, soit 2,5 L pour un pot de 25 cm, en laissant 2 cm d’eau dans la soucoupe ; en pleine terre, 15 L par pied deux fois par semaine en été.',
    potShare: 0.35,
  },
  'colocasia-black-magic': {
    method: 'Garder le sol toujours humide en été en arrosant au pied ; une soucoupe remplie est acceptée. Aucun arrosage pendant le repos hivernal, tubercule au sec.',
    amount: 'En pot, environ 35 % du volume, soit 1,25 L pour un pot de 20 cm, plus un fond d’eau dans la soucoupe ; en pleine terre, 10 à 15 L par pied deux fois par semaine.',
    potShare: 0.35,
  },
  xanthosoma: {
    method: 'Contrairement au taro, sol frais mais drainé : arroser tout le terreau jusqu’à écoulement puis vider la soucoupe ; presque au sec en hivernage.',
    amount: 'Environ 30 % du volume, soit 2,1 L pour un pot de 25 cm ; en hiver, environ 10 % du volume toutes les trois semaines.',
    potShare: 0.3,
  },
  gingembre: {
    method: 'Arroser le terreau pour le garder frais pendant la croissance, à l’eau tempérée, sans détremper ; quand les tiges jaunissent à l’automne, arrêter presque complètement.',
    amount: 'Environ 25 % du volume, soit 1,75 L pour un pot de 25 cm ; au repos, juste un peu d’eau par mois pour ne pas dessécher le rhizome.',
    potShare: 0.25,
  },
  'hedychium-gardnerianum': {
    method: 'Arroser généreusement au pied en été pour un sol toujours frais, le soir de préférence ; plus aucun arrosage pendant le repos hivernal.',
    amount: 'En pleine terre, 10 à 15 L par touffe deux fois par semaine en été ; en pot, 30 % du volume, soit 3,5 L pour un pot de 30 cm.',
    potShare: 0.3,
  },
  'hedychium-coronarium': {
    method: 'Très gourmand en eau : arroser abondamment au pied, il tolère un sol presque marécageux et une soucoupe pleine en été ; au sec en hiver.',
    amount: 'En pot, environ 35 % du volume, soit 4 L pour un pot de 30 cm ; en pleine terre, 15 à 20 L par touffe deux fois par semaine.',
    potShare: 0.35,
  },
  'alpinia-zerumbet': {
    method: 'Arroser toute la surface du terreau pour le garder frais en été, puis vider la soucoupe ; en hiver, attendre que le dessus sèche.',
    amount: 'Environ 25 % du volume, soit 1,75 L pour un pot de 25 cm ; moitié moins en hiver.',
    potShare: 0.25,
  },
  'alpinia-purpurata': {
    method: 'Arroser à l’eau tiède dès que la surface commence à sécher, pour un terreau toujours légèrement humide ; ne jamais laisser sécher la motte.',
    amount: 'Environ 30 % du volume, soit 2,1 L pour un pot de 25 cm ; à peine moins en hiver.',
    potShare: 0.3,
  },
  costus: {
    method: 'Arroser régulièrement en été toute la surface du pot jusqu’à écoulement ; en hiver, laisser sécher le dessus du terreau avant d’arroser.',
    amount: 'Environ 25 % du volume, soit 0,9 L pour un pot de 20 cm ; moitié moins en hiver.',
    potShare: 0.25,
  },
  'curcuma-alismatifolia': {
    method: 'Pendant la floraison, arroser le terreau à l’eau tempérée pour le garder frais, sans mouiller les bractées ; quand le feuillage jaunit, arrêter jusqu’au printemps.',
    amount: 'Environ 25 % du volume, soit 0,55 L pour un pot de 17 cm ; aucun arrosage pendant le repos.',
    potShare: 0.25,
  },
  canna: {
    method: 'Arroser copieusement au pied en été, surtout en pot, en évitant de mouiller les fleurs ; aucun arrosage pour les rhizomes au repos.',
    amount: 'En pleine terre, 10 à 15 L par touffe une à deux fois par semaine ; en pot, 30 % du volume, soit 3,5 L pour un pot de 30 cm.',
    potShare: 0.3,
  },
  brugmansia: {
    method: 'Énorme consommateur : en pot, arroser chaque jour en été jusqu’à écoulement, le matin, voire deux fois en canicule ; en hivernage, juste assez pour que la motte ne sèche pas.',
    amount: 'Environ 35 % du volume, soit 4 L par jour pour un pot de 30 cm en été ; en hiver, 10 % du volume tous les 15 jours.',
    potShare: 0.35,
  },
  frangipanier: {
    method: 'Arroser lentement quand le terreau est sec sur plusieurs centimètres, puis vider la soucoupe ; quasiment rien en hiver quand il est défeuillé.',
    amount: 'Environ 20 % du volume, soit 0,7 L pour un pot de 20 cm ; défeuillé, un petit verre par mois au plus.',
    potShare: 0.2,
  },
  tibouchina: {
    method: 'Arroser au pied pour garder le terreau frais en permanence en été, à l’eau de pluie de préférence ; en hivernage, laisser sécher la surface.',
    amount: 'Environ 30 % du volume, soit 3,5 L pour un pot de 30 cm ; en hiver, environ un tiers de cette dose.',
    potShare: 0.3,
  },
  lantana: {
    method: 'En pot, arroser au pied dès que la surface sèche, sans mouiller le feuillage ; en pleine terre, arroser les premières semaines puis seulement en forte sécheresse.',
    amount: 'En pot, 25 % du volume, soit 1,75 L pour un pot de 25 cm ; en pleine terre, 5 à 10 L par pied et par semaine la première saison.',
    potShare: 0.25,
  },
  'erythrina-crista-galli': {
    method: 'Arroser régulièrement au pied en été, en profondeur, surtout en pot ; laisser au sec en hiver.',
    amount: 'En pot, 25 % du volume, soit 3 L pour un pot de 30 cm ; en pleine terre, 15 à 20 L par pied et par semaine en été les premières années.',
    potShare: 0.25,
  },
  ricin: {
    method: 'Arroser au pied par temps chaud, à l’arrosoir sans pomme, pour soutenir sa croissance rapide ; pailler en pleine terre.',
    amount: 'En pleine terre, 10 L par pied deux fois par semaine en été ; en pot, 30 % du volume, soit 3,5 L pour un pot de 30 cm.',
    potShare: 0.3,
  },
  papyrus: {
    method: 'Pas d’arrosage classique : les pieds restent dans l’eau, soucoupe toujours pleine ou pot immergé de 10 cm dans le bassin ; compléter le niveau dès qu’il baisse.',
    amount: 'Maintenir en permanence 5 à 10 cm d’eau au-dessus du fond du pot ; en hivernage, une soucoupe pleine suffit.',
    potShare: null,
  },

  // ——— Palmiers et feuillages exotiques ———
  'trachycarpus-fortunei': {
    method: 'Les deux premières années, arroser au pied en profondeur ; installé en pleine terre, ne l’arroser qu’en forte sécheresse, jamais dans le cœur.',
    amount: '20 à 30 L par pied chaque semaine en été les deux premières années ; en bac, 25 % du volume, soit 7 L pour un pot de 40 cm.',
    potShare: 0.25,
  },
  'trachycarpus-wagnerianus': {
    method: 'Arroser au pied en pot et pendant les deux ans suivant la plantation, sans verser d’eau dans le cœur ; peu d’eau ensuite.',
    amount: 'En pot, environ 25 % du volume, soit 3 L pour un pot de 30 cm ; en pleine terre, 20 L par pied chaque semaine les deux premiers étés.',
    potShare: 0.25,
  },
  'chamaerops-humilis': {
    method: 'En pot, arroser quand le terreau est sec, jusqu’à écoulement, puis laisser sécher ; en pleine terre, seulement les étés très secs, par un arrosage profond.',
    amount: 'En pot, environ 20 % du volume, soit 2,4 L pour un pot de 30 cm ; en pleine terre, 20 L par pied en été sec.',
    potShare: 0.2,
  },
  'phoenix-canariensis': {
    method: 'En pot, arroser quand le terreau est sec sur 5 cm ; en pleine terre, arrosages copieux mais espacés au pied en été, dans une cuvette.',
    amount: 'En pot, 20 % du volume, soit 2,4 L pour un pot de 30 cm ; en pleine terre, 30 à 50 L par pied tous les 10 jours en été.',
    potShare: 0.2,
  },
  'washingtonia-robusta': {
    method: 'Arroser régulièrement au pied en été pour une croissance rapide, le soir ; une fois installé, il résiste à la sécheresse.',
    amount: 'En pot, 25 % du volume, soit 3 L pour un pot de 30 cm ; en pleine terre, 20 à 30 L par pied et par semaine les premiers étés.',
    potShare: 0.25,
  },
  'washingtonia-filifera': {
    method: 'Arrosages profonds et espacés au pied en été, en laissant sécher le sol entre deux ; aucun arrosage en hiver en pleine terre.',
    amount: 'En pleine terre, 30 L par pied tous les 7 à 10 jours en été ; en pot, 20 % du volume, soit 2,4 L pour un pot de 30 cm.',
    potShare: 0.2,
  },
  butia: {
    method: 'Arroser au pied l’été les premières années, en profondeur ; ensuite, seulement en forte sécheresse.',
    amount: '20 à 30 L par pied tous les 10 jours en été les premières années ; en bac, 20 % du volume, soit 6 L pour un pot de 40 cm.',
    potShare: 0.2,
  },
  'jubaea-chilensis': {
    method: 'Arroser régulièrement au pied en été les premières années, sur un sol bien drainé ; en hiver, éviter toute humidité stagnante.',
    amount: '20 à 30 L par pied tous les 10 jours en été ; en pot, 20 % du volume, soit 2,4 L pour un pot de 30 cm.',
    potShare: 0.2,
  },
  'brahea-armata': {
    method: 'Très résistant : arroser peu, au pied, en laissant sécher totalement le sol entre deux apports, et jamais en hiver.',
    amount: 'En pot, environ 15 % du volume, soit 1,8 L pour un pot de 30 cm toutes les deux semaines en été ; en pleine terre, 20 L par pied seulement la première année.',
    potShare: 0.15,
  },
  'sabal-minor': {
    method: 'Arroser au pied en été pour garder le sol frais ; il tolère même un sol humide, donc un arrosage généreux ne lui fait pas peur.',
    amount: 'En pot, 25 % du volume, soit 3 L pour un pot de 30 cm ; en pleine terre, 15 à 20 L par pied et par semaine en été.',
    potShare: 0.25,
  },
  'livistona-chinensis': {
    method: 'Arroser toute la surface quand le dessus du terreau est sec, à l’eau à température ambiante ; vider la soucoupe et espacer en hiver.',
    amount: 'Environ 25 % du volume, soit 0,9 L pour un pot de 20 cm ; moitié moins en hiver.',
    potShare: 0.25,
  },
  'chamaedorea-seifrizii': {
    method: 'Laisser sécher les 2 premiers centimètres puis arroser lentement jusqu’à écoulement, de préférence à l’eau peu calcaire ; vider le cache-pot.',
    amount: 'Environ 25 % du volume, soit 1,75 L pour un pot de 25 cm ; un peu moins en hiver.',
    potShare: 0.25,
  },
  'howea-belmoreana': {
    method: 'Arroser quand le terreau est sec sur 3 cm, sur toute la surface, puis vider le cache-pot après 15 minutes.',
    amount: 'Environ 20 % du volume, soit 1,4 L pour un pot de 25 cm ; moitié moins en hiver.',
    potShare: 0.2,
  },
  'dypsis-decaryi': {
    method: 'Laisser sécher le dessus du terreau puis arroser au pied jusqu’à écoulement ; peu d’eau en hiver.',
    amount: 'Environ 20 % du volume, soit 2,4 L pour un pot de 30 cm ; en hiver, environ la moitié.',
    potShare: 0.2,
  },
  'caryota-mitis': {
    method: 'En été, garder le substrat frais sans détrempe en arrosant à l’eau tempérée ; en hiver, laisser sécher le dessus avant d’arroser.',
    amount: 'Environ 25 % du volume, soit 1,75 L pour un pot de 25 cm ; moitié moins en hiver.',
    potShare: 0.25,
  },
  'dicksonia-antarctica': {
    method: 'Arroser le tronc et le cœur, pas seulement le pied : verser l’eau au sommet du stipe pour qu’elle ruisselle le long du tronc, à l’eau de pluie de préférence, chaque jour par temps chaud.',
    amount: '2 à 5 L versés au sommet du tronc chaque jour en été, plus 10 L au pied par semaine ; en bac, 30 % du volume au pied, soit 3,5 L pour un pot de 30 cm.',
    potShare: 0.3,
  },
  tetrapanax: {
    method: 'Arroser au pied en été les premières années, en profondeur ; ensuite, seulement par sécheresse.',
    amount: '15 à 20 L par pied et par semaine en été les premières années ; en bac, 30 % du volume, soit 3,5 L pour un pot de 30 cm.',
    potShare: 0.3,
  },
  'cordyline-australis': {
    method: 'En pot, arroser quand le terreau est sec sur 3 cm, au pied et sans laisser d’eau dans la rosette ; en pleine terre, seulement en sécheresse.',
    amount: 'En pot, 20 % du volume, soit 1,4 L pour un pot de 25 cm ; en pleine terre, 10 à 15 L par pied en période sèche.',
    potShare: 0.2,
  },
  brachychiton: {
    method: 'Peu d’eau : en pot, laisser sécher complètement le terreau puis arroser à fond ; en pleine terre, arroser seulement la première année.',
    amount: 'En pot, 15 % du volume, soit 1 L pour un pot de 25 cm ; en pleine terre, 15 à 20 L par pied tous les 10 jours la première année.',
    potShare: 0.15,
  },

  // ——— Succulentes et cactus ———
  'sedum-morganianum': {
    method: 'Arroser à fond au pied, sans toucher les tiges fragiles, puis laisser sécher complètement le substrat ; en hiver, un arrosage léger par mois.',
    amount: 'Environ 15 % du volume, soit 180 ml pour une suspension de 14 cm ; en hiver, moitié moins.',
    potShare: 0.15,
  },
  'sedum-rubrotinctum': {
    method: 'Arroser à fond au pied puis laisser sécher entièrement ; attendre que les feuilles soient légèrement molles ou ridées.',
    amount: 'Environ 15 % du volume, soit 120 ml pour un pot de 12 cm ; quasiment rien en hiver au frais.',
    potShare: 0.15,
  },
  sempervivum: {
    method: 'En pleine terre, la pluie suffit ; en pot, arroser au pied seulement en sécheresse prolongée, sans mouiller les rosettes, puis laisser sécher complètement.',
    amount: 'En pot, environ 10 % du volume, soit 80 ml pour un pot de 12 cm ; aucun arrosage en pleine terre.',
    potShare: 0.1,
  },
  'agave-americana': {
    method: 'Arroser rarement mais abondamment au pied en été, jamais dans la rosette, puis laisser sécher complètement ; presque jamais en hiver.',
    amount: 'En pot, 15 % du volume, soit 1,8 L pour un pot de 30 cm ; en pleine terre, 10 à 20 L par pied seulement la première année ou en canicule.',
    potShare: 0.15,
  },
  'agave-attenuata': {
    method: 'Arroser à fond quand le substrat est sec en profondeur, en versant au pied et non dans le cœur ; réduire fortement en hiver.',
    amount: 'Environ 15 % du volume, soit 0,55 L pour un pot de 20 cm ; en hiver, un tiers de cette dose.',
    potShare: 0.15,
  },
  gasteria: {
    method: 'Arroser au pied quand le substrat est sec, sans mouiller le cœur de la rosette, puis vider la soucoupe ; réduire en hiver.',
    amount: 'Environ 15 % du volume, soit 120 ml pour un pot de 12 cm ; moitié moins en hiver.',
    potShare: 0.15,
  },
  'aloe-aristata': {
    method: 'Arroser au bord du pot quand le substrat est sec, en évitant le cœur de la rosette ; garder presque au sec en hiver.',
    amount: 'Environ 15 % du volume, soit 120 ml pour un pot de 12 cm ; en hiver, environ 50 ml par mois.',
    potShare: 0.15,
  },
  opuntia: {
    method: 'Arroser abondamment au pied puis laisser sécher totalement ; en hiver au frais, laisser presque au sec.',
    amount: 'En pot, environ 15 % du volume, soit 1,8 L pour un pot de 30 cm ; en pleine terre, aucun arrosage une fois installé, sauf forte sécheresse.',
    potShare: 0.15,
  },
  'opuntia-microdasys': {
    method: 'Arroser au pied seulement quand le substrat est sec en profondeur, sans approcher les glochides ; hiverner au sec et au frais.',
    amount: 'Environ 12 % du volume, soit 140 ml pour un pot de 14 cm ; rien en hiver.',
    potShare: 0.12,
  },
  mammillaria: {
    method: 'Arroser au pied, par le bord du pot ou par la soucoupe, sans mouiller la plante ; laisser sécher complètement et cesser quasiment en hiver.',
    amount: 'Environ 10 % du volume, soit 80 ml pour un pot de 12 cm ; aucun arrosage de novembre à février.',
    potShare: 0.1,
  },
  'echinocactus-grusonii': {
    method: 'Par temps chaud, arroser abondamment au pied quand le substrat est sec, sans laisser d’eau entre les côtes ; au sec de novembre à mars en pièce fraîche.',
    amount: 'Environ 15 % du volume, soit 0,55 L pour un pot de 20 cm ; rien en hiver au frais.',
    potShare: 0.15,
  },
  ferocactus: {
    method: 'Arroser copieusement au pied quand le substrat est entièrement sec, par temps chaud, puis laisser sécher ; repos hivernal au sec.',
    amount: 'Environ 15 % du volume, soit 330 ml pour un pot de 17 cm ; aucun arrosage en hiver.',
    potShare: 0.15,
  },
  astrophytum: {
    method: 'Arroser avec parcimonie, au pied ou par la soucoupe (15 minutes puis vider), uniquement quand le substrat est totalement sec ; aucun arrosage en hiver.',
    amount: 'Environ 10 % du volume, soit 80 ml pour un pot de 12 cm ; rien de novembre à mars.',
    potShare: 0.1,
  },
  gymnocalycium: {
    method: 'Arroser au pied quand le substrat est sec en profondeur, puis vider la soucoupe ; les sujets greffés acceptent un peu plus d’eau.',
    amount: 'Environ 12 % du volume, soit 100 ml pour un pot de 12 cm ; presque rien en hiver.',
    potShare: 0.12,
  },
  rebutia: {
    method: 'Arroser régulièrement au pied en été quand le substrat est sec ; repos hivernal au sec et au frais pour déclencher la floraison.',
    amount: 'Environ 15 % du volume, soit 120 ml pour un pot de 12 cm ; aucun arrosage en hiver.',
    potShare: 0.15,
  },
  cereus: {
    method: 'Arroser abondamment au pied en été quand le substrat est sec, jusqu’à écoulement, puis vider la soucoupe ; réduire fortement en hiver.',
    amount: 'Environ 15 % du volume, soit 1 L pour un pot de 25 cm ; en hiver, un léger arrosage par mois.',
    potShare: 0.15,
  },
  'euphorbia-trigona': {
    method: 'Arroser au pied quand le substrat est sec, jusqu’à écoulement ; contrairement aux cactus, donner un peu d’eau même en hiver.',
    amount: 'Environ 15 % du volume, soit 0,55 L pour un pot de 20 cm ; en hiver, un tiers de cette dose toutes les 4 semaines environ.',
    potShare: 0.15,
  },
  'euphorbia-milii': {
    method: 'Arroser au pied quand le substrat est sec sur plusieurs centimètres, sans mouiller les fleurs ; garder un peu plus au sec en hiver.',
    amount: 'Environ 20 % du volume, soit 240 ml pour un pot de 14 cm ; moitié moins en hiver.',
    potShare: 0.2,
  },
  'euphorbia-tirucalli': {
    method: 'Arroser à fond au pied quand le substrat est totalement sec, puis laisser sécher ; très tolérante aux oublis.',
    amount: 'Environ 12 % du volume, soit 0,45 L pour un pot de 20 cm ; presque rien en hiver.',
    potShare: 0.12,
  },
  lithops: {
    method: 'Arroser au pied par petites quantités, au printemps et en automne seulement quand les feuilles se rident ; presque rien en plein été et jamais en hiver pendant le renouvellement des feuilles.',
    amount: 'Environ 10 % du volume, soit 40 ml pour un pot de 10 cm ; aucun arrosage de novembre à mars.',
    potShare: 0.1,
  },
  pachyphytum: {
    method: 'Arroser au pied sans mouiller les feuilles poudrées, puis laisser sécher entièrement entre deux apports.',
    amount: 'Environ 15 % du volume, soit 120 ml pour un pot de 12 cm ; très peu en hiver.',
    potShare: 0.15,
  },
  graptopetalum: {
    method: 'Arroser à fond quand le substrat est sec en profondeur, puis laisser sécher complètement ; il supporte très bien la sécheresse.',
    amount: 'Environ 15 % du volume, soit 180 ml pour un pot de 14 cm ; presque rien en hiver.',
    potShare: 0.15,
  },
  'kalanchoe-tomentosa': {
    method: 'Arroser au pied, sans mouiller les feuilles duveteuses qui tachent et pourrissent facilement ; laisser sécher le substrat entre deux arrosages.',
    amount: 'Environ 15 % du volume, soit 120 ml pour un pot de 12 cm ; moitié moins en hiver.',
    potShare: 0.15,
  },
  'kalanchoe-daigremontiana': {
    method: 'Arroser au pied quand le substrat est sec en surface, puis vider la soucoupe ; il supporte les oublis sans problème.',
    amount: 'Environ 20 % du volume, soit 240 ml pour un pot de 14 cm ; moitié moins en hiver.',
    potShare: 0.2,
  },
  'kalanchoe-thyrsiflora': {
    method: 'Arroser au pied quand le substrat est sec en profondeur, sans jamais laisser d’eau stagner entre les feuilles.',
    amount: 'Environ 15 % du volume, soit 330 ml pour un pot de 17 cm ; très peu en hiver.',
    potShare: 0.15,
  },
  'crassula-perforata': {
    method: 'Arroser à fond au pied puis laisser sécher entièrement ; attendre que les feuilles se rident légèrement.',
    amount: 'Environ 15 % du volume, soit 120 ml pour un pot de 12 cm ; un arrosage léger par mois en hiver.',
    potShare: 0.15,
  },
  'portulacaria-afra': {
    method: 'Arroser au pied quand le substrat est sec sur quelques centimètres, jusqu’à écoulement ; il tolère des arrosages plus réguliers qu’un crassula.',
    amount: 'Environ 20 % du volume, soit 0,45 L pour un pot de 17 cm ; moitié moins en hiver.',
    potShare: 0.2,
  },
  'adenium-obesum': {
    method: 'En croissance, arroser généreusement au pied quand le substrat est sec, sans mouiller le caudex ; presque au sec en hiver pendant la dormance.',
    amount: 'Environ 20 % du volume, soit 0,45 L pour un pot de 17 cm ; en dormance, quelques gorgées par mois.',
    potShare: 0.2,
  },
  pachypodium: {
    method: 'Arroser régulièrement au pied en été quand le substrat est sec, jusqu’à écoulement ; quasiment au sec en hiver une fois les feuilles tombées.',
    amount: 'Environ 20 % du volume, soit 0,7 L pour un pot de 20 cm ; défeuillé, presque rien.',
    potShare: 0.2,
  },
  rhipsalis: {
    method: 'Cactus épiphyte : arroser à l’eau peu calcaire quand la surface est sèche, en gardant le substrat légèrement frais ; vider la soucoupe.',
    amount: 'Environ 20 % du volume, soit 240 ml pour une suspension de 14 cm ; moitié moins en hiver.',
    potShare: 0.2,
  },
  epiphyllum: {
    method: 'Arroser à l’eau tempérée peu calcaire pour garder le substrat légèrement frais en croissance ; réduire en hiver sans laisser sécher complètement.',
    amount: 'Environ 20 % du volume, soit 0,45 L pour un pot de 17 cm ; moitié moins en hiver.',
    potShare: 0.2,
  },
  hatiora: {
    method: 'Garder le substrat légèrement humide sans excès en arrosant à l’eau douce, puis vider la soucoupe ; réduire en hiver pour induire la floraison.',
    amount: 'Environ 20 % du volume, soit 240 ml pour un pot de 14 cm ; en hiver, la moitié.',
    potShare: 0.2,
  },
  'aeonium-arboreum': {
    method: 'Rythme inversé : arroser au pied surtout d’octobre à mai, en laissant sécher entre deux, et presque rien en plein été pendant la dormance.',
    amount: 'Environ 15 % du volume, soit 330 ml pour un pot de 17 cm en saison de croissance ; en été, quelques gorgées par mois.',
    potShare: 0.15,
  },
  cotyledon: {
    method: 'Arroser au pied quand le substrat est totalement sec, sans éclabousser les feuilles poudrées.',
    amount: 'Environ 15 % du volume, soit 180 ml pour un pot de 14 cm ; très peu en hiver.',
    potShare: 0.15,
  },
  delosperma: {
    method: 'En pleine terre, la pluie suffit une fois installé, sauf sécheresse prolongée ; en pot, arroser au pied quand le substrat est sec.',
    amount: 'En pot, 15 % du volume, soit 180 ml pour un pot de 14 cm ; en pleine terre, 5 L par m² seulement la première saison ou en canicule.',
    potShare: 0.15,
  },
  carpobrotus: {
    method: 'Quasiment aucun arrosage en pleine terre ; en pot, arroser au pied quand le substrat est sec, puis laisser sécher.',
    amount: 'En pot, environ 12 % du volume, soit 260 ml pour un pot de 17 cm ; rien en pleine terre une fois installé.',
    potShare: 0.12,
  },
  stapelia: {
    method: 'Arroser au pied quand le substrat est sec en été ; très peu en hiver, attendre que les tiges se rident.',
    amount: 'Environ 15 % du volume, soit 180 ml pour un pot de 14 cm ; en hiver, un léger arrosage par mois.',
    potShare: 0.15,
  },
  'hoya-kerrii': {
    method: 'Laisser sécher entièrement le substrat puis arroser à l’eau tempérée jusqu’à écoulement ; vider la soucoupe.',
    amount: 'Environ 15 % du volume, soit 120 ml pour un pot de 12 cm ; moitié moins en hiver.',
    potShare: 0.15,
  },
  'curio-radicans': {
    method: 'Arroser au pied quand le substrat est sec en profondeur, en écartant les tiges retombantes ; attendre que les feuilles se rident légèrement.',
    amount: 'Environ 15 % du volume, soit 180 ml pour une suspension de 14 cm ; moitié moins en hiver.',
    potShare: 0.15,
  },
  'dracaena-cylindrica': {
    method: 'Arroser rarement, au pied et jamais au cœur des tiges, uniquement quand le substrat est sec en profondeur ; vider la soucoupe.',
    amount: 'Environ 15 % du volume, soit 330 ml pour un pot de 17 cm ; en hiver, un arrosage léger toutes les 5 à 6 semaines.',
    potShare: 0.15,
  },

  // ——— Tropicales d’intérieur ———
  'calathea-white-fusion': {
    method: 'Arroser à l’eau douce à température ambiante (pluie, filtrée ou reposée) dès que la surface sèche, pour un terreau frais en permanence ; vider la soucoupe après 15 minutes.',
    amount: 'Environ 30 % du volume, soit 0,65 L pour un pot de 17 cm ; un peu moins en hiver.',
    potShare: 0.3,
  },
  'calathea-medallion': {
    method: 'Dès que la surface sèche, arroser lentement tout le terreau à l’eau douce ; ne jamais laisser la motte sécher ni l’eau stagner dans la soucoupe.',
    amount: 'Environ 30 % du volume, soit 1,1 L pour un pot de 20 cm ; légèrement moins en hiver.',
    potShare: 0.3,
  },
  'calathea-makoyana': {
    method: 'Maintenir le terreau juste humide avec une eau non calcaire à température ambiante, versée sur toute la surface du pot ; espacer légèrement en hiver.',
    amount: 'Environ 25 % du volume, soit 0,55 L pour un pot de 17 cm ; un peu moins en hiver.',
    potShare: 0.25,
  },
  'calathea-zebrina': {
    method: 'Arroser dès que le dessus du terreau sèche, à l’eau douce et tempérée, jusqu’à ce qu’elle s’écoule ; réduire légèrement en hiver.',
    amount: 'Environ 30 % du volume, soit 1,1 L pour un pot de 20 cm ; un quart en moins en hiver.',
    potShare: 0.3,
  },
  'calathea-dottie': {
    method: 'Garder le substrat frais mais jamais détrempé, avec une eau douce à température ambiante versée sur le terreau ; vider le cache-pot.',
    amount: 'Environ 25 % du volume, soit 0,55 L pour un pot de 17 cm ; légèrement moins en hiver.',
    potShare: 0.25,
  },
  'calathea-warscewiczii': {
    method: 'Arroser à l’eau de pluie ou filtrée directement sur le terreau, sans mouiller le feuillage velouté qui tache ; garder le substrat toujours légèrement humide.',
    amount: 'Environ 30 % du volume, soit 1,1 L pour un pot de 20 cm ; un peu moins en hiver.',
    potShare: 0.3,
  },
  'calathea-network': {
    method: 'Arroser quand le premier centimètre de terreau est sec, à l’eau douce, en mouillant toute la surface.',
    amount: 'Environ 25 % du volume, soit 0,3 L pour un pot de 14 cm ; un peu moins en hiver.',
    potShare: 0.25,
  },
  'calathea-ornata': {
    method: 'Arroser à l’eau douce et tempérée (pluie ou filtrée), car elle est très sensible au calcaire et au chlore, pour garder le terreau frais ; vider la soucoupe.',
    amount: 'Environ 30 % du volume, soit 0,65 L pour un pot de 17 cm ; un peu moins en hiver.',
    potShare: 0.3,
  },
  'calathea-crocata': {
    method: 'Garder le substrat constamment frais avec une eau douce à température ambiante, versée au pied sans mouiller les fleurs orangées.',
    amount: 'Environ 25 % du volume, soit 0,3 L pour un pot de 14 cm ; légèrement moins en hiver.',
    potShare: 0.25,
  },
  'calathea-rufibarba': {
    method: 'Arroser à l’eau douce sur le terreau pour le garder légèrement humide ; éviter de mouiller ou de brumiser les feuilles duveteuses.',
    amount: 'Environ 30 % du volume, soit 0,65 L pour un pot de 17 cm ; un peu moins en hiver.',
    potShare: 0.3,
  },
  'calathea-freddie': {
    method: 'Arroser dès que la surface sèche avec une eau douce, jusqu’à écoulement, puis vider la soucoupe après 15 minutes.',
    amount: 'Environ 25 % du volume, soit 0,55 L pour un pot de 17 cm ; un peu moins en hiver.',
    potShare: 0.25,
  },
  'calathea-white-star': {
    method: 'Arroser à l’eau douce et tempérée dès que le dessus du terreau commence à sécher : la motte ne doit jamais sécher.',
    amount: 'Environ 30 % du volume, soit 0,65 L pour un pot de 17 cm ; à peine moins en hiver.',
    potShare: 0.3,
  },
  'calathea-beauty-star': {
    method: 'Arroser dès que la surface sèche avec une eau douce, en versant lentement sur tout le terreau ; ne jamais laisser d’eau stagner dans le cache-pot.',
    amount: 'Environ 25 % du volume, soit 0,9 L pour un pot de 20 cm ; un peu moins en hiver.',
    potShare: 0.25,
  },
  'maranta-lemon-lime': {
    method: 'Laisser sécher la surface puis arroser à l’eau douce pour garder le terreau légèrement humide ; vider la soucoupe.',
    amount: 'Environ 25 % du volume, soit 0,3 L pour un pot de 14 cm ; un peu moins en hiver.',
    potShare: 0.25,
  },
  'maranta-fascinator': {
    method: 'Arroser à l’eau douce et tempérée pour un terreau frais mais jamais détrempé, en évitant de mouiller le feuillage.',
    amount: 'Environ 25 % du volume, soit 0,3 L pour un pot de 14 cm ou 200 ml pour une suspension de 12 cm ; un peu moins en hiver.',
    potShare: 0.25,
  },
  'stromanthe-magic-star': {
    method: 'Arroser quand les 2 premiers centimètres sont secs, à l’eau douce, jusqu’à écoulement ; vider la soucoupe.',
    amount: 'Environ 25 % du volume, soit 0,55 L pour un pot de 17 cm ; un peu moins en hiver.',
    potShare: 0.25,
  },
  'alocasia-polly': {
    method: 'Arroser quand les 3 premiers centimètres sont secs, à l’eau tempérée, sur toute la surface ; vider la soucoupe et réduire nettement en hiver.',
    amount: 'Environ 20 % du volume, soit 240 ml pour un pot de 14 cm ; moitié moins en hiver.',
    potShare: 0.2,
  },
  'alocasia-dragon-scale': {
    method: 'Laisser sécher la moitié supérieure du substrat puis arroser lentement jusqu’à écoulement ; jamais d’eau dans le cache-pot, elle craint énormément l’excès.',
    amount: 'Environ 20 % du volume, soit 240 ml pour un pot de 14 cm ; espacer en hiver.',
    potShare: 0.2,
  },
  'alocasia-frydek': {
    method: 'Arroser quand les 3 premiers centimètres sont secs, sur tout le substrat ; jamais d’eau dans la soucoupe.',
    amount: 'Environ 20 % du volume, soit 0,45 L pour un pot de 17 cm ; moitié moins en hiver.',
    potShare: 0.2,
  },
  'alocasia-silver-dragon': {
    method: 'Attendre que la moitié du substrat soit sèche, puis arroser à l’eau tempérée et laisser bien égoutter ; elle est très sensible à la pourriture.',
    amount: 'Environ 20 % du volume, soit 240 ml pour un pot de 14 cm ; moins encore en hiver.',
    potShare: 0.2,
  },
  'alocasia-macrorrhizos': {
    method: 'Arrosages généreux en été dès que la surface sèche, jusqu’à écoulement ; réduire fortement en hiver.',
    amount: 'Environ 25 % du volume, soit 3 L pour un pot de 30 cm ; en hiver, environ un tiers de cette dose.',
    potShare: 0.25,
  },
  'philodendron-gloriosum': {
    method: 'Arroser autour du rhizome, sans le mouiller ni l’enterrer, quand le tiers supérieur du substrat est sec ; vider la soucoupe.',
    amount: 'Environ 20 % du volume, soit 0,45 L pour une coupe large de 17 cm ; moitié moins en hiver.',
    potShare: 0.2,
  },
  'philodendron-melanochrysum': {
    method: 'Laisser sécher les premiers centimètres puis arroser à l’eau douce ; humidifier aussi le tuteur en mousse pour les racines aériennes.',
    amount: 'Environ 25 % du volume, soit 0,9 L pour un pot de 20 cm ; un peu moins en hiver.',
    potShare: 0.25,
  },
  'philodendron-micans': {
    method: 'Arroser quand les 2 à 3 premiers centimètres sont secs, sur toute la surface, en écartant les tiges retombantes.',
    amount: 'Environ 25 % du volume, soit 0,3 L pour un pot de 14 cm ; moitié moins en hiver.',
    potShare: 0.25,
  },
  'philodendron-xanadu': {
    method: 'Arroser quand la moitié supérieure du substrat est sèche, lentement et jusqu’à écoulement ; vider la soucoupe.',
    amount: 'Environ 25 % du volume, soit 1,75 L pour un pot de 25 cm ; moitié moins en hiver.',
    potShare: 0.25,
  },
  'anthurium-clarinervium': {
    method: 'Laisser sécher les premiers centimètres puis arroser à l’eau douce sur un substrat aéré ; ne jamais laisser l’eau stagner autour des racines.',
    amount: 'Environ 20 % du volume, soit 240 ml pour un pot de 14 cm ; moitié moins en hiver.',
    potShare: 0.2,
  },
  'anthurium-crystallinum': {
    method: 'Arroser à l’eau douce de préférence pour garder le substrat légèrement frais, jamais détrempé ; vider le cache-pot.',
    amount: 'Environ 20 % du volume, soit 0,45 L pour un pot de 17 cm ; un peu moins en hiver.',
    potShare: 0.2,
  },
  'monstera-thai-constellation': {
    method: 'Arroser quand la moitié supérieure du substrat est sèche, avec une eau à température ambiante, jusqu’à écoulement ; vider la soucoupe.',
    amount: 'Environ 25 % du volume, soit 0,9 L pour un pot de 20 cm ; moitié moins en hiver.',
    potShare: 0.25,
  },
  'monstera-albo-variegata': {
    method: 'Laisser sécher la moitié du substrat, puis arroser lentement tout le terreau et bien laisser égoutter : les zones blanches pourrissent vite en milieu détrempé.',
    amount: 'Environ 20 % du volume, soit 0,7 L pour un pot de 20 cm ; moitié moins en hiver.',
    potShare: 0.2,
  },
  'pothos-njoy': {
    method: 'Arroser quand la moitié supérieure du terreau est sèche, sur toute la surface jusqu’à écoulement.',
    amount: 'Environ 20 % du volume, soit 160 ml pour un pot de 12 cm ; moitié moins en hiver.',
    potShare: 0.2,
  },
  'pothos-neon': {
    method: 'Arroser quand les 3 premiers centimètres sont secs, avec une eau du robinet reposée, puis vider la soucoupe.',
    amount: 'Environ 20 % du volume, soit 240 ml pour un pot de 14 cm ; moitié moins en hiver.',
    potShare: 0.2,
  },
  'pothos-manjula': {
    method: 'Laisser sécher la moitié supérieure du terreau, puis arroser lentement ; les zones blanches craignent un terreau détrempé.',
    amount: 'Environ 20 % du volume, soit 240 ml pour un pot de 14 cm ; moitié moins en hiver.',
    potShare: 0.2,
  },
  'pothos-cebu-blue': {
    method: 'Arroser quand la moitié du terreau est sèche, sur toute la surface, puis laisser égoutter.',
    amount: 'Environ 20 % du volume, soit 0,45 L pour une suspension de 17 cm ; moitié moins en hiver.',
    potShare: 0.2,
  },
  'scindapsus-moonlight': {
    method: 'Laisser sécher presque entièrement le substrat, puis arroser à fond jusqu’à écoulement ; les feuilles qui s’incurvent signalent la soif.',
    amount: 'Environ 20 % du volume, soit 240 ml pour un pot de 14 cm ; moitié moins en hiver.',
    potShare: 0.2,
  },
  'hoya-pubicalyx': {
    method: 'Laisser sécher le substrat presque entièrement puis arroser à l’eau tempérée jusqu’à écoulement ; vider la soucoupe.',
    amount: 'Environ 15 % du volume, soit 180 ml pour un pot de 14 cm ; moitié moins en hiver.',
    potShare: 0.15,
  },
  'hoya-linearis': {
    method: 'Plus gourmand que les autres hoyas : arroser à l’eau douce quand la surface sèche, sans détremper ; en suspension, laisser bien égoutter.',
    amount: 'Environ 20 % du volume, soit 160 ml pour une suspension de 12 cm ; un peu moins en hiver.',
    potShare: 0.2,
  },
  'hoya-obovata': {
    method: 'Laisser sécher complètement le substrat puis arroser à fond ; les feuilles charnues font réserve.',
    amount: 'Environ 15 % du volume, soit 180 ml pour un pot de 14 cm ; moitié moins en hiver.',
    potShare: 0.15,
  },
  'peperomia-prostrata': {
    method: 'Arroser au bord du pot quand le substrat est presque sec, sans détremper ni mouiller les tiges fines qui pourrissent vite.',
    amount: 'Environ 15 % du volume, soit 120 ml pour une suspension de 12 cm ; moitié moins en hiver.',
    potShare: 0.15,
  },
  'peperomia-polybotrya': {
    method: 'Laisser sécher le substrat aux deux tiers, puis arroser au pied jusqu’à écoulement ; vider la soucoupe.',
    amount: 'Environ 15 % du volume, soit 180 ml pour un pot de 14 cm ; moitié moins en hiver.',
    potShare: 0.15,
  },
  'peperomia-ginny': {
    method: 'Laisser sécher presque complètement le substrat puis arroser sur le terreau, pas sur les feuilles.',
    amount: 'Environ 15 % du volume, soit 120 ml pour un pot de 12 cm ; moitié moins en hiver.',
    potShare: 0.15,
  },
  'begonia-masoniana': {
    method: 'Arroser au pied quand la surface est sèche, sans jamais mouiller les feuilles gaufrées ; l’arrosage par la soucoupe (15 minutes puis vider) convient bien.',
    amount: 'Environ 20 % du volume, soit 240 ml pour un pot de 14 cm ; moitié moins en hiver.',
    potShare: 0.2,
  },
  'begonia-listada': {
    method: 'Garder le terreau légèrement frais par des arrosages au pied à l’eau tempérée, sans mouiller le feuillage.',
    amount: 'Environ 20 % du volume, soit 240 ml pour un pot de 14 cm ; un peu moins en hiver.',
    potShare: 0.2,
  },
  'ficus-pumila': {
    method: 'Arroser régulièrement pour garder le terreau légèrement humide ; il supporte mal la sécheresse, ne jamais laisser la motte sécher.',
    amount: 'Environ 30 % du volume, soit 350 ml pour un pot de 14 cm ; un peu moins en hiver.',
    potShare: 0.3,
  },
  'ficus-triangularis': {
    method: 'Arroser quand les 3 premiers centimètres sont secs, à l’eau à température ambiante, jusqu’à écoulement.',
    amount: 'Environ 25 % du volume, soit 0,55 L pour un pot de 17 cm ; moitié moins en hiver.',
    potShare: 0.25,
  },
  'ficus-umbellata': {
    method: 'Arroser lentement dès que les premiers centimètres sont secs, car il n’aime pas la sécheresse prolongée ; vider la soucoupe.',
    amount: 'Environ 25 % du volume, soit 1,75 L pour un pot de 25 cm ; moitié moins en hiver.',
    potShare: 0.25,
  },
  'aglaonema-siam-aurora': {
    method: 'Arroser quand la moitié supérieure du terreau est sèche, sur toute la surface, puis vider le cache-pot.',
    amount: 'Environ 20 % du volume, soit 0,45 L pour un pot de 17 cm ; moitié moins en hiver.',
    potShare: 0.2,
  },
  'aglaonema-silver-bay': {
    method: 'Laisser sécher la moitié du terreau puis arroser lentement à l’eau tempérée ; espacer en hiver.',
    amount: 'Environ 20 % du volume, soit 0,7 L pour un pot de 20 cm ; moitié moins en hiver.',
    potShare: 0.2,
  },
  'syngonium-neon-robusta': {
    method: 'Arroser quand les 2 à 3 premiers centimètres sont secs, jusqu’à écoulement par les trous ; vider la soucoupe.',
    amount: 'Environ 25 % du volume, soit 0,3 L pour un pot de 14 cm ; moitié moins en hiver.',
    potShare: 0.25,
  },
  'syngonium-albo': {
    method: 'Laisser sécher le tiers supérieur du substrat, puis arroser à l’eau douce et bien égoutter : le blanc pourrit en terreau détrempé.',
    amount: 'Environ 20 % du volume, soit 240 ml pour un pot de 14 cm ; moitié moins en hiver.',
    potShare: 0.2,
  },
  'fougere-crocodile': {
    method: 'Arroser souvent à l’eau douce pour garder le substrat frais en permanence, jamais détrempé ; vider la soucoupe.',
    amount: 'Environ 30 % du volume, soit 0,65 L pour un pot de 17 cm ; un peu moins en hiver.',
    potShare: 0.3,
  },
  'pteris-cretica': {
    method: 'Garder le terreau humide sans excès en arrosant à l’eau peu calcaire dès que la surface commence à sécher ; ne jamais le laisser sécher.',
    amount: 'Environ 30 % du volume, soit 350 ml pour un pot de 14 cm ; un peu moins en hiver.',
    potShare: 0.3,
  },
  davallia: {
    method: 'Arroser le terreau quand la surface sèche, en évitant de mouiller les rhizomes velus qui débordent du pot.',
    amount: 'Environ 25 % du volume, soit 0,3 L pour une suspension de 14 cm ; un peu moins en hiver.',
    potShare: 0.25,
  },
  episcia: {
    method: 'Arroser à l’eau tiède au bord du pot ou par la soucoupe, pour un terreau légèrement humide, sans mouiller les feuilles.',
    amount: 'Environ 25 % du volume, soit 200 ml pour un pot de 12 cm ; un peu moins en hiver.',
    potShare: 0.25,
  },
  nematanthus: {
    method: 'Arroser le terreau à l’eau tiède quand les premiers centimètres sont secs ; réduire en hiver.',
    amount: 'Environ 20 % du volume, soit 160 ml pour un pot de 12 cm ; moitié moins en hiver.',
    potShare: 0.2,
  },
};
