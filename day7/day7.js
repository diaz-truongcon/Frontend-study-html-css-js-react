const array = [
    {
        id: 1,
        name: "very",
        img:"https://cdn.pixabay.com/photo/2023/04/11/13/27/bird-7917250_1280.jpg"
    },
    {
        id: 2,
        name: "hot",
        img:"https://photo.znews.vn/w660/Uploaded/wyhktpu/2020_10_01/119699855_632062647492864_4372496523093910298_n.jpg"
    },
    {
        id: 3,
        name: "man",
        img:"https://photo.znews.vn/w660/Uploaded/wyhktpu/2020_10_01/119699855_632062647492864_4372496523093910298_n.jpg"
    },
    {
        id: 4,
        name: "very",
        img:"https://photo.znews.vn/w660/Uploaded/wyhktpu/2020_10_01/119699855_632062647492864_4372496523093910298_n.jpg"
    },
    {
        id: 5,
        name: "hot",
        img:"https://photo.znews.vn/w660/Uploaded/wyhktpu/2020_10_01/119699855_632062647492864_4372496523093910298_n.jpg"
    },
    {
        id: 6,
        name: "man",
        img:"https://photo.znews.vn/w660/Uploaded/wyhktpu/2020_10_01/119699855_632062647492864_4372496523093910298_n.jpg"
    },
    {
        id: 7,
        name: "hot",
        img:"https://photo.znews.vn/w660/Uploaded/wyhktpu/2020_10_01/119699855_632062647492864_4372496523093910298_n.jpg"
    },
    {
        id: 8,
        name: "man",
        img:"https://photo.znews.vn/w660/Uploaded/wyhktpu/2020_10_01/119699855_632062647492864_4372496523093910298_n.jpg"
    },
]
const viet = document.querySelector(".thanh");

array.map((element,index) => {
    const demo = document.createElement("div");
    demo.classList.add("box");
    demo.innerHTML = `
    <img src=${element.img} alt="error">
    <h1> ${element.name} </h1>
    `
    viet.appendChild(demo);
})