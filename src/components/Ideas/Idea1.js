import { FaPencilAlt, FaTimes } from 'react-icons/fa';


const Idea = ({ suggestion, onDelete, onEdit }) => {
    return (
        <div>
            <div className="suggestion">
                <div>
                    <p className="suggestionName">
                        <span className="textBold">Idea Name:</span> {suggestion.text}
                    </p>
                    <p className="suggestionDate"><span className="textBold">Date Submitted:</span> {suggestion.day}</p>
                </div>
                <div>
                    <p><FaTimes onClick={() => onDelete(suggestion.id)} className="delIcon" /></p>
                    <p><FaPencilAlt onClick={() => onEdit(suggestion.id)} className="editIcon" /></p>
                </div>
            </div>
        </div>
    )
}

export default Idea
