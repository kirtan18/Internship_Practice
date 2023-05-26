const graphql = require('graphql');
const { GraphQLObjectType, GraphQLID, GraphQLString, GraphQLBoolean } = graphql;
const { ProjectType } = require('./users.types');
let { pool } = require('../config/db.config');

const RootMutation = new GraphQLObjectType({
    name: "RootMutationType",
    type: "Mutation",
    fields: {
        addProject: {
            type: ProjectType,
            args: {
                creatorId: { type: GraphQLID },
                title: { type: GraphQLString },
                description: { type: GraphQLString }
            },
            resolve(parentValue, args){
                const sqlQuery = `INSERT INTO project(creator_id, created, title, description) VALUES($1, $2, $3, $4) RETURNING *`;
                const values = [
                    args.creatorId,
                    new Date(),
                    args.title,
                    args.description
                ];

                return pool.query(sqlQuery, values)
                .then(res => res.rows[0])
                .catch(err => err);
            }
        }
    }
})

exports.mutation = RootMutation;