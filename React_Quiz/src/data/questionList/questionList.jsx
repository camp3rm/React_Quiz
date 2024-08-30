const questionList = [
	[
		// {
		// 	category: "HTML/CSS",
		// 	questions: [{}]
		// },
		{
			category: 'HTML/CSS',
			// id:
			question: 'Який атрибут використовується для визначення унікального ідентифікатора елемента в HTML?',
			answersValue: [
				{ answer: 'class', isCorrect: false },
				{ answer: 'name', isCorrect: false },
				{ answer: 'id', isCorrect: true },
				{ answer: 'data-id', isCorrect: false },
			],
		},
		{
			category: 'HTML/CSS',
			question: 'Яка CSS властивість використовується для управління простором між рядками тексту?',
			answersValue: [
				{ answer: 'line-height', isCorrect: true },
				{ answer: 'letter-spacing', isCorrect: false },
				{ answer: 'word-spacing', isCorrect: false },
				{ answer: 'text-spacing', isCorrect: false },
			],
		},
		{
			category: 'HTML/CSS',
			question: 'Яка властивість CSS використовується для застосування шрифту до елемента?',
			answersValue: [
				{ answer: 'font-size', isCorrect: false },
				{ answer: 'font-weight', isCorrect: false },
				{ answer: 'font-family', isCorrect: true },
				{ answer: 'font-style', isCorrect: false },
			],
		},
		{
			category: 'HTML/CSS',
			question: 'Що таке "псевдоклас" в CSS і як його використовувати?',
			answersValue: [
				{ answer: 'Селектор для елемента на основі його ідентифікатора', isCorrect: false },
				{ answer: 'Селектор для елемента в специфічному стані', isCorrect: true },
				{ answer: 'Селектор для елемента на основі його типу', isCorrect: false },
				{ answer: 'Селектор для елемента на основі його класу', isCorrect: false },
			],
		},
		{
			category: 'HTML/CSS',
			question: 'Яка CSS властивість використовується для центрування тексту?',
			answersValue: [
				{ answer: 'justifu-content', isCorrect: false },
				{ answer: 'align-items', isCorrect: false },
				{ answer: 'center', isCorrect: false },
				{ answer: 'text-align', isCorrect: true },
			],
		},
		{
			category: 'HTML/CSS',
			question: 'Яка властивість CSS використовується для зміни порядку накладання елементів?',
			answersValue: [
				{ answer: 'order', isCorrect: false },
				{ answer: 'z-index', isCorrect: true },
				{ answer: 'position', isCorrect: false },
				{ answer: 'layer', isCorrect: false },
			],
		},
		{
			category: 'HTML/CSS',
			question: 'Що таке "схлопування" полів у CSS?',
			answersValue: [
				{ answer: 'Коли два або більше сусідніх елементів мають однакові поля', isCorrect: false },
				{ answer: 'оли поля елемента стають нульовими', isCorrect: false },
				{ answer: 'Коли бокові поля елементів зливаються з боковими полями сусіднього елемента', isCorrect: false },
				{ answer: 'Коли верхнє або нижнє поле одного елемента зливається з полями сусіднього(нижнього/верхнього) елемента', isCorrect: true },
			],
		},
		{
			category: 'HTML/CSS',
			question: 'Який тег використовується для створення абзацу?',
			answersValue: [
				{ answer: '<div>', isCorrect: false },
				{ answer: '<span>', isCorrect: false },
				{ answer: '<article>', isCorrect: false },
				{ answer: '<p>', isCorrect: true },
			],
		},
		{
			category: 'HTML/CSS',
			question: 'Який з нижче вказаних методів завантаження CSS є найефективнішим для продуктивності веб-сторінки?',
			answersValue: [
				{ answer: 'Включення CSS безпосередньо в HTML-файл', isCorrect: false },
				{ answer: 'Завантаження зовнішнього CSS-файлу через тег <link> в <head> секції ', isCorrect: true },
				{ answer: 'Використання інлайн стилів', isCorrect: false },
				{ answer: 'Включення CSS через JavaScript', isCorrect: false },
			],
		},
		{
			category: 'HTML/CSS',
			question: 'Який тег HTML використовується для створення гіперпосилання?',
			answersValue: [
				{ answer: '<a>', isCorrect: true },
				{ answer: '<link>', isCorrect: false },
				{ answer: '<href>', isCorrect: false },
				{ answer: '<nav>', isCorrect: false },
			],
		},
		{
			category: 'HTML/CSS',
			question: 'Який стиль відповідає за прозорість?',
			answersValue: [
				{ answer: 'z-index', isCorrect: false },
				{ answer: 'opacity', isCorrect: true },
				{ answer: 'shadow', isCorrect: false },
				{ answer: 'rgba', isCorrect: false },
			],
		},
		{
			category: 'HTML/CSS',
			question: `За допомогою яких стилів Flexbox можна розцентрувати об'єкт поперечної осі?`,
			answersValue: [
				{ answer: 'align-item', isCorrect: false },
				{ answer: 'align-self', isCorrect: false },
				{ answer: 'text=-align', isCorrect: false },
				{ answer: 'justify-content', isCorrect: true },
			],
		},
		{
			category: 'HTML/CSS',
			question: 'Яку максимальну одночасну кількість значень може мати властивість border-radius?',
			answersValue: [
				{ answer: '1', isCorrect: false },
				{ answer: '2', isCorrect: false },
				{ answer: '4', isCorrect: true },
				{ answer: '6', isCorrect: false },
			],
		},
		{
			category: 'HTML/CSS',
			question: 'Яке із значень властивостей display робить HTML-елемент блоковим?',
			answersValue: [
				{ answer: 'inline-block', isCorrect: false },
				{ answer: 'inline', isCorrect: false },
				{ answer: 'flex', isCorrect: false },
				{ answer: 'block', isCorrect: true },
			],
		},
		{
			category: 'HTML/CSS',
			question: 'Які із CSS-селекторів є селекторами за атрибутом id HTML-елемента?',
			answersValue: [
				{ answer: '<div>', isCorrect: false },
				{ answer: '#div', isCorrect: true },
				{ answer: '.div', isCorrect: false },
				{ answer: 'div', isCorrect: false },
			],
		},
	],

	[
		{
			category: 'JavaScript',
			question: 'Які оператори порівняння в JavaScript?',
			answersValue: [
				{ answer: '`=`, `==`, `!=`, `!==`', isCorrect: false },
				{ answer: '`==`, `===`, `!=`, `!==`', isCorrect: true },
				{ answer: '`=`, `<=`, `==`, `!==`', isCorrect: false },
				{ answer: '`=`, `<=`, `=>`, `!==`', isCorrect: false },
			],
		},
		{
			category: 'JavaScript',
			question: 'Що таке замикання (closure) в JavaScript?',
			answersValue: [
				{ answer: `Властивість об'єкта`, isCorrect: false },
				{ answer: 'Тип даних', isCorrect: false },
				{ answer: 'Функція, яка зберігає посилання на зовнішні змінні, що використовуються в цій функції', isCorrect: true },
				{ answer: 'Спосіб зберігання даних в локальному сховищі', isCorrect: false },
			],
		},
		{
			category: 'JavaScript',
			question: `Як перевірити, чи об'єкт є масивом в JavaScript?`,
			answersValue: [
				{ answer: 'object.isArray(myObject)', isCorrect: false },
				{ answer: 'Array.isArray(myObject)', isCorrect: true },
				{ answer: 'myObject.isArray()', isCorrect: false },
				{ answer: 'myObject.isInstanceOf(Array)', isCorrect: false },
			],
		},
		{
			category: 'JavaScript',
			question: 'Які механізми в JavaScript використовуються для управління асинхронністю?',
			answersValue: [
				{ answer: 'Проміси (Promises)', isCorrect: false },
				{ answer: 'Асинхронні функції (async/await)', isCorrect: false },
				{ answer: 'Усі перелічені відповіді', isCorrect: true },
				{ answer: 'Callback-функції', isCorrect: false },
			],
		},
		{
			category: 'JavaScript',
			question: `Яким чином можна клонувати об'єкт в JavaScript?`,
			answersValue: [
				{ answer: 'let clone = Object.clone(myObject)', isCorrect: false },
				{ answer: 'let clone = Object.assign({}, myObject)', isCorrect: true },
				{ answer: 'let clone = myObject.clone()', isCorrect: false },
				{ answer: 'let clone = myObject.copy()', isCorrect: false },
			],
		},
		{
			category: 'JavaScript',
			question: 'Що таке hoisting в контексті JavaScript?',
			answersValue: [
				{ answer: 'Механізм збору сміття', isCorrect: false },
				{ answer: 'Алгоритм сортування', isCorrect: false },
				{ answer: `Властивість об'єкта, яка дозволяє отримати доступ до змінних і функцій навіть після закінчення їх області видимості`, isCorrect: false },
				{ answer: 'Процес переміщення всіх оголошень змінних і функцій на верхній рівень їх області видимості перед виконанням коду', isCorrect: true },
			],
		},
		{
			category: 'JavaScript',
			question: 'Які основні різниці між function declaration і function expression в JavaScript?',
			answersValue: [
				{ answer: 'function declaration обмежена областю видимості блоку, а function expression - областю видимості функції', isCorrect: false },
				{ answer: 'function declaration може бути викликана до свого оголошення, а function expression - ні', isCorrect: true },
				{ answer: 'function declaration може містити параметри, а function expression - ні', isCorrect: false },
				{ answer: 'Вони є ідентичними з точки зору виконання', isCorrect: false },
			],
		},
		{
			category: 'JavaScript',
			question: 'Що таке lexical scope (лексична область видимості) в JavaScript?',
			answersValue: [
				{ answer: 'Механізм, що визначає доступність змінних на основі їх місця оголошення у вкладених функціях', isCorrect: true },
				{ answer: `Спосіб організації вкладених блоків коду`, isCorrect: false },
				{ answer: 'Функція, яка доступна лише всередині однієї функції', isCorrect: false },
				{ answer: 'Механізм, що дозволяє використовувати глобальні змінні всюди', isCorrect: false },
			],
		},
		{
			category: 'JavaScript',
			question: 'Як працює оператор `===` в JavaScript і в чому його відмінність від `==`?',
			answersValue: [
				{ answer: `Оператор === і == ідентичні за своїм функціоналом`, isCorrect: false },
				{ answer: 'Оператор === перевіряє значення і тип даних, тоді як == перевіряє тільки значення', isCorrect: true },
				{ answer: `Оператор === використовується лише для порівняння об'єктів`, isCorrect: false },
				{ answer: 'Оператор === не використовується в JavaScript', isCorrect: false },
			],
		},
		{
			category: 'JavaScript',
			question: `Що таке об'єктно-орієнтоване програмування (ООП) і як його реалізувати в JavaScript?`,
			answersValue: [
				{ answer: `ООП - це можливість створювати об'єкти з нуля`, isCorrect: false },
				{ answer: 'ООП - це тільки використання класів у програмуванні', isCorrect: false },
				{ answer: `ООП - це методологія програмування, яка базується на об'єктах, що мають властивості та методи`, isCorrect: true },
				{ answer: `ООП - це використання зовнішніх бібліотек для створення об'єктів`, isCorrect: false },
			],
		},
	],


	[
		{
			category: 'React',
			question: 'Що таке JSX в React і чому він використовується?',
			answersValue: [
				{ answer: 'JSX - це спеціальний синтаксис, що дозволяє писати HTML-подібні елементи в JavaScript', isCorrect: true },
				{ answer: 'JSX - це мова програмування, подібна до HTML, для створення структури React-компонент', isCorrect: false },
				{ answer: 'JSX - це фреймворк для створення анімацій в React', isCorrect: false },
				{ answer: 'JSX - це альтернативний синтаксис для виклику функцій в JavaScript', isCorrect: false },
			],
		},
		{
			category: 'React',
			question: 'Які основні принципи віртуального DOM в React?',
			answersValue: [
				{ answer: 'Віртуальний DOM - це інструмент для створення анімацій в React', isCorrect: false },
				{ answer: 'Віртуальний DOM - це альтернатива HTML', isCorrect: false },
				{ answer: ' Віртуальний DOM - це технологія, що дозволяє React відслідковувати зміни у реальному DOM', isCorrect: true },
				{ answer: 'Віртуальний DOM - це сховище для зберігання стилів і JavaScript-файлів', isCorrect: false },
			],
		},
		{
			category: 'React',
			question: 'Що таке стан (state) в React і як його змінювати?',
			answersValue: [
				{ answer: 'Стан (state) - це метод, що використовується для визначення стилю компоненту', isCorrect: false },
				{ answer: 'Стан (state) - це значення, що надходить з сервера', isCorrect: false },
				{ answer: 'Стан (state) - це масив, який зберігає всі властивості компоненту', isCorrect: false },
				{ answer: 'Стан (state) - це дані, що управляються в React компонентах; його можна змінювати за допомогою методу setState', isCorrect: true },
			],
		},
		{
			category: 'React',
			question: 'Які основні різниці між функціональними компонентами та класовими компонентами в React?',
			answersValue: [
				{ answer: 'Функціональні компоненти - це компоненти зі стрілковими функціями, класові - звичайні функції', isCorrect: false },
				{ answer: 'Функціональні компоненти не мають стану, класові можуть мати власний стан', isCorrect: false },
				{ answer: 'Функціональні компоненти - це функції, що приймають пропси і повертають JSX, класові - це класи з методами', isCorrect: true },
				{ answer: 'Функціональні компоненти не можуть викликати методи життєвого циклу, класові - можуть', isCorrect: true }
			],
		},
		{
			category: 'React',
			question: 'Що таке хуки (hooks) в React і які є основні правила їх використання?',
			answersValue: [
				{ answer: 'Хуки - це спеціальні функції, що додають додатковий функціонал до класових компонент', isCorrect: false },
				{ answer: 'Хуки - це новий спосіб написання компонент, що дозволяє використовувати стан та інші можливості React без класів', isCorrect: true },
				{ answer: 'Хуки - це заміна пропсам у функціональних компонентах', isCorrect: false },
				{ answer: `Хуки - це обов'язковий компонент для використання разом з контекстом`, isCorrect: false },
			],
		},
		{
			category: 'React',
			question: 'Що таке memoization і як воно застосовується в React?',
			answersValue: [
				{ answer: 'Memoization - це метод збереження стилів компонент для пізнішого використання', isCorrect: false },
				{ answer: 'Memoization - це новий тип стану, який запроваджено з введенням хуків в React', isCorrect: false },
				{ answer: 'Memoization - це альтернативний підхід до рендерингу компонент в React', isCorrect: false },
				{ answer: 'Memoization - це техніка оптимізації, що полягає в збереженні результатів викликів функцій для пізнішого використання', isCorrect: true },
			],
		},

	],
]

export default questionList