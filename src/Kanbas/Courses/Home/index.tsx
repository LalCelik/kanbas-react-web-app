import ModuleList from "../Modules/List";


function Home() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-xl-9">
      <ModuleList/>
      </div>
      <div className="col-xl-3">
      <div className="flex-grow-0 me-2 d-none d-xl-block">
            <h4> Course Status</h4>
            <ul className="buttons">
                <li>
                    <button type="button" className="button-gray"> Unpublish </button>
                    <button type="button" className="button-gray"> Publish </button>
                </li>

                <li><a href="" className="button-gray-small">
                        Import Existing Content </a></li>
                <li>
                    <a href="#" className="button-gray-small"> Import from Commons</a>
                </li>
                <li><a href="#" className="button-gray-small"> Choose Home Pahe</a></li>
                <li> <a href="#" className="button-gray-small"> View Course Stream</a></li>
                <li> <a href="#" className="button-gray-small"> New Announcement</a></li>
                <li><a href="#" className="button-gray-small"> New Analytics</a></li>
                <li><a href="#" className="button-gray-small"> View Course Notifications</a></li>
            </ul>
            <h1> To Do</h1>
            <ul className="list">
                <li className="list"> <a href="#" className="black-link"><i className="fa fa-arrow-circle-down"></i> Grade A1</a>
                </li>
            </ul>

            <h1> Coming Up</h1>
            <a href="#" className="red-link"> View Calendar</a>
            <ul className="list">
                <li className="list"> <a href="#" className="black-link"> Lecture CS4550.12631.202410 Sep 7</a> </li>
                <li className="list"> <a href="#" className="black-link"> Lecture CS4550.12631.202410 Sep 11</a></li>
                <li className="list"> <a href="#" className="black-link"> Lecture CS4550.12631.202410 Sep 11 at 6pm</a></li>
            </ul>
        </div>
        </div>
        </div>
        </div>
  );
}
export default Home;