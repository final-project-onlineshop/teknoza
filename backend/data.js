import bcrypt from "bcryptjs";

const data = {
  users: [
    {
      name: "Sevde",
      email: "svd@example.com",
      password: bcrypt.hashSync("tt1kl23hk4"),
      isAdmin: true,
    },
    {
      name: "Ömer",
      email: "ömer@example.com",
      password: bcrypt.hashSync("tt1kl23hk4"),
      isAdmin: true,
    },
    {
      name: "Bekir",
      email: "bkr@example.com",
      password: bcrypt.hashSync("tt1kl23hk4"),
      isAdmin: true,
    },
    {
      name: "Terry Medhurst",
      email: "atuny0@sohu.com",
      password: bcrypt.hashSync("hk34gh43df9h0"),
      isAdmin: false,
    },
    {
      name: "Sheldon Quigley",
      email: "hbingley1@plala.or.jp",
      password: bcrypt.hashSync("hk34gh43df9h0"),
      isAdmin: false,
    },
    {
      name: "Terrill Hills",
      email: "rshawe2@51.la",
      password: bcrypt.hashSync("hk34gh43df9h0"),
      isAdmin: false,
    },
    {
      name: "Miles Cummerata",
      email: "yraigatt3@nature.com",
      password: bcrypt.hashSync("hk34gh43df9h0"),
      isAdmin: false,
    },
    {
      name: "Mavis Schultz",
      email: "kmeus4@upenn.edu",
      password: bcrypt.hashSync("hk34gh43df9h0"),
      isAdmin: false,
    },
    {
      name: "Alison Reichert",
      email: "jtreleven5@nhs.uk",
      password: bcrypt.hashSync("hk34gh43df9h0"),
      isAdmin: false,
    },
    {
      name: "Oleta Abbott",
      email: "dpettegre6@columbia.edu",
      password: bcrypt.hashSync("hk34gh43df9h0"),
      isAdmin: false,
    },
    {
      name: "Ewell Mueller",
      email: "ggude7@chron.com",
      password: bcrypt.hashSync("hk34gh43df9h0"),
      isAdmin: false,
    },
    {
      name: "Demetrius Corkery",
      email: "nloitton8@aol.com",
      password: bcrypt.hashSync("hk34gh43df9h0"),
      isAdmin: false,
    },
    {
      name: "Eleanora Price",
      email: "umcgour9@jalbum.net",
      password: bcrypt.hashSync("hk34gh43df9h0"),
      isAdmin: false,
    },
    {
      name: "Marcel Jones",
      email: "acharlota@live.ru",
      password: bcrypt.hashSync("hk34gh43df9h0"),
      isAdmin: false,
    },
  ],
  products: [
    {
      name: "iPhone 9",
      slug: "iphone-9",
      category: "smartphones",
      thumbnail: "https://dummyjson.com/image/i/products/1/thumbnail.jpg",
      images: [
        "https://dummyjson.com/image/i/products/1/1.jpg",
        "https://dummyjson.com/image/i/products/1/2.jpg",
        "https://dummyjson.com/image/i/products/1/3.jpg",
        "https://dummyjson.com/image/i/products/1/4.jpg",
        "https://dummyjson.com/image/i/products/1/thumbnail.jpg",
      ],
      price: 549,
      stock: 94,
      brand: "Apple",
      reviews: [
        {
          name: "Gayle Krajcik",
          rating: 1,
          comment:
            "Esse quis mollit officia quis ex est nisi non anim fugiat. Occaecat commodo consequat mollit mollit velit. Consequat magna nisi id non occaecat anim magna.\nIrure officia quis ullamco sunt non voluptate nulla. Proident ullamco non consequat do ipsum veniam et ea. Qui pariatur sunt non ullamco enim nulla laboris adipisicing dolor laboris qui incididunt deserunt.",
        },
        {
          name: "Thaddeus McCullough",
          rating: 3,
          comment:
            "Aliquip dolore enim reprehenderit non nostrud consequat sit duis commodo ex aliqua eu sunt tempor. Sit ullamco deserunt est eu commodo amet excepteur quis esse adipisicing excepteur. Et laborum duis aliqua enim aute amet amet dolore adipisicing incididunt.",
        },
        {
          name: "Rupert Upton",
          rating: 3,
          comment:
            "Irure nostrud eiusmod non ea. Et aliquip duis nostrud enim eiusmod culpa sunt irure exercitation. Reprehenderit et mollit pariatur ipsum minim pariatur.\nSint et aute sint incididunt nisi irure ullamco nulla aute labore.",
        },
        {
          name: "Darien Witting",
          rating: 2,
          comment:
            "Consectetur reprehenderit nulla duis dolore labore ipsum voluptate adipisicing adipisicing commodo reprehenderit minim qui. Esse magna in culpa mollit ullamco irure ea dolore.\nAliquip ullamco minim incididunt laboris.",
        },
        {
          name: "Aniya Wisozk",
          rating: 1,
          comment:
            "Occaecat eu veniam eiusmod ea qui tempor sint pariatur ea enim.",
        },
        {
          name: "Miles Cummerata",
          rating: 5,
          comment: "Velit proident officia laborum duis amet aliqua aliquip.",
        },
        {
          name: "Clotilde Larson",
          rating: 5,
          comment:
            "Laboris deserunt qui Lorem eiusmod ad ad labore minim pariatur anim. Lorem sit consectetur nisi excepteur enim tempor nisi quis.\nNostrud nulla mollit duis anim cupidatat eu esse magna. Elit elit ea nostrud velit commodo commodo Lorem sint. Qui esse dolor aute aliqua commodo dolor officia.",
        },
        {
          name: "Frankie Hudson",
          rating: 5,
          comment:
            "Consectetur ea ut velit in velit quis anim laborum fugiat sunt commodo ipsum culpa. Consequat irure Lorem pariatur ad exercitation commodo do velit incididunt commodo voluptate aute ex non aliquip. Anim minim dolore cupidatat minim sint laborum fugiat deserunt consectetur pariatur ipsum tempor.\nAute laboris quis nisi dolor dolore nulla officia. Nulla ut nisi id aliqua aliqua irure occaecat consequat amet Lorem ullamco. Sint consequat enim et Lorem qui irure ipsum cupidatat commodo officia sint velit est.",
        },
        {
          name: "Pearl Blick",
          rating: 3,
          comment:
            "Nisi magna ipsum ullamco incididunt est aliqua in adipisicing enim sit. Proident amet reprehenderit sit consectetur eiusmod ipsum consequat ut pariatur esse cupidatat. Irure tempor proident aliqua nulla ex et. Dolore commodo sunt consectetur laboris minim pariatur duis.\nFugiat dolor aliquip irure quis dolore labore. Labore quis ullamco qui voluptate velit reprehenderit anim sit veniam culpa.",
        },
        {
          name: "Hal Keebler",
          rating: 1,
          comment:
            "Anim magna eu irure amet consequat amet elit. Nisi tempor tempor elit consequat aliquip nulla mollit sint nulla elit ullamco cupidatat. Duis ut incididunt anim laboris anim consectetur ipsum anim ad minim id culpa sint nulla eu. Ad mollit adipisicing nulla mollit irure nostrud fugiat fugiat dolor enim cupidatat.\nElit occaecat magna ad ullamco in id id occaecat proident velit.",
        },
      ],
      description: "An apple mobile which is nothing like apple",
      discountPercentage: 12.96,
    },
    {
      name: "iPhone X",
      slug: "iphone-x",
      category: "smartphones",
      thumbnail: "https://dummyjson.com/image/i/products/2/thumbnail.jpg",
      images: [
        "https://dummyjson.com/image/i/products/2/1.jpg",
        "https://dummyjson.com/image/i/products/2/2.jpg",
        "https://dummyjson.com/image/i/products/2/3.jpg",
        "https://dummyjson.com/image/i/products/2/thumbnail.jpg",
      ],
      price: 899,
      stock: 34,
      brand: "Apple",
      reviews: [
        {
          name: "Delfina Ziemann",
          rating: 4,
          comment:
            "Consequat et mollit occaecat ullamco.\nUllamco esse aute occaecat ad voluptate veniam. Ut anim nulla non duis tempor duis occaecat commodo fugiat reprehenderit cupidatat cillum ullamco fugiat. Incididunt tempor ut commodo ad officia amet fugiat dolor culpa ex. Laboris consequat exercitation sint excepteur ea elit irure adipisicing minim.",
        },
        {
          name: "Gayle Krajcik",
          rating: 1,
          comment:
            "Veniam culpa proident duis veniam veniam aute aute Lorem dolor. Sint aliqua nulla pariatur ut fugiat deserunt. Aliqua aute adipisicing proident ad non duis occaecat mollit consequat nostrud ad et qui eu.",
        },
        {
          name: "Darien Witting",
          rating: 1,
          comment:
            "Cillum labore sint duis proident mollit. Commodo mollit consequat occaecat nulla enim. Consequat sint aute ullamco id reprehenderit minim nisi enim fugiat Lorem exercitation.",
        },
        {
          name: "Jeanne Halvorson",
          rating: 2,
          comment:
            "Duis exercitation est commodo aliquip magna ut culpa amet ad pariatur labore ullamco. Est amet excepteur cupidatat dolor esse. Aliquip ullamco excepteur adipisicing occaecat excepteur.",
        },
        {
          name: "Maurine Stracke",
          rating: 4,
          comment:
            "Veniam excepteur adipisicing elit minim magna id nisi cupidatat excepteur nulla. Amet est reprehenderit et est minim sit dolore non. Velit laborum ea adipisicing consequat est excepteur culpa dolor aliqua duis non.",
        },
        {
          name: "Moriah Mills",
          rating: 3,
          comment:
            "Sint incididunt velit laboris culpa magna non nulla reprehenderit sit officia minim ut deserunt consectetur. Voluptate ipsum cupidatat pariatur dolor nisi laboris tempor do sunt veniam duis nisi. Irure aliquip fugiat elit veniam consectetur sunt ex id mollit consectetur.",
        },
        {
          name: "Justus Sipes",
          rating: 4,
          comment:
            "Reprehenderit eu mollit qui. Dolor duis labore dolor magna magna aute in officia labore. Sint velit aliquip fugiat in ipsum reprehenderit. Exercitation consequat occaecat ipsum laboris quis ipsum cillum excepteur sint esse qui consectetur proident ipsum.\nPariatur adipisicing anim reprehenderit qui cupidatat eiusmod qui adipisicing cupidatat minim nostrud mollit. Cillum ullamco aliqua officia tempor adipisicing veniam dolore. Proident sunt adipisicing et ut laborum.",
        },
      ],
      description:
        "SIM-Free, Model A19211 6.5-inch Super Retina HD display with OLED technology A12 Bionic chip with ...",
      discountPercentage: 17.94,
    },
    {
      name: "Samsung Universe 9",
      slug: "samsung-universe-9",
      category: "smartphones",
      thumbnail: "https://dummyjson.com/image/i/products/3/thumbnail.jpg",
      images: ["https://dummyjson.com/image/i/products/3/1.jpg"],
      price: 1249,
      stock: 36,
      brand: "Samsung",
      reviews: [
        {
          name: "Felicity O'Reilly",
          rating: 3,
          comment:
            "Quis cillum dolor magna nulla nisi eu. Velit labore commodo dolor excepteur magna dolore consequat tempor labore do nulla qui elit. Enim proident fugiat nulla aliquip incididunt reprehenderit elit et ad. Irure laboris aliquip minim ullamco dolor occaecat in proident nisi officia.\nEiusmod adipisicing adipisicing reprehenderit ut occaecat ipsum excepteur anim commodo commodo Lorem dolore et. Consectetur laboris ex occaecat fugiat velit elit aliquip consectetur ea elit laborum deserunt elit. Ea enim velit do velit est aliquip esse esse aliquip nulla laboris anim dolor elit. Labore occaecat esse qui ullamco ad ad ipsum mollit tempor sint veniam dolore ut proident.",
        },
        {
          name: "Tressa Weber",
          rating: 1,
          comment:
            "Lorem nulla est tempor. Dolore eu anim aute occaecat dolore nulla dolor est irure aliquip aliquip aute veniam aliquip elit.",
        },
        {
          name: "Edwina Ernser",
          rating: 4,
          comment:
            "Amet ea nulla occaecat sit eiusmod nostrud laboris ad.\nEu minim ut veniam pariatur aute mollit tempor occaecat. Proident nulla commodo est.",
        },
      ],
      description:
        "Samsung's new variant which goes beyond Galaxy to the Universe",
      discountPercentage: 15.46,
    },
    {
      name: "OPPOF19",
      slug: "oppof19",
      category: "smartphones",
      thumbnail: "https://dummyjson.com/image/i/products/4/thumbnail.jpg",
      images: [
        "https://dummyjson.com/image/i/products/4/1.jpg",
        "https://dummyjson.com/image/i/products/4/2.jpg",
        "https://dummyjson.com/image/i/products/4/3.jpg",
        "https://dummyjson.com/image/i/products/4/4.jpg",
        "https://dummyjson.com/image/i/products/4/thumbnail.jpg",
      ],
      price: 280,
      stock: 123,
      brand: "OPPO",
      reviews: [
        {
          name: "Felicita Gibson",
          rating: 1,
          comment:
            "Excepteur mollit non et commodo excepteur cillum. Dolor incididunt velit sit qui voluptate consequat.",
        },
        {
          name: "Bradford Prohaska",
          rating: 5,
          comment:
            "Aliquip ea veniam nostrud tempor laboris culpa commodo nostrud.\nNisi amet nulla nostrud laboris anim eiusmod duis laborum excepteur do esse culpa elit irure. Elit officia nostrud labore duis tempor Lorem. Consequat cillum anim enim laborum.",
        },
        {
          name: "Quinn Witting",
          rating: 5,
          comment:
            "Aute aliqua adipisicing amet minim aliqua minim ipsum occaecat. Mollit officia ut non eiusmod cillum magna consequat do ad eiusmod aute dolore commodo.\nAliqua nulla reprehenderit reprehenderit quis non Lorem irure culpa deserunt ea incididunt consequat exercitation. Do magna dolore deserunt tempor anim amet non magna adipisicing et veniam eu dolore consequat. In magna ipsum cupidatat quis.",
        },
      ],
      description: "OPPO F19 is officially announced on April 2021.",
      discountPercentage: 17.91,
    },
    {
      name: "Huawei P30",
      slug: "huawei-p30",
      category: "smartphones",
      thumbnail: "https://dummyjson.com/image/i/products/5/thumbnail.jpg",
      images: [
        "https://dummyjson.com/image/i/products/5/1.jpg",
        "https://dummyjson.com/image/i/products/5/2.jpg",
        "https://dummyjson.com/image/i/products/5/3.jpg",
      ],
      price: 499,
      stock: 32,
      brand: "Huawei",
      reviews: [
        {
          name: "Miles Cummerata",
          rating: 4,
          comment:
            "Ex aliqua fugiat et ad amet quis amet dolor nostrud quis. Qui laboris laboris exercitation tempor velit duis anim dolore elit do in ea culpa tempor cupidatat.\nLorem consequat et tempor minim reprehenderit adipisicing amet exercitation aute pariatur dolore velit ex. Lorem officia mollit laboris occaecat nostrud nostrud veniam est mollit voluptate culpa.",
        },
        {
          name: "Rachel Jacobson",
          rating: 5,
          comment:
            "Minim dolor laborum magna. Proident minim nisi anim sunt quis sint consequat nulla. Non laborum sint nostrud ut officia. Sunt adipisicing elit consectetur qui laborum pariatur anim id esse do magna id incididunt.\nVoluptate voluptate irure amet aute Lorem sint commodo id dolore proident proident esse commodo laborum.",
        },
        {
          name: "Coralie Boyle",
          rating: 1,
          comment:
            "Ut laboris laboris ullamco Lorem duis enim. Magna irure laboris voluptate aliquip. Aliquip enim pariatur enim dolor aute duis reprehenderit pariatur veniam exercitation. Ex anim sunt ullamco eu nisi qui laborum ut qui cillum irure reprehenderit ipsum labore non.",
        },
        {
          name: "Hal Keebler",
          rating: 3,
          comment:
            "Dolor laborum elit quis voluptate cupidatat elit elit sint do Lorem occaecat cillum cillum cillum duis. Ex dolor ea sit eiusmod consequat nulla ad quis non. Velit cillum magna magna est laboris quis.",
        },
        {
          name: "Felicity O'Reilly",
          rating: 3,
          comment:
            "Ipsum incididunt tempor quis duis exercitation. Enim deserunt est reprehenderit ea voluptate sit adipisicing non Lorem ullamco proident ut nostrud occaecat.\nVoluptate enim nostrud aliquip tempor do amet cillum ex esse ipsum anim culpa.",
        },
        {
          name: "Nora Sawayn",
          rating: 2,
          comment:
            "Consectetur eiusmod id officia aliqua ad ad adipisicing elit laboris mollit duis. Labore ipsum est dolore sit culpa do in ad. Cupidatat mollit nisi sunt aliquip cillum sit eu sunt excepteur irure ea laborum enim. Nostrud exercitation do laboris et.",
        },
        {
          name: "Tiara Rolfson",
          rating: 5,
          comment:
            "Consequat do magna labore ullamco id dolor aute reprehenderit aute deserunt nostrud aliquip Lorem laboris.\nDolore irure commodo aute incididunt Lorem proident voluptate occaecat aliquip dolore ipsum pariatur nostrud id. Nostrud nulla laboris laboris qui mollit id. Sunt ad et ullamco ea ullamco tempor excepteur Lorem ipsum velit non fugiat nulla labore.",
        },
        {
          name: "Gayle Krajcik",
          rating: 2,
          comment:
            "Nostrud elit qui irure ea laboris excepteur non ex consequat do aliquip reprehenderit nisi. Eu ipsum deserunt occaecat.\nEst esse reprehenderit officia. Fugiat excepteur eu tempor qui nostrud enim ex anim.",
        },
      ],
      description:
        "Huawei’s re-badged P30 Pro New Edition was officially unveiled yesterday in Germany and now the device has made its way to the UK.",
      discountPercentage: 10.58,
    },
    {
      name: "MacBook Pro",
      slug: "macbook-pro",
      category: "laptops",
      thumbnail: "https://dummyjson.com/image/i/products/6/thumbnail.png",
      images: [
        "https://dummyjson.com/image/i/products/6/1.png",
        "https://dummyjson.com/image/i/products/6/2.jpg",
        "https://dummyjson.com/image/i/products/6/3.png",
        "https://dummyjson.com/image/i/products/6/4.jpg",
      ],
      price: 1749,
      stock: 83,
      brand: "APPle",
      reviews: [
        {
          name: "Lempi Runte",
          rating: 2,
          comment:
            "Non enim ut occaecat non excepteur sunt consectetur laborum duis officia esse nostrud ad sit. Esse aliquip ut aliquip laborum Lorem in officia veniam. Laborum aliqua nostrud velit ullamco voluptate ut aliqua amet eu consequat proident.\nPariatur sit sunt reprehenderit consequat.",
        },
        {
          name: "Piper Schowalter",
          rating: 5,
          comment:
            "Eiusmod proident consectetur esse irure labore minim adipisicing magna quis proident in ad enim. Exercitation do cupidatat aute veniam labore velit commodo et sint sint veniam nulla consectetur.",
        },
        {
          name: "Rachel Jacobson",
          rating: 3,
          comment:
            "Veniam tempor esse excepteur sint sunt aute laboris ullamco eu reprehenderit elit cillum commodo. Adipisicing veniam nulla ad amet nisi dolore.\nNon est anim tempor. Ex enim reprehenderit magna cillum eu nulla amet esse enim duis est nulla ullamco ullamco.",
        },
        {
          name: "Jeanne Halvorson",
          rating: 4,
          comment:
            "Velit mollit velit consequat ex commodo ipsum incididunt culpa velit sit sint tempor. Nostrud in duis sunt aliquip laboris nostrud. Excepteur reprehenderit duis magna culpa laboris mollit mollit aute nostrud ad esse. Aute officia non consequat reprehenderit laborum.",
        },
        {
          name: "Twila Padberg",
          rating: 2,
          comment:
            "Consectetur nisi voluptate do id amet cillum elit laborum labore velit ex. Quis voluptate incididunt nulla elit dolor officia ea consequat culpa sint. Voluptate duis velit quis mollit commodo pariatur minim exercitation deserunt ut aliquip cillum. Labore do ipsum mollit duis sunt et Lorem irure in aute Lorem excepteur.\nSint cupidatat consectetur occaecat nulla. Incididunt ut quis mollit enim ullamco nostrud aliquip qui enim deserunt occaecat nulla et aute nisi. Eu Lorem incididunt aliquip do nulla consequat non nisi consectetur laboris veniam qui exercitation. Ad amet qui irure sint occaecat irure cillum.",
        },
        {
          name: "Oda Schmidt",
          rating: 2,
          comment:
            "Velit duis veniam eu eu id cupidatat labore ad dolor quis cillum eiusmod deserunt et. Officia incididunt ea culpa deserunt commodo. Tempor ipsum occaecat voluptate eu est in mollit mollit fugiat voluptate exercitation id exercitation. Velit labore proident ea non dolore labore aliquip id pariatur elit est Lorem.\nNon qui quis fugiat ullamco ex est occaecat ad id anim commodo cillum anim officia. Sint incididunt tempor sit reprehenderit irure ex. Dolor incididunt reprehenderit sit aliquip id nulla aute laboris. Voluptate et adipisicing proident excepteur.",
        },
        {
          name: "Salvatore Fisher",
          rating: 4,
          comment:
            "Do ea duis voluptate ea. Fugiat laborum sit incididunt id eiusmod veniam cupidatat dolor aliqua minim cupidatat minim. Aliqua eiusmod id proident ullamco sint ipsum exercitation minim ea deserunt.\nAliquip veniam consequat Lorem excepteur duis velit exercitation. Sunt magna anim quis est excepteur. Cupidatat mollit exercitation tempor do proident qui ea cupidatat Lorem enim eu nostrud do deserunt.",
        },
      ],
      description:
        "MacBook Pro 2021 with mini-LED display may launch between September, November",
      discountPercentage: 11.02,
    },
    {
      name: "Samsung Galaxy Book",
      slug: "samsung-galaxy-book",
      category: "laptops",
      thumbnail: "https://dummyjson.com/image/i/products/7/thumbnail.jpg",
      images: [
        "https://dummyjson.com/image/i/products/7/1.jpg",
        "https://dummyjson.com/image/i/products/7/2.jpg",
        "https://dummyjson.com/image/i/products/7/3.jpg",
        "https://dummyjson.com/image/i/products/7/thumbnail.jpg",
      ],
      price: 1499,
      stock: 50,
      brand: "Samsung",
      reviews: [
        {
          name: "Angelica Baumbach",
          rating: 4,
          comment:
            "Sint consectetur aute eu quis proident enim mollit quis aliquip.\nLaboris esse do qui duis ex eu eu aliqua labore exercitation enim.",
        },
        {
          name: "Delfina Ziemann",
          rating: 1,
          comment:
            "Proident minim quis pariatur ex velit eu eiusmod sunt duis adipisicing. Veniam tempor ad excepteur id ea ullamco anim dolore cillum. Laboris cillum consequat fugiat commodo fugiat reprehenderit id.",
        },
        {
          name: "Telly Spinka",
          rating: 4,
          comment:
            "Non ut aute minim ut qui pariatur proident commodo excepteur veniam consequat labore. Dolor id voluptate aliqua proident minim cupidatat amet pariatur. Ullamco velit aute est. Ut commodo veniam ea minim.",
        },
        {
          name: "Sheldon Quigley",
          rating: 4,
          comment:
            "In occaecat deserunt mollit elit aliqua occaecat reprehenderit elit dolore do cupidatat laborum ea.\nLabore qui non laboris deserunt ex quis.",
        },
        {
          name: "Marcel Jones",
          rating: 5,
          comment:
            "Cupidatat deserunt fugiat qui sunt Lorem ut magna tempor veniam veniam consequat dolor. Fugiat non occaecat et fugiat aute nisi consequat ea. Et fugiat ad eiusmod deserunt non occaecat consequat irure elit pariatur. Eiusmod minim esse amet enim.",
        },
        {
          name: "Pearl Blick",
          rating: 3,
          comment:
            "Anim voluptate ad qui aliqua nisi est exercitation deserunt culpa.",
        },
        {
          name: "Bradford Prohaska",
          rating: 3,
          comment:
            "Occaecat eiusmod laboris mollit aute veniam irure fugiat irure ullamco qui qui ea Lorem. Magna consequat ea deserunt. Excepteur nulla reprehenderit quis nostrud sint ut do eu incididunt anim magna est pariatur. Fugiat adipisicing occaecat culpa consequat ad laborum aliquip ut enim voluptate ullamco.",
        },
        {
          name: "Macy Greenfelder",
          rating: 2,
          comment:
            "Magna consectetur sint quis adipisicing id quis ut enim nostrud consectetur laborum anim quis fugiat. Dolor aute aliquip aliqua culpa ut incididunt fugiat voluptate occaecat proident.\nAute consequat officia sint in ipsum magna sunt exercitation consequat consequat cillum cillum proident exercitation.",
        },
        {
          name: "Gust Purdy",
          rating: 1,
          comment:
            "Sunt reprehenderit velit aliquip minim non proident aliquip excepteur cupidatat. Dolor consectetur culpa pariatur consequat esse officia esse adipisicing duis quis reprehenderit velit irure ipsum quis.\nId aliquip irure sunt. Anim sint minim eu pariatur eu. Labore ex magna tempor ipsum est ullamco ea nostrud. Lorem aliqua culpa reprehenderit esse sint.",
        },
      ],
      description:
        "Samsung Galaxy Book S (2020) Laptop With Intel Lakefield Chip, 8GB of RAM Launched",
      discountPercentage: 4.15,
    },
    {
      name: "Microsoft Surface Laptop 4",
      slug: "microsoft-surface-laptop-4",
      category: "laptops",
      thumbnail: "https://dummyjson.com/image/i/products/8/thumbnail.jpg",
      images: [
        "https://dummyjson.com/image/i/products/8/1.jpg",
        "https://dummyjson.com/image/i/products/8/2.jpg",
        "https://dummyjson.com/image/i/products/8/3.jpg",
        "https://dummyjson.com/image/i/products/8/4.jpg",
        "https://dummyjson.com/image/i/products/8/thumbnail.jpg",
      ],
      price: 1499,
      stock: 68,
      brand: "Microsoft Surface",
      reviews: [
        {
          name: "Deon Gutkowski",
          rating: 5,
          comment:
            "Tempor laboris duis aliqua nisi occaecat sit fugiat. Ullamco commodo sit velit laboris proident minim consectetur ea quis. Occaecat aute laboris ipsum amet. Minim laboris ad id cillum magna nisi.\nAmet cupidatat ut duis elit do veniam quis deserunt elit exercitation eiusmod est. Labore et aliquip aliquip ut velit minim qui nulla culpa esse do cillum consectetur quis irure. Occaecat Lorem Lorem laboris adipisicing elit elit irure ipsum amet exercitation.",
        },
        {
          name: "Sheldon Quigley",
          rating: 2,
          comment:
            "Aute tempor nisi excepteur velit in proident nisi qui officia anim cillum laboris ut laboris. Commodo culpa aliqua anim nulla consectetur eiusmod ad amet voluptate aute ipsum velit.",
        },
        {
          name: "Sincere Mueller",
          rating: 2,
          comment:
            "Aliqua ad reprehenderit eiusmod elit nulla non eu reprehenderit qui cillum ut.",
        },
        {
          name: "Delfina Ziemann",
          rating: 4,
          comment:
            "Cupidatat fugiat veniam minim est. Irure qui nostrud irure minim esse mollit esse proident elit magna veniam. Voluptate cillum eu aute non do incididunt ad sit est occaecat. Ex ea pariatur excepteur.\nElit cillum incididunt esse cupidatat tempor nisi nostrud esse.",
        },
        {
          name: "Nasir Leuschke",
          rating: 2,
          comment:
            "Qui dolor dolore ad minim magna. Anim Lorem sit excepteur magna et consequat.\nSunt qui aute ad est pariatur non quis commodo.",
        },
        {
          name: "Salvatore Fisher",
          rating: 2,
          comment:
            "Voluptate dolore veniam mollit culpa amet enim laborum velit excepteur.",
        },
        {
          name: "Everette Prohaska",
          rating: 1,
          comment:
            "Duis elit et nisi nostrud ea culpa ipsum deserunt quis enim ad culpa quis pariatur. Amet mollit consectetur nulla Lorem ea labore qui esse laboris aliqua quis nisi. Ullamco duis magna amet in in labore ut duis aliqua duis ex laboris Lorem sint adipisicing.\nDuis aliqua do voluptate dolor aliqua proident cillum in dolor do quis aliquip officia. Consectetur nulla ullamco proident. Dolore minim aliqua laboris consectetur Lorem aliqua voluptate minim ad nulla proident nisi occaecat veniam minim. Lorem mollit veniam laborum duis id eu proident velit nulla.",
        },
        {
          name: "Quinn Witting",
          rating: 4,
          comment:
            "Nisi voluptate Lorem nisi ipsum Lorem quis proident excepteur duis eu voluptate culpa veniam laborum. Officia nulla voluptate nulla ad consequat. Cupidatat elit laborum eu aliqua commodo sit aliqua culpa. Anim culpa excepteur sunt occaecat eu dolore laboris.",
        },
      ],
      description:
        "Style and speed. Stand out on HD video calls backed by Studio Mics. Capture ideas on the vibrant touchscreen.",
      discountPercentage: 10.23,
    },
    {
      name: "Infinix INBOOK",
      slug: "infinix-inbook",
      category: "laptops",
      thumbnail: "https://dummyjson.com/image/i/products/9/thumbnail.jpg",
      images: [
        "https://dummyjson.com/image/i/products/9/1.jpg",
        "https://dummyjson.com/image/i/products/9/2.png",
        "https://dummyjson.com/image/i/products/9/3.png",
        "https://dummyjson.com/image/i/products/9/4.jpg",
        "https://dummyjson.com/image/i/products/9/thumbnail.jpg",
      ],
      price: 1099,
      stock: 96,
      brand: "Infinix",
      reviews: [
        {
          name: "Doyle Ernser",
          rating: 1,
          comment:
            "Lorem non qui reprehenderit esse magna et excepteur duis est amet esse dolore ipsum do.\nSint veniam ut velit irure laborum veniam deserunt duis nisi occaecat. Occaecat adipisicing velit ex commodo deserunt adipisicing. Ea quis consequat cupidatat in ex ipsum veniam culpa incididunt. Et magna consequat aliquip ipsum.",
        },
        {
          name: "Bradford Prohaska",
          rating: 5,
          comment:
            "Aute aliquip est et deserunt dolore cillum aliquip pariatur eiusmod laboris do velit.\nLabore duis culpa anim commodo tempor qui labore aliquip proident ipsum nostrud cillum consequat tempor sunt. Duis sunt quis eiusmod nisi et consequat adipisicing ipsum commodo tempor consequat. Eu cillum qui dolore laboris non cupidatat ea. Culpa magna veniam nulla cupidatat deserunt minim quis aute anim amet nulla nulla.",
        },
        {
          name: "Ewell Mueller",
          rating: 2,
          comment:
            "Tempor exercitation est id exercitation ex minim. Qui fugiat sint ipsum dolore occaecat aliquip magna in amet eu ullamco non magna enim.\nDolor sint anim elit est magna incididunt et magna elit sint. Sit laboris culpa laborum ut esse id Lorem nisi esse anim reprehenderit duis.",
        },
      ],
      description:
        "Infinix Inbook X1 Ci3 10th 8GB 256GB 14 Win10 Grey – 1 Year Warranty",
      discountPercentage: 11.83,
    },
    {
      name: "HP Pavilion 15-DK1056WM",
      slug: "hp-pavilion-15-dk1056wm",
      category: "laptops",
      thumbnail: "https://dummyjson.com/image/i/products/10/thumbnail.jpeg",
      images: [
        "https://dummyjson.com/image/i/products/10/1.jpg",
        "https://dummyjson.com/image/i/products/10/2.jpg",
        "https://dummyjson.com/image/i/products/10/3.jpg",
        "https://dummyjson.com/image/i/products/10/thumbnail.jpeg",
      ],
      price: 1099,
      stock: 89,
      brand: "HP Pavilion",
      reviews: [],
      description:
        "HP Pavilion 15-DK1056WM Gaming Laptop 10th Gen Core i5, 8GB, 256GB SSD, GTX 1650 4GB, Windows 10",
      discountPercentage: 6.18,
    },
    {
      name: "perfume Oil",
      slug: "perfume-oil",
      category: "fragrances",
      thumbnail: "https://dummyjson.com/image/i/products/11/thumbnail.jpg",
      images: [
        "https://dummyjson.com/image/i/products/11/1.jpg",
        "https://dummyjson.com/image/i/products/11/2.jpg",
        "https://dummyjson.com/image/i/products/11/3.jpg",
        "https://dummyjson.com/image/i/products/11/thumbnail.jpg",
      ],
      price: 13,
      stock: 65,
      brand: "Impression of Acqua Di Gio",
      reviews: [
        {
          name: "Terrill Hills",
          rating: 5,
          comment:
            "Esse ad ipsum laboris elit magna dolore velit esse Lorem sit cupidatat est incididunt.",
        },
        {
          name: "Oleta Abbott",
          rating: 5,
          comment:
            "Commodo aute ullamco ullamco.\nUllamco voluptate pariatur in est reprehenderit aliqua veniam amet amet cillum. Non laborum fugiat cillum mollit pariatur in adipisicing culpa adipisicing fugiat aliquip. Laborum duis aliqua qui.",
        },
        {
          name: "Angelica Baumbach",
          rating: 3,
          comment:
            "Occaecat anim dolore consequat. Nisi adipisicing minim reprehenderit exercitation ut do. Exercitation fugiat ex mollit consectetur consequat non laboris dolore proident ex ut adipisicing.\nIpsum minim reprehenderit do laborum mollit aliquip elit. Do consequat culpa ad aliqua dolor adipisicing esse qui consectetur duis.",
        },
        {
          name: "Nora Sawayn",
          rating: 4,
          comment:
            "Laboris Lorem tempor ipsum eiusmod.\nReprehenderit excepteur laborum id proident proident eiusmod sint ea velit ullamco minim dolor. Minim fugiat deserunt irure magna do sint nisi qui. Minim aute velit ea anim.",
        },
        {
          name: "Jeanne O'Keefe",
          rating: 4,
          comment:
            "Consequat fugiat deserunt voluptate eu enim consectetur eiusmod velit amet sunt consequat exercitation ea deserunt. Non enim laborum officia cillum et exercitation nisi eu labore eu occaecat nostrud duis sint laborum. Velit amet nisi velit nostrud ullamco tempor irure.",
        },
        {
          name: "Macy Greenfelder",
          rating: 1,
          comment: "Ipsum proident consectetur officia.",
        },
        {
          name: "Jeanne Halvorson",
          rating: 2,
          comment: "Fugiat Lorem exercitation adipisicing ipsum.",
        },
        {
          name: "Mozell O'Connell",
          rating: 5,
          comment:
            "Ullamco esse tempor reprehenderit nisi reprehenderit esse est. Labore nostrud dolor aliquip adipisicing fugiat exercitation dolore do. Ea dolor Lorem fugiat in velit.",
        },
        {
          name: "Ewell Mueller",
          rating: 5,
          comment:
            "Incididunt exercitation sint occaecat ea aliqua ut sit est id magna tempor nisi consequat consectetur non. Cupidatat elit nostrud sunt sunt in ipsum nostrud nostrud laboris.",
        },
      ],
      description:
        "Mega Discount, Impression of Acqua Di Gio by GiorgioArmani concentrated attar perfume Oil",
      discountPercentage: 8.4,
    },

    {
      name: "Key Holder",
      slug: "key-holder",
      category: "home-decoration",
      thumbnail: "https://dummyjson.com/image/i/products/30/thumbnail.jpg",
      images: [
        "https://dummyjson.com/image/i/products/30/1.jpg",
        "https://dummyjson.com/image/i/products/30/2.jpg",
        "https://dummyjson.com/image/i/products/30/3.jpg",
        "https://dummyjson.com/image/i/products/30/thumbnail.jpg",
      ],
      price: 30,
      stock: 54,
      brand: "Golden",
      reviews: [
        {
          name: "Felicity O'Reilly",
          rating: 5,
          comment:
            "Est commodo elit adipisicing quis reprehenderit ut esse duis non consectetur veniam eu commodo in.",
        },
        {
          name: "Eleanora Price",
          rating: 5,
          comment:
            "Enim do fugiat sit irure irure eiusmod sunt. Magna eu cupidatat velit. Tempor non deserunt esse officia et exercitation.",
        },
        {
          name: "Delfina Ziemann",
          rating: 2,
          comment:
            "Magna mollit nulla aliqua. Ipsum eiusmod officia excepteur ad culpa ad quis aute adipisicing qui consectetur ullamco dolor tempor ipsum. Duis occaecat sint in adipisicing ad mollit sint.",
        },
        {
          name: "Angelica Metz",
          rating: 1,
          comment:
            "Ut nostrud velit adipisicing consectetur ea officia non reprehenderit elit nostrud consectetur ea. Ipsum nisi dolor anim culpa adipisicing labore minim est Lorem irure id. Sint minim aute Lorem consectetur laborum laborum ad aute nisi velit excepteur sunt ea adipisicing.\nConsequat sint sunt id sint nisi labore dolor sint occaecat fugiat. Ullamco commodo eu eu ipsum consequat ex commodo excepteur elit eiusmod consectetur aliquip. Amet nulla officia duis ex laboris ut deserunt adipisicing tempor amet ad tempor Lorem nostrud officia. Eu tempor sunt sit exercitation adipisicing ut veniam aliqua proident veniam deserunt dolore qui qui nulla.",
        },
        {
          name: "Jacklyn Schimmel",
          rating: 4,
          comment:
            "Sunt ea elit tempor proident veniam veniam labore id non eiusmod pariatur. Sit id Lorem occaecat adipisicing dolor. Commodo eu aliquip veniam.\nEx sit commodo excepteur nostrud est reprehenderit exercitation id dolore ut commodo.",
        },
        {
          name: "Sincere Mueller",
          rating: 5,
          comment:
            "Exercitation tempor laborum enim est elit ullamco ad officia esse laboris dolor.\nAliqua aute cillum amet in pariatur ipsum do occaecat. Officia ex cillum aliqua sit elit magna voluptate ea ullamco consectetur ex enim non. Pariatur incididunt nulla voluptate id laborum non qui.",
        },
        {
          name: "Telly Spinka",
          rating: 4,
          comment:
            "Dolore mollit minim officia fugiat ipsum esse adipisicing eiusmod. Lorem reprehenderit eiusmod ullamco proident ipsum reprehenderit sunt Lorem nisi sunt. Nostrud incididunt magna aute esse voluptate mollit labore aliquip laboris sunt eiusmod eiusmod excepteur nulla. Do deserunt tempor eiusmod in aliqua consectetur culpa Lorem id mollit quis.\nSunt ipsum tempor labore reprehenderit officia.",
        },
        {
          name: "Twila Padberg",
          rating: 4,
          comment:
            "Id minim ipsum amet excepteur amet nulla culpa magna. Reprehenderit veniam aliqua eiusmod excepteur proident nostrud qui mollit deserunt est elit. Dolor duis eiusmod exercitation aliqua ad sint consectetur voluptate reprehenderit quis nostrud Lorem eu elit.\nAdipisicing cillum cillum ad in pariatur tempor culpa laboris deserunt aute amet laborum Lorem. Aute minim officia irure tempor enim. In sint velit incididunt commodo. Et culpa esse sint adipisicing nostrud commodo aliquip exercitation minim ex anim.",
        },
      ],
      description:
        "Attractive DesignMetallic materialFour key hooksReliable & DurablePremium Quality",
      discountPercentage: 2.92,
    },
    {
      name: "Mornadi Velvet Bed",
      slug: "mornadi-velvet-bed",
      category: "furniture",
      thumbnail: "https://dummyjson.com/image/i/products/31/thumbnail.jpg",
      images: [
        "https://dummyjson.com/image/i/products/31/1.jpg",
        "https://dummyjson.com/image/i/products/31/2.jpg",
        "https://dummyjson.com/image/i/products/31/3.jpg",
        "https://dummyjson.com/image/i/products/31/4.jpg",
        "https://dummyjson.com/image/i/products/31/thumbnail.jpg",
      ],
      price: 40,
      stock: 140,
      brand: "Furniture Bed Set",
      reviews: [
        {
          name: "Sincere Mueller",
          rating: 2,
          comment:
            "Adipisicing aliquip irure aliquip fugiat eu aute tempor ullamco. Ex ut labore dolore enim ipsum cillum et aliqua anim reprehenderit. Tempor ipsum nulla deserunt eu labore in amet laboris nostrud aute consequat qui aliquip adipisicing.",
        },
        {
          name: "Enoch Lynch",
          rating: 1,
          comment:
            "Velit mollit pariatur aliquip elit mollit officia adipisicing aliquip ea irure ullamco.\nAnim qui pariatur ad sunt consequat dolor elit consequat dolore ullamco adipisicing.",
        },
        {
          name: "Griffin Braun",
          rating: 4,
          comment:
            "Proident do cillum consequat cillum.\nId est ad irure quis amet culpa non quis occaecat do ad excepteur est laborum officia. Proident consequat fugiat irure dolor cupidatat sit veniam elit ut deserunt cillum excepteur.",
        },
        {
          name: "Salvatore Fisher",
          rating: 5,
          comment:
            "Occaecat ullamco proident esse occaecat minim nulla sit. Ullamco aliquip cupidatat est reprehenderit anim.",
        },
      ],
      description:
        "Mornadi Velvet Bed Base with Headboard Slats Support Classic Style Bedroom Furniture Bed Set",
      discountPercentage: 17,
    },
    {
      name: "Sofa for Coffe Cafe",
      slug: "sofa-for-coffe-cafe",
      category: "furniture",
      thumbnail: "https://dummyjson.com/image/i/products/32/thumbnail.jpg",
      images: [
        "https://dummyjson.com/image/i/products/32/1.jpg",
        "https://dummyjson.com/image/i/products/32/2.jpg",
        "https://dummyjson.com/image/i/products/32/3.jpg",
        "https://dummyjson.com/image/i/products/32/thumbnail.jpg",
      ],
      price: 50,
      stock: 30,
      brand: "Ratttan Outdoor",
      reviews: [
        {
          name: "Tevin Prohaska",
          rating: 1,
          comment:
            "Consectetur Lorem amet cillum qui nisi consectetur excepteur eu duis. Incididunt ipsum cillum ullamco voluptate est magna commodo.",
        },
        {
          name: "Lee Schmidt",
          rating: 2,
          comment:
            "Et officia irure enim. Qui aliqua nostrud ipsum ex et quis reprehenderit adipisicing anim veniam anim nulla velit.",
        },
        {
          name: "Amos Weimann",
          rating: 5,
          comment: "Commodo consequat incididunt in aliquip.",
        },
        {
          name: "Emely Schmitt",
          rating: 1,
          comment:
            "Amet aliqua proident consectetur tempor fugiat magna in eiusmod reprehenderit. Ex fugiat ut velit ex proident minim occaecat pariatur enim tempor velit laborum quis ex.\nFugiat occaecat sint irure commodo officia est. Velit reprehenderit Lorem minim minim nostrud laboris voluptate occaecat consequat ipsum sunt et anim adipisicing culpa.",
        },
        {
          name: "Lempi Runte",
          rating: 2,
          comment: "Anim do ut ut anim aute enim ut officia.",
        },
        {
          name: "Mozell O'Connell",
          rating: 2,
          comment: "Ad quis in laboris do esse.",
        },
        {
          name: "Coralie Boyle",
          rating: 2,
          comment:
            "Ex incididunt nostrud est anim ullamco incididunt. Culpa aute pariatur dolor mollit deserunt. Sunt magna aute adipisicing ad ullamco. Veniam Lorem nisi nisi sit voluptate esse laborum esse minim.",
        },
        {
          name: "Nicklaus Cruickshank",
          rating: 2,
          comment:
            "Laboris anim sint eiusmod ad do. Ea aute pariatur laborum proident adipisicing ex minim anim magna. Consectetur consectetur elit esse anim consequat laborum ea aliqua voluptate laboris ullamco. Nostrud ex pariatur ex.\nMagna quis excepteur dolore exercitation.",
        },
        {
          name: "Eleanora Price",
          rating: 1,
          comment:
            "Veniam magna consectetur sit cupidatat irure ea nulla magna aliquip est dolor exercitation aliquip consectetur non. Dolore et esse magna cillum anim est cupidatat commodo et aliqua veniam veniam. Excepteur commodo commodo exercitation culpa eu cupidatat voluptate eiusmod amet eiusmod. In commodo nostrud nisi laborum commodo elit minim enim.",
        },
        {
          name: "Bradford Prohaska",
          rating: 1,
          comment:
            "Eu ipsum in nostrud minim et proident consectetur minim ex sit. Eu ad aute eiusmod cillum amet velit.",
        },
      ],
      description:
        "Ratttan Outdoor furniture Set Waterproof  Rattan Sofa for Coffe Cafe",
      discountPercentage: 15.59,
    },
    {
      name: "3 Tier Corner Shelves",
      slug: "3-tier-corner-shelves",
      category: "furniture",
      thumbnail: "https://dummyjson.com/image/i/products/33/thumbnail.jpg",
      images: [
        "https://dummyjson.com/image/i/products/33/1.jpg",
        "https://dummyjson.com/image/i/products/33/2.jpg",
        "https://dummyjson.com/image/i/products/33/3.jpg",
        "https://dummyjson.com/image/i/products/33/4.jpg",
        "https://dummyjson.com/image/i/products/33/thumbnail.jpg",
      ],
      price: 700,
      stock: 106,
      brand: "Kitchen Shelf",
      reviews: [
        {
          name: "Rachel Jacobson",
          rating: 2,
          comment:
            "Nostrud laborum duis consequat sit irure ex do ipsum ullamco commodo adipisicing deserunt magna.",
        },
        {
          name: "Elbert Gottlieb",
          rating: 5,
          comment:
            "Ullamco sint qui voluptate esse cillum deserunt aliqua fugiat reprehenderit qui sint magna.\nNon minim aliquip consequat esse commodo id sint non sunt elit dolor labore non.",
        },
      ],
      description:
        "3 Tier Corner Shelves | 3 PCs Wall Mount Kitchen Shelf | Floating Bedroom Shelf",
      discountPercentage: 17,
    },
    {
      name: "Plastic Table",
      slug: "plastic-table",
      category: "furniture",
      thumbnail: "https://dummyjson.com/image/i/products/34/thumbnail.jpg",
      images: [
        "https://dummyjson.com/image/i/products/34/1.jpg",
        "https://dummyjson.com/image/i/products/34/2.jpg",
        "https://dummyjson.com/image/i/products/34/3.jpg",
        "https://dummyjson.com/image/i/products/34/4.jpg",
        "https://dummyjson.com/image/i/products/34/thumbnail.jpg",
      ],
      price: 50,
      stock: 136,
      brand: "Multi Purpose",
      reviews: [
        {
          name: "Amos Weimann",
          rating: 4,
          comment:
            "Esse excepteur aliquip et do et irure qui adipisicing. Laboris esse qui cupidatat cillum non proident. Adipisicing quis nostrud magna duis nostrud cillum occaecat proident aliquip. Irure exercitation irure consectetur eiusmod est mollit anim sint adipisicing proident labore amet.\nConsectetur exercitation enim cupidatat sunt exercitation tempor excepteur minim qui minim. Lorem consectetur reprehenderit adipisicing dolore reprehenderit.",
        },
        {
          name: "Jasmin Hermiston",
          rating: 5,
          comment:
            "Consectetur cillum aute reprehenderit quis laborum et occaecat mollit velit et id est elit nisi ut. Fugiat eiusmod fugiat ullamco ipsum quis minim. Do do tempor esse ipsum tempor excepteur ad.\nCillum non velit elit minim.",
        },
      ],
      description:
        "Very good quality plastic table for multi purpose now in reasonable price",
      discountPercentage: 4,
    },
    {
      name: "3 DOOR PORTABLE",
      slug: "3-door-portable",
      category: "furniture",
      thumbnail: "https://dummyjson.com/image/i/products/35/thumbnail.jpg",
      images: [
        "https://dummyjson.com/image/i/products/35/1.jpg",
        "https://dummyjson.com/image/i/products/35/2.jpg",
        "https://dummyjson.com/image/i/products/35/3.jpg",
        "https://dummyjson.com/image/i/products/35/4.jpg",
        "https://dummyjson.com/image/i/products/35/thumbnail.jpg",
      ],
      price: 41,
      stock: 68,
      brand: "AmnaMart",
      reviews: [],
      description:
        "Material: Stainless Steel and Fabric  Item Size: 110 cm x 45 cm x 175 cm Package Contents: 1 Storage Wardrobe",
      discountPercentage: 7.98,
    },
    {
      name: "Sleeve Shirt Womens",
      slug: "sleeve-shirt-womens",
      category: "tops",
      thumbnail: "https://dummyjson.com/image/i/products/36/thumbnail.jpg",
      images: [
        "https://dummyjson.com/image/i/products/36/1.jpg",
        "https://dummyjson.com/image/i/products/36/2.webp",
        "https://dummyjson.com/image/i/products/36/3.webp",
        "https://dummyjson.com/image/i/products/36/4.jpg",
        "https://dummyjson.com/image/i/products/36/thumbnail.jpg",
      ],
      price: 90,
      stock: 39,
      brand: "Professional Wear",
      reviews: [
        {
          name: "Macy Greenfelder",
          rating: 2,
          comment:
            "Pariatur occaecat sunt sit sunt pariatur. Sunt labore est ipsum id. Labore tempor anim minim dolor mollit amet excepteur ea nulla et magna sit aliqua.",
        },
        {
          name: "Rory Conn",
          rating: 1,
          comment:
            "Dolor exercitation in sit ex. Cillum pariatur in magna officia culpa do minim consectetur et duis exercitation. Sint nisi proident eu excepteur labore fugiat sit officia tempor deserunt consequat et. Voluptate laboris ex proident ut ullamco occaecat minim proident consequat enim tempor ut cillum sit.",
        },
        {
          name: "Deanna Glover",
          rating: 1,
          comment:
            "Et tempor adipisicing aliquip. Lorem mollit excepteur qui amet aliquip laboris officia mollit aliquip officia. Anim nisi velit laborum qui ea excepteur nulla eu eu non.",
        },
        {
          name: "Moriah Mills",
          rating: 4,
          comment:
            "Nulla fugiat ullamco aliqua fugiat non consequat magna ut irure excepteur. Pariatur dolor nulla consectetur est consequat sunt in deserunt cillum eu ea officia. Minim cupidatat ullamco et duis minim mollit ex excepteur aute ex consequat est.",
        },
        {
          name: "Coralie Boyle",
          rating: 5,
          comment:
            "Sit ut est veniam magna enim sunt tempor ipsum. Reprehenderit laborum consequat commodo aliquip officia voluptate culpa Lorem velit duis.",
        },
        {
          name: "Jeanne O'Keefe",
          rating: 5,
          comment:
            "Esse occaecat ad et reprehenderit dolor aliqua. Incididunt dolore minim duis deserunt sit aliqua consequat commodo qui dolor exercitation dolore sit.",
        },
      ],
      description:
        "Cotton Solid Color Professional Wear Sleeve Shirt Womens Work Blouses Wholesale Clothing Casual Plain Custom Top OEM Customized",
      discountPercentage: 10.89,
    },

    {
      name: "Leather Straps Wristwatch",
      slug: "leather-straps-wristwatch",
      category: "mens-watches",
      thumbnail: "https://dummyjson.com/image/i/products/61/thumbnail.jpg",
      images: [
        "https://dummyjson.com/image/i/products/61/1.jpg",
        "https://dummyjson.com/image/i/products/61/2.png",
        "https://dummyjson.com/image/i/products/61/3.jpg",
      ],
      price: 120,
      stock: 91,
      brand: "Naviforce",
      reviews: [
        {
          name: "Anais Yundt",
          rating: 5,
          comment:
            "Adipisicing magna fugiat laborum excepteur Lorem eiusmod. Do nulla proident nulla adipisicing ex voluptate. Sint ut consequat ad ea est dolor ea laborum ipsum eu mollit ipsum aute. Cupidatat fugiat est minim laboris enim proident ut laboris labore in veniam ipsum.\nDo minim nulla duis dolor.",
        },
        {
          name: "Darien Witting",
          rating: 1,
          comment:
            "Elit fugiat tempor incididunt duis adipisicing laborum elit eu nisi est laboris ea. Aute do dolor commodo tempor adipisicing dolor irure cupidatat velit dolor nostrud velit Lorem.\nOccaecat anim proident aute aliqua mollit veniam elit adipisicing culpa irure nulla fugiat commodo. Pariatur nulla cupidatat nisi.",
        },
        {
          name: "Angelica Metz",
          rating: 5,
          comment:
            "Aliquip do irure do culpa sit ex est labore officia. Aute est id quis sit esse incididunt deserunt excepteur enim cillum eu eu sunt mollit enim. Anim velit qui laboris aliquip non tempor sit sint ullamco quis consectetur. Officia est sit duis quis amet anim veniam do incididunt cillum eiusmod occaecat.\nElit reprehenderit nisi magna commodo consectetur exercitation officia. Irure irure irure aliquip est non sunt. Mollit magna commodo anim eiusmod cupidatat.",
        },
        {
          name: "Elbert Gottlieb",
          rating: 5,
          comment:
            "Excepteur officia laboris labore enim aliquip. Incididunt occaecat do velit nulla aliqua sint est laborum culpa sunt do nulla velit est. Labore non nisi velit eiusmod officia laborum sunt.\nCupidatat commodo cupidatat officia ex sit culpa. Sint elit commodo officia irure eu eiusmod cillum commodo quis mollit id duis in. Consequat minim proident magna ut nulla ullamco aliquip Lorem exercitation eiusmod. Quis quis laborum in dolor elit ipsum do ex Lorem consequat eiusmod ea sint velit.",
        },
      ],
      description: "Style:Sport ,Clasp:Buckles ,Water Resistance Depth:3Bar",
      discountPercentage: 7.14,
    },
    {
      name: "Waterproof Leather Brand Watch",
      slug: "waterproof-leather-brand-watch",
      category: "mens-watches",
      thumbnail: "https://dummyjson.com/image/i/products/62/thumbnail.jpg",
      images: [
        "https://dummyjson.com/image/i/products/62/1.jpg",
        "https://dummyjson.com/image/i/products/62/2.jpg",
      ],
      price: 46,
      stock: 95,
      brand: "SKMEI 9117",
      reviews: [],
      description:
        "Watch Crown With Environmental IPS Bronze Electroplating; Display system of 12 hours",
      discountPercentage: 3.15,
    },
    {
      name: "Royal Blue Premium Watch",
      slug: "royal-blue-premium-watch",
      category: "mens-watches",
      thumbnail: "https://dummyjson.com/image/i/products/63/thumbnail.webp",
      images: [
        "https://dummyjson.com/image/i/products/63/1.jpg",
        "https://dummyjson.com/image/i/products/63/2.jpg",
        "https://dummyjson.com/image/i/products/63/3.png",
        "https://dummyjson.com/image/i/products/63/4.jpeg",
      ],
      price: 50,
      stock: 142,
      brand: "SKMEI 9117",
      reviews: [
        {
          name: "Allene Harber",
          rating: 3,
          comment:
            "Velit sit Lorem magna mollit ex consequat sit enim Lorem. Dolore excepteur exercitation ullamco est veniam ea dolore duis cillum laborum nulla laborum duis.\nAnim dolore et laborum eiusmod consectetur aute culpa id deserunt in exercitation. Minim officia amet qui.",
        },
        {
          name: "Enoch Lynch",
          rating: 2,
          comment:
            "Id mollit esse ullamco proident. Amet labore sint velit elit excepteur dolor nostrud. Pariatur proident aliquip voluptate culpa minim in amet. Exercitation sint reprehenderit fugiat aliqua eu incididunt sint labore consequat exercitation aliqua.\nAliquip incididunt eiusmod eiusmod ipsum esse esse magna.",
        },
        {
          name: "Marcel Jones",
          rating: 1,
          comment:
            "Sint id et velit magna minim ex consectetur officia laboris id elit deserunt exercitation dolore. Irure deserunt est qui et sint enim elit aute commodo eiusmod ea voluptate laboris ea. Do et officia commodo ullamco mollit dolor irure voluptate consequat pariatur est mollit cillum sunt. Laboris id aliquip adipisicing officia.",
        },
        {
          name: "Nasir Leuschke",
          rating: 5,
          comment:
            "Et ex anim do labore aute consequat sint duis ea deserunt ipsum tempor dolor cillum mollit. Sint eu occaecat mollit velit nulla anim adipisicing enim reprehenderit cillum minim eu.\nSint tempor cillum id pariatur ullamco quis. Laborum exercitation quis eu ad mollit cupidatat ea labore in consectetur in irure do consequat. Exercitation exercitation aliqua consectetur mollit incididunt laborum veniam. Id adipisicing officia laboris mollit consectetur minim est officia id id nulla laboris nisi.",
        },
      ],
      description:
        "Men Silver Chain Royal Blue Premium Watch Latest Analog Watch",
      discountPercentage: 2.56,
    },
    {
      name: "Leather Strap Skeleton Watch",
      slug: "leather-strap-skeleton-watch",
      category: "mens-watches",
      thumbnail: "https://dummyjson.com/image/i/products/64/thumbnail.jpg",
      images: [
        "https://dummyjson.com/image/i/products/64/1.jpg",
        "https://dummyjson.com/image/i/products/64/2.webp",
        "https://dummyjson.com/image/i/products/64/3.jpg",
        "https://dummyjson.com/image/i/products/64/thumbnail.jpg",
      ],
      price: 46,
      stock: 61,
      brand: "Strap Skeleton",
      reviews: [
        {
          name: "Delfina Ziemann",
          rating: 5,
          comment:
            "Voluptate incididunt incididunt adipisicing aliqua labore Lorem eiusmod consequat do in tempor labore. Ullamco mollit tempor officia ad culpa cupidatat est aliqua ea consequat esse minim et officia est. Enim nulla officia aute enim est ipsum. Veniam aliquip anim sit esse sit quis minim qui ea adipisicing esse occaecat sunt pariatur commodo.\nSit do eiusmod Lorem tempor nostrud voluptate sint fugiat ut. Incididunt in excepteur occaecat ullamco aute quis veniam. Cillum anim exercitation id nulla in ea culpa sint sit dolor eiusmod duis.",
        },
        {
          name: "Gayle Krajcik",
          rating: 2,
          comment:
            "Elit id exercitation quis incididunt eiusmod excepteur id cillum. Sit dolore ea laboris veniam consectetur laboris duis excepteur labore cupidatat eiusmod. Qui elit non amet mollit non anim irure amet eiusmod ullamco mollit ullamco. Do non voluptate eu ullamco deserunt et qui veniam et veniam nisi qui magna.\nCupidatat tempor minim id pariatur minim id ut ut incididunt excepteur fugiat. Consectetur nulla Lorem do esse dolor sunt nisi aliquip ea consectetur ex Lorem labore. Sunt et commodo elit Lorem commodo esse aute qui.",
        },
        {
          name: "Griffin Braun",
          rating: 4,
          comment:
            "Fugiat mollit mollit sint est officia in anim sit tempor aute. Id amet dolor excepteur ut culpa esse occaecat culpa ullamco esse. Velit labore ipsum amet cupidatat est nisi id non duis sunt ex. Lorem minim laborum proident ut irure minim nulla labore eu culpa.\nAliqua sit laborum do et aliquip dolor aliquip consequat. Aute id labore adipisicing. Ipsum deserunt et labore. Cupidatat duis sunt ad laborum nisi anim sit sint in ipsum laborum voluptate.",
        },
        {
          name: "Pearl Blick",
          rating: 1,
          comment:
            "Aute ut et sunt in qui aliquip magna tempor.\nLabore dolor nostrud incididunt. Eu aliquip ea exercitation anim velit ullamco aliquip.",
        },
        {
          name: "Terrell Schuppe",
          rating: 3,
          comment:
            "Fugiat id sit sunt magna enim. Voluptate voluptate labore nostrud incididunt reprehenderit et. Minim occaecat dolore culpa qui ea do ea officia ut reprehenderit minim cupidatat reprehenderit.\nIrure incididunt ex nulla sit do exercitation. Nostrud dolore cillum id est ex exercitation et et aliqua deserunt ex. Sunt enim commodo est sint veniam ut ipsum mollit sunt magna qui in qui in.",
        },
      ],
      description:
        "Leather Strap Skeleton Watch for Men - Stylish and Latest Design",
      discountPercentage: 10.2,
    },
    {
      name: "Stainless Steel Wrist Watch",
      slug: "stainless-steel-wrist-watch",
      category: "mens-watches",
      thumbnail: "https://dummyjson.com/image/i/products/65/thumbnail.webp",
      images: [
        "https://dummyjson.com/image/i/products/65/1.jpg",
        "https://dummyjson.com/image/i/products/65/2.webp",
        "https://dummyjson.com/image/i/products/65/3.jpg",
        "https://dummyjson.com/image/i/products/65/4.webp",
        "https://dummyjson.com/image/i/products/65/thumbnail.webp",
      ],
      price: 47,
      stock: 94,
      brand: "Stainless",
      reviews: [
        {
          name: "Nora Sawayn",
          rating: 2,
          comment:
            "Dolore dolore occaecat laborum. Culpa aute laborum est est ad officia mollit duis aliquip in veniam Lorem amet voluptate.",
        },
        {
          name: "Frankie Hudson",
          rating: 3,
          comment:
            "Voluptate anim magna occaecat laborum voluptate do consequat consectetur ullamco ex exercitation laborum voluptate. Nisi ipsum ea reprehenderit ea.",
        },
      ],
      description:
        "Stylish Watch For Man (Luxury) Classy Men's Stainless Steel Wrist Watch - Box Packed",
      discountPercentage: 17.79,
    },
    {
      name: "Steel Analog Couple Watches",
      slug: "steel-analog-couple-watches",
      category: "womens-watches",
      thumbnail: "https://dummyjson.com/image/i/products/66/thumbnail.jpg",
      images: [
        "https://dummyjson.com/image/i/products/66/1.jpg",
        "https://dummyjson.com/image/i/products/66/2.jpg",
        "https://dummyjson.com/image/i/products/66/3.jpg",
        "https://dummyjson.com/image/i/products/66/4.JPG",
        "https://dummyjson.com/image/i/products/66/thumbnail.jpg",
      ],
      price: 35,
      stock: 24,
      brand: "Eastern Watches",
      reviews: [],
      description: "Elegant design, Stylish ,Unique & Trendy,Comfortable wear",
      discountPercentage: 3.23,
    },
    {
      name: "Fashion Magnetic Wrist Watch",
      slug: "fashion-magnetic-wrist-watch",
      category: "womens-watches",
      thumbnail: "https://dummyjson.com/image/i/products/67/thumbnail.jpg",
      images: [
        "https://dummyjson.com/image/i/products/67/1.jpg",
        "https://dummyjson.com/image/i/products/67/2.jpg",
        "https://dummyjson.com/image/i/products/67/3.jpg",
        "https://dummyjson.com/image/i/products/67/4.jpg",
        "https://dummyjson.com/image/i/products/67/thumbnail.jpg",
      ],
      price: 60,
      stock: 46,
      brand: "Eastern Watches",
      reviews: [
        {
          name: "Arne Jacobs",
          rating: 4,
          comment:
            "Laborum veniam nisi nostrud duis cillum ut aliquip. Labore esse ullamco officia mollit cillum incididunt consequat. Incididunt tempor ad commodo anim adipisicing et occaecat qui cillum laborum est in ipsum nostrud excepteur.",
        },
        {
          name: "Everette Prohaska",
          rating: 3,
          comment:
            "Est sit ullamco ipsum proident sint ad laborum velit minim sit dolore minim voluptate non. Officia velit cupidatat amet cupidatat eiusmod minim id nostrud sunt cupidatat laboris. Mollit consequat mollit ut deserunt dolor consectetur ex velit commodo cupidatat consectetur culpa deserunt.\nIncididunt officia cillum cupidatat labore aliquip.",
        },
        {
          name: "Deanna Glover",
          rating: 4,
          comment:
            "Amet incididunt cillum excepteur consequat. Qui irure ad commodo aliquip voluptate tempor et aliqua in nostrud minim cupidatat sint do anim.\nCommodo duis elit minim labore. Nisi deserunt consequat ut nisi enim consectetur duis elit ex sint officia cillum. Incididunt irure nulla eiusmod ullamco ullamco in dolor ut adipisicing.",
        },
        {
          name: "Amos Weimann",
          rating: 2,
          comment:
            "Labore et reprehenderit esse veniam aliqua veniam qui ut et. Consectetur duis laboris qui non magna exercitation voluptate. Aliquip duis quis proident dolore pariatur deserunt anim reprehenderit culpa id enim laboris quis. Culpa dolor adipisicing eiusmod fugiat reprehenderit aliqua.\nLabore sunt qui esse ad do commodo ullamco cupidatat nostrud nostrud consectetur incididunt proident sunt. Magna eiusmod incididunt id incididunt eu veniam eu aliquip occaecat duis exercitation laborum minim occaecat.",
        },
        {
          name: "Sincere Mueller",
          rating: 3,
          comment: "Amet ullamco laborum tempor eu magna Lorem.",
        },
        {
          name: "Terrence Koelpin",
          rating: 2,
          comment:
            "Adipisicing minim est ipsum est id reprehenderit nisi esse do est sint tempor officia. Incididunt adipisicing dolor aliqua qui eu dolor voluptate nulla eu fugiat labore magna nostrud sunt ex. Occaecat duis ea consequat adipisicing. Amet cillum magna duis esse incididunt mollit tempor ipsum esse minim sunt.\nAdipisicing ad culpa velit veniam sunt cillum irure do enim Lorem nulla anim nisi incididunt culpa.",
        },
        {
          name: "Nicklaus Cruickshank",
          rating: 5,
          comment:
            "Ex amet consequat sint ex pariatur ex officia occaecat nostrud ut laboris adipisicing anim exercitation ea. Est pariatur velit sunt tempor duis velit ullamco consectetur.",
        },
        {
          name: "Lee Schmidt",
          rating: 5,
          comment:
            "Adipisicing cupidatat nulla et amet ut elit nostrud cillum anim culpa commodo nostrud. Ullamco eiusmod magna adipisicing consequat elit. Culpa pariatur in cupidatat deserunt sit excepteur nostrud excepteur ipsum cupidatat. Veniam eiusmod commodo sit pariatur fugiat excepteur.\nIn eu mollit officia fugiat reprehenderit ut et exercitation. In enim esse commodo enim id eiusmod nulla enim excepteur et do. Enim incididunt excepteur id ea nulla ea consectetur. Cillum pariatur officia incididunt aliqua reprehenderit anim fugiat velit.",
        },
        {
          name: "Telly Spinka",
          rating: 3,
          comment:
            "Elit cillum do dolor officia in mollit sint nisi exercitation veniam nostrud minim. Sit duis exercitation dolore eiusmod laboris tempor in elit pariatur velit.\nAmet adipisicing aliquip qui dolor occaecat excepteur est consectetur nulla aute qui nisi. Non est esse voluptate cupidatat in. Elit qui adipisicing pariatur nostrud fugiat amet. Irure occaecat exercitation laboris sunt dolore cillum consequat aliquip do.",
        },
      ],
      description:
        "Buy this awesome  The product is originally manufactured by the company and it's a top selling product with a very reasonable",
      discountPercentage: 16.69,
    },
    {
      name: "Stylish Luxury Digital Watch",
      slug: "stylish-luxury-digital-watch",
      category: "womens-watches",
      thumbnail: "https://dummyjson.com/image/i/products/68/thumbnail.webp",
      images: [
        "https://dummyjson.com/image/i/products/68/1.jpg",
        "https://dummyjson.com/image/i/products/68/2.jpg",
      ],
      price: 57,
      stock: 77,
      brand: "Luxury Digital",
      reviews: [
        {
          name: "Thaddeus McCullough",
          rating: 3,
          comment: "Consectetur proident pariatur labore.",
        },
        {
          name: "Jasmin Hermiston",
          rating: 5,
          comment:
            "Consequat ad minim labore laborum. Qui eiusmod do tempor proident ut minim nostrud laborum laboris ex dolore consectetur. Amet quis sit nisi nostrud fugiat consectetur dolore.\nLaboris mollit labore commodo ipsum adipisicing consequat. Ex commodo consequat nulla deserunt occaecat culpa consequat veniam minim minim id duis. Do pariatur excepteur deserunt non in enim.",
        },
      ],
      description:
        "Stylish Luxury Digital Watch For Girls / Women - Led Smart Ladies Watches For Girls",
      discountPercentage: 9.03,
    },
    {
      name: "Golden Watch Pearls Bracelet Watch",
      slug: "golden-watch-pearls-bracelet-watch",
      category: "womens-watches",
      thumbnail: "https://dummyjson.com/image/i/products/69/thumbnail.jpg",
      images: [
        "https://dummyjson.com/image/i/products/69/1.jpg",
        "https://dummyjson.com/image/i/products/69/2.jpg",
        "https://dummyjson.com/image/i/products/69/3.webp",
        "https://dummyjson.com/image/i/products/69/4.jpg",
        "https://dummyjson.com/image/i/products/69/thumbnail.jpg",
      ],
      price: 47,
      stock: 89,
      brand: "Watch Pearls",
      reviews: [
        {
          name: "Alison Reichert",
          rating: 3,
          comment:
            "Minim in sint aute adipisicing irure elit do deserunt amet fugiat labore et aute. Duis id tempor et ipsum occaecat dolore eu qui do et velit. Reprehenderit et esse exercitation nulla officia nisi voluptate exercitation officia id nisi aliquip.\nDeserunt id cupidatat adipisicing do labore consectetur non dolore id. Qui velit enim culpa ipsum.",
        },
        {
          name: "Johnathon Predovic",
          rating: 1,
          comment:
            "Consequat pariatur minim veniam culpa veniam qui occaecat nulla nisi minim et qui deserunt culpa nisi. Veniam incididunt proident cillum voluptate dolor consectetur enim tempor laboris aliquip sunt aliqua ea velit.\nEx ipsum sint velit ipsum pariatur laborum elit do. Do officia anim quis labore aliquip dolore sunt nostrud ipsum reprehenderit cupidatat dolore. Ea est sint incididunt irure non magna laborum quis ipsum dolor.",
        },
        {
          name: "Maymie Yundt",
          rating: 5,
          comment: "Eiusmod culpa in consequat irure est pariatur excepteur.",
        },
        {
          name: "Eleazar Torp",
          rating: 4,
          comment:
            "Veniam pariatur do commodo nostrud.\nUt enim sit incididunt ipsum. Proident nulla ipsum elit dolore aute.",
        },
        {
          name: "Felicity O'Reilly",
          rating: 3,
          comment:
            "Dolore ea incididunt mollit proident et et ex quis est ullamco.",
        },
        {
          name: "Rupert Upton",
          rating: 2,
          comment:
            "Exercitation nisi magna ad dolor consectetur adipisicing qui pariatur ut aute cillum do ipsum. Deserunt laboris proident sint laborum eiusmod adipisicing aliquip velit laborum dolore. Amet officia commodo elit Lorem consequat fugiat.",
        },
        {
          name: "Megane Armstrong",
          rating: 3,
          comment:
            "Mollit amet non eu non exercitation. Nostrud consequat pariatur nostrud cillum minim sit aute deserunt ea amet excepteur. Qui aliqua dolor consectetur consectetur sit commodo adipisicing cillum elit aliqua elit nulla. Cupidatat duis Lorem ut sit aute officia irure ea fugiat ea elit.\nEx consectetur dolore ea.",
        },
        {
          name: "Lee Schmidt",
          rating: 1,
          comment:
            "Voluptate sit proident eu dolor excepteur sunt magna deserunt ex reprehenderit consequat deserunt. Reprehenderit cillum id magna aute sit nostrud cillum est aute velit anim et et. Ut qui ea veniam et deserunt veniam cupidatat irure et officia tempor veniam nisi ut ex.",
        },
        {
          name: "Nicklaus Cruickshank",
          rating: 1,
          comment:
            "Mollit enim magna consectetur incididunt. Cupidatat ut amet excepteur proident nulla dolor amet.",
        },
        {
          name: "Jocelyn Schuster",
          rating: 5,
          comment:
            "Incididunt voluptate labore sint eiusmod Lorem ea officia non ipsum commodo cupidatat quis. Ipsum nostrud elit aliqua et pariatur esse exercitation do id consectetur officia. Do non sit nisi fugiat Lorem incididunt deserunt ut veniam eu excepteur ullamco.",
        },
      ],
      description:
        "Product details of Golden Watch Pearls Bracelet Watch For Girls - Golden Chain Ladies Bracelate Watch for Women",
      discountPercentage: 17.55,
    },
    {
      name: "Stainless Steel Women",
      slug: "stainless-steel-women",
      category: "womens-watches",
      thumbnail: "https://dummyjson.com/image/i/products/70/thumbnail.jpg",
      images: [
        "https://dummyjson.com/image/i/products/70/1.jpg",
        "https://dummyjson.com/image/i/products/70/2.jpg",
        "https://dummyjson.com/image/i/products/70/thumbnail.jpg",
      ],
      price: 35,
      stock: 111,
      brand: "Bracelet",
      reviews: [
        {
          name: "Garret Klocko",
          rating: 5,
          comment:
            "Aute nulla ullamco incididunt mollit labore sunt esse Lorem ad enim eiusmod quis sunt. Nostrud velit et irure excepteur nisi. Officia excepteur eiusmod ea qui fugiat adipisicing voluptate aliqua do.\nDuis do nisi incididunt incididunt culpa fugiat nulla ea officia. Non velit amet quis ut ut do est amet irure laborum eiusmod magna esse consequat cillum. Deserunt adipisicing proident ipsum. Ipsum enim Lorem dolore qui.",
        },
        {
          name: "Piper Schowalter",
          rating: 3,
          comment: "Amet aute commodo occaecat commodo est aliqua.",
        },
        {
          name: "Jasmin Hermiston",
          rating: 2,
          comment:
            "Non culpa aliquip est officia labore consequat tempor deserunt esse consectetur pariatur. Incididunt quis eiusmod occaecat reprehenderit culpa tempor. Deserunt tempor dolore enim cillum qui dolore ad adipisicing irure. Consectetur enim sit dolor sunt Lorem ad sit aliquip ipsum eiusmod.\nDuis in sint est est dolor id ex consectetur deserunt. Tempor magna commodo tempor consectetur reprehenderit.",
        },
        {
          name: "Eleazar Torp",
          rating: 2,
          comment:
            "Mollit nisi cillum labore aliqua labore fugiat labore qui esse quis aute reprehenderit pariatur. Nulla pariatur elit consequat aute deserunt id reprehenderit deserunt id ullamco. Voluptate velit quis enim reprehenderit veniam cupidatat aliqua elit aliquip cillum pariatur laborum excepteur laboris ullamco. Ipsum do proident deserunt esse do mollit exercitation ipsum sunt duis nisi do ullamco Lorem enim.\nId cupidatat ipsum nisi fugiat sit qui voluptate aliqua ex Lorem ut consectetur non Lorem anim. Sunt et nisi reprehenderit veniam sit est Lorem et ea consectetur occaecat irure tempor. Incididunt duis commodo sint adipisicing.",
        },
        {
          name: "Claudia Dooley",
          rating: 2,
          comment:
            "Voluptate aute cupidatat cillum magna.\nNon laboris nisi exercitation nostrud laboris consectetur ipsum proident. Non cupidatat eiusmod amet minim excepteur exercitation incididunt veniam incididunt voluptate est. Nisi laboris nulla exercitation voluptate Lorem minim occaecat.",
        },
      ],
      description:
        "Fashion Skmei 1830 Shell Dial Stainless Steel Women Wrist Watch Lady Bracelet Watch Quartz Watches Ladies",
      discountPercentage: 8.98,
    },
    {
      name: "Round Silver Frame Sun Glasses",
      slug: "round-silver-frame-sun-glasses",
      category: "sunglasses",
      thumbnail: "https://dummyjson.com/image/i/products/81/thumbnail.jpg",
      images: [
        "https://dummyjson.com/image/i/products/81/1.jpg",
        "https://dummyjson.com/image/i/products/81/2.jpg",
        "https://dummyjson.com/image/i/products/81/3.jpg",
        "https://dummyjson.com/image/i/products/81/4.webp",
        "https://dummyjson.com/image/i/products/81/thumbnail.jpg",
      ],
      price: 19,
      stock: 78,
      brand: "Designer Sun Glasses",
      reviews: [
        {
          name: "Emely Schmitt",
          rating: 5,
          comment:
            "Mollit et culpa quis fugiat proident est magna nisi quis quis reprehenderit amet dolor proident.",
        },
        {
          name: "Oda Schmidt",
          rating: 2,
          comment:
            "Ad quis eu nisi nisi exercitation. Occaecat laborum laboris esse dolor.\nId amet enim voluptate minim velit pariatur. In excepteur labore sit esse excepteur sit reprehenderit sint duis pariatur enim et.",
        },
        {
          name: "Alison Reichert",
          rating: 5,
          comment:
            "Consectetur consectetur sint aute non aliquip labore sunt cillum Lorem adipisicing. Laborum ea veniam id laboris esse laborum officia.\nLorem ea aute culpa occaecat duis adipisicing incididunt mollit consectetur amet ea proident magna mollit.",
        },
        {
          name: "Mozell O'Connell",
          rating: 5,
          comment: "Reprehenderit minim sit ut consectetur sit.",
        },
        {
          name: "Eleazar Torp",
          rating: 4,
          comment:
            "Nulla anim esse deserunt dolore do. Non nostrud cupidatat nisi minim enim cupidatat deserunt quis ex voluptate non dolor cupidatat duis. Minim ullamco elit minim velit commodo aute magna minim duis proident.\nQuis cillum nostrud nulla sint eiusmod minim aliqua adipisicing fugiat ex qui dolor consequat. Sunt elit do proident pariatur exercitation veniam commodo id.",
        },
        {
          name: "Sidney Rutherford",
          rating: 2,
          comment:
            "Occaecat ipsum incididunt culpa ad fugiat labore esse voluptate excepteur minim aute occaecat commodo. Est mollit incididunt dolor enim eu tempor reprehenderit.",
        },
        {
          name: "Clotilde Larson",
          rating: 3,
          comment:
            "Veniam dolore ad reprehenderit cupidatat ut pariatur laboris irure labore tempor tempor fugiat. Est exercitation laboris velit ut ullamco labore nulla eu esse deserunt excepteur dolore ipsum id. Eu laboris minim dolore consequat velit deserunt elit do est. Nisi commodo ut exercitation ullamco et officia velit deserunt labore ipsum do esse dolore eu nisi.",
        },
        {
          name: "Jasmin Hermiston",
          rating: 1,
          comment:
            "Tempor magna enim culpa incididunt sunt deserunt culpa labore sunt consequat consectetur commodo ullamco consectetur. In enim ea voluptate pariatur proident cupidatat aute esse Lorem ullamco aliqua reprehenderit culpa duis irure. Cillum incididunt consequat irure quis cillum qui cupidatat dolor sit mollit pariatur reprehenderit. Ex nisi pariatur id Lorem cillum.\nOfficia excepteur ex esse. Ad fugiat consequat ea. Incididunt culpa reprehenderit do ea aute esse esse laboris occaecat ipsum.",
        },
      ],
      description:
        "A pair of sunglasses can protect your eyes from being hurt. For car driving, vacation travel, outdoor activities, social gatherings,",
      discountPercentage: 10.1,
    },
    {
      name: "Kabir Singh Square Sunglass",
      slug: "kabir-singh-square-sunglass",
      category: "sunglasses",
      thumbnail: "https://dummyjson.com/image/i/products/82/thumbnail.jpg",
      images: [
        "https://dummyjson.com/image/i/products/82/1.jpg",
        "https://dummyjson.com/image/i/products/82/2.webp",
        "https://dummyjson.com/image/i/products/82/3.jpg",
        "https://dummyjson.com/image/i/products/82/4.jpg",
        "https://dummyjson.com/image/i/products/82/thumbnail.jpg",
      ],
      price: 50,
      stock: 78,
      brand: "Designer Sun Glasses",
      reviews: [
        {
          name: "Claudia Dooley",
          rating: 5,
          comment: "Eu officia duis sint non.",
        },
        {
          name: "Pearl Blick",
          rating: 3,
          comment:
            "Ullamco ut ut tempor Lorem laborum laboris ullamco sunt quis sit.",
        },
        {
          name: "Terrill Hills",
          rating: 5,
          comment:
            "Ex nostrud laborum deserunt dolor sunt. Nisi culpa ad aute tempor.",
        },
        {
          name: "Piper Schowalter",
          rating: 2,
          comment:
            "Non occaecat est labore qui velit veniam mollit minim voluptate. Eu aute adipisicing exercitation excepteur laborum esse labore adipisicing do fugiat.\nVeniam Lorem eu consequat sint Lorem officia cillum eiusmod nostrud ut exercitation proident reprehenderit laboris aliquip. Ea deserunt do labore et nostrud nostrud.",
        },
        {
          name: "Rory Conn",
          rating: 5,
          comment:
            "Cupidatat ullamco duis laboris veniam officia tempor ullamco incididunt ullamco sit mollit irure. Consectetur aliqua laborum eu exercitation irure quis esse ipsum Lorem anim dolore deserunt reprehenderit.",
        },
        {
          name: "Deanna Glover",
          rating: 4,
          comment:
            "Amet adipisicing ut nisi qui nisi enim proident nulla et aliquip proident enim aliqua. Ut dolore exercitation quis enim amet sunt aliquip anim cillum.\nNon eiusmod elit incididunt. Non fugiat fugiat fugiat proident tempor amet sunt proident irure. Consequat ipsum ut nulla dolore cupidatat nulla esse aliqua duis consectetur ullamco aliquip laborum Lorem.",
        },
        {
          name: "Kari Schinner",
          rating: 5,
          comment:
            "Quis cupidatat occaecat occaecat culpa. Tempor labore et dolore mollit dolor voluptate laboris officia non officia excepteur ad laborum. Quis duis ea deserunt sint.",
        },
        {
          name: "Enoch Lynch",
          rating: 5,
          comment:
            "Labore tempor in aute in est laboris dolore dolor.\nEiusmod dolore sint incididunt nisi exercitation enim deserunt.",
        },
        {
          name: "Sheldon Quigley",
          rating: 2,
          comment:
            "Ad ut deserunt dolore ullamco nisi laborum pariatur.\nAnim officia est non aute et labore.",
        },
        {
          name: "Jocelyn Schuster",
          rating: 4,
          comment:
            "Fugiat amet velit consequat nisi esse irure sint. Nostrud sit qui occaecat occaecat tempor veniam dolore consectetur ea amet eiusmod commodo. Consequat in veniam magna Lorem ex nisi pariatur veniam id irure.",
        },
      ],
      description:
        "Orignal Metal Kabir Singh design 2020 Sunglasses Men Brand Designer Sun Glasses Kabir Singh Square Sunglass",
      discountPercentage: 15.6,
    },
    {
      name: "Wiley X Night Vision Yellow Glasses",
      slug: "wiley-x-night-vision-yellow-glasses",
      category: "sunglasses",
      thumbnail: "https://dummyjson.com/image/i/products/83/thumbnail.jpg",
      images: [
        "https://dummyjson.com/image/i/products/83/1.jpg",
        "https://dummyjson.com/image/i/products/83/2.jpg",
        "https://dummyjson.com/image/i/products/83/3.jpg",
        "https://dummyjson.com/image/i/products/83/4.jpg",
        "https://dummyjson.com/image/i/products/83/thumbnail.jpg",
      ],
      price: 30,
      stock: 115,
      brand: "mastar watch",
      reviews: [
        {
          name: "Terrill Hills",
          rating: 1,
          comment:
            "Irure ea officia ea sit adipisicing duis aliquip aute voluptate cillum officia exercitation sit eiusmod. Ut reprehenderit do eiusmod id ut reprehenderit non anim cupidatat irure anim deserunt proident proident. Et tempor id cillum et culpa quis do adipisicing. In sit ut irure aliqua consectetur elit veniam mollit aliquip laboris aliquip magna sit magna.",
        },
        {
          name: "Rupert Upton",
          rating: 4,
          comment:
            "Id aliquip sunt anim quis excepteur deserunt non Lorem reprehenderit. Tempor reprehenderit deserunt ipsum laborum laborum excepteur consectetur.",
        },
        {
          name: "Macy Greenfelder",
          rating: 5,
          comment: "In tempor sunt elit.\nNostrud ipsum ea Lorem.",
        },
        {
          name: "Nicklaus Cruickshank",
          rating: 2,
          comment:
            "Sint Lorem eu occaecat. In elit Lorem anim officia cillum ut id magna. Lorem commodo dolor reprehenderit sint nostrud excepteur sunt esse incididunt. Voluptate consectetur occaecat proident nisi ad anim elit do.",
        },
        {
          name: "Sincere Mueller",
          rating: 5,
          comment:
            "Est quis non eu deserunt elit commodo fugiat dolor nostrud cupidatat deserunt quis enim.\nElit qui laboris reprehenderit labore quis laborum ea in consequat eu eu et anim laboris. Ea Lorem nostrud qui fugiat pariatur commodo tempor mollit aute eu.",
        },
        {
          name: "Kaya Emard",
          rating: 2,
          comment:
            "Aute non minim id ea qui est cupidatat minim proident Lorem laborum consectetur. Aliquip id elit sit nostrud excepteur nulla ut aliquip qui consequat deserunt cillum minim ea consectetur.\nIncididunt esse ipsum id quis ipsum dolore proident. Duis consectetur labore culpa reprehenderit sunt minim quis ex et minim ut in reprehenderit sint.",
        },
      ],
      description:
        "Wiley X Night Vision Yellow Glasses for Riders - Night Vision Anti Fog Driving Glasses - Free Night Glass Cover - Shield Eyes From Dust and Virus- For Night Sport Matches",
      discountPercentage: 6.33,
    },
    {
      name: "Square Sunglasses",
      slug: "square-sunglasses",
      category: "sunglasses",
      thumbnail: "https://dummyjson.com/image/i/products/84/thumbnail.jpg",
      images: [
        "https://dummyjson.com/image/i/products/84/1.jpg",
        "https://dummyjson.com/image/i/products/84/2.jpg",
        "https://dummyjson.com/image/i/products/84/thumbnail.jpg",
      ],
      price: 28,
      stock: 64,
      brand: "mastar watch",
      reviews: [
        {
          name: "Humberto Botsford",
          rating: 4,
          comment:
            "Culpa esse ullamco amet laboris id elit sunt qui aliquip. Do enim nulla incididunt est exercitation dolore labore dolor non enim.\nAdipisicing laborum mollit ea. Eiusmod magna duis duis irure sit excepteur voluptate.",
        },
        {
          name: "Terrill Hills",
          rating: 5,
          comment:
            "Qui sunt velit est qui ipsum officia consectetur eiusmod veniam anim. Minim voluptate esse magna mollit et deserunt eiusmod non nostrud eu proident. Enim consectetur ad commodo fugiat qui ex magna mollit nisi.",
        },
        {
          name: "Lenna Renner",
          rating: 5,
          comment:
            "Officia sint do aliquip dolore laborum qui reprehenderit amet consectetur occaecat consectetur magna. Laborum velit tempor eu enim occaecat nisi non.\nDo et pariatur adipisicing nisi fugiat consequat commodo irure enim cupidatat nulla. Nisi mollit ullamco irure incididunt quis esse dolore irure laboris aute.",
        },
        {
          name: "Rita Shields",
          rating: 5,
          comment: "Officia voluptate sint dolor.",
        },
        {
          name: "Emely Schmitt",
          rating: 4,
          comment:
            "Culpa ut magna enim veniam quis esse. Minim sit dolore nostrud amet ullamco eu aliquip veniam.",
        },
        {
          name: "Reginald Wisoky",
          rating: 3,
          comment:
            "Sit nisi proident labore ullamco do voluptate velit id minim. Ut eiusmod pariatur reprehenderit in minim ea qui consectetur mollit proident veniam dolor occaecat ex adipisicing. Id tempor est aliqua id quis.",
        },
        {
          name: "Arne Jacobs",
          rating: 4,
          comment:
            "Nulla qui magna Lorem. Deserunt consectetur cupidatat nisi nisi eiusmod consectetur magna tempor amet in pariatur proident dolore ullamco pariatur. Deserunt dolor ut commodo ipsum tempor esse tempor velit reprehenderit do incididunt consectetur Lorem do id. Deserunt est fugiat aliqua.\nOccaecat aliqua mollit reprehenderit exercitation quis nulla dolor sunt ut enim.",
        },
        {
          name: "Marcel Jones",
          rating: 1,
          comment:
            "Officia nulla labore ad elit reprehenderit deserunt ex consequat consectetur.\nExercitation enim eiusmod ea duis magna Lorem anim ullamco ea duis tempor sit qui cillum. Minim adipisicing officia in officia ad occaecat esse magna reprehenderit commodo consequat ut. Lorem enim qui mollit est nulla dolor ea magna incididunt tempor dolor sit esse proident.",
        },
        {
          name: "Maymie Yundt",
          rating: 3,
          comment:
            "Enim amet qui fugiat est sit. Cillum consectetur aliquip enim laborum ut consequat duis veniam ad.",
        },
      ],
      description:
        "Fashion Oversized Square Sunglasses Retro Gradient Big Frame Sunglasses For Women One Piece Gafas Shade Mirror Clear Lens 17059",
      discountPercentage: 13.89,
    },
    {
      name: "LouisWill Men Sunglasses",
      slug: "louiswill-men-sunglasses",
      category: "sunglasses",
      thumbnail: "https://dummyjson.com/image/i/products/85/thumbnail.jpg",
      images: [
        "https://dummyjson.com/image/i/products/85/1.jpg",
        "https://dummyjson.com/image/i/products/85/2.jpg",
        "https://dummyjson.com/image/i/products/85/thumbnail.jpg",
      ],
      price: 50,
      stock: 92,
      brand: "LouisWill",
      reviews: [
        {
          name: "Sincere Mueller",
          rating: 3,
          comment:
            "Ut sit do commodo incididunt. Laborum elit aute eu enim velit aliquip non aliquip occaecat enim excepteur esse. Nisi sunt mollit mollit sunt adipisicing in mollit ut.\nAmet commodo consequat minim sit velit sint reprehenderit voluptate deserunt. Elit nulla mollit exercitation ea ipsum eu sit nostrud dolor nostrud.",
        },
        {
          name: "Piper Schowalter",
          rating: 3,
          comment: "Amet duis elit proident elit aliqua qui ullamco ut sint.",
        },
        {
          name: "Arely Skiles",
          rating: 3,
          comment:
            "Laboris minim ipsum est occaecat et dolore enim ea velit dolore laborum et cupidatat do.\nEx esse est culpa do proident velit fugiat laboris. Aute culpa in aliqua Lorem.",
        },
        {
          name: "Nasir Leuschke",
          rating: 3,
          comment:
            "Velit ipsum duis qui proident. Non nulla consectetur sint elit commodo non excepteur do culpa commodo. Fugiat velit pariatur fugiat anim officia veniam elit aliquip in id Lorem.",
        },
        {
          name: "Rita Shields",
          rating: 5,
          comment:
            "Proident cupidatat non veniam ea eu occaecat quis aliqua laboris exercitation aliqua. Ullamco adipisicing minim cillum cupidatat amet irure sunt sint nulla consequat do voluptate eu id dolor. Adipisicing pariatur labore veniam qui sit occaecat labore laboris exercitation. Duis anim eu commodo nostrud laborum deserunt adipisicing labore voluptate amet enim reprehenderit.\nOccaecat occaecat dolore ea velit tempor et enim ut ea consequat. Minim incididunt ad in aute sit ipsum.",
        },
        {
          name: "Toy Olson",
          rating: 3,
          comment:
            "Quis sint duis duis dolor ut deserunt aliquip sunt consequat occaecat nisi exercitation.",
        },
      ],
      description:
        "LouisWill Men Sunglasses Polarized Sunglasses UV400 Sunglasses Day Night Dual Use Safety Driving Night Vision Eyewear AL-MG Frame Sun Glasses with Free Box for Drivers",
      discountPercentage: 11.27,
    },
    {
      name: "Bluetooth Aux",
      slug: "bluetooth-aux",
      category: "automotive",
      thumbnail: "https://dummyjson.com/image/i/products/86/thumbnail.jpg",
      images: [
        "https://dummyjson.com/image/i/products/86/1.jpg",
        "https://dummyjson.com/image/i/products/86/2.webp",
        "https://dummyjson.com/image/i/products/86/3.jpg",
        "https://dummyjson.com/image/i/products/86/4.jpg",
        "https://dummyjson.com/image/i/products/86/thumbnail.jpg",
      ],
      price: 25,
      stock: 22,
      brand: "Car Aux",
      reviews: [
        {
          name: "Macy Greenfelder",
          rating: 1,
          comment:
            "Exercitation dolor non quis quis duis voluptate tempor nulla proident. Veniam aliqua ex fugiat amet. Reprehenderit consectetur aute ullamco aliquip tempor sunt excepteur magna. Quis deserunt sint laboris incididunt voluptate culpa laborum sit in ut consectetur aliqua reprehenderit.",
        },
        {
          name: "Trycia Fadel",
          rating: 2,
          comment:
            "Voluptate fugiat adipisicing commodo anim. Excepteur labore duis quis culpa et ullamco mollit magna culpa consectetur. Commodo ut fugiat incididunt.",
        },
        {
          name: "Moriah Mills",
          rating: 2,
          comment:
            "Ut tempor est culpa ipsum cupidatat non aliqua esse ullamco exercitation adipisicing culpa.\nDeserunt labore qui quis ex ea aliqua excepteur laboris consequat consectetur in voluptate et. Id veniam do sint enim ex adipisicing duis elit mollit mollit ex tempor occaecat sunt commodo.",
        },
      ],
      description:
        "Bluetooth Aux Bluetooth Car Aux Car Bluetooth Transmitter Aux Audio Receiver Handfree Car Bluetooth Music Receiver Universal 3.5mm Streaming A2DP Wireless Auto AUX Audio Adapter With Mic For Phone MP3",
      discountPercentage: 10.56,
    },
    {
      name: "t Temperature Controller Incubator Controller",
      slug: "t-temperature-controller-incubator-controller",
      category: "automotive",
      thumbnail: "https://dummyjson.com/image/i/products/87/thumbnail.jpg",
      images: [
        "https://dummyjson.com/image/i/products/87/1.jpg",
        "https://dummyjson.com/image/i/products/87/2.jpg",
        "https://dummyjson.com/image/i/products/87/3.jpg",
        "https://dummyjson.com/image/i/products/87/4.jpg",
        "https://dummyjson.com/image/i/products/87/thumbnail.jpg",
      ],
      price: 40,
      stock: 37,
      brand: "W1209 DC12V",
      reviews: [
        {
          name: "Trace Douglas",
          rating: 3,
          comment:
            "Ipsum velit adipisicing eu mollit ea reprehenderit et irure. Exercitation eiusmod in duis ullamco ad nulla do eu cupidatat eiusmod nulla laboris incididunt consequat est.\nQuis quis duis do pariatur nulla Lorem laboris excepteur qui aliquip nostrud ad adipisicing reprehenderit laboris.",
        },
        {
          name: "Emely Schmitt",
          rating: 5,
          comment:
            "Aute et excepteur minim sunt anim est commodo. Nostrud reprehenderit do cillum consectetur duis officia. Commodo excepteur reprehenderit dolor quis proident. Lorem aute et eu nostrud consequat do consequat elit deserunt cillum elit in labore.\nLaboris aliquip consectetur veniam elit enim dolor. Deserunt ad ex do ad. Dolore do id ex eiusmod exercitation non fugiat laboris minim proident magna ut. Anim dolor minim ad dolor voluptate sint minim cupidatat aliquip veniam eu nulla cupidatat.",
        },
        {
          name: "Jeanne O'Keefe",
          rating: 1,
          comment:
            "Cupidatat elit ut adipisicing in in. Aliquip id excepteur aute nostrud consectetur.\nElit ullamco pariatur est magna sit sit in deserunt id nostrud nulla dolore dolor officia. Esse commodo anim mollit fugiat. Cillum laboris sit velit velit anim tempor id cillum qui consequat veniam.",
        },
        {
          name: "Nicklaus Cruickshank",
          rating: 2,
          comment:
            "Ipsum culpa ad eiusmod ullamco sit dolor non non qui velit pariatur eu incididunt incididunt. Elit qui ea excepteur exercitation ea excepteur commodo esse cupidatat ex laborum dolore qui nisi. Esse deserunt nostrud Lorem exercitation fugiat non minim enim ullamco laboris excepteur aliqua est excepteur mollit.\nDo reprehenderit aliquip laborum est officia anim velit et nulla nostrud est occaecat cupidatat. Voluptate nostrud commodo sit ea. Qui occaecat ipsum adipisicing dolore enim amet adipisicing pariatur adipisicing. Ad eiusmod nulla elit et aliqua do est pariatur in enim nisi ut ullamco est ex.",
        },
        {
          name: "Rachel Jacobson",
          rating: 4,
          comment:
            "Dolor labore velit ut enim reprehenderit. Sint dolor cupidatat velit laborum duis est incididunt adipisicing voluptate veniam qui qui eu ad.",
        },
        {
          name: "Twila Padberg",
          rating: 3,
          comment:
            "Minim cillum et tempor irure sunt Lorem incididunt labore officia qui nisi. Pariatur non velit commodo tempor est. Eiusmod eu laboris anim et consectetur nulla pariatur sint commodo esse nulla nostrud sit sint amet.\nLorem duis enim reprehenderit nisi exercitation tempor labore adipisicing cupidatat laboris.",
        },
        {
          name: "Kody Terry",
          rating: 4,
          comment:
            "Esse anim pariatur fugiat et cillum aute cupidatat duis do do cupidatat. Dolor ad ad ex pariatur non est do consequat incididunt cillum tempor sunt laboris aliquip ea. Consectetur occaecat ut consequat amet ad aliquip proident.",
        },
        {
          name: "Nora Sawayn",
          rating: 1,
          comment:
            "Nisi duis sit veniam aute sit deserunt laborum aute nostrud ea aliquip nulla ut excepteur elit. Minim sint exercitation consectetur Lorem.",
        },
      ],
      description:
        "Both Heat and Cool Purpose, Temperature control range; -50 to +110, Temperature measurement accuracy; 0.1, Control accuracy; 0.1",
      discountPercentage: 11.3,
    },

    {
      name: "Qualcomm original Car Charger",
      slug: "qualcomm-original-car-charger",
      category: "automotive",
      thumbnail: "https://dummyjson.com/image/i/products/89/thumbnail.jpg",
      images: [
        "https://dummyjson.com/image/i/products/89/1.jpg",
        "https://dummyjson.com/image/i/products/89/2.jpg",
        "https://dummyjson.com/image/i/products/89/3.jpg",
        "https://dummyjson.com/image/i/products/89/4.jpg",
        "https://dummyjson.com/image/i/products/89/thumbnail.jpg",
      ],
      price: 40,
      stock: 79,
      brand: "TC Reusable",
      reviews: [
        {
          name: "Tevin Prohaska",
          rating: 3,
          comment:
            "Sit ut cupidatat nisi ipsum in ex amet. Officia aliqua magna veniam laboris dolor fugiat dolore incididunt eiusmod aliqua dolor aute consectetur velit.",
        },
        {
          name: "Rory Conn",
          rating: 5,
          comment:
            "Veniam ea exercitation ea. Veniam elit mollit aliqua ad do ea consequat eiusmod do cillum cillum et consectetur fugiat.\nAd exercitation minim et mollit magna. Et pariatur culpa laborum non.",
        },
        {
          name: "Aniya Wisozk",
          rating: 5,
          comment:
            "Tempor cupidatat laborum ut aliqua exercitation. Dolore laborum laboris irure enim do ut.",
        },
        {
          name: "Terrence Koelpin",
          rating: 2,
          comment:
            "Ullamco proident aliqua nulla dolore in. Ut ut voluptate duis dolore dolor ut excepteur ea in veniam. Cillum occaecat culpa adipisicing enim in non laborum aliquip irure. Sint irure qui occaecat non amet cillum in duis.",
        },
        {
          name: "Sincere Mueller",
          rating: 4,
          comment:
            "Occaecat occaecat sint aliquip non adipisicing. Eu dolor tempor sit duis cillum et id laborum officia consectetur ut voluptate id qui. Et sunt laboris Lorem elit magna dolor ipsum ut labore tempor duis fugiat consectetur reprehenderit.",
        },
        {
          name: "Elbert Gottlieb",
          rating: 5,
          comment:
            "Commodo magna consequat qui laborum velit. Cupidatat magna ut proident labore consequat dolor ut esse. Enim irure quis officia ut ut dolor nisi tempor pariatur.\nLabore voluptate laboris magna quis proident laborum ut magna amet ad tempor adipisicing velit.",
        },
        {
          name: "Megane Armstrong",
          rating: 1,
          comment:
            "Cillum aute aliqua magna nostrud eu. Et nulla quis esse in ad cupidatat commodo cillum occaecat laboris enim officia minim dolor. Lorem est ullamco aliquip veniam dolore adipisicing anim aute.",
        },
        {
          name: "Terrell Schuppe",
          rating: 3,
          comment:
            "In mollit voluptate laborum dolor et fugiat aliquip culpa velit commodo est sit adipisicing. Duis anim mollit irure deserunt in qui ad amet cupidatat excepteur ut. Aliquip pariatur quis fugiat esse non nisi dolor labore adipisicing laborum nisi sint cupidatat laborum tempor.\nVelit id nostrud excepteur. Veniam veniam labore et eu nisi fugiat laboris ea fugiat ad non aute ut ullamco labore.",
        },
      ],
      description:
        "best Quality CHarger , Highly Recommended to all best Quality CHarger , Highly Recommended to all",
      discountPercentage: 17.53,
    },

    {
      name: "lighting ceiling kitchen",
      slug: "lighting-ceiling-kitchen",
      category: "lighting",
      thumbnail: "https://dummyjson.com/image/i/products/96/thumbnail.jpg",
      images: [
        "https://dummyjson.com/image/i/products/96/1.jpg",
        "https://dummyjson.com/image/i/products/96/2.jpg",
        "https://dummyjson.com/image/i/products/96/3.jpg",
        "https://dummyjson.com/image/i/products/96/4.jpg",
        "https://dummyjson.com/image/i/products/96/thumbnail.jpg",
      ],
      price: 30,
      stock: 96,
      brand: "lightingbrilliance",
      reviews: [
        {
          name: "Tiara Rolfson",
          rating: 5,
          comment:
            "Veniam incididunt excepteur reprehenderit ipsum in. Exercitation non dolore do enim ea ipsum veniam minim voluptate. Minim cupidatat adipisicing mollit ipsum incididunt aute fugiat nulla nulla velit aute reprehenderit sit tempor cillum.\nUllamco sit qui irure dolore Lorem irure anim. Reprehenderit nostrud pariatur ullamco sit aliquip deserunt eiusmod. Proident minim adipisicing exercitation in sit ut fugiat dolore laboris mollit eiusmod voluptate eiusmod ex.",
        },
        {
          name: "Deanna Glover",
          rating: 2,
          comment:
            "Voluptate nulla deserunt pariatur aute. Irure cupidatat sunt velit laborum est.\nNostrud officia dolore occaecat reprehenderit eiusmod ad ea proident laboris eu. Ex id enim est esse dolore. Cillum consectetur officia deserunt nisi elit eiusmod anim veniam.",
        },
        {
          name: "Telly Spinka",
          rating: 5,
          comment:
            "Proident elit excepteur eiusmod adipisicing velit nulla ullamco ea aute velit fugiat labore nostrud nisi nostrud. Veniam esse et non eu ipsum exercitation do in dolor duis cupidatat irure et. Ea et commodo laboris nulla est adipisicing elit. Laborum quis voluptate eiusmod qui aliquip amet voluptate sint aute pariatur laborum quis occaecat minim.\nVeniam nostrud nisi Lorem. Aliqua sunt aute culpa adipisicing sunt commodo exercitation adipisicing esse sunt elit ullamco adipisicing et.",
        },
        {
          name: "Nicklaus Cruickshank",
          rating: 3,
          comment:
            "Commodo cillum excepteur tempor exercitation enim ut irure laboris sint laboris ad sunt.",
        },
        {
          name: "Nora Sawayn",
          rating: 1,
          comment:
            "Duis et pariatur nulla Lorem Lorem. Officia incididunt veniam adipisicing cupidatat proident consectetur pariatur exercitation irure tempor commodo exercitation in. Nisi aliqua nulla amet non ut id proident excepteur commodo proident eu dolor ullamco id enim.",
        },
      ],
      description:
        "Wholesale slim hanging decorative kid room lighting ceiling kitchen chandeliers pendant light modern",
      discountPercentage: 14.89,
    },
    {
      name: "Metal Ceramic Flower",
      slug: "metal-ceramic-flower",
      category: "lighting",
      thumbnail: "https://dummyjson.com/image/i/products/97/thumbnail.jpg",
      images: [
        "https://dummyjson.com/image/i/products/97/1.jpg",
        "https://dummyjson.com/image/i/products/97/2.jpg",
        "https://dummyjson.com/image/i/products/97/3.jpg",
        "https://dummyjson.com/image/i/products/97/4.webp",
        "https://dummyjson.com/image/i/products/97/thumbnail.jpg",
      ],
      price: 35,
      stock: 146,
      brand: "Ifei Home",
      reviews: [],
      description:
        "Metal Ceramic Flower Chandelier Home Lighting American Vintage Hanging Lighting Pendant Lamp",
      discountPercentage: 10.94,
    },
    {
      name: "3 lights lndenpant kitchen islang",
      slug: "3-lights-lndenpant-kitchen-islang",
      category: "lighting",
      thumbnail: "https://dummyjson.com/image/i/products/98/thumbnail.jpg",
      images: [
        "https://dummyjson.com/image/i/products/98/1.jpg",
        "https://dummyjson.com/image/i/products/98/2.jpg",
        "https://dummyjson.com/image/i/products/98/3.jpg",
        "https://dummyjson.com/image/i/products/98/4.jpg",
        "https://dummyjson.com/image/i/products/98/thumbnail.jpg",
      ],
      price: 34,
      stock: 44,
      brand: "DADAWU",
      reviews: [
        {
          name: "Hal Keebler",
          rating: 1,
          comment:
            "Amet dolor eu duis amet mollit est nisi.\nOccaecat ut ut labore magna ipsum deserunt sunt voluptate dolor fugiat do minim. Ex consectetur ipsum do.",
        },
      ],
      description:
        "3 lights lndenpant kitchen islang dining room pendant rice paper chandelier contemporary led pendant light modern chandelier",
      discountPercentage: 5.92,
    },
    {
      name: "American Vintage Wood Pendant Light",
      slug: "american-vintage-wood-pendant-light",
      category: "lighting",
      thumbnail: "https://dummyjson.com/image/i/products/99/thumbnail.jpg",
      images: [
        "https://dummyjson.com/image/i/products/99/1.jpg",
        "https://dummyjson.com/image/i/products/99/2.jpg",
        "https://dummyjson.com/image/i/products/99/3.jpg",
        "https://dummyjson.com/image/i/products/99/4.jpg",
        "https://dummyjson.com/image/i/products/99/thumbnail.jpg",
      ],
      price: 46,
      stock: 138,
      brand: "Ifei Home",
      reviews: [
        {
          name: "Reginald Wisoky",
          rating: 5,
          comment:
            "Duis minim Lorem in ut culpa esse nostrud duis. Culpa occaecat velit do excepteur pariatur nisi est eiusmod voluptate voluptate ipsum aute. Cillum anim occaecat officia nulla laboris proident non consequat duis laboris ut.",
        },
        {
          name: "Rita Shields",
          rating: 3,
          comment:
            "Cillum ea cillum aliqua sint magna amet quis. Commodo fugiat excepteur amet mollit ad officia ut Lorem et culpa aliqua eu ullamco eiusmod officia. Proident incididunt labore proident eu consectetur ex tempor qui adipisicing non est veniam nulla sunt. Duis minim consectetur nisi ea ipsum aliquip.\nReprehenderit quis quis nisi dolore veniam ad eiusmod non laborum eiusmod cupidatat dolore fugiat excepteur. Esse veniam ex culpa aute exercitation ipsum et ipsum sit ea excepteur est.",
        },
        {
          name: "Eleanora Price",
          rating: 1,
          comment:
            "Pariatur id nostrud adipisicing consectetur ex et duis nulla ad ut nisi. Ipsum sit nisi deserunt veniam proident adipisicing do proident est in.",
        },
        {
          name: "Davonte Heaney",
          rating: 2,
          comment:
            "Ut deserunt eu nostrud. Adipisicing dolore do voluptate reprehenderit nulla voluptate Lorem ipsum esse deserunt cillum amet fugiat do nostrud. Magna esse sunt sit pariatur aute veniam fugiat. Ea minim reprehenderit dolore aliqua Lorem aute minim aliquip sint excepteur voluptate ea velit.\nAnim excepteur ipsum sunt elit irure eiusmod. Nostrud fugiat duis commodo id est deserunt consectetur do.",
        },
        {
          name: "Arely Skiles",
          rating: 2,
          comment:
            "Non culpa est nostrud laborum exercitation laborum mollit sunt incididunt excepteur. Deserunt sint reprehenderit eiusmod mollit pariatur culpa ut incididunt id laboris esse excepteur magna magna sint. Deserunt occaecat culpa ea sunt aute incididunt non fugiat. Lorem adipisicing qui adipisicing fugiat do.\nAute proident voluptate aute velit ea sint adipisicing esse incididunt. Irure amet occaecat tempor est.",
        },
        {
          name: "Hal Keebler",
          rating: 4,
          comment:
            "Incididunt sint ea proident. Enim eiusmod tempor aliqua cillum exercitation dolore cupidatat dolore aute ea. Labore laborum magna in. Enim ad ullamco id.",
        },
      ],
      description:
        "American Vintage Wood Pendant Light Farmhouse Antique Hanging Lamp Lampara Colgante",
      discountPercentage: 8.84,
    },
    {
      name: "Crystal chandelier maria theresa for 12 light",
      slug: "crystal-chandelier-maria-theresa-for-12-light",
      category: "lighting",
      thumbnail: "https://dummyjson.com/image/i/products/100/thumbnail.jpg",
      images: [
        "https://dummyjson.com/image/i/products/100/1.jpg",
        "https://dummyjson.com/image/i/products/100/2.jpg",
        "https://dummyjson.com/image/i/products/100/3.jpg",
        "https://dummyjson.com/image/i/products/100/thumbnail.jpg",
      ],
      price: 47,
      stock: 133,
      brand: "YIOSI",
      reviews: [],
      description: "Crystal chandelier maria theresa for 12 light",
      discountPercentage: 16,
    },
  ],
};
export default data;
