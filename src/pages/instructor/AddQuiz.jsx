import React,{useState} from 'react'
function QuizInstructor(){

    const [inputList, setInputList] = useState([{ question: "", answerA: "", answerB: "", answerC: "", answerD: ""}]);
    const handleInputChange = (e, index) => {
        const { name, value } = e.target;
        console.log(name, value);
        const list = [...inputList];
        list[index][name] = value;
        setInputList(list);
    };
    
    const handleRemoveClick = (index) => {
        const list = [...inputList];
        list.splice(index, 1);
        setInputList(list);
    };
    
    const handleAddClick = () => {
    setInputList([...inputList, { question: "",answerB: "", answerC: "", answerD: ""}]);
    };

    return (
        <section className="bg-white md:h-[77.4vh] md:relative sm:px-[100px] px-[30px]">
            <div className="container">
                <h1 className="h2 text-center mb-10">Add Quiz</h1>
                <div className="grid grid-cols-1 justify-center place-items-center">
                    <div className="shadow-card w-[400px] p-[20px] rounded-[24px] mb-12">
                        <div className='mb-4'>
                            <label className="label-form">Course name</label>
                            <input className="text-input" readonly="" />
                        </div>
                        <div className='mb-4'>
                            <label className="label-form">Quiz name</label>
                            <input className="text-input mx-auto " type={"text"}></input>
                        </div>
                        <div className='mb-4'>
                            <label className="label-form">Description</label>
                            <textarea className="text-input mx-auto"></textarea>
                        </div>
                    </div>
                    {inputList.map((x, i) => {
                        return (
                            <div className="shadow-card w-[400px] p-[20px] rounded-[24px] mb-12">
                                <div className="flex justify-end">
                                    <button
                                        className="w-[40px] h-[40px] text-[#E0E1E6]"
                                        onClick={() => handleRemoveClick(i)}
                                    >
                                    <i className="fa-solid fa-trash"></i>
                                    </button>
                                </div>
                                <div className='small-text mb-4'> Question {i+1}</div>
                                <label className="label-form">Question</label>
                                <input
                                className="text-input mb-4"
                                onChange={(e) => handleInputChange(e, i)}
                                name="question"
                                value={x.question}
                                />

                                <label className="label-form">Answer</label>
                                <div className='mb-3 body flex gap-[20px]'>
                                    <input 
                                        className='text-input' 
                                        onChange={(e) => handleInputChange(e, i)}
                                        name="answerA"
                                        value={x.answerA}
                                        placeholder="Answer A"
                                    />
                                </div>
                                <div className='mb-3 body flex gap-[20px]'>
                                    <input 
                                        className='text-input' 
                                        onChange={(e) => handleInputChange(e, i)}
                                        name="answerB"
                                        value={x.answerB}
                                        placeholder="Answer B"
                                    />
                                </div>
                                <div className='mb-3 body flex gap-[20px]'>
                                    <input 
                                        className='text-input' 
                                        onChange={(e) => handleInputChange(e, i)}
                                        name="answerC"
                                        value={x.answerC}
                                        placeholder="Answer C"  
                                    />
                                </div>
                                <div className='mb-3 body flex gap-[20px]'>
                                    <input 
                                        className='text-input' 
                                        onChange={(e) => handleInputChange(e, i)}
                                        name="answerD"
                                        value={x.answerD}
                                        placeholder="Answer D"
                                    />
                                </div>

                                <label className='label-form'>Correct Answer</label>
                                <div className='mb-3 body flex gap-[20px]'>
                                    <select className='text-input' name='correct_answer'>
                                        <option value="A">A</option>
                                        <option value="B">B</option>
                                        <option value="C">C</option>
                                        <option value="D">D</option>
                                    </select>
                                </div>
                            </div>
                        );
                    })}

                    <div className="flex justify-center mt-5">
                        <button className="btn-icon-primary mt-10" onClick={handleAddClick}>
                            <div className='flex justify-center'>
                                <img src="/images/plus.svg" alt="" />
                            </div>
                        </button>
                    </div>

                    <div className="w-[400px] mt-14 flex justify-end">
                        <button className="btn-primary mb-5">SUBMIT</button>
                    </div>

                </div>
            </div>
        </section>
    )
}
export default QuizInstructor