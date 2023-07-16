
const boxImage = gsap.utils.toArray(".boxImage");
const boxes = gsap.utils.toArray(".box");
const gallery = document.querySelector(".gallery");
const filledBox = document.querySelector(".filledBox");

gsap.registerPlugin(Flip);

boxes.forEach((box)=>{
    
    
    box.addEventListener("click",()=>{

        console.log()
        function imageBig(){
            let state = Flip.getState(".boxImage");
            // let state2 = Flip.getState(".child");
            
            if(box.parentElement === gallery){
                filledBox.appendChild(box.children[0]);
                
            }
            
            boxes.forEach((emptyBox)=>{
                if(!emptyBox.children[0]){
                    emptyBox.appendChild(filledBox.children[0]);
                    // filledBox.appendChild(box.children[0]);
                    
                }
                // Flip.from(state2, {duration: .5, ease: "power1.inOut"});
            })
            // if(box.parentElement === filledBox){
            // }
            
            // console.log(box.parentElement === gallery)
            // if(box.parentElement === gallery){
            //     filledBox.appendChild(box);
            // } 
            // if(box.parentElement === filledBox){
            //     // filledBox.children[0]
            //     gallery.insertBefore( filledBox.children[0], box.nextElementSibling);
                
            // }
            // if(!filledBox.children[0]){
            //     filledBox.appendChild(box);

            // }
            // console.log()
            Flip.from(state, {duration: 1,scale: true});

        }
        
        imageBig();
    })
})
// filledBox.children[0].removeEventListener("click",()=>{
//     filledBox.children[0].appendChild(filledBox.children[0]);
// });

// filledBox.addEventListener("click",()=>{
//     let state = Flip.getState(".child");
    
//     boxes.forEach((emptyBox)=>{
//         if(!emptyBox.children[0]){
//             emptyBox.appendChild(filledBox.children[0]);
//         }
//         // Flip.from(state2, {duration: .5, ease: "power1.inOut"});
//     })
//     Flip.from(state, {duration: .5, ease: "power1.inOut",absolute: true ,  stagger: 0.1});
// })
// console.log(boxes)