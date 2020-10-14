#Robin Software Engineering Coding Challenge
Robin is looking to hire a new programmer. However, they're having difficulty choosing between a few of the applicants. While brainstorming intelligent ways to decide between the applicants, they quickly decided that Seraph was right...
"You do not truly know someone until you fight them"

In that spirit, we bring you Applicant Wars, the next generation picker-chooser-thingy
-------------------------
Details:
-------------------------
Being... well... programmers, the applicants weapon of choice is the slap. Each applicant must engage in a one on one match with each other applicant.

A match consists of one or more rounds where two applicants square off in a fight until one applicant gets slapped so hard by another applicant that he or she literally can't walk. This is serious business.

In each round, the applicants alternate slapping each other until both candidates have exhausted the number of attacks they are permitted, or a candidate's health reaches or drops below 0. You may randomly choose who attacks first in each round, or if you're feeling spicy, you can implement an initiative system using the initiative data supplied in the import file.
-------------------------
Requirements:
-------------------------
The application must import this applicant spreadsheet (https://www.dropbox.com/s/cchi1qx6z5u92fi/applicants.csv), which contains the vitals for each applicant. Each applicant must then fight against all the other applicants. The applicant with the highest winning percentage after all the matches are completed gets the job!
-------------------------
Example match:
-------------------------
Candidate 1:
Health: 46
Damage: 3
Attacks: 5

Candidate 2:
Health: 52
Damage: 8
Attacks: 2

Round 1:
Candidate 1 is randomly selected to go first (43 > 40)  <-- initiative roll
Candidate 1 hits candidate 2 for 3 damage (52 -> 49)    <-- Damage applied (health before damage -> health after damage)
Candidate 2 hits candidate 1 for 8 damage (46 -> 38)
Candidate 1 hits candidate 2 for 3 damage (49 -> 46)
Candidate 2 hits candidate 1 for 8 damage (38 -> 30)
Candidate 1 hits candidate 2 for 3 damage (46 -> 43)
Candidate 1 hits candidate 2 for 3 damage (43 -> 40)
Candidate 1 hits candidate 2 for 3 damage (40 -> 37)
Round 2:
Candidate 1 is randomly selected to go first (26 > 11)
Candidate 1 hits candidate 2 for 3 damage (37 -> 34)
Candidate 2 hits candidate 1 for 8 damage (30 -> 22)
Candidate 1 hits candidate 2 for 3 damage (34 -> 31)
Candidate 2 hits candidate 1 for 8 damage (22 -> 14)
Candidate 1 hits candidate 2 for 3 damage (31 -> 28)
Candidate 1 hits candidate 2 for 3 damage (28 -> 25)
Candidate 1 hits candidate 2 for 3 damage (25 -> 22)
Round 3:
Candidate 2 is randomly selected to go first (35 > 29)
Candidate 2 hits candidate 1 for 8 damage (14 -> 6)
Candidate 1 hits candidate 2 for 3 damage (22 -> 19)
Candidate 2 hits candidate 1 for 8 damage (6 -> -2)
Candidate 2 wins!
-------------------------
Additional info:
-------------------------
Try to keep application output clear and readable, but concise. Using the above output format would work fine, though feel free to provide what you feel is best.

In regards to program design, you have complete control. This challenge was designed to get a feel for your problem solving ability and creativity.
-------------------------
Vitals:
-------------------------
Name - Applicant name
Health - Starting health
Damage - Damage that each slap inflicts
Attacks - Number of attacks per round
I've also included some additional columns in the spreadsheet that you can incorporate if you have extra time:

Dodge - Percentage chance to dodge
Critical - Percentage chance to inflict critical damage (x2)
Initiative - Added to random roll for deciding who goes first each round

The time limit for this challenge is no more than 180 minutes. Place your application files into a zip file titled with your name and submit it to codechallenge@robin.co . Alternatively host the submission via github or similar service and send a link or other instructions on how to access your submission