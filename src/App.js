import './App.css';

function App() {
  const linksArr = [
    {
        id: "1",
        name: "السنوات الدراسية",
        link: "#",
    },
    {
        id: "2",
        name: "المراحل الدراسية",
        link: "#",
    },
    {
        id: "3",
        name: " التخصصات ",
        link: "#",
    },
    {
        id: "4",
        name: "المستخدمين",
        link: "#",
    },
    {
        id: "5",
        name: "الفصول",
        link: "#",
    },
    {
        id: "6",
        name: "الاعدادات",
        link: "#",
    },
    {
        id: "7",
        name: "الخطة الاسبوعية",
        link: "#",
    },
    {   
        id: "8",
        name: "المواد الدراسية",
        link: "#",
    },
    {   
        id: "9",
        name: "المقررات الدراسية",
        link: "#",
    },
    {
        id: "10",
        name: "المحاضرات",
        link: "#",
    },
    {
        id: "11",
        name: "بنك الاسئلة",
        link: "#",
    },
    {
        id: "12",
        name: "الاختبارات الالكترونية ",
        link: "#",
    },
]

  return (
    <div className="App">
         { linksArr.map((lin) => (<a className = "sidebar-link" key = {lin.id} href="{lin.link}"> {lin.name} </a> ) )}    
    </div>
  );
}

export default App;
