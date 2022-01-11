# ITC410

## Proposal

I will create a web app where a user could create/delete characters that have different favored and unfavored attributes. these characters could face up to 5 preset challenges, however, gameification is not required.

## DDD

### Domain Events

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
- Challenge pass(optional)
- Challenge fail(optional)
### Domain Commands

- logInUser
- logOutUser
- createUserAccount
- deleteUserAccount
- uploadFile
- deleteFile
- addCharacter
- deleteCharacter
- modifyCharacter(to be used in updating description, name, etc.)
- startChallenge(optional)
- passChallenge(optional)
- failChallenge(optional)
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
## REST Design
### Endpoints
| Description | URL Fragment | HTTP Method | Path Parameters | Representations | 
| ----------- | ----------- | -----------| ----------- | ----------- |
| Create Account | /accounts | POST | | Create Account |
| Delete Account | /accounts/{accountId} | DELETE | accountId | |
| Log in | /accounts/{accountId}/login | PUT | accountId | Account Log In |
| Log out | /accounts/{accountId}/logout | PUT | accountId | |
| Get Characters | /characters | GET | | Get Characters |
| Add Character | /characters | POST | | Set Character |
| Edit Character | /characters/{characterId} | PUT | characterId | Set Character |
| Delete Character | /characters/{characterId} | DELETE | characterId | |
| Upload File to Character | /characters/{characterId}/file/{fileId} | POST | characterId, fileId | File |
| Delete File from Character | /characters/{characterId}/file/{fileId} | DELETE | characterId, fileId | |

### Representations