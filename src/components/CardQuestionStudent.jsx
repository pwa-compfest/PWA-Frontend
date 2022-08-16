import React,{useState} from 'react'
function QuizStudent(){
    const [answer,setAnswer] = useState()
    const handleOptionChange = (e) => {
        setAnswer(e.target.value)
    }

    return (
        <div>
            <div className='bg-white w-auto h-auto rounded-[24px] shadow-card p-[40px] mb-5'>
                <span className='small-text'> Question 1/90 </span>
                <p className='body mt-5 mb-5'>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. 
                Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur</p>
                <div className='mb-3 body flex justify-start'>
                    <input type="radio" className='mr-3' value="1" onChange={handleOptionChange} checked={answer === '1'} /> Choice 1
                </div>
                <div className='mb-3 body flex justify-start wrong-answer'>
                    <input type="radio" className='mr-3' value="2" onChange={handleOptionChange} checked={answer === '2'} /> Choice 2
                </div>
                <div className='mb-3 body flex justify-start'>
                    <input type="radio" className='mr-3' value="3" onChange={handleOptionChange} checked={answer === '3'} /> Choice 3
                </div>
                <div className='mb-3 body flex justify-start correct-answer'>
                    <input type="radio" className='mr-3' value="4" onChange={handleOptionChange} checked={answer === '4'} /> Choice 4
                </div>
            </div>
        </div>
    )
}
export default QuizStudent