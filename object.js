let memberArray = ["조상호", "김민재", "지민영"];
console.log("memberArray[2]", memberArray[2]);

let memberObject = {
  manager: "조상호",
  developer: "김민재",
  designer: "지민영",
};

// 값 변경
memberObject.designer = "금손";
console.log("memberObject.designer", memberObject.designer);
console.log("memberObject['designer']", memberObject["designer"]);

// 값 제거
delete memberObject.manager;
console.log("after delete memberObject.manger", memberObject.manger);
