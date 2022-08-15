import React from 'react'
import CardQuestionStudent from '../../components/CardQuestionStudent'

function QuizStudent(){
    return(
        <section className="bg-bright h-auto mt-12">
            <div className='grid md:relative  px-[80px] lg:px-[100px] justify-start mb-12'>
                <h2 className="h2 mb-5">Quiz Name</h2>
                <div className='text-neutral-500 '>
                    <div className='subtitle mb-1'>Course: Calculus IIA</div>
                    <div className='subtitle mb-1'>Total Question: 90</div>
                    <p className='w-[358px] lg:w-[527px] md:w-[527px] body'>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo 
                    ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis 
                    parturient montes, nascetur
                    </p>
                </div>
            </div>
            <div className='grid md:relative  px-[80px] lg:px-[100px] justify-start'>
                <CardQuestionStudent />
            </div>
        </section>
    )
}
export default QuizStudent