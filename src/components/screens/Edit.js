import React, { Component } from 'react'

class Edit extends Component {
    render() {
        return (
            <div>
                <h1>Edit Memorial</h1>
                <div>
                    <h2>עברית</h2>
                    <select>
                        <option key="health_heb">לרפואת</option>
                        <option key="memorial_heb">לזכר</option>
                    </select>
                    <input type="text" name="שם" placeholder="שם" />
                </div>
                <div>
                    <h2>English</h2>
                    <select>
                        <option key="health_eng">Health</option>
                        <option key="memorial_eng">Memorial</option>
                    </select>
                    <input type="text" name="name" placeholder="Name" />
                </div>
                <button>Send</button>
            </div>
        )
    }
}

export default Edit
