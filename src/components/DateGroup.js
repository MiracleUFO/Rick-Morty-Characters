import moment from 'moment';
import { GroupTitle } from '../styles/Table';

const DateGroup = ({ date, characters }) => {
    return (
            <tbody>
                <tr>
                    <GroupTitle>
                        {moment(date).format('dddd, MMMM Do YYYY')}
                    </GroupTitle>
                </tr>
                {characters?.map((character, index) => (
                    <tr key={index}>
                        <td>{moment(character.created).format('h:mm a')}</td>
                        <td><img src={character.image} alt={`${character.name} avatar`} /></td>
                        <td>{character.name}</td>
                        <td>{character.gender}</td>
                        <td>{character.status}</td>
                        <td>{character.location.name}</td>
                    </tr>
                ))}
            </tbody>
    );
};

export default DateGroup;