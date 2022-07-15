import moment from 'moment';

const DateGroup = ({ date, characters }) => {
    return (
            <tbody>
                <tr>
                    <td className='group-title'>
                        {moment(date).format('dddd, MMMM Do YYYY')}
                    </td>
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