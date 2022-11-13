CREATE TABLE "to-do-list" (
	"id" SERIAL PRIMARY KEY,
	"chore" VARCHAR (100) NOT NULL,
	"isFinished" BOOLEAN NOT NULL
);

INSERT INTO "to-do-list" 
	("chore", "isFinished") 
VALUES 
	('Buy all the Thanksgiving groceries', 'False'),
	('Dust my collecion of fine china', 'True'),
	('Make sure all my christmass shopping is done', 'False'),
	('Bring car in for oil change', 'False'),
	('Organize Sock Drawer', 'True'),
	('Lolas annual VET appt.', 'False'),
	('Celebrate Anniversary with Hannah', 'False'),
	('Get a head start on taxes', 'False'),
	('Celebrate Hannahs B-Day', 'True'),
	('Pick a new healthcare plan', 'False');