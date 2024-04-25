import { Seq } from 'immutable';

export default function printBestStudent(object) {
  const seq = Seq(object);
  const getStudent = seq.filter((value) => value.score > 70);

  const student = getStudent.toJS();

  const formatName = (name) => name.chartAt(0).toUpperCase() + name.slice(1);

  Object.keys(student).map((key) => {
    student[key].firstName = formatName(student[key].firstName);
    student[key].lastName = formatName(student[key].lastName);
    return student[key];
  });

  console.log(student);
}
