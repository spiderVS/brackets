module.exports = function check(str, bracketsConfig) {
  	
let strToArray = str.split(''); // преобразуем строку в массив символов
//console.log(strToArray);
  
// поднимаем эл-ты массива bracketsConfig с нижнего уровня, делаем одноуровневый массив		
let bCflat = [];
for (let i = 0; i < bracketsConfig.length; i++) {
bCflat = bCflat.concat(bracketsConfig[i]);
}

//console.log(bCflat);

let flag_splice = 0;
let flag = 0;
while (flag <= flag_splice) {
	flag++;
	for (let k = 0; k < bCflat.length; k=k+2) {		
		for (let l = 0; l < strToArray.length; l++) {				
     		if (strToArray[l] == bCflat[k] && strToArray[l+1] == bCflat[k+1]) {
     			strToArray.splice(l, 2);
				//console.log (strToArray);
				l = l-1;
				flag_splice++;
     		}
    	}			
 	}
}		
	//console.log (strToArray);
	if (strToArray != 0) return false;
		else return true;
}
