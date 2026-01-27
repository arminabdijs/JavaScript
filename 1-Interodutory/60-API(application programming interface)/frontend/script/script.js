let allCourses = []; // ذخیره داده‌ها برای استفاده در popup

async function loadCourses() {
    const res = await fetch("http://localhost:8080/courses");
    const data = await res.json();
    allCourses = data; // ذخیره کل دیتا
    const container = document.getElementById("courses");
    container.innerHTML = "";

    data.forEach(c => {
        const div = document.createElement("div");
        div.className = "course";
        div.innerHTML = `
            <img src="${c.image}" alt="${c.title}">
            <h3>${c.title}</h3>
            <p>${c.description.substring(0, 80)}...</p>
        `;
        div.addEventListener("click", () => showCourse(c.id)); // closure امن
        container.appendChild(div);
    });
}

function showCourse(id) {
    const course = allCourses.find(c => c.id === id);
    if(!course) return alert("Course not found");

    document.getElementById("popupImg").src = course.image;
    document.getElementById("popupImg").alt = course.title;
    document.getElementById("popupTitle").innerText = course.title;
    document.getElementById("popupDesc").innerText = course.description;
    document.getElementById("popupId").innerText = course.id;
    document.getElementById("popup").style.display = "flex";
}

function closePopup() {
    document.getElementById("popup").style.display = "none";
}

loadCourses();
