# ITC410

# Proposal

I will create a web app where a user could create/delete characters that have different favored and unfavored attributes. these characters could face up to 5 preset challenges, however, gameification is not required.

# DDD

## Domain Events

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
- Challenge start(optional)
- Challenge pass(optional)
- Challenge fail(optional)
## Domain Commands

- logInUser
- logOutUser
- createUserAccount
- deleteUserAccount
- uploadFile
- deleteFile
- addCharacter
- deleteCharacter
- modifyCharacter(to be used in updating description, name, etc.)
- startChallenge(optional)(I can make this an enpoint that creates a challenge result)
## Entities
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
- Description
## Value Objects
File
- Data
- Character id

Challenge
- Description
- Challenge id
# REST Design
## Endpoints
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
| Start Challenge | /characters/{characterId}/challenge/{challengId} | POST | characterId, challengeId | |

## Representations

### Create Account
```
{
    "username": "username"
    "name": "given name"
    "password": "supersecret"
}
```
### Account Log In
```
{
    "password": "supersecret"
}
```
### Get Characters
```
[
    {
        "characterId": "12",
        "name": "Merlin",
        "race": "Human",
        "description": "Merlin is a wizard who is really smart. However, in his old age he doesn't have any strength",
        "favoredAttribute": "Intelligence",
        "unFavoredAttribute": "Strength"
    },
    {
        "characterId": "34",
        "name": "Po",
        "race": "Panda",
        "description": "Po is a panda who love kun fu. He is a... "healthy" person though at times he is not very bright.",
        "favoredAttribute": "Constitution",
        "unFavoredAttribute": "Intelligence"
    },
    {
        "characterId": "56",
        "name": "Robin",
        "race": "Human",
        "description": "Robin is a ranger who steals from the rich and gives to the poor. He is good with a bow but easily gets himself into bad situations.",
        "favoredAttribute": "Dexterity",
        "unFavoredAttribute": "Wisdom"
    }
]
```
### Set Character
```
{
    "name": "Merlin",
    "race": "Human",
    "description": "Merlin is a wizard who is really smart. However, in his old age he doesn't have any strength",
    "favoredAttribute": "Intelligence",
    "unFavoredAttribute": "Strength"
}
```
### File
```
001011001010110 (this represents the file data)
```