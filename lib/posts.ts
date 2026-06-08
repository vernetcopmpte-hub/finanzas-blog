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
