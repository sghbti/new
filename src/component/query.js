import { graphql } from 'react-apollo'
import gql from 'graphql-tag'

const  fetch_query=gql`

query user_pas{
    alluser{
        name,
        password
      }
}
`

const  update_query=gql`
mutation xyz($name:String,$password:String){
    updateAlluser{
      name(name:$name){
        Token
      }
      password(password:$password)
  
    }
  }

`





export default update_query;
// mutation updateAlluser($naam:String,$pass:string){
//     updateuser{
//         name(name:$naam),
//         password(password:$pass)
//       }
// }