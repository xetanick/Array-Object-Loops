console.log("1. Armstrong ədədləri (1-1000 arası):");

for (let num = 1; num <= 1000; num++) {
  let strNum = num.toString();
  let sum = 0;

  for (let digit of strNum) {
    sum += Math.pow(Number(digit), 3);
  }

  if (sum === num) {
    console.log(num);
  }
}


console.log("\n2. Vurma cədvəli (1-10):");

for (let i = 1; i <= 10; i++) {
  let row = "";
  for (let j = 1; j <= 10; j++) {
    row += (i * j).toString().padStart(4, " ");
  }
  console.log(row);
}

console.log("\n3. Array üzərində yaş filteri:");

let arr = [203, 19, 2, 13, 196, 86, 35, 77];


console.log("Yaşı 30-dan böyük olanlar:");
for (let i = 0; i < arr.length; i++) {
  if (arr[i] <= 30) continue;
  console.log(arr[i]);
}


console.log("\nYaşı 30-dan kiçik olanlar:");
for (let i = 0; i < arr.length; i++) {
  if (arr[i] > 30) continue;
  console.log(arr[i]);
}

console.log("\nİlk 30-dan böyük olan rəqəmi tap və dayan:");
for (let i = 0; i < arr.length; i++) {
  if (arr[i] > 30) {
    console.log(arr[i]);
    break;
  }
}
