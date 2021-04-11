const faunadb = require('faunadb')

const q = faunadb.query;


var fauna = new faunadb.Client({
    secret: process.env.FAUNADB_SECRET,
    keepAlive: false,
});


exports.handler = async function(event, context) {
    const result = await fauna.query(q.Map(
        q.Paginate(q.Match(q.Index('all_challenges'))),
        q.Lambda(ref => q.Get(ref))
    ))

    const challenges = result.data.map(obj => ({
        $id: obj.ref.id,
        ...obj.data,
    }))

    const body = {challenges};

    return {
        statusCode: 200,
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(body)
    };
}