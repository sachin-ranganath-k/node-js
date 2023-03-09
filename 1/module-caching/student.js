class Student {
  constructor(studName) {
    this.studName = studName;
  }

  getName() {
    return this.studName;
  }

  setName(studName) {
    this.studName = studName;
  }
}

module.exports=new Student("Sachin"); 