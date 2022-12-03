import './IdeasStyles.css'


// Importing Components
import Header from './Header';
import Idea2 from './Idea2';
import AddIdea from './AddIdea';
// Importing React Hooks
import { useState, useEffect } from 'react';
// Importing Packages
import { v4 as uuidv4 } from 'uuid';
import Swal from "sweetalert2";

function Ideas() {
    // All States
    const [loading, setloading] = useState(true); // Pre-loader before page renders
    const [suggestions, setSuggestion] = useState([]); // Idea State
    const [showAddSuggestion, setShowAddSuggestion] = useState(false); // Expands form after pressing "add"

    // Pre-loader
    useEffect(() => {
        setTimeout(() => {
            setloading(false);
        }, 3500);
    }, [])

    // Fetching from Local Storage
    const getSuggestion = JSON.parse(localStorage.getItem("suggestionAdded"));

    useEffect(() => {
        if (getSuggestion == null) {
            setSuggestion([])
        } else {
            setSuggestion(getSuggestion);
        }
        // eslint-disable-next-line
    }, [])

    // Add Idea
    const addSuggestion = (suggestion) => {
        const id = uuidv4();
        const newSuggestion = { id, ...suggestion }

        setSuggestion([...suggestions, newSuggestion]);

        Swal.fire({
            icon: 'success',
            title: 'Success...',
            text: 'Suggestion Added'
        })

        localStorage.setItem("suggestionAdded", JSON.stringify([...suggestions, newSuggestion]));
    }

    // Delete Idea
    const deleteSuggestion = (id) => {
        const deleteSuggestion = suggestions.filter((suggestion) => suggestion.id !== id);

        setSuggestion(deleteSuggestion);

        Swal.fire({
            icon: 'success',
            title: 'Success...',
            text: 'Suggestion Deleted'
        })

        localStorage.setItem("suggestionAdded", JSON.stringify(deleteSuggestion));
    }

    // Edit Idea
    const editSuggestion = (id) => {

        const text = prompt("Suggestion Name");
        const day = prompt("Day and Time");
        let data = JSON.parse(localStorage.getItem('suggestionAdded'));

        const myData = data.map(x => {
            if (x.id === id) {
                return {
                    ...x,
                    text: text,
                    day: day,
                    id: uuidv4()
                }
            }
            return x;
        })

        Swal.fire({
            icon: 'success',
            title: 'Yay...',
            text: 'Your idea has been updated.'
        })

        localStorage.setItem("suggestionAdded", JSON.stringify(myData));
        window.location.reload();
    }

    return (
        <>
            {
                loading
                    ?
                    <div className="spinnerContainer">
                        <div className="spinner-grow text-primary" role="status">
                            <span className="visually-hidden">Loading...</span>
                        </div>
                        <div className="spinner-grow text-secondary" role="status">
                            <span className="visually-hidden">Loading...</span>
                        </div>
                        <div className="spinner-grow text-success" role="status">
                            <span className="visually-hidden">Loading...</span>
                        </div>
                        <div className="spinner-grow text-danger" role="status">
                            <span className="visually-hidden">Loading...</span>
                        </div>
                        <div className="spinner-grow text-warning" role="status">
                            <span className="visually-hidden">Loading...</span>
                        </div>
                    </div>
                    :
                    
                    <div className="boxfill">
                        {/* App Header that has open and App Name */}
                        <Header showForm={() => setShowAddSuggestion(!showAddSuggestion)} changeTextAndColor={showAddSuggestion} />

                        {/* Revealing of Add  Form */}
                        {showAddSuggestion && <AddIdea onSave={addSuggestion} />}

                        {/* Idea Counter */}
                        <h3>Number of suggested ideas: {suggestions.length}</h3>

                        {/* Displaying of Ideas */}
                        {
                            suggestions.length > 0
                                ?
                                (<Idea2 suggestions={suggestions} onDelete={deleteSuggestion} onEdit={editSuggestion} />)
                                :
                                ('No Ideas Yet')
                        }
                        </div>
                    
            }
        </>
    )
}

export default Ideas;