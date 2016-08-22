//Функция возвращает субмассив с максимальной суммой элементов
function getMaxSubArraySum(arr) {
     var partial = 0;
    var maxSum = 0;
    for (var i = 0; i < arr.length; i++) {
           partial += arr[i];
           maxSum = Math.max(maxSum, partial );
           if (partial < 0) partial = 0;
     }
return maxSum;
}



alert( getMaxSubArraySum(  [ 100, -9, 2, -3, 5]          ) );
