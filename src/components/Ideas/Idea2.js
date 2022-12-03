import Idea1 from './Idea1';


const Idea = ({ suggestions, onDelete, onEdit }) => {
    return (
        <>
            {suggestions.map((suggestion) => (<Idea1 key={suggestion.id} suggestion={suggestion} onDelete={onDelete} onEdit={onEdit} />))}
        </>
    )
}

export default Idea;
