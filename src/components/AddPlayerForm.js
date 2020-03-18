import React from 'react'

const AddPlayerForm = () => {
    return (
        <div className="add-player-form">
            <form onSubmit={e=>{
                e.preventDefault()
            }}>
                <h2>Add a new player</h2>
                <div className="form-section">
                    <label htmlFor="name">Name:</label><br/>
                    <input type="text" name="name" onChange={()=>{}}/>
                </div>    
                <div className="form-section">
                    <label htmlFor="startingScore">Starting Score:</label><br/>
                    <input type="text" name="StartingScore" onChange={()=>{}}/>
                </div>    
                <div className="form-section">
                    <label htmlFor="doubleOut">Double Out?</label><br/>
                    <input type="text" name="doubleOut" onChange={()=>{}}/>
                </div>    
                <div>
                    <input type="submit" value="add player"/>
                </div>
            </form>      
        </div>
    )
}

export default AddPlayerForm
