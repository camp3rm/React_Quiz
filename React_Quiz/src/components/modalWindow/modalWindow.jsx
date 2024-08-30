import { React } from 'react';
import '../modalWindow/modalWindow.scss';

const ModalWindow = ({ totalScore, totalQuestions, resetQuiz }) => {

	return (
		<div className={`modal modal--open`}>
			<span className='score'>Ви набрали {totalScore} правильних відповідей з {totalQuestions}</span>
			<span className='current__quiz'>Чи хочете ви пройти вікторину ще раз?</span>
			<button onClick={() => resetQuiz(false)}>Так</button>
			<span className='next__quiz'>Можливо хочете ви пройти нову вікторину?</span>
			<button onClick={() => resetQuiz(true)}>
				Так
			</button>
		</div>
	);
};

export default ModalWindow;

