const condition = 1; // true면 resolve, false면 reject

objdata = { status: 200, sucStr: "성공", err: '프로미스함수 조건에 맞지 않습니다' }
const promise = new Promise((resolve, reject) => {
  if (condition) {
    resolve(objdata)
  } else {
    objdata.status = 500
    reject(objdata)
  }
})
 
// 프로미스 객체는 then 체인으로 이후 메서드를 실행 가능

promise
  .then((message) => {
    // 성공(resolve)한 경우 실행
    return { status: message.status, data: message.sucStr }
  })
  .then(result => {
    console.log(result);
  })
  .catch((error) => {
    console.error(error); // 실패(reject)한 경우 실행
  })
  .finally(() => { // 끝나고 무조건 실행
    console.log('무조건');
  });