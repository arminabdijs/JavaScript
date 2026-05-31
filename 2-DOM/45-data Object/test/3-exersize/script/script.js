const DOC = document;

const _querySelector = (q) => DOC.querySelector(q);
const _createElement = (e) => DOC.createElement(e);


const inputGenerator = _querySelector('#input__generator');
const btnGenerator = _querySelector('#btn__generator');
const contentParagraph = _querySelector('.content__paragraph');


let paragraphArray = ['Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem reprehenderit facilis sint nostrum quae quia ad dolorum voluptatibus, itaque repellat cupiditate aspernatur distinctio explicabo tenetur sapiente perspiciatis earum culpa quaerat.', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit dolorem, repellat repudiandae soluta nisi ex quod assumenda obcaecati consectetur doloremque voluptates, illum quasi fuga, eos odio. Eveniet error sequi voluptatem?', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta, veniam commodi necessitatibus aut pariatur magnam illo quae maiores repellat delectus nesciunt voluptatibus nemo facilis provident inventore quibusdam incidunt expedita. Illo.', 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maxime, asperiores optio? Est ab, nostrum at accusamus nulla nisi sapiente dicta provident commodi quod praesentium alias consequuntur enim tempore possimus quia.', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis reiciendis nihil exercitationem cupiditate cumque dicta ipsam eius inventore, explicabo fuga aut sed blanditiis voluptas nostrum mollitia ad ipsum libero consequatur.', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil iure soluta, et facere ut quibusdam nemo, exercitationem dolore quasi hic vel eaque, molestias laudantium? Nostrum libero tempore sed ducimus impedit.', 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Esse necessitatibus incidunt doloremque hic voluptates sit perspiciatis officia, doloribus ab omnis, voluptatem molestiae ut, natus repellendus voluptatum impedit? Vero, enim magni?', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit hic magni adipisci nemo inventore voluptatem, officia quam perferendis non amet alias repellendus recusandae placeat quidem. Est a repudiandae itaque nobis.', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo dolorum molestiae ab eum libero repellendus molestias! Veniam, mollitia! Corrupti laboriosam voluptates id, quo harum temporibus nemo reprehenderit sapiente saepe aperiam!', 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolores maxime a totam adipisci maiores, reiciendis placeat est nesciunt? Distinctio expedita incidunt nostrum aliquam qui culpa quidem animi reiciendis eveniet quibusdam.', 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nobis id non repudiandae ab velit officia blanditiis quidem cumque possimus, modi enim soluta ratione libero, quibusdam deserunt, ea animi deleniti ut?']


btnGenerator.addEventListener('click', (event) => {
    event.preventDefault()

    const inputValue = inputGenerator.value
    let randomParagraph = Math.floor(Math.random() * paragraphArray.length)


    if (inputValue <= 0 || inputValue > 11 || inputValue === '' || isNaN(inputValue)) {
        contentParagraph.innerHTML = paragraphArray[randomParagraph]
    } else {
        let slicedArray = paragraphArray.slice(0, inputValue)

        let finalTextArray = slicedArray.map((item) => {
            return `<p class="paragraph">${item}</p>`
        }).join('')

        contentParagraph.innerHTML = finalTextArray
    }


})