const uuid = require('uuid').v4

exports.createCharacter = async function (client, accountId, data) {
    const characterId = uuid()
    const { name, race, description, favoredAttribute, unfavoredAttribute } = data
    const { rowCount } = await client.query({
        name: 'create-character',
        text: 'INSERT INTO characters (character_id, account_id, name, race, description, favoredattribute, unfavoredattribute) VALUES ($1, $2, $3, $4, $5, $6, $7) ON CONFLICT DO NOTHING',
        values: [
            characterId,
            accountId,
            name,
            race,
            description,
            favoredAttribute,
            unfavoredAttribute	
        ]
    })
    return rowCount > 0 ? characterId : undefined
}

exports.getCharacters = async function (client, accountId) {
    
}

