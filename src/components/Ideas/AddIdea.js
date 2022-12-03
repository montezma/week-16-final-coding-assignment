import { useState } from 'react';
import Swal from "sweetalert2";

const AddIdea = ({ onSave }) => {
    const [text, setText] = useState('');
    const [day, setDay] = useState('');

    const onSubmit = (e) => {
        e.preventDefault();

        if (!text && !day) {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Make sure to share your idea before hitting save.'
            })
        } else if (!text && day) {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Share your idea first!'
            })
        } else if (text && !day) {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Add the date before submitting!'
            })
        } else {
            onSave({ text, day });
        }

        setText('');
        setDay('');
    }

    return (
        <form className="add-form" onSubmit={onSubmit}>
            <div className="form-control">
                <label>Idea</label>
                <input type="text" placeholder="add idea" value={text} onChange={(e) => setText(e.target.value)} />
            </div>
            <div className="form-control">
                <label>Day & Time</label>
                <input type="text" placeholder="add day & time" value={day} onChange={(e) => setDay(e.target.value)} />
            </div>

            <input type="submit" className="btn btn-block" value="Save Idea" />
        </form>
    )
}

export default AddIdea
