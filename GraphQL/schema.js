// const graphql = require('graphql');
// const {
//     GraphQLObjectType,
//     GraphQLSchema,
//     GraphQLInt,
//     GraphQLString,
//     GraphQLList
// } = graphql;

// const userType = new GraphQLObjectType({
//     name:'User',
//     fields:()=>({
//         id:{type:GraphQLInt},
//         name:{type:GraphQLString},
//         email:{type:GraphQLString},
//         phone:{type:GraphQLString}
//     })
// });

// const RootQuery = new GraphQLObjectType({
//     name:'xyz',
//     fields:{
//         codeimprove:{
//             type: new GraphQLList(userType),
//             resolve(parent,args){
//                 let data = [{
//                     id:11, name:"codeimprove",email:"codeimprove@gmail.com",phone:8888899999},
//                     {id:22, name:"demo", email:"demo@gmail.com", phone:6565656565}]
//                     return data;
//             } 
//         },
//         userList:{
//             type: new GraphQLList(userType),
//             resolve(parent,args){
//                 let data = [{
//                     id:33, name:"userList",email:"userList@gmail.com",phone:8888899999},
//                     {id:44, name:"demo1", email:"demo1@gmail.com", phone:6565656565}]
//                     return data;
//             }  
//         }
//     }
// });

// module.exports = new GraphQLSchema({ query: RootQuery});