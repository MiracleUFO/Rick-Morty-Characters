const DateGroup = ({ date, characters }) => {
    
    const formatDate = (givenDate) => {
        const formattedDate = new Date(givenDate);
        return formattedDate;
    }

    return (
            <tbody>
                <tr className='group-title'>{formatDate(date).toDateString()}</tr>
                {characters?.map((character, index) => (
                        <tr key={index}>
                            <td>{formatDate(character.created).getHours()}:{formatDate(character.created).getMinutes()}</td>
                            <td><img src={character.image} alt={`${character.name} avatar`} /></td>
                            <td>{character.name}</td>
                            <td>{character.gender}</td>
                            <td>{character.status}</td>
                            <td>{character.location.name}</td>
                        </tr>
                    )
                )}
                <br />
            </tbody>
    );
};

export default DateGroup;