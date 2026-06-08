// lib/posts.ts
// Central data source. Replace with a CMS (Contentful, Sanity, etc.) in production.

export interface Post {
  slug: string
  title: string
  excerpt: string
  date: string
  author: string
  authorRole: string
  category: string
  readingTime: number
  coverImage: string
  tags: string[]
  content: Section[]
}

export interface Section {
  heading?: string
  paragraphs: string[]
}

export const posts: Post[] = [
  {
    slug: 'que-es-un-fondo-indexado',
    title: '¿Qué es un fondo indexado y por qué debería interesarte?',
    excerpt: 'Los fondos indexados replican un índice bursátil como el S&P 500 con comisiones mínimas. Descubre cómo funcionan y por qué inversores como Warren Buffett los recomiendan para el pequeño inversor.',
    date: '2025-07-01',
    author: 'Ana García',
    authorRole: 'Analista financiera',
    category: 'Fondos Indexados',
    readingTime: 6,
    coverImage: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&q=80',
    tags: ['fondos indexados', 'ETF', 'inversión pasiva'],
    content: [
      {
        heading: '¿Qué es exactamente un fondo indexado?',
        paragraphs: [
          'Un fondo indexado es un tipo de fondo de inversión o ETF cuyo objetivo es replicar el rendimiento de un índice de referencia, como el S&P 500, el IBEX 35 o el MSCI World. A diferencia de los fondos de gestión activa, donde un equipo de analistas selecciona las acciones, un fondo indexado simplemente compra todas las empresas que forman parte del índice en la misma proporción.',
          'Esta sencillez tiene una consecuencia directa y poderosa: las comisiones son drásticamente más bajas. Mientras un fondo de gestión activa puede cobrar entre el 1,5% y el 2,5% anual, un fondo indexado suele cobrar entre el 0,05% y el 0,20%. A largo plazo, esta diferencia de costes marca una diferencia enorme en el capital acumulado.',
        ],
      },
      {
        heading: 'La ventaja del largo plazo',
        paragraphs: [
          'Numerosos estudios demuestran que más del 90% de los fondos de gestión activa no consiguen batir a su índice de referencia en un horizonte de 15 años. Esta estadística, publicada regularmente por el informe SPIVA de S&P Dow Jones Indices, es uno de los argumentos más sólidos a favor de la inversión pasiva.',
          'El efecto del interés compuesto amplifica esta ventaja con el tiempo. Una inversión de 10.000 € con un rendimiento neto del 7% anual (después de comisiones bajas) se convierte en aproximadamente 76.000 € en 30 años. Con comisiones del 2% anual, el mismo capital solo alcanzaría unos 43.000 €. La diferencia de más de 33.000 € se la llevan las comisiones.',
        ],
      },
      {
        heading: '¿Cómo empezar a invertir en fondos indexados?',
        paragraphs: [
          'El primer paso es elegir una plataforma o broker que ofrezca acceso a fondos indexados con bajas comisiones. En España, opciones populares incluyen MyInvestor, Indexa Capital o Finizens para una gestión automatizada, o brokers como Interactive Brokers o DEGIRO si prefieres gestionarlo tú mismo.',
          'Una vez elegida la plataforma, el siguiente paso es definir tu asignación de activos: qué porcentaje destinar a renta variable (acciones) y qué porcentaje a renta fija (bonos), en función de tu horizonte temporal y tolerancia al riesgo. Una regla sencilla es restar tu edad a 120 para obtener el porcentaje en renta variable.',
        ],
      },
    ],
  },
  {
    slug: 'sp500-invertir-desde-espana',
    title: 'Cómo invertir en el S&P 500 desde España en 2025',
    excerpt: 'El índice más famoso del mundo concentra las 500 mayores empresas de EE.UU. Te explicamos las mejores opciones para acceder a él desde España, qué fiscalidad aplica y qué ETFs o fondos elegir.',
    date: '2025-07-08',
    author: 'Carlos Méndez',
    authorRole: 'Asesor de inversiones',
    category: 'Estrategia',
    readingTime: 8,
    coverImage: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&q=80',
    tags: ['S&P 500', 'ETF', 'inversión desde España'],
    content: [
      {
        heading: 'Por qué el S&P 500 es el referente mundial',
        paragraphs: [
          'El S&P 500 agrupa a las 500 empresas de mayor capitalización bursátil cotizadas en bolsas estadounidenses. Incluye gigantes como Apple, Microsoft, Amazon, Alphabet o Berkshire Hathaway. Su rendimiento histórico medio anual ha sido de aproximadamente el 10% bruto (unos 7-8% ajustado a inflación), lo que lo convierte en el benchmark de referencia para cualquier inversor a largo plazo.',
          'Invertir en el S&P 500 desde España es perfectamente legal y relativamente sencillo. Las opciones principales son los ETFs (fondos cotizados en bolsa) y los fondos de inversión tradicionales indexados. Cada opción tiene sus ventajas en términos de liquidez, fiscalidad y comisiones.',
        ],
      },
      {
        heading: 'ETFs vs fondos de inversión: ¿cuál elegir?',
        paragraphs: [
          'Los ETFs del S&P 500 más populares en España son el iShares Core S&P 500 UCITS ETF (cotizan con ticker CSPX o SXR8) y el Vanguard S&P 500 UCITS ETF. Sus comisiones son ridículamente bajas, en torno al 0,07% anual. Sin embargo, tienen una desventaja fiscal importante: cada vez que vendas participaciones de un ETF para comprar otro, Hacienda considera que has obtenido una ganancia patrimonial y debes tributar en ese momento.',
          'Los fondos de inversión indexados, en cambio, disfrutan de la ventaja del traspaso sin coste fiscal. Puedes mover tu dinero de un fondo a otro sin tributar hasta que realices el reembolso definitivo. Esta característica, exclusiva de los fondos de inversión en España, es muy valiosa para optimizar la cartera a lo largo de los años sin generar fricciones fiscales.',
        ],
      },
    ],
  },
  {
    slug: 'regla-4-por-ciento-fire',
    title: 'La regla del 4%: la clave para jubilarte anticipadamente con FIRE',
    excerpt: 'El movimiento FIRE (Financial Independence, Retire Early) se apoya en una premisa matemática: si acumulas 25 veces tus gastos anuales y retiras el 4% cada año, tu dinero no se agotará. Analizamos si sigue siendo válida.',
    date: '2025-07-15',
    author: 'Ana García',
    authorRole: 'Analista financiera',
    category: 'FIRE',
    readingTime: 7,
    coverImage: 'https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?w=800&q=80',
    tags: ['FIRE', 'independencia financiera', 'jubilación anticipada'],
    content: [
      {
        heading: 'El origen del estudio Trinity',
        paragraphs: [
          'La regla del 4% proviene del famoso estudio Trinity de 1998, realizado por tres profesores de la Trinity University de Texas. Analizaron datos históricos del mercado entre 1926 y 1997 y concluyeron que una cartera compuesta por 50% acciones y 50% bonos podía sostener una tasa de retirada del 4% anual durante 30 años en el 95% de los escenarios históricos sin quedarse sin dinero.',
          'Esta regla se convirtió en la piedra angular del movimiento FIRE. Si gastas 24.000 € al año, necesitas acumular 600.000 € (24.000 × 25) para poder retirarte. Si gastas 30.000 €, el objetivo son 750.000 €. La sencillez de la fórmula la ha hecho enormemente popular, aunque también ha generado un debate continuo sobre su vigencia.',
        ],
      },
      {
        heading: '¿Sigue siendo válida la regla en 2025?',
        paragraphs: [
          'Los críticos señalan que el estudio original asumía un horizonte de 30 años, pero quienes se jubilan a los 35-45 años pueden necesitar que su cartera dure 50-60 años. Para horizontes más largos, algunos investigadores recomiendan una tasa de retirada más conservadora del 3% o 3,5%.',
          'Además, el contexto actual de valoraciones bursátiles elevadas y tipos de interés en normalización genera incertidumbre. Sin embargo, estudios más recientes que incluyen datos internacionales y períodos más largos sugieren que el 4% sigue siendo una referencia razonable para carteras bien diversificadas globalmente, especialmente si se combina con cierta flexibilidad en el gasto durante las crisis.',
        ],
      },
    ],
  },
  {
    slug: 'interes-compuesto-ejemplo',
    title: 'El interés compuesto: el fenómeno que hace crecer tu dinero mientras duermes',
    excerpt: 'Albert Einstein lo llamó "la octava maravilla del mundo". Entender el interés compuesto y empezar a aprovecharlo pronto es la decisión financiera más importante que puedes tomar.',
    date: '2025-07-22',
    author: 'Laura Sanz',
    authorRole: 'Educadora financiera',
    category: 'Educación Financiera',
    readingTime: 5,
    coverImage: 'https://images.unsplash.com/photo-1565514020179-026b92b84bb6?w=800&q=80',
    tags: ['interés compuesto', 'ahorro', 'educación financiera'],
    content: [
      {
        heading: 'Simple vs compuesto: la diferencia que lo cambia todo',
        paragraphs: [
          'El interés simple se calcula siempre sobre el capital original. Si inviertes 1.000 € al 5% de interés simple anual, ganas 50 € cada año. En 20 años habrás ganado 1.000 € en intereses, para un total de 2.000 €. El interés compuesto, en cambio, se calcula sobre el capital más los intereses acumulados. Esos 50 € del primer año se suman al capital, por lo que el segundo año el interés se calcula sobre 1.050 €.',
          'La diferencia parece pequeña al principio, pero se vuelve espectacular con el tiempo. Esos mismos 1.000 € al 5% de interés compuesto durante 20 años se convierten en 2.653 €, un 32% más que con el interés simple. A 40 años, el resultado es de 7.040 € frente a los 3.000 € del interés simple. Esta aceleración exponencial es la esencia del interés compuesto.',
        ],
      },
    ],
  },
  {
    slug: 'cartera-boglehead-espana',
    title: 'La cartera Boglehead para inversores españoles: simple, eficiente y rentable',
    excerpt: 'La filosofía Boglehead, inspirada en el fundador de Vanguard John Bogle, propone una cartera de dos o tres fondos indexados globales. Adaptamos este modelo al inversor español con fondos disponibles en nuestro mercado.',
    date: '2025-07-29',
    author: 'Carlos Méndez',
    authorRole: 'Asesor de inversiones',
    category: 'Fondos Indexados',
    readingTime: 9,
    coverImage: 'https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?w=800&q=80',
    tags: ['Boglehead', 'cartera', 'Vanguard', 'diversificación'],
    content: [
      {
        heading: 'Los principios Boglehead',
        paragraphs: [
          'John Bogle, fundador de Vanguard y creador del primer fondo indexado para inversores particulares, resumió su filosofía en unos pocos principios: diversifica ampliamente, minimiza costes, mantén el rumbo y no intentes predecir el mercado. Sus seguidores, conocidos como Bogleheads, han construido una comunidad global que aplica estos principios con una simplicidad radical.',
          'La cartera Boglehead más famosa es la "cartera de tres fondos" (three-fund portfolio): un fondo indexado de renta variable estadounidense, uno de renta variable internacional y uno de renta fija. Con tres fondos de bajo coste se consigue una diversificación global que cubre miles de empresas de todo el mundo.',
        ],
      },
      {
        heading: 'Adaptación para España: fondos disponibles',
        paragraphs: [
          'Para el inversor español, la cartera de dos fondos suele ser la más práctica: un fondo indexado global de renta variable (como el Vanguard Global Stock Index Fund o el Amundi MSCI World) y un fondo de renta fija global o europea (como el Vanguard Global Bond Index Fund). Esta combinación es accesible a través de plataformas como MyInvestor o Finizens.',
          'La asignación entre renta variable y renta fija depende de tu horizonte temporal. Para horizontes superiores a 15 años, muchos Bogleheads recomiendan una asignación del 80-100% en renta variable. Para horizontes de 5-10 años, una mezcla 60/40 o 70/30 ofrece mayor estabilidad con algo menos de rentabilidad esperada.',
        ],
      },
    ],
  },
  {
    slug: 'errores-inversores-principiantes',
    title: '7 errores que cometen los inversores principiantes (y cómo evitarlos)',
    excerpt: 'Desde el market timing hasta ignorar la fiscalidad, los errores de los primeros años de inversión pueden costar decenas de miles de euros. Identificamos los más comunes para que no los cometas.',
    date: '2025-08-05',
    author: 'Laura Sanz',
    authorRole: 'Educadora financiera',
    category: 'Educación Financiera',
    readingTime: 7,
    coverImage: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&q=80',
    tags: ['errores', 'principiantes', 'psicología inversora'],
    content: [
      {
        heading: 'Error 1: intentar predecir el mercado',
        paragraphs: [
          'El market timing, es decir, intentar comprar en los mínimos y vender en los máximos, es una de las estrategias más seductoras y más destructivas para el inversor particular. Numerosos estudios demuestran que incluso los gestores profesionales son incapaces de hacer market timing de forma consistente a largo plazo.',
          'El coste real del market timing no es solo quedarse fuera del mercado en los días malos, sino también perderse los mejores días. Un estudio de JP Morgan Asset Management revela que si un inversor hubiera estado fuera del mercado durante los 10 mejores días de los últimos 20 años, su rentabilidad se habría reducido a la mitad. Estos mejores días suelen ocurrir precisamente en medio de las peores crisis.',
        ],
      },
      {
        heading: 'Error 2: ignorar el coste de las comisiones',
        paragraphs: [
          'Una diferencia del 1,5% anual en comisiones puede parecer insignificante, pero sobre un capital de 200.000 € a 25 años representa más de 150.000 € en rentabilidad perdida. Sin embargo, muchos inversores principiantes eligen fondos sin comparar siquiera sus comisiones, guiándose únicamente por la rentabilidad pasada.',
          'La solución es sencilla: antes de invertir en cualquier fondo, consulta su TER (Total Expense Ratio) en el KID o DFI (Documento de Datos Fundamentales). Para fondos indexados globales, un TER inferior al 0,20% es perfectamente alcanzable. Para fondos de gestión activa, todo lo que supere el 1% merece un análisis muy crítico.',
        ],
      },
    ],
  },
  {
    slug: 'invertir-100-euros-al-mes',
    title: 'Cómo invertir 100 euros al mes: el plan paso a paso para empezar desde cero',
    excerpt: 'Con solo 100 euros mensuales puedes construir un patrimonio significativo gracias al interés compuesto y los fondos indexados. Te explicamos exactamente qué hacer, dónde y cómo automatizarlo.',
    date: '2025-08-12',
    author: 'Ana García',
    authorRole: 'Analista financiera',
    category: 'Plan de Inversión Mensual',
    readingTime: 8,
    coverImage: 'https://images.unsplash.com/photo-1579621970795-87facc2f976d?w=800&q=80',
    tags: ['100 euros al mes', 'inversión mensual', 'automatizar inversión', 'fondos indexados'],
    content: [
      {
        heading: '¿Por qué 100 euros al mes cambia tu vida financiera?',
        paragraphs: [
          'Cien euros al mes parece poco, pero el poder del tiempo y el interés compuesto lo transforman en algo extraordinario. Si empiezas a los 25 años invirtiendo 100 euros mensuales en un fondo indexado con un rendimiento histórico medio del 7% anual (ajustado a inflación), a los 65 años habrás acumulado más de 260.000 euros. De esos, solo habrás aportado 48.000 euros de tu bolsillo. Los más de 212.000 euros restantes son el regalo del interés compuesto.',
          'Lo más importante no es la cantidad, sino la consistencia. Muchos estudios demuestran que el inversor que empieza con poco pero de forma constante supera al que espera tener "suficiente dinero" para empezar. Cada mes que esperas, pierdes una cuota de interés compuesto que nunca podrás recuperar.',
        ],
      },
      {
        heading: 'Paso 1: Abre una cuenta en MyInvestor o Indexa Capital',
        paragraphs: [
          'Para un plan de 100 euros mensuales, las opciones más recomendadas en España son MyInvestor e Indexa Capital. MyInvestor te permite acceder directamente a los fondos de Vanguard (como el Vanguard Global Stock Index Fund) sin comisión de custodia si superas los 10.000 euros en cartera. Indexa Capital gestiona automáticamente una cartera diversificada por ti por una comisión total de alrededor del 0,55% anual.',
          'Ambas opciones tienen apps móviles intuitivas y el proceso de apertura de cuenta se completa en menos de 15 minutos con tu DNI y una fotografía. No hay que acudir a ninguna oficina ni hablar con ningún comercial.',
        ],
      },
      {
        heading: 'Paso 2: Configura una orden de inversión automática',
        paragraphs: [
          'La clave para no fallar nunca es la automatización. En MyInvestor puedes configurar una aportación periódica desde tu cuenta corriente: el día que tú elijas (recomendamos el mismo día que cobras la nómina), se transfieren automáticamente 100 euros y se invierten en el fondo que hayas elegido. No tienes que pensar, no tienes que recordar, no tienes que tomar ninguna decisión emocional en mitad de una caída del mercado.',
          'Este método se llama Dollar-Cost Averaging (DCA) o promedio del coste en euros. Al invertir la misma cantidad cada mes, independientemente de si el mercado está alto o bajo, automáticamente compras más participaciones cuando están baratas y menos cuando están caras. A largo plazo, esto resulta en un coste medio de compra favorable.',
        ],
      },
      {
        heading: '¿Qué fondo elegir para 100 euros al mes?',
        paragraphs: [
          'Para una primera inversión de 100 euros mensuales, la opción más sencilla y eficiente es un único fondo indexado global: el Vanguard Global Stock Index Fund (ISIN IE00B03HCZ61) o el Amundi Index MSCI World (ISIN LU1681043599), ambos disponibles en MyInvestor. Con un solo fondo obtienes exposición a más de 1.500 empresas de 23 países desarrollados con una comisión anual inferior al 0,20%.',
          'Si prefieres añadir algo de renta fija para reducir la volatilidad, puedes dividir: 80 euros en el fondo de renta variable global y 20 euros en el Vanguard Global Bond Index Fund. Esta sencilla cartera de dos fondos es la base de la estrategia Boglehead adaptada al inversor español.',
        ],
      },
    ],
  },
  {
    slug: 'carteras-automatizadas-espana-comparativa',
    title: 'Carteras automatizadas en España 2025: Indexa, Finizens, Openbank y MyInvestor comparados',
    excerpt: 'Los roboadvisors eliminan la complejidad de invertir: tú aportas dinero y ellos gestionan la cartera. Comparamos las cuatro principales opciones en España para que elijas la que mejor se adapta a ti.',
    date: '2025-08-19',
    author: 'Carlos Méndez',
    authorRole: 'Asesor de inversiones',
    category: 'Carteras Automatizadas',
    readingTime: 10,
    coverImage: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80',
    tags: ['roboadvisor', 'Indexa Capital', 'Finizens', 'cartera automatizada', 'inversión automática'],
    content: [
      {
        heading: '¿Qué es una cartera automatizada y por qué funciona?',
        paragraphs: [
          'Una cartera automatizada o roboadvisor es un servicio que, mediante un cuestionario inicial sobre tu perfil de riesgo y horizonte temporal, construye y mantiene una cartera de fondos indexados diversificada por ti. Cada cierto tiempo rebalancea la cartera (vende lo que ha subido demasiado y compra lo que ha bajado) para mantener la asignación de activos objetivo. Todo esto ocurre automáticamente, sin que tengas que tomar ninguna decisión.',
          'La gran ventaja es la eliminación del error humano. Los estudios de comportamiento inversor demuestran que la brecha entre la rentabilidad del fondo y la rentabilidad real del inversor promedio es de 1,5-2 puntos porcentuales anuales, causada por comprar en máximos y vender en mínimos. Las carteras automatizadas eliminan esta trampa psicológica.',
        ],
      },
      {
        heading: 'Indexa Capital: el líder del mercado español',
        paragraphs: [
          'Indexa Capital es el roboadvisor con más patrimonio gestionado en España, con más de 2.000 millones de euros bajo gestión. Su propuesta es una cartera de 10-12 fondos indexados de Vanguard, Amundi y Dimensional, con una comisión total de gestión de entre el 0,43% y el 0,67% anual (incluyendo la comisión del roboadvisor y la de los fondos). A mayor patrimonio, menor comisión.',
          'Mínimo de entrada: 3.000 euros para carteras de fondos. Para planes de pensiones indexados, el mínimo es de 50 euros. Su rentabilidad histórica ha superado consistentemente a la media de los fondos de gestión activa españoles, lo que la convierte en la opción de referencia para la mayoría de los inversores pasivos en España.',
        ],
      },
      {
        heading: 'Finizens: la alternativa más accesible',
        paragraphs: [
          'Finizens destaca por su accesibilidad: puedes empezar a invertir desde 1 euro y las aportaciones periódicas se pueden configurar desde 50 euros al mes. Su cartera está compuesta por ETFs de iShares (BlackRock) y la comisión total oscila entre el 0,55% y el 0,80% anual. También ofrece un plan de pensiones indexado, una de las opciones más baratas del mercado para el ahorro para la jubilación.',
          'Una característica diferencial es el "plan de inversión inteligente": el sistema optimiza automáticamente las aportaciones para mantener el perfil de riesgo sin necesidad de venta de participaciones, lo que minimiza el impacto fiscal. Ideal para quien quiere empezar con poco dinero sin complicaciones.',
        ],
      },
      {
        heading: 'MyInvestor: gestión propia con fondos de Vanguard',
        paragraphs: [
          'MyInvestor no es estrictamente un roboadvisor, sino una plataforma de inversión que da acceso directo a fondos indexados de Vanguard, Amundi, iShares y otros proveedores sin comisión de custodia a partir de 10.000 euros. Para quien tiene conocimientos básicos y prefiere gestionar su propia cartera, ofrece la mayor flexibilidad y, potencialmente, los menores costes totales.',
          'La cartera automatizada de MyInvestor ("MyInvestor Cartera") cobra entre el 0,35% y el 0,60% anual y es gestionada por el equipo de gestión del banco. Para quienes prefieren construir su propia cartera de fondos Vanguard, los costes pueden bajar hasta el 0,12-0,18% anual. Es la opción más económica si estás dispuesto a hacer el rebalanceo manual una vez al año.',
        ],
      },
    ],
  },
  {
    slug: 'mejores-apps-para-invertir-espana',
    title: 'Las mejores apps para invertir en España en 2025: análisis completo',
    excerpt: 'Desde los neobrókers más económicos hasta las plataformas de inversión automatizada, analizamos las mejores aplicaciones móviles para invertir desde España, sus comisiones, seguridad y facilidad de uso.',
    date: '2025-08-26',
    author: 'Laura Sanz',
    authorRole: 'Educadora financiera',
    category: 'Apps Bancarias',
    readingTime: 9,
    coverImage: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&q=80',
    tags: ['apps inversión', 'neobróker', 'DEGIRO', 'Trade Republic', 'MyInvestor'],
    content: [
      {
        heading: 'Qué buscar en una app para invertir',
        paragraphs: [
          'La mejor app para invertir no es necesariamente la más barata ni la más completa. Para el inversor de largo plazo en fondos indexados o ETFs, los criterios más importantes son: seguridad y regulación (¿está supervisada por la CNMV o un equivalente europeo?), acceso a fondos indexados de calidad, comisiones bajas en la compra recurrente, y una interfaz que no te tiente a operar en exceso.',
          'Las apps con demasiadas funciones de trading, alertas de precios y análisis técnico están diseñadas para que operes con frecuencia, lo que perjudica la rentabilidad del inversor de largo plazo. La mejor app para invertir en fondos indexados es la más aburrida: aquella que te permite programar una aportación mensual y olvidarte.',
        ],
      },
      {
        heading: 'Trade Republic: el neobróker de moda en Europa',
        paragraphs: [
          'Trade Republic ha conquistado a millones de europeos con su propuesta: comisión de 1 euro por operación en ETFs y acciones, sin comisión de custodia, y una cuenta de ahorro remunerada al 3% TAE en efectivo no invertido. Su app es impecable: simple, rápida y con planes de ahorro en ETFs que permiten invertir desde 1 euro al mes en los ETFs más populares, incluidos los que replican el MSCI World o el S&P 500.',
          'La pega es que Trade Republic solo ofrece ETFs y acciones, no fondos de inversión tradicionales. Esto significa que cada traspaso entre ETFs tiene un tratamiento fiscal diferente al de los fondos de inversión: en España, la venta de un ETF tributa en el ejercicio en que se produce, sin la ventaja del traspaso libre de impuestos que sí tienen los fondos. Para quien invierte a muy largo plazo sin tocar la cartera, esto puede ser irrelevante. Para quien quiera rebalancear con frecuencia, es un inconveniente.',
        ],
      },
      {
        heading: 'DEGIRO: la plataforma de referencia para ETFs',
        paragraphs: [
          'DEGIRO es el bróker online de referencia para comprar ETFs en Europa. Ofrece una selección de ETFs sin comisión de compra (los que están en su lista de ETFs gratuitos, que incluye muchos de los más populares como el iShares Core MSCI World o el Vanguard FTSE All-World) y comisiones muy bajas para el resto (alrededor de 2-4 euros por operación). No tiene comisión de custodia.',
          'Su app ha mejorado notablemente en los últimos años, aunque sigue siendo menos intuitiva que la de Trade Republic. Una ventaja importante es la amplia selección de mercados y productos: puedes comprar ETFs en múltiples bolsas europeas, lo que da acceso a versiones de acumulación de dividendos en lugar de distribución, algo fiscalmente más eficiente para el inversor español de largo plazo.',
        ],
      },
    ],
  },
  {
    slug: 'etf-vs-fondo-indexado-diferencias',
    title: 'ETF vs fondo indexado: ¿cuál es mejor para el inversor español?',
    excerpt: 'ETFs y fondos indexados invierten en lo mismo pero funcionan de forma diferente. La clave está en la fiscalidad española: los fondos permiten traspasos sin pagar impuestos, los ETFs no. Te explicamos cuándo elegir cada uno.',
    date: '2025-09-09',
    author: 'Carlos Méndez',
    authorRole: 'Asesor de inversiones',
    category: 'Fondos Indexados',
    readingTime: 7,
    coverImage: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&q=80',
    tags: ['ETF', 'fondo indexado', 'fiscalidad', 'traspaso fondos'],
    content: [
      {
        heading: 'La diferencia fundamental: cómo se compran y venden',
        paragraphs: [
          'Un ETF (Exchange-Traded Fund) cotiza en bolsa como una acción: puedes comprarlo y venderlo en cualquier momento durante el horario de mercado al precio que marca en ese instante. Un fondo indexado tradicional, en cambio, solo se puede suscribir o reembolsar al precio de cierre del día, calculado una vez al día por la gestora.',
          'Para el inversor de largo plazo que invierte mensualmente y no toca su cartera durante años, esta diferencia es irrelevante en la práctica. Nadie necesita vender sus participaciones a las 10:43 de la mañana. Lo que sí importa es la fiscalidad, y ahí los fondos de inversión tienen una ventaja decisiva en España.',
        ],
      },
      {
        heading: 'La ventaja fiscal de los fondos: el traspaso sin peaje',
        paragraphs: [
          'En España existe una norma única en Europa: puedes traspasar dinero de un fondo de inversión a otro sin tributar por las plusvalías acumuladas. Solo pagas impuestos cuando haces el reembolso definitivo. Esto permite rebalancear tu cartera, cambiar de fondo o ajustar tu asignación de activos sin que Hacienda te cobre nada hasta el día en que retires el dinero.',
          'Los ETFs no tienen esta ventaja. Cada vez que vendes un ETF para comprar otro, Hacienda considera que has realizado una ganancia patrimonial y debes tributar ese año. Si llevas 10 años con plusvalías del 150%, vender un ETF para rebalancear puede costarte entre el 19% y el 28% de esas ganancias en impuestos. En un fondo indexado, ese mismo rebalanceo no tiene coste fiscal.',
        ],
      },
      {
        heading: '¿Cuándo tiene sentido usar ETFs en España?',
        paragraphs: [
          'Los ETFs tienen sentido en España en tres situaciones: cuando inviertes una cantidad puntual grande y no piensas tocarla en 20-30 años (el impacto del rebalanceo es menor), cuando quieres acceder a mercados muy específicos que no tienen fondo de inversión equivalente disponible en España, o cuando usas cuentas de inversión en el extranjero donde la fiscalidad es diferente.',
          'Para el inversor que empieza con 100 euros al mes y planea ir aumentando gradualmente su inversión durante décadas, los fondos indexados disponibles en MyInvestor o a través de Indexa Capital son casi siempre la mejor opción por la flexibilidad fiscal que ofrecen.',
        ],
      },
    ],
  },
  {
    slug: 'como-declarar-fondos-indexados-hacienda',
    title: 'Cómo declarar fondos indexados en la renta: guía práctica para España',
    excerpt: 'Los fondos indexados y ETFs tienen un tratamiento fiscal específico en España. Te explicamos cómo tributan las ganancias, qué es la regla de los dos meses y cómo aprovechar el diferimiento fiscal para pagar menos impuestos.',
    date: '2025-09-16',
    author: 'Ana García',
    authorRole: 'Analista financiera',
    category: 'Educación Financiera',
    readingTime: 8,
    coverImage: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&q=80',
    tags: ['fiscalidad', 'IRPF', 'fondos indexados', 'Hacienda', 'declaración renta'],
    content: [
      {
        heading: 'Cómo tributan las ganancias de los fondos de inversión',
        paragraphs: [
          'Las ganancias de los fondos de inversión tributan en la base del ahorro del IRPF. Los primeros 6.000 € de ganancia tributan al 19%, entre 6.000 € y 50.000 € al 21%, entre 50.000 € y 200.000 € al 23%, y a partir de 200.000 € al 28%. Estas son las tasas aplicables al reembolso definitivo, es decir, cuando retiras el dinero del fondo.',
          'Lo fundamental es que mientras no reembolses (no saques el dinero del sistema de fondos), no pagas impuestos. Puedes tener 200.000 € de plusvalías latentes en tu fondo durante 30 años y no pagar ni un euro a Hacienda hasta que decidas retirar el dinero. Este diferimiento fiscal es extraordinariamente valioso porque ese dinero que no pagas en impuestos sigue generando rentabilidad a tu favor.',
        ],
      },
      {
        heading: 'Los traspasos entre fondos: tu mejor aliado fiscal',
        paragraphs: [
          'Como ya hemos mencionado, en España los traspasos entre fondos de inversión están exentos de tributación. Esto significa que puedes rebalancear tu cartera (vender el fondo que más ha subido y comprar el que menos) sin coste fiscal. Esta operación, que en ETFs o acciones generaría una factura para Hacienda, en fondos de inversión es fiscalmente neutra.',
          'Para aprovechar al máximo esta ventaja, la estrategia óptima es invertir siempre mediante fondos (no ETFs) si tu horizonte es largo plazo y prevés necesitar rebalancear. Solo convierte tu inversión en dinero real cuando lo necesites de verdad, por ejemplo en la jubilación, y hazlo de forma gradual para mantenerte siempre en los tramos bajos de tributación.',
        ],
      },
    ],
  },
  {
    slug: 'myinvestor-guia-completa',
    title: 'MyInvestor: guía completa para empezar a invertir en 2025',
    excerpt: 'MyInvestor es el banco online que da acceso a los fondos de Vanguard, Amundi e iShares en España. Te explicamos cómo abrir cuenta, qué fondos elegir y cómo configurar una aportación automática mensual.',
    date: '2025-09-23',
    author: 'Laura Sanz',
    authorRole: 'Educadora financiera',
    category: 'Apps Bancarias',
    readingTime: 9,
    coverImage: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&q=80',
    tags: ['MyInvestor', 'fondos Vanguard', 'cómo empezar', 'aportación periódica'],
    content: [
      {
        heading: 'Qué es MyInvestor y por qué destaca',
        paragraphs: [
          'MyInvestor es un neobanco respaldado por Andbank, una entidad financiera andorrana con presencia en España. Su propuesta de valor es única en el mercado español: acceso directo a fondos de inversión de Vanguard, Amundi, iShares y otros proveedores internacionales sin comisión de custodia (si tu cartera supera los 10.000 euros) o con una comisión de 0 euros si contratas su roboadvisor.',
          'La plataforma también ofrece hipotecas competitivas, cuentas remuneradas y carteras automatizadas, pero su joya es el acceso a fondos indexados de primer nivel que hasta hace pocos años solo estaban disponibles para grandes patrimonios o inversores institucionales.',
        ],
      },
      {
        heading: 'Cómo abrir cuenta en MyInvestor paso a paso',
        paragraphs: [
          'El proceso de apertura de cuenta en MyInvestor es 100% digital y tarda entre 10 y 20 minutos. Necesitas: DNI o NIE en vigor, número de teléfono móvil español, cuenta bancaria española para las transferencias y una fotografía tipo selfie para la verificación de identidad. Descarga la app en iOS o Android, pulsa "Abrir cuenta", sigue el proceso guiado y en menos de 24 horas tendrás la cuenta operativa.',
          'Una vez activa la cuenta, transfiere el dinero que quieras invertir mediante transferencia bancaria ordinaria. El dinero suele estar disponible para invertir en 1-2 días hábiles. A partir de aquí, ve a la sección de fondos y busca el que quieras por nombre o ISIN.',
        ],
      },
      {
        heading: 'Los mejores fondos indexados disponibles en MyInvestor',
        paragraphs: [
          'Los fondos más recomendados para una cartera sencilla son: Vanguard Global Stock Index Fund Investor EUR Acc (ISIN IE00B03HCZ61, TER 0,18%, cubre 1.500 empresas de países desarrollados), Amundi Index MSCI World (ISIN LU1681043599, TER 0,12%, similar cobertura a menor coste) y Vanguard Emerging Markets Stock Index Fund (ISIN IE0031786142, TER 0,23%, para añadir exposición a mercados emergentes).',
          'Para configurar una aportación automática mensual en MyInvestor, ve al fondo elegido, pulsa "Aportación periódica", elige el importe (mínimo 1 euro), la frecuencia (mensual) y el día del mes. MyInvestor cargará automáticamente el importe desde tu cuenta y comprará participaciones del fondo. Es la forma más sencilla de aplicar la estrategia DCA sin pensar.',
        ],
      },
    ],
  },
  {
    slug: 'independencia-financiera-cuanto-necesitas',
    title: '¿Cuánto dinero necesitas para la independencia financiera en España?',
    excerpt: 'La independencia financiera no es solo para millonarios. Con la regla del 4% y un cálculo sencillo puedes saber exactamente cuánto necesitas ahorrar para vivir de tus inversiones en España. La respuesta te sorprenderá.',
    date: '2025-09-30',
    author: 'Ana García',
    authorRole: 'Analista financiera',
    category: 'FIRE',
    readingTime: 8,
    coverImage: 'https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?w=800&q=80',
    tags: ['independencia financiera', 'FIRE', 'cuánto ahorrar', 'jubilación anticipada'],
    content: [
      {
        heading: 'El cálculo básico: multiplica tus gastos anuales por 25',
        paragraphs: [
          'La fórmula de la independencia financiera es brutalmente sencilla: necesitas acumular 25 veces tus gastos anuales. Si vives con 18.000 € al año (1.500 €/mes), necesitas 450.000 €. Si vives con 24.000 € (2.000 €/mes), necesitas 600.000 €. Si vives con 30.000 € (2.500 €/mes), necesitas 750.000 €. Este multiplicador de 25 deriva de la regla del 4%: si retiras el 4% anual de una cartera bien invertida, históricamente el dinero no se agota en horizontes de 30 años.',
          'En España, los gastos medios de un adulto sin hipoteca ni hijos en una ciudad mediana rondan los 15.000-20.000 € anuales. Eso significa que la independencia financiera para un estilo de vida modesto pero cómodo requiere entre 375.000 € y 500.000 €. Es una cifra alcanzable con disciplina y tiempo, especialmente si se empieza joven.',
        ],
      },
      {
        heading: '¿En cuántos años puedes alcanzar la independencia financiera?',
        paragraphs: [
          'El tiempo necesario depende de tu tasa de ahorro, no de tu salario. Un estudio de Mr. Money Mustache, uno de los blogs de FIRE más influyentes del mundo, demostró que con una tasa de ahorro del 50% (ahorras la mitad de lo que ganas) puedes alcanzar la independencia financiera en menos de 17 años, independientemente de tu salario absoluto.',
          'Con una tasa de ahorro del 25% (ahorras un cuarto de tu sueldo) el camino se alarga a unos 32 años. Con el 10% de ahorro, que es lo que hace la mayoría, la independencia financiera tarda más de 40 años. La conclusión es clara: lo más poderoso que puedes hacer para acelerar la independencia financiera no es ganar más (aunque ayuda), sino gastar menos y aumentar agresivamente tu tasa de ahorro.',
        ],
      },
    ],
  },
  {
    slug: 'diversificacion-cartera-inversiones',
    title: 'Diversificación: por qué no debes poner todos los huevos en la misma cesta',
    excerpt: 'La diversificación es la única estrategia de inversión gratuita. Repartir tu dinero entre miles de empresas y países reduce el riesgo sin sacrificar rentabilidad. Te explicamos cómo diversificar correctamente con fondos indexados.',
    date: '2025-10-07',
    author: 'Carlos Méndez',
    authorRole: 'Asesor de inversiones',
    category: 'Estrategia',
    readingTime: 6,
    coverImage: 'https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?w=800&q=80',
    tags: ['diversificación', 'riesgo', 'cartera', 'MSCI World'],
    content: [
      {
        heading: 'Qué es la diversificación y por qué funciona',
        paragraphs: [
          'La diversificación es el principio de distribuir una inversión entre múltiples activos de forma que las pérdidas de unos se compensen con las ganancias de otros. Harry Markowitz, premio Nobel de Economía, demostró matemáticamente en 1952 que una cartera diversificada puede tener la misma rentabilidad esperada que una cartera concentrada pero con significativamente menos riesgo.',
          'La clave es que activos diferentes no se mueven perfectamente sincronizados. Cuando las acciones europeas caen, las asiáticas pueden subir. Cuando el sector tecnológico sufre, el sector salud puede aguantar mejor. Al combinar activos con baja correlación entre sí, las oscilaciones de la cartera global se suavizan sin sacrificar rentabilidad esperada a largo plazo.',
        ],
      },
      {
        heading: 'Cómo diversificar con un solo fondo indexado',
        paragraphs: [
          'La belleza de los fondos indexados globales es que ofrecen diversificación extrema con un solo producto. El Vanguard Global Stock Index Fund o el Amundi MSCI World invierten en más de 1.500 empresas de 23 países desarrollados con una sola compra. Con ese único fondo tienes exposición a Apple, Microsoft, Nestlé, Toyota, LVMH y más de 1.500 empresas más de todo el mundo.',
          'Para una diversificación más completa, puedes añadir un fondo de mercados emergentes (China, India, Brasil, etc.) que cubre otros 1.400 empresas en 24 países en desarrollo. Con dos fondos cubres prácticamente toda la economía mundial. Añadir un tercer fondo de renta fija global completa una cartera verdaderamente diversificada que puede capear cualquier tormenta económica.',
        ],
      },
    ],
  },
  {
    slug: 'pension-plan-indexado-espana',
    title: 'Planes de pensiones indexados en España: la forma más inteligente de ahorrar para la jubilación',
    excerpt: 'Los planes de pensiones indexados combinan las ventajas fiscales de los planes de pensiones tradicionales con las comisiones ultrabajas de la inversión pasiva. Una combinación que puede ahorrarte decenas de miles de euros.',
    date: '2025-10-14',
    author: 'Laura Sanz',
    authorRole: 'Educadora financiera',
    category: 'Estrategia',
    readingTime: 8,
    coverImage: 'https://images.unsplash.com/photo-1565514020179-026b92b84bb6?w=800&q=80',
    tags: ['plan de pensiones', 'jubilación', 'deducción fiscal', 'Indexa Capital'],
    content: [
      {
        heading: 'La ventaja fiscal de los planes de pensiones',
        paragraphs: [
          'Las aportaciones a planes de pensiones reducen la base imponible del IRPF, lo que significa que pagas menos impuestos ese año. Si ganas 35.000 € brutos y aportas 1.500 € a un plan de pensiones, Hacienda te devuelve entre el 24% y el 37% de esa cantidad en la declaración de la renta, dependiendo de tu tramo. Es decir, aportar 1.500 € a un plan de pensiones puede costarte realmente entre 945 € y 1.140 €.',
          'El límite de aportación con deducción es el mínimo entre 1.500 € anuales (límite individual desde 2022) y el 30% de los rendimientos del trabajo. Esta reducción del límite ha hecho que los planes de pensiones sean menos atractivos que antes para las rentas altas, pero siguen siendo muy interesantes para cualquier persona en el tramo del 24% o superior.',
        ],
      },
      {
        heading: 'Los mejores planes de pensiones indexados en España',
        paragraphs: [
          'Indexa Capital ofrece el plan de pensiones indexado con las comisiones más bajas del mercado español, con una comisión total inferior al 0,30% anual frente al 1,5-2% habitual de los planes de pensiones bancarios tradicionales. Su cartera está compuesta por fondos de Vanguard y Dimensional, con una asignación automática según el perfil de riesgo.',
          'MyInvestor también ofrece planes de pensiones indexados con comisiones muy competitivas. Finizens tiene igualmente una opción de plan de pensiones indexado accesible desde pequeñas aportaciones mensuales. Cualquiera de estas tres opciones es vastamente superior a los planes de pensiones que ofrecen los bancos tradicionales, que cobran comisiones enormes por rentabilidades mediocres.',
        ],
      },
    ],
  },
  {
    slug: 'cuanto-invertir-al-mes-segun-sueldo',
    title: '¿Cuánto debería invertir al mes según mi sueldo? La regla del 20%',
    excerpt: 'No existe una cantidad universal para invertir, pero sí una regla sencilla que funciona para la mayoría: la regla 50/30/20. Te explicamos cómo aplicarla a tu situación y por qué invertir 100 euros al mes es un punto de partida perfecto.',
    date: '2025-10-21',
    author: 'Ana García',
    authorRole: 'Analista financiera',
    category: 'Plan de Inversión Mensual',
    readingTime: 6,
    coverImage: 'https://images.unsplash.com/photo-1579621970795-87facc2f976d?w=800&q=80',
    tags: ['cuánto invertir', 'regla 50/30/20', 'presupuesto', 'ahorro mensual'],
    content: [
      {
        heading: 'La regla 50/30/20: una guía simple para tus finanzas',
        paragraphs: [
          'La regla 50/30/20 propone dividir los ingresos netos en tres categorías: el 50% para necesidades básicas (alquiler o hipoteca, comida, suministros, transporte), el 30% para deseos (ocio, viajes, restaurantes, ropa no esencial) y el 20% para ahorro e inversión. Esta distribución, popularizada por la senadora Elizabeth Warren en su libro "All Your Worth", es una base sólida para la mayoría de las situaciones económicas.',
          'Con un sueldo neto de 1.500 €/mes, el 20% son 300 € para ahorro e inversión. Con 2.000 € netos, son 400 €. Con 1.200 € netos, son 240 €. Si ahora mismo no puedes destinar el 20%, empieza por el 5% o el 10% y auméntalo gradualmente. Lo importante es el hábito, no la cantidad inicial.',
        ],
      },
      {
        heading: 'Por qué 100 euros al mes es un punto de partida perfecto',
        paragraphs: [
          'Cien euros al mes representa aproximadamente el 5-8% del sueldo mediano en España. Es una cantidad que la mayoría puede encontrar sin grandes sacrificios eliminando gastos hormiga: un par de suscripciones que no usas, reducir las comidas fuera una vez al mes, o simplemente transferir el dinero el mismo día de la nómina antes de que "desaparezca".',
          'La psicología importa tanto como las matemáticas. Empezar con 100 euros crea el hábito, hace que veas cómo crece tu dinero, y te motiva a aumentar la cantidad con el tiempo. Muchos inversores que empezaron con 50 o 100 euros al mes en sus veintes terminaron invirtiendo 500-1.000 € mensuales en sus treintas sin sentirlo como un esfuerzo.',
        ],
      },
    ],
  },
  {
    slug: 'vanguard-amundi-ishares-comparativa',
    title: 'Vanguard vs Amundi vs iShares: ¿qué gestora de fondos indexados es mejor para España?',
    excerpt: 'Las tres grandes gestoras de fondos indexados ofrecen productos similares pero con diferencias importantes en comisiones, disponibilidad en España y estructura. Te ayudamos a elegir la mejor para tu situación.',
    date: '2025-10-28',
    author: 'Carlos Méndez',
    authorRole: 'Asesor de inversiones',
    category: 'Fondos Indexados',
    readingTime: 8,
    coverImage: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&q=80',
    tags: ['Vanguard', 'Amundi', 'iShares', 'gestoras fondos', 'TER'],
    content: [
      {
        heading: 'Vanguard: la filosofía del fundador de la inversión pasiva',
        paragraphs: [
          'Vanguard es una gestora única en el mundo: es propiedad de sus propios fondos, y por tanto de sus inversores. No tiene accionistas externos que exijan beneficios. Esto se traduce en que cualquier mejora de eficiencia revierte directamente en menores comisiones para los inversores. Fundada por John Bogle en 1975, Vanguard gestiona más de 7 billones de dólares y es la mayor gestora de fondos de inversión del mundo.',
          'Sus fondos más populares en España son el Vanguard Global Stock Index Fund (ISIN IE00B03HCZ61, TER 0,18%) y el Vanguard U.S. 500 Stock Index Fund (TER 0,10%). Están disponibles en MyInvestor sin comisión de custodia. La filosofía de Vanguard es también cultural: la empresa lleva décadas educando a los inversores sobre los beneficios de la inversión pasiva y los costes del market timing.',
        ],
      },
      {
        heading: 'Amundi: la gestora europea más grande del mundo',
        paragraphs: [
          'Amundi es la mayor gestora de activos de Europa y una de las más grandes del mundo, con más de 2 billones de euros bajo gestión. Sus fondos indexados, especialmente los de la gama "Index" y "Prime", ofrecen comisiones incluso más bajas que los de Vanguard. El Amundi Index MSCI World (ISIN LU1681043599) tiene un TER de solo el 0,12%, inferior al equivalente de Vanguard.',
          'La ventaja adicional de Amundi en España es que al ser una gestora europea (con sede en París) sus fondos tienen una estructura UCITS compliant que facilita la compra en plataformas españolas. Sus fondos están disponibles en MyInvestor, Renta 4, OpenBank y otras plataformas.',
        ],
      },
    ],
  },
  {
    slug: 'errores-comunes-adsense-blog',
    title: 'Cómo sobrevivir a las caídas del mercado sin vender tus fondos indexados',
    excerpt: 'Las caídas del mercado del 20%, 30% o incluso 50% son normales e inevitables. El problema no es la caída, sino el pánico que lleva a vender en el peor momento. Te damos las herramientas psicológicas para mantener el rumbo.',
    date: '2025-11-04',
    author: 'Laura Sanz',
    authorRole: 'Educadora financiera',
    category: 'Educación Financiera',
    readingTime: 7,
    coverImage: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&q=80',
    tags: ['caídas mercado', 'psicología inversora', 'crisis', 'mantener inversión'],
    content: [
      {
        heading: 'Las caídas del mercado son normales, frecuentes e inevitables',
        paragraphs: [
          'Desde 1926, el mercado de valores americano ha sufrido caídas superiores al 20% en más de 25 ocasiones. Caídas superiores al 30% han ocurrido unas 12 veces. Caídas superiores al 50% han ocurrido 4 veces. En promedio, el mercado cae más de un 10% cada 11 meses, más de un 20% cada 3-4 años, y más de un 30% cada 10 años. Estas caídas son absolutamente normales y no son señal de que el capitalismo se esté derrumbando.',
          'Lo que sí es extraordinario es la recuperación: el mercado ha recuperado el 100% de las pérdidas en todas y cada una de esas ocasiones. No siempre rápido (la recuperación del crash de 2000 tardó 13 años), pero siempre ha recuperado. El inversor que mantiene sus fondos durante las caídas termina siempre mejor que el que vende asustado y espera para volver a comprar.',
        ],
      },
      {
        heading: 'La estrategia anti-pánico: automatizar y no mirar',
        paragraphs: [
          'La mejor defensa contra el pánico vendedor no es la fortaleza mental — es la automatización. Si configuras una aportación automática mensual y no revisas el valor de tu cartera más de una vez al trimestre, es mucho más difícil tomar decisiones emocionales. Muchos asesores financieros recomiendan directamente no revisar la cartera durante las crisis, igual que no revisas el valor de tu piso cada día.',
          'Otra herramienta poderosa es recordar que durante las caídas, tus aportaciones mensuales compran más participaciones al mismo precio. Si inviertes 100 euros al mes y el mercado cae un 30%, tus 100 euros de ese mes compran un 43% más de participaciones que antes de la caída. Cuando el mercado se recupere, esas participaciones baratas multiplicarán su valor. Las caídas son rebajas para el inversor paciente.',
        ],
      },
    ],
  },
  {
    slug: 'plan-ahorro-100-euros-mes-simulacion',
    title: 'Simulación real: qué pasa si inviertes 100 euros al mes durante 10, 20 y 30 años',
    excerpt: 'Con datos históricos reales del MSCI World y el S&P 500, simulamos qué capital acumularías invirtiendo exactamente 100 euros al mes durante distintos plazos. Los resultados sorprenden incluso a los más escépticos.',
    date: '2025-09-02',
    author: 'Carlos Méndez',
    authorRole: 'Asesor de inversiones',
    category: 'Plan de Inversión Mensual',
    readingTime: 6,
    coverImage: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80',
    tags: ['simulación inversión', '100 euros mes', 'interés compuesto', 'MSCI World'],
    content: [
      {
        heading: 'Los supuestos de la simulación',
        paragraphs: [
          'Para esta simulación utilizamos datos históricos reales del MSCI World entre 1970 y 2024, con un rendimiento medio anual del 10,5% bruto (7,5% ajustado a inflación) y asumimos una comisión total del 0,20% anual, representativa de los mejores fondos indexados disponibles en España. La aportación mensual es de exactamente 100 euros, realizada el primer día de cada mes, sin aumentar ni disminuir nunca la cantidad.',
          'No incluimos el impacto fiscal de las plusvalías, ya que en un fondo de inversión español puedes diferir el pago de impuestos indefinidamente mediante traspasos. Tampoco consideramos la inflación en el capital acumulado, aunque sí en la rentabilidad real utilizada en algunos escenarios.',
        ],
      },
      {
        heading: 'Resultados a 10 años: 12.000 euros aportados, 20.000 acumulados',
        paragraphs: [
          'En un horizonte de 10 años, las 1.200 aportaciones de 100 euros suman 12.000 euros de tu bolsillo. Con un rendimiento medio histórico ajustado a comisiones del 10,3% anual, el capital acumulado sería de aproximadamente 20.500 euros. Esto significa que el mercado habría generado unos 8.500 euros de rendimiento sobre tu aportación inicial, un 70% adicional sobre el capital invertido.',
          'Importante matiz: los 10 años son el horizonte mínimo recomendado para inversión en renta variable. En períodos cortos, la volatilidad puede resultar en pérdidas temporales. Del histórico del MSCI World, el peor período de 10 años consecutivos arrojó una rentabilidad anualizada del -1,2% (los que empezaron en 2000 justo antes del crash de las puntocom). El 90% de los períodos de 10 años han sido positivos.',
        ],
      },
      {
        heading: 'Resultados a 20 años: 24.000 aportados, 75.000 acumulados',
        paragraphs: [
          'Aquí el interés compuesto empieza a mostrar toda su potencia. 24.000 euros aportados durante 20 años se convierten en aproximadamente 75.000 euros, una multiplicación del capital de más de 3 veces. El rendimiento generado supera en más del doble al capital aportado. Y lo más llamativo es que más de la mitad de ese rendimiento se generó en los últimos 5 años del período, gracias al efecto exponencial del interés compuesto sobre una base de capital ya considerable.',
          'A 20 años, no hay ningún período histórico del MSCI World con rentabilidad anualizada negativa. Todos los inversores que mantuvieron su inversión durante 20 años o más obtuvieron rentabilidades positivas, independientemente del punto de entrada.',
        ],
      },
    ],
  },
]

export function getAllPosts(): Post[] {
  return posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
}

export function getPostBySlug(slug: string): Post | undefined {
  return posts.find((p) => p.slug === slug)
}

export function getAllSlugs(): string[] {
  return posts.map((p) => p.slug)
}

export function getPostsByCategory(category: string): Post[] {
  return posts.filter((p) => p.category === category)
}

export function getAllCategories(): string[] {
  return Array.from(new Set(posts.map((p) => p.category)))
}

export function categoryToSlug(category: string): string {
  const accents: Record<string, string> = {
    á: 'a', é: 'e', í: 'i', ó: 'o', ú: 'u',
    à: 'a', è: 'e', ì: 'i', ò: 'o', ù: 'u',
    ä: 'a', ë: 'e', ï: 'i', ö: 'o', ü: 'u',
    ñ: 'n', ç: 'c',
  }
  return category
    .toLowerCase()
    .replace(/[áéíóúàèìòùäëïöüñç]/g, (c) => accents[c] ?? c)
    .replace(/\s+/g, '-')
}

export function formatDate(dateString: string): string {
  return new Date(dateString).toLocaleDateString('es-ES', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
}
