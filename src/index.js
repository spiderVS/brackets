module.exports = function check(str, bracketsConfig) {
  	
let strToArray = str.split(''); // преобразуем строку str в массив символов
  
// поднимаем эл-ты массива bracketsConfig с нижнего уровня, делаем одноуровневый массив	символов	
let bCflat = [];
for (let i = 0; i < bracketsConfig.length; i++) {
bCflat = bCflat.concat(bracketsConfig[i]);
}

let flag_splice = 0;
let flag = 0;
while (flag <= flag_splice) { // цикл работает пока флаг flag_splice (приращения при удалении двух символов) не перестанет прирастать, т.е. пока не закончатся удаления
	flag++; // флаг
	for (let k = 0; k < bCflat.length; k=k+2) {	//сканим конфиг (по два симовола -> k=k+2)
		for (let l = 0; l < strToArray.length; l++) { //сканим массив со строкой str				
     		if (strToArray[l] == bCflat[k] && strToArray[l+1] == bCflat[k+1]) { //сравниваем два символа из bracketsConfig с двумя символами в строке str
     			strToArray.splice(l, 2); // удаляем из массива strToArray (он же наша входящая строка str) найденные совпадения с конфигом  
				l = l-1; //сдивигаем l на удаленные символы
				flag_splice++; // этот флаг приращивается при удалении двух символов из строки str (при входе в этот цикл)
     		}
    	}			
 	}
}		
	if (strToArray != 0) return false; 
		else return true;
}
