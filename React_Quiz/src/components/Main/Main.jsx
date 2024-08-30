import React, { useState } from 'react';
import '../Main/Main.scss';
import iconNrOne from '../../assets/icons/quizIcons/headIcon1.png';
import iconNrTwo from '../../assets/icons/quizIcons/headIcon2.png';
import questionList from '../../data/questionList/questionList'
import ModalWindow from '../modalWindow/modalWindow';

const INITIAL_QUESTION = 0;
const INITIAL_SCORE = 0;

const Main = () => {

	const getRandomQuizQuestions = () => {
		const randomIndex = Math.floor(Math.random() * questionList.length);
		return questionList[randomIndex];
	};

	const [currQuestion, setCurrQuestion] = useState(0); // конкретне питання
	const [score, setScore] = useState(0); // рахунок користувача
	const [showModal, setShowModal] = useState(false); // модальне вікно
	const [quizquestions, setQuizquestions] = useState(getRandomQuizQuestions()); // для генеру рандомного масива питань
	const [initialQuestions, setInitialQuestions] = useState(quizquestions);

	const selectAnswer = (isCorrect) => { // провірка питання на коректність
		isCorrect && setScore(score + 1)
		// if (isCorrect) {
		// 	setScore(score + 1); // якщо правильно рахунок +
		// }

		const nextQuestion = currQuestion + 1;
		if (currQuestion < quizquestions.length - 1) {
			setCurrQuestion(nextQuestion); // генерація питання
		} else {
			setShowModal(true);
		}
	};
	const resetQuiz = (newQuiz = false) => {
		setCurrQuestion(INITIAL_QUESTION);
		setScore(INITIAL_SCORE);
		// setCurrQuestion(0);
		// setScore(0);
		setShowModal(false);
		if (newQuiz) {
			setQuizquestions(getRandomQuizQuestions());
			setInitialQuestions(getRandomQuizQuestions());
		}
		else {
			setQuizquestions(initialQuestions); // Оновити quizquestions до оригінального набору
		}
	};
	const mainContainer = `main__container ${showModal ? 'hidden' : ''} container`;

	return (
		<div className='wrapper'>
			<div className={mainContainer}>
				<div className='question__field'>
					<span className='category'>Категорія: {quizquestions[currQuestion].category}</span>
					<span className='question__number'>Питання номер {currQuestion + 1} з {quizquestions.length}</span>
					<span className='quizIcon'>
						<img className='icons' src={iconNrOne} alt='quiz' />
						<img className='icons' src={iconNrTwo} alt='quiz' />
						<img className='icons' src={iconNrOne} alt='quiz' />
						<img className='icons' src={iconNrTwo} alt='quiz' />
					</span>
					<span className='question'>{quizquestions[currQuestion].question}</span>
				</div>
				<div className='answer__field'>
					<ul>
						{quizquestions[currQuestion].answersValue.map((answerObject, index) => {
							return (
								<li
									className='answer__item'
									key={`answer-${index}`}>
									<button
										onClick={() => selectAnswer(answerObject.isCorrect)}>
										{answerObject.answer}
									</button>
								</li>
							)
						})}
					</ul>
				</div>
			</div>
			{showModal && (
				<ModalWindow
					totalScore={score}
					totalQuestions={quizquestions.length}
					resetQuiz={resetQuiz}
				/>
			)}
		</div>
	);
};

export default Main;

