// 불필요한 try...catch 블록을 제거하기 위해
// async 비동기 함수를 wrapping한다
// 이 함수는 새로운 익명 함수를 반환하는데
// 변수에 저장될 애다.

export default function (fn) {
  return (req, res, next) => {
    fn(req, res, next).catch(next);
  };
}
