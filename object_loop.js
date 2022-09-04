let memberArray = ["조상호", "김민재", "지민영"];
console.group("배열 루프");
let i = 0;

while (i < memberArray.length) {
  console.log(memberArray[i]);
  i++;
}
console.groupEnd("배열 루프");

let memberObject = {
  manager: "조상호",
  developer: "김민재",
  designer: "지민영",
};
console.group("오브젝트 루프");

for (let name in memberObject) {
  console.log(name, memberObject[name]);
}

console.groupEnd("오브젝트 루프");
