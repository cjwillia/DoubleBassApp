function createHeader(title, back) {
    return $("<header/>").addClass("bar bar-nav").append($("<a/>").attr("href", back).append($("<button/>").addClass("btn btn-link btn-nav pull-left").append($("<span/>").addClass("icon icon-left-nav")).append("Back"))).append($("<h1/>").addClass("title").html(title));
}

function createSectionHeader(name) {
    return name === "none" ? "" : $("<h3/>").addClass("section-header").html(name);
}

function createSectionBody(text) {
    return $("<p/>").addClass("section-body").html(text);
}

function createImage(path) {
    return $("<div>").append($("<img>").attr("src", path).addClass("centered")).html();
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
            head: "none",
            body: createImage('assets/pics/standing/image002.png')
        },
        {
            head: "2",
            body: "Hold the bass at arm’s length with your left hand. The side of the bass should be directly in front of your left leg, with the bridge of the bass pointing directly to your right."
        },
        {
            head: "none",
            body: createImage('assets/pics/standing/image004.png')
        },
        {
            head: "3",
            body: "Bring the bass in toward your body and lean it on your left upper thigh. Then, turn it at a 45° angle to the left so that the top back edge of the bass is resting on your pelvis just above your left inner thigh and somewhere on or below your waist. <b>For the teacher:</b> These contact points will vary depending on the physique of the student and dimensions of the instrument."
        },
        {
            head: "none",
            body: createImage('assets/pics/standing/image006.png')
        },
        {
            head: "4",
            body: "While transferring your weight on to your right foot, turn your right heel slightly in to the left, turning your foot to the right, and take one step forward with your left foot. <b>For the teacher:</b> This is just a good starting position for the student. Flexibility and freedom of movement should be encouraged. While playing, it is entirely acceptable to shift weight from leg to leg."
        },
        {
            head: "none",
            body: createImage('assets/pics/standing/image008.png')
        },
        {
            head: "5",
            body: "To check the height of the bass, hold the neck with a fist in your left hand just below the peg box and nut. Point toward your head with your index finger. If your finger is pointing into your left ear, the height is approximately correct. For the teacher:</b> The height of the bass also will vary depending on the student and the bass. There are two general guidelines for the height. First, the student’s left elbow should not be higher than the shoulder while playing in the lower positions, and, secondly, the student’s right hand should be able to hold the bow comfortably between the fingerboard and bridge."
        },
        {
            head: "none",
            body: createImage('assets/pics/standing/image010.png')
        }
    ],
    //Using a Stool
    [
        {
            head: "1",
            body: "Adjust the end pin so that your right hand touches the bridge somewhere between the tips of your fingers and your knuckle, while the bass is facing you. <b>For the teacher:</b> This will vary depending on the physique of the student and dimensions of the instrument."
        },
        {
            head: "none",
            body: createImage('assets/pics/stool/image001.png')
        },
        {
            head: "2",
            body: "If your stool has four legs, situate it so that one of the four legs is facing forward. Sit near the edge of the stool with your right foot placed firmly on the ground with a slight bend in the knee, and the left foot placed on a rung. <b>For the teacher:</b> If there are two rungs, generally the top rung is the best place to for the left foot. Ideally the foot should be placed high enough for the left leg to support pressure placed on the strings and fingerboard but low enough to grant full access over the shoulder of the bass for thumb position. In most cases neither rungs are ideal. For optimal performance it is advisable to attach a small piece of wood to two of the legs of the stool as a rung, so the student can have both full access and support. This will take some experimentation by both the teacher and the student."
        },
        {
            head: "none",
            body: createImage('assets/pics/stool/image003.png')
        },
        {
            head: "3",
            body: "With both of your hands on the back shoulders of the instrument, hold the bass approximately at arm’s length and bring it in to your body and between your legs. Turn the bass so that the back of the bass is resting on your left leg and the right side of the bass is resting on your right inner thigh and pelvis. <b>For the teacher:</b> Once again, these contact points are only guidelines and will vary from student to student."
        },
        {
            head: "none",
            body: createImage('assets/pics/stool/image005.png')
        },
        {
            head: "4",
            body: "To check the height and angle of the bass, hold the neck with a fist in your left hand just below the peg box and nut. Point toward your head with your index finger. If your finger is pointing into your left ear, the height and angle are approximately correct. <b>For the teacher:</b> The height and angle of the bass also will vary depending on the student and the bass. It is good to experiment with the height and placement of the end pin, because these will both affect the height and angle of the bass. There are four general guidelines for the height and angle. First, the student’s left elbow should not be higher than the shoulder while playing in the lower positions. Secondly, the left shoulder of the bass should be low enough to allow easy access to the end of the fingerboard. There should be enough clearance so the student can draw a full down bow on the E string without hitting his/her leg, and the student’s right hand should be able to hold the bow comfortably between the fingerboard and bridge."
        },
        {
            head: "none",
            body: createImage('assets/pics/stool/image009.png')
        },
    ],
    //Left Hand Guidelines
    [
        {
            head: "1",
            body: "There should be a half step space between the first and second fingers and the second and fourth fingers. The third finger is usually not employed by itself in the lower positions for beginners, so it will be used to support the fourth finger."
        },
        {
            head: "none",
            body: createImage('assets/pics/left-hand/image002.png')
        },
        {
            head: "2",
            body: "The thumb should be arched and placed on the back of the neck somewhere behind the first and second finger. Everyone is different, so your thumb will find a place that is natural. You should not have to strain to keep your thumb in position."
        },
        {
            head: "none",
            body: createImage('assets/pics/left-hand/image004.png')
        },
        {
            head: "3",
            body: "Your wrist should always be slightly arched out. This should also feel natural and not forced."
        },
        {
            head: "4",
            body: "Your elbow should be up just below the height of your shoulder. You never want to raise your elbow above your shoulder, and you never want to rest your arm on the shoulder of the bass."
        },
        {
            head: "none",
            body: createImage('assets/pics/left-hand/image006.png')
        },
        {
            head: "5",
            body: "It is important to use as little effort as possible to press the strings down. Avoid clutching the neck with your thumb and fingers. You should primarily use weight from your arm and back for this. Also, although the weight should be applied by all of the fingers on the string, most of the weight should be shifted to the finger you are using. This is especially true for slower passages where vibrato becomes a key factor of your tone.  For faster passages this becomes less of a factor."
        },
        {
            head: "6",
            body: "Hand shape should be maintained, without straining, while learning the lower positions. Remember, it is important to remain flexible and to use only the necessary amount of tension. While playing second and fourth fingers, keep your other fingers on the string in there proper position. Have your other fingers ready to play with the proper hand shape, when you are playing a first finger."
        },
        {
            head: "7",
            body: "Keep your fingers arched at all times. This will allow for greater accuracy and prevent future joint problems. Also, your fingers will have much more strength this way."
        },
        {
            head: "8",
            body: "Keep your fingers close to the fingerboard at all times. This will improve your facility on the bass. This guideline goes hand in hand with number six. While playing an open string, keep your hand shape and hover closely over the string you are going to play next, giving the string enough room to vibrate."
        }
    ],
    //Shifting
    [
        {
            head: "1",
            body: "Most shifts should be made in the string. This means that when you are moving from one note to another through a shift you should not lift your fingers out of the string or fingerboard, leaving the weight of your hand in the string. This keeps the shift under control and it allows you to hear all or part of the shift, depending on bow use (see number 4). Jeff Turner, principal bass of the Pittsburgh Symphony Orchestra, gives a great illustration to show how a shift should work. He points out that when Tarzan goes from tree to tree, he doesn’t jump. He swings on a vine and lands softly onto the next tree."
        },
        {
            head: "2",
            body: "When shifting it is important to think about what finger you are shifting on. There are really only three choices. First is the “old finger shift”, when you shift on the finger you were using and change to the new finger at the end of the shift. Second is the “new finger shift”, when you start the shift with the finger you will use for the next note. The last option is a combination of both, when you start with the old finger and change to the new finger before you finish the shift. The music should determine what type of shift you use."
        },
        {
            head: "3",
            body: "Another factor to consider is the speed of the shift. Most students tend to shift too fast, while lifting there fingers off of the fingerboard, making a sort of clutching shift. The tempo of the music, the distance of the shift, and the character of the music should determine the speed. In general the shift should be at a speed that allows for the most control (which usually means slower rather than faster)."
        },
        {
            head: "4",
            body: "It is also important to determine when to shift while using a bow. Using the character of the music as a guide, you can shift before, after or during a bow change. Also, during a slur you can decide how much of the shift you want to hear by lifting the bow off of the string to hide all or part of the shift."
        },
        {
            head: "5",
            body: "One of the most important components to making accurate shifts is learning to “map out the fingerboard”. This can not be fully explained here, but generally it means using guide posts on the instrument (i.e. shoulders, nut, thickness of the neck, et cetera), measuring a shift by the interval your hand will move, and using your own hand as a reference point (for instance moving your first finger to where your fourth finger was to move a whole step). A good teacher will be able to help a student understand how to do this."
        },
        {
            head: "6",
            body: "Use your ear as your guide."
        }
    ],
    //Vibrato
    [
        {
            head: "1",
            body: "Vibrato is an expressive technique used by string players, which is achieved by slightly shading the pitch alternately sharp and flat at varying speeds and widths, yet keeping the pitch focused and not distorted to the point of becoming unrecognizable."
        },
        {
            head: "2",
            body: "On the bass vibrato is created by swinging the forearm from the elbow down toward the bridge and back toward the scroll, using the wrist as a guide and the finger on the string as the pivot point. This motion should be very smooth and should be done with a great amount of control. A mature player will never let his/her arm swing wildly and uncontrolled."
        },
        {
            head: "3",
            body: "The hand should remain flexible, and the student should not clutch the neck while vibrating.  Clutching will only make the vibrato very narrow and difficult to control."
        },
        {
            head: "4",
            body: "Always keep your fingers curved.  Remember there is strength in arches."
        },
        {
            head: "5",
            body: "While vibrating I feel it is important, especially for a beginner, to maintain a proper hand shape with all of the necessary fingers down, while focusing most of the weight onto the finger which is being used to play the note. This is true even in thumb position. This is very important for many reasons such as, accurate shifting, intonation, and control of vibrato. The only exception is to occasionally lift the first finger while vibrating on the fourth finger to allow for a wider vibrato if the music calls for it."
        }
    ],
    //Learning Vibrato
    [
        {
            head: "none",
            body: "A very good exercise to help young players develop a nice vibrato was taught to me by Paul Robinson at Ohio State University. You start away from the bass as follows:"
        },
        {
            head: "1",
            body: "Raise your left arm as if you are about to play the bass and touch your shoulder with the tip of your middle finger, almost like you are going to flap your arm like a chicken wing."
        },
        {
            head: "2",
            body: "Now using your wrist as a guide and your middle finger as a pivot point, move your forearm from the elbow slowly and smoothly up and down."
        },
        {
            head: "none",
            body: createImage('assets/pics/vibrato/image001.png')
        },
        {
            head: "3",
            body: "Once this motion begins to feel comfortable and fairly controlled, it is time to try it on the bass. Start by using your second finger in a position and on a string you feel very comfortable with (remember to keep your first finger down as well). Make the same motion as above. If it doesn’t feel right at first, move your hand away from the bass and try it on your shoulder again. Move back to the bass and try again. Keep doing this until you feel comfortable vibrating on your second finger."
        },
        {
            head: "4",
            body: "When you feel comfortable with the second finger it is time to try it with the other fingers. Try it with your first finger. If it doesn’t feel right, move back to the second finger. Once it is comfortable again, move back to the first finger and try to maintain the same feeling and control you have with the second finger. When you feel comfortable with the first finger do the same thing with your fourth finger."
        },
        {
            head: "5",
            body: "Now it is time to move to other positions. Once again start with your second finger in the position and on the string you began with. Shift to the new position and vibrate with your second finger. If it does not feel right, move back to the original position and vibrate there. Move back to the new position and try to maintain the same control and feeling you have in the original position. Keep repeating this until you feel comfortable vibrating on your second finger in the new position. Now do this with all of your fingers and in any position you wish. Then do the same thing on all of the other strings."
        },
        {
            head: "6",
            body: "Do not expect your vibrato to change over night. It takes a lot of time and patience, but the pay off is well worth it."
        }
    ],
    //Vibrato Exercise
    [
        {
            head: "none",
            body: "This exercise is designed to help you gain more control over your vibrato, so you can change the width and rate of the vibrato depending on what you are trying to express musically. It is important that you have a solid understanding of how vibrato works, as well as, its function in music as an expressive technique before you begin this exercise."
        },
        {
            head: "1",
            body: "Set your metronome to 52."
        },
        {
            head: "2",
            body: "Start with a finger, on a string and in a position, you feel you vibrate most comfortably with."
        },
        {
            head: "3",
            body: "Using the swinging motion of your forearm, alternately shade the pitch sharp and then flat at the rate of a quarter note. Keep the swinging motion fluid so that the vibrato is “round” in character. Be careful not to use a sharp or abrupt motion, and do not exaggerate how sharp or flat you shade the note. For the more advanced player, who is used to vibrating for expression, this exercise will seem very cold. Remember, though, the point of this exercise is to develop control, so that you are able to be more expressive with your vibrato."
        },
        {
            head: "4",
            body: "Once you become comfortable vibrating at a quarter note speed, it is time to move to eighth notes...then triplets...then sixteenths...et cetera...et cetera. At some point the motion will turn into a pure vibrato, with no discernable rhythmic pulse, which of course is what vibrato should sound like. However, at this point you should have more control over the speed and width of the vibrato, giving you more ways of expressing yourself musically."
        },
        {
            head: "5",
            body: "Use this same procedure to improve your vibrato with other fingers, strings and positions. Over time you will develop a very beautiful and mature vibrato."
        },
        {
            head: "6",
            body: "It is also a good idea to incorporate this exercise with your long-tone scale studies. As you move from note to note, vibrate at the same rhythmic pulse, such as quarters or eighths. Go through the scale again at a faster rate, perhaps as triplets, sixteenths, et cetera."
        }
    ],
    //Thumb Position
    [
        {
            head: "1",
            body: "When playing in the upper positions on the bass, generally starting with the written G above middle C on the G string, the thumb is employed to stop the strings just like the other fingers. Also, the third finger is used instead of the fourth finger.",
        },
        {
            head: "2",
            body: "When approaching thumb position while standing, you must take a small step back and rest the neck of the bass on your shoulder. This is not easy to do at first, and it can be very awkward, but with practice it can start to feel quite natural, as long as you do not tense up or shrug your shoulders. If seated, no special adjustment will be necessary."
        },
        {
            head: "3",
            body: "While playing in thumb position the elbow should be up enough so that the arm does not rest on the shoulder of the bass. It is ok if the arm occasionally touches the shoulder, but it should never rest on it."
        },
        {
            head: "4",
            body: "The wrist should have a slight arch to it."
        },
        {
            head: "5",
            body: "As you place the thumb on the string, it should be pointed to the right and fairly parallel with the nut and bridge. It should touch the string just in front of the joint on the side."
        },
        {
            head: "6",
            body: "The other fingers should all be arched, but slightly more on the tips than in the lower positions."
        },
        {
            head: "7",
            body: "There are three basic hand shapes used: a) half step between each finger; b) whole step between the thumb and first finger, with half steps between the rest; c) whole steps between the thumb and first finger, and first and second fingers, with a half step between the second and third finger (see Appendix III)."
        },
        {
            head: "<i>Half-Half-Half</i>",
            body: createImage('assets/pics/thumb/image001.jpg')
        },
        {
            head: "<i>Whole-Half-Half</i>",
            body: createImage('assets/pics/thumb/image003.jpg')
        },
        {
            head: "<i>Whole-Whole-Half</i>",
            body: createImage('assets/pics/thumb/image005.jpg')
        },
        {
            head: "8",
            body: "Remember that the upper body should not feel tense at all. Do not shrug and be careful not to bend at the waist too much or tilt your head down excessively."
        },
        {
            head: "none",
            body: createImage('assets/pics/thumb/image007.jpg')
        }
    ],
    //Pizzicato
    [
        {
            head: "none",
            body: "Below I describe three basic approaches to pizzicato (plucking the string). For all of these examples it is important to remember to pull the string to the side and not straight out and away from the fingerboard (unless you want the string to snap against the fingerboard like a Bartok pizz). Also, it is good to remember that the tone will change depending on where you pull the string. Plucking the string closer to the bridge will bring out a crisper and less booming sound, while playing over the fingerboard will make a deeper, less penetrating sound. How you approach the string should be determined by the music you are playing."
        },
        {
            head: "<i>Three Basic Approaches</i>",
            body: ""
        },
        {
            head: "1",
            body: "One of the most widely used approaches is plucking with the side of your index finger from the second joint to the tip. This is one of the best ways to play jazz bass lines, and it is also employed in the orchestra as well. When playing this way, I usually like to anchor my thumb on the side of the fingerboard. However, there is a school of thought that greatly discourages this, because it does not allow the player to use the weight of his/her arm to pluck the string. I like to anchor my thumb, because I feel I have more control and stability this way. You should experiment to see what works best for you."
        },
        {
            head: "2",
            body: "Another approach, which is primarily used by orchestral players, is to pluck the string with the fatty part of the tip of either the index or middle finger. When I play this way, I generally do not anchor my thumb. However, once again, you should see what works best for you."
        },
        {
            head: "3",
            body: "This third approach, using the tips of both the index and middle fingers, is used by all bass players, and it is generally employed when playing faster passages. When playing this way you alternate between both fingers quickly. The down side to this is that you cannot play with as much power. Also, it takes a lot of practice to get an even sound out of both fingers. When I employ this technique, I generally anchor my thumb. However, this is not the way everyone does it."
        },
        {
            head: "<i>What if I have a bow in my hand?</i>",
            body: ""
        },
        {
            head: "French Bow",
            body: "Hold the bow at the frog in the palm of your and with the hair facing away from your palm. Use either the index finger or your middle finger to pluck. I generally do not anchor my thumb when I play this way."
        },
        {
            head: "German Bow",
            body: "Maintain your bow hold and point the tip of the bow to the ground. Then extend your index finger out and use it to pluck the strings."
        }
    ],
    //French Bow
    [
        {
            head: "1",
            body: "Touch the tip of your right thumb to your middle finger between the first and second joint. This is basically how the relationship between those two fingers should look when you are holding the bow."
        },
        {
            head: "none",
            body: createImage('assets/pics/french/image002.png')
        },
        {
            head: "2",
            body: "Have your teacher or a friend hold the bow at the tip and frog (Don’t touch the hair!) in a horizontal position in front of you with the hair facing down."
        },
        {
            head: "none",
            body: createImage('assets/pics/french/image004.png')
        },
        {
            head: "3",
            body: "Start with your right hand relaxed at your side (no circle this time). Then, while maintaining that relaxed feeling in your hand, raise it up and place your fingers, palm down, in the middle of the bow. You should feel the stick touching your first three fingers somewhere just in front of the second joint. Your pinky will be touching the stick closer to the first joint or tip."
        },
        {
            head: "none",
            body: createImage('assets/pics/french/image006.png')
        },
        {
            head: "4",
            body: "Slide your hand toward the frog and stop when your middle finger reaches the point where the frog meets the stick."
        },
        {
            head: "none",
            body: createImage('assets/pics/french/image008.png')
        },
        {
            head: "5",
            body: "Gently curve your fingers over the bow. You will know you are in the right spot if the tip of your middle finger is touching the point where the hair meets the metal part of the frog. Do not allow your index finger to wrap around the stick and only gently touch the bow with your other fingers. <i>For the teacher:</i> For smaller hands, it may not be possible to touch the point where the hair meets the frog. In this case the tip of middle finger should stay suspended above that spot until the student’s hands get bigger. Do not force the bow into the palm of the hand in order for the student to have contact with this point, and do not allow the student to wrap his/her finger around the stick either. This will only restrict flexibility in the fingers of the right hand."
        },
        {
            head: "none",
            body: createImage('assets/pics/french/image010.png')
        },
        {
            head: "6",
            body: "Place the tip of your arched thumb in the corner where the frog meets the wood of the stick. Your thumb should not be placed inside of the frog or directly under the stick. The tip of your thumb should have contact with the stick and the frog. Always remember to keep your thumb arched."
        },
        {
            head: "none",
            body: createImage('assets/pics/french/image012.png')
        },
        {
            head: "7",
            body: "Now carefully take the bow away from your teacher or friend. Try not to clutch the stick too much, but hold it just enough so that it will not fall. You never want to clutch the stick so hard that it causes you pain, or tires you out too fast. You should always try to hold it as effortlessly as possible. World famous double bassists John Clayton says you should hold the bow as if you are holding a baby bird. You do not want to hold it so tightly that you crush the bird, but you want to hold it firmly enough so that you do not drop it."
        }
    ],
    //German Bow
    [
        {
            head: "1",
            body: "Touch the tips of your index finger and thumb in your right hand together to form a circle."
        },
        {
            head: "none",
            body: createImage('assets/pics/german/image001.png')
        },
        {
            head: "2",
            body: "Extend your hand slightly in front of you with your palm facing to the left, while maintaining the shape of a circle between your thumb and index finger."
        },
        {
            head: "none",
            body: createImage('assets/pics/german/image003.png')
        },
        {
            head: "3",
            body: "Have your teacher or a friend place the bow into your hand (Don’t touch the hair!). The frog should lightly touch the area where your fingers meet your hand, without going too far into your palm. <i>For the teacher:</i> The exact position of the bow inside of the hand will vary depending on the student. For smaller hands it may be necessary to hold the bow further into the palm. However, this is not optimal, because it will limit flexibility. As the student grows, the bow should come out of the palm."
        },
        {
            head: "none",
            body: createImage('assets/pics/german/image005.png')
        },
        {
            head: "4",
            body: "While maintaining a circle between your index finger and thumb, place the tip of your thumb on top of the bow, and the tip of your index finger on the side of the bow, touching only the stick. Also, with your second finger touching your index finger, place its tip onto the side of the frog. All of your fingers should be arched and flexible."
        },
        {
            head: "none",
            body: createImage('assets/pics/german/image007.png')
        },
        {
            head: "5",
            body: "Your third finger should be freely cradling the inside of the frog, without grabbing or clutching, and your fourth finger should be placed under the ferrule. Again, it is important to maintain arches in your fingers and flexibility."
        },
        {
            head: "none",
            body: createImage('assets/pics/german/image009.png')
        },
        {
            head: "6",
            body: "Now carefully take the bow away from your teacher or friend. Try not to clutch the stick too much, but hold it just enough so that it will not fall. You never want to hold the stick so hard that it causes you pain, or tires you out too fast. You should always hold it as effortlessly as possible. Imagine you are holding an egg in your hand. If you hold it too hard you will break it, and if you hold it too lightly you will drop it."
        }
    ],
    //Bow Arm Exercises
    [
        {
            head: "none",
            body: "These exercises are designed to help the student gain a better understanding of how each of the joints in there right arm, from the shoulder down, are used with the bow. When doing these exercises the student should keep in mind that all of the joints work together as, in the words of the famous violin pedagogue, Ivan Gallamian stated, “a system of springs.” The analogy of a spring is perfect for the joints, because, while each joint provides an amount of resistance, it also is very flexible just like a spring, which enables the arm to pull the bow in a variety of ways, yet keeping it straight."
        },
        {
            head: "The Elephant Trunk",
            body: "The student should stay seated on a stool or stand, while smoothly swinging his/her arm back and forth from the should like an elephant swings its trunk. As the student is swinging his/her arm, be sure that all of the other joints, from the elbow down, remain flexible and fluid. This will help the student see how the shoulder is utilized when bowing, especially for longer bow strokes. Also the student should observe how the other joints naturally move and follow through each pendulum like motion."
        },
        {
            head: "The Baby Elephant Trunk",
            body: "For this exercise the student should stand leaning against a wall with his/her right arm, thus prohibiting the shoulder from moving. Now have the student swing his/her arm smoothly and gently from the elbow down like a baby elephant. This is a very critical exercise, because most young bassists want to lock up their elbows when playing. The student should observe how the wrist and fingers naturally move with each swing."
        },
        {
            head: "Windshield Wipers",
            body: "For this exercise the student should hold the bow out in front pointing it to the left with the hair facing to the floor. Now have the student swing the bow from left to right like a windshield wiper using only the forearm and wrist. Make sure the student maintains a proper bow hold, while keeping the fingers as flexible as possible, so they can follow through with each swing."
        },
        {
            head: "Waving Goodbye",
            body: "Once again, the student should hold the bow out in front, while pointing it to the left with the hair facing to the floor. For German bow students, the bow should point to the floor. Now have the student wave good bye using only the wrist. Make sure a proper bow hold is maintained with flexibility in the fingers. This will help the student see how flexible the wrist can be for every bow stroke."
        },
        {
            head: "Tips Up",
            body: "For this exercise have the student point the bow to the ceiling. While maintaining a proper bow grip, have the student inch the bow up toward the ceiling and back down again using only the thumb and fingers. This is usually a very difficult exercise, especially for French bow players. However, it is a great way to teach a student how the fingers should be involved in every bow stroke."
        },
        {
            head: "Air Bow",
            body: "Have the student pretend to bow on the strings away from the bass. This is a good exercise to do after doing each of the preceding ones. The student should try to keep the bow parallel with the floor, while keeping each joint flexible and involved."
        }
    ],
    //Tone Production
    [
        {
            head: "The ABC's of Tone Production:",
            body: ""
        },
        {
            head: "Contact Point, Bow Speed, and Bow Pressure",
            body: "The ABC’s of tone production are all interrelated. Not one can work without the other. The following gives a very broad description of each factor and how it relates to the other."
        },
        {
            head: "Contact Point",
            body: "This is where you place the bow on the string in relation to the fingerboard and bridge. When you play closer to the bridge, the string gives you more resistance, producing a more penetrating sound. When you play closer to the fingerboard, your tone will be rounder and have a softer quality to it (I am not referring to volume...only tone), and the string will give you less resistance. Generally as you play closer to the bridge, you will use less bow speed and more pressure. The opposite is true when you play closer to the fingerboard."
        },
        {
            head: "Bow Speed",
            body: "This refers to the speed at which you move the bow when playing any given note. Generally, the faster you move the bow, the more sound you get. However, the pressure you apply to the string will also affect the volume as well as the tone. As I stated above, bow speed is also affected by the contact point."
        },
        {
            head: "Bow Pressure",
            body: "This is the weight applied to the string from the arm through the bow. Generally, the more weight you apply, the louder the volume and the more penetrating the tone. However, the speed of the bow will greatly affect the resulting tone as well as the contact point, as described above."
        }
    ]
];

var pages = [
    createPage("Equipment", "#equipment-setup", page_contents[0]),
    createPage("Standing with the Bass", "#equipment-setup", page_contents[1]),
    createPage("Using a Stool", "#equipment-setup", page_contents[2]),
    createPage("Left Hand Guidelines", "#left-hand", page_contents[3]),
    createPage("Shifting Basics", "#left-hand", page_contents[4]),
    createPage("Vibrato Basics", "#left-hand", page_contents[5]),
    createPage("Learning Vibrato", "#left-hand", page_contents[6]),
    createPage("Vibrato Exercise", "#left-hand", page_contents[7]),
    createPage("Thumb Position", "#left-hand", page_contents[8]),
    createPage("Pizzicato", "#right-hand", page_contents[9]),
    createPage("French Bow", "#right-hand", page_contents[10]),
    createPage("German Bow", "#right-hand", page_contents[11]),
    createPage("Bowing Arm Exercises", "#right-hand", page_contents[12]),
    createPage("Tone Production", "#right-hand", page_contents[13])
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