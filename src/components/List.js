import '../styles/List.css'
import {members} from '../datas/memberList'


function List(){

    return (
        <div className={'container'}>
            <ul>
                {members.map(function(member){
                    return(
                    <li key={member.id}>{member.name} / {member.pokemon} / level : {member.level}</li>
                    )
                }
                    )}
            </ul>
        </div>

    )
}
export default List