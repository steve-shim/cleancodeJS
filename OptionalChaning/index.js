const response = {
  data: {
    userList: [
      {
        name: "Jang",
        info: {
          tel: "010",
          email: "jang@gmail.com",
        },
      },
    ],
  },
};

function getUserEmailByIndex(userIndex) {
  if (response.data?.userList?.[userIndex]?.info?.email) {
    return response.data.userList[userIndex].info.email;
  }
  return "알 수 없는 에러가 발생했습니다.";
}

console.log(getUserEmailByIndex(0));
//console.log(response.data?.userList?.[0]?.info?.email);
