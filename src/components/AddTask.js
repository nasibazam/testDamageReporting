import { useState } from 'react';

const AddTask = ({onAdd}) => {
    const [text, setText] = useState('')
    const [day, setDay] = useState('')
    const [reminder, setReminder] = useState(false)

    const onSubmit = (e) => {
        e.preventDefault()
        if(!text) {
            alert('Please add a task')
            return
        }

        onAdd({text, day, reminder})
        setText('')
        setDay('')
        setReminder(false)
    }
  return (
    <form className='add-form' onSubmit={onSubmit}>

         <div className='form-control'>
            <label>Description of Inciddent</label>
            <input 
            type='text' 
            placeholder='Add Description'
            value={text}
            onChange={(e) => setText(e.target.value)}
            />
        </div>

        <div className='form-control '>
            <label>Submitted by</label>
            <input 
            type='text' 
            placeholder='Add your name and unit no.'
            value={day}
            onChange={(e) => setDay(e.target.value)}
            />
        </div>

        <div className='form-control form-control-check'>
            <label>Tick the box to notify building manager</label>
            <input type='checkbox'
            checked={reminder}
            value={reminder}
            onChange={(e) => setReminder(e.currentTarget.checked)}
            />
        </div>

        <input type='submit' value='Submit your application' className='btn btn-block'/>
    </form>
  );
}

export default AddTask;
