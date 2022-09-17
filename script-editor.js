const elements = document.querySelectorAll('.btn');
elements.forEach(element =>{
    element.addEventListener('click',() =>{
        let command = element.dataset['element'];

        if(command =='createLink'|| command == 'insertImage'){
            let url = prompt('Enter the link here:','http://')
            document.execCommand(command,false,url);
        }
        else{
        document.execCommand(command, false,null);
        }
    });
});	                	

gsap.registerPlugin(ScrollTrigger);

gsap.to(".navbar", {
  scrollTrigger: {
    trigger: ".two",
    endTrigger: ".one",
    scrub: true,
    toggleActions: "restart none none none",
    start: "bottom bottom"
  },
  snap: 0,
  backgroundColor: "black"
});
