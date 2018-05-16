var receiveTask = [
  {
    taskTitle: "XXX任务(无反馈)",
    deadlineYear: "2017",
    deadlineMonth: "3",
    deadlineDay: "1",
    urgencyDegree: "紧急",
    taskDescription: "作业是微积分作业第10、11章，第11章第10题不用做",
    feedBack: false,
    taskId: 0,
    mytaskId: 0,
  },
  {
    taskTitle: "离校时间",
    deadlineYear: "2017",
    deadlineMonth: "4",
    deadlineDay: "1",
    urgencyDegree: "一般",
    taskDescription: "请发送该学期离校时间给我",
    feedBack: true,
    taskId: 1,
    mytaskId: 1
  },
]
var sendTask = [
  {
    taskTitle: "微积分作业提交",
    deadlineYear: "2017",
    deadlineMonth: "3",
    deadlineDay: "1",
    urgencyDegree: "紧急",
    taskDescription: "作业是微积分作业第10、11章，第11章第10题不用做",
    feedBack: false,
    taskId: 0,
    mytaskId: 0,
    performer: [
      {
        name: "小三",
        studentNumber: "001",
        feedback: "完成"
      },
      {
        name: "小四",
        studentNumber: "002",
        feedback: "完成"
      },
      {
        name: "小五",
        studentNumber: "003",
        feedback: "未反馈"
      }
    ]
  },
  {
    taskTitle: "离校时间统计",
    deadlineYear: "2017",
    deadlineMonth: "4",
    deadlineDay: "1",
    urgencyDegree: "一般",
    taskDescription: "请发送该学期离校时间给我",
    feedBack: true,
    taskId: 1,
    mytaskId: 1,
    performer: [
      {
        name: "张三",
        studentNumber: "101",
        feedback: "2017-07-01"
      },
      {
        name: "李四",
        studentNumber: "102",
        feedback: "2017-07-02"
      },
      {
        name: "王五",
        studentNumber: "103",
        feedback: "2017-07-03"
      }
    ]
  },
]
var groupList = [
  {
    groupId: 0,
    groupName: "测试群组",
    groupMembers: [
      {
        name: "张三",
        studentNumber: "2016060601010",
        college: "计算机学院",
        major: "计算机科学与技术",
        memberId: 0
      },
      {
        name: "李四",
        studentNumber: "2016060601011",
        college: "计算机学院",
        major: "计算机科学与技术",
        memberId: 1
      },
      {
        name: "王五",
        studentNumber: "2016060601012",
        college: "计算机学院",
        major: "计算机科学与技术",
        memberId: 2
      }
    ]
  },
  {
    groupId: 1,
    groupName: "群组1",
    groupMembers: [
      {
        name: "小三",
        studentNumber: "2017070701010",
        college: "经济与管理学院",
        major: "金融工程",
        memberId: 0
      },
      {
        name: "小四",
        studentNumber: "2017070701011",
        college: "经济与管理学院",
        major: "金融工程",
        memberId: 1
      },
      {
        name: "小五",
        studentNumber: "2017070701012",
        college: "经济与管理学院",
        major: "金融工程",
        memberId: 2
      }
    ]
  },
  {
    groupId: 2,
    groupName: "群组2",
    groupMembers: [
      {
        name: "王二",
        studentNumber: "2018080801010",
        college: "自动化学院",
        major: "自动化工程",
        memberId: 0
      },
      {
        name: "王三",
        studentNumber: "2018080801011",
        college: "自动化学院",
        major: "自动化工程",
        memberId: 1
      },
      {
        name: "王四",
        studentNumber: "2018080801012",
        college: "自动化学院",
        major: "自动化工程",
        memberId: 2
      }
    ]
  }
]
var users = [
  {
    userId: 0,
    userPhoneNumber: "13316152892",
    nickName:"逗比学长",
    account: "zhuweiman",
    key: "666",
    unit:"计算机学院",
    department:"计算机科学与技术",
    studentNumber:"2016060601010",
  },
  {
    userId: 1,
    userPhoneNumber: "13662367699",
    nickName: "逗比学弟",
    account: "lifengjun",
    key: "666",
    unit: "自动化学院",
    department: "自动化工程",
    studentNumber: "2016060601011",
  },

]
module.exports = {
  receiveTask: receiveTask,
  sendTask: sendTask,
  groupList: groupList,
  users: users
}