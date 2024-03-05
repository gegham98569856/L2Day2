const comments = [
    {
      id: 1,
      text: "0This is the first comment",
      parentId: null,
      replies: [
        {
          id: 2,
          text: "1This is a reply to the first comment",
          parentId: 1,
          replies: [
            {
              id: 3,
              text: "1This is a nested reply",
              parentId: 2,
              replies: [
                {
                    id: 7,
                    text: "1jnnknkThis is commenjjjjjnt",
                    parentId: 3,
                    replies: []
                  },
              ] 
            }
          ]
        }
      ]
    },
    {
      id: 4,
      text: "0This is an independent comment",
      parentId: null,
      replies: [
        {
            id: 5,
            text: "This is comment",
            parentId: 4,
            replies: [
                {
                    id: 6,
                    text: "This is commentgygyhbhbhjb",
                    parentId: 5,
                    replies: []
                  },
            ]
          },
      ]
    },
  ];
  let container = document.getElementById("container")
  function getRandomColor() {
    const red = Math.floor(Math.random() * 256);
    const green = Math.floor(Math.random() * 256);
    const blue = Math.floor(Math.random() * 256);
    const color = `rgb(${red}, ${green}, ${blue})`;
    return color;
  }
  function generateArea(context,commentt){
    let newArea = document.createElement("div")
    newArea.classList.add("newComm")
    context.appendChild(newArea)
    newArea.textContent = commentt
    newArea.style.backgroundColor = getRandomColor()
    return newArea
  }
function generateComments(commentss,context){
    for(let i = 0; i < commentss.length; ++i){
        let comment = commentss[i].text
        const newArea = generateArea(context,comment)
        if(commentss[i].replies){
            generateComments(commentss[i].replies,newArea)
        }
        
    }
}
  generateComments(comments,container)