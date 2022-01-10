# ITC410

## Proposal

I will create a web app where a user could create/delete characters that have different favored and unfavored attributes. these characters could face up to 5 preset challenges, however, gameification is not required.

## DDD
...
### Domain Events
...
- User logged in
- User logged out
- User account created
- User account updated
- User account deleted
- Character created
- Character updated
- Character deleted
- File uploaded
- File deleted
- Challenge pass
- Challenge fail
### Domain Commands
...
### Entities
Account
- Account id (unique)
- Name
- Password
- Sessioninfo (Are they logged in?)

Character
- Character id (unique)
- Favored attribute
- Unfavored attribute
- Race
- Name
### Value Objects
File
- Data
- Character id
Challenge
- Description