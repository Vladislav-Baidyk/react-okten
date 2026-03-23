

export const App = () => {

 const coursesTitleArray:string[] = [
    'JavaScript Complex',
    'Java Complex',
    'Python Complex',
    'QA Complex',
    'Fullstack',
    'Frontend'
];
  return(
    <>
      {coursesTitleArray.map((course,index) => (
        <div key={index}>{course}</div>
      ))}
    </>
  )

};

