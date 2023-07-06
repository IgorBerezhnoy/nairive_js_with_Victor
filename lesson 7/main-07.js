//1. Реализуйте функцию, которая принимает параметром подсторку, число повторов и разделитель, а возвращает сторку, состоящую из указанного количества повторов подстроки с использованием разделителя.
// repeatString("yo", 3, " ") => "yo yo yo"
// repeatString("yo", 3, ",") => "yo,yo,yo"
// for или str.repeat()
const repeatString=(string,number,betven)=>{
    let arr=[]
    for (let i = 0; i <number ; i++) {
        arr.push(string)
    }
    return arr.join(betven)
}
console.log(repeatString("yo", 3, " "));
//2. Реализуйте функцию, которая принимает параметром сторку и подстроку, а возвращает true, если строка начинается с указанной подстроки, в противном случае - false. Регистр не учитывается.
// checkStart("Incubator", "inc") => true
// checkStart("Incubator", "yo") => false
// str.startWith() slice indexOF
const checkStart = (world,sliceWorld) => world.slice(0,sliceWorld.length).toLowerCase()===sliceWorld.toLowerCase()


console.log(checkStart("Incubator", "yo"))
console.log(checkStart("Incubator", "inc"))
//3. Реализуйте функцию, которая принимает параметром строку и число (количество символов), а возвращает строку из параметров, обрезанную до указанного количества символов и завершает её многоточием.
//truncateString("Всем студентам инкубатора желаю удачи!", 10) => "Всем студе..."
const truncateString = (string, num) => `${string.slice(num)}...`

console.log(truncateString("Всем студентам инкубатора желаю удачи!", 10))
//4. Реализуйте функцию, которая принимает параметром сторку (предложение) и возвращает самое короткое слово в предложении, если в параметрах пустая строка, то возвращает null.
// getMinLengthWord("Всем студентам инкубатора желаю удачи!") => "Всем"
// getMinLengthWord("") => null
// split()
const getMinLengthWord = (string) => {
  if(string.trim()===undefined){
      return null
  }else {
      const split=string.split(" ")
      let minWord=split[0]
      for (let i = 0; i <split.length ; i++) {
          if(minWord>split[i])
              minWord=split[i]
    return minWord
      }
  }
}
console.log(getMinLengthWord("Всем студентам инкубатора желаю удачи!"))
//5. Реализуйте функцию, которая принимает параметром сторку (предложение) и возвращает то же предложение, где все слова написаны строчными, но начинаются с заглавных букв.
// setUpperCase("всем стУдентам инкуБатора Желаю удачИ!") => "Всем Студентам Инкубатора Желаю Удачи!"
const setUpperCase = (string) => {

    const split=string.toLowerCase().split(" ")
    const arr=[]
    const result=[]
    for (let i = 0; i < split.length; i++) {
       arr.push(split[i][0].toUpperCase())
        result.push(arr[i]+split[i].slice(1,split[i].length))
    }
    return result.join(" ")
}

console.log(setUpperCase("всем стУдентам инкуБатора Желаю удачИ!"))

// !!!!!!!!!!!!!!!!!!После решения 5 задач - поднимаем руку!!!!!!!!

//6. Реализуйте функцию, котрая принимает параметрами строку и подстроку. Если все
// символы подстроки содержаться в стороке - возвращает true, если нет -
// возвращает false. Проверка проводится без учёта регистра и без учётом
// повторяющихся символов.
//* попробовать учитывать повтор символов в подстроке

// isIncludes("Incubator", "Cut") => true
// isIncludes("Incubator", "table") => false
// isIncludes("Incubator", "inbba") => true
// isIncludes("Incubator", "inba") => true
// isIncludes("Incubator", "Incubatorrr")=> true
const isIncludes = (mainString,string) => {
    const trueArr=[]
    for (let i = 0; i < mainString.length; i++) {
        for (let j = 0; j < string.length; j++) {
            if (mainString[i].toLowerCase()===string[j].toLowerCase()){
                trueArr.push(true)
                break
            }
        }
    }
    return trueArr.length===string.length
}

console.log(isIncludes("Incubator", "Cut"))
console.log( isIncludes("Incubator", "table"))
console.log(isIncludes("Incubator", "inbba"))
console.log()
console.log()

