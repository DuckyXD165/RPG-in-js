Suraj()

function Suraj(){

/*THis is the randomizer, the 0, 3 is the ranges. the bonus var is the variable you can change it. the radom gives the random number but that is a decimal number so i use math.round to round it to the whole number.
You can use if statements after to check what the output was
*/
Bonus = Math.random(0, 3)
Bonus = Math.round(Bonus)







Start()
function Start() {
  Start = prompt('Welcome to the RPG press ENTER to continue:')
  //Saving and loading will be implemented later. (Dont modify)
  gear_level = 0
  money = 10
  level = 1
  base_damage = 5
  health = level * 10 + gear_level * 10
  damage = level * base_damage + gear_level * 5
  ENEMEY_HP = level * 5
  ENEMEY_DAMAGE = level * 5 * .25
  ENEMEY_LEVEL = level
  XP =15 + level 
  if (ENEMEY_HP <= 0) {
    XP - level * 5 ; XP
    money + level * 5 ; money
  }
  
  if (XP <= 0) {
    XP = level * 10
    level + 1
  }
  console.clear()
  Game()




}



function Game() {
  console.log((money), 'money')
  console.log('level', (level))
  console.log((damage), 'damage')
  console.log(('gear level'), (gear_level))
  console.log('HP',(health))
  console.log((XP),'xp till next level',)


}
choice()
function choice() {
  //tell ty to get it to loop 
  
  console.log('press enter to scroll press Y on one you want')
  
  choice = prompt('explore')
  battle()
  function battle() {
  if (choice == "Y"){
    console.clear()
    console.log((money), 'money')
  console.log('level', (level))
  console.log((damage), 'damage')
  console.log(('gear level'), 
  
              (gear_level))
  console.log("a wild monster appears")
  console.log(ENEMEY_HP)
  choice = prompt("would you like to attack Y to attack blank to flee")
  if (choice == 'Y' ) {
     (ENEMEY_HP) - damage ; (ENEMEY_HP)
      (ENEMEY_HP > 0)
      console.log('it attacks')
      health - ENEMEY_DAMAGE ; health
     function battle()
    }
    else{
      console.log('you run away')
      //random here if flee fail or not
      function choice
    }
  }
  }
  
  choice = prompt('shop')
  if (choice == "Y") {
    console.log("test")
    function choice()
  }
  choice = prompt('sell')
  if (choice == "Y") {
    console.clear()
    //im gonna setup explore / combat
    console.log("Test")
    prompt('Im a pause')
    function choice()
  

  }
function choice()
}
//Not a compilation bug just code doing what we dont want it to do
}