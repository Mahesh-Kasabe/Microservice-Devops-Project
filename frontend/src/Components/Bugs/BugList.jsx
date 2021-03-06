import React, { useEffect, useState } from 'react'
import "./bugs.css"
import Modal from '../Modal/Modal';
import axios from 'axios';

const BugList = ({ id,buginfo }) => {
    const [state, Setstate] = useState(false)

    const deletebug = (id) => {
        axios.delete(`http://localhost:9191/bugs/${id}`).then((response) => {
            console.log(response)
        })
    }

    return (
        <div className='buglist'>
            {
                state && (
                    <Modal Setstate={Setstate} id={id} />
                )
            }
            <div className='addbug'>
                <h1>BugList</h1>
                <button onClick={() => { Setstate(true) }}> + Add Bug </button>
            </div>

            <div className='list'>

                <table>
                    <tr id='one'>
                        <th>Name</th>
                        <th>Priority</th>
                        <th>Status</th>
                        <th>Updated At</th>
                        <th>Actions</th>
                    </tr>
                    {
                        buginfo.map((bug) => {
                            return (
                                <>
                                    <tr key={bug.bugid}>
                                        <td> {bug.name} </td>
                                        <td> <button id='pr'> {bug.priority} </button> </td>
                                        <td> <button id='st'> {bug.status} </button> </td>
                                        <td> {bug.updated_At.substring(0, 10)} </td>
                                        <td><button onClick={() => { deletebug(bug.bugid) }}>X</button> </td>
                                    </tr>

                                </>
                            )
                        })
                    }

                </table>
            </div>

        </div>
    )
}

export default BugList