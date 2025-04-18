/* 
Тип 0: обычный квиз
Тип 1: вопрос с картинками в качестве ответа
Тип 2: вопрос с картинкой
Тип 3: вопрос выборка
Тип 4: выборка с картинкой
Тип 5: ввод ответа 
Тип 6: parts*/

export const tours = [
  {
    title: "Викторина",
    questions: [
      {
        title:
          "Как называется трехмачтовый боевой корабль, у которого много пушек?",
        type: 0,
        answers: ["ФРЕГАТ", "ЛИНКОР", "БОТ", "КОРВЕТ"],
        correct: [0],
      },
      {
        title:
          "Как называется парусное судно с двумя и более мачтами и косыми парусами?",
        type: 0,
        answers: ["БРИГ", "БАРК", "ШХУНА", "БРИГАНТИНА"],
        correct: [2],
      },
      {
        title:
          "Как называется помещение для приготовления пищи на морском судне?",
        type: 0,
        answers: ["РУБКА", "КАМБУЗ", "ГАЛЬОН", "КАЮТА"],
        correct: [1],
      },
      {
        title: "Как называется помещение для размещения экипажа?",
        type: 0,
        answers: ["ТВИНДЕК", "КАМБУЗ", "КАЮТ-КОМПАНИЯ", "КУБРИК"],
        correct: [3],
      },
      {
        title:
          "Как называется жилое помещение на судне для команды и пассажиров?",
        type: 0,
        answers: ["КРЮЙТ-КАМЕРА", "КАЮТА", "ТАМБУР", "СТОЛОВАЯ"],
        correct: [1],
      },
      {
        title:
          "Как называется надстройка на верхней палубе, не доходящая до бортов?",
        type: 0,
        answers: ["РУБКА", "ТРЮМ", "ПИЩЕБЛОК", "НАСОСНОЕ ОТДЕЛЕНИЕ"],
        correct: [0],
      },
      {
        title: "Как называется лестница на судне?",
        type: 0,
        answers: ["СХОДНИ", "ДОРОЖКА", "ТРАП", "КОНЦЫ"],
        correct: [2],
      },
      {
        title: "Как называется судовой колокол?",
        type: 0,
        answers: ["НАБАТ", "УДАРНИК", "РЫНДА", "МЕТАЛЛОФОН"],
        correct: [2],
      },
      {
        title: "Назовите самую большую рыбу в мире",
        type: 0,
        answers: ["СКАТ", "НАРВАЛ", "КАСАТКА", "КИТОВАЯ АКУЛА"],
        correct: [3],
      },
      {
        title: "Какая рыба водится в Красном море?",
        type: 0,
        answers: ["НЕ ВОДИТСЯ", "КРАСНАЯ", "МОРСКАЯ", "ПРЕСНОВОДНАЯ"],
        correct: [0],
      },
      {
        title:
          "Как называется механическое приспособление для переправы с одного берега на другой?",
        type: 0,
        answers: ["ПАРОМ", "ПОНТОН", "ТРАП", "ТРАЛ"],
        correct: [0],
      },
      {
        title: "Назовите самое крупное морское млекопитающее",
        type: 0,
        answers: ["НАРВАЛ", "АКУЛА", "КАШАЛОТ", "МОРЖ"],
        correct: [2],
      },
    ],
  },
  {
    title: "Загадки",
    questions: [
      {
        title:
          "Зачерпнуло ветра белое крыло\nНас с тобой кататься в море унесло",
        type: 0,
        answers: ["ОБЛАКО", "ПАРУС", "ДЫМ ПАРОХОДА", "ЛЬДИНА"],
        correct: [1],
      },
      {
        title: "Кругом вода, а с питьем беда.\nКто знает, где это бывает?",
        type: 0,
        answers: ["РЕКА", "РУЧЕЙ", "СТАКАН", "МОРЕ"],
        correct: [3],
      },
      {
        title: "Семьсот ворот, да один вход",
        type: 0,
        answers: ["НЕВОД", "ЗВЁЗДНОЕ НЕБО", "ЗУБЫ", "ОКНА И ДВЕРЬ"],
        correct: [0],
      },
      {
        title: "По морю идет, идет,\nА до берега дойдет,\nТут и пропадет.",
        type: 0,
        answers: ["КОРАБЛЬ", "ПЛОВЕЦ", "ВОЛНА", "ЛОДКА"],
        correct: [2],
      },
      {
        title:
          "Великан стоит в порту,\nОсвещая темноту\nИ сигналит кораблям:\nЗаходите в гости к нам.",
        type: 0,
        answers: ["КОРАБЛЬ", "ДОК", "МАЯК", "ПОДЪЕМНЫЙ КРАН"],
        correct: [2],
      },
      {
        title:
          "Когда он нужен –\nЕго выбрасывают.\nКогда не нужен –\nЕго поднимают.",
        type: 0,
        answers: ["ШКАФ", "ЯКОРЬ", "ПАРУС", "СЕЙФ"],
        correct: [1],
      },
      {
        title:
          "Если входят корабли\nВ порта акваторию,\nНужно, чтоб их провели\nВодной территорией.\nКак к причалу подойти?\nВедь фарватер под водой.\nКто подскажет, как пройти?\nОтгадайте, кто такой?",
        type: 0,
        answers: ["ЮНГА", "КОК", "КАПИТАН", "ЛОЦМАН"],
        correct: [3],
      },
      {
        title:
          "Поднимает якоря,\nВозит грузы за моря,\nТолько лишь сухие грузы:\nБочки ящики, арбузы…\nНе берет он жидкий груз,\nПотому и…",
        type: 0,
        answers: ["СУХОГРУЗ", "САМ АРБУЗ", "В НЁМ КОНФУЗ", "ПРОФСОЮЗ"],
        correct: [0],
      },
      {
        title:
          "Туч нагнал сердитый ветер.\nНебо в тучах, нет просвета,\nИ разбушевалось море\nВсем судам морским на горе.\nНочь настала прямо днем.\nКак мы это назовем?",
        type: 0,
        answers: ["УРАГАН", "СМЕРЧ", "ШТОРМ", "ЗАТМЕНИЕ"],
        correct: [2],
      },
    ],
  },
  {
    title: "Викторина + загадки",
    questions: [
      {
        title: "Как называется флаг флота России?",
        type: 0,
        answers: [
          "ГЮЙС",
          "АНДРЕЕВСКИЙ ФЛАГ",
          "МОРСКОЙ СТЯГ",
          "ВОЕННО-МОРСКОЕ ЗНАМЯ",
        ],
        correct: [1],
      },
      {
        title: "Найдите Андреевский флаг и выделите его",
        type: 1,
        answers: ["flag1", "flag2", "flag3", "flag4"],
        correct: [0],
      },
    ],
  },
  {
    title: "Викторина",
    questions: [
      {
        title: "Какая сторона света находится здесь?",
        type: 2,
        image: "TSide",
        answers: [
          "SOUTH-WEST (юго-запад)",
          "SOUTH-EAST (юго-восток)",
          "NORTH (север)",
          "SOUTH (юг)",
          "WEST (запад)",
          "EAST (восток)",
          "NORTH-WEST (северо-запад)",
          "NORTH-EAST (северо-восток)",
        ],
        correct: [2],
      },
      {
        title: "Какая сторона света находится здесь?",
        type: 2,
        image: "LSide",
        answers: [
          "SOUTH-WEST (юго-запад)",
          "SOUTH-EAST (юго-восток)",
          "NORTH (север)",
          "SOUTH (юг)",
          "WEST (запад)",
          "EAST (восток)",
          "NORTH-WEST (северо-запад)",
          "NORTH-EAST (северо-восток)",
        ],
        correct: [4],
      },
      {
        title: "Какая сторона света находится здесь?",
        type: 2,
        image: "RBSide",
        answers: [
          "SOUTH-WEST (юго-запад)",
          "SOUTH-EAST (юго-восток)",
          "NORTH (север)",
          "SOUTH (юг)",
          "WEST (запад)",
          "EAST (восток)",
          "NORTH-WEST (северо-запад)",
          "NORTH-EAST (северо-восток)",
        ],
        correct: [1],
      },
      {
        title: "Какая сторона света находится здесь?",
        type: 2,
        image: "RTSide",
        answers: [
          "SOUTH-WEST (юго-запад)",
          "SOUTH-EAST (юго-восток)",
          "NORTH (север)",
          "SOUTH (юг)",
          "WEST (запад)",
          "EAST (восток)",
          "NORTH-WEST (северо-запад)",
          "NORTH-EAST (северо-восток)",
        ],
        correct: [7],
      },
      {
        title: "Какая сторона света находится здесь?",
        type: 2,
        image: "RSide",
        answers: [
          "SOUTH-WEST (юго-запад)",
          "SOUTH-EAST (юго-восток)",
          "NORTH (север)",
          "SOUTH (юг)",
          "WEST (запад)",
          "EAST (восток)",
          "NORTH-WEST (северо-запад)",
          "NORTH-EAST (северо-восток)",
        ],
        correct: [5],
      },
      {
        title: "Какая сторона света находится здесь?",
        type: 2,
        image: "LTSide",
        answers: [
          "SOUTH-WEST (юго-запад)",
          "SOUTH-EAST (юго-восток)",
          "NORTH (север)",
          "SOUTH (юг)",
          "WEST (запад)",
          "EAST (восток)",
          "NORTH-WEST (северо-запад)",
          "NORTH-EAST (северо-восток)",
        ],
        correct: [6],
      },
      {
        title: "Какая сторона света находится здесь?",
        type: 2,
        image: "BSide",
        answers: [
          "SOUTH-WEST (юго-запад)",
          "SOUTH-EAST (юго-восток)",
          "NORTH (север)",
          "SOUTH (юг)",
          "WEST (запад)",
          "EAST (восток)",
          "NORTH-WEST (северо-запад)",
          "NORTH-EAST (северо-восток)",
        ],
        correct: [3],
      },
      {
        title: "Какая сторона света находится здесь?",
        type: 2,
        image: "LBSide",
        answers: [
          "SOUTH-WEST (юго-запад)",
          "SOUTH-EAST (юго-восток)",
          "NORTH (север)",
          "SOUTH (юг)",
          "WEST (запад)",
          "EAST (восток)",
          "NORTH-WEST (северо-запад)",
          "NORTH-EAST (северо-восток)",
        ],
        correct: [0],
      },
    ],
  },
  {
    title: "Выборка",
    questions: [
      {
        title:
          "Необходимо из списка предметов выбрать те, которые могли быть взяты для оснастки и укомплектования корабля во время Великой Северной экспедиции в 1741 году.",
        type: 3,
        answers: [
          "МАГНИТНЫЙ КОМПАС",
          "ПРОВОЛОЧНЫЙ ТРОС",
          "ПЕСОЧНЫЕ ЧАСЫ",
          "БУМАЖНЫЕ САЛФЕТКИ",
          "ШТУРМАНОВСКИЙ ЦИРКУЛЬ",
          "ШТУРМАНСКАЯ ЛИНЕЙКА",
          "БОЛЬШАЯ ГРЕБНАЯ ШЛЮПКА",
          "МАЛАЯ ГРЕБНАЯ ШЛЮПКА",
          "ШЕРСТЯНОЙ КОВЕР",
          "КАБЕСТАН",
          "ЛАГ",
          "СЕКСТАН",
          "СОЛНЕЧНЫЕ ЧАСЫ",
          "БИНОКЛЬ",
          "ГЛОБУС",
          "ПОДЗОРНАЯ ТРУБА",
          "КАРАНДАШ",
          "БОРТЖУРНАЛ",
        ],
        correct: [0, 2, 4, 5, 6, 7, 9, 10, 11, 12, 15, 17],
      },
      {
        title:
          "Необходимо из списка предметов выбрать те, которые могли быть взяты для оснастки и укомплектования корабля во время Великой Северной экспедиции в 1741 году.",
        type: 3,
        answers: [
          "ТЕЛЕФОН",
          "СЕКСТАН",
          "КИПЯТИЛЬНИК",
          "МОРСКАЯ КАРТА",
          "ТЕЛЕСКОП",
          "ПУЛЕМЕТ",
          "МИКРОСКОП",
          "КАНИСТРА",
          "ЛУПА",
          "КОТЕЛ",
          "ХОЛОДИЛЬНИК",
          "ЯКОРЬ",
          "ЛЮСТРА",
          "ПАРУС",
          "КЕРОСИН",
          "БОЧКИ С ВОДОЙ",
          "ЛЕД",
          "РАСКЛАДУШКА",
        ],
        correct: [3, 8, 9, 11, 13, 15],
      },
      {
        title:
          "Необходимо из списка предметов выбрать те, которые могли быть взяты для оснастки и укомплектования корабля во время Великой Северной экспедиции в 1741 году.",
        type: 3,
        answers: [
          "ГАМАК-СЕТЬ",
          "ЛАГ",
          "КОНСЕРВЫ",
          "ГРАДШТОК",
          "ГАЗЕТЫ",
          "КВАДРАНТ",
          "РОГОЖА",
          "ТАРАНКА",
          "ПУШКИ",
          "ВИНО",
          "МУКА",
          "ЗЕРНО",
          "СУХАРИ",
        ],
        correct: [0, 1, 3, 6, 7, 8, 9, 10, 11, 12],
      },
    ],
  },
  {
    title: "Викторина",
    questions: [
      {
        title: "Кто такой боцман?",
        type: 5,
        answers: [],
        correct: ["младший офицер"],
        hint: {
          title: "Боцман",
          text: "Боцман — младший офицер. Его обязанности включали поддержание технического состояния корабля и управление палубной командой. Он следил за состоянием парусов, снастей, шлюпок, корабельных часов; отвечал за хранение запасных канатов, ремонтного дерева, парусины; организовывал ремонтные работы корабля. Также он следил за содержанием корабельного флага и отвечал за поддержание связи с другими кораблями с помощью специальных сигналов. Боцман дублировал команды капитана во время шторма или боя.",
        },
      },
      {
        title: "Кто такой кок?",
        type: 5,
        answers: [],
        correct: ["повар"],
        hint: {
          title: "Кок",
          text: "Кок — корабельный повар. Он должен уметь не только готовить пищу, но и знать, как правильно хранить продукты, уметь экономно рассчитывать употребление пресной воды. Пираты могли запросто выкинуть кок за борт, если им не понравилось, как он приготовил, или если он не экономно использовал продукты и воду.",
        },
      },
      {
        title: "Кто такой навигатор?",
        type: 5,
        answers: [],
        correct: ["опытный моряк"],
        hint: {
          title: "Навигатор",
          text: "Навигатор — Опытные моряки, которые хорошо ориентировались в морских картах, могли прокладывать курс и определять местоположение корабля.",
        },
      },
      {
        title: "Для чего нужен был мастер парусов?",
        type: 5,
        answers: [],
        correct: [
          "ремонтировать паруса",
          "устанавливать паруса",
          "шить паруса",
          "делать паруса",
          "отвечать за постановку тяжелых и верхних парусов",
        ],
        hint: {
          title: "Мастер парусов",
          text: "Он должен был приобретать качественную парусину, шить, ремонтировать паруса. Мастер парусов отвечал за постановку тяжелых и верхних парусов, а боцман руководил работами по постановке нижних парусов.",
        },
      },
      {
        title: "За что отвечает судовой врач?",
        type: 5,
        answers: [],
        correct: ["оказывает помощь"],
        hint: {
          title: "Судовой врач",
          text: "Оказывал помощь всем морякам судна. Врачи всегда очень ценились, поэтому при сражении суда противников часто переманивали врачей к себе на корабль, обещая им больше золота.",
        },
      },
      {
        title: "Кого называют юнгами?",
        type: 5,
        answers: [],
        correct: ["мальчики, изучающие основы мореходства"],
        hint: {
          title: "Юнга",
          text: "Юнгами становились мальчики из благородных семей, которые направлялись на корабль для изучения основ мореходства. В дальнейшем становились моряками.",
        },
      },
      {
        title: "Кто такой старпом?",
        type: 5,
        answers: [],
        correct: ["старший помощник капитана", "правая рука капитана"],
        hint: {
          title: "Старпом",
          text: "Старпом – правая рука капитана. Исполнял обязанности капитана, когда тот отсутствовал.",
        },
      },
      {
        title: "Для чего нужны механики на корабле? ",
        type: 5,
        answers: [],
        correct: ["чтобы устранять неисправности", "устранять неисправности"],
        hint: {
          title: "Механики на корабле",
          text: "Механики на корабле отвечают за исправность ходовой части-двигателей корабля.",
        },
      },
    ],
  },
  {
    title: "Выборка по картинке",
    questions: [
      {
        title:
          "Выберите атрибуты костюма морского офицера первой половины 18 века для капитана Чирикова",
        type: 4,
        answers: [
          "ПАРИК",
          "ШТАНЫ",
          "ПАНТАЛОНЫ",
          "ШЛЯПА",
          "БОТФОРТЫ",
          "КАФТАН",
          "СЮРТУК",
          "ШАРОВАРЫ",
          "ЖАБО",
          "ЗОНТИК",
        ],
        correct: [0, 1, 3, 5],
        image: "costume",
      },
      {
        title:
          "Выберите атрибуты костюма морского офицера первой половины 18 века для капитана Чирикова",
        type: 4,
        answers: [
          "ШПАГА",
          "ПОЯСНАЯ ПОРТУПЕЯ",
          "ШЕЙНЫЙ ПЛАТОК",
          "КАМЗОЛ",
          "ШТИБЛЕТЫ",
          "КОЛГОТЫ",
          "БЛУЗКА",
          "БРЮКИ",
          "ПОРТЯНКИ",
          "БУТСЫ",
        ],
        correct: [0, 1, 2, 3, 4],
        image: "costume",
      },
    ],
  },
  {
    title: "Конструктор",
    questions: [
      {
        title:
          "Расположите части письма так, чтобы получился логически связанный текст",
        type: 6,
        answers: [],
        correct: [],
      },
    ],
  },
];

export const textParts = [
  {
    correctNumber: 2,
    text: "Тогда мы рассудили, что посланные от нас, конечно, в несчастьи, ибо тогда уже настали восьмые сутки, как послан был от меня Аврам Михайлович. И знатное дело, что от тамошних жителей, по их обыкновенному бесчеловечному суровству, побиты или задержаны. Однако ж мы ещё ожидали после выезда тамошних жителей восемнадцать часов и, не дождавшись, пошли в путь свой. И только осмотрели часть земли вёрст на пятьсот. 27 июля, понеже нам не на чем было обстоятельство земли разведывать и к пропитанию своему в прибавок получать воды, а были тогда отсюда весьма в дальнем расстоянии, - возвратились к здешней гавани. Но, несчастьем, возврат нам весьма продолжили долговременно стоящие противные ветры и нечаянная, лежащая на возвратном пути нашем, земля, которой, вперёд идя, и признаков не видали, и мало бы об сию землю в тумане судна не разбили. И уже отстоялись от неё на якоре в 200 саженях, причём имели Божией помощью вдруг утишившийся ветр и довольно долго стоящую тишину. Однако ж с великим трудом от неё отошли, потеряв якорь. Приезжали к нам и люди в 21 кожаных лодках, в каждой по одному человеку. А если соблаговолите ведать, каковы собой те люди и как к нам выезжали, о чём может вам донести посланный от меня солдат Сплавщиков.",
  },
  {
    correctNumber: 0,
    text: "Милостивый Государь мой и друг Дмитрий Яковлевич!\nО несчастливом нашем мореплавании доношу: отправились мы из здешней гавани вместе с господином Капитаном Командором 29 мая, а 20 июня, при обычных на здешнем море всегдашних туманах, стал великий ветр, которым нас разлучило с господином Капитаном Командором. По утишению сильного ветра искал я его определённое время, но сыскать не мог. И поныне он, господин Капитан Командор, со своим судном сюда не возвратился — статное дело, ежели не в несчастьях, то остался негде зимовать. А по разлучении с ним, господином Командором, принуждён был следовать в надлежащий нам путь один. Переплыв отсюда близко полпути, тысячи вёрст, получили землю, которая у себя берега имеет, можно вменять, что неприступные, а именно везде каменные и крутые. И близ самых берегов море имеет глубину великую.",
  },
  {
    correctNumber: 3,
    text: "Во всё время нашей бытности на море почти всегда были в смертной опасности и несли великий труд, и претерпевали многую нужду, а именно страх оттого, что плавание имели в незнаемое море и подле неизвестных берегов почти со всегда стоящими туманами, которые на здешнем море гораздо больше стоят, нежели на иных морях. Труд от продолжения времени, понеже беспрестанно имели паруса 4 месяца и 6 дней и от частых непокойных мокрых погод. А нужду претерпели от недовольства воды, которого ради недовольствия, однажды давалась в неделю служителям каша, а в прочие же дни питались холодным и пить принуждены были, диво, воду малою мерою, которой только бы жажду утолить, да и та вода очень испортилась и издавала из себя дух весьма противный. При таком оскудении и я со всеми офицерами принуждён был по однажды в день варёное кушать и пили только чаю по две или по три чашки в день. Всех трудностей наших и описать невозможно. От которых трудов и от оскудения пищи и питья, и от всегдашнего сырого воздуха, постигла всех нас жестокая цинготная болезнь, от которой многие слегли, а остальные с нуждой и насилу судном управляли. Я с 20 сентября и до возврата в здешнюю гавань за тяжкою болезнью уже не мог выходить наверх и был при самой смерти не только на море, но уже и на берегу. От ненадежды жизни неоднажды, по обычаю, приготовлен был к смерти, чему виновны многие мои грехи перед Богом. 26 сентября помянутая злая болезнь лишила сего света Осипа Андреевича Катчикова. 6 октября преставился премногосклонный ко мне благодетель Иван Львович Чихачёв. После него через одни сутки преставился Михайло Гаврилович Плаутин, что случилось уже весьма незадолго до входа в Авачинскую губу, ибо по милости, не до конца гневающегося на нас Бога, 6 октября увидели Камчатскую землю, а 9 числа вошли в Авачинскую заливу и стали на якорь. 10 октября уже в Авачинском заливе преставился господин профессор астрономии. Между тем ещё умер Михайло Усачёв, которого, чаю, изволили знать, да один служивый. 11 числа вошли в здешнюю гавань, а осталось нас живых 50 человек, а 21 человек, по воле Божией, - некоторые остались на удалённой земле в неизвестном несчастии, а прочие померли. Я после, по милости Божией, от болезни имею некоторую свободу, однако ж ноги ещё весьма болят, и все в цинготных пятнах, и зубы коренные ещё трясутся, как прежде почти все тряслись. Ныне я нахожусь в недоумении, хотя и подаст Бог мне совершённое здоровье от болезни, то на море идти не с кем и снасти на судне худы, а жить здесь в праздности будет не без траты интереса, понеже казённый провиант, который доходит судами с великим трудом и дорогим коштом, принуждён буду издержать напрасно, а без указа и до Охотска возвратиться не очень смею.",
  },
  {
    correctNumber: 1,
    text: "Однако же, необходимо надлежало мне об обстоятельствах её проведать, чего ради послан от меня с десятью человеками Аврам Михайлович Дементьев на лангботе. Однако, общим моим и его несчастьем, он к нам со всеми людьми не возвратился. Ожидая его к себе шесть суток, по присутствию всех офицеров, рассуждая, что не возвращается к нам за повреждением лангбота, послал на имеющейся при судне последней малой лодке мастеровых людей для починки, а для своза их послан боцман Сидор Савельев, понеже он, сожалея посланных прежде людей, сам о посылке своей просил. Но по несчастью и он сам к нам не возвратился, а послан был в весьма удобную погоду. На другой день из того места, куда посланы наши суда и где почти беспрестанно раскладывался огонь, о котором мы думали, что держат посланные от меня служители, вышли две лодки и гребли к нашему судну. Однако к нам не приближались так, чтобы можно было хотя бы лица людей рассмотреть, но издали на судно наше посмотрели, встав на ноги, прокричали «агай, агай» и с великим поспешением возвратились и сильно гребли в прежнее своё место.",
  },
];
