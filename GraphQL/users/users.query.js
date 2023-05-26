let { pool } = require('../config/db.config');
const { GraphQLObjectType, GraphQLID } = require('graphql');
const { UserType, ProjectType } = require('../users/users.types');


const RootQuery = new GraphQLObjectType({
    name: 'RootQueryType',
    type: 'Query',
    fields: () => ({
        user: {
            type: UserType,
            args: { id: { type: GraphQLID } },
            resolve(parentValue, args) {
                const sqlQuery = `SELECT * FROM users WHERE id=$1`;
                const values = [args.id];

                return pool.query(sqlQuery, values)
                    .then(res => res.rows[0])
                    .catch(err => err);
            }
        },
        project: {
            type: ProjectType,
            args: { id: { type: GraphQLID } },
            resolve(parentValue, args) {
                const sqlQuery = `SELECT * FROM project WHERE id=$1`;
                const values = [args.id];

                return pool.query(sqlQuery, values)
                .then(res => res.rows[0])
                .catch(err => err);
            }
        }
    })
});

exports.query = RootQuery;