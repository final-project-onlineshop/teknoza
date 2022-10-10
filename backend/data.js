import bcrypt from "bcryptjs";

const data = {
  users: [
    {
      name: "Sevde",
      email: "svd@example.com",
      password: bcrypt.hashSync("th34jj776ghf76-34?!++"),
      isAdmin: true,
    },
    {
      name: "Ömer",
      email: "ömer@example.com",
      password: bcrypt.hashSync("th34jj776ghf76-34?!++"),
      isAdmin: true,
    },
    {
      name: "Bekir",
      email: "bkr@example.com",
      password: bcrypt.hashSync("th34jj776ghf76-34?!++"),
      isAdmin: true,
    },
    {
      name: "Terry Medhurst",
      email: "atuny0@sohu.com",
      password: bcrypt.hashSync("gf5498fsglö?++df3489!!fds23"),
      isAdmin: false,
    },
    {
      name: "Sheldon Quigley",
      email: "hbingley1@plala.or.jp",
      password: bcrypt.hashSync("gf5498fsglö?++df3489!!fds23"),
      isAdmin: false,
    },
    {
      name: "Terrill Hills",
      email: "rshawe2@51.la",
      password: bcrypt.hashSync("gf5498fsglö?++df3489!!fds23"),
      isAdmin: false,
    },
    {
      name: "Miles Cummerata",
      email: "yraigatt3@nature.com",
      password: bcrypt.hashSync("gf5498fsglö?++df3489!!fds23"),
      isAdmin: false,
    },
    {
      name: "Mavis Schultz",
      email: "kmeus4@upenn.edu",
      password: bcrypt.hashSync("gf5498fsglö?++df3489!!fds23"),
      isAdmin: false,
    },
    {
      name: "Alison Reichert",
      email: "jtreleven5@nhs.uk",
      password: bcrypt.hashSync("gf5498fsglö?++df3489!!fds23"),
      isAdmin: false,
    },
    {
      name: "Oleta Abbott",
      email: "dpettegre6@columbia.edu",
      password: bcrypt.hashSync("gf5498fsglö?++df3489!!fds23"),
      isAdmin: false,
    },
    {
      name: "Ewell Mueller",
      email: "ggude7@chron.com",
      password: bcrypt.hashSync("gf5498fsglö?++df3489!!fds23"),
      isAdmin: false,
    },
    {
      name: "Demetrius Corkery",
      email: "nloiterton8@aol.com",
      password: bcrypt.hashSync("gf5498fsglö?++df3489!!fds23"),
      isAdmin: false,
    },
    {
      name: "Eleanora Price",
      email: "umcgourty9@jalbum.net",
      password: bcrypt.hashSync("gf5498fsglö?++df3489!!fds23"),
      isAdmin: false,
    },
    {
      name: "Marcel Jones",
      email: "acharlota@liveinternet.ru",
      password: bcrypt.hashSync("gf5498fsglö?++df3489!!fds23"),
      isAdmin: false,
    },
    {
      name: "Assunta Rath",
      email: "rhallawellb@dropbox.com",
      password: bcrypt.hashSync("gf5498fsglö?++df3489!!fds23"),
      isAdmin: false,
    },
    {
      name: "Trace Douglas",
      email: "lgribbinc@posterous.com",
      password: bcrypt.hashSync("gf5498fsglö?++df3489!!fds23"),
      isAdmin: false,
    },
    {
      name: "Enoch Lynch",
      email: "mturleyd@tumblr.com",
      password: bcrypt.hashSync("gf5498fsglö?++df3489!!fds23"),
      isAdmin: false,
    },
    {
      name: "Jeanne Halvorson",
      email: "kminchelle@qq.com",
      password: bcrypt.hashSync("gf5498fsglö?++df3489!!fds23"),
      isAdmin: false,
    },
    {
      name: "Trycia Fadel",
      email: "dpierrof@vimeo.com",
      password: bcrypt.hashSync("gf5498fsglö?++df3489!!fds23"),
      isAdmin: false,
    },
    {
      name: "Bradford Prohaska",
      email: "vcholdcroftg@ucoz.com",
      password: bcrypt.hashSync("gf5498fsglö?++df3489!!fds23"),
      isAdmin: false,
    },
    {
      name: "Arely Skiles",
      email: "sberminghamh@chron.com",
      password: bcrypt.hashSync("gf5498fsglö?++df3489!!fds23"),
      isAdmin: false,
    },
    {
      name: "Gust Purdy",
      email: "bleveragei@so-net.ne.jp",
      password: bcrypt.hashSync("gf5498fsglö?++df3489!!fds23"),
      isAdmin: false,
    },
    {
      name: "Lenna Renner",
      email: "aeatockj@psu.edu",
      password: bcrypt.hashSync("gf5498fsglö?++df3489!!fds23"),
      isAdmin: false,
    },
    {
      name: "Doyle Ernser",
      email: "ckensleyk@pen.io",
      password: bcrypt.hashSync("gf5498fsglö?++df3489!!fds23"),
      isAdmin: false,
    },
    {
      name: "Tressa Weber",
      email: "froachel@howstuffworks.com",
      password: bcrypt.hashSync("gf5498fsglö?++df3489!!fds23"),
      isAdmin: false,
    },
    {
      name: "Felicity O'Reilly",
      email: "beykelhofm@wikispaces.com",
      password: bcrypt.hashSync("gf5498fsglö?++df3489!!fds23"),
      isAdmin: false,
    },
    {
      name: "Jocelyn Schuster",
      email: "brickeardn@fema.gov",
      password: bcrypt.hashSync("gf5498fsglö?++df3489!!fds23"),
      isAdmin: false,
    },
    {
      name: "Edwina Ernser",
      email: "dfundello@amazon.co.jp",
      password: bcrypt.hashSync("gf5498fsglö?++df3489!!fds23"),
      isAdmin: false,
    },
    {
      name: "Griffin Braun",
      email: "lgronaverp@cornell.edu",
      password: bcrypt.hashSync("gf5498fsglö?++df3489!!fds23"),
      isAdmin: false,
    },
    {
      name: "Piper Schowalter",
      email: "fokillq@amazon.co.jp",
      password: bcrypt.hashSync("gf5498fsglö?++df3489!!fds23"),
      isAdmin: false,
    },
    {
      name: "Kody Terry",
      email: "xisherwoodr@ask.com",
      password: bcrypt.hashSync("gf5498fsglö?++df3489!!fds23"),
      isAdmin: false,
    },
    {
      name: "Macy Greenfelder",
      email: "jissetts@hostgator.com",
      password: bcrypt.hashSync("gf5498fsglö?++df3489!!fds23"),
      isAdmin: false,
    },
    {
      name: "Maurine Stracke",
      email: "kdulyt@umich.edu",
      password: bcrypt.hashSync("gf5498fsglö?++df3489!!fds23"),
      isAdmin: false,
    },
    {
      name: "Luciano Sauer",
      email: "smargiottau@altervista.org",
      password: bcrypt.hashSync("gf5498fsglö?++df3489!!fds23"),
      isAdmin: false,
    },
    {
      name: "Kaya Emard",
      email: "lskeelv@webeden.co.uk",
      password: bcrypt.hashSync("gf5498fsglö?++df3489!!fds23"),
      isAdmin: false,
    },
    {
      name: "Lee Schmidt",
      email: "gsilcockw@infoseek.co.jp",
      password: bcrypt.hashSync("gf5498fsglö?++df3489!!fds23"),
      isAdmin: false,
    },
    {
      name: "Darien Witting",
      email: "aaughtonx@businessweek.com",
      password: bcrypt.hashSync("gf5498fsglö?++df3489!!fds23"),
      isAdmin: false,
    },
    {
      name: "Jacklyn Schimmel",
      email: "mbrooksbanky@gnu.org",
      password: bcrypt.hashSync("gf5498fsglö?++df3489!!fds23"),
      isAdmin: false,
    },
    {
      name: "Angelica Baumbach",
      email: "dalmondz@joomla.org",
      password: bcrypt.hashSync("gf5498fsglö?++df3489!!fds23"),
      isAdmin: false,
    },
    {
      name: "Delfina Ziemann",
      email: "nwytchard10@blogspot.com",
      password: bcrypt.hashSync("gf5498fsglö?++df3489!!fds23"),
      isAdmin: false,
    },
    {
      name: "Thaddeus McCullough",
      email: "igannan11@microsoft.com",
      password: bcrypt.hashSync("gf5498fsglö?++df3489!!fds23"),
      isAdmin: false,
    },
    {
      name: "Salvatore Fisher",
      email: "lgherardi12@washington.edu",
      password: bcrypt.hashSync("gf5498fsglö?++df3489!!fds23"),
      isAdmin: false,
    },
    {
      name: "Jasmin Hermiston",
      email: "lgutridge13@sun.com",
      password: bcrypt.hashSync("gf5498fsglö?++df3489!!fds23"),
      isAdmin: false,
    },
    {
      name: "Nicklaus Cruickshank",
      email: "cslateford14@blogspot.com",
      password: bcrypt.hashSync("gf5498fsglö?++df3489!!fds23"),
      isAdmin: false,
    },
    {
      name: "Tiara Rolfson",
      email: "mhaslegrave15@springer.com",
      password: bcrypt.hashSync("gf5498fsglö?++df3489!!fds23"),
      isAdmin: false,
    },
    {
      name: "Garret Klocko",
      email: "kbrecknock16@marriott.com",
      password: bcrypt.hashSync("gf5498fsglö?++df3489!!fds23"),
      isAdmin: false,
    },
    {
      name: "Reginald Wisoky",
      email: "rlaxe17@tamu.edu",
      password: bcrypt.hashSync("gf5498fsglö?++df3489!!fds23"),
      isAdmin: false,
    },
    {
      name: "Humberto Botsford",
      email: "pidill18@china.com.cn",
      password: bcrypt.hashSync("gf5498fsglö?++df3489!!fds23"),
      isAdmin: false,
    },
    {
      name: "Justus Sipes",
      email: "rmcritchie19@topsy.com",
      password: bcrypt.hashSync("gf5498fsglö?++df3489!!fds23"),
      isAdmin: false,
    },
    {
      name: "Coralie Boyle",
      email: "rlangston1a@51.la",
      password: bcrypt.hashSync("gf5498fsglö?++df3489!!fds23"),
      isAdmin: false,
    },
    {
      name: "Felicita Gibson",
      email: "jevanson1b@admin.ch",
      password: bcrypt.hashSync("gf5498fsglö?++df3489!!fds23"),
      isAdmin: false,
    },
    {
      name: "Pearl Blick",
      email: "ssarjant1c@statcounter.com",
      password: bcrypt.hashSync("gf5498fsglö?++df3489!!fds23"),
      isAdmin: false,
    },
    {
      name: "Johnathon Predovic",
      email: "xlinster1d@bravesites.com",
      password: bcrypt.hashSync("gf5498fsglö?++df3489!!fds23"),
      isAdmin: false,
    },
    {
      name: "Jerry Kertzmann",
      email: "tmullender1e@scientificamerican.com",
      password: bcrypt.hashSync("gf5498fsglö?++df3489!!fds23"),
      isAdmin: false,
    },
    {
      name: "Elbert Gottlieb",
      email: "gmein1f@nasa.gov",
      password: bcrypt.hashSync("gf5498fsglö?++df3489!!fds23"),
      isAdmin: false,
    },
    {
      name: "Sincere Mueller",
      email: "gmaccumeskey1g@buzzfeed.com",
      password: bcrypt.hashSync("gf5498fsglö?++df3489!!fds23"),
      isAdmin: false,
    },
    {
      name: "Telly Spinka",
      email: "bpetts1h@smugmug.com",
      password: bcrypt.hashSync("gf5498fsglö?++df3489!!fds23"),
      isAdmin: false,
    },
    {
      name: "Hal Keebler",
      email: "ajozef1i@usatoday.com",
      password: bcrypt.hashSync("gf5498fsglö?++df3489!!fds23"),
      isAdmin: false,
    },
    {
      name: "Megane Armstrong",
      email: "oyakushkev1j@oracle.com",
      password: bcrypt.hashSync("gf5498fsglö?++df3489!!fds23"),
      isAdmin: false,
    },
    {
      name: "Toy Olson",
      email: "bpickering1k@clickbank.net",
      password: bcrypt.hashSync("gf5498fsglö?++df3489!!fds23"),
      isAdmin: false,
    },
    {
      name: "Deanna Glover",
      email: "nworley1l@thetimes.co.uk",
      password: bcrypt.hashSync("gf5498fsglö?++df3489!!fds23"),
      isAdmin: false,
    },
    {
      name: "Marcella Shanahan",
      email: "klife1m@i2i.jp",
      password: bcrypt.hashSync("gf5498fsglö?++df3489!!fds23"),
      isAdmin: false,
    },
    {
      name: "Rachel Jacobson",
      email: "dlambarth1n@blinklist.com",
      password: bcrypt.hashSync("gf5498fsglö?++df3489!!fds23"),
      isAdmin: false,
    },
    {
      name: "Nora Sawayn",
      email: "cepgrave1o@biblegateway.com",
      password: bcrypt.hashSync("gf5498fsglö?++df3489!!fds23"),
      isAdmin: false,
    },
    {
      name: "Mozell O'Connell",
      email: "mpoyner1p@google.co.uk",
      password: bcrypt.hashSync("gf5498fsglö?++df3489!!fds23"),
      isAdmin: false,
    },
    {
      name: "Nasir Leuschke",
      email: "eburras1q@go.com",
      password: bcrypt.hashSync("gf5498fsglö?++df3489!!fds23"),
      isAdmin: false,
    },
    {
      name: "Quinn Witting",
      email: "gfernandes1r@virginia.edu",
      password: bcrypt.hashSync("gf5498fsglö?++df3489!!fds23"),
      isAdmin: false,
    },
    {
      name: "Jeanne O'Keefe",
      email: "hollet1s@trellian.com",
      password: bcrypt.hashSync("gf5498fsglö?++df3489!!fds23"),
      isAdmin: false,
    },
    {
      name: "Terrence Koelpin",
      email: "hfasey1t@home.pl",
      password: bcrypt.hashSync("gf5498fsglö?++df3489!!fds23"),
      isAdmin: false,
    },
    {
      name: "Davonte Heaney",
      email: "gbarhams1u@cnet.com",
      password: bcrypt.hashSync("gf5498fsglö?++df3489!!fds23"),
      isAdmin: false,
    },
    {
      name: "Everette Prohaska",
      email: "rstrettle1v@globo.com",
      password: bcrypt.hashSync("gf5498fsglö?++df3489!!fds23"),
      isAdmin: false,
    },
    {
      name: "Oda Schmidt",
      email: "btegler1w@elegantthemes.com",
      password: bcrypt.hashSync("gf5498fsglö?++df3489!!fds23"),
      isAdmin: false,
    },
    {
      name: "Twila Padberg",
      email: "cmasurel1x@baidu.com",
      password: bcrypt.hashSync("gf5498fsglö?++df3489!!fds23"),
      isAdmin: false,
    },
    {
      name: "Amelia Mann",
      email: "omarsland1y@washingtonpost.com",
      password: bcrypt.hashSync("gf5498fsglö?++df3489!!fds23"),
      isAdmin: false,
    },
    {
      name: "Frederique Boehm",
      email: "mcrumpe1z@techcrunch.com",
      password: bcrypt.hashSync("gf5498fsglö?++df3489!!fds23"),
      isAdmin: false,
    },
    {
      name: "Clotilde Larson",
      email: "wfeldon20@netlog.com",
      password: bcrypt.hashSync("gf5498fsglö?++df3489!!fds23"),
      isAdmin: false,
    },
    {
      name: "Moriah Mills",
      email: "ahinckes21@google.es",
      password: bcrypt.hashSync("gf5498fsglö?++df3489!!fds23"),
      isAdmin: false,
    },
    {
      name: "Claudia Dooley",
      email: "ptilson22@360.cn",
      password: bcrypt.hashSync("gf5498fsglö?++df3489!!fds23"),
      isAdmin: false,
    },
    {
      name: "Deon Gutkowski",
      email: "cgaber23@prlog.org",
      password: bcrypt.hashSync("gf5498fsglö?++df3489!!fds23"),
      isAdmin: false,
    },
    {
      name: "Amos Weimann",
      email: "rkingswood24@usa.gov",
      password: bcrypt.hashSync("gf5498fsglö?++df3489!!fds23"),
      isAdmin: false,
    },
    {
      name: "Frankie Hudson",
      email: "dbuist25@hao123.com",
      password: bcrypt.hashSync("gf5498fsglö?++df3489!!fds23"),
      isAdmin: false,
    },
    {
      name: "Harrison Lemke",
      email: "pmoraleda26@symantec.com",
      password: bcrypt.hashSync("gf5498fsglö?++df3489!!fds23"),
      isAdmin: false,
    },
    {
      name: "Guy Franecki",
      email: "vkohrt27@hostgator.com",
      password: bcrypt.hashSync("gf5498fsglö?++df3489!!fds23"),
      isAdmin: false,
    },
    {
      name: "Sidney Rutherford",
      email: "capplewhite28@nationalgeographic.com",
      password: bcrypt.hashSync("gf5498fsglö?++df3489!!fds23"),
      isAdmin: false,
    },
    {
      name: "Maymie Yundt",
      email: "kogilvy29@blogtalkradio.com",
      password: bcrypt.hashSync("gf5498fsglö?++df3489!!fds23"),
      isAdmin: false,
    },
    {
      name: "Rita Shields",
      email: "gconford2a@wordpress.com",
      password: bcrypt.hashSync("gf5498fsglö?++df3489!!fds23"),
      isAdmin: false,
    },
    {
      name: "Aniya Wisozk",
      email: "dmantle2b@reuters.com",
      password: bcrypt.hashSync("gf5498fsglö?++df3489!!fds23"),
      isAdmin: false,
    },
    {
      name: "Angelica Metz",
      email: "kpondjones2c@nsw.gov.au",
      password: bcrypt.hashSync("gf5498fsglö?++df3489!!fds23"),
      isAdmin: false,
    },
    {
      name: "Rupert Upton",
      email: "whuman2d@hp.com",
      password: bcrypt.hashSync("gf5498fsglö?++df3489!!fds23"),
      isAdmin: false,
    },
    {
      name: "Eleazar Torp",
      email: "fschlagman2e@deliciousdays.com",
      password: bcrypt.hashSync("gf5498fsglö?++df3489!!fds23"),
      isAdmin: false,
    },
    {
      name: "Anais Yundt",
      email: "agreenhouse2f@mashable.com",
      password: bcrypt.hashSync("gf5498fsglö?++df3489!!fds23"),
      isAdmin: false,
    },
    {
      name: "Gayle Krajcik",
      email: "cdwyr2g@shop-pro.jp",
      password: bcrypt.hashSync("gf5498fsglö?++df3489!!fds23"),
      isAdmin: false,
    },
    {
      name: "Wilma Hickle",
      email: "omottley2h@hugedomains.com",
      password: bcrypt.hashSync("gf5498fsglö?++df3489!!fds23"),
      isAdmin: false,
    },
    {
      name: "Arne Jacobs",
      email: "hyaknov2i@hhs.gov",
      password: bcrypt.hashSync("gf5498fsglö?++df3489!!fds23"),
      isAdmin: false,
    },
    {
      name: "Emely Schmitt",
      email: "clambol2j@bloglovin.com",
      password: bcrypt.hashSync("gf5498fsglö?++df3489!!fds23"),
      isAdmin: false,
    },
    {
      name: "Fabiola Oberbrunner",
      email: "dduggan2k@simplemachines.org",
      password: bcrypt.hashSync("gf5498fsglö?++df3489!!fds23"),
      isAdmin: false,
    },
    {
      name: "Kari Schinner",
      email: "jtossell2l@drupal.org",
      password: bcrypt.hashSync("gf5498fsglö?++df3489!!fds23"),
      isAdmin: false,
    },
    {
      name: "Rory Conn",
      email: "cchomiszewski2m@cbsnews.com",
      password: bcrypt.hashSync("gf5498fsglö?++df3489!!fds23"),
      isAdmin: false,
    },
    {
      name: "Cristobal Watsica",
      email: "bgoby2n@washingtonpost.com",
      password: bcrypt.hashSync("gf5498fsglö?++df3489!!fds23"),
      isAdmin: false,
    },
    {
      name: "Allene Harber",
      email: "cdavydochkin2o@globo.com",
      password: bcrypt.hashSync("gf5498fsglö?++df3489!!fds23"),
      isAdmin: false,
    },
    {
      name: "Lempi Runte",
      email: "zstenning2p@list-manage.com",
      password: bcrypt.hashSync("gf5498fsglö?++df3489!!fds23"),
      isAdmin: false,
    },
    {
      name: "Terrell Schuppe",
      email: "flesslie2q@google.nl",
      password: bcrypt.hashSync("gf5498fsglö?++df3489!!fds23"),
      isAdmin: false,
    },
    {
      name: "Tevin Prohaska",
      email: "pcumbes2r@networkadvertising.org",
      password: bcrypt.hashSync("gf5498fsglö?++df3489!!fds23"),
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
      averageRating: 0,
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
      averageRating: 0,
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
      averageRating: 0,
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
      averageRating: 0,
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
      averageRating: 0,
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
      averageRating: 0,
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
      averageRating: 0,
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
      averageRating: 0,
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
      averageRating: 0,
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
      averageRating: 0,
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
      averageRating: 0,
      description:
        "Mega Discount, Impression of Acqua Di Gio by GiorgioArmani concentrated attar perfume Oil",
      discountPercentage: 8.4,
    },
    {
      name: "Brown Perfume",
      slug: "brown-perfume",
      category: "fragrances",
      thumbnail: "https://dummyjson.com/image/i/products/12/thumbnail.jpg",
      images: [
        "https://dummyjson.com/image/i/products/12/1.jpg",
        "https://dummyjson.com/image/i/products/12/2.jpg",
        "https://dummyjson.com/image/i/products/12/3.png",
        "https://dummyjson.com/image/i/products/12/4.jpg",
        "https://dummyjson.com/image/i/products/12/thumbnail.jpg",
      ],
      price: 40,
      stock: 52,
      brand: "Royal_Mirage",
      reviews: [
        {
          name: "Edwina Ernser",
          rating: 2,
          comment:
            "Commodo nostrud laboris adipisicing ipsum laborum dolore deserunt deserunt dolor mollit enim cillum. Ea incididunt ipsum occaecat voluptate ex enim. Magna reprehenderit labore non adipisicing qui mollit nostrud culpa fugiat irure dolore enim. Excepteur aliquip sint cupidatat irure ex nulla excepteur.",
        },
        {
          name: "Oda Schmidt",
          rating: 3,
          comment:
            "Nulla est commodo amet nulla fugiat nisi adipisicing Lorem pariatur dolore.",
        },
        {
          name: "Trace Douglas",
          rating: 3,
          comment:
            "Velit eiusmod elit tempor cillum cupidatat incididunt cillum culpa adipisicing laboris labore Lorem incididunt. Mollit et irure qui velit ipsum exercitation anim eu ex nisi proident reprehenderit eu. Ut deserunt occaecat duis reprehenderit mollit minim voluptate ad non sit.",
        },
        {
          name: "Jeanne O'Keefe",
          rating: 4,
          comment:
            "Nulla id aliqua nulla mollit. Occaecat dolor cillum labore qui magna tempor sint enim ex exercitation adipisicing et aliqua elit dolore.",
        },
        {
          name: "Tiara Rolfson",
          rating: 1,
          comment:
            "Mollit labore in ipsum cupidatat elit exercitation incididunt proident.",
        },
        {
          name: "Davonte Heaney",
          rating: 5,
          comment:
            "Voluptate amet qui voluptate velit dolore culpa ipsum magna ad duis est nulla. Dolore Lorem in eu in cupidatat minim consequat adipisicing. Id fugiat cillum mollit Lorem commodo laborum enim ea elit elit exercitation consequat dolor ad. Labore enim laboris magna aliquip ullamco incididunt culpa laboris ut non eiusmod id.\nEnim nostrud tempor qui incididunt dolore anim amet proident consectetur nostrud culpa duis aliqua aute cillum.",
        },
        {
          name: "Maurine Stracke",
          rating: 3,
          comment:
            "Id nostrud occaecat ex reprehenderit. Excepteur eu pariatur ex consectetur eu nisi est magna culpa id sunt adipisicing eu ipsum.",
        },
        {
          name: "Arely Skiles",
          rating: 2,
          comment:
            "Sit culpa aliquip voluptate sunt voluptate fugiat laboris aute. Ex consectetur veniam aliqua sunt reprehenderit incididunt. Lorem nulla eu labore laboris cillum excepteur ut. Ullamco dolore nulla deserunt ullamco consectetur sunt veniam do.",
        },
        {
          name: "Marcel Jones",
          rating: 2,
          comment:
            "Mollit commodo amet laborum ad officia laborum irure ut officia qui duis aute. Adipisicing nulla incididunt exercitation adipisicing pariatur fugiat dolor deserunt aute aliqua veniam.",
        },
        {
          name: "Justus Sipes",
          rating: 3,
          comment: "Voluptate fugiat dolore reprehenderit duis cupidatat.",
        },
      ],
      averageRating: 0,
      description: "Royal_Mirage Sport Brown Perfume for Men & Women - 120ml",
      discountPercentage: 15.66,
    },
    {
      name: "Fog Scent Xpressio Perfume",
      slug: "fog-scent-xpressio-perfume",
      category: "fragrances",
      thumbnail: "https://dummyjson.com/image/i/products/13/thumbnail.webp",
      images: [
        "https://dummyjson.com/image/i/products/13/1.jpg",
        "https://dummyjson.com/image/i/products/13/2.png",
        "https://dummyjson.com/image/i/products/13/3.jpg",
        "https://dummyjson.com/image/i/products/13/4.jpg",
        "https://dummyjson.com/image/i/products/13/thumbnail.webp",
      ],
      price: 13,
      stock: 61,
      brand: "Fog Scent Xpressio",
      reviews: [
        {
          name: "Felicita Gibson",
          rating: 4,
          comment:
            "Id enim aute irure quis esse nisi sint commodo veniam reprehenderit cupidatat quis enim ullamco enim. Commodo quis fugiat cupidatat. Consectetur deserunt veniam deserunt aute duis enim culpa sint ipsum in aliqua dolor eu.\nVeniam sunt ea dolore cupidatat cillum. Proident tempor enim anim esse magna exercitation fugiat consectetur Lorem do. Magna non commodo sunt veniam officia eu enim aliquip aliquip.",
        },
        {
          name: "Pearl Blick",
          rating: 5,
          comment:
            "Officia tempor deserunt pariatur aliquip ipsum laboris reprehenderit exercitation voluptate nostrud eiusmod ex ea id minim. Veniam minim commodo anim et tempor eiusmod enim proident ad cupidatat velit veniam ex exercitation. Nulla pariatur do nostrud sint deserunt. Tempor ut voluptate fugiat sit ipsum id reprehenderit veniam.\nEx exercitation Lorem aute minim pariatur minim labore velit. Consequat sunt laboris minim nulla ad non veniam voluptate voluptate cupidatat enim.",
        },
      ],
      averageRating: 0,
      description:
        "Product details of Best Fog Scent Xpressio Perfume 100ml For Men cool long lasting perfumes for Men",
      discountPercentage: 8.14,
    },
    {
      name: "Non-Alcoholic Concentrated Perfume Oil",
      slug: "non-alcoholic-concentrated-perfume-oil",
      category: "fragrances",
      thumbnail: "https://dummyjson.com/image/i/products/14/thumbnail.jpg",
      images: [
        "https://dummyjson.com/image/i/products/14/1.jpg",
        "https://dummyjson.com/image/i/products/14/2.jpg",
        "https://dummyjson.com/image/i/products/14/3.jpg",
        "https://dummyjson.com/image/i/products/14/thumbnail.jpg",
      ],
      price: 120,
      stock: 114,
      brand: "Al Munakh",
      reviews: [
        {
          name: "Tiara Rolfson",
          rating: 1,
          comment:
            "Elit magna aliqua et cupidatat Lorem consectetur consequat esse. Aliqua consequat aliquip adipisicing voluptate sint labore ipsum esse voluptate mollit ipsum commodo labore. Voluptate id labore et minim eu velit ipsum Lorem nostrud aliquip velit. Proident consequat Lorem exercitation aliqua minim labore deserunt aliquip ipsum exercitation adipisicing voluptate fugiat eu et.\nAnim culpa ullamco cillum cupidatat. Ipsum aute adipisicing voluptate ullamco culpa irure culpa culpa ut. Quis occaecat sit occaecat fugiat cillum est nulla elit ullamco aute.",
        },
        {
          name: "Garret Klocko",
          rating: 5,
          comment: "Enim veniam esse dolore.",
        },
      ],
      averageRating: 0,
      description:
        "Original Al Munakh® by Mahal Al Musk | Our Impression of Climate | 6ml Non-Alcoholic Concentrated Perfume Oil",
      discountPercentage: 15.6,
    },
    {
      name: "Eau De Perfume Spray",
      slug: "eau-de-perfume-spray",
      category: "fragrances",
      thumbnail: "https://dummyjson.com/image/i/products/15/thumbnail.jpg",
      images: [
        "https://dummyjson.com/image/i/products/15/1.jpg",
        "https://dummyjson.com/image/i/products/15/2.jpg",
        "https://dummyjson.com/image/i/products/15/3.jpg",
        "https://dummyjson.com/image/i/products/15/4.jpg",
        "https://dummyjson.com/image/i/products/15/thumbnail.jpg",
      ],
      price: 30,
      stock: 105,
      brand: "Lord - Al-Rehab",
      reviews: [
        {
          name: "Lee Schmidt",
          rating: 2,
          comment:
            "Eiusmod sunt do labore. Do minim fugiat eu labore sint mollit exercitation culpa incididunt cupidatat.",
        },
        {
          name: "Mozell O'Connell",
          rating: 3,
          comment:
            "In aliquip eiusmod nostrud.\nUllamco nostrud id do aute nisi aute enim do. Excepteur consequat fugiat irure Lorem consequat et est esse. In voluptate labore aliqua officia consequat officia ex laboris est dolor esse laboris ex nulla.",
        },
        {
          name: "Alison Reichert",
          rating: 5,
          comment:
            "Esse in aliqua labore. Mollit quis ipsum eiusmod aliquip eiusmod ad quis veniam elit tempor nulla veniam velit in est.\nReprehenderit veniam culpa ad tempor cupidatat consequat adipisicing anim deserunt ullamco ea. Consequat nostrud ut sint veniam esse nostrud adipisicing reprehenderit adipisicing.",
        },
        {
          name: "Rory Conn",
          rating: 3,
          comment:
            "Lorem ut culpa culpa fugiat nisi minim culpa amet mollit nisi ut sunt ea.\nNulla et minim ad. Elit minim aute laborum sit laboris consequat tempor do pariatur laboris. Aute labore ea culpa magna proident mollit esse sint velit ex.",
        },
      ],
      averageRating: 0,
      description:
        "Genuine  Al-Rehab spray perfume from UAE/Saudi Arabia/Yemen High Quality",
      discountPercentage: 10.99,
    },
    {
      name: "Hyaluronic Acid Serum",
      slug: "hyaluronic-acid-serum",
      category: "skincare",
      thumbnail: "https://dummyjson.com/image/i/products/16/thumbnail.jpg",
      images: [
        "https://dummyjson.com/image/i/products/16/1.png",
        "https://dummyjson.com/image/i/products/16/2.webp",
        "https://dummyjson.com/image/i/products/16/3.jpg",
        "https://dummyjson.com/image/i/products/16/4.jpg",
        "https://dummyjson.com/image/i/products/16/thumbnail.jpg",
      ],
      price: 19,
      stock: 110,
      brand: "L'Oreal Paris",
      reviews: [
        {
          name: "Amos Weimann",
          rating: 4,
          comment:
            "Irure laborum cillum nisi incididunt sunt duis quis deserunt eu fugiat do sint sunt ipsum enim.\nCulpa consequat exercitation culpa eiusmod cillum.",
        },
        {
          name: "Thaddeus McCullough",
          rating: 5,
          comment:
            "Cillum magna cupidatat sit Lorem est laborum et enim et do minim dolore commodo laboris.\nOccaecat commodo ipsum duis in laboris enim deserunt est ad duis anim laboris sint. Laborum dolore ullamco minim consectetur.",
        },
        {
          name: "Hal Keebler",
          rating: 4,
          comment:
            "Irure occaecat ipsum mollit tempor laboris eiusmod aliqua nisi aliquip qui duis consequat anim.",
        },
        {
          name: "Humberto Botsford",
          rating: 4,
          comment:
            "Enim excepteur commodo aliquip duis cillum cupidatat sit amet id irure.",
        },
      ],
      averageRating: 0,
      description:
        "L'OrÃ©al Paris introduces Hyaluron Expert Replumping Serum formulated with 1.5% Hyaluronic Acid",
      discountPercentage: 13.31,
    },
    {
      name: "Tree Oil 30ml",
      slug: "tree-oil-30ml",
      category: "skincare",
      thumbnail: "https://dummyjson.com/image/i/products/17/thumbnail.jpg",
      images: [
        "https://dummyjson.com/image/i/products/17/1.jpg",
        "https://dummyjson.com/image/i/products/17/2.jpg",
        "https://dummyjson.com/image/i/products/17/3.jpg",
        "https://dummyjson.com/image/i/products/17/thumbnail.jpg",
      ],
      price: 12,
      stock: 78,
      brand: "Hemani Tea",
      reviews: [
        {
          name: "Hal Keebler",
          rating: 5,
          comment:
            "Lorem nulla exercitation labore in adipisicing. Occaecat adipisicing aliqua laboris exercitation incididunt ullamco mollit cillum. Laboris mollit quis pariatur est voluptate ad commodo ad incididunt incididunt. Laboris proident adipisicing sint consequat anim voluptate eiusmod anim ex nisi velit pariatur proident adipisicing.",
        },
        {
          name: "Lee Schmidt",
          rating: 2,
          comment:
            "Tempor culpa ea cillum nostrud nostrud consectetur labore. Voluptate tempor dolor consectetur anim consequat proident.",
        },
        {
          name: "Nasir Leuschke",
          rating: 3,
          comment:
            "Duis laborum cillum elit minim ea pariatur anim proident do culpa et do labore exercitation. Cupidatat reprehenderit quis ullamco et aute excepteur pariatur.\nReprehenderit amet commodo non nisi sint id do aliqua adipisicing ullamco quis sunt proident reprehenderit Lorem.",
        },
        {
          name: "Marcel Jones",
          rating: 5,
          comment:
            "Id reprehenderit incididunt id sint consectetur veniam cupidatat consequat ea adipisicing laboris occaecat officia dolor. Eiusmod dolor ipsum qui elit irure culpa enim esse elit esse excepteur et et magna.\nAdipisicing nisi incididunt velit nostrud laborum velit laboris adipisicing id nostrud ad. Aliquip nisi voluptate dolore nisi sunt ullamco qui mollit ullamco. Lorem exercitation aliquip occaecat nostrud sit dolore sit eiusmod irure et ut in cupidatat deserunt. Cupidatat sunt sit ex nisi dolore sit et minim id pariatur est magna do.",
        },
      ],
      averageRating: 0,
      description:
        "Tea tree oil contains a number of compounds, including terpinen-4-ol, that have been shown to kill certain bacteria,",
      discountPercentage: 4.09,
    },
    {
      name: "Oil Free Moisturizer 100ml",
      slug: "oil-free-moisturizer-100ml",
      category: "skincare",
      thumbnail: "https://dummyjson.com/image/i/products/18/thumbnail.jpg",
      images: [
        "https://dummyjson.com/image/i/products/18/1.jpg",
        "https://dummyjson.com/image/i/products/18/2.jpg",
        "https://dummyjson.com/image/i/products/18/3.jpg",
        "https://dummyjson.com/image/i/products/18/4.jpg",
        "https://dummyjson.com/image/i/products/18/thumbnail.jpg",
      ],
      price: 40,
      stock: 88,
      brand: "Dermive",
      reviews: [
        {
          name: "Guy Franecki",
          rating: 4,
          comment:
            "Ea eiusmod et deserunt aliquip Lorem ea enim irure adipisicing ad labore ullamco pariatur. Pariatur aliquip do dolor. Proident consectetur aliqua Lorem. Reprehenderit laboris voluptate ipsum reprehenderit occaecat ipsum proident anim consequat.\nElit elit eu Lorem deserunt ullamco cupidatat. Laboris eiusmod nisi ipsum veniam commodo labore Lorem.",
        },
        {
          name: "Maymie Yundt",
          rating: 4,
          comment:
            "Irure tempor officia ipsum cupidatat mollit amet laboris sunt nisi elit non voluptate. Est incididunt ullamco enim elit nulla non elit commodo exercitation tempor adipisicing in quis.",
        },
        {
          name: "Quinn Witting",
          rating: 2,
          comment:
            "Aliquip irure nulla duis commodo.\nAliqua consequat consectetur duis elit.",
        },
        {
          name: "Tiara Rolfson",
          rating: 1,
          comment:
            "Occaecat mollit enim sint fugiat amet.\nAmet do qui incididunt ullamco deserunt incididunt non cupidatat et aliqua ipsum.",
        },
        {
          name: "Rupert Upton",
          rating: 3,
          comment:
            "Officia labore Lorem excepteur duis magna reprehenderit cupidatat occaecat enim consectetur in veniam adipisicing. Nulla deserunt ipsum excepteur labore duis commodo commodo ex deserunt aute eiusmod aliqua. Incididunt sunt et laborum deserunt nisi do duis qui eiusmod veniam nisi occaecat.\nEsse magna Lorem aute mollit pariatur consectetur mollit cillum aliqua eu irure do laboris aliquip. Minim consequat est eiusmod amet duis voluptate irure ut magna.",
        },
        {
          name: "Lee Schmidt",
          rating: 3,
          comment:
            "Excepteur anim laborum veniam incididunt laboris enim aliquip ipsum elit.",
        },
        {
          name: "Lenna Renner",
          rating: 4,
          comment:
            "Et non consectetur aliqua quis sit nulla nostrud exercitation sint ex Lorem. Adipisicing velit esse quis exercitation qui labore.",
        },
        {
          name: "Kaya Emard",
          rating: 3,
          comment:
            "Aute non reprehenderit nostrud amet deserunt cillum quis labore proident voluptate proident. Sit dolore elit fugiat dolore labore id ea pariatur occaecat laborum irure incididunt. Excepteur enim tempor in sint sit culpa commodo pariatur minim irure aliqua ullamco sit.\nAliquip anim qui excepteur ut do ex reprehenderit commodo labore aute esse sit consectetur occaecat occaecat. Ex nisi cillum ipsum officia aliquip.",
        },
      ],
      averageRating: 0,
      description:
        "Dermive Oil Free Moisturizer with SPF 20 is specifically formulated with ceramides, hyaluronic acid & sunscreen.",
      discountPercentage: 13.1,
    },
    {
      name: "Skin Beauty Serum.",
      slug: "skin-beauty-serum.",
      category: "skincare",
      thumbnail: "https://dummyjson.com/image/i/products/19/thumbnail.jpg",
      images: [
        "https://dummyjson.com/image/i/products/19/1.jpg",
        "https://dummyjson.com/image/i/products/19/2.jpg",
        "https://dummyjson.com/image/i/products/19/3.png",
        "https://dummyjson.com/image/i/products/19/thumbnail.jpg",
      ],
      price: 46,
      stock: 54,
      brand: "ROREC White Rice",
      reviews: [
        {
          name: "Miles Cummerata",
          rating: 5,
          comment:
            "Ut ea amet consequat cillum incididunt nostrud eiusmod sint id nulla eu dolor. Irure elit velit laboris enim et incididunt ea incididunt.\nProident sunt qui occaecat incididunt nisi qui ut laborum fugiat occaecat. Ullamco veniam amet sunt elit elit cillum occaecat nisi eu nisi cillum anim sint laboris laboris. Minim est est aliqua labore et cillum proident ut laboris nulla anim nulla.",
        },
      ],
      averageRating: 0,
      description:
        "Product name: rorec collagen hyaluronic acid white face serum riceNet weight: 15 m",
      discountPercentage: 10.68,
    },
    {
      name: "Freckle Treatment Cream- 15gm",
      slug: "freckle-treatment-cream--15gm",
      category: "skincare",
      thumbnail: "https://dummyjson.com/image/i/products/20/thumbnail.jpg",
      images: [
        "https://dummyjson.com/image/i/products/20/1.jpg",
        "https://dummyjson.com/image/i/products/20/2.jpg",
        "https://dummyjson.com/image/i/products/20/3.jpg",
        "https://dummyjson.com/image/i/products/20/4.jpg",
        "https://dummyjson.com/image/i/products/20/thumbnail.jpg",
      ],
      price: 70,
      stock: 140,
      brand: "Fair & Clear",
      reviews: [
        {
          name: "Salvatore Fisher",
          rating: 1,
          comment:
            "Cillum sint duis occaecat commodo ea non ex ex ipsum excepteur elit consequat. Aliqua aute elit mollit culpa fugiat in culpa. Duis esse laboris cillum duis qui ullamco eiusmod est do amet.\nUt excepteur nisi nisi duis ad adipisicing proident enim cillum in id occaecat magna. Incididunt aute duis quis et mollit aliquip elit cupidatat aliqua ex Lorem. Consectetur ut quis aliqua pariatur consectetur exercitation quis consequat. Aute est excepteur officia excepteur incididunt irure duis.",
        },
        {
          name: "Nasir Leuschke",
          rating: 2,
          comment: "Ut amet eiusmod officia amet Lorem magna.",
        },
        {
          name: "Reginald Wisoky",
          rating: 4,
          comment:
            "Ut non proident minim proident amet. Elit laborum Lorem aliquip commodo. Commodo eiusmod labore veniam minim amet irure consectetur deserunt occaecat consequat aute cupidatat.",
        },
        {
          name: "Hal Keebler",
          rating: 5,
          comment:
            "Culpa in voluptate veniam reprehenderit pariatur elit. Esse cupidatat ea in culpa dolor occaecat. Sit mollit magna exercitation id labore proident consectetur mollit labore culpa voluptate commodo id duis.",
        },
        {
          name: "Mavis Schultz",
          rating: 2,
          comment:
            "Exercitation exercitation qui cupidatat et consectetur reprehenderit.",
        },
        {
          name: "Eleazar Torp",
          rating: 1,
          comment:
            "Non in et irure. Est quis id aliqua eiusmod. Consectetur elit commodo cupidatat ea aute excepteur do ad magna. Sunt ullamco laborum veniam deserunt adipisicing duis.\nConsequat minim incididunt proident.",
        },
        {
          name: "Miles Cummerata",
          rating: 3,
          comment:
            "Mollit consectetur irure sint velit consequat sint deserunt ut cupidatat et.",
        },
      ],
      averageRating: 0,
      description:
        "Fair & Clear is Pakistan's only pure Freckle cream which helpsfade Freckles, Darkspots and pigments. Mercury level is 0%, so there are no side effects.",
      discountPercentage: 16.99,
    },
    {
      name: "- Daal Masoor 500 grams",
      slug: "--daal-masoor-500-grams",
      category: "groceries",
      thumbnail: "https://dummyjson.com/image/i/products/21/thumbnail.png",
      images: [
        "https://dummyjson.com/image/i/products/21/1.png",
        "https://dummyjson.com/image/i/products/21/2.jpg",
        "https://dummyjson.com/image/i/products/21/3.jpg",
      ],
      price: 20,
      stock: 133,
      brand: "Saaf & Khaas",
      reviews: [
        {
          name: "Humberto Botsford",
          rating: 5,
          comment:
            "Dolore est duis pariatur Lorem nisi adipisicing aliquip occaecat occaecat commodo laborum amet.\nExercitation id reprehenderit id quis est exercitation. Laboris adipisicing elit quis. Laborum amet aliqua magna consequat velit.",
        },
        {
          name: "Marcel Jones",
          rating: 1,
          comment:
            "Voluptate in tempor excepteur tempor non esse enim. Ad ex tempor qui aute occaecat ex voluptate nulla et nostrud. Lorem ex ex sit ea commodo adipisicing proident officia mollit. Dolore mollit dolore tempor aliqua aliqua.",
        },
        {
          name: "Coralie Boyle",
          rating: 3,
          comment:
            "Id ullamco ex magna sit dolor sint occaecat culpa officia do.",
        },
        {
          name: "Edwina Ernser",
          rating: 4,
          comment:
            "Incididunt cupidatat proident irure sunt. Non mollit ex labore proident dolor irure sint. In labore laboris id labore ex mollit fugiat. Ut aliquip Lorem ex ex nisi enim do proident pariatur in laborum.",
        },
      ],
      averageRating: 0,
      description: "Fine quality Branded Product Keep in a cool and dry place",
      discountPercentage: 4.81,
    },
    {
      name: "Elbow Macaroni - 400 gm",
      slug: "elbow-macaroni---400-gm",
      category: "groceries",
      thumbnail: "https://dummyjson.com/image/i/products/22/thumbnail.jpg",
      images: [
        "https://dummyjson.com/image/i/products/22/1.jpg",
        "https://dummyjson.com/image/i/products/22/2.jpg",
        "https://dummyjson.com/image/i/products/22/3.jpg",
      ],
      price: 14,
      stock: 146,
      brand: "Bake Parlor Big",
      reviews: [
        {
          name: "Coralie Boyle",
          rating: 2,
          comment:
            "Amet aliqua nulla magna consectetur sint velit ea sunt. Occaecat amet non qui tempor veniam.",
        },
        {
          name: "Tiara Rolfson",
          rating: 3,
          comment:
            "Ad duis minim mollit pariatur deserunt.\nIn nulla consequat elit eu aliquip pariatur. Elit et proident eiusmod magna incididunt aliqua laborum ipsum proident eiusmod. Commodo eu laboris enim velit.",
        },
        {
          name: "Allene Harber",
          rating: 1,
          comment: "Excepteur ad id excepteur aliqua et sit.",
        },
        {
          name: "Lempi Runte",
          rating: 4,
          comment:
            "Dolor esse proident fugiat excepteur do laboris dolore enim qui. Ad deserunt cillum sint id qui labore quis non ex nulla labore. Culpa fugiat ipsum ea excepteur ullamco. Dolor laboris ad minim quis cupidatat fugiat ea est ea laboris.\nCillum fugiat ad id elit esse veniam tempor cupidatat nulla cupidatat laboris ipsum consequat minim. Officia non nostrud nisi et ea eiusmod labore commodo. In officia dolor commodo dolore enim cupidatat pariatur aliquip eu pariatur cupidatat ut consectetur quis.",
        },
        {
          name: "Nora Sawayn",
          rating: 1,
          comment:
            "Esse cupidatat consectetur ex. Ut ullamco irure laborum occaecat id esse quis. Enim mollit eu ad reprehenderit mollit adipisicing elit adipisicing et cupidatat ipsum. Velit consequat qui et nulla sunt velit consectetur do eiusmod id culpa voluptate in sunt.\nOfficia aliqua exercitation voluptate amet mollit et aute est officia incididunt duis anim excepteur.",
        },
        {
          name: "Lee Schmidt",
          rating: 4,
          comment:
            "Veniam tempor Lorem adipisicing dolore elit. Dolore in adipisicing ipsum consequat in officia proident magna eu adipisicing id nostrud. Nulla do consequat culpa laboris id minim laboris ullamco. Pariatur laboris elit nisi anim in Lorem mollit reprehenderit et sit.\nConsectetur cupidatat magna mollit consectetur id. Aliqua non ullamco in reprehenderit enim mollit adipisicing ut. Pariatur commodo proident ex enim reprehenderit commodo excepteur consequat sit incididunt. Ea id esse incididunt nostrud ut nisi laborum eiusmod ut quis.",
        },
        {
          name: "Angelica Baumbach",
          rating: 3,
          comment:
            "Culpa officia sunt velit ipsum cillum duis est adipisicing velit. Incididunt Lorem ipsum culpa.\nOfficia commodo ad exercitation sint commodo ipsum. Ea anim tempor exercitation ea deserunt fugiat dolor tempor ea officia dolore tempor.",
        },
        {
          name: "Quinn Witting",
          rating: 5,
          comment:
            "Ex tempor sunt incididunt sint deserunt eiusmod laborum non. Non labore eu elit nulla ea magna est aute non deserunt quis. Excepteur veniam adipisicing proident tempor consectetur.",
        },
        {
          name: "Nasir Leuschke",
          rating: 5,
          comment:
            "Sunt veniam ad Lorem dolor laboris non nulla tempor. Qui et consequat mollit et proident veniam nisi ut aute labore veniam nostrud elit non esse.\nPariatur esse consectetur nisi nisi. Labore laboris consectetur ea aliquip quis ullamco. Reprehenderit Lorem excepteur officia nulla sunt minim incididunt.",
        },
      ],
      averageRating: 0,
      description: "Product details of Bake Parlor Big Elbow Macaroni - 400 gm",
      discountPercentage: 15.58,
    },
    {
      name: "Orange Essence Food Flavou",
      slug: "orange-essence-food-flavou",
      category: "groceries",
      thumbnail: "https://dummyjson.com/image/i/products/23/thumbnail.jpg",
      images: [
        "https://dummyjson.com/image/i/products/23/1.jpg",
        "https://dummyjson.com/image/i/products/23/2.jpg",
        "https://dummyjson.com/image/i/products/23/3.jpg",
        "https://dummyjson.com/image/i/products/23/4.jpg",
        "https://dummyjson.com/image/i/products/23/thumbnail.jpg",
      ],
      price: 14,
      stock: 26,
      brand: "Baking Food Items",
      reviews: [
        {
          name: "Maymie Yundt",
          rating: 3,
          comment:
            "Non sunt aliquip quis magna cillum irure pariatur. Eu sit enim ea exercitation voluptate consequat.\nSunt pariatur anim qui. Dolore ullamco labore magna ut tempor eu tempor fugiat ullamco et nulla. Eu culpa esse enim cupidatat proident ea nulla officia. Consequat veniam nostrud adipisicing nostrud sint minim.",
        },
      ],
      averageRating: 0,
      description:
        "Specifications of Orange Essence Food Flavour For Cakes and Baking Food Item",
      discountPercentage: 8.04,
    },
    {
      name: "cereals muesli fruit nuts",
      slug: "cereals-muesli-fruit-nuts",
      category: "groceries",
      thumbnail: "https://dummyjson.com/image/i/products/24/thumbnail.jpg",
      images: [
        "https://dummyjson.com/image/i/products/24/1.jpg",
        "https://dummyjson.com/image/i/products/24/2.jpg",
        "https://dummyjson.com/image/i/products/24/3.jpg",
        "https://dummyjson.com/image/i/products/24/4.jpg",
        "https://dummyjson.com/image/i/products/24/thumbnail.jpg",
      ],
      price: 46,
      stock: 113,
      brand: "fauji",
      reviews: [
        {
          name: "Deanna Glover",
          rating: 1,
          comment:
            "Mollit pariatur ullamco excepteur voluptate sit eu veniam excepteur aute nulla sint quis.\nVeniam in ad occaecat eu adipisicing irure. Dolor sint minim amet dolor ipsum incididunt eiusmod eiusmod.",
        },
        {
          name: "Lenna Renner",
          rating: 5,
          comment:
            "Exercitation laboris laboris occaecat qui tempor labore. Sunt reprehenderit id ex pariatur nisi aute anim. Veniam proident et et proident tempor. Elit minim eiusmod enim eiusmod veniam dolore nisi ut aute ullamco qui adipisicing voluptate.\nCillum quis occaecat tempor aute cillum sunt adipisicing enim magna sint. Occaecat laboris nostrud cupidatat incididunt in minim cillum aute officia ullamco minim adipisicing incididunt.",
        },
        {
          name: "Jocelyn Schuster",
          rating: 4,
          comment:
            "Veniam do aliquip mollit aliquip tempor commodo excepteur exercitation sit cillum commodo.\nMagna dolore duis anim cillum occaecat. Adipisicing officia ut sunt elit ad id amet Lorem et amet ea sunt sit.",
        },
        {
          name: "Terrell Schuppe",
          rating: 1,
          comment:
            "Non ea qui exercitation dolor id deserunt in deserunt ut ad ex adipisicing.\nVelit adipisicing pariatur sunt labore culpa qui dolor irure cillum labore. Aliqua exercitation eu est in eiusmod.",
        },
        {
          name: "Darien Witting",
          rating: 4,
          comment:
            "Anim sit veniam Lorem pariatur dolor cupidatat officia culpa dolore dolor cupidatat.\nReprehenderit cillum ea ad magna amet amet. Non anim nisi tempor minim aliqua velit.",
        },
      ],
      averageRating: 0,
      description:
        "original fauji cereal muesli 250gm box pack original fauji cereals muesli fruit nuts flakes breakfast cereal break fast faujicereals cerels cerel foji fouji",
      discountPercentage: 16.8,
    },
    {
      name: "Gulab Powder 50 Gram",
      slug: "gulab-powder-50-gram",
      category: "groceries",
      thumbnail: "https://dummyjson.com/image/i/products/25/thumbnail.jpg",
      images: [
        "https://dummyjson.com/image/i/products/25/1.png",
        "https://dummyjson.com/image/i/products/25/2.jpg",
        "https://dummyjson.com/image/i/products/25/3.png",
        "https://dummyjson.com/image/i/products/25/4.jpg",
        "https://dummyjson.com/image/i/products/25/thumbnail.jpg",
      ],
      price: 70,
      stock: 47,
      brand: "Dry Rose",
      reviews: [],
      averageRating: 0,
      description:
        "Dry Rose Flower Powder Gulab Powder 50 Gram • Treats Wounds",
      discountPercentage: 13.58,
    },
    {
      name: "Plant Hanger For Home",
      slug: "plant-hanger-for-home",
      category: "home-decoration",
      thumbnail: "https://dummyjson.com/image/i/products/26/thumbnail.jpg",
      images: [
        "https://dummyjson.com/image/i/products/26/1.jpg",
        "https://dummyjson.com/image/i/products/26/2.jpg",
        "https://dummyjson.com/image/i/products/26/3.jpg",
        "https://dummyjson.com/image/i/products/26/4.jpg",
        "https://dummyjson.com/image/i/products/26/5.jpg",
        "https://dummyjson.com/image/i/products/26/thumbnail.jpg",
      ],
      price: 41,
      stock: 131,
      brand: "Boho Decor",
      reviews: [
        {
          name: "Johnathon Predovic",
          rating: 5,
          comment:
            "Aliqua velit aliqua ad tempor cupidatat magna ut cillum aliqua velit officia ullamco velit dolore eu. Aute eiusmod excepteur anim mollit sint mollit officia. Incididunt ipsum non occaecat.",
        },
        {
          name: "Pearl Blick",
          rating: 4,
          comment:
            "Quis laborum duis deserunt amet proident mollit in eiusmod non fugiat id non aliqua officia.",
        },
        {
          name: "Hal Keebler",
          rating: 3,
          comment:
            "Consequat aliquip anim exercitation commodo Lorem enim deserunt eiusmod ea.",
        },
        {
          name: "Miles Cummerata",
          rating: 1,
          comment:
            "Nisi eu sunt magna reprehenderit sit. Mollit velit ad laborum consequat ad commodo irure culpa.",
        },
        {
          name: "Kaya Emard",
          rating: 4,
          comment:
            "Nisi labore labore exercitation elit.\nEsse officia pariatur aliqua anim aliquip. Deserunt nulla fugiat aliquip sunt consequat aliquip. Lorem eiusmod qui commodo reprehenderit. Ex aliqua eiusmod aliquip velit eiusmod.",
        },
        {
          name: "Sidney Rutherford",
          rating: 1,
          comment:
            "Anim non sint nulla consequat. Culpa excepteur anim aute consectetur ad aute eiusmod pariatur enim enim Lorem deserunt minim. Commodo sint esse excepteur quis amet nisi deserunt mollit pariatur elit dolor officia amet.\nId ullamco elit enim magna amet ullamco veniam amet consequat. Id irure ad aliqua proident laborum. Ex velit reprehenderit ex aliquip mollit enim quis esse duis labore culpa laborum consectetur. Cupidatat eiusmod nisi ea nostrud minim consectetur nulla qui.",
        },
        {
          name: "Moriah Mills",
          rating: 4,
          comment:
            "Reprehenderit veniam adipisicing dolore magna excepteur fugiat proident et magna sunt elit minim eu deserunt.\nEiusmod deserunt est Lorem tempor aliquip exercitation officia adipisicing esse non esse. Ut mollit magna sint. Quis magna et dolor officia occaecat aute enim officia magna cupidatat cillum mollit in elit. Quis non dolor ullamco sunt officia ex consequat culpa quis mollit.",
        },
      ],
      averageRating: 0,
      description:
        "Boho Decor Plant Hanger For Home Wall Decoration Macrame Wall Hanging Shelf",
      discountPercentage: 17.86,
    },
    {
      name: "Flying Wooden Bird",
      slug: "flying-wooden-bird",
      category: "home-decoration",
      thumbnail: "https://dummyjson.com/image/i/products/27/thumbnail.webp",
      images: [
        "https://dummyjson.com/image/i/products/27/1.jpg",
        "https://dummyjson.com/image/i/products/27/2.jpg",
        "https://dummyjson.com/image/i/products/27/3.jpg",
        "https://dummyjson.com/image/i/products/27/4.jpg",
        "https://dummyjson.com/image/i/products/27/thumbnail.webp",
      ],
      price: 51,
      stock: 17,
      brand: "Flying Wooden",
      reviews: [],
      averageRating: 0,
      description:
        "Package Include 6 Birds with Adhesive Tape Shape: 3D Shaped Wooden Birds Material: Wooden MDF, Laminated 3.5mm",
      discountPercentage: 15.58,
    },
    {
      name: "3D Embellishment Art Lamp",
      slug: "3d-embellishment-art-lamp",
      category: "home-decoration",
      thumbnail: "https://dummyjson.com/image/i/products/28/thumbnail.jpg",
      images: [
        "https://dummyjson.com/image/i/products/28/1.jpg",
        "https://dummyjson.com/image/i/products/28/2.jpg",
        "https://dummyjson.com/image/i/products/28/3.png",
        "https://dummyjson.com/image/i/products/28/4.jpg",
        "https://dummyjson.com/image/i/products/28/thumbnail.jpg",
      ],
      price: 20,
      stock: 54,
      brand: "LED Lights",
      reviews: [
        {
          name: "Felicity O'Reilly",
          rating: 2,
          comment:
            "In id ea dolor voluptate. Adipisicing aute incididunt commodo labore do nulla qui veniam duis cupidatat amet elit.",
        },
        {
          name: "Quinn Witting",
          rating: 2,
          comment:
            "Officia et nulla officia ad dolore eu tempor id dolore anim ad nisi sunt officia. Irure excepteur nisi id voluptate dolor veniam qui voluptate magna eu. Labore incididunt veniam elit amet voluptate amet pariatur nulla deserunt fugiat do commodo pariatur ad id.\nAnim dolor occaecat est eiusmod. Ullamco eu pariatur nisi dolor aliquip anim culpa. Et officia enim aute.",
        },
        {
          name: "Frederique Boehm",
          rating: 3,
          comment:
            "Deserunt ipsum tempor qui est ullamco elit pariatur tempor nisi do adipisicing sint.\nNisi ipsum sint ad laborum ex qui Lorem ullamco est nisi quis.",
        },
        {
          name: "Felicita Gibson",
          rating: 3,
          comment:
            "Ut cillum in do sit ut incididunt tempor fugiat. Non elit ipsum adipisicing consectetur elit occaecat labore id enim irure voluptate voluptate aliquip dolor.",
        },
        {
          name: "Maymie Yundt",
          rating: 1,
          comment:
            "Veniam ullamco mollit minim aliqua culpa fugiat cillum proident reprehenderit.",
        },
        {
          name: "Kaya Emard",
          rating: 2,
          comment:
            "Sint nostrud mollit consequat dolor sit culpa duis. Non occaecat anim cupidatat labore. Ea nulla fugiat anim amet mollit ullamco in nulla pariatur mollit aliqua reprehenderit amet.\nIn consequat veniam cupidatat nisi minim ut minim esse fugiat duis esse consectetur sint ex. Quis irure Lorem et sit tempor sint. Id nisi ullamco non enim occaecat dolore quis quis cupidatat ex commodo nulla. Aliqua et non ea ea dolor quis dolore excepteur in ex.",
        },
        {
          name: "Aniya Wisozk",
          rating: 1,
          comment:
            "Qui laborum cupidatat voluptate adipisicing culpa minim sint ad ea ipsum adipisicing proident laborum proident esse. Nisi exercitation cupidatat officia ad eiusmod id Lorem nostrud.\nExercitation commodo magna voluptate mollit nisi mollit cillum anim nostrud.",
        },
        {
          name: "Oleta Abbott",
          rating: 5,
          comment:
            "Aliqua labore dolore labore irure Lorem id eiusmod Lorem dolor nulla. Ex aliquip sint est elit duis officia nostrud proident sit. Velit ea esse et aliquip pariatur ad incididunt duis fugiat dolore ut laboris ullamco.\nEiusmod Lorem amet labore tempor sunt quis ullamco commodo velit dolore deserunt minim elit.",
        },
        {
          name: "Jasmin Hermiston",
          rating: 5,
          comment:
            "Dolor cillum ea ipsum cupidatat ad minim ad deserunt in et aliquip labore voluptate anim.",
        },
        {
          name: "Marcella Shanahan",
          rating: 5,
          comment:
            "Occaecat voluptate fugiat nisi irure tempor non aliqua ut ea laboris ipsum duis dolore veniam. Reprehenderit occaecat ipsum occaecat labore enim sunt non eiusmod nostrud. Ut eiusmod labore ullamco consequat eiusmod eu dolore esse ea proident elit occaecat cupidatat.",
        },
      ],
      averageRating: 0,
      description:
        "3D led lamp sticker Wall sticker 3d wall art light on/off button  cell operated (included)",
      discountPercentage: 16.49,
    },
    {
      name: "Handcraft Chinese style",
      slug: "handcraft-chinese-style",
      category: "home-decoration",
      thumbnail: "https://dummyjson.com/image/i/products/29/thumbnail.webp",
      images: [
        "https://dummyjson.com/image/i/products/29/1.jpg",
        "https://dummyjson.com/image/i/products/29/2.jpg",
        "https://dummyjson.com/image/i/products/29/3.webp",
        "https://dummyjson.com/image/i/products/29/4.webp",
        "https://dummyjson.com/image/i/products/29/thumbnail.webp",
      ],
      price: 60,
      stock: 7,
      brand: "luxury palace",
      reviews: [
        {
          name: "Gust Purdy",
          rating: 5,
          comment:
            "Et exercitation id mollit commodo reprehenderit laborum anim culpa elit minim velit. Duis dolore proident nisi minim id cillum pariatur cillum.",
        },
        {
          name: "Telly Spinka",
          rating: 1,
          comment:
            "Eu veniam et fugiat commodo magna sunt dolore est proident id ipsum cillum velit quis. Irure sint aute laborum tempor laborum laboris in quis amet pariatur do.\nEst anim cupidatat fugiat sunt voluptate nulla. Consequat dolore ullamco in officia nisi culpa nulla nisi amet aute.",
        },
        {
          name: "Johnathon Predovic",
          rating: 4,
          comment:
            "Laboris aliqua veniam qui Lorem pariatur. Commodo mollit sit sint sit laboris eiusmod occaecat mollit ad nulla est exercitation mollit ad. Mollit consectetur exercitation irure officia cillum in Lorem sunt elit. Cupidatat ullamco velit anim commodo aliqua tempor mollit excepteur.\nDo dolor officia ut nostrud culpa ex labore qui ipsum nulla aute do sit quis. Magna aliquip ipsum sit minim ea minim eu ea anim ex adipisicing labore commodo esse cillum.",
        },
        {
          name: "Enoch Lynch",
          rating: 3,
          comment:
            "Do incididunt eiusmod consectetur. Anim duis esse velit qui. Sit occaecat proident eu irure duis anim aliqua. Dolor et proident ex id deserunt excepteur tempor proident labore fugiat voluptate mollit in.",
        },
        {
          name: "Justus Sipes",
          rating: 2,
          comment:
            "Consequat ipsum adipisicing enim ipsum consequat in magna labore.\nLabore in aliqua et tempor fugiat fugiat eiusmod magna exercitation culpa exercitation.",
        },
        {
          name: "Luciano Sauer",
          rating: 5,
          comment:
            "Ullamco enim ut in ex sit est officia aliquip mollit magna. Fugiat labore eu est dolor aliqua.",
        },
      ],
      averageRating: 0,
      description:
        "Handcraft Chinese style art luxury palace hotel villa mansion home decor ceramic vase with brass fruit plate",
      discountPercentage: 15.34,
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
      averageRating: 0,
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
      averageRating: 0,
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
      averageRating: 0,
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
      averageRating: 0,
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
      averageRating: 0,
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
      averageRating: 0,
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
      averageRating: 0,
      description:
        "Cotton Solid Color Professional Wear Sleeve Shirt Womens Work Blouses Wholesale Clothing Casual Plain Custom Top OEM Customized",
      discountPercentage: 10.89,
    },
    {
      name: "ank Tops for Womens/Girls",
      slug: "ank-tops-for-womens/girls",
      category: "tops",
      thumbnail: "https://dummyjson.com/image/i/products/37/thumbnail.jpg",
      images: [
        "https://dummyjson.com/image/i/products/37/1.jpg",
        "https://dummyjson.com/image/i/products/37/2.jpg",
        "https://dummyjson.com/image/i/products/37/3.jpg",
        "https://dummyjson.com/image/i/products/37/4.jpg",
        "https://dummyjson.com/image/i/products/37/thumbnail.jpg",
      ],
      price: 50,
      stock: 107,
      brand: "Soft Cotton",
      reviews: [
        {
          name: "Nasir Leuschke",
          rating: 5,
          comment:
            "Dolor laborum cupidatat do reprehenderit exercitation dolor exercitation irure. Incididunt nostrud voluptate Lorem deserunt dolore commodo amet mollit qui amet nulla culpa Lorem proident. Exercitation laborum proident sunt deserunt dolor ex tempor. Duis labore eu occaecat magna.\nSit laboris dolor adipisicing laboris fugiat est pariatur ex voluptate commodo cillum dolor. Cupidatat incididunt proident cupidatat sit. Nostrud aute irure voluptate eiusmod consequat ipsum. Esse officia id eiusmod.",
        },
        {
          name: "Doyle Ernser",
          rating: 4,
          comment:
            "Sit et irure aliquip quis cupidatat consectetur aliqua laboris ullamco mollit enim laboris anim. Do non commodo sunt eiusmod irure voluptate sit commodo incididunt aute cillum. Amet consectetur esse ullamco laborum proident cillum eiusmod pariatur ipsum quis do et labore esse anim. Id labore est et commodo quis aliquip quis nulla proident id.\nIpsum ullamco non ex anim irure proident id et labore deserunt in est et. Quis commodo adipisicing Lorem excepteur nisi culpa dolor voluptate mollit proident aliquip. Veniam cupidatat quis culpa non esse cupidatat excepteur. Consectetur eu esse proident minim nulla officia velit fugiat qui est Lorem dolor.",
        },
        {
          name: "Sidney Rutherford",
          rating: 5,
          comment:
            "Deserunt in cupidatat ullamco cupidatat culpa dolore dolore aliquip cupidatat fugiat ex deserunt tempor. Voluptate nisi tempor labore aliqua aliquip ut reprehenderit. Eu occaecat Lorem Lorem exercitation.",
        },
      ],
      averageRating: 0,
      description:
        "PACK OF 3 CAMISOLES ,VERY COMFORTABLE SOFT COTTON STUFF, COMFORTABLE IN ALL FOUR SEASONS",
      discountPercentage: 12.05,
    },
    {
      name: "sublimation plain kids tank",
      slug: "sublimation-plain-kids-tank",
      category: "tops",
      thumbnail: "https://dummyjson.com/image/i/products/38/thumbnail.jpg",
      images: [
        "https://dummyjson.com/image/i/products/38/1.png",
        "https://dummyjson.com/image/i/products/38/2.jpg",
        "https://dummyjson.com/image/i/products/38/3.jpg",
        "https://dummyjson.com/image/i/products/38/4.jpg",
      ],
      price: 100,
      stock: 20,
      brand: "Soft Cotton",
      reviews: [],
      averageRating: 0,
      description: "sublimation plain kids tank tops wholesale",
      discountPercentage: 11.12,
    },
    {
      name: "Women Sweaters Wool",
      slug: "women-sweaters-wool",
      category: "tops",
      thumbnail: "https://dummyjson.com/image/i/products/39/thumbnail.jpg",
      images: [
        "https://dummyjson.com/image/i/products/39/1.jpg",
        "https://dummyjson.com/image/i/products/39/2.jpg",
        "https://dummyjson.com/image/i/products/39/3.jpg",
        "https://dummyjson.com/image/i/products/39/4.jpg",
        "https://dummyjson.com/image/i/products/39/thumbnail.jpg",
      ],
      price: 600,
      stock: 55,
      brand: "Top Sweater",
      reviews: [
        {
          name: "Delfina Ziemann",
          rating: 1,
          comment:
            "Do tempor nisi dolor minim dolor mollit Lorem mollit tempor non. Qui excepteur minim in amet consectetur incididunt id excepteur pariatur ullamco proident aute. Amet consectetur duis amet nisi occaecat eiusmod deserunt ad laborum ipsum minim do. Occaecat elit aute id ullamco quis veniam Lorem occaecat anim amet proident.\nIpsum nulla velit fugiat occaecat eiusmod dolor eu labore labore dolor dolore voluptate.",
        },
        {
          name: "Claudia Dooley",
          rating: 2,
          comment:
            "Voluptate qui excepteur eiusmod deserunt quis velit cillum mollit consequat excepteur dolor. Sit adipisicing voluptate ex cillum et.",
        },
        {
          name: "Miles Cummerata",
          rating: 1,
          comment:
            "Quis deserunt laboris aliqua dolor incididunt velit consectetur ut adipisicing.\nCupidatat tempor qui laborum ea reprehenderit esse incididunt adipisicing. Velit duis anim Lorem incididunt ullamco officia aliqua anim veniam consectetur incididunt Lorem sit occaecat elit. Incididunt officia occaecat et nostrud ipsum eiusmod dolore do occaecat adipisicing velit nulla.",
        },
        {
          name: "Kaya Emard",
          rating: 2,
          comment: "Laborum deserunt labore ut dolor.",
        },
        {
          name: "Mavis Schultz",
          rating: 4,
          comment:
            "Sit eiusmod exercitation tempor commodo est irure excepteur magna fugiat Lorem. Anim enim pariatur exercitation. Commodo proident ipsum cupidatat.",
        },
        {
          name: "Jerry Kertzmann",
          rating: 1,
          comment:
            "Non qui occaecat sit ipsum occaecat cillum ipsum laborum dolor deserunt sint adipisicing excepteur.",
        },
        {
          name: "Angelica Metz",
          rating: 2,
          comment:
            "Voluptate reprehenderit culpa labore mollit ad nulla anim excepteur irure magna ullamco nisi esse.",
        },
        {
          name: "Gust Purdy",
          rating: 1,
          comment:
            "Id laborum proident duis. Qui Lorem sint consectetur veniam nisi aute et elit sit quis aute eiusmod. Cupidatat laborum tempor esse ut aute nisi irure proident qui dolor nisi. Sit proident in et laboris amet elit est.",
        },
      ],
      averageRating: 0,
      description:
        "2021 Custom Winter Fall Zebra Knit Crop Top Women Sweaters Wool Mohair Cos Customize Crew Neck Women' S Crop Top Sweater",
      discountPercentage: 17.2,
    },
    {
      name: "women winter clothes",
      slug: "women-winter-clothes",
      category: "tops",
      thumbnail: "https://dummyjson.com/image/i/products/40/thumbnail.jpg",
      images: [
        "https://dummyjson.com/image/i/products/40/1.jpg",
        "https://dummyjson.com/image/i/products/40/2.jpg",
      ],
      price: 57,
      stock: 84,
      brand: "Top Sweater",
      reviews: [
        {
          name: "Assunta Rath",
          rating: 4,
          comment:
            "Anim dolor in veniam veniam officia. Id adipisicing mollit officia elit nulla aliquip aute id enim dolore occaecat quis elit.\nDolore duis do laborum laborum ex adipisicing dolor. Non enim qui eu proident ut ut. Nisi deserunt in sunt tempor mollit deserunt ut amet minim est id nostrud culpa.",
        },
        {
          name: "Trace Douglas",
          rating: 2,
          comment:
            "Tempor esse minim ea consectetur sint sunt amet aliquip sunt tempor labore minim pariatur veniam est. Ea tempor officia tempor.\nAute ipsum aliqua irure ut sunt ipsum consectetur ex proident duis dolor duis amet nostrud. Cillum ex adipisicing aliquip esse cillum ut laboris enim ut veniam veniam nulla ex. Minim magna magna tempor aliquip in amet in mollit Lorem velit qui.",
        },
        {
          name: "Angelica Metz",
          rating: 2,
          comment:
            "Velit nisi officia esse deserunt exercitation sunt enim culpa voluptate. Labore enim ea excepteur aute. Velit ad labore in deserunt laborum enim commodo in tempor. Pariatur Lorem enim aute reprehenderit cupidatat.",
        },
        {
          name: "Humberto Botsford",
          rating: 2,
          comment:
            "Ut aliquip excepteur eu nostrud aliqua veniam Lorem duis duis pariatur aliquip adipisicing eu. Labore in nulla elit cupidatat ad est eu veniam pariatur nisi ipsum ad tempor id. Pariatur est dolor aliquip irure commodo tempor.\nAliqua est commodo magna ipsum proident reprehenderit irure voluptate anim in. Eiusmod duis occaecat ea sunt. Aute elit duis id elit quis velit. Nisi voluptate duis pariatur eiusmod ipsum ipsum.",
        },
        {
          name: "Anais Yundt",
          rating: 2,
          comment:
            "Tempor nostrud exercitation est incididunt incididunt consequat sint deserunt. Ullamco veniam est sit commodo aute deserunt adipisicing aliquip enim.",
        },
        {
          name: "Tiara Rolfson",
          rating: 2,
          comment:
            "Ipsum laboris cillum nulla minim exercitation est nulla eu culpa veniam aliquip proident dolore adipisicing ea.",
        },
        {
          name: "Luciano Sauer",
          rating: 2,
          comment:
            "Voluptate ex excepteur tempor do pariatur culpa culpa sint elit irure nulla voluptate occaecat excepteur est. Excepteur nulla cillum laborum mollit velit tempor adipisicing incididunt.",
        },
        {
          name: "Jasmin Hermiston",
          rating: 3,
          comment:
            "Laborum elit ea do nisi exercitation aute aliquip occaecat id consectetur laborum mollit tempor. Velit enim culpa adipisicing et aute sunt anim laborum cupidatat ut ea culpa laborum enim do. Laborum et id reprehenderit sunt commodo incididunt excepteur est est sit nostrud.\nIn amet aliquip reprehenderit.",
        },
        {
          name: "Macy Greenfelder",
          rating: 4,
          comment:
            "Officia cupidatat duis aliquip voluptate id aliqua Lorem tempor veniam magna aliquip ex. Minim in laborum pariatur irure ad ad quis commodo. Pariatur do voluptate mollit eiusmod. Dolore labore nisi amet ut Lorem nostrud ad eu reprehenderit.\nDo enim enim occaecat incididunt occaecat fugiat. Mollit do minim non pariatur incididunt. Et non cupidatat cillum consectetur enim ut cupidatat ad. Dolore veniam exercitation aute occaecat velit eu commodo ullamco adipisicing aute cillum elit id enim ad.",
        },
      ],
      averageRating: 0,
      description:
        "women winter clothes thick fleece hoodie top with sweat pantjogger women sweatsuit set joggers pants two piece pants set",
      discountPercentage: 13.39,
    },
    {
      name: "NIGHT SUIT",
      slug: "night-suit",
      category: "womens-dresses",
      thumbnail: "https://dummyjson.com/image/i/products/41/thumbnail.webp",
      images: [
        "https://dummyjson.com/image/i/products/41/1.jpg",
        "https://dummyjson.com/image/i/products/41/2.webp",
        "https://dummyjson.com/image/i/products/41/3.jpg",
        "https://dummyjson.com/image/i/products/41/4.jpg",
        "https://dummyjson.com/image/i/products/41/thumbnail.webp",
      ],
      price: 55,
      stock: 21,
      brand: "RED MICKY MOUSE..",
      reviews: [
        {
          name: "Clotilde Larson",
          rating: 4,
          comment:
            "Eu officia aute dolor minim ut duis consectetur. Cupidatat aute officia ad nisi occaecat nulla.",
        },
        {
          name: "Tiara Rolfson",
          rating: 3,
          comment:
            "Exercitation Lorem culpa cillum mollit nulla id ullamco aliquip deserunt. Consectetur adipisicing reprehenderit commodo non nulla non mollit est in. Amet elit irure esse. Fugiat quis officia elit enim cupidatat.",
        },
        {
          name: "Everette Prohaska",
          rating: 2,
          comment:
            "Veniam id ut proident est adipisicing eu deserunt cillum esse. Mollit ad eiusmod ipsum sunt adipisicing laboris magna incididunt.",
        },
        {
          name: "Jocelyn Schuster",
          rating: 2,
          comment:
            "Ut irure aliqua non fugiat ea sit adipisicing elit veniam.\nNon dolor duis enim non.",
        },
        {
          name: "Lenna Renner",
          rating: 5,
          comment:
            "Proident consectetur sunt nisi nostrud exercitation fugiat exercitation occaecat sint irure laborum. Aliquip qui non aliquip enim.\nCommodo aute cillum non fugiat ad sunt consequat eu.",
        },
      ],
      averageRating: 0,
      description: "NIGHT SUIT RED MICKY MOUSE..  For Girls. Fantastic Suits.",
      discountPercentage: 15.05,
    },
    {
      name: "Stiched Kurta plus trouser",
      slug: "stiched-kurta-plus-trouser",
      category: "womens-dresses",
      thumbnail: "https://dummyjson.com/image/i/products/42/thumbnail.jpg",
      images: [
        "https://dummyjson.com/image/i/products/42/1.png",
        "https://dummyjson.com/image/i/products/42/2.png",
        "https://dummyjson.com/image/i/products/42/3.png",
        "https://dummyjson.com/image/i/products/42/4.jpg",
        "https://dummyjson.com/image/i/products/42/thumbnail.jpg",
      ],
      price: 80,
      stock: 148,
      brand: "Digital Printed",
      reviews: [
        {
          name: "Doyle Ernser",
          rating: 2,
          comment:
            "Nostrud reprehenderit anim irure veniam sit ut. Irure aute aute consequat exercitation et magna.\nDeserunt nostrud tempor velit ea culpa amet aliqua consequat mollit aliqua fugiat. Dolore pariatur nulla minim culpa nisi eiusmod aliquip elit quis ut.",
        },
        {
          name: "Kari Schinner",
          rating: 4,
          comment:
            "Duis reprehenderit ex aute minim est et elit do. Laborum id occaecat quis anim Lorem incididunt consectetur et sunt aliquip. Tempor ut eu pariatur in mollit et irure cillum aliqua aute cillum in sit. Excepteur ipsum excepteur consectetur elit ea dolor deserunt dolor non.\nEx veniam in dolor labore. Consequat consectetur et do magna mollit magna cillum consequat voluptate consectetur ea dolor nulla esse. Ea cillum consequat commodo et officia nostrud consequat deserunt irure nisi aliquip veniam cillum excepteur occaecat.",
        },
      ],
      averageRating: 0,
      description:
        "FABRIC: LILEIN CHEST: 21 LENGHT: 37 TROUSER: (38) :ARABIC LILEIN",
      discountPercentage: 15.37,
    },
    {
      name: "frock gold printed",
      slug: "frock-gold-printed",
      category: "womens-dresses",
      thumbnail: "https://dummyjson.com/image/i/products/43/thumbnail.jpg",
      images: [
        "https://dummyjson.com/image/i/products/43/1.jpg",
        "https://dummyjson.com/image/i/products/43/2.jpg",
        "https://dummyjson.com/image/i/products/43/3.jpg",
        "https://dummyjson.com/image/i/products/43/4.jpg",
        "https://dummyjson.com/image/i/products/43/thumbnail.jpg",
      ],
      price: 600,
      stock: 150,
      brand: "Ghazi Fabric",
      reviews: [
        {
          name: "Marcel Jones",
          rating: 3,
          comment:
            "Adipisicing nisi sint commodo fugiat culpa dolor eiusmod ea tempor tempor. Cupidatat occaecat mollit exercitation laborum voluptate.\nNostrud velit occaecat ad ullamco ex laboris irure aliquip laborum reprehenderit ad occaecat laboris. Nisi commodo ullamco aute adipisicing incididunt magna elit irure sunt exercitation quis dolore.",
        },
      ],
      averageRating: 0,
      description:
        "Ghazi fabric long frock gold printed ready to wear stitched collection (G992)",
      discountPercentage: 15.55,
    },
    {
      name: "Ladies Multicolored Dress",
      slug: "ladies-multicolored-dress",
      category: "womens-dresses",
      thumbnail: "https://dummyjson.com/image/i/products/44/thumbnail.jpg",
      images: [
        "https://dummyjson.com/image/i/products/44/1.jpg",
        "https://dummyjson.com/image/i/products/44/2.jpg",
        "https://dummyjson.com/image/i/products/44/3.jpg",
        "https://dummyjson.com/image/i/products/44/4.jpg",
        "https://dummyjson.com/image/i/products/44/thumbnail.jpg",
      ],
      price: 79,
      stock: 2,
      brand: "Ghazi Fabric",
      reviews: [
        {
          name: "Everette Prohaska",
          rating: 5,
          comment:
            "Aliquip incididunt duis ipsum Lorem consectetur eiusmod laborum ex esse ullamco Lorem. Magna aliqua incididunt ea veniam ipsum occaecat enim veniam fugiat veniam sint veniam non. Eu dolore reprehenderit ullamco tempor elit in est id proident ut et sunt nostrud nisi nulla.",
        },
        {
          name: "Miles Cummerata",
          rating: 2,
          comment:
            "Occaecat nulla sunt officia id pariatur qui ad laboris aute. Laboris sit ipsum ad officia amet quis esse ipsum amet voluptate enim officia commodo. Commodo Lorem officia ullamco consequat elit dolore magna id. Mollit sunt velit pariatur officia veniam sit dolore pariatur.\nEiusmod deserunt officia ad est.",
        },
        {
          name: "Coralie Boyle",
          rating: 2,
          comment:
            "Ea ut in adipisicing fugiat pariatur commodo adipisicing. Amet excepteur id cillum amet nostrud dolor amet officia eiusmod dolor velit quis est culpa. Velit reprehenderit ut deserunt aliquip commodo.",
        },
        {
          name: "Cristobal Watsica",
          rating: 1,
          comment:
            "Non ullamco ea exercitation ipsum cupidatat nisi non mollit incididunt officia nisi. Ut commodo voluptate aliquip ex ullamco do sunt laborum. Lorem minim aliquip veniam qui voluptate dolor.",
        },
        {
          name: "Amelia Mann",
          rating: 2,
          comment:
            "Velit voluptate id irure sit pariatur aliqua sit irure adipisicing. Aliqua laborum id deserunt cupidatat anim quis commodo deserunt non amet exercitation ex ea.",
        },
        {
          name: "Harrison Lemke",
          rating: 1,
          comment:
            "Sunt sit dolore veniam laboris. Minim exercitation ut sit commodo dolore anim tempor officia quis elit laborum cupidatat excepteur pariatur. Excepteur voluptate officia nulla id esse tempor laboris sunt.",
        },
      ],
      averageRating: 0,
      description:
        "This classy shirt for women gives you a gorgeous look on everyday wear and specially for semi-casual wears.",
      discountPercentage: 16.88,
    },
    {
      name: "Malai Maxi Dress",
      slug: "malai-maxi-dress",
      category: "womens-dresses",
      thumbnail: "https://dummyjson.com/image/i/products/45/thumbnail.jpg",
      images: [
        "https://dummyjson.com/image/i/products/45/1.jpg",
        "https://dummyjson.com/image/i/products/45/2.webp",
        "https://dummyjson.com/image/i/products/45/3.jpg",
        "https://dummyjson.com/image/i/products/45/4.jpg",
        "https://dummyjson.com/image/i/products/45/thumbnail.jpg",
      ],
      price: 50,
      stock: 96,
      brand: "IELGY",
      reviews: [
        {
          name: "Frankie Hudson",
          rating: 1,
          comment:
            "Enim nisi nulla reprehenderit nostrud in culpa laboris ullamco occaecat culpa sint.",
        },
      ],
      averageRating: 0,
      description:
        "Ready to wear, Unique design according to modern standard fashion, Best fitting ,Imported stuff",
      discountPercentage: 5.07,
    },
    {
      name: "women's shoes",
      slug: "women's-shoes",
      category: "womens-shoes",
      thumbnail: "https://dummyjson.com/image/i/products/46/thumbnail.jpg",
      images: [
        "https://dummyjson.com/image/i/products/46/1.webp",
        "https://dummyjson.com/image/i/products/46/2.jpg",
        "https://dummyjson.com/image/i/products/46/3.jpg",
        "https://dummyjson.com/image/i/products/46/4.jpg",
        "https://dummyjson.com/image/i/products/46/thumbnail.jpg",
      ],
      price: 40,
      stock: 72,
      brand: "IELGY fashion",
      reviews: [
        {
          name: "Macy Greenfelder",
          rating: 4,
          comment:
            "Proident dolore dolor commodo mollit esse dolore enim pariatur veniam ea. Ut qui elit laboris fugiat ex pariatur nisi ut ea incididunt proident elit ad est minim. Officia laboris fugiat ut proident magna amet excepteur esse aute nulla velit cillum sunt.\nAliquip reprehenderit ex cillum est fugiat laborum eiusmod voluptate quis consectetur Lorem labore Lorem. Incididunt sunt deserunt labore ullamco irure ea culpa reprehenderit pariatur adipisicing nulla ex labore anim.",
        },
        {
          name: "Kaya Emard",
          rating: 1,
          comment:
            "Amet cillum aliquip incididunt tempor consectetur esse sint. Ad enim occaecat cupidatat occaecat adipisicing ut elit ullamco sint. Ullamco duis magna Lorem.",
        },
        {
          name: "Kody Terry",
          rating: 3,
          comment:
            "Consectetur qui ullamco quis qui consectetur cupidatat exercitation reprehenderit sunt consequat ex. Ipsum minim ea nulla nisi anim consequat sint proident ipsum ea voluptate non officia occaecat ex.\nDolore nisi magna qui ea proident nulla in velit enim dolor pariatur ipsum ullamco.",
        },
        {
          name: "Moriah Mills",
          rating: 3,
          comment:
            "Et est ex in do adipisicing excepteur ut consectetur aliquip ipsum ea dolore adipisicing eiusmod officia. Aliqua id eu excepteur labore culpa labore laborum magna aute sunt aliquip.",
        },
        {
          name: "Piper Schowalter",
          rating: 2,
          comment:
            "Nulla reprehenderit consectetur quis quis Lorem nostrud aliquip irure eu enim irure.\nLaboris incididunt enim laboris Lorem cillum in veniam elit sint fugiat aute irure nisi. Deserunt incididunt enim quis dolor quis adipisicing mollit non dolor voluptate fugiat nisi elit cillum. Do irure reprehenderit deserunt excepteur eu id occaecat irure.",
        },
        {
          name: "Rupert Upton",
          rating: 4,
          comment:
            "Nostrud culpa aute in officia fugiat consequat sunt dolor ullamco.\nPariatur sint reprehenderit veniam fugiat consectetur deserunt. Veniam veniam ad id nisi voluptate labore consectetur officia.",
        },
        {
          name: "Tressa Weber",
          rating: 1,
          comment:
            "In fugiat anim eu ut officia incididunt aute irure sint id dolore proident culpa velit. Aliqua ea sint id.",
        },
        {
          name: "Amelia Mann",
          rating: 3,
          comment:
            "Occaecat proident deserunt enim ut reprehenderit duis do duis exercitation laboris. Dolore Lorem ut amet laboris esse veniam laborum sunt eiusmod dolor nisi ut.",
        },
        {
          name: "Lenna Renner",
          rating: 3,
          comment:
            "Nostrud est excepteur tempor minim sunt deserunt incididunt dolor culpa velit laborum proident cupidatat. Deserunt eu ex qui et commodo mollit do aliquip anim. Non ea anim nisi culpa anim laboris.\nCulpa reprehenderit ullamco est. Nulla cupidatat pariatur pariatur qui sit id nostrud eu elit magna qui. Ad in dolor esse dolor magna consequat.",
        },
      ],
      averageRating: 0,
      description:
        "Close: Lace, Style with bottom: Increased inside, Sole Material: Rubber",
      discountPercentage: 16.96,
    },
    {
      name: "Sneaker shoes",
      slug: "sneaker-shoes",
      category: "womens-shoes",
      thumbnail: "https://dummyjson.com/image/i/products/47/thumbnail.jpeg",
      images: [
        "https://dummyjson.com/image/i/products/47/1.jpg",
        "https://dummyjson.com/image/i/products/47/2.jpg",
        "https://dummyjson.com/image/i/products/47/3.jpg",
        "https://dummyjson.com/image/i/products/47/thumbnail.jpeg",
      ],
      price: 120,
      stock: 50,
      brand: "Synthetic Leather",
      reviews: [
        {
          name: "Arely Skiles",
          rating: 3,
          comment:
            "Lorem duis anim quis laborum ad eiusmod mollit consectetur laboris proident eu veniam.",
        },
        {
          name: "Piper Schowalter",
          rating: 4,
          comment: "Cupidatat commodo excepteur aute.",
        },
        {
          name: "Oda Schmidt",
          rating: 1,
          comment:
            "Ad aliquip qui esse ea consectetur magna elit est deserunt. Dolor occaecat minim velit magna culpa qui ea ullamco adipisicing commodo aliqua commodo culpa nisi. Incididunt esse mollit laboris. Nisi nostrud culpa commodo incididunt excepteur.",
        },
        {
          name: "Jocelyn Schuster",
          rating: 5,
          comment:
            "Lorem ad anim culpa dolor sunt. Incididunt officia esse nulla id tempor cillum elit quis est pariatur enim laboris incididunt reprehenderit.\nElit Lorem ea sunt enim quis consectetur eu minim consectetur Lorem elit in cupidatat dolore amet. Veniam officia laborum nostrud eu.",
        },
      ],
      averageRating: 0,
      description:
        "Synthetic Leather Casual Sneaker shoes for Women/girls Sneakers For Women",
      discountPercentage: 10.37,
    },
    {
      name: "Women Strip Heel",
      slug: "women-strip-heel",
      category: "womens-shoes",
      thumbnail: "https://dummyjson.com/image/i/products/48/thumbnail.jpg",
      images: [
        "https://dummyjson.com/image/i/products/48/1.jpg",
        "https://dummyjson.com/image/i/products/48/2.jpg",
        "https://dummyjson.com/image/i/products/48/3.jpg",
        "https://dummyjson.com/image/i/products/48/4.jpg",
        "https://dummyjson.com/image/i/products/48/thumbnail.jpg",
      ],
      price: 40,
      stock: 25,
      brand: "Sandals Flip Flops",
      reviews: [
        {
          name: "Miles Cummerata",
          rating: 3,
          comment:
            "Nulla occaecat ut Lorem occaecat occaecat anim deserunt incididunt deserunt officia ipsum in in magna ex.\nDolor in ullamco dolor sint occaecat. Sint exercitation ullamco aute veniam consequat ad enim ea. Sit cillum et qui occaecat.",
        },
        {
          name: "Rupert Upton",
          rating: 1,
          comment:
            "In Lorem duis elit enim Lorem id irure sunt ullamco incididunt ipsum. Duis amet est velit nostrud pariatur amet ut. Reprehenderit velit anim esse aute ad eu esse enim.\nVeniam incididunt consequat ad labore non qui sit Lorem nostrud tempor. Pariatur ullamco incididunt aute est nostrud. Culpa exercitation in mollit quis anim qui culpa aliqua magna. Amet sunt dolor excepteur eu sit dolor pariatur.",
        },
        {
          name: "Angelica Baumbach",
          rating: 1,
          comment:
            "Ipsum tempor elit reprehenderit officia minim laboris cupidatat proident sint id.\nLaborum labore officia tempor.",
        },
        {
          name: "Marcel Jones",
          rating: 4,
          comment:
            "Aliquip veniam velit excepteur. Veniam elit consectetur fugiat irure cupidatat do tempor deserunt reprehenderit.",
        },
        {
          name: "Frankie Hudson",
          rating: 4,
          comment:
            "Deserunt ullamco ad culpa eu consectetur occaecat minim quis dolor irure elit aliqua.\nLaboris mollit veniam quis do aute voluptate cillum culpa pariatur ipsum velit veniam esse laborum. Laboris sint occaecat id consectetur laborum laborum.",
        },
        {
          name: "Sheldon Quigley",
          rating: 3,
          comment:
            "Laborum pariatur Lorem aliqua sint ullamco proident commodo mollit.\nReprehenderit do deserunt deserunt labore elit commodo aliquip id fugiat magna cillum.",
        },
      ],
      averageRating: 0,
      description:
        "Features: Flip-flops, Mid Heel, Comfortable, Striped Heel, Antiskid, Striped",
      discountPercentage: 10.83,
    },
    {
      name: "Chappals & Shoe Ladies Metallic",
      slug: "chappals-&-shoe-ladies-metallic",
      category: "womens-shoes",
      thumbnail: "https://dummyjson.com/image/i/products/49/thumbnail.jpg",
      images: [
        "https://dummyjson.com/image/i/products/49/1.jpg",
        "https://dummyjson.com/image/i/products/49/2.jpg",
        "https://dummyjson.com/image/i/products/49/3.webp",
        "https://dummyjson.com/image/i/products/49/thumbnail.jpg",
      ],
      price: 23,
      stock: 107,
      brand: "Maasai Sandals",
      reviews: [
        {
          name: "Jasmin Hermiston",
          rating: 2,
          comment:
            "Est qui eu deserunt cillum nostrud ipsum. Deserunt anim ad enim. Incididunt aute nostrud qui aute consectetur fugiat laboris. Incididunt dolor ea Lorem quis fugiat ad et incididunt.\nTempor culpa laborum voluptate. Exercitation magna ex nostrud consequat ipsum dolore reprehenderit eu ut nulla consectetur Lorem. Sint in eiusmod labore id velit ut commodo laboris nostrud laborum irure.",
        },
      ],
      averageRating: 0,
      description:
        "Womens Chappals & Shoe Ladies Metallic Tong Thong Sandal Flat Summer 2020 Maasai Sandals",
      discountPercentage: 2.62,
    },
    {
      name: "Women Shoes",
      slug: "women-shoes",
      category: "womens-shoes",
      thumbnail: "https://dummyjson.com/image/i/products/50/thumbnail.jpg",
      images: [
        "https://dummyjson.com/image/i/products/50/1.jpeg",
        "https://dummyjson.com/image/i/products/50/2.jpg",
        "https://dummyjson.com/image/i/products/50/3.jpg",
      ],
      price: 36,
      stock: 46,
      brand: "Arrivals Genuine",
      reviews: [
        {
          name: "Megane Armstrong",
          rating: 2,
          comment:
            "Minim minim labore qui eiusmod adipisicing nisi non aliquip irure officia.\nExercitation culpa ad reprehenderit veniam sint nisi quis.",
        },
        {
          name: "Marcel Jones",
          rating: 3,
          comment:
            "Anim est velit eu officia et fugiat occaecat nulla. Irure cillum irure ullamco quis.\nEa elit Lorem quis adipisicing minim non excepteur do in id consectetur excepteur dolor. Do consectetur nisi irure nulla eiusmod cillum sunt ullamco dolor. Ea do ea duis veniam tempor qui dolore excepteur.",
        },
        {
          name: "Terry Medhurst",
          rating: 5,
          comment:
            "Amet ea proident amet anim occaecat esse Lorem duis in nisi magna. Occaecat irure duis ullamco veniam ut mollit fugiat nisi irure sunt exercitation esse et nostrud anim. Aliqua excepteur cupidatat do.",
        },
        {
          name: "Telly Spinka",
          rating: 5,
          comment:
            "Aliqua sit anim exercitation nulla deserunt veniam sit commodo dolor enim consequat. Amet laboris eu aute ipsum reprehenderit et fugiat cupidatat incididunt nulla exercitation. Dolore voluptate sint eu mollit eiusmod laborum nulla consectetur.",
        },
        {
          name: "Harrison Lemke",
          rating: 2,
          comment:
            "Nostrud occaecat cillum incididunt fugiat non sit.\nElit in duis dolore laboris consequat sunt magna duis proident consequat non do do incididunt.",
        },
        {
          name: "Terrill Hills",
          rating: 3,
          comment:
            "Proident magna commodo dolor ullamco. Cupidatat eu commodo esse.\nIpsum dolor exercitation magna cupidatat eiusmod cupidatat sint elit. Quis eiusmod exercitation officia nulla dolore fugiat dolor id sint consequat ea deserunt. Duis cupidatat consectetur ad culpa do esse. Exercitation mollit voluptate in est est eu ut ex duis non consectetur nisi voluptate.",
        },
        {
          name: "Toy Olson",
          rating: 5,
          comment:
            "Aliquip cillum veniam labore aliqua.\nUllamco exercitation mollit id occaecat irure culpa adipisicing ipsum ex cupidatat id. Ea exercitation tempor ut ex ut ea excepteur veniam officia. Nulla velit laborum occaecat ipsum labore ea Lorem minim eiusmod nisi veniam.",
        },
        {
          name: "Eleazar Torp",
          rating: 3,
          comment:
            "Deserunt incididunt deserunt ea est aute nisi irure cillum do do. Lorem mollit elit est officia sit incididunt mollit duis.\nAd proident sint culpa voluptate sint laboris mollit tempor ut ut consectetur. Tempor in incididunt deserunt qui et. Esse aliquip id ea sit duis veniam officia occaecat magna duis aute enim.",
        },
        {
          name: "Rory Conn",
          rating: 1,
          comment:
            "Aliqua esse adipisicing voluptate amet velit aliquip laboris dolore irure laboris excepteur in. Do anim culpa qui proident consequat. Est duis incididunt elit pariatur nostrud ullamco.\nAdipisicing veniam eiusmod nostrud sunt voluptate consectetur culpa exercitation do voluptate aliqua. Et nisi nostrud in eu irure proident irure nulla quis Lorem exercitation.",
        },
      ],
      averageRating: 0,
      description:
        "2020 New Arrivals Genuine Leather Fashion Trend Platform Summer Women Shoes",
      discountPercentage: 16.87,
    },
    {
      name: "half sleeves T shirts",
      slug: "half-sleeves-t-shirts",
      category: "mens-shirts",
      thumbnail: "https://dummyjson.com/image/i/products/51/thumbnail.jpg",
      images: [
        "https://dummyjson.com/image/i/products/51/1.png",
        "https://dummyjson.com/image/i/products/51/2.jpg",
        "https://dummyjson.com/image/i/products/51/3.jpg",
        "https://dummyjson.com/image/i/products/51/thumbnail.jpg",
      ],
      price: 23,
      stock: 132,
      brand: "Vintage Apparel",
      reviews: [
        {
          name: "Kari Schinner",
          rating: 1,
          comment:
            "Esse est sint commodo aute occaecat in sunt ullamco. Et ea tempor aliquip pariatur enim non dolore quis adipisicing minim minim pariatur. Culpa cupidatat reprehenderit qui nisi ullamco anim. Ipsum occaecat dolore sit et incididunt fugiat deserunt nulla laborum fugiat officia occaecat.\nEsse ipsum nisi amet voluptate sunt cupidatat deserunt consequat do nulla in Lorem anim. Enim consectetur aliquip elit nulla id nostrud ex dolor. Sit labore incididunt consequat quis labore voluptate ullamco. Ad mollit labore tempor irure velit exercitation do sit eiusmod magna pariatur dolor enim amet.",
        },
        {
          name: "Kody Terry",
          rating: 1,
          comment:
            "Officia esse incididunt id consectetur minim esse sunt fugiat. Nulla enim reprehenderit incididunt.",
        },
      ],
      averageRating: 0,
      description:
        "Many store is creating new designs and trend every month and every year. Daraz.pk have a beautiful range of men fashion brands",
      discountPercentage: 12.76,
    },
    {
      name: "FREE FIRE T Shirt",
      slug: "free-fire-t-shirt",
      category: "mens-shirts",
      thumbnail: "https://dummyjson.com/image/i/products/52/thumbnail.jpg",
      images: [
        "https://dummyjson.com/image/i/products/52/1.png",
        "https://dummyjson.com/image/i/products/52/2.png",
        "https://dummyjson.com/image/i/products/52/3.jpg",
        "https://dummyjson.com/image/i/products/52/4.jpg",
        "https://dummyjson.com/image/i/products/52/thumbnail.jpg",
      ],
      price: 10,
      stock: 128,
      brand: "FREE FIRE",
      reviews: [
        {
          name: "Terrence Koelpin",
          rating: 4,
          comment:
            "Proident veniam consectetur ea id tempor do tempor tempor consequat sint duis ea nisi laborum. Minim quis sit esse nisi.",
        },
        {
          name: "Lee Schmidt",
          rating: 1,
          comment:
            "Ullamco enim anim amet enim cupidatat incididunt. Fugiat ad laboris id quis do quis incididunt. Mollit dolore cillum qui duis elit voluptate.",
        },
        {
          name: "Nicklaus Cruickshank",
          rating: 3,
          comment:
            "Qui est cupidatat esse. Duis veniam consectetur velit ea. Eiusmod quis do officia aliquip velit ipsum deserunt qui velit magna sunt ipsum ad ex amet. Enim dolor sunt cillum commodo laborum aliquip proident irure eiusmod.\nEx officia sint magna. Occaecat elit mollit aliquip sit. Magna quis et exercitation consectetur non consequat minim eu sunt ex incididunt laborum. Mollit pariatur do fugiat.",
        },
        {
          name: "Gust Purdy",
          rating: 4,
          comment:
            "Nostrud dolor eu culpa adipisicing enim quis. Reprehenderit consectetur est aliqua aute Lorem proident commodo eiusmod nostrud quis ut laborum in excepteur. Magna irure veniam ad fugiat enim deserunt duis consectetur.",
        },
        {
          name: "Amelia Mann",
          rating: 4,
          comment:
            "Ullamco mollit do consequat laboris id Lorem non pariatur irure aliqua laborum laborum id tempor. Id consequat est irure quis ea excepteur ipsum irure exercitation nulla eu tempor aute. Proident do aute aliqua sunt aliqua quis reprehenderit sint velit voluptate nulla fugiat.",
        },
        {
          name: "Lenna Renner",
          rating: 5,
          comment:
            "Non occaecat sunt consectetur. Anim aute pariatur laborum et consequat. Officia id est dolor laboris aliquip eu exercitation officia do.",
        },
      ],
      averageRating: 0,
      description:
        "quality and professional print - It doesn't just look high quality, it is high quality.",
      discountPercentage: 14.72,
    },
    {
      name: "printed high quality T shirts",
      slug: "printed-high-quality-t-shirts",
      category: "mens-shirts",
      thumbnail: "https://dummyjson.com/image/i/products/53/thumbnail.jpg",
      images: [
        "https://dummyjson.com/image/i/products/53/1.webp",
        "https://dummyjson.com/image/i/products/53/2.jpg",
        "https://dummyjson.com/image/i/products/53/3.jpg",
        "https://dummyjson.com/image/i/products/53/4.jpg",
        "https://dummyjson.com/image/i/products/53/thumbnail.jpg",
      ],
      price: 35,
      stock: 6,
      brand: "Vintage Apparel",
      reviews: [
        {
          name: "Lenna Renner",
          rating: 4,
          comment:
            "Sunt adipisicing dolore cillum fugiat. Reprehenderit adipisicing in excepteur consectetur reprehenderit quis ea exercitation commodo ut eu do occaecat esse.",
        },
        {
          name: "Toy Olson",
          rating: 2,
          comment:
            "Sit sit fugiat Lorem veniam Lorem. Elit ea voluptate cillum eiusmod enim dolore ea magna excepteur officia et aliquip.",
        },
        {
          name: "Jocelyn Schuster",
          rating: 4,
          comment:
            "Ex ea pariatur adipisicing aute Lorem duis incididunt sit et ut duis in ex id. Incididunt ut ex mollit labore. Incididunt magna cupidatat officia voluptate. Ut velit nulla anim veniam.\nEst duis culpa eiusmod consectetur qui. Minim consectetur reprehenderit nulla sit. Duis magna pariatur dolor ipsum elit ipsum. Sint id dolore laboris anim consectetur irure eu Lorem ipsum.",
        },
        {
          name: "Jeanne O'Keefe",
          rating: 2,
          comment:
            "Do commodo ea aliquip dolor dolore. Ad culpa occaecat magna consectetur consequat ad laboris ea. In culpa sint laborum officia sunt veniam irure ut. Magna ex est sint officia eiusmod occaecat ipsum.\nAdipisicing duis nostrud amet commodo qui consectetur proident nisi sunt consectetur tempor reprehenderit ex. Officia ut enim culpa sint ad aute ex ullamco ipsum dolor eiusmod dolor pariatur. Excepteur irure aliqua exercitation fugiat id commodo enim eu minim id duis quis eiusmod pariatur consectetur.",
        },
        {
          name: "Miles Cummerata",
          rating: 3,
          comment:
            "Ipsum aute aliquip exercitation ea veniam. Elit amet elit nulla commodo Lorem ad labore duis id. Labore ullamco ullamco mollit ea dolor consectetur nisi.\nAnim mollit ullamco labore dolor cupidatat cillum sint quis laborum sint ipsum elit mollit. Exercitation culpa labore cupidatat elit reprehenderit.",
        },
        {
          name: "Lee Schmidt",
          rating: 2,
          comment:
            "Ut consequat ipsum sit.\nElit cillum officia minim minim commodo laborum exercitation cupidatat tempor aliqua ex aute commodo Lorem. Nisi Lorem amet enim. Laboris dolor do veniam sint fugiat dolore voluptate ipsum officia dolore non occaecat do excepteur enim. Reprehenderit ipsum excepteur deserunt in laboris incididunt deserunt elit minim.",
        },
        {
          name: "Guy Franecki",
          rating: 4,
          comment:
            "Commodo dolor non minim fugiat reprehenderit quis ut enim eu amet incididunt. Tempor eu fugiat incididunt do sit dolor exercitation quis. Amet aliquip pariatur labore sunt commodo laboris velit laboris aliqua officia anim.\nLaboris enim ea mollit aute sint consectetur adipisicing voluptate in veniam sit reprehenderit pariatur nisi. Irure sit ullamco consectetur laboris excepteur laboris mollit sint aute nulla excepteur. Anim consectetur occaecat irure nisi aute minim excepteur non in pariatur anim. Aliquip cillum ullamco elit veniam eu sint irure aliqua est aliquip reprehenderit fugiat quis labore.",
        },
      ],
      averageRating: 0,
      description: "Brand: vintage Apparel ,Export quality",
      discountPercentage: 7.54,
    },
    {
      name: "Pubg Printed Graphic T-Shirt",
      slug: "pubg-printed-graphic-t-shirt",
      category: "mens-shirts",
      thumbnail: "https://dummyjson.com/image/i/products/54/thumbnail.jpg",
      images: [
        "https://dummyjson.com/image/i/products/54/1.jpg",
        "https://dummyjson.com/image/i/products/54/2.jpg",
        "https://dummyjson.com/image/i/products/54/3.jpg",
        "https://dummyjson.com/image/i/products/54/4.jpg",
        "https://dummyjson.com/image/i/products/54/thumbnail.jpg",
      ],
      price: 46,
      stock: 136,
      brand: "The Warehouse",
      reviews: [
        {
          name: "Pearl Blick",
          rating: 3,
          comment:
            "Laboris adipisicing excepteur non id irure aliqua. Consequat do dolor culpa cillum consectetur eu ipsum sunt sit consequat. Minim consequat proident magna sunt eiusmod incididunt eu proident sit nulla ipsum amet nostrud eu voluptate. Incididunt culpa aliquip quis esse.",
        },
        {
          name: "Piper Schowalter",
          rating: 1,
          comment:
            "Nisi consequat nulla Lorem incididunt ut in reprehenderit ex voluptate in do et qui sunt. Culpa ad reprehenderit et minim laboris laboris ipsum dolor deserunt officia veniam laborum exercitation laboris.\nNisi cupidatat velit magna tempor magna ex velit laboris labore nostrud irure irure pariatur quis. Aute veniam in sint pariatur dolore ipsum pariatur incididunt.",
        },
        {
          name: "Garret Klocko",
          rating: 2,
          comment:
            "Amet eiusmod nisi ut voluptate qui aliqua nostrud irure consequat enim id. Reprehenderit Lorem enim sint voluptate laborum consequat laboris enim duis elit ipsum nulla aliquip. Amet ut sit nostrud aute ex incididunt est qui.\nExcepteur culpa ad ipsum in ipsum proident non amet ea minim incididunt occaecat labore aute non.",
        },
        {
          name: "Moriah Mills",
          rating: 1,
          comment:
            "Nisi pariatur ea voluptate magna ipsum esse ut ex adipisicing excepteur laborum.",
        },
        {
          name: "Emely Schmitt",
          rating: 3,
          comment:
            "Occaecat sit eu pariatur deserunt id cillum. Laborum sit reprehenderit esse. Anim reprehenderit mollit exercitation ex excepteur minim nulla cupidatat do nisi ex deserunt est. Est dolor mollit esse adipisicing nulla elit.",
        },
        {
          name: "Mavis Schultz",
          rating: 1,
          comment:
            "Eu ex eiusmod commodo incididunt Lorem Lorem magna cupidatat commodo commodo eu.\nId laboris reprehenderit aute eiusmod fugiat. Excepteur aliquip pariatur quis magna consectetur ullamco nostrud nostrud duis officia sunt cillum.",
        },
      ],
      averageRating: 0,
      description:
        "Product Description Features: 100% Ultra soft Polyester Jersey. Vibrant & colorful printing on front. Feels soft as cotton without ever cracking",
      discountPercentage: 16.44,
    },
    {
      name: "Money Heist Printed Summer T Shirts",
      slug: "money-heist-printed-summer-t-shirts",
      category: "mens-shirts",
      thumbnail: "https://dummyjson.com/image/i/products/55/thumbnail.jpg",
      images: [
        "https://dummyjson.com/image/i/products/55/1.jpg",
        "https://dummyjson.com/image/i/products/55/2.webp",
        "https://dummyjson.com/image/i/products/55/3.jpg",
        "https://dummyjson.com/image/i/products/55/4.jpg",
        "https://dummyjson.com/image/i/products/55/thumbnail.jpg",
      ],
      price: 66,
      stock: 122,
      brand: "The Warehouse",
      reviews: [
        {
          name: "Sheldon Quigley",
          rating: 5,
          comment:
            "Ea culpa commodo aliqua ad non sit consectetur laborum aliquip aliquip ipsum.",
        },
        {
          name: "Wilma Hickle",
          rating: 2,
          comment:
            "Aliqua quis ea sit excepteur veniam nostrud anim labore tempor do veniam culpa incididunt veniam. Culpa incididunt do cillum commodo amet. Irure qui id ad consectetur in ut minim quis anim qui incididunt. Ex occaecat aliquip est aliqua velit enim enim veniam irure elit veniam irure non.",
        },
        {
          name: "Amelia Mann",
          rating: 1,
          comment:
            "Do qui officia fugiat culpa mollit pariatur sunt consequat culpa proident exercitation eiusmod nisi. Officia tempor Lorem incididunt. Magna voluptate nisi laborum dolor sit mollit officia sit proident ex enim.",
        },
        {
          name: "Demetrius Corkery",
          rating: 1,
          comment:
            "Sunt laborum incididunt esse sint adipisicing in eiusmod veniam sunt. Anim Lorem pariatur magna.\nUllamco aliqua sit culpa ex consequat minim occaecat pariatur do ipsum labore non amet quis non. Tempor do qui quis excepteur deserunt aliquip pariatur elit cillum voluptate anim incididunt ea. Adipisicing esse ipsum elit. Voluptate mollit minim ullamco dolore velit sunt consectetur enim.",
        },
      ],
      averageRating: 0,
      description: "Fabric Jercy, Size: M & L Wear Stylish Dual Stiched",
      discountPercentage: 15.97,
    },
    {
      name: "Sneakers Joggers Shoes",
      slug: "sneakers-joggers-shoes",
      category: "mens-shoes",
      thumbnail: "https://dummyjson.com/image/i/products/56/thumbnail.jpg",
      images: [
        "https://dummyjson.com/image/i/products/56/1.jpg",
        "https://dummyjson.com/image/i/products/56/2.jpg",
        "https://dummyjson.com/image/i/products/56/3.jpg",
        "https://dummyjson.com/image/i/products/56/4.jpg",
        "https://dummyjson.com/image/i/products/56/5.jpg",
        "https://dummyjson.com/image/i/products/56/thumbnail.jpg",
      ],
      price: 40,
      stock: 6,
      brand: "Sneakers",
      reviews: [],
      averageRating: 0,
      description:
        "Gender: Men , Colors: Same as DisplayedCondition: 100% Brand New",
      discountPercentage: 12.57,
    },
    {
      name: "Loafers for men",
      slug: "loafers-for-men",
      category: "mens-shoes",
      thumbnail: "https://dummyjson.com/image/i/products/57/thumbnail.jpg",
      images: [
        "https://dummyjson.com/image/i/products/57/1.jpg",
        "https://dummyjson.com/image/i/products/57/2.jpg",
        "https://dummyjson.com/image/i/products/57/3.jpg",
        "https://dummyjson.com/image/i/products/57/4.jpg",
        "https://dummyjson.com/image/i/products/57/thumbnail.jpg",
      ],
      price: 47,
      stock: 20,
      brand: "Rubber",
      reviews: [
        {
          name: "Deanna Glover",
          rating: 1,
          comment:
            "Elit officia proident tempor velit mollit veniam nulla deserunt officia.",
        },
        {
          name: "Deon Gutkowski",
          rating: 5,
          comment:
            "Minim nisi incididunt esse qui velit ad voluptate fugiat dolor velit cupidatat velit laborum est dolore.\nEiusmod et anim irure nostrud laborum ullamco laborum proident ad cillum enim. Nulla excepteur irure dolore.",
        },
        {
          name: "Piper Schowalter",
          rating: 3,
          comment:
            "Exercitation veniam officia officia nisi aute est nostrud id nostrud. Eiusmod cillum culpa ex est aliquip nisi amet quis voluptate non consectetur cillum. Et qui mollit dolore do ipsum duis ea consectetur dolor excepteur ut.",
        },
        {
          name: "Edwina Ernser",
          rating: 1,
          comment:
            "Lorem enim non proident dolor. Non voluptate in cupidatat. Pariatur dolor deserunt non est anim voluptate aliqua ipsum nulla ea cupidatat est laborum laborum magna. Veniam pariatur anim ullamco quis.\nOfficia fugiat est consectetur culpa sunt. Culpa commodo cupidatat minim amet duis deserunt elit est magna ea dolore. Aute eiusmod ea culpa qui sint exercitation occaecat occaecat veniam ut cupidatat.",
        },
        {
          name: "Jeanne Halvorson",
          rating: 2,
          comment:
            "Deserunt elit id deserunt incididunt. Aliqua duis tempor qui tempor laborum velit. Laborum reprehenderit excepteur quis esse commodo minim quis ex fugiat ad.\nIn tempor est fugiat veniam veniam labore magna. Do aliqua adipisicing fugiat et cillum ullamco in.",
        },
        {
          name: "Miles Cummerata",
          rating: 4,
          comment:
            "Mollit ipsum irure reprehenderit Lorem esse officia Lorem irure.",
        },
        {
          name: "Cristobal Watsica",
          rating: 3,
          comment:
            "Reprehenderit amet minim ullamco laboris. Occaecat proident do incididunt aute ut sint cupidatat ullamco dolor mollit minim nostrud culpa.\nAd proident minim laborum amet reprehenderit officia commodo eiusmod in. Consectetur mollit eiusmod nostrud voluptate eiusmod nisi elit cupidatat.",
        },
      ],
      averageRating: 0,
      description:
        "Men Shoes - Loafers for men - Rubber Shoes - Nylon Shoes - Shoes for men - Moccassion - Pure Nylon (Rubber) Expot Quality.",
      discountPercentage: 10.91,
    },
    {
      name: "formal offices shoes",
      slug: "formal-offices-shoes",
      category: "mens-shoes",
      thumbnail: "https://dummyjson.com/image/i/products/58/thumbnail.jpg",
      images: [
        "https://dummyjson.com/image/i/products/58/1.jpg",
        "https://dummyjson.com/image/i/products/58/2.jpg",
        "https://dummyjson.com/image/i/products/58/3.jpg",
        "https://dummyjson.com/image/i/products/58/4.jpg",
        "https://dummyjson.com/image/i/products/58/thumbnail.jpg",
      ],
      price: 57,
      stock: 68,
      brand: "The Warehouse",
      reviews: [
        {
          name: "Rupert Upton",
          rating: 3,
          comment:
            "Deserunt sit dolore laboris quis deserunt dolore velit irure deserunt pariatur esse velit ex. Laborum irure est nulla commodo commodo labore.",
        },
      ],
      averageRating: 0,
      description:
        "Pattern Type: Solid, Material: PU, Toe Shape: Pointed Toe ,Outsole Material: Rubber",
      discountPercentage: 12,
    },
    {
      name: "Spring and summershoes",
      slug: "spring-and-summershoes",
      category: "mens-shoes",
      thumbnail: "https://dummyjson.com/image/i/products/59/thumbnail.jpg",
      images: [
        "https://dummyjson.com/image/i/products/59/1.jpg",
        "https://dummyjson.com/image/i/products/59/2.jpg",
        "https://dummyjson.com/image/i/products/59/3.jpg",
        "https://dummyjson.com/image/i/products/59/4.jpg",
        "https://dummyjson.com/image/i/products/59/thumbnail.jpg",
      ],
      price: 20,
      stock: 137,
      brand: "Sneakers",
      reviews: [
        {
          name: "Thaddeus McCullough",
          rating: 1,
          comment:
            "Nulla laborum sunt ullamco ut enim labore nulla nostrud. Qui do anim duis consectetur. Sint pariatur et occaecat ut adipisicing aliqua nisi reprehenderit anim consectetur est tempor aliquip laboris ad. Minim fugiat voluptate sit aliqua in labore qui ullamco dolor sint.",
        },
        {
          name: "Coralie Boyle",
          rating: 3,
          comment:
            "Cillum velit dolor Lorem aliquip labore. Duis tempor dolore incididunt amet Lorem ea pariatur. Incididunt Lorem dolor ad ullamco commodo.\nVeniam dolore pariatur officia laborum esse commodo in.",
        },
        {
          name: "Darien Witting",
          rating: 3,
          comment:
            "Irure fugiat fugiat eu occaecat ea exercitation id qui minim id cupidatat. Dolore enim eu est esse.\nDo occaecat sunt est irure nostrud officia duis sunt commodo. Reprehenderit laboris sint mollit fugiat minim exercitation enim reprehenderit non est.",
        },
        {
          name: "Tiara Rolfson",
          rating: 3,
          comment:
            "Nostrud deserunt voluptate dolor id.\nLorem aliqua ut fugiat adipisicing Lorem sint ullamco et ullamco consequat fugiat cillum sunt aliquip duis. Exercitation do pariatur incididunt cupidatat aute ut. Aute eiusmod qui aliquip ex labore reprehenderit incididunt ad adipisicing ullamco do veniam nulla. Enim dolor ullamco veniam ea reprehenderit labore ea ex amet.",
        },
        {
          name: "Lenna Renner",
          rating: 3,
          comment:
            "Ipsum reprehenderit ad tempor enim eu in dolore cillum sit esse amet sint. Magna incididunt consectetur minim commodo.\nAute veniam quis quis sit in. Deserunt ullamco nisi proident irure nulla commodo enim aute fugiat. Ad magna magna eiusmod in irure pariatur aute occaecat nostrud exercitation anim.",
        },
        {
          name: "Kari Schinner",
          rating: 5,
          comment:
            "Proident cillum aliquip consectetur exercitation qui occaecat ex Lorem exercitation pariatur deserunt culpa cupidatat sint aliqua.\nConsequat qui magna nulla consectetur aliqua voluptate duis. In adipisicing eu aliquip in veniam officia laboris Lorem deserunt magna.",
        },
        {
          name: "Miles Cummerata",
          rating: 1,
          comment:
            "Amet aliqua ad velit pariatur proident culpa. Et commodo cupidatat culpa.\nPariatur excepteur exercitation anim irure ea nostrud. Pariatur sit exercitation labore eu ullamco duis do enim voluptate consequat est.",
        },
        {
          name: "Justus Sipes",
          rating: 5,
          comment:
            "Occaecat veniam anim non sit sint officia minim non cillum tempor adipisicing.\nConsectetur id non magna.",
        },
      ],
      averageRating: 0,
      description:
        "Comfortable stretch cloth, lightweight body; ,rubber sole, anti-skid wear;",
      discountPercentage: 8.71,
    },
    {
      name: "Stylish Casual Jeans Shoes",
      slug: "stylish-casual-jeans-shoes",
      category: "mens-shoes",
      thumbnail: "https://dummyjson.com/image/i/products/60/thumbnail.jpg",
      images: [
        "https://dummyjson.com/image/i/products/60/1.jpg",
        "https://dummyjson.com/image/i/products/60/2.jpg",
        "https://dummyjson.com/image/i/products/60/3.jpg",
        "https://dummyjson.com/image/i/products/60/thumbnail.jpg",
      ],
      price: 58,
      stock: 129,
      brand: "Sneakers",
      reviews: [
        {
          name: "Mavis Schultz",
          rating: 5,
          comment:
            "Nulla non cupidatat mollit esse reprehenderit in anim laborum. Ipsum aute mollit sunt cupidatat velit exercitation est esse aute incididunt aute.\nFugiat ut quis labore officia cupidatat. Do voluptate consectetur in non. Fugiat exercitation cupidatat pariatur. Est ex ex amet.",
        },
        {
          name: "Allene Harber",
          rating: 2,
          comment:
            "Excepteur fugiat sit ullamco fugiat commodo sunt enim occaecat sint non labore cupidatat do. In eiusmod dolore deserunt ex id eiusmod et aute ullamco.\nLaboris deserunt non esse elit labore occaecat do enim et est pariatur ex amet. Cillum occaecat incididunt id. Proident excepteur labore fugiat dolore reprehenderit nisi deserunt duis Lorem et. Laboris veniam nisi dolor reprehenderit elit et aliqua pariatur incididunt dolore labore.",
        },
        {
          name: "Reginald Wisoky",
          rating: 1,
          comment:
            "Cillum aliquip consequat eu cupidatat nostrud reprehenderit occaecat velit. Elit dolor do cupidatat commodo amet et quis laborum consectetur. Duis consectetur in reprehenderit ut sunt.\nEiusmod laborum eu reprehenderit aute quis adipisicing excepteur elit voluptate eu. Aute qui enim dolor aliqua incididunt mollit minim non non fugiat nulla nostrud est ipsum. Excepteur reprehenderit commodo consequat reprehenderit culpa sint sint laboris dolor minim. Occaecat ipsum ullamco ex adipisicing officia aliqua consectetur deserunt ut eu non reprehenderit ea id.",
        },
        {
          name: "Nicklaus Cruickshank",
          rating: 2,
          comment:
            "Aute incididunt eiusmod aliquip officia. Eiusmod consequat veniam eu nulla eu ex adipisicing veniam consectetur incididunt ullamco.\nFugiat cillum amet eu duis minim nulla. Labore anim magna voluptate duis aliqua pariatur consequat. Reprehenderit adipisicing Lorem esse irure culpa consequat enim deserunt consectetur nisi non.",
        },
        {
          name: "Humberto Botsford",
          rating: 1,
          comment:
            "Duis culpa velit veniam exercitation. Veniam exercitation minim reprehenderit occaecat nisi ea laboris est fugiat quis anim cupidatat velit consectetur eiusmod. Aliqua reprehenderit laboris magna occaecat ad enim culpa sit.\nAdipisicing eu sint reprehenderit veniam. Aliquip laborum eu amet cillum nulla sit magna commodo veniam id aute ea in pariatur. Cupidatat velit nostrud veniam quis aliqua sunt proident labore enim enim nulla. Mollit aliquip fugiat eu voluptate incididunt cillum adipisicing non deserunt ipsum.",
        },
        {
          name: "Rita Shields",
          rating: 5,
          comment:
            "Aliqua ad occaecat aliquip. Est qui dolore exercitation fugiat amet magna magna ipsum nulla.",
        },
      ],
      averageRating: 0,
      description:
        "High Quality ,Stylish design ,Comfortable wear ,FAshion ,Durable",
      discountPercentage: 7.55,
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
      averageRating: 0,
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
      averageRating: 0,
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
      averageRating: 0,
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
      averageRating: 0,
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
      averageRating: 0,
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
      averageRating: 0,
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
      averageRating: 0,
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
      averageRating: 0,
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
      averageRating: 0,
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
      averageRating: 0,
      description:
        "Fashion Skmei 1830 Shell Dial Stainless Steel Women Wrist Watch Lady Bracelet Watch Quartz Watches Ladies",
      discountPercentage: 8.98,
    },
    {
      name: "Women Shoulder Bags",
      slug: "women-shoulder-bags",
      category: "womens-bags",
      thumbnail: "https://dummyjson.com/image/i/products/71/thumbnail.jpg",
      images: [
        "https://dummyjson.com/image/i/products/71/1.jpg",
        "https://dummyjson.com/image/i/products/71/2.jpg",
        "https://dummyjson.com/image/i/products/71/3.webp",
        "https://dummyjson.com/image/i/products/71/thumbnail.jpg",
      ],
      price: 46,
      stock: 17,
      brand: "LouisWill",
      reviews: [
        {
          name: "Felicity O'Reilly",
          rating: 1,
          comment:
            "Exercitation ipsum ipsum eu aliquip dolore officia ex in non do. Incididunt eiusmod veniam nulla ad ullamco in sunt officia laboris est. Laboris minim ex velit consectetur magna ut ullamco.",
        },
        {
          name: "Mozell O'Connell",
          rating: 3,
          comment:
            "Ex voluptate proident velit quis dolor do occaecat sunt. Excepteur duis nulla est proident. Id proident nisi irure pariatur consequat ullamco voluptate cupidatat deserunt adipisicing fugiat nostrud tempor veniam consectetur.\nFugiat adipisicing mollit ipsum duis non sit nisi irure exercitation pariatur minim laboris nisi. Tempor exercitation consequat veniam. Ad exercitation ad consequat nostrud irure cupidatat dolore mollit et reprehenderit excepteur eu culpa quis velit.",
        },
        {
          name: "Toy Olson",
          rating: 5,
          comment:
            "Occaecat consectetur officia in sit laboris reprehenderit nostrud tempor aliqua veniam anim occaecat. Quis ut dolore proident duis cillum magna quis excepteur laboris laborum non exercitation voluptate nisi. Veniam Lorem do officia. Nulla duis veniam aliquip ut laborum.\nMollit veniam cupidatat occaecat commodo duis qui excepteur duis.",
        },
      ],
      averageRating: 0,
      description:
        "LouisWill Women Shoulder Bags Long Clutches Cross Body Bags Phone Bags PU Leather Hand Bags Large Capacity Card Holders Zipper Coin Purses Fashion Crossbody Bags for Girls Ladies",
      discountPercentage: 14.65,
    },
    {
      name: "Handbag For Girls",
      slug: "handbag-for-girls",
      category: "womens-bags",
      thumbnail: "https://dummyjson.com/image/i/products/72/thumbnail.webp",
      images: [
        "https://dummyjson.com/image/i/products/72/1.jpg",
        "https://dummyjson.com/image/i/products/72/2.png",
        "https://dummyjson.com/image/i/products/72/3.webp",
        "https://dummyjson.com/image/i/products/72/4.jpg",
        "https://dummyjson.com/image/i/products/72/thumbnail.webp",
      ],
      price: 23,
      stock: 27,
      brand: "LouisWill",
      reviews: [
        {
          name: "Rachel Jacobson",
          rating: 1,
          comment:
            "Lorem nisi pariatur in laboris est ipsum nulla do excepteur ea. Non magna aliquip laboris ipsum laborum adipisicing ad sint mollit sint pariatur laborum est.",
        },
        {
          name: "Elbert Gottlieb",
          rating: 2,
          comment:
            "Occaecat dolor id anim labore dolor ex commodo officia do nostrud eu. Excepteur nisi cupidatat irure.\nNulla aliquip exercitation in. Eu ut sunt est consectetur ex laboris ut.",
        },
        {
          name: "Enoch Lynch",
          rating: 3,
          comment: "Exercitation consequat enim nulla anim cillum eiusmod.",
        },
        {
          name: "Pearl Blick",
          rating: 4,
          comment:
            "Cupidatat ullamco elit dolor ipsum dolore. Magna quis do amet consequat incididunt non tempor nulla nisi.",
        },
      ],
      averageRating: 0,
      description:
        "This fashion is designed to add a charming effect to your casual outfit. This Bag is made of synthetic leather.",
      discountPercentage: 17.5,
    },
    {
      name: "Fancy hand clutch",
      slug: "fancy-hand-clutch",
      category: "womens-bags",
      thumbnail: "https://dummyjson.com/image/i/products/73/thumbnail.jpg",
      images: [
        "https://dummyjson.com/image/i/products/73/1.jpg",
        "https://dummyjson.com/image/i/products/73/2.webp",
        "https://dummyjson.com/image/i/products/73/3.jpg",
        "https://dummyjson.com/image/i/products/73/thumbnail.jpg",
      ],
      price: 44,
      stock: 101,
      brand: "Bracelet",
      reviews: [
        {
          name: "Thaddeus McCullough",
          rating: 2,
          comment:
            "Id aute id reprehenderit tempor Lorem ea ex non ullamco ut laborum labore ipsum qui.",
        },
      ],
      averageRating: 0,
      description:
        "This fashion is designed to add a charming effect to your casual outfit. This Bag is made of synthetic leather.",
      discountPercentage: 10.39,
    },
    {
      name: "Leather Hand Bag",
      slug: "leather-hand-bag",
      category: "womens-bags",
      thumbnail: "https://dummyjson.com/image/i/products/74/thumbnail.jpg",
      images: [
        "https://dummyjson.com/image/i/products/74/1.jpg",
        "https://dummyjson.com/image/i/products/74/2.jpg",
        "https://dummyjson.com/image/i/products/74/3.jpg",
        "https://dummyjson.com/image/i/products/74/4.jpg",
        "https://dummyjson.com/image/i/products/74/thumbnail.jpg",
      ],
      price: 57,
      stock: 43,
      brand: "Copenhagen Luxe",
      reviews: [
        {
          name: "Angelica Baumbach",
          rating: 4,
          comment:
            "Excepteur ut velit aliqua veniam quis consequat excepteur Lorem ex anim enim ut ipsum tempor.\nAliqua qui cupidatat esse dolore cupidatat laborum eu esse anim incididunt voluptate non enim eu enim. Sint voluptate sit excepteur laborum.",
        },
        {
          name: "Jeanne O'Keefe",
          rating: 2,
          comment:
            "Esse et mollit eu sint dolor commodo elit laboris minim duis enim. Laborum cupidatat pariatur dolor cupidatat ut dolor deserunt aute non dolore minim do. Commodo aliquip exercitation laboris anim adipisicing eiusmod amet laborum et sit laboris. Nisi dolor exercitation nostrud quis cillum.",
        },
        {
          name: "Miles Cummerata",
          rating: 1,
          comment:
            "Qui laboris id non incididunt pariatur fugiat do minim est qui mollit anim. Exercitation irure in reprehenderit aliquip cupidatat. Cupidatat cupidatat est velit sint excepteur ea minim.",
        },
      ],
      averageRating: 0,
      description:
        "It features an attractive design that makes it a must have accessory in your collection. We sell different kind of bags for boys, kids, women, girls and also for unisex.",
      discountPercentage: 11.19,
    },
    {
      name: "Seven Pocket Women Bag",
      slug: "seven-pocket-women-bag",
      category: "womens-bags",
      thumbnail: "https://dummyjson.com/image/i/products/75/thumbnail.jpg",
      images: [
        "https://dummyjson.com/image/i/products/75/1.jpg",
        "https://dummyjson.com/image/i/products/75/2.jpg",
        "https://dummyjson.com/image/i/products/75/3.jpg",
        "https://dummyjson.com/image/i/products/75/thumbnail.jpg",
      ],
      price: 68,
      stock: 13,
      brand: "Steal Frame",
      reviews: [
        {
          name: "Twila Padberg",
          rating: 1,
          comment:
            "Esse id enim mollit proident in culpa ipsum nostrud et et mollit labore.\nOfficia ut quis laborum elit. Aute aliquip non do eu dolore et magna proident magna veniam.",
        },
        {
          name: "Ewell Mueller",
          rating: 5,
          comment: "Enim enim amet minim pariatur cupidatat reprehenderit.",
        },
        {
          name: "Toy Olson",
          rating: 3,
          comment:
            "Consectetur esse enim sint minim eu amet excepteur cillum pariatur et velit ea. Ex nulla ullamco ad excepteur cupidatat veniam veniam consequat consectetur. Ullamco non eiusmod non Lorem culpa veniam do qui enim laborum ipsum consequat aute commodo. Consectetur nisi consequat nulla veniam exercitation.",
        },
        {
          name: "Trace Douglas",
          rating: 4,
          comment:
            "Ea cupidatat labore esse anim. Sint fugiat commodo labore laboris cillum labore pariatur reprehenderit.\nDolor ipsum enim ullamco deserunt ex aliqua voluptate dolore adipisicing consequat velit nulla eiusmod.",
        },
      ],
      averageRating: 0,
      description:
        "Seven Pocket Women Bag Handbags Lady Shoulder Crossbody Bag Female Purse Seven Pocket Bag",
      discountPercentage: 14.87,
    },
    {
      name: "Silver Ring Set Women",
      slug: "silver-ring-set-women",
      category: "womens-jewellery",
      thumbnail: "https://dummyjson.com/image/i/products/76/thumbnail.jpg",
      images: [
        "https://dummyjson.com/image/i/products/76/1.jpg",
        "https://dummyjson.com/image/i/products/76/2.jpg",
        "https://dummyjson.com/image/i/products/76/thumbnail.jpg",
      ],
      price: 70,
      stock: 51,
      brand: "Darojay",
      reviews: [
        {
          name: "Eleanora Price",
          rating: 5,
          comment:
            "Non amet eu eu ex deserunt. Pariatur do aute qui laborum sit enim nulla occaecat.\nElit exercitation ea velit adipisicing duis irure adipisicing ex tempor ex ex sunt non.",
        },
        {
          name: "Macy Greenfelder",
          rating: 4,
          comment:
            "Culpa aliqua eu eiusmod occaecat excepteur exercitation pariatur exercitation quis adipisicing veniam quis dolor.",
        },
        {
          name: "Eleazar Torp",
          rating: 4,
          comment:
            "Do sunt enim incididunt sint aute voluptate ad non quis proident culpa id Lorem sit proident. Veniam amet quis nostrud ex sit cupidatat deserunt minim voluptate deserunt officia consectetur magna ipsum id.\nUt irure cillum tempor consequat anim et fugiat anim enim sit esse do labore mollit.",
        },
        {
          name: "Moriah Mills",
          rating: 5,
          comment:
            "Proident exercitation ea nulla deserunt Lorem irure non anim laborum esse laborum.\nLabore eiusmod ullamco proident magna nulla exercitation ex in aliquip. Commodo nulla do veniam cupidatat eu incididunt in minim consequat consectetur dolore consequat. Culpa amet tempor aliqua mollit dolore laboris fugiat elit quis officia exercitation nisi est minim deserunt. Ad aliqua Lorem tempor nostrud Lorem ipsum ad nulla exercitation anim.",
        },
        {
          name: "Sidney Rutherford",
          rating: 2,
          comment:
            "Cupidatat irure consequat dolor id amet ea nulla consectetur cupidatat. Ipsum excepteur cillum aliqua incididunt id ut dolore Lorem sit.",
        },
        {
          name: "Oleta Abbott",
          rating: 2,
          comment:
            "Aliqua elit consequat aliquip et consequat excepteur nulla exercitation ut elit occaecat. Aute deserunt in sunt ut dolor aute exercitation do amet.",
        },
        {
          name: "Miles Cummerata",
          rating: 2,
          comment:
            "Aliquip cillum do labore excepteur reprehenderit sint non ullamco excepteur irure. Quis sit qui adipisicing veniam nostrud officia anim aliqua consequat exercitation laboris amet enim duis adipisicing. Et esse Lorem dolore excepteur consequat occaecat ipsum. Laboris nulla Lorem labore.",
        },
      ],
      averageRating: 0,
      description:
        "Jewelry Type:RingsCertificate Type:NonePlating:Silver PlatedShapeattern:noneStyle:CLASSICReligious",
      discountPercentage: 13.57,
    },
    {
      name: "Rose Ring",
      slug: "rose-ring",
      category: "womens-jewellery",
      thumbnail: "https://dummyjson.com/image/i/products/77/thumbnail.jpg",
      images: [
        "https://dummyjson.com/image/i/products/77/1.jpg",
        "https://dummyjson.com/image/i/products/77/2.jpg",
        "https://dummyjson.com/image/i/products/77/3.jpg",
        "https://dummyjson.com/image/i/products/77/thumbnail.jpg",
      ],
      price: 100,
      stock: 149,
      brand: "Copenhagen Luxe",
      reviews: [
        {
          name: "Luciano Sauer",
          rating: 1,
          comment:
            "Do qui culpa dolor deserunt dolor dolore qui.\nExcepteur mollit fugiat exercitation aliquip amet cillum ad ea aliqua. In consequat ad dolor reprehenderit id quis enim excepteur elit deserunt irure eiusmod cillum cupidatat do. Enim aliquip excepteur magna magna aliquip excepteur labore qui laborum.",
        },
      ],
      averageRating: 0,
      description:
        "Brand: The Greetings Flower Colour: RedRing Colour: GoldenSize: Adjustable",
      discountPercentage: 3.22,
    },
    {
      name: "Rhinestone Korean Style Open Rings",
      slug: "rhinestone-korean-style-open-rings",
      category: "womens-jewellery",
      thumbnail: "https://dummyjson.com/image/i/products/78/thumbnail.jpg",
      images: ["https://dummyjson.com/image/i/products/78/thumbnail.jpg"],
      price: 30,
      stock: 9,
      brand: "Fashion Jewellery",
      reviews: [
        {
          name: "Jerry Kertzmann",
          rating: 4,
          comment:
            "Ut enim laborum excepteur cupidatat ut proident minim incididunt et. Proident amet deserunt dolore dolore cupidatat officia velit. Sunt eu consectetur Lorem pariatur elit cillum cillum deserunt deserunt consectetur. Cillum voluptate aute ex voluptate in commodo mollit deserunt id ad ex fugiat anim.",
        },
        {
          name: "Mavis Schultz",
          rating: 3,
          comment:
            "Veniam velit irure nostrud anim laborum ut qui labore proident nisi proident ex culpa minim. Incididunt irure sunt velit labore eu. Laboris et sunt voluptate tempor eu sint pariatur elit ad.\nLorem enim quis consequat est occaecat mollit. Sit excepteur esse sunt pariatur enim irure ex. Nisi excepteur veniam non consequat magna mollit labore anim reprehenderit veniam Lorem reprehenderit pariatur est.",
        },
        {
          name: "Frankie Hudson",
          rating: 1,
          comment:
            "Non consectetur sit qui. Duis in reprehenderit elit exercitation proident aliquip elit ea ut. Amet minim adipisicing ad elit sint ex fugiat laboris irure occaecat nulla ipsum magna fugiat.",
        },
        {
          name: "Everette Prohaska",
          rating: 1,
          comment:
            "Deserunt mollit consectetur labore reprehenderit Lorem nostrud anim laborum nostrud est amet reprehenderit nulla. Laboris ex ut est nisi et esse tempor quis proident quis.",
        },
        {
          name: "Pearl Blick",
          rating: 3,
          comment:
            "Ut irure cillum enim excepteur deserunt nisi. Duis velit irure cupidatat cupidatat amet cillum commodo anim. Duis eiusmod ea est veniam duis mollit velit velit veniam. Pariatur consequat laborum reprehenderit dolor aute nisi.",
        },
        {
          name: "Demetrius Corkery",
          rating: 2,
          comment:
            "Ad adipisicing excepteur do elit pariatur nostrud enim ad sint. Esse excepteur sunt id et labore reprehenderit eiusmod adipisicing minim incididunt incididunt amet cupidatat et occaecat.\nOfficia minim id sunt ad cupidatat nisi qui in fugiat dolore minim magna dolore. Adipisicing aliquip excepteur labore ad non dolore deserunt nisi laboris amet elit eu eiusmod. Voluptate exercitation est cillum do aliqua voluptate dolore minim commodo veniam nostrud aute veniam.",
        },
        {
          name: "Justus Sipes",
          rating: 1,
          comment:
            "Pariatur do occaecat aute qui. Reprehenderit fugiat reprehenderit dolor eiusmod enim duis esse exercitation ullamco veniam amet sunt laboris. Est pariatur dolore labore labore eu cupidatat aliqua mollit. Non officia minim occaecat ut veniam eiusmod commodo ad aliqua id incididunt sint.",
        },
        {
          name: "Alison Reichert",
          rating: 2,
          comment:
            "Velit nisi tempor ipsum qui sint pariatur minim eiusmod minim quis ullamco ullamco aute reprehenderit.\nAd laborum pariatur duis officia nulla. Incididunt quis sunt sit. Irure ullamco esse adipisicing proident officia veniam in laborum ea.",
        },
        {
          name: "Nicklaus Cruickshank",
          rating: 1,
          comment:
            "Nulla enim incididunt nulla.\nSunt eiusmod fugiat dolor ullamco veniam dolor adipisicing ex deserunt et duis ipsum. Irure adipisicing cupidatat laborum sit aliqua et magna et. Laborum minim nulla in esse esse eu nisi laboris sit duis ullamco ullamco sint.",
        },
        {
          name: "Cristobal Watsica",
          rating: 3,
          comment:
            "Id laboris culpa et labore. Adipisicing dolore culpa aute labore.",
        },
      ],
      averageRating: 0,
      description:
        "Fashion Jewellery 3Pcs Adjustable Pearl Rhinestone Korean Style Open Rings For Women",
      discountPercentage: 8.02,
    },
    {
      name: "Elegant Female Pearl Earrings",
      slug: "elegant-female-pearl-earrings",
      category: "womens-jewellery",
      thumbnail: "https://dummyjson.com/image/i/products/79/thumbnail.jpg",
      images: ["https://dummyjson.com/image/i/products/79/1.jpg"],
      price: 30,
      stock: 16,
      brand: "Fashion Jewellery",
      reviews: [],
      averageRating: 0,
      description:
        "Elegant Female Pearl Earrings Set Zircon Pearl Earings Women Party Accessories 9 Pairs/Set",
      discountPercentage: 12.8,
    },
    {
      name: "Chain Pin Tassel Earrings",
      slug: "chain-pin-tassel-earrings",
      category: "womens-jewellery",
      thumbnail: "https://dummyjson.com/image/i/products/80/thumbnail.jpg",
      images: [
        "https://dummyjson.com/image/i/products/80/1.jpg",
        "https://dummyjson.com/image/i/products/80/2.jpg",
        "https://dummyjson.com/image/i/products/80/3.png",
        "https://dummyjson.com/image/i/products/80/4.jpg",
        "https://dummyjson.com/image/i/products/80/thumbnail.jpg",
      ],
      price: 45,
      stock: 9,
      brand: "Cuff Butterfly",
      reviews: [
        {
          name: "Delfina Ziemann",
          rating: 3,
          comment:
            "Sunt ullamco qui adipisicing aliquip officia. Nisi elit proident irure ad reprehenderit et. Non id in esse et aliqua enim excepteur labore consequat deserunt dolor anim ea sunt. Do incididunt minim elit nostrud voluptate officia ad.",
        },
        {
          name: "Trycia Fadel",
          rating: 3,
          comment:
            "Sit reprehenderit quis deserunt nostrud nisi nulla. Do laborum aliqua elit incididunt esse aliquip. Ex qui consequat cupidatat deserunt labore ad.\nSint eiusmod occaecat ea amet amet consectetur veniam culpa consectetur labore est adipisicing id et veniam.",
        },
        {
          name: "Frankie Hudson",
          rating: 3,
          comment:
            "Aliqua pariatur ex reprehenderit anim deserunt labore culpa aliquip ipsum aliquip nostrud id.",
        },
        {
          name: "Telly Spinka",
          rating: 2,
          comment:
            "In consequat eu ex laborum sunt qui do incididunt laborum. Eu irure et mollit consequat.",
        },
        {
          name: "Miles Cummerata",
          rating: 1,
          comment:
            "Consectetur magna aliqua tempor amet magna duis amet deserunt laboris id do est. Nulla laboris quis ut deserunt tempor incididunt. Consectetur voluptate do cillum. Ad laborum non officia laboris culpa non.",
        },
        {
          name: "Moriah Mills",
          rating: 3,
          comment:
            "Veniam reprehenderit id culpa sit. Dolore consequat in in id pariatur non ipsum consequat sit ipsum anim duis enim do.\nLaborum eiusmod excepteur id eiusmod quis anim enim amet pariatur pariatur in.",
        },
        {
          name: "Felicity O'Reilly",
          rating: 1,
          comment:
            "Eiusmod commodo in voluptate id ut aliquip sit occaecat consequat proident labore. Nulla excepteur proident Lorem cupidatat aute amet id.\nOccaecat in consequat aliquip sint occaecat voluptate sunt est pariatur consequat veniam dolor culpa.",
        },
      ],
      averageRating: 0,
      description:
        "Pair Of Ear Cuff Butterfly Long Chain Pin Tassel Earrings - Silver ( Long Life Quality Product)",
      discountPercentage: 17.75,
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
      averageRating: 0,
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
      averageRating: 0,
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
      averageRating: 0,
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
      averageRating: 0,
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
      averageRating: 0,
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
      averageRating: 0,
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
      averageRating: 0,
      description:
        "Both Heat and Cool Purpose, Temperature control range; -50 to +110, Temperature measurement accuracy; 0.1, Control accuracy; 0.1",
      discountPercentage: 11.3,
    },
    {
      name: "TC Reusable Silicone Magic Washing Gloves",
      slug: "tc-reusable-silicone-magic-washing-gloves",
      category: "automotive",
      thumbnail: "https://dummyjson.com/image/i/products/88/thumbnail.jpg",
      images: [
        "https://dummyjson.com/image/i/products/88/1.jpg",
        "https://dummyjson.com/image/i/products/88/2.jpg",
        "https://dummyjson.com/image/i/products/88/3.jpg",
        "https://dummyjson.com/image/i/products/88/4.webp",
        "https://dummyjson.com/image/i/products/88/thumbnail.jpg",
      ],
      price: 29,
      stock: 42,
      brand: "TC Reusable",
      reviews: [],
      averageRating: 0,
      description:
        "TC Reusable Silicone Magic Washing Gloves with Scrubber, Cleaning Brush Scrubber Gloves Heat Resistant Pair for Cleaning of Kitchen, Dishes, Vegetables and Fruits, Bathroom, Car Wash, Pet Care and Multipurpose",
      discountPercentage: 3.19,
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
      averageRating: 0,
      description:
        "best Quality CHarger , Highly Recommended to all best Quality CHarger , Highly Recommended to all",
      discountPercentage: 17.53,
    },
    {
      name: "Cycle Bike Glow",
      slug: "cycle-bike-glow",
      category: "automotive",
      thumbnail: "https://dummyjson.com/image/i/products/90/thumbnail.jpg",
      images: [
        "https://dummyjson.com/image/i/products/90/1.jpg",
        "https://dummyjson.com/image/i/products/90/2.jpg",
        "https://dummyjson.com/image/i/products/90/3.jpg",
        "https://dummyjson.com/image/i/products/90/4.jpg",
        "https://dummyjson.com/image/i/products/90/thumbnail.jpg",
      ],
      price: 35,
      stock: 63,
      brand: "Neon LED Light",
      reviews: [
        {
          name: "Felicity O'Reilly",
          rating: 3,
          comment:
            "In Lorem eu ad consectetur nostrud officia laborum fugiat ea nostrud. Nisi in anim minim mollit. Ad occaecat cillum officia ad do. Amet consequat aute sunt anim ut culpa deserunt nulla reprehenderit.\nId est sunt eu. Ea aliqua eu enim laborum amet quis aute aliqua. Irure irure exercitation aliqua. Laboris aute do magna pariatur qui voluptate.",
        },
      ],
      averageRating: 0,
      description:
        "Universal fitment and easy to install no special wires, can be easily installed and removed. Fits most standard tyre air stem valves of road, mountain bicycles, motocycles and cars.Bright led will turn on w",
      discountPercentage: 11.08,
    },
    {
      name: "Black Motorbike",
      slug: "black-motorbike",
      category: "motorcycle",
      thumbnail: "https://dummyjson.com/image/i/products/91/thumbnail.jpg",
      images: [
        "https://dummyjson.com/image/i/products/91/1.jpg",
        "https://dummyjson.com/image/i/products/91/2.jpg",
        "https://dummyjson.com/image/i/products/91/3.jpg",
        "https://dummyjson.com/image/i/products/91/4.jpg",
        "https://dummyjson.com/image/i/products/91/thumbnail.jpg",
      ],
      price: 569,
      stock: 115,
      brand: "METRO 70cc Motorcycle - MR70",
      reviews: [
        {
          name: "Terrell Schuppe",
          rating: 2,
          comment:
            "Sit ea veniam proident excepteur pariatur. Enim non deserunt mollit id esse ipsum magna.",
        },
        {
          name: "Deon Gutkowski",
          rating: 5,
          comment:
            "Esse pariatur consectetur non. Deserunt reprehenderit mollit ipsum ex consectetur non cillum minim elit. Et et do enim. Cillum do anim excepteur occaecat Lorem commodo deserunt tempor.",
        },
        {
          name: "Claudia Dooley",
          rating: 3,
          comment:
            "Excepteur aliquip pariatur ullamco adipisicing non eu enim officia. Commodo consequat culpa occaecat reprehenderit voluptate irure esse ullamco duis ea aute qui.",
        },
        {
          name: "Kari Schinner",
          rating: 5,
          comment:
            "Occaecat occaecat ut pariatur sit. Eu sit nulla consequat cillum aliqua aute elit laborum esse sunt commodo. Et id deserunt nisi Lorem pariatur ad mollit commodo amet magna occaecat elit adipisicing velit.\nNulla minim est velit. Nulla aliqua cillum tempor laborum enim. Nulla deserunt officia labore duis nulla eiusmod est.",
        },
        {
          name: "Johnathon Predovic",
          rating: 3,
          comment:
            "Velit enim exercitation et amet minim dolore sint.\nCupidatat commodo dolor consequat deserunt.",
        },
        {
          name: "Amos Weimann",
          rating: 3,
          comment:
            "Occaecat incididunt culpa excepteur consequat non. Quis proident nulla nostrud deserunt in enim nostrud cillum enim consectetur in officia.\nVelit occaecat ad ullamco tempor occaecat occaecat est enim.",
        },
      ],
      averageRating: 0,
      description:
        "Engine Type:Wet sump, Single Cylinder, Four Stroke, Two Valves, Air Cooled with SOHC (Single Over Head Cam) Chain Drive Bore & Stroke:47.0 x 49.5 MM",
      discountPercentage: 13.63,
    },
    {
      name: "HOT SALE IN EUROPE electric racing motorcycle",
      slug: "hot-sale-in-europe-electric-racing-motorcycle",
      category: "motorcycle",
      thumbnail: "https://dummyjson.com/image/i/products/92/thumbnail.jpg",
      images: [
        "https://dummyjson.com/image/i/products/92/1.jpg",
        "https://dummyjson.com/image/i/products/92/2.jpg",
        "https://dummyjson.com/image/i/products/92/3.jpg",
        "https://dummyjson.com/image/i/products/92/4.jpg",
      ],
      price: 920,
      stock: 22,
      brand: "BRAVE BULL",
      reviews: [
        {
          name: "Gust Purdy",
          rating: 5,
          comment:
            "Exercitation mollit nulla nulla esse. Aute sunt proident ad anim consectetur voluptate ut adipisicing ut aute consequat ipsum esse Lorem aute. Incididunt ipsum deserunt do in enim eu. Do proident ea pariatur eu do aliqua laborum consectetur sint proident minim amet excepteur.\nAd proident nisi esse. Exercitation ut tempor ut et voluptate cillum aliqua aute amet incididunt id id cupidatat.",
        },
        {
          name: "Jocelyn Schuster",
          rating: 3,
          comment:
            "Nisi irure esse amet ipsum ad dolore labore irure ad. In tempor nostrud sit deserunt aliqua culpa.\nPariatur esse cupidatat Lorem eiusmod cillum consequat ut ut est. Elit amet sit occaecat amet incididunt esse minim.",
        },
        {
          name: "Lee Schmidt",
          rating: 3,
          comment:
            "Labore deserunt sint do minim minim. Anim sit anim sunt ad. Laborum sint quis anim nisi minim.",
        },
        {
          name: "Davonte Heaney",
          rating: 5,
          comment:
            "Fugiat ex dolore deserunt magna veniam fugiat irure eu ipsum elit eiusmod deserunt. Lorem sit dolor ullamco ea nulla deserunt pariatur. Labore velit dolor officia Lorem reprehenderit Lorem. Ullamco est duis voluptate officia reprehenderit.\nEst id proident sunt tempor id elit dolore dolore incididunt sint eiusmod in magna excepteur Lorem. Elit aute eu voluptate consectetur mollit. Eiusmod consectetur est est labore culpa aliquip non.",
        },
        {
          name: "Rita Shields",
          rating: 4,
          comment:
            "Adipisicing non sint id nostrud id. Laborum commodo sunt ut est enim fugiat.\nIncididunt ut ea sint cupidatat ipsum. Non cillum cillum dolor dolore. Aute elit in culpa in sunt ullamco do deserunt adipisicing.",
        },
        {
          name: "Humberto Botsford",
          rating: 4,
          comment:
            "Elit non consequat reprehenderit quis Lorem mollit fugiat excepteur esse duis dolor consequat.",
        },
        {
          name: "Felicity O'Reilly",
          rating: 3,
          comment:
            "Est id et amet proident minim cupidatat non cupidatat velit aute. Voluptate aliqua amet exercitation.\nVelit laborum voluptate est labore veniam magna veniam quis qui. Sunt pariatur reprehenderit aliqua deserunt ad aute voluptate id cupidatat culpa ut. Aliquip adipisicing ex ut voluptate Lorem voluptate aliquip veniam. Cillum id reprehenderit eu aliqua amet incididunt excepteur cillum quis officia deserunt non fugiat anim.",
        },
        {
          name: "Anais Yundt",
          rating: 2,
          comment:
            "Magna consectetur minim Lorem officia tempor ullamco labore elit ullamco sint nisi proident adipisicing et. Do quis sit non nulla eiusmod ea commodo voluptate. Ipsum sint nisi id sint sint enim ullamco voluptate aliquip nostrud consequat commodo reprehenderit eu. Cillum sunt cupidatat minim cupidatat nostrud ipsum enim consequat adipisicing Lorem.",
        },
        {
          name: "Sidney Rutherford",
          rating: 1,
          comment:
            "Veniam dolore elit esse fugiat sunt ad eiusmod anim minim sunt do duis.",
        },
      ],
      averageRating: 0,
      description:
        "HOT SALE IN EUROPE electric racing motorcycle electric motorcycle for sale adult electric motorcycles",
      discountPercentage: 14.4,
    },
    {
      name: "Automatic Motor Gas Motorcycles",
      slug: "automatic-motor-gas-motorcycles",
      category: "motorcycle",
      thumbnail: "https://dummyjson.com/image/i/products/93/thumbnail.jpg",
      images: [
        "https://dummyjson.com/image/i/products/93/1.jpg",
        "https://dummyjson.com/image/i/products/93/2.jpg",
        "https://dummyjson.com/image/i/products/93/3.jpg",
        "https://dummyjson.com/image/i/products/93/4.jpg",
        "https://dummyjson.com/image/i/products/93/thumbnail.jpg",
      ],
      price: 1050,
      stock: 127,
      brand: "shock absorber",
      reviews: [
        {
          name: "Amelia Mann",
          rating: 5,
          comment:
            "Aliqua minim nostrud Lorem ut nisi anim sint cillum incididunt velit Lorem dolor.\nVeniam ad voluptate ut magna incididunt veniam culpa labore in labore veniam dolore occaecat.",
        },
        {
          name: "Thaddeus McCullough",
          rating: 2,
          comment:
            "Eiusmod duis pariatur sunt Lorem id ut ex occaecat nisi. Anim Lorem aliqua ea voluptate nostrud Lorem. Occaecat anim reprehenderit nulla aliquip duis.\nUt sint tempor labore quis aute ea aliquip mollit pariatur ea Lorem sint sint. Laboris ad dolor fugiat ullamco ullamco do velit laborum adipisicing do et sint. Fugiat voluptate officia nostrud excepteur nulla aute voluptate mollit. Laborum ut deserunt pariatur nulla culpa enim.",
        },
      ],
      description:
        "150cc 4-Stroke Motorcycle Automatic Motor Gas Motorcycles Scooter motorcycles 150cc scooter",
      discountPercentage: 3.34,
    },
    {
      name: "new arrivals Fashion motocross goggles",
      slug: "new-arrivals-fashion-motocross-goggles",
      category: "motorcycle",
      thumbnail: "https://dummyjson.com/image/i/products/94/thumbnail.webp",
      images: [
        "https://dummyjson.com/image/i/products/94/1.webp",
        "https://dummyjson.com/image/i/products/94/2.jpg",
        "https://dummyjson.com/image/i/products/94/3.jpg",
        "https://dummyjson.com/image/i/products/94/thumbnail.webp",
      ],
      price: 900,
      stock: 109,
      brand: "JIEPOLLY",
      reviews: [],
      averageRating: 0,
      description:
        "new arrivals Fashion motocross goggles motorcycle motocross racing motorcycle",
      discountPercentage: 3.85,
    },
    {
      name: "Wholesale cargo lashing Belt",
      slug: "wholesale-cargo-lashing-belt",
      category: "motorcycle",
      thumbnail: "https://dummyjson.com/image/i/products/95/thumbnail.jpg",
      images: [
        "https://dummyjson.com/image/i/products/95/1.jpg",
        "https://dummyjson.com/image/i/products/95/2.jpg",
        "https://dummyjson.com/image/i/products/95/3.jpg",
        "https://dummyjson.com/image/i/products/95/4.jpg",
        "https://dummyjson.com/image/i/products/95/thumbnail.jpg",
      ],
      price: 930,
      stock: 144,
      brand: "Xiangle",
      reviews: [
        {
          name: "Telly Spinka",
          rating: 3,
          comment:
            "Enim adipisicing mollit laboris esse ullamco sint aliqua laborum anim voluptate incididunt officia dolore sint. Ea dolor occaecat ad in reprehenderit occaecat incididunt proident fugiat nulla nulla id et est.\nSunt minim do aute eiusmod dolor eu veniam sunt cupidatat elit.",
        },
        {
          name: "Maurine Stracke",
          rating: 3,
          comment:
            "Anim aliquip pariatur ex est aliquip laboris adipisicing ea ex. Qui pariatur tempor incididunt nulla. Cillum voluptate minim labore ullamco.",
        },
        {
          name: "Nasir Leuschke",
          rating: 5,
          comment:
            "In sit sit magna Lorem aute. Occaecat voluptate mollit irure est consectetur voluptate irure mollit culpa. Consequat Lorem ad mollit duis aute laborum dolor aliqua officia eiusmod nisi.\nExcepteur laboris fugiat consequat enim velit aute ad labore labore. Dolore sint dolore duis magna eu deserunt reprehenderit commodo nostrud anim incididunt ea nulla. Commodo cillum proident nostrud magna Lorem tempor consequat eiusmod eiusmod aliquip mollit minim ullamco. Ullamco irure ex enim non excepteur occaecat in exercitation ad laboris commodo esse duis duis dolore.",
        },
        {
          name: "Bradford Prohaska",
          rating: 4,
          comment:
            "Proident ad eiusmod et aliqua fugiat.\nOfficia occaecat aute eu esse occaecat. Laboris tempor proident cupidatat tempor laboris ea enim officia ullamco. Excepteur velit consectetur ex occaecat ea exercitation pariatur dolor ut culpa excepteur do cupidatat. Nostrud labore sit adipisicing elit do Lorem veniam ut fugiat nisi excepteur.",
        },
      ],
      averageRating: 0,
      description:
        "Wholesale cargo lashing Belt Tie Down end Ratchet strap customized strap 25mm motorcycle 1500kgs with rubber handle",
      discountPercentage: 17.67,
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
      averageRating: 0,
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
      averageRating: 0,
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
      averageRating: 0,
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
      averageRating: 0,
      description: "Crystal chandelier maria theresa for 12 light",
      discountPercentage: 16,
    },
  ],
};
export default data;
