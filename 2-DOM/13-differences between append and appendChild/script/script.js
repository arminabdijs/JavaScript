let $ = document;

const buttonClick = $.getElementById("button__click")
const ulElem = $.querySelector('ul')

buttonClick.addEventListener("click", () => {

    let newLiTag = $.createElement('li')

    newLiTag.innerHTML = 'Products';


    let secondLiElem = $.createElement('li')

    secondLiElem.innerHTML = 'Users';

    /*
    ulElem.append(newLiTag)
    ulElem.appendChild(newLiTag)
    */

    /*
    ulElem.append('Products') // این میاد یک متن که یک المنت نیست رو اضافه میکنه

    ulElem.appendChild('Products') // این نمی تونه یکمتن که یک المنت نیست رو اضافه کنه ارور میدهد
    */


    /*
    ulElem.append(newLiTag,secondLiElem) // این میتواند هر چند تا ورودی که بخواد میتونه دریافت کنه

    ulElem.appendChild(newLiTag,secondLiElem) // اما این فقط میتونه یک وردی دریافت کنه و اگر بیشتر ارسال کنی فقط اولی رو اضافه میکنه
    */


    /*
    let appendResult = ulElem.append(newLiTag) // در append نمی تونیم نتیجه رو داخلی یک متغیر ذخییره کنیم و اگر این کار رو بکنیم مقدار undefined میدهد

    console.log(appendResult)


    let appendChildResult = ulElem.appendChild(newLiTag) //در appendChild نمی تونیم نتیجه رو داخلی یک متغیر ذخییره کنیم

    console.log(appendChildResult)
    */


})