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
    const {rows} = await client.query({
        name: 'get-characters',
        text: 'SELECT * FROM characters WHERE account_id = $1',
        values: [accountId]
    })
    return rows
}

exports.deleteCharacter = async function (client, characterId) {
    console.log(characterId)
    const { rowCount } = await client.query({
        name: 'delete-character',
        text: 'DELETE FROM characters WHERE character_id=$1',
        values: [characterId]
    })
    return rowCount > 0
}

exports.updatedCharacter = async function (client, characterId, data) {
    const { name, race, description, favoredAttribute, unfavoredAttribute } = data
    const values = []
    const sets = []

    if (name !== undefined) {
        values.push(name)
        sets.push('name=$' + values.length)
    }

    if (race !== undefined) {
        values.push(race)
        sets.push('race=$' + values.length)
    }

    if (description !== undefined) {
        values.push(description)
        sets.push('description=$' + values.length)
    }

    if (favoredAttribute !== undefined) {
        values.push(favoredAttribute)
        sets.push('favoredattribute=$' + values.length)
    }

    if (unfavoredAttribute !== undefined) {
        values.push(unfavoredAttribute)
        sets.push('unfavoredattribute=$' + values.length)
    }

    // if no properties were passed in then there is nothing to update
    if (values.length === 0) return

    values.push(characterId)
    const { rows } = await client.query({
        name: 'update-character',
        text: 'UPDATE characters SET ' + sets.join(', ') + ' WHERE character_id=$' + (values.length) + ' RETURNING *',
        values
    })
    return rows[0]
}

