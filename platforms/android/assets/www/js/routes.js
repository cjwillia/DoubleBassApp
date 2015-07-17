function createHeader(title, back) {
    return $("<header/>").addClass("bar bar-nav").append($("<a/>").attr("href", back).append($("<button/>").addClass("btn btn-link btn-nav pull-left").append($("<span/>").addClass("icon icon-left-nav")).append("Back"))).append($("<h1/>").addClass("title").html(title));
}

function createSectionHeader(name) {
    return name === "none" ? "" : $("<h3/>").addClass("section-header").html(name);
}

function createSectionBody(text) {
    return $("<p/>").addClass("section-body").html(text);
}

function createPage(title, back, content_array) {
    var container = $("<div/>").attr("id", "container");
    var header = createHeader(title, back);
    var sections = $("<div/>").addClass("content");
    sections.append($("<p/>"));
    container.append(header);
    content_array.forEach(function(content) {
        var section_header = createSectionHeader(content.head);
        var section_body = createSectionBody(content.body);
        sections.append(section_header);
        sections.append(section_body);
    });
    container.append(sections);
    return container;
}

var page_contents = [
    //Equipment / Setup page
    [
        {
            head: "none",
            body: "The double bass is a very physically taxing instrument, and for this reason it is important for the student to have a bass and bow that are well maintained and suitable for his/her size. The following are some suggestions for the teacher and student to make the learning process as fun and enjoyable as possible with as little pain as possible."
        },
        {
            head: "Double Bass Size",
            body: "This is one of the most important factors to consider when starting on the double bass. If the bass is too big, it will be very difficult to play even a simple tune. Basses come in a wide variety of sizes from 1/8 (or smaller) to 7/8. Because of this a student can start on the bass at a very early age. Today students are starting as early as the age of four. When deciding on a bass size, the most important thing to consider is the size of the student’s hand. If the student has to stretch too much or even shift to play a whole step in half position, the bass is too big. The other thing to consider is the height of the student.  If the end pin has to come way out to suit the student, the bass is too small."
        },
        {
            head: "Bridge",
            body: "I feel it is very important to have a bass with adjusters on the bridge. String instruments are very susceptible to climate changes. For this reason, too much humidity can cause the strings on the bass to go so high that the student will have a lot of difficulty just pressing the strings down. With adjusters, you can keep the string height fairly consistent throughout the year. For a student I suggest keeping the strings approximately 4mm to 5mm above the end of the fingerboard. Also it is important that the bridge be cut properly and aligned properly. If it is not set up well, it will also cause great problems for the student, such as string crossing problems and tone production problems."
        },
        {
            head: "Fingerboard",
            body: "It is also imperative that the fingerboard be properly planed and dressed. If it is not, it will be very difficult for the student to shift properly because of the disparity in string height along the fingerboard. Also, a poorly planed fingerboard can cause the strings to snap and buzz while playing."
        },
        {
            head: "Bow",
            body: "The size of the bow should correlate to the size of the bass. I also strongly recommend using real hair instead of synthetic hair. The difference in tone production is quite drastic on the bass. I also feel it is important to have the freshest hair possible on the bow. For me this means changing the hair every three or four months. As the hair gets older, it becomes more and more difficult to draw out a good tone, and it usually causes the student or performer to press more than necessary."
        },
        {
            head: "Strings",
            body: "It is important that strings also be fresh. This means changing the strings every six months. I would not keep strings on longer than a year, because of the affect it will have on tone production"
        },
        {
            head: "Rosin",
            body: "I recommend: Kolstein Soft, Pop’s, Neimann’s or Carlsson."
        },
        {
            head: "Cleaning the Instrument",
            body: "I use a rag to clean the rosin off of the body of the instrument, but I do not use a rag to clean the strings. For the strings I recommend a Scotch pad or something equivalent. When you use a rag to clean the strings, fibers from the rag stick to the rosin on the strings, and in turn, end up on the hair of your bow."
        }
    ],
    //Standing with the Bass
    [
        {
            head: "1",
            body: "Adjust the end pin so that your right hand touches the bridge somewhere between the tips of your fingers and your knuckle, while the bass is facing you. <b>For the teacher:</b> This will vary depending on the physique of the student and dimensions of the instrument."
        },
        {
            head: "2",
            body: "Hold the bass at arm’s length with your left hand. The side of the bass should be directly in front of your left leg, with the bridge of the bass pointing directly to your right."
        },
        {
            head: "3",
            body: "Bring the bass in toward your body and lean it on your left upper thigh. Then, turn it at a 45° angle to the left so that the top back edge of the bass is resting on your pelvis just above your left inner thigh and somewhere on or below your waist. <b>For the teacher:</b> These contact points will vary depending on the physique of the student and dimensions of the instrument."
        },
        {
            head: "4",
            body: "While transferring your weight on to your right foot, turn your right heel slightly in to the left, turning your foot to the right, and take one step forward with your left foot. <b>For the teacher:</b> This is just a good starting position for the student. Flexibility and freedom of movement should be encouraged. While playing, it is entirely acceptable to shift weight from leg to leg."
        },
        {
            head: "5",
            body: "To check the height of the bass, hold the neck with a fist in your left hand just below the peg box and nut. Point toward your head with your index finger. If your finger is pointing into your left ear, the height is approximately correct. For the teacher:</b> The height of the bass also will vary depending on the student and the bass. There are two general guidelines for the height. First, the student’s left elbow should not be higher than the shoulder while playing in the lower positions, and, secondly, the student’s right hand should be able to hold the bow comfortably between the fingerboard and bridge."
        }
    ]
];

var pages = [
    createPage("Equipment", "#equipment-setup", page_contents[0]),
    createPage("Standing with the Bass", "#equipment-setup", page_contents[1])
];

function setRoutes(router) {

    router.addRoute('', function() {
        $("body").html(new HomeView().render().$el);
    });

    router.addRoute('equipment-setup', function() {
        $("body").html(new EquipmentSetupView().render().$el);
    });

    router.addRoute('left-hand', function() {
        $("body").html(new LeftHandView().render().$el);
    });

    router.addRoute('right-hand', function() {
        $("body").html(new RightHandView().render().$el);
    });

    router.addRoute('scales', function() {
        $("body").html(new ScalesView().render().$el);
    });

    router.addRoute('page/:n', function(n) {
        var content = pages[parseInt(n)];
        $("body").html(new ContentPageView().render(content).$el);
    })

    router.start();        
}