const DateGroup = ({ date, characters }) => {
    const formattedDate = new Date(date);
    return (
            <tbody>
                <tr className='group-title'>{formattedDate.toDateString()}</tr>
                {characters?.map((character, index) => {
                    const d = new Date(character.created);
                    return (
                        <tr key={index}>
                            <td>{d.getHours()}:{d.getMinutes()}</td>
                            <td><img src={character.image} alt={`${character.name} avatar`} /></td>
                            <td>{character.name}</td>
                            <td>{character.gender}</td>
                            <td>{character.status}</td>
                            <td>{character.location.name}</td>
                        </tr>
                    )
                }
                )}
                <br />
            </tbody>
    );
};

export default DateGroup;