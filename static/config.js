// stimuli: these are occupations, but they can be changed
labels = ['COP', 'BUILDER', 'MAILPERSON', 'BARTENDOR', 'ACADEMIC', 'POSTAL WORKER', 'DRIVER', 'DELIVERY PERSON', 'TAXI DRIVER', 'ZOOKEEPER', 'GROUNDSKEEPER', 'FENCER', 'CHEF', 'COOK', 'PROGRAMMER', 'CONDUCTOR', 'PERSONAL TRAINER', 'ANIMAL TRAINER', 'CLEANER', 'JANITOR', 'RECEPTIONIST', 'BUSINESSPERSON', 'SALESPERSON', 'REPAIRPERSON', 'POLITICIAN', 'HAIRSTYLIST', 'GRAPHIC DESIGNER', 'MUSICIAN', 'PSYCHIATRIST', 'ENGINEER', 'WELDER', 'BOTANIST', 'VETERINARIAN', 'BIOLOGIST', 'LAWYER', 'ZOOLOGIST', 'DESIGNER', 'FILMMAKER', 'USHER', 'COMPOSER', 'NURSE', 'TEACHER', 'MIDWIFE', 'LIBRARIAN', 'MARKETER', 'CARDIOLOGIST', 'CRITIC', 'HISTORIAN', 'ARCHITECT', 'SOLDIER', 'ACTOR', 'DOCTOR', 'SHOEMAKER', 'BOOKBINDER', 'GLOVER', 'CEO', 'ANIMATOR', 'ILLUSIONIST', 'RADIO PERSONALITY', 'PAINTER', 'PERFORMER', 'ACROBAT', 'EDITOR', 'COPYWRITER']

var nBlocks = 3; // total number of experiment blocks
var conds = ['1', '2']; // condition names
var LLs = [10,10]; // list lengths to use - this should be of the same length as conds
var durations = [1000, 3500]; // study times to use - this should also be of the same length as conds
var delay_times = [20000, 20000]; // delay times in ms between study and test phases