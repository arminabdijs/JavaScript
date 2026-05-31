let $ = document;

let _id = (id) => $.getElementById(id);
let _createElement = (element) => $.createElement(element);
let _querySelector = (query) => $.querySelector(query);

let list = _id('list');
let pagination = _id('pagination');

let listUser = [{id: 1, name: 'John Smith', age: 20, major: 'Computer Science'}, {
    id: 2, name: 'Emily Johnson', age: 19, major: 'Mathematics'
}, {id: 3, name: 'Michael Brown', age: 21, major: 'Physics'}, {
    id: 4, name: 'Sarah Davis', age: 20, major: 'Chemistry'
}, {id: 5, name: 'David Wilson', age: 22, major: 'Electrical Engineering'}, {
    id: 6, name: 'Lisa Anderson', age: 19, major: 'Biology'
}, {id: 7, name: 'Robert Taylor', age: 21, major: 'Civil Engineering'}, {
    id: 8, name: 'Jennifer Martinez', age: 20, major: 'Literature'
}, {id: 9, name: 'William Garcia', age: 23, major: 'Law'}, {
    id: 10, name: 'Jessica Rodriguez', age: 19, major: 'Medicine'
}, {id: 11, name: 'James White', age: 21, major: 'Economics'}, {
    id: 12, name: 'Amanda Lee', age: 20, major: 'Psychology'
}, {id: 13, name: 'Daniel Clark', age: 22, major: 'Architecture'}, {
    id: 14, name: 'Ashley Lewis', age: 19, major: 'History'
}, {id: 15, name: 'Christopher Harris', age: 21, major: 'Mechanical Engineering'}, {
    id: 16, name: 'Michelle Walker', age: 20, major: 'Art'
}, {id: 17, name: 'Matthew Hall', age: 23, major: 'Business'}, {
    id: 18, name: 'Nicole Young', age: 19, major: 'Sociology'
}, {id: 19, name: 'Andrew King', age: 21, major: 'Philosophy'}, {
    id: 20, name: 'Stephanie Wright', age: 20, major: 'Nursing'
}, {id: 21, name: 'Kevin Lopez', age: 22, major: 'Geology'}, {
    id: 22, name: 'Rachel Hill', age: 19, major: 'Music'
}, {id: 23, name: 'Thomas Scott', age: 21, major: 'Political Science'}, {
    id: 24, name: 'Heather Green', age: 20, major: 'Environmental Science'
}, {id: 25, name: 'Brian Adams', age: 23, major: 'Accounting'}, {
    id: 26, name: 'Megan Baker', age: 19, major: 'Education'
}, {id: 27, name: 'Jason Gonzalez', age: 21, major: 'Sports Science'}, {
    id: 28, name: 'Kimberly Nelson', age: 20, major: 'Linguistics'
}, {id: 29, name: 'Patrick Carter', age: 22, major: 'Statistics'}, {
    id: 30, name: 'Tiffany Mitchell', age: 19, major: 'Anthropology'
}, {id: 31, name: 'Ryan Perez', age: 21, major: 'Aerospace Engineering'}, {
    id: 32, name: 'Lauren Roberts', age: 20, major: 'Theater'
}, {id: 33, name: 'Ethan Turner', age: 23, major: 'Marketing'}, {
    id: 34, name: 'Samantha Phillips', age: 19, major: 'Nutrition'
}, {id: 35, name: 'Jacob Campbell', age: 21, major: 'Data Science'},];

let currentPage = 1;
let rows = 10;

let displayList = (allUsersArray, wrapper, rowsCount, page) => {
    wrapper.innerHTML = '';

    let end = rowsCount * page;
    let start = end - rowsCount;

    let paginatedItems = allUsersArray.slice(start, end);

    paginatedItems.forEach((item) => {
        let itemElement = _createElement('li');

        itemElement.className = 'list__item';

        itemElement.innerHTML = `${item.name} ${item.age} ${item.major}`;

        wrapper.appendChild(itemElement);
    });
};

let setupPagination = (allUsersArray, paginationContainer, rowsCount) => {
    paginationContainer.innerHTML = '';

    let pageCount = Math.ceil(allUsersArray.length / rowsCount);

    for (let i = 1; i <= pageCount; i++) {
        let btn = paginationButtonGenerator(i, allUsersArray);

        paginationContainer.appendChild(btn);
    }
};

let paginationButtonGenerator = (page, allUsersArray) => {
    let button = _createElement('button');
    button.className = 'page-number';
    button.innerHTML = page;

    if (page === currentPage) {
        button.classList.add('page-number--active');
    }

    button.addEventListener('click', () => {
        currentPage = page;
        displayList(allUsersArray, list, rows, currentPage);

        _querySelector('.page-number--active').classList.remove('page-number--active');

        button.classList.add('page-number--active');
    });

    return button;
};

displayList(listUser, list, rows, currentPage);
setupPagination(listUser, pagination, rows);
