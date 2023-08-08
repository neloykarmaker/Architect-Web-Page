const menuBarIcon = document.querySelector(".mobileMenuBar");
const subMenuIcon = document.querySelectorAll(".dropdown");

subMenuIcon.forEach(function(node){

    node.querySelector("a").innerHTML += "<i class='fas fa-chevron-down'></i>";

    node.addEventListener("click", function (myEvent) {

        this.querySelector(".subMenu").classList.toggle("SubMenuShow");
        myEvent.stopPropagation();

        

    })

})

menuBarIcon.addEventListener("click", () => {

    document.querySelector(".menu").classList.toggle("MenuShow");
})


const sBOXactive = document.querySelector(".sboxwrapper");
const sBoxDactive = document.querySelectorAll(".singlebox");

sBoxDactive.forEach(function (el) {
    el.addEventListener('click', function () {
        document.querySelector('.sboxactive').classList.remove('sboxactive')
        el.classList.add('sboxactive');
    })
});

let count = document.querySelectorAll('.singleIcons h2');

count.forEach(e =>{
    let datatargetLength = e.getAttribute('data-target');
    let index = 0;
    setInterval(() => {
        if (index < datatargetLength) {
            ++index;
            e.innerHTML = index;
        }
    }, 1000);
})




