
const alphabet = [
    { 
        letter: "A",
        title: "<span>A</span>nna Sewell", 
        body: "<p>Anna Sewell, author of classic novel Black Beauty, was local to Norfolk, being born in Great Yarmouth (1820) and later living in Old Catton where she wrote the highly praised novel depicting the hardships of life a horse endures.</p><p>Anna Sewell died shortly after her novel was published, not living to see its success where it has sold over 50 million copies worldwide. Sewell Park, in Norwich, features a memorial fountain at its entrance which was erected by her cousin Ada Sewell in 1917. Furthermore, the Barn that is said to have once housed the horse that inspired Black Beauty is now the Sewell Barn Theatre Company.</p>",
        links: {
            l1: "https://www.literarynorfolk.co.uk/Norwich/anna_sewell.htm",
        } 
    },
    { 
        letter: "B",
        title: "<span>B</span>ook <span>B</span>enches", 
        body: "<p>To celebrate Norwich’s UNESCO City of Literature status, 8 benches were installed in 2023, inspired by books and authors from the local area. The benches feature a range of genres and are made from wood, metal, and stone. They can be found in: Gentleman’s Walk, Rampant Horse Street, All Saints Green, Rouen Road, Riverside, St-Martin-of-Palace-Plain, St George’s Street and Upper St Giles.</p><p>The Book Bench walking trail takes you on an hour and 15-minute (5.7km) stroll around the city where you can see the 43 book titles featured within the designs of the benches.</p>",
        links: {
            l1: "https://www.visitnorwich.co.uk/book-benches/",
        } 
    },
    { 
        letter: "C",
        title: "<span>C</span>ity of Literature, <span>C</span>ity of Stories", 
        body: "<p>Norwich is England’s first UNESCO City of literature, a network that consists of 42 cities representing 6 continents and 28 countries. Each city promotes their local creative community and pledges to champion UNESCO’s goal of fostering cultural diversity.</p><p>Each May, the City of Literature Weekend takes place as part of Norfolk & Norwich Festival, featuring talks, workshops, and activities. Similarly, the ‘City of Stories’ tourism campaign (launched in 2014) is a tribute to Norwich’s ‘literary firsts’ as well as celebrating new narratives forming today. </p>",
        links: {
            l1: "https://www.visitnorwich.co.uk/article/introducing-norwich-the-city-of-stories/",
            l2: "https://nationalcentreforwriting.org.uk/norwich-unesco-city-of-literature/network/",
            l3: "https://www.visitnorwich.co.uk/city-of-stories/",
        } 
    },
    { 
        letter: "D",
        title: "<span>D</span>ragon Hall", 
        body: "<p>This grade 1 listed building is home to the National Centre for Writing Literature house and writing hub. The great hall was built in 1427 by Robert Toppes and has since had many changes. It is renowned for its spectacular timber crown-post roof and intricately carved and painted dragon.</p><p>The National Centre for Writing runs a year-round programme of events and courses as well as Dragon Hall offering guided tours of the building and venue hire. </p>",
        links: {
            l1: "https://www.dragonhallnorwich.org.uk",
            l2: "https://nationalcentreforwriting.org.uk/visit-us/the-literature-house/dragon-hall/",
        } 
    },
    { 
        letter: "E",
        title: "<span>E</span>mma Healey", 
        body: "<p>Emma Healey is the Norwich-based best-selling author of Elizabeth is Missing (2014). The novel, which has now sold over a million copies worldwide, is narrated by an elderly woman with dementia who is determined to discover what has happened to her friend, and what it has to do with the unsolved disappearance of her sister Sukey just after the Second World War.</p><p>When talking with Visit Norwich in the ‘Settee of Stories’ blog, Emma stated that she has ‘travelled to a lot of cities all over the world, but I’ve never had the feeling of coming home that I had when I first came to Norwich. It’s big enough to have everything you need, but small enough to feel friendly.’</p>",
        links: {
            l1: "https://www.emmahealey.co.uk",
            l2: "https://www.visitnorwich.co.uk/article/settee-of-stories-a-sitdown-with-emma-healey/",
            l3: "https://nationalcentreforwriting.org.uk/writing-hub/read-the-lakenham-way-by-emma-healey/",
        } 
    },
    { 
        letter: "F",
        title: "<span>F</span>orum", 
        body: "<p>The Forum is home to Norfolk and Norwich’s Millenium Library which is one of the most popular public libraries in the UK and home to the Norfolk Heritage Centre, Business and IP Centre Norfolk, American Library, and Children’s Library.</p><p>The Forum opened in 2001 and was built on the site of the old Norwich Central Library, which was devastated by fire in 1994, destroying many books and precious documents.</p><p>The Forum also hosts Norwich Science Festival, Norfolk Makers Festival, Norfolk Heritage Open days, and Norwich Games Festival, </p>",
        links: {
            l1: "https://theforumnorwich.co.uk ",
        } 
    },
    { 
        letter: "G",
        title: "James Albert Ukawsaw <span>G</span>ronniosaw", 
        body: "<p>Considered the first published African in Britain, the autobiography/ memoir ‘A Narrative of the Most Remarkable Particulars in the Life of James Albert Ukawsaw Gronniosaw, an African Prince, as Related by Himself’ was published in 1772.</p><p>Born a prince, Gronniosaw recounts his life in West Africa prior to being sold into slavery, as well as his experiences in America as an enslaved and a free man. Later in life, he lived in Norwich with his wife and worked as a weaver and labourer. </p>",
        links: {
            l1: "https://equianosworld.org/associates-religious.php?id=11",
            l2: "https://www.youtube.com/watch?v=bGPKK8S72kk",
            l3: "https://www.edp24.co.uk/things-to-do/20711171.revealing-hidden-norwich-history/",
        } 
    },
    { 
        letter: "H",
        title: "<span>H</span>arriet Martineau", 
        body: "<p>Born at Gurney Court off Magdalen Street, Harriet Martineau was a pioneering sociologist, activist, journalist, and writer.</p><p>Her ‘Illustrations of Political Economy’ included twenty-five short stories showing how economic conditions impacted the lives of ordinary people in a variety of social environments. She also advocated for education for women as well as travelling to America in 1845 and campaigning against the slavery trade.</p>",
        links: {
            l1: "https://www.literarynorfolk.co.uk/Norwich/harriet_martineau.htm",
            l2: "https://martineausociety.co.uk/the-martineaus/harriet-martineau/",
            l3: "https://nationalcentreforwriting.org.uk/writing-hub/reintroducing-harriet-martineau-with-stuart-hobday-gaby-weiner/",
        } 
    },
    { 
        letter: "I",
        title: "<span>I</span>ron Man by Lynne Bryan", 
        body: "<p>Lynne Bryan’s 2021 debut memoir, ‘Iron Man’, is a ‘candid and insightful memoir about disability, the vulnerability of the body and the mind, and the frailty and strength of our corporeality’ – National Centre of Writing.</p><p>In 1995, Lynne Bryan undertook the MA in creative writing at University of East Anglia and is now a tutor on the ‘Start Writing Fiction’ 12-week course at the National Centre for Writing in Norwich as well as winning the East Anglian Book of the year in 2022. </p>",
        links: {
            l1: "https://nationalcentreforwriting.org.uk/writing-hub/lynne-bryan-iron-man/",
            l2: "https://nationalcentreforwriting.org.uk/writing-hub/eaba-winner-2022/",
        } 
    },
    { 
        letter: "J",
        title: "<span>J</span>ulian of Norwich", 
        body: "<p>Julian of Norwich was a 14th century anchoress and mystic who was the first woman to write a book in the English language. Referred to as ‘the mother of English literature’ her book ‘Revelations of Divine Love’ documents the 16 extraordinary visions she experienced whilst believing to be on her deathbed. She lived a life of quiet contemplation and prayer in a cell attached to St Julian’s church on Rouen Road, which still stands today.</p><p>The Julian Shrine visitor centre is located next door and has a gift shop, library, and guest accommodation for people to visit.  </p>",
        links: {
            l1: "https://www.julianshrine.org",
        } 
    },
    { 
        letter: "K",
        title: "Margery <span>K</span>empe", 
        body: "<p>‘The Book of Margery Kempe’ centres around the life of a medieval woman who had lived through the turbulent late fourteenth and early fifteenth centuries in East Anglia as well as being considered the first autobiography written in English.</p><p>Margery Kempe was born in Bishops Lynn (now Kings Lynn) around 1373 and was a merchant and mystic who went on pilgrimages, was accused of heresy, and was at one point imprisoned. Kempe’s ‘voice sounds incredibly modern and many women today can no doubt relate to her experiences and traumas’- Janina Ramirez.</p>",
        links: {
            l1: "https://www.historic-uk.com/HistoryUK/HistoryofEngland/Mysticism-And-Madness-Of-Margery-Kempe/ ",
        } 
    },
    { 
        letter: "L",
        title: "<span>L</span>.P. Hartley", 
        body: "<p>L.P. Hartley was an English novelist and short story writer who wrote the classic novel ‘The Go-Between’, featuring Norfolk and Norwich locations.</p><p>Published in 1953, L.P. Hartley’s novel features Brandham Hall based on Bradenham Hall which Hartley visited as a child, Hickling Broad, and Thornage Village. The protagonist, Leo, also takes a trip into Norwich where he has lunch with Marian at the Maid’s Head Hotel in Tombland and walks around the cathedral.</p>",
        links: {
            l1: "https://www.literarynorfolk.co.uk/go_between,_the.htm",
        } 
    },
    { 
        letter: "M",
        title: "<span>M</span>eir of Norwich", 
        body: "<p>Meir Ben Elijah was a medieval Jewish poet whose work conveys the experience of persecution and fear in the life of a devout Jew.</p><p>There was a thriving Jewish quarter in the city at this time located between the Haymarket, Orford Place, and White Lion Street as well as a synagogue which is believed to have stood close to the site of the present-day Lamb Inn. We can assume that Meir’s poems were written in the second half of the 13th century, at the time of the expulsions of 1290, but it is not known what happened to them over the following 650 years until they were discovered hidden in the Vatican in the middle of the 19th Century.</p>",
        links: {
            l1: "https://www.ourmigrationstory.org.uk/oms/put-a-curse-on-my-enemies-meir-ben-elijah-and-the-jews-of-early-norwich",
            l2: "https://www.literarynorfolk.co.uk/Norwich/meir_of_norwich.htm",
            l3: "https://www.medieval.eu/into-the-light-the-medieval-hebrew-poetry-of-meir-of-norwich/",
        } 
    },
    { 
        letter: "N",
        title: "<span>N</span>ational Centre for Writing", 
        body: "<p>The National Centre for Writing is a contemporary literature house and writing hub at Dragon Hall, holding events, residencies, activities, and festivals. As a charity they work with writers, literary translators, young people, schools, families, and communities.</p><p> With some of their patrons including Margaret Atwood, JM Coetzee, and John Boyne, their mission is ‘to be a resilient, internationally networked creative house and hub for literature, celebrating our stories past and nurturing our literary futures’- National Centre for Writing. </p>",
        links: {
            l1: "https://nationalcentreforwriting.org.uk",
        } 
    },
    { 
        letter: "O",
        title: "Amelia <span>O</span>pie", 
        body: "<p>Born and raised in Norwich, Amelia Opie was a novelist, poet, radical and philanthropist of the Romantic period. Her earliest poems were published when she was a teenager, and she began her literary career by writing classical and gothic drama with her best remembered novel being ‘Adeline Mowbray’. </p><p>Opie represented Norwich in the national anti-slavery convention in 1840 as well as associating with the controversial literary and political Godwin Circle, which included writers such as Thomas Holcroft, Elizabeth Inchbald, and Mary Wollstonecraft. Her statue, designed by J.P.Chaplin and sculpted by Z.Leon, can be seen on Opie street. </p>",
        links: {
            l1: "https://norfolkrecordofficeblog.org/amelia-opie/",
        } 
    },
    { 
        letter: "P",
        title: "<span>P</span>ublic Library Act", 
        body: "<p>Norwich was the first city in the UK to implement the 1850 Public Library Act which allowed larger boroughs to add up to half a penny in the pound to the rates to pay for library facilities and staff. The first new building entirely funded under the Act was the public library, museum and art school at Norwich which opened in 1857.</p>",
        links: {
            l1: "https://openplaques.org/plaques/5480",
            l2: "https://colonelunthanksnorwich.com/2018/06/15/norwich-knowledge-libraries/",
        } 
    },
    { 
        letter: "Q",
        title: "<span>Q</span>uebec", 
        body: "<p>‘Imagining the City’ is a National Centre for Writing ongoing programme of virtual and digital residencies, fostering connections between Norwich and writers and translators from around the world.</p><p>In 2022 Norwich’s Megan Bradbury and Quebec’s Juliette Bernatchez worked together to strengthen links between these two cities and to spotlight places of literary importance. Over three months they both explored their UNESCO Cities of Literature, writing to each other and acting as each other’s eye, ‘looking at the familiar in new ways’.</p>",
        links: {
            l1: "https://nationalcentreforwriting.org.uk/get-involved/writers/residencies/imagining-the-city/",
            l2: "https://www.youtube.com/watch?v=H93Zv7d-u8I",
        } 
    },
    { 
        letter: "R",
        title: "<span>R</span>eading", 
        body: "<p>Norwich has a plethora of varied bookshops from new books to second hand and collectables, making reading accessible and exciting for everyone. Some include JR & RK Ellis Bookshop, Waterstones, The Book Hive, Dormouse Bookshop, Tombland Bookshop, and City Bookshop. </p>",
        links: {
            l1: "https://nationalcentreforwriting.org.uk/wp-content/uploads/2023/06/Norwich-Independent-Bookshops-map.pdf",
        } 
    },
    { 
        letter: "S",
        title: "C.J <span>S</span>ansom", 
        body: "<p>Sansom was one of Britain’s bestselling historical novelists, known in particular for his mystery novels featuring barrister Matthew Shardlake, set in Tudor England.</p><p>The seventh novel in the Shardlake series is ‘Tombland’, published in 2018, which is largely set in 1549 in Norwich and features well known landmarks and locations such as Mousehold Heath, Norwich Castle, Guildhall, Elm Hill, Kett’s Heights, and more. Shardlake’s arrival in Norfolk coincides with the peasant’s rebellion of the same year led by Robert Kett.</p>",
        links: {
            l1: "https://www.youtube.com/watch?v=wOqj1Ol5HkA&t=1s",
        } 
    },
    { 
        letter: "T",
        title: "<span>T</span>homas Browne", 
        body: "<p>Sir Thomas Browne was a 17th century medical doctor who was widely travelled in his training and who settled in Norwich.</p><p>In 1635, he had written his first book, Religio Medici (‘The Religion of a Medical Man’), followed by Pseudodoxia Epidemica (‘Vulgar Errors’) in 1646, and Hydriotpahia (‘Urn Burial’) and The Garden of Cyrus, both in 1658. He was knighted by King Charles II and later died at his house in Haymarket, before being buried in St Peter Mancroft Church. In 1840, his skull was disinterred and was kept on display at the Norfolk and Norwich Hospital, and later reburied in his grave in 1922.</p>",
        links: {
            l1: "https://www.sirthomasbrowne.org.uk",
            l2: "http://www.norwich-heritage.co.uk/monuments/Thomas%20Browne/Thomas_Browne.shtm",
        } 
    },
    { 
        letter: "U",
        title: "<span>U</span>niversity of East Anglia", 
        body: "<p>The University of East Anglia established the first Masters in Creative Writing in 1970 and the first PhD in Creative and Critical Writing in 1987.</p><p>They hold year-round programmes of literary events including the Norwich Crime Writing Festival the hugely successful UEA Live and its student run companion series New Writing Live.</span<span><Students join from all over the world and have progressed to careers across the creative industries, with their alumni of authors including Kazuo Ishiguro (the Nobel Prize in Literature winner), Ian McEwan, Tracy Chevalier, Emma Healey, Tash Aw, and Ayọbámi Adébáyọ. ‘We pioneered the teaching of Creative Writing in the United Kingdom and in 2020 we celebrated 50 years of teaching it’ – UEA</p>",
        links: {
            l1: "https://www.uea.ac.uk/about/school-of-literature-drama-and-creative-writing/creative-writing",
        } 
    },
    { 
        letter: "V",
        title: "E<span>v</span>ents", 
        body: "<p>Norwich holds many literary events throughout the year, promoting reading and knowledge. The City of Literature Weekend is part of Norfolk & Norwich Festival which celebrates Norwich’s UNESCO status as well as providing a platform for new and emerging voices. Other events include the Publishing Fair at Dragon Hall which is a celebration of local and regional publishing, The National Centre for Writing talks and lectures, tours, and the University of East Anglia writing events.</p><p>In October 2024 a brand-new Book Festival is coming to Norwich with author events, book signings, and more.</p>",
        links: {
            l1: "https://norwichbookfestival.co.uk/",
            l2: "https://nnfestival.org.uk/whats-on/art-for-the-environment-artists-from-aer-international-residency-programme/  ",
        } 
    },
    { 
        letter: "W",
        title: "<span>W</span>riting on the wall", 
        body: "<p>In 2006, local Artist Rory Macbeth painted all 40,000 words of Thomas More’s novel ‘Utopia’ onto the walls of an old Eastern Electricity building on Westwick Street.</p><p>As part of an art exhibition Rory Macbeth stated, ‘the novel is as valid now as it was when it was written.’ This ‘Writing On The Wall’ was to be demolished within a year, however still stands today. </p>",
        links: {
            l1: "https://www.eveningnews24.co.uk/news/22372178.know-real-story-behind-one-norwichs-noticeable-graffiti-works/ ",
        } 
    },
    { 
        letter: "X",
        title: "IL<span>X</span>", 
        body: "<p>For more than a decade, British Council and National Centre for Writing have been working together to curate the International Literature Exchange (ILX).</p><p>ILX brings literature professionals together to learn, exchange expertise and experience, devise collaborations, and build international networks. Running from 2024-26, the newest round of ILX explores the unique challenges and opportunities facing all those who work with words, books, and literature. The ILX10 are a selection of 10 early career writers based in the UK whose work has powerful potential to speak and to engage with global literary audiences.</p>",
        links: {
            l1: "https://nationalcentreforwriting.org.uk/international-literature-exchange/",
        } 
    },
    { 
        letter: "Y",
        title: "Pla<span>y</span>house", 
        body: "<p>Norwich Theatre Playhouse is an intimate 300 seat riverside venue, which celebrated its 25th Anniversary in 2020.</p><p>The building dates back to the 19th century and was once a maltings but since becoming a theatre it has become recognised as one of the best fringe venues in the country and is also home to the famous Playhouse Bar.</p>",
        links: {
            l1: "https://norwichtheatre.org/your-visit/norwich-theatre-playhouse/",
        } 
    },
    { 
        letter: "Z",
        title: "Janina Ramire<span>z</span>", 
        body: "<p>Dr. Janina Ramirez is a cultural historian, broadcaster, and author based at the University of Oxford, where she is a lecturer and course director.</p><p>With an academic background, she has taught at York, Warwick, and Winchester Universities, as well as the Victoria and Albert Museum.</p><p>Janina is the author of notable works such as Femina and Julian of Norwich: A Brief History, both essential resources for understanding Norwich’s significant contributions to literary history. </p>",
        links: {
            l1: "https://www.janinaramirez.co.uk",
            l2: "https://debalie.nl/programma/femina-feminist-history-lessons-with-janina-ramirez-24-04-2023/ ",
            l3: "https://www.bbc.co.uk/news/uk-england-norfolk-52020227",
        } 
    },
  ];
  


