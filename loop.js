i = 1
loop1()


function loop1(){
  if(i ==  50){
    Done()
  }
  
  Test()
  loop2()
  
}




function loop2(){
  setTimeout(loop1 , 1000)
}


function Test(){
  i = i + 1
  console.log("Test1")
  console.log("Test2")
  setTimeout(loop2 , 1000)
}


function Done(){
  prompt('Done')
}