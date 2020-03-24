import React, { useContext, useEffect } from 'react'
import { PlayersContext } from '../contexts/playerContext'

const AddPlayerForm = () => {
    const { players, dispatch } = useContext(PlayersContext)


    useEffect(()=>{
        console.log(players)
    },[players])

    return (
        <div className="AddPlayerForm">
            <form className="col s6 offset-s3 add-form-container" id="add-player" onSubmit={e=>{
                e.preventDefault()
                let arr1 = Array.from(document.getElementsByName("group1"))  
                let arr2 = Array.from(document.getElementsByName("group2"))
                const startingScore = arr1.filter(it=>(it.checked))[0].value
                const doubleOut = arr2.filter(it=>(it.checked))[0].value
                const name = document.getElementById("name").value
                // const password = document.getElementById("password").value

                dispatch({
                    type: "ADD_PLAYER",
                    payload: {
                        // password, 
                        name, 
                        startingScore, 
                        doubleOut
                    }
                })
            }}>
                <h2>Add New Player Form</h2>
                <div className="row cont">
                    <div className="col s8 offset-s2 input-field">
                        <label htmlFor="name">Name :</label>
                        <input id="name" type="text"/>
                    </div>
                </div>
                <div className="row cont">
                    <p className="col s4 offset-s2">Select starting amount:</p>
                    <label className="col s2">
                        <input name="group1" type="radio" value="501" checked />
                        <span>501</span>
                    </label>
                    <label className="col s2">
                        <input name="group1" type="radio" value="301" />
                        <span>301</span>
                    </label>
                </div>
                <div className="row cont">
                    <p className="col s4 offset-s2">Select starting amount</p>
                    <label className="col s2">
                        <input name="group2" type="radio" value="true" checked />
                        <span>Double Out</span>
                    </label>
                    <label className="col s2">
                        <input name="group2" type="radio" value="false" />
                        <span>Single Out</span>
                    </label>
                </div>
                <div className="row">
                    <input className="col s2 btn offset-s5" type="submit" value="add player"/>
                </div>
            </form>      
        </div>
    )
}

export default AddPlayerForm
